# Deployment to S3 (preview and production)

This project includes a GitHub Actions workflow that builds the Docusaurus site and deploys it to S3.

Required repository secrets (set these in GitHub Settings → Secrets):

- `AWS_ACCESS_KEY_ID` — IAM access key id with S3 (and CloudFront if used) permissions
- `AWS_SECRET_ACCESS_KEY` — IAM secret key
- `AWS_REGION` — AWS default region (e.g. `us-east-1`)
- `S3_BUCKET_PREVIEW` — S3 bucket used for preview uploads
- `S3_BUCKET_PROD` — S3 bucket used for production publish
- `CLOUDFRONT_DISTRIBUTION_ID` — (optional) CloudFront distribution id for invalidation

Workflow behavior:

- On pull requests: builds the site and syncs the `build/` folder to `s3://$S3_BUCKET_PREVIEW/previews/<commit-sha>/`.
- On push to `main`: builds the site and syncs `build/` to the production bucket root `s3://$S3_BUCKET_PROD/` and optionally invalidates CloudFront.

Local testing:

1. Build locally:

```bash
npm ci
npm run build
```

2. Upload locally (using AWS CLI):

```bash
aws s3 sync build/ s3://your-bucket/ --acl public-read
```

Notes:

- Make sure the IAM keys used by the workflow have `s3:PutObject`, `s3:DeleteObject`, and `s3:ListBucket` on the target buckets. If you use CloudFront invalidation, add `cloudfront:CreateInvalidation`.
- If you want per-PR friendly URLs, the workflow stores previews under `previews/<commit-sha>`.
- If you use the helper script to push GitHub secrets, do not run it with `sudo`; `gh` reads the login for the current user, so root will not see your normal CLI session.

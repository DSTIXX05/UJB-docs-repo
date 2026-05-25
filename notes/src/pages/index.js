import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}

function PortalScreenshot() {
  return (
    <section className={styles.screenshotSection}>
      <div className="container">
        <div className={styles.screenshotCard}>
          <Heading as="h2" className={styles.screenshotTitle}>
            User portal preview
          </Heading>
          <p className={styles.screenshotSubtitle}>
            A quick look at the portal users will interact with.
          </p>
          <img
            className={styles.screenshotImage}
            src="/img/ss/image1.png"
            alt="Screenshot of the user portal"
          />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <PortalScreenshot />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

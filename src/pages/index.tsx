import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="flex hero hero--primary index">
      <div className="container flex index-content">
        <div>
          <Link className="hot-news" to="/use-cases/credit-profile-widget">
            <span className="badge badge--secondary">NEW</span>
            <span> Credit profile widget is now live!</span>
          </Link>
          <h1 className="hero__title">
            The integration layer for small business financial services
          </h1>
          <p className="tagline">{siteConfig.tagline}</p>
          <Link to="/use-cases">
            <button className="button button--secondary button--lg margin-right--md margin-bottom--md ">
              Get started in 5min ⏱️
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

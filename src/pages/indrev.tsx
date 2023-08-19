import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import ir from './indrev.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
	<div className={clsx(styles.overbg, ir.indrev)}></div>
      <div className={clsx("container")}>
		<img src="img/indrev-logo.png" className={styles.logo}></img>
        <h1 className="hero__title">Industrial Revolution</h1>
        <p className="hero__subtitle">An industrial mod made for fabric!</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/pixelpets/intro">
            Documentation
          </Link>
        </div>
      </div>
    </header>
	
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
      <HomepageFeatures />
      </main>
    </Layout>
  );
}

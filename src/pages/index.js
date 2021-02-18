import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Backend as a Service for Hardware Developers',
    //imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        We want to make it easy to get started with IoT projects. Choose your device RTOS SDK, focus on your project features and the cloud communication features is handled by us.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    //imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Using our IoT services like Over the Air Updates, Logging, Data Fowarding and Device Management, you can just focus on your product.
      </>
    ),
  },
  {
    title: 'Standard Protocols',
    //imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        We stand on giants shoulder and try to not reinvent the wheel. We just built the most needed services in IoT using protocols that you already know and love like CoAP, MQTT and LWM2M.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={siteConfig.title}
      description="Making IoT Easy">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/guides')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;

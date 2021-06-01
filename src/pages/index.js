import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'You provide the device, we provide the cloud',
    //imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Golioth makes it easy to get started with IoT projects. The Golioth SDK is built on top of popular RTOSes like Zephyr. Include Golioth features at compile time and your device has advanced communication capabilities.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    //imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        The Golioth SDK includes services like Over the Air Updates, Logging, Data Fowarding and Device Management. Now that cloud communications are taken care of, you can focus on the unique features of your product.
      </>
    ),
  },
  {
    title: 'Standard Protocols',
    //imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        We use IoT protocols that you already know and love like CoAP, MQTT and LWM2M. The resulting devices are more robust, reliable, and reach production sooner.
      </>
    ),
  },
];

const glossary = [
  {
    title: 'Guides',
    //imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Guides include things like quickstart
      </>
    ),
  },
  {
    title: 'Reference',
    //imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Code snippets and how to talk to the features of the Golioth web.
      </>
    ),
  },
  {
    title: 'Support',
    //imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        More information on how to get help
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
      description="The Device You're Developing Is Cloud Ready">
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
              Try Our Quickstart Guide
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
        <div className="container">
        <div className={"row " + styles['section-header']}>
          <h2 className="section__title">Get more out of the Golioth Docs</h2>
          </div>
        </div>

        {glossary && glossary.length > 0 && (
          <section className={styles.glossary}>
            <div className="container">
              <div className="row">
                {glossary.map((props, idx) => (
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

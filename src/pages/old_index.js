import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import LogoImageUrl from "@site/static/img/logo_gradient_white.svg";

const features = [
  {
    title: "You Provide the Device, We Provide the Cloud",
    //imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Golioth makes it easy to get started with IoT projects. The Golioth SDK is built on top of popular RTOSes like Zephyr. Include Golioth features at compile time and your device gets advanced communiation capabilities.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    //imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        The Golioth SDK includes services like Over the Air Updates, Logging, Data
        Fowarding and Device Management. Now that cloud communications are taken care of, you can just on the unique features of your product.
      </>
    ),
  },
  {
    title: "Standard Protocols",
    //imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        We use IoT protocols that you already know and love like CoAP, MQTT and LWM2M. The resulting devices are more robust, reliable, and reach production sooner.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
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
  const { siteConfig = {} } = context;
  return (
    <Layout
      title="Docs homepage"
      description="Golioth: the IoT cloud platform built for hardware"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <LogoImageUrl title="Golioth" className="heroLogo" />
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("/getting-started")}
            >
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
      </main>
    </Layout>
  );
}

export default Home;

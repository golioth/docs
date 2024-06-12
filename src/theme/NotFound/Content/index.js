import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

//Encoding command:
//ffmpeg -i Echo-Coding-loop.gif -c:v libvpx -an -s 272x288 -auto-alt-ref 0 Echo-Coding-loop.webm
import EchoCodingWEBM from '@site/static/img/Echo-Coding-loop.webm';

export default function NotFoundContent({className}) {
  return (
    <main className={clsx(`container margin-vert--xl ${styles.notfound_container}`, className)}>
      <div className="row">
        <div className={`col col--8 col--offset-2 ${styles.notfound}`}>
          <div className={styles.notfound_videobox}>
            <video autoPlay loop muted>
              <source src={EchoCodingWEBM} type="video/webm" />
            </video>
          </div>
          <div>
            <Heading as="h1" className="hero__title">
              <Translate
                id="theme.NotFound.title"
                description="The title of the 404 page">
                Oops! This page was bricked.
              </Translate>
            </Heading>
            <p>
              <Translate
                id="theme.NotFound.p1"
                description="The first paragraph of the 404 page">
                We’re working on it. Can we help you with something else?
              </Translate>
            </p>
          </div>
        </div>
        <div className={`col col--8 col--offset-2 ${styles.notfound_search}`}>
          <form action="/search">
              <input type="text" name="q" placeholder="Search Golioth for IoT Stuff..." />
              <input type="submit" value=">" />
          </form>
        </div>
      </div>
    </main>
  );
}

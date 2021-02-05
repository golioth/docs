import React from 'react';
import Layout from '@theme/Layout';
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function APIDocs() {
  const { siteConfig } = useDocusaurusContext();
  const { customFields : { swaggerUrl } } = siteConfig;
  return (
    <Layout title="API Docs">
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <SwaggerUI url={swaggerUrl} />
      </div>
    </Layout>
  );
}

export default APIDocs;
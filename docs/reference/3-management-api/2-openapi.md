---
title: Open API Docs
hide_title: true
---

import Layout from "@theme/Layout";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BrowserOnly from "@docusaurus/BrowserOnly";

export const APIDocs = () => {
  const swaggerUrl = process.env.SWAGGER_URL;
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: "120%",
      }}
    >
      <BrowserOnly>
        {() => {
          const Buffer = require("buffer/").Buffer;
          window.Buffer = Buffer;
          return <SwaggerUI url={swaggerUrl} />;
        }}
      </BrowserOnly>
    </div>
  );
};

<APIDocs />

---
title: Management API
---

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
export const SwaggerUrl = () => {
  const { siteConfig } = useDocusaurusContext();
  const swaggerUrl =
    siteConfig.customFields.swaggerUrl || "https://api.golioth.io/swagger.json";
  return <a href={swaggerUrl}>Swagger / OpenAPI v2</a>;
};

export const OpenAPIUrl = () => {
  const { siteConfig } = useDocusaurusContext();
  const openAPIUrl =
    siteConfig.customFields.openApiUrl || "https://api.golioth.io/openapi.json";
  return <a href={openAPIUrl}>OpenAPI v3</a>;
};

All Golioth platform operations can be performed via the Management API.

## API Usage

The API is documented using OpenAPI definitions. You can access the [API
Reference Page](/reference/management-api/openapi) to check all endpoints and
methods that can be used. For more information on authentication check the
[Authentication Guide](/reference/management-api/auth).

## Importing OpenAPI/Swagger Definitions

You can test the Golioth API using a Graphical User Interface (GUI) like Postman
or Insomnia. Both <OpenAPIUrl/> and <SwaggerUrl/> definitions are available.

- https://learning.postman.com/docs/integrations/available-integrations/working-with-openAPI/
- https://support.insomnia.rest/article/172-importing-and-exporting-data

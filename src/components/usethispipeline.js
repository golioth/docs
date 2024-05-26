import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import SvgUseThisPipeline from '@site/static/img/usethispipeline.svg';

export default function Pipeline({link}) {
  var query = link.split("?");
  var params = query[1].split("&");
  var name = params[0].split("name=")[1];
  var pipeline = params[1].split("pipeline=")[1];
  return (
  <>
    <CodeBlock language="yaml" title={"Pipeline: " + decodeURI(name)} pipeline_share_link={link}>
      {atob(pipeline)}
    </CodeBlock>
  </> )
}

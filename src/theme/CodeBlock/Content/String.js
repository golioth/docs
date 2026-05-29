import React from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import {
  CodeBlockContextProvider,
  createCodeBlockMetadata,
  useCodeWordWrap,
} from '@docusaurus/theme-common/internal';
import Container from '@theme/CodeBlock/Container';
import Content from '@theme/CodeBlock/Content';
import Buttons from '@theme/CodeBlock/Buttons';
import Title from '@theme/CodeBlock/Title';
import styles from './styles.module.css';
import SvgUseThisPipeline from '@site/static/img/usethispipeline.svg';

export default function CodeBlockString({
  children,
  className,
  metastring,
  title: titleProp,
  pipeline_share_link: pipelineShareLinkProp,
  showLineNumbers: showLineNumbersProp,
  language: languageProp,
}) {
  const {prism} = useThemeConfig();
  const metadata = createCodeBlockMetadata({
    code: children,
    className,
    metastring,
    magicComments: prism.magicComments,
    defaultLanguage: prism.defaultLanguage,
    language: languageProp,
    title: titleProp,
    showLineNumbers: showLineNumbersProp,
  });
  const wordWrap = useCodeWordWrap();
  const pipeline = pipelineShareLinkProp;

  return (
    <CodeBlockContextProvider metadata={metadata} wordWrap={wordWrap}>
      <Container as="div" className={metadata.className}>
        {metadata.title && (
          <div className={styles.codeBlockTitleBlock}>
            <div className={styles.codeBlockTitle}>
              <Title>{metadata.title}</Title>
            </div>
            {pipeline && (
              <div className={styles.codeBlockTitleRight}>
                <a href={pipeline} target="_blank" rel="noreferrer">
                  <SvgUseThisPipeline className={styles.useThisPipelineSvg} />
                </a>
              </div>
            )}
          </div>
        )}
        <div className={styles.codeBlockContent}>
          <Content />
          <Buttons />
        </div>
      </Container>
    </CodeBlockContextProvider>
  );
}

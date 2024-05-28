import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import AdmonitionLayout from '@theme/Admonition/Layout';
import IconUsage from '@theme/Admonition/Icon/Usage';

const infimaClassName = 'alert alert--success';
const defaultProps = {
  icon: <IconUsage />,
  title: (
    <Translate
      id="theme.admonition.usage"
      description="The default label used for the Usage admonition (:::usage)">
      Incurs Usage
    </Translate>
  ),
};

export default function AdmonitionTypeUsage(props) {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      className={clsx(infimaClassName, props.className)}>
      {props.children}
    </AdmonitionLayout>
  );
}


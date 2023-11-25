import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import AdmonitionLayout from '@theme/Admonition/Layout';
import IconGolioth from '@theme/Admonition/Icon/Golioth';

const infimaClassName = 'alert alert--golioth';
const defaultProps = {
  icon: <IconGolioth />,
  title: (
    <Translate
      id="theme.admonition.golioth"
      description="The default label used for the Golioth admonition (:::golioth)">
      golioth
    </Translate>
  ),
};

export default function AdmonitionTypeGolioth(props) {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      className={clsx(infimaClassName, props.className)}>
      {props.children}
    </AdmonitionLayout>
  );
}

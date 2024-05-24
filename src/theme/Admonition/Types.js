import React from 'react';
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';
import AdmonitionTypeGolioth from '@theme/Admonition/Type/Golioth';
import AdmonitionTypeUsage from '@theme/Admonition/Type/Usage';

const admonitionTypes = {
  ...DefaultAdmonitionTypes,
  golioth: AdmonitionTypeGolioth,
  usage: AdmonitionTypeUsage,
};

export default admonitionTypes;

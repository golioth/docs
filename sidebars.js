const fs = require('fs')

const mapFiles = (root,type) => {
  return fs.readdirSync(`./docs/${root}/${type}`)
    .filter( f => f.endsWith('.md') || f.endsWith('.mdx'))
    .map( f => f.replace('.mdx','').replace('.md', '') )
    .map( f => {
      const parts = f.split('-')
      if (Number.isInteger(parseInt(parts[0],10))) {
        parts.shift()
        return parts.join('-')
      }
      return f
    })
    .map( f => `${root}/${type}/${f}`)
}

// const guides = {
//   /*'Quick Start Test' : [
//     'guides/getting-started/installing',
//     'guides/getting-started/authentication',
//     'guides/getting-started/create-project',
//     'guides/getting-started/manage-devices',
//     'guides/getting-started/authorize-devices',
//     'guides/device-sdk/install-device-sdk',
//     'guides/device-sdk/install-device-toolchain',
//     'guides/device-sdk/run-sample',
//     'guides/logging/searching-logs',
//   ],*/
//   'Quick Start' : mapFiles('guides','quickstart'),
//   'Platform Guide': mapFiles('guides','getting-started'),
//   'Device SDK': mapFiles('guides','device-sdk'),
//   "Light DB": mapFiles('guides','lightdb'),
//   "Logging and Diagnostics": mapFiles('guides','logging'),
//   "Over the Air Updates": mapFiles('guides','ota'),
// }

const guides = [
  'guides/introduction',
  'guides/speedrun',
  {
    type: 'category',
    label: 'Quickstart',
    items: mapFiles('guides','quickstart'),
  },
  'guides/creating-an-app',
  {
    type: 'category',
    label: 'Platform Guide',
    items: mapFiles('guides', 'getting-started'),
  },
  {
    type: 'category',
    label: 'Device SDK',
    items: mapFiles('guides', 'device-sdk'),
  },
  {
    type: 'category',
    label: 'LightDB',
    items: mapFiles('guides', 'lightdb'),
  },
  {
    type: 'category',
    label: 'LightDB Stream',
    items: mapFiles('guides', 'lightdb-stream'),
  },
  {
    type: 'category',
    label: 'REST API',
    items: mapFiles('guides', 'rest-api'),
  },
  {
    type: 'category',
    label: 'Logging and Diagnostics',
    items: mapFiles('guides', 'logging'),
  },
  {
    type: 'category',
    label: 'Over the Air Updates',
    items: mapFiles('guides', 'ota'),
  },
]

const reference = [
  'reference/home',
  'reference/api-docs',
  {
    type: 'category',
    label: "Zephyr SDK",
    items: [
      //'reference/coming-soon',
      'reference/zephyr/getting-started',
      { 'Samples': mapFiles('reference', 'zephyr/samples') }
    ],
  },
  //"ESP-IDF SDK" : ['references/coming-soon'],
  {
    type: 'category',
    label: 'Command Line Tools',
    items:  [
      { 'goliothctl': mapFiles('reference','goliothctl') },
      { 'coap' : mapFiles('reference','coap') },
    ],
  },
]

const support = [
  'support/home',
  {
    type: 'category',
    label: "GitHub",
    items: [
      //'reference/coming-soon',
      'support/github/submit-issue',
      'support/github/submit-pr',
      
    ],
  },
]

module.exports = {
  support,
  reference,
  guides
};

const fs = require('fs')

const mapFiles = (root,type) => {
  return fs.readdirSync(`./docs/${root}/${type}`)
    .filter( f => f.endsWith('.md'))
    .map( f => f.replace('.md',''))
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

const guides = {
  'Getting Started': mapFiles('guides','getting-started'),
  "Logging and Diagnostics": mapFiles('guides','logging'),
  "Over the Air Updates": mapFiles('guides','ota'),
  'Advanced': mapFiles('guides','advanced'),
}

const reference = [
  'reference/home',
  'reference/api-docs',
  {
    type: 'category',
    label: "Zephyr SDK",
    items: ['reference/coming-soon'],
  },
  //"ESP-IDF SDK" : ['references/coming-soon'],
  {
    type: 'category',
    label: 'Command Line Tools',
    items:  [
      { 'goliothctl': mapFiles('reference','goliothctl') },
      { 'gurl' : mapFiles('reference','gurl') },
    ],
  },
]

module.exports = {
  reference,
  guides
};

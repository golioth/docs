const fs = require('fs')

const mapFiles = (type) => {
  return fs.readdirSync(`./docs/${type}`)
    .filter( f => f.endsWith('.md'))
    .map( f => f.replace('.md',''))
    .map( f => `${type}/${f}`)
}

const docs = {
  'Getting Started': mapFiles('getting-started'),
  'Advanced': mapFiles('advanced'),
  'Command Line Tools': [
    { 'goliothctl': mapFiles('goliothctl') },
    { 'gurl' : mapFiles('gurl') },
  ]
}

module.exports = {
  someSidebar: {
    //Docusaurus: ['doc1', 'doc2', 'doc3'],
    //Features: ['mdx'],
    ...docs,
  },
};

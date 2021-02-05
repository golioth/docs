const fs = require('fs')

const mapFiles = (type) => {
  return fs.readdirSync(`./docs/${type}`)
    .map( f => f.replace('.md',''))
    .map( f => `${type}/${f}`)
}

const docs = {
  'goliothctl': mapFiles('goliothctl'),
  'gurl' : mapFiles('gurl'),
}

module.exports = {
  someSidebar: {
    //Docusaurus: ['doc1', 'doc2', 'doc3'],
    //Features: ['mdx'],
    'Getting Started': fs.readdirSync(`./docs/getting-started`).map( f => 'getting-started/' + f.replace('.md','')),
    ...docs,
  },
};

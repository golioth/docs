const fs = require('fs')

const mapFiles = (type) => {
  return fs.readdirSync(`./docs/${type}`)
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
    .map( f => `${type}/${f}`)
}

const docs = {
  'Getting Started': mapFiles('getting-started'),
  "Over the Air Updates": mapFiles('ota'),
  "Logging and Diagnostics": ['coming-soon'],
  "Zephyr SDK" : ['coming-soon'],
  // "ESP-IDF SDK" : ['coming-soon'],
  'Advanced': mapFiles('advanced'),
  'Command Line Tools': [
    { 'goliothctl': mapFiles('goliothctl') },
    { 'gurl' : mapFiles('gurl') },
  ],
}

module.exports = {
  someSidebar: {
    ...docs,
  },
};

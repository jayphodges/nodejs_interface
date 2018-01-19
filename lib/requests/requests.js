const $ = require('jquery')
const responses = require('../response/response.js')

const getGraph = (path) => {
  $.get(path , {method: 'GET'})
    .then( response => responses.drawGraph(response))
    .catch( error => {console.log( { error })
  })
}

const getTable = (path, id1, id2) => {
  $.get(path , {method: 'GET'})
    .then( response => responses.drawTable(response, id1, id2))
    .catch( error => {console.log( { error })
  })
}

const getStateTable = (path) => {
  $.get(path , {method: 'GET'})
    .then( response => responses.drawStateTable(response))
    .catch( error => {console.log( { error })
  })
}


module.exports = {
  getGraph,
  getTable,
  getStateTable
}

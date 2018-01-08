const $ = require('jquery')
const url = 'http://localhost:3000/api/v1/'

const getResponse = (path) => {
  $.get(url + path , {method: 'GET'})
    .then( response => console.log(response))
    .catch( error => {console.log( { error })
  })
}


module.exports = {
  getResponse
}

const $ = require('jquery')
const response = require('../response/response.js')
const request = require('../requests/requests.js')
const url = 'http://107.170.199.192:8080/api/v1/'

$( document ).ready(function() {

  $(":button").on('click', function(event) {
    const db = this.id
    const selection = $(`input[name=${db}Radios]:checked`).val()
    const name = $(`#${db}Name`).val()
    const year = $(`#${db}Year`).val()
    const state = $(`#stateId`).val().toUpperCase()
    $("#results").empty()
    if (selection === "option1") {
      request.getGraph((url + "name/" + name))
    } else if (selection === "option2") {
      request.getTable((url + "year/" + name), "Year", "Count")
    } else if (selection === "option3") {
      request.getTable((url + "/name/year/" + year), "Name", "Count")
    } else if (selection === "option4") {
      request.getStateTable((url + state + "/most/" + name))
    } else if (selection === "option5") {
      request.getGraph((url + state + "/name/" + name ))
    }
  })

})

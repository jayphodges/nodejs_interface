const $ = require('jquery')
const response = require('../response/response.js')
const request = require('../response/response.js')
const url = 'http://localhost:3000/api/v1/'

const drawGraph = (male, female) => {
  $("#results").append(`<canvas id="myChart" width="400" height="200"></canvas>`)
  const ctx = document.getElementById("myChart")
  console.log(male)
  console.log(female)
  const years = [2000,2001,2001,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014]
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: years,
      datasets: [
        {
          data: male,
          label: "Male",
          borderColor: "#3e95cd",
          fill: false
        },
        {
          data: female,
          label: "Female",
          borderColor: "#f45342",
          fill: false
        }
      ]
    }
  })
}

const drawStateTable = (response) => {
  console.log(response)
  $("#results").append(`
    <table class="table table-bordered" >
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Year</th>
          <th scope="col">State</th>
          <th scope="col">Count</th>
        </tr>
      </thead>
      <tbody id="resultsTable">
      </tbody>
    </table>
    `)
    let i = 0
    const table = $("#resultsTable")
    response.forEach(result => {
      i++
      table.append(`
        <tr><th scope="row">${i}</th>
          <td>${result[2]}</td>
          <td>${result[1]}</td>
          <td>${result[0]}</td></tr>
        `)
    })
}

const drawTable = (response, id1, id2) => {
  $("#results").append(`
    <table class="table table-bordered" >
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">${id1}</th>
          <th scope="col">${id2}</th>
        </tr>
      </thead>
      <tbody id="resultsTable">
      </tbody>
    </table>
    `)
    let i = 0
    const table = $("#resultsTable")
    response.forEach(result => {
      i++
      table.append(`
        <tr><th scope="row">${i}</th>
          <td>${result[0]}</td>
          <td>${result[1]}</td></tr>
        `)
    })
}

$( document ).ready(function() {

  $(":button").on('click', function(event) {
    const db = this.id
    const selection = $(`input[name=${db}Radios]:checked`).val()
    const name = $(`#${db}Name`).val()
    const year = $(`#${db}Year`).val()
    const state = $(`#stateId`).val()
    $("#results").empty()
    if (selection === "option1") {
      // name popularity by year
      $.get(url + "name/" + name , {method: 'GET'})
        .then( response => drawGraph(response.male, response.female))
        .catch( error => {console.log( { error })
      })
    } else if (selection === "option2") {
      // Most popular name in a year
      $.get(url + "year/" + name , {method: 'GET'})
        .then( response => drawTable(response, "Year", "Count"))
        .catch( error => {console.log( { error })
      })
    } else if (selection === "option3") {
      // Year name was most popular
      $.get(url + "/name/year/" + year , {method: 'GET'})
        .then( response => drawTable(response, "Name", "Count"))
        .catch( error => {console.log( { error })
      })
    } else if (selection === "option4") {
      // State Graph
      $.get(url + state + "/most/" + name , {method: 'GET'})
        .then( response => drawStateTable(response))
        .catch( error => {console.log( { error })
      })
    } else if (selection === "option5") {
      $.get(url + state + "/name/" + name , {method: 'GET'})
        .then( response => drawGraph(response.male, response.female))
        .catch( error => {console.log( { error })
      })
    }
  })
})

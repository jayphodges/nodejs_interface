const $ = require('jquery')
const response = require('../response/response.js')
const request = require('../response/response.js')
const url = 'http://localhost:3000/api/v1/'

const drawGraph = (male, female) => {
  const ctx = document.getElementById("myChart")
  console.log(Array.from(male))
  debugger

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

$( document ).ready(function() {

  $("#nationalSubmit").on('click', function(event) {
    console.log(($('input[name=nationalRadios]:checked').val()))
    const selection = $('input[name=nationalRadios]:checked').val()
    const name = $('#nationalName').val()
    const year = $('#nationalName').val()
    console.log(selection)
    console.log(name)
    if (selection === "option1") {
      // name popularity by year

      $.get(url + "name/" + name , {method: 'GET'})
        .then( response => drawGraph(response.male, response.female))
        .catch( error => {console.log( { error })
      })
    } else if (selection === "option2") {
      // Most popular name in a year
      $.get(url + "/name/" + name , {method: 'GET'})
        .then( response => console.log(response))
        .catch( error => {console.log( { error })
      })
    } else if (selection === "option3") {
      // Year name was most popular
      $.get(url + "/name/" + name , {method: 'GET'})
        .then( response => console.log(response))
        .catch( error => {console.log( { error })
      })
    }
  })

  $("#stateSubmit").on('click', function(event) {
    const selection = $('input[name=nationalRadios]:checked').val()
    const name = $('#nationalName').val()
    const year = $('#nationalName').val()
    console.log(selection)
    console.log(name)
    if (selection === "option1") {
      $.get(url + "/name/" + name , {method: 'GET'})
        .then( response => console.log(response))
        .catch( error => {console.log( { error })
      })
    } else if (selection === "option2") {
      $.get(url + "/name/" + name , {method: 'GET'})
        .then( response => console.log(response))
        .catch( error => {console.log( { error })
      })
    } else if (selection === "option2") {
      $.get(url + "/name/" + name , {method: 'GET'})
        .then( response => console.log(response))
        .catch( error => {console.log( { error })
      })
    }

  })

  // $(":button").on('click', function(event) {
  //   console.log(this)
  //     // if (this.id == "name") {
  //     //   const name = $('.name_search').val()
        // $.get(url + name , {method: 'GET'})
        //   .then( response => drawGraph(response.male, response.female))
        //   .catch( error => {console.log( { error })
        // })
  //     // } else {
  //     //   console.log("year worked")
  //     // }
  //   })

})

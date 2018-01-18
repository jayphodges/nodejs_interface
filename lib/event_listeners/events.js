const $ = require('jquery')
const response = require('../response/response.js')
const request = require('../response/response.js')
const url = 'http://165.227.48.218:8080/api/v1/name/'

const drawGraph = (male, female) => {
  const ctx = document.getElementById("myChart")
  var years = [2000,2001,2001,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014]
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

  $("#stateSubmit").on('click', function(event) {
    console.log(($('input[name=nationalRadios]:checked').val()))
  })

  $("#nationalSubmit").on('click', function(event) {
    const selection = $('input[name=nationalRadios]:checked').val()
    
  })

  // $(":button").on('click', function(event) {
  //   console.log(this)
  //     // if (this.id == "name") {
  //     //   const name = $('.name_search').val()
  //     //   $.get(url + name , {method: 'GET'})
  //     //     .then( response => drawGraph(response.male, response.female))
  //     //     .catch( error => {console.log( { error })
  //     //   })
  //     // } else {
  //     //   console.log("year worked")
  //     // }
  //   })

})

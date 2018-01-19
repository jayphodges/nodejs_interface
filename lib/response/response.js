
const drawGraph = (response) => {
  $("#results").append(`<canvas id="myChart" width="400" height="200"></canvas>`)
  const ctx = document.getElementById("myChart")
  const years = [2000,2001,2001,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014]
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: years,
      datasets: [
        {
          data: response.male,
          label: "Male",
          borderColor: "#3e95cd",
          fill: false
        },
        {
          data: response.female,
          label: "Female",
          borderColor: "#f45342",
          fill: false
        }
      ]
    }
  })
}

const drawStateTable = (response) => {
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

module.exports = {
  drawGraph,
  drawStateTable,
  drawTable
}

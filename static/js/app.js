//option value="dataset1">DataSet1</option>
//var list = d3.select("#selDataset").append('option').text();
//console.log(list);  

// Use d3.json() to fetch data from samples.JSON file
// Incoming data is internally referred to as incomingData
d3.json("../data/samples.json").then((importedData) => {

  // console.log(importedData);
  var data = importedData;
  //Append option text and value to list item using the given names from the json data
  d3.select("#selDataset")
      .selectAll(null)
      .data(data.names)
      .enter()
      .append('option')
      .text(function (d) { return d; }) // text showed in the menu
      .attr("value", function (d) { return d; }) // value kept in the menu
  }) 

  //var options = list.selectAll("option").data(bbData.name).text(function (d) {return bbData.name;});
  //text(data.name).property("value",data.name);
  //console.log(list);
  //list.append("Option").value(data.name);


//console.log(list);

function optionChanged(selectedName) {
   console.log(selectedName);
}

  // Trace1 for the Greek Data
  /* var trace1 = {
    x: data.map(row => row.greekSearchResults),
    y: data.map(row => row.greekName),
    text: data.map(row => row.greekName),
    name: "Greek",
    type: "bar",
    orientation: "h"
  };

  // data
  var chartData = [trace1];

  // Apply the group bar mode to the layout
  var layout = {
    title: "Greek gods search results",
    margin: {
      l: 100,
      r: 100,
      t: 100,
      b: 100
    }
  };

  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("plot", chartData, layout);
});
    function filterMovieRatings(movie) {
      return movie.imdbRating > 8.9;
    }

 *///names
//metadata":[{"id": 940, "ethnicity": "Caucasian", "gender": "F", "age": 24.0, "location": "Beaufort/NC", "bbtype": "I", "wfreq": 2.0}
//samples::id,otu_ids,sample_values,otu_labels

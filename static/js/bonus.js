// Use d3.json() to fetch data from samples.JSON file
// Incoming data is internally referred to as incomingData
/* d3.json("../data/samples.json").then((importedData) => {

  // console.log(importedData);
  var data = importedData;
  console.log(data.names);
}
 */  // Trace1 for the Greek Data
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

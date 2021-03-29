//option value="dataset1">DataSet1</option>
//var list = d3.select("#selDataset").append('option').text();
//console.log(list);  

var data = {};
var ind = 0;

// Use d3.json() to fetch data from samples.JSON file
// Incoming data is internally referred to as incomingData
d3.json("../data/samples.json").then((importedData) => {
  console.log(importedData);
  data = importedData;
  metadata = importedData.metadata;
  //Append option text and value to list item using the given names from the json data
  d3.select("#selDataset")
      .selectAll(null)
      .data(data.names)
      .enter()
      .append('option')
      .text(function (d) { return d; }) // text showed in the menu
      .attr("value", function (d) { return d; }) // value kept in the menu

      //return rows.map(function(row) {
      //return row[index];
      /* console.log('hello start');
      console.log(data.metadata[0].id);
      console.log(data.metadata[0].ethnicity);
      console.log(data.metadata[0].gender);
      console.log(data.metadata[0].age);
      console.log(data.metadata[0].location);
      console.log(data.metadata[0].bbtype);
      console.log(data.metadata[0].wfreq);
      console.log('hello end'); */
      
  }) 

  //var options = list.selectAll("option").data(bbData.name).text(function (d) {return bbData.name;});
  //text(data.name).property("value",data.name);
  //console.log(list);
  //list.append("Option").value(data.name);


  /* function filterNames(person) {
    return parseInt(person.Increase_from_2016) > 15000;
  }
  
  // 2. Use filter() to pass the function as its argument
  var filteredCities = top15Cities.filter(filterCities);
  
  //  Check to make sure your filtered your cities.
  console.log(filteredCities);
  
  // 3. Use the map method with the arrow function to return all the filtered cities.
  var cities = filteredCities.map(city => city.City); */
  

//console.log(list);

function optionChanged(selectedName) {
   console.log(selectedName);
   //Find the index of the id array matching the value of the selectedName
   ind = data.metadata.findIndex(x => x.id === parseInt(selectedName));
   console.log(ind);
   //d3.select("sample-metadata").html() = '';
   var profile = d3.select("sample-metadata");
   console.log(profile);
   //profile = '';
   //profile.innerHTML = 'Id:' + data.metadata[ind].id;
   //console.log(ul);
   //console.log(data.metadata[ind].id);
   // Use chaining to create a new element and set its text
   //var li = d3.select("ul").append("li").text(data.metadata[ind].id);
   //onsole.log(li);


   

   //sample-metadata

//   var filteredElements = data.filter(function(item, index) { f = index; return item.names == selectedName; });
//   console.log(filteredElements);
   //console.log(data.findIndex(x => x.metadata.id === selectedName));
   //index = data.findIndex(x => x.names ===selectedName);
   //index = data.names.findIndex(selectedName);
   //console.log(data.metadata[index].id);
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

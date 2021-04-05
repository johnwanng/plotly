// Store the json file content
var data = {};
// Store the index
var ind = 0;
// Store the pointer path to be used in the layout of the meter gauage 
var pathArr =    {'0': 'M 0.17 0.5 L 0.34 0.5 L 0.35 0.5 Z', //0
                  '1': 'M 0.33 0.5 L 0.175 0.565 L 0.35 0.5 Z', //1
                  '2': 'M 0.33 0.5 L 0.205 0.625 L 0.35 0.5 Z', //2
                  '3': 'M 0.33 0.5 L 0.26 0.665 L 0.35 0.5 Z', //3
                  '4': 'M 0.33 0.5 L 0.315 0.685 L 0.35 0.5 Z', //4
                  '5': 'M 0.33 0.5 L 0.37 0.685 L 0.35 0.5 Z', //5
                  '6': 'M 0.33 0.5 L 0.43 0.665 L 0.35 0.5 Z', //6
                  '7': 'M 0.33 0.5 L 0.475 0.625 L 0.35 0.5 Z', //7
                  '8': 'M 0.33 0.5 L 0.505 0.56 L 0.35 0.5 Z', //8
                  '9': 'M 0.33 0.5 L 0.51 0.5 L 0.35 0.5 Z'}; //9                  

// Use d3.json() to fetch data from samples.JSON file
// Incoming data is internally referred to as incomingData
d3.json("data/samples.json").then((importedData) => {
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
  //Dispolay the demographic info for the first element of the array
  optionChanged(data.metadata[0].id);
  }) 
 
 
// Function to populate the data in the Demographic Info
function populateDemoGraphic() {  
  //Prepare the content of the Demographic info
  var divText = 'id: ' + data.metadata[ind].id + '<br>';
  divText = divText + 'ethnicity: ' + data.metadata[ind].ethnicity + '<br>';
  divText = divText + 'gender: ' + data.metadata[ind].gender + '<br>';
  divText = divText + 'age: ' + data.metadata[ind].age + '<br>';
  divText = divText + 'location: ' + data.metadata[ind].location + '<br>';
  divText = divText + 'bbtype: ' + data.metadata[ind].bbtype + '<br>';
  divText = divText + 'wfreq: ' + data.metadata[ind].wfreq + '<br>';
  //Initialise it to blank
  d3.select("#sample-metadata").html('');
  //Assign the actual Demographic info
  d3.select("#sample-metadata").html(divText);
}
 

function plotHorizontalBar() {
  //Append 'OTU ' at the front of the each otu_ids 
  barOtu_ids = otu_ids.map(function(e) {return 'OTU ' + e});
  console.log(barOtu_ids.slice(0,10));
  console.log(samples.sample_values.slice(0,10));
  console.log(samples.otu_labels.slice(0,10));
  //Prepare var chart attributes
  var bar_data = [{
    type: 'bar',
    // Display the first 10 elements of the sample_values in reverse order as the x axis
    x: samples.sample_values.slice(0,10).reverse(),
    // Display the first 10 elements of the otu_ids in reverse order as the y axis
    y: barOtu_ids.slice(0,10).reverse(),
    // Need to display the first 10 elemenets of the otu_lables in reverse order as the Hover texts
    text : samples.otu_labels.slice(0,10).reverse(),
    // Horizontal type of chart
    orientation: 'h'
  }] 
  //Display bar char
  Plotly.newPlot('bar', bar_data);
  }


  function plotBubbleChart() {
    /* 
    Use otu_ids for the x values.
    Use sample_values for the y values.
    Use sample_values for the marker size.
    Use otu_ids for the marker colors.
    Use otu_labels for the text values. */
    
  console.log(otu_ids);

    var trace1 = {
        x: samples.otu_ids,
        y: samples.sample_values,
        mode: 'markers',
        marker: {
          size: samples.sample_values,
          color: samples.otu_ids
        },
        text: samples.otu_labels
        };
      
      var bubble_data = [trace1];
      
      var layout = {
        showlegend: false,
        xaxis: {
          title: {
            text: 'UTU ID'
          }
        }
      };
      
      Plotly.newPlot('bubble', bubble_data, layout);
    }

  function displayGaugeChart() {
    //You will need to modify the example gauge code to account for values ranging from 0 through 9.
    
    //Prepare the attribute fopr the meter chart
    var meter_chart = [{
      values: [90, 10, 10, 10, 10, 10,10, 10, 10,10],
      labels: [" ", "0-1", "1-2", "2-3", "3-4", "4-5","5-6","6-7","7-8","8-9"],
      marker: {
          colors: [
              'rgb(255, 255, 255)',
              'rgb(247, 242, 236)',
              'rgb(243, 240, 229)',
              'rgb(233, 231, 201)',
              'rgb(229, 233, 177)',
              'rgb(213, 229, 149)',
              'rgb(183, 205, 139)',
              'rgb(135, 192, 128)',
              'rgb(133, 189, 139)',
              'rgb(128, 182, 134)'
          ]
      },
      domain: {"x": [0, 0.68]},
      name: "Gauge",
      hole: .5,
      type: "pie",
      direction: "clockwise",
      rotation: 90,
      showlegend: false,
      textinfo: "label",
      textposition: "inside",
      hoverinfo: "none"
  }]

    var layout = {
      title: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week",
      shapes: [
          {
              'type': 'path',
              //Use the pathArr list according to the number given from the wfreg attribute of the metadata  
              'path': pathArr[data.metadata[ind].wfreq],
              'fillcolor': 'rgba(134,0,0,255)',
              'line': {
                  'width': 0.5
              },
              'xref': 'paper',
              'yref': 'paper'
          }
      ],
      annotations: [
          {
              'xref': 'paper',
              'yref': 'paper',
              'x': 0.34,
              'y': 0.45,
              'text': data.metadata[ind].wfreq,
              'showarrow': false
          }
      ]
  };

    //console.log('patharray=' + pathArr[data.metadata[ind].wfreq]);
    Plotly.newPlot('gauge', meter_chart, layout);
  }
 
//Function to detect a change in the list item
function optionChanged(selectedName) {
   //console.log(selectedName);
   //Find the index of the id array matching the value of the selectedName
   ind = data.metadata.findIndex(x => x.id === parseInt(selectedName));
   //Assign the specific index of the samples list to samples varible so the below functions can use
   samples = data.samples[ind];
   //Assign the otu_ids variable to the otu_ids list elements so the below functions can use 
   otu_ids = samples.otu_ids;
   //console.log(ind);
   //Populate Demogrpahic 
   populateDemoGraphic();
   //Display Horizontal Bar chart
   plotHorizontalBar();
   //Display Bubble chart
   plotBubbleChart();
   //Display Gauge chart
   displayGaugeChart();
}
   

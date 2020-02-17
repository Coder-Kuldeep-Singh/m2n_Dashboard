              var ages = ["0-12","13-19","20-30","31-40","41-50","51-60","60-100"];
              // For drawing the lines
              var statis = [0,1,2,15,19,0,0];
                var colors = ['#216583','#2d3561','#f3826f','#ffb961','#49beb7','#407088','#5edfff'];

                var config = { 
                type: 'bar',
                data: {
                labels: ages,
                datasets: [{
               label:"Age Group" ,
              data:statis,
              fill: false,
              borderColor: "white",
                      backgroundColor:"#272d37"
                }]
              },
            options: {
              // pan: {
              //       enabled: true,
              //       mode: 'x',
              //     },
              // zoom: {
              //       enabled: true,                      
              //       mode: 'y',
              //     },
                 scales: {
                      yAxes: [{
                        scaleLabel: {
                          display: true,
                      labelString: 'Number Of Visitors',
                      fontSize: 20,
                      fontColor:'black'
                                      }
                              }],
                              xAxes: [{
                        scaleLabel: {
                          display: true,
                      labelString: '  Age',
                      fontSize: 20,
                      fontColor:'black'
                                      }
                              }]
                          },
                    


              title: {
                      display: true,
                      text: 'Visitors By Age group',
                      fontSize:15,
                      fontColor:'#3C4858'
                            },
              layout: {
                        padding: {
                              left: 0,
                              right: 0,
                              top: 20,
                              bottom: 20
                                  }
                        },
                          
             legend: {
             display: false
                         },
               tooltips: {
                backgroundColor: '#c5980d',

                      callbacks: {
                      label: function(tooltipItem) {
                      console.log(tooltipItem)
                       return tooltipItem.yLabel;
                }
             }
          }

                 }
  };


var ctx = document.getElementById("myChart").getContext("2d");
new Chart(ctx, config);
              var ages = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
              // For drawing the lines
              var statis = [12,16,11,9,12,4,2];

                var config = { 
                type: 'line',
                data: {
                labels: ages,
                datasets: [{
               label:"Day Wise Visitors" ,
              data:statis,
                lineTension: 0,
              fill: false,
              borderColor: 'orange',
              backgroundColor: 'transparent',
              pointBorderColor: 'orange',
              pointBackgroundColor: 'rgba(255,150,0,0.5)',
              pointRadius: 5,
              pointHoverRadius: 10,
                                      
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
                      labelString: '  Weekdays',
                      fontSize: 20,
                      fontColor:'black'
                                      }
                              }]
                          },
              title: {
                      display: true,
                      text: 'Day Wise Visitors',
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
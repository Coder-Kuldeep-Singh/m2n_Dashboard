
              // var datalabel = {
              //         data:[11,2,5,7,20,10,11],
                      // var backgroundcolor= ['#216583','#2d3561','#f3826f','#49beb7','#407088','#5edfff'],


              // }
              // var bardata = {
              //   labels:['0-12','13-19','20-30','31-40','41-50','51-60','60-100'],
              //   datasets:[datalabel]
              // }




              var ages = ['0-12','13-19','20-30','31-40','41-50','51-60','60-100'];
              // For drawing the lines

              var statis = [0,0,0,7,20,0,11];
             

              alert(statis[3]);

              var datavalue = {
                labels: ages,
                datasets: [
                {
                label:ages[0],
                data:statis[0],
                backgroundColor:'#216583' 
                                   
                },

                {
                label:ages[1],
                data:statis[1],
                backgroundColor:'#2d3561'    
                              
                },

                 {
                label:ages[2],
                data:statis[2],
                backgroundColor:'#f3826f'                      
                },

                 {
                label:ages[3],
                data:statis[3],
                backgroundColor:'#ffb961'
                },

                   {
                label:ages[4],
                data:statis[4],
                backgroundColor:'#49beb7'                     
                },


                  {
                label:ages[5],
                data:statis[5],
                backgroundColor:'#407088'                     
                },
                    
                     {
                label:ages[6],
                data:statis[6],
                backgroundColor:'#5edfff'
                                
                }
              

                ]
              }

              alert(datavalue);
              var colors = ['#216583','#2d3561','#f3826f','#ffb961','#49beb7','#407088','#5edfff'];
              // alert(statis.length);


                var config = { 
                type: 'bar',
                data:datavalue,
               // data:{
               //  labels:ages,
               //  datasets:[{
               //    label : ages,
               //    data:statis,
               //    backgroundColor:colors,
               //    fill:false,
               //  }]
               // },
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
                      fontSize: 12,
                      fontColor:'black'
                                      },
                      ticks: {
                                min:1,
                                beginAtZero: false,
                                stepWidth: 2 
                                
                                
                            }
                              }],

                     xAxes: [{
                        scaleLabel: {
                          display: true,
                      labelString: '  Age',
                      fontSize: 12,
                      fontColor:'black'
                                      }

                              }]
                          },
              title: {
                      display: true,
                      text: 'Visitors By Age group',
                      fontSize:15,
                      fontColor:'#3C4858',
                      position:'top'
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
             display: true,
             position: 'bottom'

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

                 },
                 
  };


var ctx = document.getElementById("myChart").getContext("2d");
new Chart(ctx, config);


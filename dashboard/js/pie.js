// Our labels along the x-axis

              var gender = ['Male','Female','Transgender'];
              // For drawing the lines
              var values = [1,1,1];
              var bgcolor = ['#2d3561','#f3826f','#ffb961']

              var ctx = document.getElementById("mychart");
              var myChart = new Chart(ctx, {
                
                type: 'doughnut',
                data: {
                 labels: gender,
                 datasets: [{ 
                      data: values,
                      borderColor: "transparent",
                      backgroundColor:bgcolor,
                                          }]
                },
                 options: {
                    title: {
                      display: true,
                      text: 'Visitors By Gender',
                      fontSize:15,
                      fontColor:'#3C4858',
                      padding:10,
                      position:'top'
                            },
                      legend: {
                        display: true,
                        position: 'bottom',
                              },
                               animation: {
            animateScale: true,
            animateRotate: true
        }
                          },
                        
              });
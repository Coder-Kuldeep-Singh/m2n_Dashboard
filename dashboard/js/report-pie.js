// Our labels along the x-axis
              var gender = ['Male','Female','Transgender'];
              // For drawing the lines
              var values = [9,38,19];
              var bgcolor = ['#c5980d','#272d37','gray']

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
                          }
              });
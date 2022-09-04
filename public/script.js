function myFunction(){
    let chartStatus = Chart.getChart("myChart"); // <canvas> id
    if (chartStatus != undefined) {
    chartStatus.destroy();
    }
    let input_nums = document.getElementById("inputId").value;
    let col_names = document.getElementById("colnameId").value;
    let chart_names = document.getElementById("chartnameId").value;
    let chart_type = document.getElementById("chart_types").value;

    const numarr = input_nums.split(' ');
    let colnamearr = new Array(numarr.length);
    if(col_names.length === 0 && chart_type==="barchart"){
      for(var i=0; i<numarr.length; i++){
        var colnumber = i+1;
        colnamearr[i] = "Column " + colnumber;
      }
    }

    if(col_names.length === 0 && chart_type==="linechart"){
        for(var i=0; i<numarr.length; i++){
          var colnumber = i+1;
          colnamearr[i] = "Point " + colnumber;
        }
      }
  
    if(chart_names.length === 0){
        chart_names = "Your " + chart_type;
    } 
    const colarr = colnamearr;
    console.log(chart_type);
    if(chart_type === "barchart"){makeBarChart(numarr, colarr, chart_names);}
    if(chart_type === "piechart"){makePieChart(numarr, colarr, chart_names);}
    if(chart_type === "linechart"){makeLineChart(numarr, colarr, chart_names);}
  }
  
  
  
  //function dataFromArray(){}
  function makeBarChart(arr, colarr, label){
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: colarr,
            datasets: [{
                label: label,
                data: arr,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
          responsive: false,
          maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
  }

  function makePieChart(arr, colarr, label){
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: colarr,
            datasets: [{
                label: label,
                data: arr,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
          responsive: false,
          maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
  }

  function makeLineChart(arr, colarr, label){
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: colarr,
            datasets: [{
                label: label,
                data: arr,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
          responsive: false,
          maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
  }

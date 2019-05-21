var Years =        [1500,1600,1700,1750,1800,1850,1900,1950,1999,2008,2050];
var World =        [585,660,710,791,978,1262,1650,2521,6008,6707,9725];
var Africa =       [86,114,106,106,107,111,133,221,783,973,2478];
var Asia =         [282,350,411,502,635,809,947,1402,3700,4054,5267];
var Europe =       [168,170,178,190,203,276,408,547,675,732,734];
var Latinamerica = [40,20,10,16,24,38,74,167,508,577,784];
var Northamerica = [6,3,2,2,7,26,82,172,312,337,433];
var Oceania =      [3,3,3,2,2,2,6,13,30,34,57];

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: Years,
    datasets: [
      { 
        data: World,
        label: "World",
        borderColor: "#000000",
        backgroundColor: "#000000",
        fill: false
        },
      { 
    data: Africa,
    label: "Africa",
    borderColor: "#3e95cd",
    backgroundColor: "#3e95cd",
    fill: false
    },
    {
      data: Asia,
      label: "Asia",
      borderColor: "#ffff00",
      backgroundColor: "#ffff00",
      fill: false 
    },
    { 
      data: Europe,
      label: "Europe",
      borderColor: "#228B22",
      backgroundColor: "#228B22",
      fill: false
    },
    { 
      data: Latinamerica,
      label: "Latin America",
      borderColor: "#FF7F50",
      backgroundColor: "#FF7F50",
      fill: false
    },
    { 
      data: Northamerica,
      label: "North America",
      borderColor: "#ff0000",
      backgroundColor: "#ff0000",
      fill: false
    },
    { 
      data: Oceania,
      label: "Oceania",
      borderColor: "#00ffff",
      backgroundColor: "#00ffff",
      fill: false
    }
    ]
  }
});
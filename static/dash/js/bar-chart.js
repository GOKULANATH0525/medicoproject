$(function(){
    "use strict";
    
    // chart
    var chart = AmCharts.makeChart( "bar-chart", {
      "type": "serial",
      "theme": "light",
      "fontFamily": "Poppins",
      "dataProvider": [ {
        "country": "2021-05-01",
        "visits": 0
      }, {
        "country": "2021-05-02",
        "visits": 0
      }, {
        "country": "2021-05-03",
        "visits": 7
      }, {
        "country": "G2021-05-04",
        "visits": 2500
      }, {
        "country": "2021-05-05",
        "visits": 100
      },
      {
        "country": "2021-05-06",
        "visits": 10
      }, {
        "country": "2021-05-07",
        "visits": 222
      }, {
        "country": "2021-05-08",
        "visits": 1118
      }, {
        "country": "2021-05-09",
        "visits": 700
      }, {
        "country": "2021-05-10",
        "visits": 5
      } ],
      "valueAxes": [ {
        "gridColor": "#FFFFFF",
        "gridAlpha": 0.2,
        "dashLength": 0
      } ],
      "gridAboveGraphs": true,
      "startDuration": 1,
      "graphs": [ {
        "balloonText": "[[category]]: <b>[[value]]</b>",
        "fillAlphas": 0.8,
        "lineAlpha": 0.2,
        "type": "column",
        "valueField": "visits"
      } ],
      "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
      },
      "categoryField": "country",
      "categoryAxis": {
        "gridPosition": "start",
        "gridAlpha": 0,
        "tickPosition": "start",
        "tickLength": 20
      },
      "export": {
        "enabled": true
      }

    } );
});

const count = {
    1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0
  }
  function tableCreate() {
      //body reference 
      var body = document.getElementsByTagName("body")[0];
      
      // create elements <table> and a <tbody>
      var tbl = document.createElement("table");
      var tblBody = document.createElement("tbody");
   
      // cells creation
      for (var j = 1; j <= 8; j++) {
        // table row creation
        var row = document.createElement("tr");
          
        for (var i = 0; i < 6; i++) {
          // create element <td> and text node 
          //Make text node the contents of <td> element
          // put <td> at end of the table row
          var g = Math.floor(Math.random() * 6 + 1)
          // TODO :: fill count
          
          var cell = document.createElement("td");
          var cellText = document.createTextNode("dobbelsteen: " + j + " | " + "resultaat: " + g);
          cell.appendChild(cellText);
          row.appendChild(cell);
          count[g]++
  
          // if (g == 1) {
          //   count[1]++
          // } else if (g == 2) {
          //   count[2]++
          // } else if (g == 3) {
          //   count[3]++
          // } else if (g == 4) {
          //   count[4]++
          // } else if (g == 5) {
          //   count[5]++
          // } else if (g == 6) {
          //   count[6]++
          // }; 
        }
        //row added to end of table body
        tblBody.appendChild(row);
      } 
    
      // append the <tbody> inside the <table>
      tbl.appendChild(tblBody);
      // put <table> in the <body>
      body.appendChild(tbl);
      // tbl border attribute to 
      tbl.setAttribute("border", "2");
    };
  
    
  
  
  
  function tableCreate2() {
      //body reference 
      var body = document.getElementsByTagName("body")[0];
    
      // create elements <table> and a <tbody>
      var tbl = document.createElement("table");
      var tblBody = document.createElement("tbody");
   
      // cells creation
      for (var j = 1; j <= 6; j++) {
        // table row creation
        var row = document.createElement("tr");
          
        for (var i = 0; i < 1; i++) {
          // create element <td> and text node 
          //Make text node the contents of <td> element
          // put <td> at end of the table row
          var cell = document.createElement("td");
          // TODO :: show count
          var cellText = document.createTextNode("aantal ogen " + j + ":" + count[j]);
          cell.appendChild(cellText);
          row.appendChild(cell);
        }
    
        //row added to end of table body
        tblBody.appendChild(row);
      }
    
      // append the <tbody> inside the <table>
      tbl.appendChild(tblBody);
      // put <table> in the <body>
      body.appendChild(tbl);
      // tbl border attribute to 
      tbl.setAttribute("border", "2");
    }
  
    
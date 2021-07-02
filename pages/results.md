---
layout: layouts/results.njk
metaDescription: Results of MicroInvestigator counts
date: 2017-01-01
permalink: /results/index.html
eleventyNavigation:
  key: Results
  order: 1
---

<style>
    .card {
      width: 300px;
      height: 200px;
      margin: 40px;
      padding: 40px;
      background-color: green;
    }
</style>

  <section class="text-center container">
    <div class="row padding">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">Data</h1>
        <p class="lead text-muted">These data below represent the results collected by schools and then analysed.</p>
      </div>
    </div>
  </section>

  <div>helo
  </div>

  <script>

      // Initialize Tabletop to access your table
      function init() {
        Tabletop.init({
          // YOUR TURN: change 'key' value to point to your spreadsheet
          key: 'https://docs.google.com/spreadsheets/d/1c6KhEZ3C4zs6gw7uagJFqKjOloUICfuAaK-51506A2E/',
          // once Tabletop has loaded the data, it passes it to the 'callback' function, 'addPoints', defined below
          callback: addPoints,
          simpleSheet: true
        });
      }

      // // create a function called addPoints that iterates through your table (row by row) to create markers and popups
      // function addPoints(data) {

      //   // iterate through your table to set the marker to lat/long values for each row

      //   data.forEach(function(row) {
  
      //     var websiteLink = `<h4 class="weblink"><a href="${row.Website}"><b>Website</b></a></h4>`;
      //     // create a variable for your popup and populate your popup with information from your table
      //     var popup = new mapboxgl.Popup()
      //       .setHTML(`<h3>` + row.Name + `</h3>` + '<h4>' + '<b>' + 'Address: ' + '</b>' + row.Address + '</h4>' + '<h4>' + '<b>' + 'Phone: ' + '</b>' + row.Phone + '</h4>' + websiteLink); // this uses the table to populate each popup
      //   });

      // }

        // let container = document.querySelector('.container');

        // for (let i = 1; i <= 9; i++) {
        //     let myDiv = document.createElement("div");

        //     myDiv.innerHTML = "<div class=\"card\">"+ i +"</div>" 

        //     container.appendChild(myDiv);
        // }

        function addPoints(data) {
          let container = document.querySelector('.container');

          data.forEach(function(row) {
            let myDiv = document.createElement("div");
              myDiv.innerHTML = "<div class=\"card\">"+ "hello" +"</div>"
              container.appendChild(myDiv);
          };
        }

    </script>

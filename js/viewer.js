function split(str) {
  return str
    .split(" ")
    .map((w) => w[0].toUpperCase() + w.substr(1).toLowerCase())
    .join(" ");
}

// Function to Get data from API
async function get(url) {
  let obj = await (await fetch(url)).json();
  return obj;
}

// Get URL Parameters
const urlParams = new URLSearchParams(window.location.search);

// Get Segment of page to append elements to (currently body)
var myBody = document.getElementById("doc-container"); // Change this to whatever  container everything is in once css is built

// Declare variables to be used and start async function
var data, table, tbody, tr, td1, td2, td3, td4, thead, th, h2;
(async () => {
  // Get Data from GDC Dictionary API
  data = await get("https://api.gdc.cancer.gov/v0/submission/_dictionary/_all");

  // If querystring contains node, show node page
  if (urlParams.has("node")) {
    var key = urlParams.get("node");
    var node = data[key];

    // Add Summary Section

    // Summary Header
    h2 = document.createElement("h2");
    h2.innerHTML = "Summary";
    myBody.appendChild(h2);

    // Create Summary Table
    table = document.createElement("table");
    table.setAttribute("class", "table");
    tbody = document.createElement("tbody");

    // Fill in Summary Table
    var summaryAttrs = {
      Type: "type",
      Category: "category",
      Description: "description",
      "Unique Keys": "uniqueKeys",
    };
    for (var key in summaryAttrs) {
      var nodeAttr = node[summaryAttrs[key]];
      tr = document.createElement("tr");
      td1 = document.createElement("td");
      td2 = document.createElement("td");
      td1.innerHTML = key;
      td2.innerHTML = nodeAttr;
      tr.appendChild(td1);
      tr.appendChild(td2);
      tbody.appendChild(tr);
      table.appendChild(tbody);
      myBody.appendChild(table);
    }

    // Add Links Section

    // Add Links Header
    h2 = document.createElement("h2");
    h2.innerHTML = "Links";
    myBody.appendChild(h2);

    //Create Links Table
    table = document.createElement("table");
    table.setAttribute("class", "table");
    tbody = document.createElement("tbody");
    thead = document.createElement("thead");

    // Fill in links table head
    th = document.createElement("th");
    th.innerHTML = "Links to Entity";
    thead.appendChild(th);
    th = document.createElement("th");
    th.innerHTML = "Link Name";
    thead.appendChild(th);
    th = document.createElement("th");
    th.innerHTML = "Relationship";
    thead.appendChild(th);
    th = document.createElement("th");
    th.innerHTML = "Required?";
    thead.appendChild(th);
    table.appendChild(thead);

    // Fill in Links Table
    for (var i = 0; i < node["links"].length; i++) {
      tr = document.createElement("tr");
      td = document.createElement("td");
      td.innerHTML = node["links"][i]["target_type"];
      tr.appendChild(td);
      td = document.createElement("tr");
      td.innerHTML = node["links"][i]["name"];
      tr.appendChild(td);
      td = document.createElement("td");
      td.innerHTML =
        node["links"][i]["backref"] +
        " " +
        node["links"][i]["label"] +
        " " +
        node["links"][i]["target_type"];
      tr.appendChild(td);
      td = document.createElement("td");
      td.innerHTML = node["links"][i]["required"];
      tr.appendChild(td);
      tbody.appendChild(tr);
    }

    table.appendChild(tbody);
    myBody.appendChild(table);

    // Properties Section

    // Create Properties Header
    h2 = document.createElement("h2");
    h2.innerHTML = "Properties";
    myBody.appendChild(h2);

    // Create Properties Table
    table = document.createElement("table");
    table.setAttribute("class", "table");
    tbody = document.createElement("tbody");
    thead = document.createElement("thead");

    // Fill in Properties Table Head
    th = document.createElement("th");
    th.innerHTML = "Property";
    thead.appendChild(th);
    th = document.createElement("th");
    th.innerHTML = "Description";
    thead.appendChild(th);
    th = document.createElement("th");
    th.innerHTML = "Acceptable Types or Values";
    thead.appendChild(th);
    th = document.createElement("th");
    th.innerHTML = "Required?";
    thead.appendChild(th);
    th = document.createElement("th");
    th.innerHTML = "CDE";
    thead.appendChild(th);
    table.appendChild(thead);

    // Fill in Properties table
    for (var i in node["properties"]) {
      tr = document.createElement("tr");
      td = document.createElement("td");
      td.innerHTML = i;
      tr.appendChild(td);
      td = document.createElement("td");
      td.innerHTML = node["properties"][i]["description"];
      tr.appendChild(td);
      td = document.createElement("td");
      if (Object.keys(node["properties"][i]).includes("oneOf")) {
        td.innerHTML = node["properties"][i]["oneOf"];
      } else {
        td.innerHTML = node["properties"][i]["enum"];
      }
      tr.appendChild(td);
      td = document.createElement("td");
      td.innerHTML = String(node["required"].includes(i));
      tr.appendChild(td);
      td = document.createElement("td");
      if (Object.keys(node["properties"][i]).includes("termDef")) {
        td.innerHTML = node["properties"][i]["termDef"]["cde_id"];
      } else {
        td.innerHTML = "--";
      }
      tr.appendChild(td);
      tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    myBody.appendChild(table);
    //console.log(node['properties']);
  }

  // Otherwise build main page
  else {
    for (var key of Object.keys(data)) {
      console.log(key);

      if (key[0] != "_") {
        // Get Table for category of current object
        table = document.getElementById(data[key]["category"] + "-table");

        // Check if Table exists in document
        if (table != null) {
          // If Table Exists append current attribute to Table
          tbody = table.tBodies[0];
          tr = document.createElement("tr");
          td1 = document.createElement("td");
          td2 = document.createElement("td");
          a = document.createElement("a");
          a.setAttribute("href", "?node=" + key);
          a.innerHTML = data[key]["title"];
          td1.appendChild(a);
          td2.innerHTML = data[key]["description"];
          tr.appendChild(td1);
          tr.appendChild(td2);
          tbody.appendChild(tr);
        } else {
          //Else Create Table

          // Create Table
          table = document.createElement("table");
          table.setAttribute("class", "table");
          table.setAttribute("id", data[key]["category"] + "-table");

          // Create Table heading
          thead = document.createElement("thead");
          tr = document.createElement("tr");
          th = document.createElement("th");
          th.setAttribute("colspan", 2);
          th.innerHTML = split(data[key]["category"]);
          tr.appendChild(th);
          thead.appendChild(tr);

          // Create Table body
          tbody = document.createElement("tbody");
          a = document.createElement("a");
          a.setAttribute("href", "?node=" + key);
          tr = document.createElement("tr");
          td1 = document.createElement("td");
          td2 = document.createElement("td");
          a.innerHTML = data[key]["title"];
          td1.appendChild(a);
          td2.innerHTML = data[key]["description"];
          tr.appendChild(td1);
          tr.appendChild(td2);
          tbody.appendChild(tr);

          // Append Everything together
          table.appendChild(thead);
          table.appendChild(tbody);
          myBody.appendChild(table);
        }
      }
    }
  }
})();


/*
Write a Class that gets data from api endpoint and builds a table with the data from the endpoint
*/ 

class Viewer {
   constructor(this,url, data){
      this.data = data;
}
  getData(){

  }

  getNodes(){

  }

  buildTables(){

  }

  initialize(){
    this.getData()
    this.getNodes()
    this.buildTables()
  }
}

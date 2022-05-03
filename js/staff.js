function generateButtons() {
    fetch("/data/courses.json")
        .then(response => {
            return response.json();
        })
        .then(jsondata => {
            var currentDiv = document.getElementById("coursebtngroup");

            for (var i = 0; i < jsondata.courses.length; i++) {
                var newButton = document.createElement("button");
                newButton.id = "VALID_TARGET";
                newButton.innerHTML = jsondata.courses[i];

                var br = document.createElement("br")

                currentDiv.appendChild(newButton);
                currentDiv.appendChild(br);
            }
        })

    document.getElementById("coursebtngroup").addEventListener("click", function(e) {
        if (e.target && e.target.id == "VALID_TARGET") {
            displayCorrectStudents(e.target.innerHTML);
        }
    });
}

function displayCorrectStudents(button) {
    console.log("Clicked: " + button)

    // Clears Table
    var table = document.getElementById("targettable");
    table.innerHTML = ""

    var header = document.createElement("tr");
    var h1 = document.createElement("th");
    h1.style = "width:150px";
    h1.innerHTML = "Student ID";

    var h2 = document.createElement("th");
    h2.style = "width:80%";
    h2.innerHTML = "Student Name";
    
    header.appendChild(h1);
    header.appendChild(h2);

    table.appendChild(header);

    // Replace with iterator over json file? database!
    for (var i = 0; i < 12; i++) {
        var row = document.createElement("tr");
        // Student ID
        var d1 = document.createElement("td");
        d1.innerHTML = generateID();
        // Student Name
        var d2 = document.createElement("td");
        d2.innerHTML = generateName();

        row.appendChild(d1);
        row.appendChild(d2);

        table.appendChild(row);
    }
}

function generateID() {
    var text = "";
    var possible = "0123456789";
  
    for (var i = 0; i < 6; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
}

function generateName() {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";
  
    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    text += " ";

    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
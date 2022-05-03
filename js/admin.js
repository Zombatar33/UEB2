function manageStudents() {
    console.log("Students");

    // Clears Table
    var table = document.getElementById("targettable");
    table.innerHTML = ""

    var header = document.createElement("tr");
    var h1 = document.createElement("th");
    h1.innerHTML = "Student ID";

    var h2 = document.createElement("th");
    h2.innerHTML = "First Name";

    var h3 = document.createElement("th");
    h3.innerHTML = "Last Name";

    var h4 = document.createElement("th");
    h4.innerHTML = "Department";

    var h5 = document.createElement("th");
    h5.innerHTML = "E-Mail";

    header.appendChild(h1);
    header.appendChild(h2);
    header.appendChild(h3);
    header.appendChild(h4);
    header.appendChild(h5);

    table.appendChild(header);

    // Replace with iterator over json file? database!
    for (var i = 0; i < 3; i++) {
        var row = document.createElement("tr");
        // Student ID
        var d1 = document.createElement("td");
        d1.innerHTML = "577868";
        // Student First Name
        var d2 = document.createElement("td");
        d2.innerHTML = "Adam";
        // Student Last Name
        var d3 = document.createElement("td");
        d3.innerHTML = "Ebied";
        // Student Department
        var d4 = document.createElement("td");
        d4.innerHTML = "Applied Computer Science";
        // Student E-Mail
        var d5 = document.createElement("td");
        d5.innerHTML = "s0577868@htw-berlin.de";

        row.appendChild(d1);
        row.appendChild(d2);
        row.appendChild(d3);
        row.appendChild(d4);
        row.appendChild(d5);

        table.appendChild(row);
    }
}

function manageStaff() {
    console.log("Staff");

        // Clears Table
        var table = document.getElementById("targettable");
        table.innerHTML = ""
    
        var header = document.createElement("tr");
        var h1 = document.createElement("th");
        h1.innerHTML = "Staff ID";
    
        var h2 = document.createElement("th");
        h2.innerHTML = "First Name";
    
        var h3 = document.createElement("th");
        h3.innerHTML = "Last Name";
    
        var h4 = document.createElement("th");
        h4.innerHTML = "Department";
    
        var h5 = document.createElement("th");
        h5.innerHTML = "E-Mail";
    
        header.appendChild(h1);
        header.appendChild(h2);
        header.appendChild(h3);
        header.appendChild(h4);
        header.appendChild(h5);
    
        table.appendChild(header);
    
        // Replace with iterator over json file? database!
        for (var i = 0; i < 3; i++) {
            var row = document.createElement("tr");
            // Student ID
            var d1 = document.createElement("td");
            d1.innerHTML = "192392";
            // Student First Name
            var d2 = document.createElement("td");
            d2.innerHTML = "John";
            // Student Last Name
            var d3 = document.createElement("td");
            d3.innerHTML = "Doe";
            // Student Department
            var d4 = document.createElement("td");
            d4.innerHTML = "Applied Computer Science";
            // Student E-Mail
            var d5 = document.createElement("td");
            d5.innerHTML = "john.doe@staff.htw-berlin.de";
    
            row.appendChild(d1);
            row.appendChild(d2);
            row.appendChild(d3);
            row.appendChild(d4);
            row.appendChild(d5);
    
            table.appendChild(row);
        }
}

function handleAdd() {
    console.log("Add");

    var table = document.getElementById("targettable");

    var row = document.createElement("tr");
    // Student ID
    var d1 = document.createElement("td");
    d1.innerHTML = "192392";
    // Student First Name
    var d2 = document.createElement("td");
    d2.innerHTML = "Added";
    // Student Last Name
    var d3 = document.createElement("td");
    d3.innerHTML = "Entity";
    // Student Department
    var d4 = document.createElement("td");
    d4.innerHTML = "Applied Computer Science";
    // Student E-Mail
    var d5 = document.createElement("td");
    d5.innerHTML = "added-entity@gmail.com";

    row.appendChild(d1);
    row.appendChild(d2);
    row.appendChild(d3);
    row.appendChild(d4);
    row.appendChild(d5);

    table.appendChild(row);
}

function handleUpdate() {
    console.log("Update");
}

function handleDelete() {
    console.log("Delete");
}
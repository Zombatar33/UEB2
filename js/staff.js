
    let students = [
        {
            "id": "577868",
            "first_name": "Adam",
            "last_name": "Ebied",
            "birthday": new Date('2002-11-04'),
            "gender": "Male",
            "department": "Applied Computer Science",
            "email": "s0577868@htw-berlin.de",
            "join_date": new Date('2015-11-30')
        },
        {
            "id": "578838",
            "first_name": "Bruno",
            "last_name": "Braun",
            "birthday": new Date('2001-05-20'),
            "gender": "Male",
            "department": "Mathematics",
            "email": "s0578838htw-berlin.de",
            "join_date": new Date('2015-04-26')
        }
    ]
    
    let staff = [
        {
            "id": "912381",
            "first_name": "John",
            "last_name": "Doe",
            "birthday": new Date('1994-04-11'),
            "gender": "Male",
            "department": "Applied Computer Science",
            "email": "j.doe@htw-berlin.de",
            "join_date": new Date('2015-02-04')
        }
    ]

/*
function generateDropdown() {
    fetch("/data/courses.json")
        .then(response => {
            return response.json();
        })
        .then(jsondata => {
            var currentDiv = document.getElementById("coursebtngroup");

            var dropdown = document.createElement("select");
            for (var i = 0; i < jsondata.courses.length; i++) {
                var newSelection = document.createElement("option");
                newSelection.innerHTML = jsondata.courses[i];

                dropdown.appendChild(newSelection);
            }
            currentDiv.appendChild(dropdown);
        })

    document.getElementById("coursebtngroup").addEventListener("click", function(e) {
        if (e.target && e.target.id == "VALID_TARGET") {
            displayCorrectStudents(e.target.innerHTML);
        }
    });
}
*/

document.addEventListener('readystatechange', event => {
    switch (document.readyState) {
      case "loading":
        console.log("document.readyState: ", document.readyState,
         `- The document is still loading.`
         );
        break;
      case "interactive":
        console.log("document.readyState: ", document.readyState, 
          `- The document has finished loading DOM. `,
          `- "DOMContentLoaded" event`
          );
        break;
      case "complete":
        console.log("document.readyState: ", document.readyState, 
          `- The page DOM with Sub-resources are now fully loaded. `,
          `- "load" event`
          );
          displayCorrectStudents();
        break;
    }
});

function validSemester(student, semester) {
    let month = student.join_date.toLocaleDateString('de-de', { month:"numeric"})

    if (month >= 4 && month <= 9) {
        return semester == "Summer Semester";
    }else {
        return semester == "Winter Semester"
    }
}

function displayCorrectStudents() {
    // Clears Table
    table = clearTable();

    var department = document.getElementById("department").value;
    var semester = document.getElementById("semester").value;

    students.filter(student => department == "" ? true : student.department == department)
    .filter(student => semester == "" ? true : validSemester(student, semester))
    .forEach(student => {
        var row = document.createElement("tr");
        // Student ID
        var d1 = document.createElement("td");
        d1.innerHTML = student.id;
        // Student First Name
        var d2 = document.createElement("td");
        d2.innerHTML = student.first_name;
        // Student Last Name
        var d3 = document.createElement("td");
        d3.innerHTML = student.last_name;
        // Student Birthday
        var d4 = document.createElement("td");
        d4.innerHTML = student.birthday.toLocaleDateString('de-de', { year:"numeric", month:"numeric", day:"numeric"})
        // Student Gender
        var d5 = document.createElement("td");
        d5.innerHTML = student.gender;
        // Student Department
        var d6 = document.createElement("td");
        d6.innerHTML = student.department;
        // Student E-Mail
        var d7 = document.createElement("td");
        d7.innerHTML = student.email;
        // Student Join Date
        var d8 = document.createElement("td");
        d8.innerHTML = student.join_date.toLocaleDateString('de-de', { year:"numeric", month:"numeric", day:"numeric"})

        row.appendChild(d1);
        row.appendChild(d2);
        row.appendChild(d3);
        row.appendChild(d4);
        row.appendChild(d5);
        row.appendChild(d6);
        row.appendChild(d7);
        row.appendChild(d8);

        table.appendChild(row);
    });
}

function clearTable() {
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
    h4.innerHTML = "Birthday";

    var h5 = document.createElement("th");
    h5.innerHTML = "Gender";

    var h6 = document.createElement("th");
    h6.innerHTML = "Department";

    var h7 = document.createElement("th");
    h7.innerHTML = "E-Mail";

    var h8 = document.createElement("th");
    h8.innerHTML = "Join Date";

    header.appendChild(h1);
    header.appendChild(h2);
    header.appendChild(h3);
    header.appendChild(h4);
    header.appendChild(h5);
    header.appendChild(h6);
    header.appendChild(h7);
    header.appendChild(h8);

    table.appendChild(header);

    return table;
}
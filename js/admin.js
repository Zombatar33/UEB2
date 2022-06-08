
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

var student_mode = true;

function manageStudents() {
    student_mode = true;
    console.log("Students");

    let table = clearTable();

    var department = document.getElementById("filterdepartment").value;
    var semester = document.getElementById("filtersemester").value;

    // Replace with iterator over json file? database!
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

function validSemester(student, semester) {
    let month = student.join_date.toLocaleDateString('de-de', { month:"numeric"})

    if (month >= 4 && month <= 9) {
        return semester == "Summer Semester";
    }else {
        return semester == "Winter Semester"
    }
}

function manageStaff() {
    student_mode = false;

    console.log("Staff");

    let table = clearTable();

    var department = document.getElementById("filterdepartment").value;
    var semester = document.getElementById("filtersemester").value;

    // Replace with iterator over json file? database!
    staff.filter(staff => department == "" ? true : staff.department == department)
    .filter(staff => semester == "" ? true : validSemester(staff, semester))
    .forEach(staff => {
        var row = document.createElement("tr");
        // Staff ID
        var d1 = document.createElement("td");
        d1.innerHTML = staff.id;
        // Staff First Name
        var d2 = document.createElement("td");
        d2.innerHTML = staff.first_name;
        // Staff Last Name
        var d3 = document.createElement("td");
        d3.innerHTML = staff.last_name;
        // Staff Birthday
        var d4 = document.createElement("td");
        d4.innerHTML = staff.birthday.toLocaleDateString('de-de', { year:"numeric", month:"numeric", day:"numeric"})
        // Staff Gender
        var d5 = document.createElement("td");
        d5.innerHTML = staff.gender;
        // Staff Department
        var d6 = document.createElement("td");
        d6.innerHTML = staff.department;
        // Staff E-Mail
        var d7 = document.createElement("td");
        d7.innerHTML = staff.email;
        // Staff Join Date
        var d8 = document.createElement("td");
        d8.innerHTML = staff.join_date.toLocaleDateString('de-de', { year:"numeric", month:"numeric", day:"numeric"})

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
          manageStudents();
        break;
    }
});

function handleAdd() {
    console.log("Add");

    var table = document.getElementById("targettable");

    var object = {
        "id": document.getElementById("id").value,
        "first_name": document.getElementById("fname").value,
        "last_name": document.getElementById("lname").value,
        "birthday": new Date(document.getElementById("bday").value),
        "gender": document.getElementById("gender").value,
        "department": document.getElementById("department").value,
        "email": document.getElementById("email").value,
        "join_date": new Date(document.getElementById("joindate").value)
    }

    if (object.id == "" || object.first_name == "" || object.last_name == ""|| object.birthday == "" || object.gender == "" || object.email == "" || object.join_date == "") {
        object = null;
        window.alert("All fields must be filled out")
        return;
    }

    var time_dif = Math.abs(new Date().getTime() - object.birthday.getTime());
    var year_dif = time_dif / (1000 * 3600 * 24 * 365);

    if (year_dif < 17 || year_dif > 60) {
        object = null;
        window.alert("Invalid DOB")
        return;
    }

    if (object.join_date.getUTCFullYear() != "2015") {
        object = null;
        window.alert("Join Date must be from 2015")
        return;
    }

    if (student_mode) {
        if (students.map(s => s.id).indexOf(object.id) < 0) {
            students.push(object);
        }else {
            window.alert("Duplicate Student ID")
            return;
        }
    
        manageStudents();
    }else {
        if (staff.map(s => s.id).indexOf(object.id) < 0) {
            staff.push(object);
        }else {
            window.alert("Duplicate Staff ID")
            return;
        }
    
        manageStaff();
    }
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

function handleUpdate() {
    console.log("Update");
}

function handleDelete() {
    console.log("Delete");
}
window.addEventListener("load", function () {
    "use strict";
    
    var usersContainer = document.querySelector("#users");
    

    var users = new Table({
        tableClass: "table table-bordered table-hover"
    });

    users.addHeadingsRow("Имя", "Email", "Год поступления");

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let year = document.getElementById("year");

       button.onclick = function () {
        
        users.addRow(name.value, email.value, year.value);
        usersContainer.innerHTML = users.generate();
        name.value="";
        email.value="";
        year.value="";
    };

    
});
function fnGetUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(data => data.json())
        .then(jsonData => {
            console.log(jsonData)
            let content = "<table>" + jsonData.map(data =>
                "<tr><td>" + data.username + "</td><td>" + data.email + "</td></tr>").toString()
                + "</table>";
            document.getElementById("mydiv").innerHTML = content;

        })
        .catch(err => console.log("Error getting " + err));
}


function fnGetUsers1() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(data => console.log(data))
        .catch(err => console.log("err " + err));
}


function fnAddUser(evt) {
    let obj = {};
    obj.title = document.getElementById("sal").value;
    obj.name = document.getElementById("name").value;
    console.log(obj);
    evt.preventDefault();

    fetch("http://localhost:3000/users", {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': "application/json"
        }
    })
        .then(resp => resp.json())
        .then(respjson => {
            console.log(respjson);
            alert("Record Inserted")
        })
        .catch(err => console.log(err));


}

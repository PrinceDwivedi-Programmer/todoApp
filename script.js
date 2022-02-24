let arr = []
let newArr = []
var flag = true
let getUsers = async () => {
   let result = await  fetch("https://jsonplaceholder.typicode.com/todos").then(res=>res.json()).catch(error=>console.log(error))
    arr = result
    console.log(arr)
    var table = document.getElementById('table');

    arr.forEach((item) => {
        var tr = document.createElement('tr');
        tr.innerHTML = '<td contenteditable="true">' + item.id +
            '</td>' +
            '<td contenteditable="true">' + item.title + '</td>' +
            '<td contenteditable="true">' + item.completed + '</td>' +
            '<td>' + '<button class="btn btn-success text-dark" onclick="onEdit(this)" >Edit</button>' + '</td>' +
            '<td id="secondParent">' + '<button class="btn btn-danger text-dark" onclick="onDelete(this)" id="delete">Delete</button>' + '</td>'
        table.appendChild(tr);

    })



}

const onDelete = (item) => {
    if (confirm('Are you sure to delete this record ?')) {
        let row = item.parentElement.parentElement;
        document.getElementById("table").deleteRow(row.rowIndex);

        alert("Record Deleted Succesfully")
    }
}

// const deleteUsers=(td)=>{

// let btn = document.getElementById("delete").parentNode
// let result = btn.parentNode
// result.remove()
// }


const onEdit = (td) => {


    let row = td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex);


    let row1 = td.parentElement.parentElement
    let userId = row1.firstChild.innerHTML
    let title = row1.firstChild.nextElementSibling.innerHTML
    let status = row1.firstChild.nextElementSibling.nextElementSibling.innerHTML
    document.getElementById("userid").value = userId
    document.getElementById("title").value = title
    document.getElementById("status").value = status


}







getUsers()



const addUser = () => {
    let newData = {}
    let id = document.getElementById("userid").value
    let title = document.getElementById("title").value
    let status = document.getElementById("status").value
    if (!id || !title || !status) {
        alert("Please Fill in All Field")

    } else {
        Object.assign(newData, {
            id: id,
            title: title,
            completed: status
        });
        console.log(newData)
        newArr.push(newData)
        newArr.forEach((item) => {
            var tr = document.createElement('tr');
            tr.innerHTML = '<td>' + item.id +
                '</td>' +
                '<td>' + item.title + '</td>' +
                '<td>' + item.completed + '</td>' +
                '<td>' + '<button >Edit</button>' + '</td>' +
                '<td>' + '<button onclick="onDelete(this)" class="btn btn-danger text-dark" id="delete">Delete</button>' + '</td>'
            table.appendChild(tr);
            alert("Record Added Succesfully")
        })

    }
}
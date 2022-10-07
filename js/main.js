function sayHello() 
{
    console.log("Hello world from main.js!");
}

function sayHelloAlert()
{
    alert("Hello from Javascript file!");
}

function changeHeadingMessage()
{
    document.getElementById("HelloWorldMessage").innerHTML = "<h1>Heading Message Changed</h1>";
}

function add_task()
{
    let current_task = document.getElementById("current_task").value;
    document.getElementById("todo_tasklist").innerHTML += `<li> ${current_task} </li>`;
    let current_task_textbos = document.getElementById("current_task");
    current_task_textbos.value = "";
    current_task_textbos.focus();
    current_task_textbos.select();
}

// sayHello()
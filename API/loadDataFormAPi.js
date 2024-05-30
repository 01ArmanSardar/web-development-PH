function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
}

function LoadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUsers(data))
}

function displayUsers(data) {
    const ul = document.getElementById('users')
    for (const user of data) {
        console.log(user.name);
        const li = document.createElement('li')
        li.innerText=`name : ${user.name}`
        ul.appendChild(li)
    }

}
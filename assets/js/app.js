// Todos Data:
const todoDB = [];

// Accessing DOM Nodes:
const searchBar = document.querySelector(".searchBar");
const addBtn = document.querySelector(".addBtn");
const listArea = document.querySelector(".listArea");


// Rendering todos function:
async function renderTodos(){
    if (searchBar.value !== "") {
        listArea.textContent = ""
        // data storing here
        todoDB.push({ id: crypto.randomUUID(), title: searchBar.value, isCompleted: false })

        // searchbar being empty
        searchBar.value = "";

        // data is mapping on UI
        todoDB.map((todos) => {
            // return todos.title
            const li = document.createElement('li')

            const input = document.createElement('input')
            input.type = "checkbox";
            input.className = "todoCheck"
            li.appendChild(input);

            const p = document.createElement('p')
            p.setAttribute("class", "todoTask");
            p.textContent = todos.title;
            li.appendChild(p)

            const editButton = document.createElement("button");
            editButton.className = "todoListBtn";
            const editIcon = document.createElement("i")
            editIcon.className = "fa-solid fa-pencil";
            editButton.appendChild(editIcon);
            li.appendChild(editButton);

            const deleteButton = document.createElement("button");
            deleteButton.className = "todoListBtn";
            const deleteIcon = document.createElement("i")
            deleteIcon.className = "fa-solid fa-x";
            deleteButton.appendChild(deleteIcon);
            li.appendChild(deleteButton);

            listArea.appendChild(li)
        })
    }else{
        alert("Empty value cannot be a TODO")
    }
}
// running renderTodos() when click and enter event is trriged:
addBtn.addEventListener("click", renderTodos);
searchBar.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        renderTodos();
    }
});
// --------------------------




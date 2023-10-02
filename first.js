/**
 * TODO: Creating a TO-DO Application Using HTML,CSS,JS
 */

/**Adding Reference */

const inputTask =  document.querySelector(".wrapper .task-name");

const addTask = document.querySelector(".wrapper .add-btn");
const clearTasks = document.querySelector(".to-do-container .list-of-tasks");

/** Adding icons */

const notCompletedicon =
'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"class="bi bi-check2-circle" viewBox="0 0 16 16"><path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-0 1 10z"/><path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/></svg>';
      
const completeIcon =
'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/><svg>';

const editTaskIcon =
'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z><pathfill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>';

const delTaskIcon =
'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16"><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/></svg>';

const list_of_items = [];

const addNewTask = (taskTitle, Completstatus) => {
   
    if (taskTitle === "") {
        console.warn("Inputs cannot the empty");
        return; //Exit Point.
    }

    list_of_items.push({
        taskTitle,
        Completestatus
   });
   console.log(list_of_items);
};

const displayTasks = () => {
       if (list_of_items.length === 0) {
          tasklist.textContent=  "You Don't have Any Pending Tasks.....!";
          return;
       }

       tasksList.innerHTML = "";
       lc
       list_of_items.forEach(element => {
            
          const title = document.createElement("section");
          title.classList.add("task-title");
          title.innerHTML = element.taskTitle;

          const delBtn = document.createElement("button");
          delBtn.classList.add("del-btn");
          delBtn.innerHTML = delTaskIcon;

          delBtn.addEventListener("click", () => {
            list_of_items.splice(list_of_items.indexOf(e), 1);
            displayTasks();
          });

          const tasks = document.createElement("section");
          tasks.classList.add("tasks");

          tasks.appendChild(title);
          tasks.appendChild(delBtn);

          console.log(tasks);

       });
};

//  Add Event Listeners

addTask.addEventListener("click",()=> {
   

    let newTask = input.Task.value;
    addNewTask(newTask, false);

    displayTasks();

    inputTask.value = "";
    inputTask.focus();
});





























































































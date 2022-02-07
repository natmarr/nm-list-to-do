{
    const tasks = [];

    const addNewTask = (newTaskContent) => {
        tasks.push({ content: newTaskContent});

        render();
    };

    const render = () => {
        let tasksListHTMLContent = "";

        for (const task of tasks) {
            tasksListHTMLContent += `
            <li class="tasks__item">
                <button class="tasks__button tasks__button--toggleDone">
                ${task.done ? "✔" : ""}
                </button>
                <span class="${task.done ? "tasks__content--done" : ""}">
                ${task.content}
                </span>
                <button class="tasks__button tasks__button--remove">X</button>
            </li>    
            `;
        }

        document.querySelector(".js-tasks").innerHTML = tasksListHTMLContent;

    };



    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskElement = document.querySelector(".js-newTask");
        const newTaskContent = newTaskElement.value.trim();

        if (newTaskContent !== "") {
            addNewTask(newTaskContent);
            newTaskElement.value = "";
        };
        
        newTaskElement.focus();
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);
    };

    init();

}


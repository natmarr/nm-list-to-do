{
    const tasks = [
        {
            content: "test",
            done: true,
        },
    ];

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

    const init = () => {
        render();
    };

    init();


}
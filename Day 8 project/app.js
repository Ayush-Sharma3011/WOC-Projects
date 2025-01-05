function addTask(){
    const taskInput = document.getElementById('taskInput');

    const taskText= taskInput.value.trim();

    if(taskText !== ''){
        const task = document.createElement('div');

        task.classList.add('task', "border-2", "border-blue-500", "rounded-md", "p-2", "mb-2", "flex", "justify-between", "items-center", "bg-blue-500",'cursor-pointer');

        task.setAttribute('id', 'task-'+new Date().getTime());

        task.setAttribute('draggable', 'true');
        task.setAttribute('ondragstart', 'drag(event)');

        const taskcontent = document.createElement('span'); 

        taskcontent.classList.add('task-content','text-white','max-w-[80%');
        taskcontent.textContent = taskText; //input se aaya text display kara

        task.appendChild(taskcontent); // task me content add kiya

        //delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn','bg-red-500','text-white','px-1','py-1','rounded-md','ml-2');

        //delete button click hone par task remove
        deleteBtn.addEventListener('click', function(){
            task.remove();
        });
        task.appendChild(deleteBtn);

        //task ko taskList me add kiya

        document.getElementById("todolist").appendChild(task);

        

    }
}
function drag(event){
    event.dataTransfer.setData('text', event.target.id);
}
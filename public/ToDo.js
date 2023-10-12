
const TaskInput = document.getElementById("TaskInput");
const text = document.getElementById("text");

 function Add(){
    if (TaskInput.value === "") {
        alert("Please Enter Task!");
    }
    else{
        const newEle = document.createElement('ul');
        newEle.innerHTML = TaskInput.value;
        text.appendChild(newEle);
        newEle.style.display = "flex"
        newEle.style.justifyContent = "space-between"
        newEle.style.backgroundColor = "black"
        newEle.style.color = "white"
        newEle.style.padding = "5px"
        newEle.style.borderRadius = "5px"
        let span = document.createElement('span');
        span.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        newEle.appendChild(span);
        // span.style.backgroundColor = "red"
        newEle.querySelector("i").addEventListener("click", remove);
        function remove() {
            newEle.remove();
        }

        console.log(newEle.innerText);

    }
    TaskInput.value = "";

}
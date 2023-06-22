  const form = document.getElementById("create-task-form");
  const info = document.getElementById("new-task-description");
   const ul = document.getElementById("tasks");
  document.addEventListener("DOMContentLoaded", () => {
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const li = document.createElement("li"); 
    const btn = document.createElement("button"); 
    btn.innerText = "X"; 
    btn.addEventListener("click", () => {
      li.remove();
    });
    
    li.innerHTML = info.value; 
    li.appendChild(btn); 
    ul.appendChild(li);
    let user = []; 
    user.push(li); 
    console.log(user); 
    form.reset() 
  });
});


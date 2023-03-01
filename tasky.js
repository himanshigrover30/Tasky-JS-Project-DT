const state={
    taskList:[],

}
// dom operations
const taskContents_cardSections=document.querySelector(".task_contents");
const taskModel_AddNew=document.querySelector(".task_model_body");
console.log(taskContents_cardSections);
console.log(taskModel_AddNew);

// content model
const htmlTaskContent=({id,title,description,type,url})=>
` <div class="col-md-6 col-lg-4 mt-3" id=${id}>
<div class="card shadow-sm task__Card">
<div class="card-header d-flex justify-content-end task__card__header">
    <button type="button" class="btn btn-outline-primary mr-1.5" name=${id} >
        <i class="fas fa-pencil-alt name=${id}"></i>
    </button>
    <button type="button" class="btn btn-outline-primary mr-1.5" name=${id} >
        <i class="fas fa-trash-alt name=${id}"></i>
    </button>
</div>
<div class="card-body>
${
    url &&
    `<img width="100%" src="${url} alt="Card Image" class="card-img-top md-3 rounded-lg" />`    
}
<h4 class="Card-title task_card_title">${title}</h4>
<p class="description trim-3-lines text-muted">${description}</p>
<div class="tags text-white d-flex flex-wrap">
<span class="class="badge bg-primary m-1">${type}</span>
</div>
</div>
<div class="card-footer">
<button type="button" class="btn btn-outline-primary float-right" data-bs-toggle="modal" data-bs-target="#showTask">Open Task</button>
</div>
</div>
</div>` 
// modal body >> open task
const htmlModalContent=({id,title,description,url})=>{
    const date=new Date(parseInt(id));
    return `
    <div id=${id}>
    ${
        url &&
    `<img width="100%" src="${url} alt="Card Image" class="img-fluid place__holder__image mb-3" />`
    }
    <strong class="text-muted text-sm">Created on: ${date.toDateString()}</strong>
    <h2 class="my-3">${title}</h2>
    <p class="text-muted">${description}</p>
    </div>
    `
}
// we convert json to string (i.e for localStorage)
const updateLocalStorage=()=>{
    localStorage.setItem(
        "tasky",JSON.stringify({
            tasks:state.taskList //tasks contains content of state.taskList and tasky contain content of tasks
        })
    );
};

// load Initial Data
// Where we convert str > json (i.e , for rendering the cards on the screen) 
const loadInitialData=()=>{
    const localStorageCopy=JSON.parse(localStorage.tasks); // parse content is stored in localStorageCopy
    if(localStorageCopy)
    state.taskList=localStorageCopy.tasks;
    state.taskList.map((cardDate)=>{
        taskCotents.innerAdjacentHTML("beforeend",htmlTaskContent(cardDate));
    })
}
// FOR THE EDIT OPTION IN OPEN TASK 
//need to find our id's as well
const handleSubmit=(event)=>{
const id=`${Date.now()};`
const input={
    url:document.getElementById('imageUrl').value,
    title:document.getElementById('taskTitle').value,
    tags:document.getElementById('tags').value,
    taskDescription:document.getElementById('taskDescription').value,
};
}
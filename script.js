let Taskinput =document.querySelector("input");
let addbtn=document.querySelector("button");
let list=document.getElementById("list-container");

function createList(message){
   if(message==="")
   {
    alert("You must write something");
   }
   else{
     let li=document.createElement("li");
    li.innerText=message;
    let span =document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
    list.appendChild(li);

   }
   Taskinput.value="";
   saveData();
}

addbtn.addEventListener("click",function(){
    createList(Taskinput.value);
})

list.addEventListener("click",function(e){
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
    
});

function saveData(){
    localStorage.setItem("data",list.innerHTML);
};
    
function showTask(){
    list.innerHTML=localStorage.getItem("data");
}
showTask();
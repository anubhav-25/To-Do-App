let inputBox=document.getElementById("inputBox");
let list=document.getElementById("list");
inputBox.addEventListener("keyup",function(event)
{
    if(event.key=="Enter")
    {
        addItem(this.value);
        this.value="";
    }
})
let addItem=(inputBox)=>
{
    let listItem=document.createElement("li")
    listItem.innerHTML=`${inputBox}<i><i>`
    list.appendChild(listItem);
}

let dropDownBtn = document.getElementById("navBtn");
let dropDownMenu = document.getElementById("navUl");

dropDownMenu.style.display = "none";
function dropDown(){
    if(dropDownMenu.style.display === "none"){
        dropDownMenu.style.display = "block";
    }else{
        dropDownMenu.style.display = "none";
    }
}
let icon = document.querySelector("#icon")
let nav = document.querySelector(".sidenav")

let btn = 1;
icon.addEventListener("click", function(){
    if(btn == 1){
        nav.style.display = 'block';
        btn = 0;
    }
    else{
        nav.style.display = 'none';
        btn = 1;
    }
})
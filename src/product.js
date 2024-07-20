function moreText(){  // create a see more button to load more text
    let hidet= document.getElementById("hidet");
    hidet.style.display = "inline";
    let hideone=document.getElementById("smore")
    hideone.style.display= "none";
}
let more = document.getElementById("smore");
more.addEventListener("click",moreText);// ends

function seeMoreText(){ // create a see more button to load more text
    let hidett= document.getElementById("hidett");
    hidett.style.display = "inline";
    let hideone=document.getElementById("semore")
    hideone.style.display= "none";
}
let all = document.getElementById("semore");
all.addEventListener("click",seeMoreText);//ends

function seeeMoreText(){ // create a see more button to load more text
    let hidett= document.getElementById("hidettt");
    hidett.style.display = "inline";
    let hideone=document.getElementById("seemore")
    hideone.style.display= "none";
}
let alot = document.getElementById("seemore");
alot.addEventListener("click",seeeMoreText);//ends


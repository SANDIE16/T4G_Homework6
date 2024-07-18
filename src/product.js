function moreText(){
    let hidet= document.getElementById("hidet");
    hidet.style.display = "inline";
    let hideone=document.getElementById("smore")
    hideone.style.display= "none";
}
let more = document.getElementById("smore");
more.addEventListener("click",moreText);


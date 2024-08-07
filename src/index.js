function promptName(){//when the user enters explore our product button on the homepage,it takes their name
    let name = prompt("What is your name?");
    pchange=document.querySelector("p");
    pchange.innerHTML=`Welcome ${name} to taste the raw goodness of Africa`;
    let brow=document.getElementById("brow");
    brow.innerHTML=`Hi ${name},Browse through African Goodies`;
}

let explore = document.getElementById("explore");
explore.addEventListener("mouseenter",promptName);// ends


//function focus = when the user clicks on the images it alerts a link to the website of the image
function alertSpiceLink(){
    alert("https://en.wikipedia.org/wiki/African_cuisine");
}
let spice = document.getElementById("spice");
spice.addEventListener("click", alertSpiceLink);// ends


function alertFruitsLink(){
    alert("https://www.google.com/search?q=african+fruits&oq=afr&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRg7MggIAhBFGCcYOzISCAMQLhhDGIMBGLEDGIAEGIoFMgYIBBBFGDsyBggFEEUYQDIGCAYQRRg5MgYIBxBFGDzSAQgzMDc1ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8");
}

let fruits  = document.getElementById("fruits");
fruits.addEventListener("click", alertFruitsLink);// ends

function alertMaizeLink(){
    alert("https://en.wikipedia.org/wiki/African_cuisine");
}
let maize = document.getElementById("maize");
maize.addEventListener("click", alertMaizeLink);// ends

function alertLegumeLink(){
    alert("https://en.wikipedia.org/wiki/African_cuisine");
}

let legume = document.getElementById("legume");
legume.addEventListener("click", alertLegumeLink);// ends

function alertVeggiesLink(){
    alert("https://en.wikipedia.org/wiki/African_cuisine");
}
let veggies = document.getElementById("veggies");
veggies.addEventListener("click", alertVeggiesLink);// ends

function alertCocoyamLink(){
    alert("https://en.wikipedia.org/wiki/African_cuisine");
}
let cocoyam = document.getElementById("cocoyam");
cocoyam.addEventListener("click", alertCocoyamLink);// ends


//button to show more images
function loadMore(){ 
    let hide=document.getElementById("hide")
    hide.style.display= "block";
    hide.style.display= "flex";
    hide.style.flexWrap= "wrap";
    let disappear=document.getElementById("more-images")
    disappear.style.display= "none";

}
let moreImages = document.getElementById("more-images");
moreImages.addEventListener("click", loadMore);// ends here

//button to show less images
function vanish(){
    let imageVanish=document.getElementById("hide")
    imageVanish.style.display= "none";
    let block=document.getElementById("more-images");
    block.style.display= "block";
}
let close = document.getElementById("close");
close.addEventListener("click",vanish);// ends here


//decrease the first image of the african product
function alertImageChange(){
    let imageChange = document.getElementById("spice");
    imageChange.style.width= "75%";
    imageChange.style.height= "50%";   
}
let change = document.getElementById("spice");
change.addEventListener("mouseenter",alertImageChange);

//normalize the first image of the african product
function alertImageDecrease(){
    let decrease = document.getElementById("spice");
    decrease.style.width="";
    decrease.style.height= "";
    decrease.style.transitionDuration = "200ms";
}
let imageDecrease= document.getElementById("spice");
imageDecrease= document.addEventListener("mouseout",alertImageDecrease);//ends here


//decrease the second image of the african product
function alertFruitsChange(){
    let imageChange = document.getElementById("fruits");
    imageChange.style.width= "75%";
    imageChange.style.height= "50%";
}
let differ = document.getElementById("fruits");
differ.addEventListener("mouseenter",alertFruitsChange);

//normalize the second image of the african product
function alertFruitDecrease(){
    let decrease=document.getElementById("fruits");
    decrease.style.width="";
    decrease.style.height= "";
    decrease.style.transitionDuration = "200ms";
}
let fruitDecrease= document.getElementById("fruits");
fruitDecrease= document.addEventListener("mouseout",alertFruitDecrease);  //ends here


//decrease the third image of the african product
function alertMaizeChange(){
    let imageChange = document.getElementById("maize");
    imageChange.style.width= "75%";
    imageChange.style.height= "50%";
}
let different = document.getElementById("maize");
different.addEventListener("mouseenter",alertMaizeChange);

//normalize the third image of the african product
function alertMaizeDecrease(){
    let decrease=document.getElementById("maize");
    decrease.style.width="";
    decrease.style.height= "";
    decrease.style.transitionDuration = "200ms";
}
let maizeDecrease= document.getElementById("maize");
maizeDecrease= document.addEventListener("mouseout",alertMaizeDecrease); //ends here


//decrease the forth image of the african product
function alertLegumeChange(){
    let imageChange = document.getElementById("legume");
    imageChange.style.width= "75%";
    imageChange.style.height= "50%";
}
let wrong = document.getElementById("legume");
wrong.addEventListener("mouseenter",alertLegumeChange);

//normalize the forth image of the african product
function alertLegumeDecrease(){
    let decrease=document.getElementById("legume");
    decrease.style.width="";
    decrease.style.height= "";
    decrease.style.transitionDuration = "200ms";
}
let legumeDecrease= document.getElementById("legume");
legumeDecrease= document.addEventListener("mouseout",alertLegumeDecrease); //ends here











previousscroll=window.pageYOffset;
if(window.innerHeight>800){
    window.onscroll = function(){
        currentscroll=window.pageYOffset;
        if(previousscroll > currentscroll){
            document.getElementById("top").style.top = "0";
            document.getElementById("top").style.boxShadow = "0 6px 6px hsl(0deg 0% 0% / 0.3)";
        }else{
            document.getElementById("top").style.top = "-50px";
            document.getElementById("top").style.boxShadow = "none";
        }
        previousscroll=currentscroll;
    } 
}

items = document.getElementsByClassName("menu-item");
experience = document.getElementsByClassName("actual-content");
items[0].onclick=function(){
    for (var x=0;x<items.length;x++){
        x==0?items[x].classList.add("selected"):items[x].classList.remove("selected");
        x==0?experience[x].classList.remove("invisible"):experience[x].classList.add("invisible");
    }
    
}
items[1].onclick=function(){
    for (var x=0;x<items.length;x++){
        x==1?items[x].classList.add("selected"):items[x].classList.remove("selected");
        x==1?experience[x].classList.remove("invisible"):experience[x].classList.add("invisible");
    }
}
items[2].onclick=function(){
    for (var x=0;x<items.length;x++){
        x==2?items[x].classList.add("selected"):items[x].classList.remove("selected");
        x==2?experience[x].classList.remove("invisible"):experience[x].classList.add("invisible");
    }
}
document.getElementById("github").onclick = function(){
    window.open("https://github.com/marcuschong2003");
}
document.getElementById("linkedin").onclick = function(){
    window.open("https://www.linkedin.com/in/chong-cheng-eng-106836240/");
}
document.getElementById("medium").onclick = function(){
    window.open("https://medium.com/@cryst2003");
}
document.getElementById("instagram").onclick = function(){
    window.open("https://www.instagram.com/bippityplsyeetme/");
}
document.getElementById("email").onclick = function(){
    document.location="mailto:marcuschong2003@gmail.com?subject=&body=";
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
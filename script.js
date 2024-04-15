
function navAnimation(){
    var nav = document.querySelector("nav")
    nav.addEventListener("mouseenter", function(){

        let tl = gsap.timeline()            //Timeline is used to make the gsap syncronous which means the gsap code will run according to the order 1 by 1.
        tl.to("#nav-bottom",{
            height:"28vh",
            // border:"2px solid green",
            duration:0.1,
            top:"50%"
        })
        tl.to(".bottom-content>h5>span",{
            display:"block",
            duration:0.1,
        })
        tl.from(".bottom-content>h5>span",{
            y:25,
            stagger:{
                amount:0.5,
            }
        })
    })
    nav.addEventListener("mouseleave",function(){
        let tl = gsap.timeline()
        
        tl.to(".bottom-content>h5>span",{
            y:20,
            stagger:{
                amount:0.5,
            }
        })
        tl.to(".bottom-content>h5",{
            display:"none",
            duration:0.1
        })
        tl.to("#nav-bottom",{
            height:0,
            duration:0.1,
            // transition:"0.5s linear",
        })
    })
    
}

function page2Ani(){

var rightContent = document.querySelectorAll(".right-content")

rightContent.forEach(function(content){
    content.addEventListener("mouseenter",function(){
        //console.log(content)                                            //This shows the elements in the div in the form of array #text is the space filler used to fill empty spaces.
        //console.log(content.chilNodes[1])                               //childNodes[] is used to target the child element in the array of elements like the 3rd element is the img in accr to the array of elements above so this targets the img tag.
        //content.childNodes[3].style.opacity=1                           //The targeted child element is then specified and styled accordingly using .style

        gsap.to(content.childNodes[3],{                         //Gsap used to make the opening and closing of the image smoother and to also add more styling simultaneously.
            opacity:1,
            scale:1
        })
    })
    content.addEventListener("mouseleave",function(){
        //content.childNodes[3].style.opacity=0                 //Gsap used to make the opening and closing of the image smoother and to also add more styling simultaneously.
        gsap.to(content.childNodes[3],{
            opacity:0,
            scale:0
        })
        console.log(content.getBoundingClientRect())        //.getBoundingClientRect() is used to 
    })
    content.addEventListener("mousemove",function(dets){
        gsap.to(content.childNodes[3],{
            x:dets.x - content.getBoundingClientRect().x - 90,
            y:dets.y - content.getBoundingClientRect().y - 120,
        })
    })
})
}

function page3Ani(){
var p3Center = document.querySelector("#page3-center")
var video = document.querySelector("#page3 video")

p3Center.addEventListener("click",function(){
    video.play()
    gsap.to("video",{
        transform:"scaleX(1) scaleY(1)",
        opacity:1,
        borderRadius:"0",
        zIndex:"999",
    })
})
video.addEventListener("click" , function(){
    video.pause()
    gsap.to("video",{
        transform:"scaleX(0) scaleY(0)",
        opacity:"0",
        borderRadius:"30px",
        zIndex:"1"
    })
})
}

function page6(){
    var section = document.querySelectorAll("#sec1-right")
section.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        elem.childNodes[3].style.opacity = 1,
        elem.childNodes[3].play()
    })
    elem.addEventListener("mouseleave", function(){
        elem.childNodes[3].style.opacity = 0,
        elem.childNodes[3].load()
    })
})
}








// navAnimation()
page2Ani()
page3Ani()
page6()
function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}


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
                amount:0.3,
            }
        })
    })
    nav.addEventListener("mouseleave",function(){
        let tl = gsap.timeline()
        
        tl.to(".bottom-content>h5>span",{
            y:25,
            stagger:{
                amount:0.3,
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

    gsap.to("nav",{
        height:"10vh",
        transition:"2s ease all",
        scrollTrigger:{
            trigger:"nav",
            scroller:"#main",
            start:"bottom -30%",
            // end:"top 100%",
            // markers:true,
            scrub:true,
        }
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
var vid = document.querySelector("#page3 video")

p3Center.addEventListener("click",function(){
    vid.load()
    vid.play()
    gsap.to("#page3>video",{
        transform:"scaleX(1) scaleY(1)",
        opacity:1,
        borderRadius:"0",
        zIndex:"1999",
    })
})
vid.addEventListener("click" , function(){
    vid.pause()
    gsap.to("#page3>video",{
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
        // elem.childNodes[1].style.opacity = 0,
        elem.childNodes[3].play()
    })
    elem.addEventListener("mouseleave", function(){
        elem.childNodes[3].style.opacity = 0,
        // elem.childNodes[1].style.opacity = 1,
        elem.childNodes[3].load()
    })
})

    var video = document.querySelectorAll(".video")
    video.forEach(function(vid){
        vid.addEventListener("mouseenter", function(){
            // console.log(vid.childNodes)
            gsap.to(vid.childNodes[5],{
                opacity:1,
                scale:1
            })
        })
        vid.addEventListener("mouseleave", function(){
            console.log(vid.childNodes)
            gsap.to(vid.childNodes[5],{
                opacity:0,
                scale:0,
            })
        })

        vid.addEventListener("mousemove",function(dets){
            gsap.to(vid.childNodes[5],{
                x: dets.x - vid.getBoundingClientRect().x -80,
                y:dets.y - vid.getBoundingClientRect().y - 650,  
                cursor:"pointer"
            })
        })
    })
}
function page6next(){
    // var card = document.querySelectorAll("#img-card")
    var ccard = document.querySelectorAll("#content-card")

    ccard.forEach(function(c){
        var car = c.childNodes[3]
        var ca = car.childNodes[5]
        console.log(car.childNodes)
        ca.addEventListener("mouseenter",function(){
            console.log(ca.childNodes)
            ca.childNodes[1].style.opacity=1;
            ca.childNodes[1].style.scale=1.35;
            ca.childNodes[1].play()

            let tl =gsap.timeline()
            
            tl.to(car.childNodes[1],{
                opacity:"0",
                duration:0.1

            })
            tl.to(car.childNodes[3],{
                opacity:"0",
                duration:0.1
            })
            tl.to(ca,{
                height:"100%",
                duration:0.2,
                borderRadius:"10px"
            })
            tl.to(ca.childNodes[3],{
                height:"100%"
            })
        })
        
        
        ca.addEventListener("mouseleave",function(){
            ca.childNodes[1].style.opacity=0
            // ca.childNodes[3].style.opacity=1
            
            let tl =gsap.timeline()
            tl.to(ca,{
                height:"50%",
                // scale:"1.4"
                duration:0.1,
                borderRadius:"0px"
            })
            tl.to(ca.childNodes[3],{
                height:"100%"
            })
            tl.to(car.childNodes[1],{
                opacity:"1",
                duration:0.1
            })
            tl.to(car.childNodes[3],{
                opacity:"1",
                duration:0.1
            })
        })
        
    })
        
}        
        
function page8(){

    gsap.from("#p8p2 h4",{
        x:0,
    duration:1,
    scrollTrigger:{
        trigger:"#p8p2",
        start:"top 80%",
        end:"top 20%",
        // markers:true,
        scrub:true,
        scroller:"#main",
    }
})
        
gsap.from("#p8p3 h4",{
    x:0,
    duration:1,
    scrollTrigger:{
        trigger:"#p8p3",
        start:"top 80%",
        end:"top 20%",
        // markers:true,
        scrub:true,
        scroller:"#main",
    }
})

gsap.from("#p8p4 h4",{
    x:0,
    duration:1,
    scrollTrigger:{
        trigger:"#p8p4",
        start:"top 80%",
        end:"top 20%",
        // markers:true,
        scrub:true,
        scroller:"#main",
    }
})
}
function loadingAnimation(){

    var tl = gsap.timeline()
    
    tl.from("#page1",{
        opacity:0,
        duration:0.2,
    })
    tl.from("#page1",{
        transform:"scaleX(0.6) scaleY(0.1) translateY(250%)",
        duration:2,
        borderRadius:"100px",
        ease:"expo.out",
    })
    tl.from("nav",{
        opacity:"0"
    })
    tl.from("#page1 h1 , #page1 p , #page1 div",{
        opacity:"0",
        y:40,
        stagger:0.5,
        duration:0.6,
    })
}





        
loadingAnimation()
locomotive()
navAnimation()
page2Ani()
page3Ani()
page6()
page6next()
page8()

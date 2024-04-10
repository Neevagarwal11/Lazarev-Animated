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
        y:25,
        duration:0.01,
        stagger:{
            amount:0.3,
        },
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
navAnimation()
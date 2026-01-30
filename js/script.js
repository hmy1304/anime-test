const btn = document.querySelector(".btn")
const path = anime.path(".circle path")
const tl = anime.timeline({ 
    defaults: { 
        duration: 750, 
        easing:"easeOutbounce"},
});

btn.addEventListener("click", () => {
    nameDraw()
    tl.add({
        targets:".circle path",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing:"easeInOutSine",
        duration:2500,
        opacity: 1,
    })

    tl.add({
        targets:".ico",
        opacity:1
    })

    anime({
        targets:".ico",
        translateX:path("x"),
        translateY:path("y"),
        rotate:path("angle"),
        easing:"linear",
        loop:true,
        duration:10000
    })

})

function nameDraw() {
    anime({
        targets:".name path",
        strokeDashoffset: [anime.setDashoffset, 0],
        duration:2000,
        delay:function(el, i) {
            return i*250
        },
        easing:"easeInOutSine"
    })
}

const tl = gsap.timeline({defaults: {duration:0.75, ease:"power1.out"}})
tl.fromTo('.main',{scale:0},{scale:1,ease: "elastic.out(1, 0.5)", duration:1.5})

const btn = document.querySelector('.bottom__continue').addEventListener('click', () => {
  gsap.to('.main',{opacity:0, x:200, duration:0.75, ease: "power1.out"})
})
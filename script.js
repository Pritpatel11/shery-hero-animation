Shery.imageEffect(".back", {
  style: 5, //Select Style
  gooey:true,
  config: {
    "a":{"value":0.92,"range":[0,30]},"b":{"value":-0.92,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.2257001647446457},"ignoreShapeAspect":{"value":false},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.09,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":0},"noise_speed":{"value":0,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.36,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.35,"range":[0,2]},"noise_scale":{"value":45.8,"range":[0,100]},
  },
  preset: "./presets/wigglewobble.json",
});

let main = document.querySelector(".main");

let elm = document.querySelectorAll('.elm');

elm.forEach((elm)=>{
    let h1 = elm.querySelectorAll('h1');
    let index = 0;
    let animating = false;
    main.addEventListener("click",()=>{
   if(!animating){
    animating = true;
    gsap.to(h1[index],{
        top:'-=100%',
        ease: Expo.easeInOut,
        duration:1,
        onComplete:function(){
            gsap.set(this._targets[0],{
                top:'100%'
            })
            animating = false
        },
   })
   index === h1.length-1 ? index = 0 : index++;
   gsap.to(h1[index],{
        top:'-=100%',
        ease: Expo.easeInOut,
        duration:1
   })
   }
})
})

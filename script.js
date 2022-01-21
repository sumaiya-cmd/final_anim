gsap.registerPlugin(ScrollTrigger);   //locomotive with scrolltrigger codepen

function locmotivejs(){

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#webpage"),
        smooth: true
      });

      locoScroll.on("scroll", ScrollTrigger.update);
      ScrollTrigger.scrollerProxy("#webpage", {
        scrollTop(value) {
          return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
          },
          pinType: document.querySelector("#webpage").style.transform ? "transform" : "fixed"
        });
       
        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
        ScrollTrigger.refresh();

}

locmotivejs();

if(window.screen.width> 450){

  function intializegsapfirstpage(){
    let tl = gsap.timeline({           //gsap scrolltigger use scrolltrigger cdn and gsap cdn from the same place gsap cdn
      scrollTrigger: {
        trigger: "#imgs",
        scroller: "#webpage",
        pin: true, 
        start: "top top", 
        scrub:1.5,
      }
    });
  
    tl
    .addLabel('abcd')          // label to animate at the same time and stagger for animation after a certain interval 
    .to('#l1',{
      x:'-130%',
      ease:Expo.easeInOut,
      opacity:0
    },"abcd")
    .to('#s1',{
      x:'-130%',
      ease:Expo.easeInOut,
      opacity:0
    },"abcd")
    .to('#l2',{
      x:'130%',
      ease:Expo.easeInOut,
      opacity:0
    },"abcd")
    .to('#s2',{
      x:'-130%',
      ease:Expo.easeInOut,
      opacity:0
    },"abcd")
    .to('#c1',{
        width:'100%',
        ease:Expo.easeInOut,
    },"abcd")
    
  }
  intializegsapfirstpage();


  function scrollTrigger_for_about(){
  
    let tl2forabout= gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        scroller: "#webpage",  
        start: "top 50%",  
        // markers:true 
      }
    });
    
    tl2forabout
    .to("#about .a", {
      onStart: function(){
        aboutxtilate();
      } ,
      opacity:1
    },"abcd")
    .to('.b',{
      onStart:function(){
        $('.b').textillate({
          selector: '.texts',
      
          loop: false,
        
      
          minDisplayTime: 2000,
      
          initialDelay: 0,
        
          autoStart: true,
      
          inEffects: [],
      
          outEffects: [ 'hinge' ],
      
          in: {
            effect: 'fadeInUp',
        
            delayScale: 0.5,
        
            delay: 30,
        
            sync: false,
      
            shuffle: false,
        
            reverse: false,
        
            callback: function () {}
          },
        
          type: 'word'
        });
      },
      opacity:1
    },"abcd")
    .from('.line',{
      width:'0%',
      duration:2,
      ease:Expo.easeInOut
    })
  
  
    ///////////////////////////////////////////////////tl3//////////////////////////////////////
    let tl3forabout= gsap.timeline({
      scrollTrigger: {
        trigger: ".line",
        scroller: "#webpage",  
        start: "top 50%",  
        // markers:true 
      }
    });
  
    tl3forabout
    .to('.ab',{
      onStart:function(){
        $('.ab').textillate({
          selector: '.texts',
      
          loop: false,
        
      
          minDisplayTime: 2000,
      
          initialDelay: 0,
        
          autoStart: true,
      
          inEffects: [],
      
          outEffects: [ 'hinge' ],
      
          in: {
            effect: 'fadeInUp',
        
            delayScale: 0.5,
        
            delay: 15,
        
            sync: false,
      
            shuffle: false,
        
            reverse: false,
        
            callback: function () {}
          },
        
          type: 'word'
        });
      },
      opacity:.7
    })
    .to('.abc',{
      onStart:function(){
        $('.abc').textillate({
          selector: '.texts',
      
          loop: false,
        
      
          minDisplayTime: 2000,
      
          initialDelay: 0,
        
          autoStart: true,
      
          inEffects: [],
      
          outEffects: [ 'hinge' ],
      
          in: {
            effect: 'fadeInUp',
        
            delayScale: 0.5,
        
            delay: 30,
        
            sync: false,
      
            shuffle: false,
        
            reverse: false,
        
            callback: function () {}
          },
        
          type: 'word'
        });
      },
      opacity:1,
      delay:1
    })
    .to('#ellipse',{
      scale:1.5,
      opacity:1,
      ease:Expo.easeInOut,
      duration:2
    })
    .to('#ellipse img',{
      scale:1,
      opacity:1,
      ease:Expo.easeInOut,
      duration:2
    },'-=2')
  }
  scrollTrigger_for_about();

  
  function srolltrigger_for_collection(){
    let tl2=gsap.timeline({
      scrollTrigger: {
        trigger: "#collection",
        scroller: "#webpage",  
        start: "top 50%",  
        // markers:true ,
        // scrub:2
      }
    });
  
    tl2
    .from('.div',{
      y:12,
      opacity:0,
      ease:Expo.easeInOut,
      stagger:0.5
    },'abcd')
    .from('button',{
      y:10,
      opacity:0,
    },'abcd')
    .to('#collecimg',{
      scale:1.2,
      ease:Expo.easeInOut,
      duration:2,
      opacity:1
    },'abcd')
    .to('#collecimg img',{
      scale:1,
      ease:Expo.easeInOut,
      duration:2,
      opacity:1
    },'abcd')
    
  }
  srolltrigger_for_collection();
  
}

else if(window.screen.width<450){
  function scrollTrigger_for_about(){
  
    let tl2forabout= gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        scroller: "#webpage",  
        start: "top 50%",  
        // markers:true 
      }
    });
    
    tl2forabout
    .to("#about .a", {
      onStart: function(){
        aboutxtilate();
      } ,
      opacity:1
    },"abcd")
    .to('.b',{
      onStart:function(){
        $('.b').textillate({
          selector: '.texts',
      
          loop: false,
        
      
          minDisplayTime: 2000,
      
          initialDelay: 0,
        
          autoStart: true,
      
          inEffects: [],
      
          outEffects: [ 'hinge' ],
      
          in: {
            effect: 'fadeInUp',
        
            delayScale: 0.5,
        
            delay: 30,
        
            sync: false,
      
            shuffle: false,
        
            reverse: false,
        
            callback: function () {}
          },
        
          type: 'word'
        });
      },
      opacity:1
    },"abcd")
    .from('.line',{
      width:'0%',
      duration:2,
      ease:Expo.easeInOut
    })
  
  
    ///////////////////////////////////////////////////tl3//////////////////////////////////////
    let tl3forabout= gsap.timeline({
      scrollTrigger: {
        trigger: ".line",
        scroller: "#webpage",  
        start: "top 50%",  
        // markers:true 
      }
    });
  
    tl3forabout
    .to('.ab',{
      onStart:function(){
        $('.ab').textillate({
          selector: '.texts',
      
          loop: false,
        
      
          minDisplayTime: 2000,
      
          initialDelay: 0,
        
          autoStart: true,
      
          inEffects: [],
      
          outEffects: [ 'hinge' ],
      
          in: {
            effect: 'fadeInUp',
        
            delayScale: 0.5,
        
            delay: 15,
        
            sync: false,
      
            shuffle: false,
        
            reverse: false,
        
            callback: function () {}
          },
        
          type: 'word'
        });
      },
      opacity:.7
    })
    .to('.abc',{
      onStart:function(){
        $('.abc').textillate({
          selector: '.texts',
      
          loop: false,
        
      
          minDisplayTime: 2000,
      
          initialDelay: 0,
        
          autoStart: true,
      
          inEffects: [],
      
          outEffects: [ 'hinge' ],
      
          in: {
            effect: 'fadeInUp',
        
            delayScale: 0.5,
        
            delay: 30,
        
            sync: false,
      
            shuffle: false,
        
            reverse: false,
        
            callback: function () {}
          },
        
          type: 'word'
        });
      },
      opacity:1,
      delay:1
    })
    .to('#ellipse',{
      scale:1.5,
      opacity:1,
      ease:Expo.easeInOut,
      duration:2,
      delay:2
    })
    .to('#ellipse img',{
      scale:1,
      opacity:1,
      ease:Expo.easeInOut,
      duration:1,
    },'-=2')
  }
  scrollTrigger_for_about();


  function srolltrigger_for_collection(){
    let tl2=gsap.timeline({
      scrollTrigger: {
        trigger: "#collection",
        scroller: "#webpage",  
        start: "top 50%",  
        // markers:true ,
        // scrub:2
      }
    });
  
    tl2
    .from('.div',{
      y:12,
      opacity:0,
      ease:Expo.easeInOut,
      stagger:0.5
    },'abcd')
    .from('button',{
      y:10,
      opacity:0,
    },'abcd')
    .to('#collecimg',{
      scale:1.2,
      ease:Expo.easeInOut,
      duration:2,
      delay:2,
      opacity:1
    },'abcd')
    .to('#collecimg img',{
      scale:1,
      ease:Expo.easeInOut,
      duration:2,
      delay:2,
      opacity:1
    },'abcd')
    
  }
  srolltrigger_for_collection();
}

function initializetextilatefirstpage(){

  $('.tlt').textillate({                 // textillate cdns .. jquery , lettering, textillate cdn from textillate.js codepen settings 
    selector: '.texts',
    loop: false,
    minDisplayTime: 2000,
    initialDelay: 0,
    inEffects: [],

    in: {

      effect: 'fadeInUp',

      delayScale: 1,

      delay: 40,

      sync: false,

      shuffle: false,

      reverse: false,
  
      callback: function () {}
    },

    type: 'char'
  });
}
initializetextilatefirstpage()


function aboutxtilate(){
  $('#about  .a').textillate({
    selector: '.texts',

    loop: false,
  

    minDisplayTime: 2000,

    initialDelay: 0,
  
    autoStart: true,

    inEffects: [],

    outEffects: [ 'hinge' ],

    in: {
      effect: 'fadeInUp',
  
      delayScale: 0.6,
  
      delay: 50,
  
      sync: false,

      shuffle: false,
  
      reverse: false,
  
      callback: function () {}
    },
  
    out: {
      effect: 'hinge',
      delayScale: 1.5,
      delay: 50,
      sync: false,
      shuffle: false,
      reverse: false,
      callback: function () {}
    },
  
    callback: function () {},
  
    type: 'word'
  });  
}







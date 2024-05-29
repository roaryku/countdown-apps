// THANKSGIVING COUNTDOWN

function thanksCountDown () {
    const thanksDate = new Date ("November 23, 2024 00:00");
    const now = new Date ();
    const difference = thanksDate - now;
  
    const second = 1000;
    const minute = 60 * 1000;
    const hour = 60 * 60 * 1000;
    const day = 24 * 60 * 60 * 1000;
  
    const displayDay = Math.floor(difference / day);
    document.querySelector(".days").textContent = displayDay
    
    const displayHour = Math.floor((difference % day) / hour);
    document.querySelector(".hours").textContent = displayHour
    
    const displayMinute = Math.floor((difference % hour) / minute);
    document.querySelector(".minutes").textContent = displayMinute
    
    const displaySecond = Math.floor((difference % minute) / second);
    document.querySelector(".seconds").textContent = displaySecond
  
    if (difference <= 0 ) {
         document.querySelector(".days").textContent = 0;
         document.querySelector(".hours").textContent = 0;
         document.querySelector(".minutes").textContent = 0;
         document.querySelector(".seconds").textContent = 0;
         clearInterval(timerId);
         happyThanksgiving();
     }
    }
    
  
  let timerId = setInterval(thanksCountDown, 1000);
  
   function happyThanksgiving () {
      const heading = document.querySelector("h1");
      const paragrapg = document.querySelector("p");
      const block = document.querySelector(".container")
      
      heading.textContent = "Happy Thanksgiving !!!";
      heading.classList.add("headerChanged");
      paragrapg.style.display = "none";
      block.style.display = "none"
   }
  
   const button = document.querySelector("#myButton");
   button.addEventListener("click", () => {
      document.querySelector("#myAudio").play() 
      button.classList.add("red");
  })
  
  button.addEventListener("dblclick", () => {
     document.querySelector("#myAudio").pause()
     
     button.classList.remove("red");
  })

  // leave falling animation

  let falling = true;

  TweenLite.set("#leaves",{perspective: 600})
  
  
  let total = 60;
  let leaves = document.getElementById("leaves"),	 w = window.innerWidth, h = window.innerHeight;
   
   for (i=0; i<total; i++){ 
     let Div = document.createElement('div');
     TweenLite.set(Div,{attr:{class:'dot'},x:R(0,w),y:R(-200,-150),z:R(-200,-200)}, []);
     leaves.appendChild(Div);
     animm(Div);
   }
   
   function animm(elm){   
     TweenMax.to(elm,R(6,15),{y:h+100,ease:Linear.easeNone,repeat:-1,delay:-15});
     TweenMax.to(elm,R(4,8),{x:'+=100', rotationZ:R(0,180), repeat:-1, yoyo:true, ease:Sine.easeInOut});
     TweenMax.to(elm,R(2,8),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
   };
  
  function R(min,max) {return min+Math.random()*(max-min)};
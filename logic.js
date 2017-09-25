'use strict';
var logo = document.getElementById('logo'),
  dContent = document.getElementById('downContent'),
  dContainer = document.getElementById('downContainer'),

  // frame 1
  f1Header = document.getElementById('f1header'),
  f1Name = document.getElementById('f1name'),
  f1Phone1 = document.getElementById('phone1'),
  f1Phone2 = document.getElementById('phone2'),
  f1Cost = document.getElementById('f1cost'),

  // frame 2
  f2Header = document.getElementById('f2header'),
  f2Name = document.getElementById('f2name'),
  f2Tab1 = document.getElementById('tab1'),
  f2Tab2 = document.getElementById('tab2'),
  f2Cost = document.getElementById('f2cost'),

  // frame 3
  f3Logo = document.getElementById('f3logo'),
  f3Header = document.getElementById('f3header'),
  f3Cost = document.getElementById('f3cost'),

  speed = 0.27,
	tl = new TimelineLite();
;

function restartAnimation() {
  TweenMax.killAll();
  tl = new TimelineLite();
  TweenMax.to([
    logo,
    f1Header, f1Name, f1Phone1, f1Phone2, f1Cost,
    f2Header, f2Name, f2Tab1, f2Tab2, f2Cost,
    f3Logo, f3Header, f3Cost,
    dContent, dContainer
  ], 0, { x:0, y:0, opacity:1, scale:1 });
  TweenMax.to([f2Name, f2Header, f2Tab1, f2Tab2, f2Cost], 1, { opacity:0 });
  TweenMax.to([f3logo, f3Header, f3Cost], 1, { opacity:0 });
  startAnimation();
}
function startAnimation() {
  // 1-2 FRAME LOGO
  tl.from(logo, 1.25, { ease: Bounce.easeOut, y:-50 }, 1.25)

  // FRAME 1
  .from(f1Header, 1.25, { ease: Back.easeOut.config(3), x:-200 }, 1.5)
  .from(f1Name, 1.25, { ease: Back.easeOut.config(3), x:400 }, 1.75)
  .from(f1Phone1, 1.25, { ease: Back.easeOut.config(2), x:-200 }, 2)
  .from(f1Phone2, 1.25, { ease: Back.easeOut.config(2), x:300 }, 2)
  .from(f1Cost, 1.25, { ease: Bounce.easeOut, scale:3, opacity:0, x:50 }, 2.5)
  .to(f1Header, 1.25, { x:400 }, 5.5)
  .to(f1Name, 1.25, { x:-200 }, 5.5)
  .to(f1Phone1, 1.25, { x:300 }, 5)
  .to(f1Phone2, 1.25, { x:-200 }, 5.1)
  .to(f1Cost, 1.25, { scale:0.2, opacity:0 }, 5)

  // FRAME 2
  .to([f2Name, f2Header, f2Tab1, f2Tab2, f2Cost], 1, { opacity:1 }, 6.75)
  .from(f2Header, 1.25, { x:-200, y:-100 }, 6.75)
  .from(f2Name, 1.25, { x:300, y:-100 }, 6.75)
  .from(f2Tab1, 1.25, { y:-400 }, 6.5)
  .from(f2Tab2, 1.25, { y:400 }, 6.5)
  .from(f2Cost, 1.25, { scale:0.5, ease: Bounce.easeOut, x:400 }, 7)
  .to(f2Header, 1.25, { x:300 }, 10.25)
  .to(f2Name, 1.25, { x:-200 }, 10.25)
  .to(f2Tab1, 1.25, { y:400 }, 10.25)
  .to(f2Tab2, 1.25, { y:-350 }, 10.25)
  .to(f2Cost, 1.25, { x:400 }, 10.25)

  .to(logo, 1.25, { opacity:0, scale:0.1 }, 10.25)

  // FRAME 3
  .to([f3logo, f3Header, f3Cost], 1, { opacity:1 }, 11.25)
  .from(f3logo, 1.25, { ease: Bounce.easeOut, y:-200 }, 11.25)
  .from(f3Header, 1.25, { ease: SlowMo.ease.config(0.7, 0.7, false), y:450 }, 11.5)
  .from(f3Cost, 1.25, { x:200, y:200 }, 11.75)

  // BOTTOM SHOPS SLIDE
  .from(dContainer, 1, { y:55 }, 0.25)
  .from(dContent, 3, { x:300 }, 1)
  .to(dContent, 16, { x:-300, onComplete:restartAnimation }, 4)
}

function init(){
	console.log('banner loaded');
  startAnimation();
}

window.addEventListener('load', init);

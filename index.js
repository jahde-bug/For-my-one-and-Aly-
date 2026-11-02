// ✏️ Edit these: her name and your own words.
const NAME = "My one and aly!";
// One message appears each time she finds a matching pair (one per emoji).
const MATCHES = {
  "🎨": "Wow PRANG Water color WHAHAHHAHHA",
  "🍟": "Can't wait for our next potcor date<3",
  "💌": "You're my crafty babyyy",
  "🩷": "Pink reminds me of you!",
  "🍵": "I remember how much you like Hustle Ground's Matcha",
  "☕": "Wow mug from kkv? HAHHAHHA",
  "🥑": "Remember Avu?",
  "🌻": "You're my himawari:)",
  "🥿": "Wow Puma Ballet Shoes.",
  "🦞": "Seafood boil?",
  "🍫": "Every chocolate I see makes me remember how much I love you",
  "🍪": "I can't wait to buy you more cookies"
};
// ✏️ Your letter (first gift box). Each line in "body" is one paragraph.
const LETTER = {
  to: "To my one and only Aly!",
  body: [
    "Happiest birthday, my babyy!",
    "I hope you know how special this day is. It’s the day the world gave me someone so precious and special; the day the world gave me someone as beautiful as you.",
    "Thank you for being patient, for being so kind, for being understanding, for always being there for me, and most especially, for being YOU. I wish I could be right beside you today, holding your hands and looking into your eyes, just so I could remind you how special you are and how much you mean to me.",
    "College is hard, but having you by my side means so much more than you could ever realize. Sometimes, I might even say that you’re all I ever need. I’m so lucky to have you in my life, baby, and I hope that next year, we’ll finally be able to celebrate your birthday together. Maybe we’ll eat, play, watch something, or do whatever activities we feel like doing. I’m already so excited, and I can’t wait for that day to come.",
    "Thank you for always being there for me, for listening to me, and for making me feel that I never have to face things alone. Words could never fully express how grateful I am to have you as part of my life. And I want you to know that I’ll always be here for you, too. I’ve got your back, baby! I’ll be your number one supporter and your biggest fan. I’ll always be the boy who will cheer you on, believe in you, and love you through everything.",
    "Thank you for being the sunshine in my life. I can’t wait to see you again and create even more beautiful memories together, so please look forward to all the things we’ll experience. Remember that I will always love and choose you. I’ll choose to stay over and over again, even on the darkest and hardest days of our lives.",
    "I want you to know that you are loved every single day, even on the days when you feel like you don’t deserve it, because you absolutely do. You deserve to be loved, to be cared for, and to receive all the beautiful things this world has to offer. You are valuable simply because you are YOU. Never let yourself think otherwise.",
    "I’m so thankful that our paths crossed and that I get to be part of your life. Out of all the people I could have met, I’m grateful that I got to meet you. And if there’s one thing I hope you never forget, it’s that you will always have someone rooting for you, believing in you, and loving you wholeheartedly.",
    "I love you so much, my baby! Happiest birthday once again. I hope your day is as beautiful as you and your heart.",
    "I’ll always choose you!"
  ],
  from: "-Jadewberry"
};
const GIFTS = [
  {e:"💌", t:"A letter", kind:"letter"},
  {e:"🎵", t:"A song for you", kind:"song"},
  {e:"🩷", t:"Reasons I love you", kind:"reasons"}
];

// ✏️ Your song (second gift box): a short clip of KYGM (3:11 to 3:35). The file song.mp3 goes in the same folder as index.html.
const SONG = {
  file: "song.mp3",
  title: "KYGM",
  artist: "The Ridleys",
  note: "This song reminds me of you."
};

// ✏️ Reasons I love you (shown one at a time, in this order).
const REASONS = [
  "YOU",
  "Your existence",
  "You’re the most prettiest, cutest, most beautiful, attractive, gorgeous, stunning, adorable, charming, and irresistable person ever",
  "Your whole personality",
  "Your kisses",
  "Your hugs",
  "Your eyes",
  "Your sweet tooth",
  "Your voice and how listening to it soothes and calms me",
  "Your smile",
  "Your smell",
  "Your chubby cheeks",
  "How caring you are",
  "How attentive you are",
  "How you treat me with love and respect",
  "Your thoughtfulness",
  "Your kindness",
  "That you are so funny and corny and you always makes me happy and laugh",
  "You’re very smart",
  "You’re independent",
  "You know the things I hate and I love",
  "Your body",
  "That you always support me",
  "That you always have faith in me",
  "That you have faith in us",
  "You’re always here for me",
  "You’re always so strong",
  "That you are not afraid to cry in front of me",
  "That you never give up easily",
  "That you’re always madaldal and talkative when it comes to me",
  "You always make me feel special",
  "I dont get bored when I’m with you or talking to you",
  "You’re always here for me",
  "When you make DIYs for me",
  "When you write letters",
  "You include me in your future",
  "You listen to me",
  "Your compliments",
  "How you boost my self confidence",
  "How clingy you are to me",
  "Your skin",
  "Your nose",
  "Your hands",
  "Your body shape",
  "How random you are sometimes",
  "Your love for me",
  "How I can be myself when I’m with you",
  "You heal my inner child",
  "You’re such an amazing person",
  "The way you look at me with those pretty eyes",
  "You laugh at my unfunny and corny jokes",
  "How you’re such a hardwoking person",
  "Your loyalty",
  "Your kindness",
  "Your moodswings that just goes from happy to angry in seconds",
  "You know what makes me sad and happy",
  "You love my weirdness",
  "Your selflessness",
  "Your love for the color pink",
  "Your love for sanrio",
  "Your love for food",
  "Your apetite and how you make me finish your food",
  "Your aesthetic",
  "Your clothing style and how you dress yourself",
  "You always makes me proud",
  "Your touch",
  "You make my problems disappear",
  "You make my life bearable just by simple being in it",
  "You’re easy to love",
  "Your flaws and imperfections",
  "Your soul",
  "How you consider me in your daily life",
  "Your kissable cheeks and forehead",
  "How I can just be myself when I’m with you",
  "The way you comfort whenever I’m sad",
  "You’re open-minded",
  "Your cute height",
  "Your forgiveness",
  "Your singing",
  "Your laugh",
  "Your random burst of energy",
  "That you are so good at drawing things",
  "You are so great at your program",
  "You always impress me with you plates",
  "That you love your family",
  "You don’t tolerate bad things",
  "You keep trying to improve",
  "You make me feel like I’m the luckiest man alive",
  "Your cute gifts",
  "How cute you are whenever you are frustrated because of slow walkers",
  "How you just drag me around while holding my hand",
  "When you lay your head on my shoulders",
  "The way you talk",
  "Your vocabulary",
  "You’re honest",
  "You’re trustworthy",
  "Your random stories",
  "You’re my home",
  "You’re mine",
  "I love you and these words aren’t enough to describe or even define how special you are to me. I’ll always do my best for you and treat you the way that you always deserve. I love you so much!"
];
const FINAL = "Happy birthday, " + NAME.replace(/!+$/,"") + "! Thank you for being you. 💛";

const $ = s => document.querySelector(s);
const cols = ["#FF7FA8","#FFB3CC","#B9DDA0","#FF5C8F","#FFC2D4"];
const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;

// name, letter by letter
const h = $("#name");
[...(NAME.replace(/!+$/,"") + "!")].forEach((c,i)=>{const s=document.createElement("span");s.textContent=c===" "?"\u00a0":c;s.style.animationDelay=(i*70)+"ms";h.appendChild(s)});
h.setAttribute("aria-label", NAME.replace(/!+$/,"") + "!");

// confetti
const cv=$("#fx"),cx=cv.getContext("2d");let ps=[],run=false;
function size(){cv.width=innerWidth;cv.height=innerHeight}size();addEventListener("resize",size);
function boom(x,y,n){if(calm)return;for(let i=0;i<n;i++)ps.push({x,y,vx:(Math.random()-.5)*12,vy:Math.random()*-11-2,r:4+Math.random()*5,c:cols[i%cols.length],l:80+Math.random()*50});if(!run){run=true;tick()}}
function tick(){cx.clearRect(0,0,cv.width,cv.height);ps=ps.filter(p=>p.l-->0);ps.forEach(p=>{p.vy+=.3;p.x+=p.vx;p.y+=p.vy;if(p.m){mini(p)}else{cx.fillStyle=p.c;cx.fillRect(p.x,p.y,p.r,p.r*1.6)}});if(ps.length)requestAnimationFrame(tick);else{run=false;cx.clearRect(0,0,cv.width,cv.height)}}

function reveal(el){el.hidden=false;el.scrollIntoView({behavior:calm?"auto":"smooth",block:"start"})}

// memory match
const board=$("#board"),PAIRS=Object.keys(MATCHES);
let first=null,busy=false,found=0;
const deck=[...PAIRS,...PAIRS];
for(let i=deck.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[deck[i],deck[j]]=[deck[j],deck[i]]}
$("#count").textContent="0 / "+PAIRS.length+" pairs";
deck.forEach(e=>{
  const c=document.createElement("button");
  c.className="card";c.dataset.e=e;c.setAttribute("aria-label","Hidden card");
  c.innerHTML='<span class="in"><span class="face front">?</span><span class="face back">'+e+'</span></span>';
  c.onclick=()=>{
    if(busy||c.classList.contains("up"))return;
    c.classList.add("up");c.setAttribute("aria-label",e);
    if(!first){first=c;return}
    const a=first;first=null;
    if(a.dataset.e===e){
      a.classList.add("done");c.classList.add("done");found++;
      $("#note").textContent=MATCHES[e];
      $("#count").textContent=found+" / "+PAIRS.length+" pairs";
      const r=c.getBoundingClientRect();boom(r.left+r.width/2,r.top+r.height/2,25);
      if(found===PAIRS.length)setTimeout(()=>reveal($("#giftsec")),1400);
    }else{
      busy=true;
      setTimeout(()=>{[a,c].forEach(x=>{x.classList.remove("up");x.setAttribute("aria-label","Hidden card")});busy=false},800);
    }
  };
  board.appendChild(c);
});

// next button: only skips ahead after the warning window
const modal=$("#modal");
function closeModal(){modal.hidden=true;$("#hero").inert=false}
$("#next").onclick=()=>{
  if(found===PAIRS.length){reveal($("#giftsec"));return}
  modal.hidden=false;$("#hero").inert=true;$("#mback").focus();
};
$("#mback").onclick=()=>{closeModal();$("#board").scrollIntoView({behavior:calm?"auto":"smooth",block:"center"})};
$("#mcont").onclick=()=>{closeModal();reveal($("#giftsec"))};
addEventListener("keydown",e=>{if(e.key==="Escape"&&!modal.hidden)$("#mback").click()});

// gifts
let opened=0,cakeShown=false;
function maybeCake(delay){if(opened===GIFTS.length&&!cakeShown){cakeShown=true;setTimeout(()=>reveal($("#cakesec")),delay)}}
function lockPage(on){document.querySelectorAll("section").forEach(s=>s.inert=on)}
const OPEN={letter:()=>openLetter(),song:()=>openSong(),reasons:()=>openReasons()};
const AGAIN={letter:"Tap to read again",song:"Tap to listen again",reasons:"Tap for more"};
GIFTS.forEach(g=>{
  const b=document.createElement("button");b.className="gift";
  b.innerHTML=`<span class="em">🎁</span><strong>${g.t}</strong><span class="msg"></span>`;
  b.onclick=()=>{
    if(!b.classList.contains("open")){b.classList.add("open");opened++}
    b.querySelector(".em").textContent=g.e;
    b.querySelector(".msg").textContent=AGAIN[g.kind];
    OPEN[g.kind]();
  };
  $("#gifts").appendChild(b);
});

// letter
const L=$("#letter"),env=$("#env"),sheet=$("#sheet");
$("#lto").textContent=LETTER.to;
LETTER.body.forEach(t=>{const p=document.createElement("p");p.textContent=t;$("#lbody").appendChild(p)});
$("#lfrom").textContent=LETTER.from;
let letterSeen=false;
function checkEnd(){sheet.classList.toggle("end",sheet.scrollTop+sheet.clientHeight>=sheet.scrollHeight-8)}
sheet.addEventListener("scroll",checkEnd);addEventListener("resize",checkEnd);
function showSheet(){env.hidden=true;$("#envhint").hidden=true;sheet.hidden=false;$("#lclose").hidden=false;$("#lclose").focus();letterSeen=true;checkEnd()}
function openLetter(){
  L.hidden=false;document.querySelectorAll("section").forEach(s=>s.inert=true);
  env.classList.remove("open");sheet.scrollTop=0;
  if(letterSeen){showSheet();return}
  env.hidden=false;$("#envhint").hidden=false;sheet.hidden=true;$("#lclose").hidden=true;env.focus();
}
env.onclick=()=>{
  if(env.classList.contains("open"))return;
  env.classList.add("open");$("#envhint").textContent="";
  setTimeout(showSheet,calm?0:1200);
};
function closeLetter(){L.hidden=true;document.querySelectorAll("section").forEach(s=>s.inert=false);maybeCake(600)}
$("#lclose").onclick=closeLetter;
addEventListener("keydown",e=>{if(e.key==="Escape"&&!L.hidden&&!sheet.hidden)closeLetter()});

// song
const SO=$("#songov"),au=$("#audio"),seek=$("#seek"),splay=$("#splay");
const PLAY='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';
const PAUSE='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg>';
$("#stitle").textContent=SONG.title;$("#sartist").textContent=SONG.artist;$("#snote").textContent=SONG.note;
au.src=SONG.file;splay.innerHTML=PLAY;
function fmt(t){t=Math.floor(t||0);return Math.floor(t/60)+":"+String(t%60).padStart(2,"0")}
function setPlaying(on){SO.classList.toggle("playing",on);splay.innerHTML=on?PAUSE:PLAY;splay.setAttribute("aria-label",on?"Pause":"Play")}
au.onplay=()=>setPlaying(true);au.onpause=()=>setPlaying(false);au.onended=()=>setPlaying(false);
au.ontimeupdate=()=>{seek.value=au.duration?au.currentTime/au.duration*1000:0;$("#stime").textContent=fmt(au.currentTime)+" / "+fmt(au.duration)};
au.onloadedmetadata=()=>{$("#stime").textContent="0:00 / "+fmt(au.duration)};
au.onerror=()=>{$("#snote").textContent="Song file not found. Put "+SONG.file+" in the same folder as index.html."};
seek.oninput=()=>{if(au.duration)au.currentTime=seek.value/1000*au.duration};
splay.onclick=()=>{au.paused?au.play().catch(()=>{}):au.pause()};
function openSong(){SO.hidden=false;lockPage(true);splay.focus();au.play().catch(()=>{})}
function closeSong(){au.pause();SO.hidden=true;lockPage(false);maybeCake(600)}
$("#sclose").onclick=closeSong;

// reasons
const RO=$("#reasonov"),rnote=$("#rnote");let ri=0;
function setNote(text,n){
  const s=document.createElement("span");s.className="rtext";s.textContent=text;
  rnote.replaceChildren(s);
  rnote.classList.toggle("long",text.length>80);
  rnote.classList.toggle("xlong",text.length>180);
  if(n)rnote.dataset.n="#"+n;else delete rnote.dataset.n;
  rnote.scrollTop=0;
}
function paintReasons(){
  $("#rfill").style.width=(ri/REASONS.length*100)+"%";
  $("#rcount").textContent=ri+" / "+REASONS.length;
  if(ri>=REASONS.length){$("#rbtn").disabled=true;$("#rcount").textContent="And a million more 💗"}
}
$("#rbtn").onclick=e=>{
  if(ri>=REASONS.length)return;
  setNote(REASONS[ri],ri+1);ri++;paintReasons();
  rnote.classList.remove("pop");void rnote.offsetWidth;rnote.classList.add("pop");
  const r=e.currentTarget.getBoundingClientRect();boom(r.left+r.width/2,r.top+r.height/2,22);
};
function openReasons(){
  RO.hidden=false;lockPage(true);
  if(ri)setNote(REASONS[ri-1],ri);else setNote("Tap the heart to see why I love you.");
  paintReasons();$("#rbtn").focus();
}
function closeReasons(){RO.hidden=true;lockPage(false);maybeCake(600)}
$("#rclose").onclick=closeReasons;
addEventListener("keydown",e=>{
  if(e.key!=="Escape")return;
  if(!SO.hidden)closeSong();else if(!RO.hidden)closeReasons();
});

// cake: decorate it, light the candle, blow it out
const TOPS=["🍓","🌻","🩷","🌸","🍪","🍫","✨","🍃"];
const cake=$("#cake"),tops=$("#tops"),tray=$("#tray");
let pick=TOPS[0],placed=[],lit=false;
TOPS.forEach(t=>{
  const b=document.createElement("button");
  b.className="top";b.textContent=t;b.setAttribute("aria-label","Topping "+t);b.setAttribute("aria-pressed",t===pick);
  b.onclick=()=>{pick=t;[...tray.children].forEach(x=>x.setAttribute("aria-pressed",x===b))};
  tray.appendChild(b);
});
function updateCake(){
  const n=placed.length;
  $("#light").disabled=n<3;$("#undo").disabled=!n;$("#clear").disabled=!n;
  $("#chint").textContent=n<3?"Pick a topping, then tap the cake. Add at least 3!":"Looking good! Add more, or light the candle.";
}
function addTop(x,y){
  const t=document.createElementNS("http://www.w3.org/2000/svg","text");
  t.setAttribute("x",x);t.setAttribute("y",y);t.setAttribute("class","tp");
  t.style.rotate=Math.round(Math.random()*40-20)+"deg";
  t.textContent=pick;tops.appendChild(t);placed.push(t);updateCake();
}
cake.addEventListener("click",e=>{
  if(lit)return;
  const pt=cake.createSVGPoint();pt.x=e.clientX;pt.y=e.clientY;
  const p=pt.matrixTransform(cake.getScreenCTM().inverse());
  if(p.x<38||p.x>262||p.y<56||p.y>190)return;
  addTop(p.x,p.y);
});
$("#rand").onclick=()=>addTop(46+Math.random()*208,66+Math.random()*118);
$("#undo").onclick=()=>{const t=placed.pop();if(t)t.remove();updateCake()};
$("#clear").onclick=()=>{placed.forEach(t=>t.remove());placed=[];updateCake()};
updateCake();
$("#light").onclick=()=>{
  lit=true;
  [tray,$("#ctrls"),$("#light")].forEach(el=>el.hidden=true);
  $("#candle").removeAttribute("hidden");$("#blow").hidden=false;
  $("#ctitle").textContent="Make a wish!";
  $("#chint").textContent="Close your eyes, think of a wish, then blow out the candle.";
  $("#blow").focus();
};
$("#blow").onclick=function(){
  this.hidden=true;
  $("#flame").classList.add("out");$("#smoke").classList.add("on");
  $("#ctitle").textContent="Happy birthday!";
  $("#chint").textContent="";
  $("#final").textContent=FINAL;
  for(let i=0;i<5;i++)setTimeout(()=>boom(Math.random()*innerWidth,innerHeight*.4,50),i*250);
  setTimeout(()=>bouquets(innerWidth/2,innerHeight*.55,26),600);
};

// padlock
// ✏️ Set the secret code and hint (the code can be any length of digits).
const CODES=["110605","120725"], CODE=CODES[0], HINT="";
let entered="",unlocked=false;
const dots=$("#dots"),box=$("#lockbox"),msg=$("#lockmsg");
msg.textContent=HINT;
for(let i=0;i<CODE.length;i++)dots.appendChild(document.createElement("span"));
function paint(){[...dots.children].forEach((d,i)=>d.classList.toggle("on",i<entered.length))}
function press(k){
  if(unlocked)return;
  if(k==="ok"){submit();return}
  if(k==="del")entered=entered.slice(0,-1);
  else if(entered.length<CODE.length)entered+=k;
  paint();
}
function submit(){
  if(CODES.includes(entered)){
    unlocked=true;box.classList.add("open");msg.textContent="";
    boom(innerWidth/2,innerHeight/2,80);
    setTimeout(()=>{$("#lock").hidden=true;$("#flowers").hidden=false;scrollTo(0,0)},1300);
  }else{
    msg.textContent=entered.length<CODE.length?"Enter all "+CODE.length+" digits, then press OK.":"Not quite. Try again! "+HINT;
    box.classList.remove("shake");void box.offsetWidth;box.classList.add("shake");
    entered="";paint();
  }
}
[1,2,3,4,5,6,7,8,9,"del",0,"ok"].forEach(k=>{
  const b=document.createElement("button");
  b.className="key"+(k==="del"||k==="ok"?" "+k:"");
  if(k==="del")b.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5h11a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H9l-6-7z"/><path d="M13 9.5l5 5M18 9.5l-5 5"/></svg>';
  else b.textContent=k==="ok"?"OK":k;
  if(k==="del")b.setAttribute("aria-label","Delete");
  b.onclick=()=>press(String(k));
  $("#pad").appendChild(b);
});
addEventListener("keydown",e=>{
  if(/^\d$/.test(e.key))press(e.key);
  else if(e.key==="Backspace")press("del");
  else if(e.key==="Enter")press("ok");
});

// sunflowers
function mini(p){const s=p.s;cx.save();cx.translate(p.x,p.y);cx.rotate(p.a+=p.w);
  cx.fillStyle='#FF7FA8';cx.beginPath();cx.moveTo(-s*.5,0);cx.lineTo(s*.5,0);cx.lineTo(0,s*1.1);cx.closePath();cx.fill();
  cx.strokeStyle='#5E8F4A';cx.lineWidth=1.5;cx.beginPath();cx.moveTo(0,0);cx.lineTo(-s*.3,-s*.4);cx.moveTo(0,0);cx.lineTo(s*.3,-s*.4);cx.moveTo(0,0);cx.lineTo(0,-s*.6);cx.stroke();
  [[-.3,-.5],[.3,-.5],[0,-.75]].forEach(([a,b])=>{cx.fillStyle='#FFC21A';cx.beginPath();cx.arc(a*s,b*s,s*.28,0,7);cx.fill();cx.fillStyle='#7A4A1E';cx.beginPath();cx.arc(a*s,b*s,s*.11,0,7);cx.fill()});
  cx.restore()}
function bouquets(x,y,n){if(calm)return;for(let i=0;i<n;i++)ps.push({m:1,x,y,vx:(Math.random()-.5)*14,vy:-Math.random()*13-4,s:16+Math.random()*16,a:Math.random()*6,w:(Math.random()-.5)*.25,l:110+Math.random()*60});if(!run){run=true;tick()}}
let taps=0;
$('#bq').onclick=e=>{
  const x=e.clientX||innerWidth/2,y=e.clientY||innerHeight/2;
  bouquets(x,y,22);setTimeout(()=>bouquets(x,y,14),180);
  taps++;
  $('#fmsg').textContent=taps===1?'Click them':'Click them';
  $('#more').hidden=false;
};
$('#more').onclick=()=>{$('#flowers').hidden=true;$('#hero').hidden=false;scrollTo(0,0)};

var q=(l,t,i)=>{if(!t.has(l))throw TypeError("Cannot "+i)};var p=(l,t,i)=>{if(t.has(l))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(l):t.set(l,i)};var a=(l,t,i)=>(q(l,t,"access private method"),i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const h of n.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}})();const L=["嘿！旅行者啊，好像以前在這附近沒看過你","你應該是來自不同的地方吧？你長得跟我們有些不樣","一臉壽星樣的","我是一介用像素構成的農夫，歡迎你來到我的農場","既然我們會相遇一定也是我的創造者的安排，我有一事相求","是這樣的...","看到後面這片草原了嗎？","我的像素鴨鴨們因為網路太慢，所以通通都從穀倉跑出來了","你的能力應該有辦法幫我把他們通通抓回穀倉裡吧","當然，我也不會讓你做白工","穀倉代表著不同的願望","分別為財運、健康、感情、事業","只要把像素鴨鴨們丟到你想要的穀倉","穀倉裡的鴨鴨就會在未來一年用wifi光波幫助你","如何？這份交易不錯吧","你願意幫幫我嗎？","抱歉我忘記帶到拒絕的按鈕了","那麼我們就開始吧！"],R=["哇喔！看來像素鴨鴨們都回到他們穀倉裡了","真的非常感謝","這樣我就可以安穩的度過這一年了","希望妳在三九年華（？）的這年也是呢","好了，看來妳我相處的時間到了","我們來看看妳許了哪些願望吧，該幹活了鴨鴨們"],W={感情:"鴨鴨去找月老歡家",財運:"鴨鴨去找人資談加薪",健康:"鴨鴨給妳一根幸運健康羽毛",事業:"鴨鴨給妳押風水加班不再來"},P={感情:"去找月老歡家，然後物色一個對象送到妳面前，在認真生活的時候也可以留意一下週遭的人！",財運:"去找人資給妳談加薪，再去彩券行要裡面有2000萬的那本給妳呱，記得中了分我們一點！",健康:"搜集一百根幸運健康羽毛，再祝妳永遠都不要再嘴破，千秋萬世不失眠！",事業:"給妳押風水，你跟同事都超給力，加班從此變傳說"};class B{constructor(t,i,{width:s=120,height:e=90}={}){this.center=t,this.category=i,this.count=0,this.size={width:s,height:e}}putDuck(){this.count+=1}draw(t){const i=this.center.x-this.size.width/2,s=this.center.y-this.size.height/2,e=this.size.width/6,n=this.size.height/2,h=e/2;t.beginPath(),t.fillStyle="rgb(180, 21, 19)",t.rect(i+h,s+n*1,this.size.width-h*2,n),t.fill(),t.beginPath(),t.fillStyle="rgb(180, 21, 19)",t.moveTo(i+e*3,s),t.lineTo(i+e,s+n/2),t.lineTo(i,s+n),t.lineTo(i+this.size.width,s+n),t.lineTo(i+e*5,s+n/2),t.lineTo(i+e*3,s),t.closePath(),t.fill(),t.beginPath(),t.strokeStyle="white",t.lineWidth=5,t.moveTo(i+e*3,s),t.lineTo(i+e,s+n/2),t.lineTo(i,s+n),t.stroke(),t.moveTo(i+e*3,s),t.lineTo(i+e*5,s+n/2),t.lineTo(i+this.size.width,s+n),t.stroke(),t.beginPath(),t.fillStyle="white",t.rect(i+e,s+n*.75,e,e),t.rect(i+e*4,s+n*.75,e,e),t.fill(),t.beginPath(),t.fillStyle="black",t.rect(i+e*2,s+n*1.45,e*2,n*.55),t.fill(),t.beginPath(),t.font="24px 'Stick'",t.fillStyle="white",t.fillText(`${this.count} ${this.category}`,this.center.x,s+this.size.height+n/4)}}const z=(l,t)=>{const i=Math.abs(l.x-t.x),s=Math.abs(l.y-t.y);return Math.hypot(i,s)},F=()=>navigator.userAgent.includes("Safari");var y,E;class G{constructor(t,i){p(this,y);this.id=i,this.center=t,this.size=60,this.speed=1,this.directionX=0,this.directionY=0,this.isCatch=!1,this.count=Math.min(3,Math.random()*5)*60,a(this,y,E).call(this)}draw(t){if(this.isCatch){this.drawCatchingDuck(t);return}this.drawNormalDuck(t)}drawCatchingDuck(t){const i=this.center.x-this.size/2,s=this.center.y-this.size/2,e=this.size/8;t.beginPath(),t.fillStyle="white",t.rect(i+e*3,s,e*2,e*3),t.rect(i+e*2,s+e*3,e*4,e),t.rect(i+e,s+e*4,e*6,e),t.rect(i,s+e*5,this.size,e*2),t.rect(i+e,s+e*7,e*6,e),t.fill(),t.beginPath(),t.fillStyle="black",t.rect(i+e*3.25,s+e*1,e/2,e/2),t.rect(i+e*4.25,s+e*1,e/2,e/2),t.fill(),t.beginPath(),t.fillStyle="orange",t.rect(i+e*2.5,s+e*2,e,e/4),t.fill(),t.beginPath(),t.strokeStyle="orange",t.lineWidth=4,t.moveTo(i+e*3.5,s+this.size),t.lineTo(i+e*3.5,s+this.size+e*1.5),t.moveTo(i+e*4.5,s+this.size),t.lineTo(i+e*4.5,s+this.size+e*1.5),t.stroke()}drawHead(t){const i=this.center.x-this.size/2,s=this.center.y-this.size/2,e=this.size/4;t.fillStyle="white";const n=this.directionX>0?i+e*3:i;t.rect(n,s,e,e*2),t.fill(),t.fillStyle="orange";const h={x:e/2,y:e/4};t.beginPath();const r=this.directionX>0?i+e*4:n-h.x;t.rect(r,s+e,h.x,h.y),t.fill(),t.fillStyle="black";const c=e/4;t.beginPath(),t.rect(n+e/2,s+e/2,c,c),t.fill()}drawBody(t){const i=this.center.x-this.size/2,s=this.size/4;t.beginPath(),t.fillStyle="white",t.rect(i,this.center.y,this.size,s*2),t.fill(),t.beginPath(),t.strokeStyle="gray",t.lineWidth=3;const e=this.directionX>0?i+s*3:i+s,n=this.directionX>0?e-s*2:e+s*2;t.moveTo(e,this.center.y+s/2),t.lineTo(e,this.center.y+s*1.5),t.lineTo(n,this.center.y+s*1.5),t.stroke()}drawFeet(t){const i=this.size/16,s=this.center.y+this.size/2-i,e=this.directionX>0?this.center.x-i:this.center.x+i;t.beginPath(),t.strokeStyle="orange",t.lineWidth=4,t.moveTo(e,s),t.lineTo(e,s+i*4);let n=this.directionX>0?e+i:e-i;t.lineTo(n,s+i*4),t.moveTo(e-i*2,s+i),t.lineTo(e-i*2,s+i*4),n=this.directionX>0?e-i:e-i*3,t.lineTo(n,s+i*4),t.stroke()}drawNormalDuck(t){this.drawBody(t),this.drawHead(t),this.drawFeet(t)}pick(){this.isCatch=!0}release(){this.isCatch=!1,a(this,y,E).call(this)}workAround(t,i){if(this.isCatch)return;const{x:s,y:e}=this.center;(s+this.size/2>=t||s-this.size/2<=0)&&(this.directionX=0-this.directionX),(e+this.size/2>=i||e-this.size/2<=0)&&(this.directionY=0-this.directionY),this.center.move(s+this.directionX*this.speed,e+this.directionY*this.speed),this.count-=1,this.count<0&&(a(this,y,E).call(this),this.count=Math.min(5,Math.random()*15)*60)}escape(){this.directionX=0-this.directionX,this.directionY=0-this.directionY,this.speed=F()?4:2}}y=new WeakSet,E=function(){const t=Math.random()*Math.PI*2-Math.PI;this.directionX=Math.cos(t),this.directionY=Math.sin(t);let i=Math.floor(Math.random()*2)+1;this.speed=F()?i/2:i};class M{constructor(t,i){this.x=t,this.y=i}move(t,i){this.x=t,this.y=i}}var m,b,v,k,g,S,T,C,X,I;class V{constructor(t){p(this,m);p(this,v);p(this,g);p(this,T);p(this,X);this.canvas=t,this.ctx=t.getContext("2d"),this.wishes=["❤️❤️","💰💰","💪💪","💼💼"],this.ducks=[],this.huts=[],this.isStart=!1,this.isFinish=!1,this.drag=!1,this.selected=null}start(){this.isStart=!0,this.isFinish=!1,this.generateField(),a(this,T,C).call(this)}finish(){this.isFinish=!0,a(this,X,I).call(this)}generateField(){const t=Array.from(Array(10)).map((h,r)=>new G(new M(this.canvas.width/2,this.canvas.height/2),r));this.ducks=t;const i=80,s=50,e=h=>{let r=Math.floor(Math.random()*(this.canvas.width-i)),c=Math.floor(Math.random()*(this.canvas.height-s));r<i&&(r=i),c<s&&(c=s);const f=new M(r,c);let d=!0;const o=Math.hypot(i,s);return h.forEach(u=>{z(u,f)<o&&(d=!1)}),this.ducks.forEach(u=>{z(u.center,f)<o&&(d=!1)}),d?f:e(h)},n=[];for(let h=0;h<this.wishes.length;h+=1){const r=e(n.map(c=>c.center));n.push(new B(r,this.wishes[h],{width:i,height:s}))}this.huts=n}checkIsCloseToHut(t){const i=this.huts.length>0?Math.hypot(this.huts[0].size.width,this.huts[0].size.height)/1.5:80;return this.huts.find(e=>z(e.center,t.center)<i)}draw(){!this.isStart||this.isFinish||(this.isStart&&this.ducks.length<1&&(this.finish(),console.log(this.isStart,this.isFinish)),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),!(this.ducks.length<1)&&(this.huts.forEach(t=>{t.draw(this.ctx)}),this.ducks.forEach(t=>{this.checkIsCloseToHut(t)&&t.escape(),t.workAround(this.canvas.width,this.canvas.height),t.draw(this.ctx)})))}makeResult(t){const i={"❤️❤️":{content:"感情",color:"pink"},"💰💰":{content:"財運",color:"gold"},"💪💪":{content:"健康",color:"green"},"💼💼":{content:"事業",color:"teal"}},s=this.huts.map(o=>o.count).reduce((o,u)=>o+u),e=this.huts.map(o=>({title:i[o.category].content,color:i[o.category].color,score:o.count})).sort((o,u)=>u.score-o.score);let n="",h=e.filter(o=>o.score>0).length;const r=[];let c="";e.forEach(o=>{o.score>3&&r.push(o)});const f=r.length>0?r.map(o=>o.score).reduce((o,u)=>o+u):0;f>6&&r.length===1?(n=`鴨鴨看到妳對於${e[0].title}的執著了！`,c+=`<li style="margin-top: 5px">鴨鴨決定全力幫妳${P[e[0].title]}</li>`):r.length-h<=1&&f>7?(n="妳的願望好像著重在",r.forEach((o,u)=>{n+=o.title,u+1!==r.length&&(n+="和"),u<1?c+=`<li style="margin-top: 5px">鴨鴨先${P[o.title]}</li>`:c+=`<li style="margin-top: 5px">再${P[o.title]}</li>`}),n+="呢！"):(n="哇看起來妳有很多想做的事呢！看來只好鴨分多路了",e.forEach(o=>{c+=`<li style="margin-top: 5px">${W[o.title]}</li>`}),c+='<li style="margin-top: 5px">鴨鴨好忙</li>');const d=`
    <div style="width: 100%; display: flex; flex-wrap: no-wrap; justify-content: space-between; margin-bottom: 15px">
      <div class="width: 25%; font-size: 10px">
        <span style="display: inline-block; width: 15px; height: 15px; background: ${e[0].color}">
        </span>
        ${e[0].title}
      </div>
      <div class="width: 25%; font-size: 10px">
        <span style="display: inline-block; width: 15px; height: 15px; background: ${e[1].color}">
        </span>
        ${e[1].title}
      </div>
      <div class="width: 25%; font-size: 10px">
        <span style="display: inline-block; width: 15px; height: 15px; background: ${e[2].color}">
        </span>
        ${e[2].title}
      </div>
      <div class="width: 25%; font-size: 10px">
        <span style="display: inline-block; width: 15px; height: 15px; background: ${e[3].color}">
        </span>
        ${e[3].title}
      </div>
    </div>
      <div style="width: 100%; height: 15px; display: flex; flex-wrap: no-wrap; margin-bottom: 15px">
        <div style="width: ${e[0].score/s*100}%; background: ${e[0].color}">${e[0].score||""}</div>
        <div style="width: ${e[1].score/s*100}%; background: ${e[1].color}">${e[1].score||""}</div>
        <div style="width: ${e[2].score/s*100}%; background: ${e[2].color}">${e[2].score||""}</div>
        <div style="width: ${e[3].score/s*100}%; background: ${e[3].color}">${e[3].score||""}</div>
      </div>
      <p>${n}</p>
      <ul>
        ${c}
      </ul>
      <p>
        壽星覺得怎麼樣呢！希望我們有幫到妳～
      </p>
    `;return[...t,d]}}m=new WeakSet,b=function(t){if(!this.isStart||this.isFinish)return;this.drag=!0;const i=t.type==="touchstart"?t.touches[0].clientX:t.offsetX,s=t.type==="touchstart"?t.touches[0].clientY:t.offsetY,e=new M(i,s);let n=Number.MAX_SAFE_INTEGER,h=null;const r=this.ducks[0].size;if(this.ducks.forEach(c=>{const f=z(c.center,e);f<n&&f<r&&(n=f,h=c)}),h){this.selected=h,this.selected.pick();return}this.selected=null},v=new WeakSet,k=function(t){if(!this.selected||!this.drag)return;const i=t.type==="touchmove"?t.touches[0].clientX:t.offsetX,s=t.type==="touchmove"?t.touches[0].clientY:t.offsetY;this.drag&&this.selected.center.move(i,s)},g=new WeakSet,S=function(){if(!this.isStart||this.isFinish)return;this.selected&&this.selected.release();const t=this.selected?this.checkIsCloseToHut(this.selected):null;if(t){const i=this.ducks.findIndex(s=>s.id===this.selected.id);t.putDuck(),this.ducks.splice(i,1)}this.drag=!1,this.selected=null},T=new WeakSet,C=function(){this.canvas.addEventListener("mousedown",a(this,m,b).bind(this)),this.canvas.addEventListener("touchstart",a(this,m,b).bind(this)),this.canvas.addEventListener("touchmove",a(this,v,k).bind(this)),this.canvas.addEventListener("mousemove",a(this,v,k).bind(this)),this.canvas.addEventListener("mouseup",a(this,g,S).bind(this)),this.canvas.addEventListener("touchend",a(this,g,S).bind(this))},X=new WeakSet,I=function(){this.canvas.removeEventListener("mousedown",a(this,m,b).bind(this)),this.canvas.removeEventListener("touchstart",a(this,m,b).bind(this)),this.canvas.removeEventListener("touchmove",a(this,v,k).bind(this)),this.canvas.removeEventListener("mousemove",a(this,v,k).bind(this)),this.canvas.removeEventListener("mouseup",a(this,g,S).bind(this)),this.canvas.removeEventListener("touchend",a(this,g,S).bind(this))};const _=()=>{const l=document.querySelector("body"),t=document.querySelector(".contact"),i=document.querySelector(".show-story"),s=document.querySelector(".next"),e=document.querySelector(".prev"),n=document.querySelector(".restart"),h=(H,N)=>{t.innerHTML=H[N]};let r=0;const c=()=>{if(r-=1,h(L,r),r<1){e.classList.add("hide");return}e.classList.remove("hide")},f=()=>{if(r+1>=L.length){s.classList.add("hide"),e.classList.add("hide"),i.classList.add("hide"),s.removeEventListener("click",f),e.removeEventListener("click",c),w.start(),Y();return}r+=1,h(L,r),r>0&&e.classList.remove("hide")};h(L,r),s.addEventListener("click",f),e.addEventListener("click",c);let d=0,o=[];const u=()=>{d+=1,h(o,d),d>0&&e.classList.remove("hide"),d+1>=o.length&&(s.classList.add("hide"),n.classList.remove("hide"))},A=()=>{if(d-=1,h(o,d),d+1!==o.length&&!n.classList.contains("hide")&&(n.classList.add("hide"),s.classList.remove("hide")),d<1){e.classList.add("hide");return}e.classList.remove("hide")},O=()=>{o=w.makeResult(R),s.addEventListener("click",u),e.addEventListener("click",A),s.classList.remove("hide"),e.classList.remove("hide"),i.classList.remove("hide"),h(o,d)},$=document.getElementById("CANVAS");$.width=l.offsetWidth,$.height=l.offsetHeight;const w=new V($),D=()=>{window.location.reload()};n.addEventListener("click",D);const Y=()=>{if(w.isStart&&w.isFinish){O();return}w.draw(),requestAnimationFrame(Y)}};window.onload=_;

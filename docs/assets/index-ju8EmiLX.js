var E=(n,t,i)=>{if(!t.has(n))throw TypeError("Cannot "+i)};var d=(n,t,i)=>{if(t.has(n))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(n):t.set(n,i)};var l=(n,t,i)=>(E(n,t,"access private method"),i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const h of e)if(h.type==="childList")for(const o of h.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const h={};return e.integrity&&(h.integrity=e.integrity),e.referrerPolicy&&(h.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?h.credentials="include":e.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function s(e){if(e.ep)return;e.ep=!0;const h=i(e);fetch(e.href,h)}})();class Y{constructor(t,i,{width:s=120,height:e=90}={}){this.center=t,this.category=i,this.count=0,this.size={width:s,height:e}}putDuck(){this.count+=1}draw(t){const i=this.center.x-this.size.width/2,s=this.center.y-this.size.height/2,e=this.size.width/6,h=this.size.height/2,o=e/2;t.beginPath(),t.fillStyle="rgb(180, 21, 19)",t.rect(i+o,s+h*1,this.size.width-o*2,h),t.fill(),t.beginPath(),t.fillStyle="rgb(180, 21, 19)",t.moveTo(i+e*3,s),t.lineTo(i+e,s+h/2),t.lineTo(i,s+h),t.lineTo(i+this.size.width,s+h),t.lineTo(i+e*5,s+h/2),t.lineTo(i+e*3,s),t.closePath(),t.fill(),t.beginPath(),t.strokeStyle="white",t.lineWidth=5,t.moveTo(i+e*3,s),t.lineTo(i+e,s+h/2),t.lineTo(i,s+h),t.stroke(),t.moveTo(i+e*3,s),t.lineTo(i+e*5,s+h/2),t.lineTo(i+this.size.width,s+h),t.stroke(),t.beginPath(),t.fillStyle="white",t.rect(i+e,s+h*.75,e,e),t.rect(i+e*4,s+h*.75,e,e),t.fill(),t.beginPath(),t.fillStyle="black",t.rect(i+e*2,s+h*1.45,e*2,h*.55),t.fill()}}var u,w;class A{constructor(t,i){d(this,u);this.id=i,this.center=t,this.size=60,this.speed=1,this.directionX=0,this.directionY=0,this.isCatch=!1,this.count=Math.min(5,Math.random()*15)*60,l(this,u,w).call(this)}draw(t){if(this.isCatch){this.drawCatchingDuck(t);return}this.drawNormalDuck(t)}drawCatchingDuck(t){const i=this.center.x-this.size/2,s=this.center.y-this.size/2,e=this.size/8;t.beginPath(),t.fillStyle="white",t.rect(i+e*3,s,e*2,e*3),t.rect(i+e*2,s+e*3,e*4,e),t.rect(i+e,s+e*4,e*6,e),t.rect(i,s+e*5,this.size,e*2),t.rect(i+e,s+e*7,e*6,e),t.fill(),t.beginPath(),t.fillStyle="black",t.rect(i+e*3.25,s+e*1,e/2,e/2),t.rect(i+e*4.25,s+e*1,e/2,e/2),t.fill(),t.beginPath(),t.fillStyle="orange",t.rect(i+e*2.5,s+e*2,e,e/4),t.fill(),t.beginPath(),t.strokeStyle="orange",t.lineWidth=4,t.moveTo(i+e*3.5,s+this.size),t.lineTo(i+e*3.5,s+this.size+e*1.5),t.moveTo(i+e*4.5,s+this.size),t.lineTo(i+e*4.5,s+this.size+e*1.5),t.stroke()}drawHead(t){const i=this.center.x-this.size/2,s=this.center.y-this.size/2,e=this.size/4;t.fillStyle="white";const h=this.directionX>0?i+e*3:i;t.rect(h,s,e,e*2),t.fill(),t.fillStyle="orange";const o={x:e/2,y:e/4};t.beginPath();const a=this.directionX>0?i+e*4:h-o.x;t.rect(a,s+e,o.x,o.y),t.fill(),t.fillStyle="black";const r=e/4;t.beginPath(),t.rect(h+e/2,s+e/2,r,r),t.fill()}drawBody(t){const i=this.center.x-this.size/2,s=this.size/4;t.beginPath(),t.fillStyle="white",t.rect(i,this.center.y,this.size,s*2),t.fill(),t.beginPath(),t.strokeStyle="gray",t.lineWidth=3;const e=this.directionX>0?i+s*3:i+s,h=this.directionX>0?e-s*2:e+s*2;t.moveTo(e,this.center.y+s/2),t.lineTo(e,this.center.y+s*1.5),t.lineTo(h,this.center.y+s*1.5),t.stroke()}drawFeet(t){const i=this.size/16,s=this.center.y+this.size/2-i,e=this.directionX>0?this.center.x-i:this.center.x+i;t.beginPath(),t.strokeStyle="orange",t.lineWidth=4,t.moveTo(e,s),t.lineTo(e,s+i*4);let h=this.directionX>0?e+i:e-i;t.lineTo(h,s+i*4),t.moveTo(e-i*2,s+i),t.lineTo(e-i*2,s+i*4),h=this.directionX>0?e-i:e-i*3,t.lineTo(h,s+i*4),t.stroke()}drawNormalDuck(t){this.drawBody(t),this.drawHead(t),this.drawFeet(t)}pick(){this.isCatch=!0}release(){this.isCatch=!1,l(this,u,w).call(this)}workAround(t,i){if(this.isCatch)return;const{x:s,y:e}=this.center;(s+this.size/2>=t||s-this.size/2<=0)&&(this.directionX=0-this.directionX),(e+this.size/2>=i||e-this.size/2<=0)&&(this.directionY=0-this.directionY),this.center.move(s+this.directionX*this.speed,e+this.directionY*this.speed),this.count-=1,this.count<0&&(l(this,u,w).call(this),this.count=Math.min(5,Math.random()*15)*60)}escape(){this.directionX=0-this.directionX,this.directionY=0-this.directionY;const t=(Math.floor(Math.random()*2)+1)/2;this.speed=t}}u=new WeakSet,w=function(){const t=Math.random()*Math.PI*2-Math.PI;this.directionX=Math.cos(t),this.directionY=Math.sin(t);const i=(Math.floor(Math.random()*2)+1)/2;this.speed=i};class b{constructor(t,i){this.x=t,this.y=i}move(t,i){this.x=t,this.y=i}}const m=(n,t)=>{const i=Math.abs(n.x-t.x),s=Math.abs(n.y-t.y);return Math.hypot(i,s)};var f,k,g,X,y,T,p,M;class C{constructor(t){d(this,f);d(this,g);d(this,y);d(this,p);this.canvas=t,this.ctx=t.getContext("2d"),this.ducks=[],this.huts=[],this.isStart=!1,this.isFinish=!1,this.drag=!1,this.selected=null}start(){this.isStart=!0,this.generateField(),l(this,p,M).call(this)}generateField(){const t=Array.from(Array(10)).map((a,r)=>new A(new b(this.canvas.width/2,this.canvas.height/2),r));this.ducks=t;const i=100,s=80,e=a=>{let r=Math.floor(Math.random()*(this.canvas.width-i)),c=Math.floor(Math.random()*(this.canvas.height-s));r<i&&(r=i),c<s&&(c=s);const v=new b(r,c);let S=!0;const P=Math.hypot(i,s);return a.forEach(z=>{m(z,v)<P&&(S=!1)}),this.ducks.forEach(z=>{m(z.center,v)<P&&(S=!1)}),S?v:e(a)},h=["感情","事業","財運","健康"],o=[];for(let a=0;a<h.length;a+=1){const r=e(o.map(c=>c.center));o.push(new Y(r,h[a],{width:i,height:s}))}this.huts=o}checkIsCloseToHut(t){const i=this.huts.length>0?Math.hypot(this.huts[0].size.width,this.huts[0].size.height)/1.5:80;return this.huts.find(e=>m(e.center,t.center)<i)}draw(){!this.isStart||this.isFinish||(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),!(this.ducks.length<1)&&(this.huts.forEach(t=>{t.draw(this.ctx)}),this.ducks.forEach(t=>{this.checkIsCloseToHut(t)&&t.escape(),t.workAround(this.canvas.width,this.canvas.height),t.draw(this.ctx)})))}}f=new WeakSet,k=function(t){this.drag=!0;const i=t.type==="touchstart"?t.touches[0].clientX:t.offsetX,s=t.type==="touchstart"?t.touches[0].clientY:t.offsetY,e=new b(i,s);let h=Number.MAX_SAFE_INTEGER,o=null;const a=this.ducks[0].size;if(this.ducks.forEach(r=>{const c=m(r.center,e);c<h&&c<a&&(h=c,o=r)}),o){this.selected=o,this.selected.pick();return}this.selected=null},g=new WeakSet,X=function(t){if(!this.selected||!this.drag)return;const i=t.type==="touchmove"?t.touches[0].clientX:t.offsetX,s=t.type==="touchmove"?t.touches[0].clientY:t.offsetY;this.drag&&this.selected.center.move(i,s)},y=new WeakSet,T=function(){this.selected&&this.selected.release();const t=this.selected?this.checkIsCloseToHut(this.selected):null;if(t){const i=this.ducks.findIndex(s=>s.id===this.selected.id);t.putDuck(),this.ducks.splice(i,1)}this.drag=!1,this.selected=null},p=new WeakSet,M=function(){this.canvas.addEventListener("mousedown",l(this,f,k).bind(this)),this.canvas.addEventListener("touchstart",l(this,f,k).bind(this)),this.canvas.addEventListener("touchmove",l(this,g,X).bind(this)),this.canvas.addEventListener("mousemove",l(this,g,X).bind(this)),this.canvas.addEventListener("mouseup",l(this,y,T).bind(this)),this.canvas.addEventListener("touchend",l(this,y,T).bind(this))};const L=()=>{const n=document.getElementById("CANVAS");n.width=window.innerWidth,n.height=window.innerHeight-100;const t=new C(n);document.querySelector(".generate-duck").addEventListener("click",()=>{if(t.isStart){t.generateField();return}t.start(),s()});const s=()=>{t.draw(),requestAnimationFrame(s)}};window.onload=L;

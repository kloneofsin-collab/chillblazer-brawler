(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bo="186",xf=0,Ul=1,_f=2,Tr=1,vf=2,Ts=3,Ti=0,$e=1,Ge=2,Wn=0,Ps=1,De=2,Nl=3,Fl=4,Mf=5,is=100,yf=101,Sf=102,bf=103,Ef=104,wf=200,Tf=201,Af=202,Rf=203,nh=204,ih=205,Cf=206,Pf=207,Lf=208,If=209,Df=210,Uf=211,Nf=212,Ff=213,Of=214,Ya=0,qa=1,Za=2,Ns=3,Ka=4,Ja=5,$a=6,Qa=7,ko=0,zf=1,Bf=2,Dn=0,sh=1,rh=2,ah=3,oh=4,lh=5,ch=6,hh=7,fh=300,Ai=301,os=302,sa=303,ra=304,Xr=306,Dr=1e3,Ln=1001,ja=1002,He=1003,kf=1004,Js=1005,Je=1006,aa=1007,Si=1008,fn=1009,uh=1010,dh=1011,Fs=1012,Go=1013,Un=1014,yn=1015,Nn=1016,Ho=1017,Vo=1018,Os=1020,ph=35902,mh=35899,gh=1021,xh=1022,Sn=1023,qn=1026,bi=1027,Wo=1028,Xo=1029,Ri=1030,Yo=1031,qo=1033,Ar=33776,Rr=33777,Cr=33778,Pr=33779,to=35840,eo=35841,no=35842,io=35843,so=36196,ro=37492,ao=37496,oo=37488,lo=37489,Ur=37490,co=37491,ho=37808,fo=37809,uo=37810,po=37811,mo=37812,go=37813,xo=37814,_o=37815,vo=37816,Mo=37817,yo=37818,So=37819,bo=37820,Eo=37821,wo=36492,To=36494,Ao=36495,Ro=36283,Co=36284,Nr=36285,Po=36286,Gf=3200,Lo=0,Hf=1,ai="",Be="srgb",Fr="srgb-linear",Or="linear",me="srgb",oa=7680,Vf=519,Wf=512,Xf=513,Yf=514,Zo=515,qf=516,Zf=517,Ko=518,Kf=519,_h=35044,Ol="300 es",In=2e3,zs=2001;function Jf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Bs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $f(){const i=Bs("canvas");return i.style.display="block",i}const zl={};function zr(...i){const t="THREE."+i.shift();console.log(t,...i)}function vh(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xt(...i){i=vh(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ce(...i){i=vh(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function rs(...i){const t=i.join(" ");t in zl||(zl[t]=!0,Xt(...i))}function Qf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const jf={[Ya]:qa,[Za]:$a,[Ka]:Qa,[Ns]:Ja,[qa]:Ya,[$a]:Za,[Qa]:Ka,[Ja]:Ns};class Li{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bl=1234567;const Ls=Math.PI/180,ks=180/Math.PI;function Xn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function ee(i,t,e){return Math.max(t,Math.min(e,i))}function Jo(i,t){return(i%t+t)%t}function tu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function eu(i,t,e){return i!==t?(e-i)/(t-i):0}function Is(i,t,e){return(1-e)*i+e*t}function nu(i,t,e,n){return Is(i,t,1-Math.exp(-e*n))}function iu(i,t=1){return t-Math.abs(Jo(i,t*2)-t)}function su(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ru(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function au(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ou(i,t){return i+Math.random()*(t-i)}function lu(i){return i*(.5-Math.random())}function cu(i){i!==void 0&&(Bl=i);let t=Bl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function hu(i){return i*Ls}function fu(i){return i*ks}function uu(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function du(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function pu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function mu(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),f=a((t+n)/2),d=r((t-n)/2),h=a((t-n)/2),u=r((n-t)/2),m=a((n-t)/2);switch(s){case"XYX":i.set(o*f,l*d,l*h,o*c);break;case"YZY":i.set(l*h,o*f,l*d,o*c);break;case"ZXZ":i.set(l*d,l*h,o*f,o*c);break;case"XZX":i.set(o*f,l*m,l*u,o*c);break;case"YXY":i.set(l*u,o*f,l*m,o*c);break;case"ZYZ":i.set(l*m,l*u,o*f,o*c);break;default:Xt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Mn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Io={DEG2RAD:Ls,RAD2DEG:ks,generateUUID:Xn,clamp:ee,euclideanModulo:Jo,mapLinear:tu,inverseLerp:eu,lerp:Is,damp:nu,pingpong:iu,smoothstep:su,smootherstep:ru,randInt:au,randFloat:ou,randFloatSpread:lu,seededRandom:cu,degToRad:hu,radToDeg:fu,isPowerOfTwo:uu,ceilPowerOfTwo:du,floorPowerOfTwo:pu,setQuaternionFromProperEuler:mu,normalize:ge,denormalize:Mn},vl=class vl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};vl.prototype.isVector2=!0;let Tt=vl;class Fn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],f=n[s+2],d=n[s+3],h=r[a+0],u=r[a+1],m=r[a+2],v=r[a+3];if(d!==v||l!==h||c!==u||f!==m){let g=l*h+c*u+f*m+d*v;g<0&&(h=-h,u=-u,m=-m,v=-v,g=-g);let p=1-o;if(g<.9995){const y=Math.acos(g),T=Math.sin(y);p=Math.sin(p*y)/T,o=Math.sin(o*y)/T,l=l*p+h*o,c=c*p+u*o,f=f*p+m*o,d=d*p+v*o}else{l=l*p+h*o,c=c*p+u*o,f=f*p+m*o,d=d*p+v*o;const y=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=y,c*=y,f*=y,d*=y}}t[e]=l,t[e+1]=c,t[e+2]=f,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],f=n[s+3],d=r[a],h=r[a+1],u=r[a+2],m=r[a+3];return t[e]=o*m+f*d+l*u-c*h,t[e+1]=l*m+f*h+c*d-o*u,t[e+2]=c*m+f*u+o*h-l*d,t[e+3]=f*m-o*d-l*h-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),f=o(s/2),d=o(r/2),h=l(n/2),u=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=h*f*d+c*u*m,this._y=c*u*d-h*f*m,this._z=c*f*m+h*u*d,this._w=c*f*d-h*u*m;break;case"YXZ":this._x=h*f*d+c*u*m,this._y=c*u*d-h*f*m,this._z=c*f*m-h*u*d,this._w=c*f*d+h*u*m;break;case"ZXY":this._x=h*f*d-c*u*m,this._y=c*u*d+h*f*m,this._z=c*f*m+h*u*d,this._w=c*f*d-h*u*m;break;case"ZYX":this._x=h*f*d-c*u*m,this._y=c*u*d+h*f*m,this._z=c*f*m-h*u*d,this._w=c*f*d+h*u*m;break;case"YZX":this._x=h*f*d+c*u*m,this._y=c*u*d+h*f*m,this._z=c*f*m-h*u*d,this._w=c*f*d-h*u*m;break;case"XZY":this._x=h*f*d-c*u*m,this._y=c*u*d-h*f*m,this._z=c*f*m+h*u*d,this._w=c*f*d+h*u*m;break;default:Xt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],f=e[6],d=e[10],h=n+o+d;if(h>0){const u=.5/Math.sqrt(h+1);this._w=.25/u,this._x=(f-l)*u,this._y=(r-c)*u,this._z=(a-s)*u}else if(n>o&&n>d){const u=2*Math.sqrt(1+n-o-d);this._w=(f-l)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+c)/u}else if(o>d){const u=2*Math.sqrt(1+o-n-d);this._w=(r-c)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(l+f)/u}else{const u=2*Math.sqrt(1+d-n-o);this._w=(a-s)/u,this._x=(r+c)/u,this._y=(l+f)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,f=e._w;return this._x=n*f+a*o+s*c-r*l,this._y=s*f+a*l+r*o-n*c,this._z=r*f+a*c+n*l-s*o,this._w=a*f-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,e=Math.sin(e*c)/f,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ml=class Ml{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),f=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*f,this.y=n+l*f+o*c-r*d,this.z=s+l*d+r*f-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return la.copy(this).projectOnVector(t),this.sub(la)}reflect(t){return this.sub(la.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ml.prototype.isVector3=!0;let P=Ml;const la=new P,kl=new Fn,yl=class yl{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const f=this.elements;return f[0]=t,f[1]=s,f[2]=o,f[3]=e,f[4]=r,f[5]=l,f[6]=n,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],f=n[4],d=n[7],h=n[2],u=n[5],m=n[8],v=s[0],g=s[3],p=s[6],y=s[1],T=s[4],M=s[7],S=s[2],E=s[5],R=s[8];return r[0]=a*v+o*y+l*S,r[3]=a*g+o*T+l*E,r[6]=a*p+o*M+l*R,r[1]=c*v+f*y+d*S,r[4]=c*g+f*T+d*E,r[7]=c*p+f*M+d*R,r[2]=h*v+u*y+m*S,r[5]=h*g+u*T+m*E,r[8]=h*p+u*M+m*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return e*a*f-e*o*c-n*r*f+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8],d=f*a-o*c,h=o*l-f*r,u=c*r-a*l,m=e*d+n*h+s*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return t[0]=d*v,t[1]=(s*c-f*n)*v,t[2]=(o*n-s*a)*v,t[3]=h*v,t[4]=(f*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=u*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ca.makeScale(t,e)),this}rotate(t){return rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ca.makeRotation(-t)),this}translate(t,e){return rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ca.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};yl.prototype.isMatrix3=!0;let Kt=yl;const ca=new Kt,Gl=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hl=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gu(){const i={enabled:!0,workingColorSpace:Fr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===me&&(s.r=Yn(s.r),s.g=Yn(s.g),s.b=Yn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===me&&(s.r=as(s.r),s.g=as(s.g),s.b=as(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ai?Or:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return rs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return rs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Fr]:{primaries:t,whitePoint:n,transfer:Or,toXYZ:Gl,fromXYZ:Hl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:t,whitePoint:n,transfer:me,toXYZ:Gl,fromXYZ:Hl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}}),i}const ae=gu();function Yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function as(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Fi;class xu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Fi===void 0&&(Fi=Bs("canvas")),Fi.width=t.width,Fi.height=t.height;const s=Fi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Fi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Bs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Yn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Yn(e[n]/255)*255):e[n]=Yn(e[n]);return{data:e,width:t.width,height:t.height}}else return Xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let _u=0;class $o{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=Xn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ha(s[a].image)):r.push(ha(s[a]))}else r=ha(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ha(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xt("Texture: Unable to serialize Texture."),{})}let vu=0;const fa=new P;class Xe extends Li{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,n=Ln,s=Ln,r=Je,a=Si,o=Sn,l=fn,c=Xe.DEFAULT_ANISOTROPY,f=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=Xn(),this.name="",this.source=new $o(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(fa).x}get height(){return this.source.getSize(fa).y}get depth(){return this.source.getSize(fa).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Xt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Dr:t.x=t.x-Math.floor(t.x);break;case Ln:t.x=t.x<0?0:1;break;case ja:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Dr:t.y=t.y-Math.floor(t.y);break;case Ln:t.y=t.y<0?0:1;break;case ja:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=fh;Xe.DEFAULT_ANISOTROPY=1;const Sl=class Sl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],f=l[4],d=l[8],h=l[1],u=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,M=(u+1)/2,S=(p+1)/2,E=(f+h)/4,R=(d+v)/4,_=(m+g)/4;return T>M&&T>S?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=E/n,r=R/n):M>S?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=E/s,r=_/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=R/r,s=_/r),this.set(n,s,r,e),this}let y=Math.sqrt((g-m)*(g-m)+(d-v)*(d-v)+(h-f)*(h-f));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(d-v)/y,this.z=(h-f)/y,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this.w=ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this.w=ee(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Sl.prototype.isVector4=!0;let we=Sl;class Mu extends Li{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new Xe(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new $o(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bn extends Mu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Mh extends Xe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yu extends Xe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Wr=class Wr{constructor(t,e,n,s,r,a,o,l,c,f,d,h,u,m,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,f,d,h,u,m,v,g)}set(t,e,n,s,r,a,o,l,c,f,d,h,u,m,v,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=f,p[10]=d,p[14]=h,p[3]=u,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wr().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Oi.setFromMatrixColumn(t,0).length(),r=1/Oi.setFromMatrixColumn(t,1).length(),a=1/Oi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),f=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=a*f,u=a*d,m=o*f,v=o*d;e[0]=l*f,e[4]=-l*d,e[8]=c,e[1]=u+m*c,e[5]=h-v*c,e[9]=-o*l,e[2]=v-h*c,e[6]=m+u*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*f,u=l*d,m=c*f,v=c*d;e[0]=h+v*o,e[4]=m*o-u,e[8]=a*c,e[1]=a*d,e[5]=a*f,e[9]=-o,e[2]=u*o-m,e[6]=v+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*f,u=l*d,m=c*f,v=c*d;e[0]=h-v*o,e[4]=-a*d,e[8]=m+u*o,e[1]=u+m*o,e[5]=a*f,e[9]=v-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*f,u=a*d,m=o*f,v=o*d;e[0]=l*f,e[4]=m*c-u,e[8]=h*c+v,e[1]=l*d,e[5]=v*c+h,e[9]=u*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,u=a*c,m=o*l,v=o*c;e[0]=l*f,e[4]=v-h*d,e[8]=m*d+u,e[1]=d,e[5]=a*f,e[9]=-o*f,e[2]=-c*f,e[6]=u*d+m,e[10]=h-v*d}else if(t.order==="XZY"){const h=a*l,u=a*c,m=o*l,v=o*c;e[0]=l*f,e[4]=-d,e[8]=c*f,e[1]=h*d+v,e[5]=a*f,e[9]=u*d-m,e[2]=m*d-u,e[6]=o*f,e[10]=v*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Su,t,bu)}lookAt(t,e,n){const s=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),jn.crossVectors(n,on),jn.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),jn.crossVectors(n,on)),jn.normalize(),$s.crossVectors(on,jn),s[0]=jn.x,s[4]=$s.x,s[8]=on.x,s[1]=jn.y,s[5]=$s.y,s[9]=on.y,s[2]=jn.z,s[6]=$s.z,s[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],f=n[1],d=n[5],h=n[9],u=n[13],m=n[2],v=n[6],g=n[10],p=n[14],y=n[3],T=n[7],M=n[11],S=n[15],E=s[0],R=s[4],_=s[8],w=s[12],D=s[1],B=s[5],O=s[9],L=s[13],A=s[2],U=s[6],z=s[10],V=s[14],Z=s[3],k=s[7],Q=s[11],et=s[15];return r[0]=a*E+o*D+l*A+c*Z,r[4]=a*R+o*B+l*U+c*k,r[8]=a*_+o*O+l*z+c*Q,r[12]=a*w+o*L+l*V+c*et,r[1]=f*E+d*D+h*A+u*Z,r[5]=f*R+d*B+h*U+u*k,r[9]=f*_+d*O+h*z+u*Q,r[13]=f*w+d*L+h*V+u*et,r[2]=m*E+v*D+g*A+p*Z,r[6]=m*R+v*B+g*U+p*k,r[10]=m*_+v*O+g*z+p*Q,r[14]=m*w+v*L+g*V+p*et,r[3]=y*E+T*D+M*A+S*Z,r[7]=y*R+T*B+M*U+S*k,r[11]=y*_+T*O+M*z+S*Q,r[15]=y*w+T*L+M*V+S*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],f=t[2],d=t[6],h=t[10],u=t[14],m=t[3],v=t[7],g=t[11],p=t[15],y=l*u-c*h,T=o*u-c*d,M=o*h-l*d,S=a*u-c*f,E=a*h-l*f,R=a*d-o*f;return e*(v*y-g*T+p*M)-n*(m*y-g*S+p*E)+s*(m*T-v*S+p*R)-r*(m*M-v*E+g*R)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],f=t[10];return e*(a*f-o*c)-n*(r*f-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8],d=t[9],h=t[10],u=t[11],m=t[12],v=t[13],g=t[14],p=t[15],y=e*o-n*a,T=e*l-s*a,M=e*c-r*a,S=n*l-s*o,E=n*c-r*o,R=s*c-r*l,_=f*v-d*m,w=f*g-h*m,D=f*p-u*m,B=d*g-h*v,O=d*p-u*v,L=h*p-u*g,A=y*L-T*O+M*B+S*D-E*w+R*_;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/A;return t[0]=(o*L-l*O+c*B)*U,t[1]=(s*O-n*L-r*B)*U,t[2]=(v*R-g*E+p*S)*U,t[3]=(h*E-d*R-u*S)*U,t[4]=(l*D-a*L-c*w)*U,t[5]=(e*L-s*D+r*w)*U,t[6]=(g*M-m*R-p*T)*U,t[7]=(f*R-h*M+u*T)*U,t[8]=(a*O-o*D+c*_)*U,t[9]=(n*D-e*O-r*_)*U,t[10]=(m*E-v*M+p*y)*U,t[11]=(d*M-f*E-u*y)*U,t[12]=(o*w-a*B-l*_)*U,t[13]=(e*B-n*w+s*_)*U,t[14]=(v*T-m*S-g*y)*U,t[15]=(f*S-d*T+h*y)*U,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,f=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+n,f*l-s*a,0,c*l-s*o,f*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,f=a+a,d=o+o,h=r*c,u=r*f,m=r*d,v=a*f,g=a*d,p=o*d,y=l*c,T=l*f,M=l*d,S=n.x,E=n.y,R=n.z;return s[0]=(1-(v+p))*S,s[1]=(u+M)*S,s[2]=(m-T)*S,s[3]=0,s[4]=(u-M)*E,s[5]=(1-(h+p))*E,s[6]=(g+y)*E,s[7]=0,s[8]=(m+T)*R,s[9]=(g-y)*R,s[10]=(1-(h+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Oi.set(s[0],s[1],s[2]).length();const o=Oi.set(s[4],s[5],s[6]).length(),l=Oi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),xn.copy(this);const c=1/a,f=1/o,d=1/l;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=f,xn.elements[5]*=f,xn.elements[6]*=f,xn.elements[8]*=d,xn.elements[9]*=d,xn.elements[10]*=d,e.setFromRotationMatrix(xn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=In,l=!1){const c=this.elements,f=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),u=(n+s)/(n-s);let m,v;if(l)m=r/(a-r),v=a*r/(a-r);else if(o===In)m=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===zs)m=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=In,l=!1){const c=this.elements,f=2/(e-t),d=2/(n-s),h=-(e+t)/(e-t),u=-(n+s)/(n-s);let m,v;if(l)m=1/(a-r),v=a/(a-r);else if(o===In)m=-2/(a-r),v=-(a+r)/(a-r);else if(o===zs)m=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Wr.prototype.isMatrix4=!0;let he=Wr;const Oi=new P,xn=new he,Su=new P(0,0,0),bu=new P(1,1,1),jn=new P,$s=new P,on=new P,Vl=new he,Wl=new Fn;class ci{constructor(t=0,e=0,n=0,s=ci.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],f=s[9],d=s[2],h=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,u),this._y=0);break;default:Xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Vl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wl.setFromEuler(this),this.setFromQuaternion(Wl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ci.DEFAULT_ORDER="XYZ";class yh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Eu=0;const Xl=new P,zi=new Fn,On=new he,Qs=new P,ds=new P,wu=new P,Tu=new Fn,Yl=new P(1,0,0),ql=new P(0,1,0),Zl=new P(0,0,1),Kl={type:"added"},Au={type:"removed"},Bi={type:"childadded",child:null},ua={type:"childremoved",child:null};class Le extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new P,e=new ci,n=new Fn,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new Kt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.multiply(zi),this}rotateOnWorldAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.premultiply(zi),this}rotateX(t){return this.rotateOnAxis(Yl,t)}rotateY(t){return this.rotateOnAxis(ql,t)}rotateZ(t){return this.rotateOnAxis(Zl,t)}translateOnAxis(t,e){return Xl.copy(t).applyQuaternion(this.quaternion),this.position.add(Xl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yl,t)}translateY(t){return this.translateOnAxis(ql,t)}translateZ(t){return this.translateOnAxis(Zl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qs.copy(t):Qs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(ds,Qs,this.up):On.lookAt(Qs,ds,this.up),this.quaternion.setFromRotationMatrix(On),s&&(On.extractRotation(s.matrixWorld),zi.setFromRotationMatrix(On),this.quaternion.premultiply(zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Kl),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null):ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Au),ua.child=t,this.dispatchEvent(ua),ua.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),On.multiply(t.parent.matrixWorld)),t.applyMatrix4(On),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Kl),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,t,wu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,Tu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),f=a(t.images),d=a(t.shapes),h=a(t.skeletons),u=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Le.DEFAULT_UP=new P(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ve extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ru={type:"move"};class da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const g=e.getJointPose(v,n),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),u=.02,m=.005;c.inputState.pinching&&h>u+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=u-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ru)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ve;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Sh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},js={h:0,s:0,l:0};function pa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=Jo(t,1),e=ee(e,0,1),n=ee(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=pa(a,r,t+1/3),this.g=pa(a,r,t),this.b=pa(a,r,t-1/3)}return ae.colorSpaceToWorking(this,s),this}setStyle(t,e=Be){function n(r){r!==void 0&&parseFloat(r)<1&&Xt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Xt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){const n=Sh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yn(t.r),this.g=Yn(t.g),this.b=Yn(t.b),this}copyLinearToSRGB(t){return this.r=as(t.r),this.g=as(t.g),this.b=as(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return ae.workingToColorSpace(Ze.copy(this),t),Math.round(ee(Ze.r*255,0,255))*65536+Math.round(ee(Ze.g*255,0,255))*256+Math.round(ee(Ze.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(Ze.copy(this),e);const n=Ze.r,s=Ze.g,r=Ze.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=f<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=Be){ae.workingToColorSpace(Ze.copy(this),t);const e=Ze.r,n=Ze.g,s=Ze.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ti),this.setHSL(ti.h+t,ti.s+e,ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ti),t.getHSL(js);const n=Is(ti.h,js.h,e),s=Is(ti.s,js.s,e),r=Is(ti.l,js.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ze=new Vt;Vt.NAMES=Sh;class Qo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Vt(t),this.density=e}clone(){return new Qo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Cu extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const _n=new P,zn=new P,ma=new P,Bn=new P,ki=new P,Gi=new P,Jl=new P,ga=new P,xa=new P,_a=new P,va=new we,Ma=new we,ya=new we;class mn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),_n.subVectors(t,e),s.cross(_n);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){_n.subVectors(s,e),zn.subVectors(n,e),ma.subVectors(t,e);const a=_n.dot(_n),o=_n.dot(zn),l=_n.dot(ma),c=zn.dot(zn),f=zn.dot(ma),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,u=(c*l-o*f)*h,m=(a*f-o*l)*h;return r.set(1-u-m,m,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bn.x),l.addScaledVector(a,Bn.y),l.addScaledVector(o,Bn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return va.setScalar(0),Ma.setScalar(0),ya.setScalar(0),va.fromBufferAttribute(t,e),Ma.fromBufferAttribute(t,n),ya.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(va,r.x),a.addScaledVector(Ma,r.y),a.addScaledVector(ya,r.z),a}static isFrontFacing(t,e,n,s){return _n.subVectors(n,e),zn.subVectors(t,e),_n.cross(zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),_n.cross(zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return mn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;ki.subVectors(s,n),Gi.subVectors(r,n),ga.subVectors(t,n);const l=ki.dot(ga),c=Gi.dot(ga);if(l<=0&&c<=0)return e.copy(n);xa.subVectors(t,s);const f=ki.dot(xa),d=Gi.dot(xa);if(f>=0&&d<=f)return e.copy(s);const h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return a=l/(l-f),e.copy(n).addScaledVector(ki,a);_a.subVectors(t,r);const u=ki.dot(_a),m=Gi.dot(_a);if(m>=0&&u<=m)return e.copy(r);const v=u*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(Gi,o);const g=f*m-u*d;if(g<=0&&d-f>=0&&u-m>=0)return Jl.subVectors(r,s),o=(d-f)/(d-f+(u-m)),e.copy(s).addScaledVector(Jl,o);const p=1/(g+v+h);return a=v*p,o=h*p,e.copy(n).addScaledVector(ki,a).addScaledVector(Gi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ii{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,vn):vn.fromBufferAttribute(r,a),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),tr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),tr.copy(n.boundingBox)),tr.applyMatrix4(t.matrixWorld),this.union(tr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ps),er.subVectors(this.max,ps),Hi.subVectors(t.a,ps),Vi.subVectors(t.b,ps),Wi.subVectors(t.c,ps),ei.subVectors(Vi,Hi),ni.subVectors(Wi,Vi),gi.subVectors(Hi,Wi);let e=[0,-ei.z,ei.y,0,-ni.z,ni.y,0,-gi.z,gi.y,ei.z,0,-ei.x,ni.z,0,-ni.x,gi.z,0,-gi.x,-ei.y,ei.x,0,-ni.y,ni.x,0,-gi.y,gi.x,0];return!Sa(e,Hi,Vi,Wi,er)||(e=[1,0,0,0,1,0,0,0,1],!Sa(e,Hi,Vi,Wi,er))?!1:(nr.crossVectors(ei,ni),e=[nr.x,nr.y,nr.z],Sa(e,Hi,Vi,Wi,er))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const kn=[new P,new P,new P,new P,new P,new P,new P,new P],vn=new P,tr=new Ii,Hi=new P,Vi=new P,Wi=new P,ei=new P,ni=new P,gi=new P,ps=new P,er=new P,nr=new P,xi=new P;function Sa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){xi.fromArray(i,r);const o=s.x*Math.abs(xi.x)+s.y*Math.abs(xi.y)+s.z*Math.abs(xi.z),l=t.dot(xi),c=e.dot(xi),f=n.dot(xi);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const Pe=new P,ir=new Tt;let Pu=0;class Qe extends Li{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_h,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ir.fromBufferAttribute(this,e),ir.applyMatrix3(t),this.setXY(e,ir.x,ir.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class bh extends Qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Eh extends Qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ne extends Qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Lu=new Ii,ms=new P,ba=new P;class cs{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Lu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ms.subVectors(t,this.center);const e=ms.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ms,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ba.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ms.copy(t.center).add(ba)),this.expandByPoint(ms.copy(t.center).sub(ba))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Iu=0;const pn=new he,Ea=new Le,Xi=new P,ln=new Ii,gs=new Ii,Fe=new P;class Ee extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jf(t)?Eh:bh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return Ea.lookAt(t),Ea.updateMatrix(),this.applyMatrix4(Ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ne(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];gs.setFromBufferAttribute(o),this.morphTargetsRelative?(Fe.addVectors(ln.min,gs.min),ln.expandByPoint(Fe),Fe.addVectors(ln.max,gs.max),ln.expandByPoint(Fe)):(ln.expandByPoint(gs.min),ln.expandByPoint(gs.max))}ln.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Fe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Fe.fromBufferAttribute(o,c),l&&(Xi.fromBufferAttribute(t,c),Fe.add(Xi)),s=Math.max(s,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Qe(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new P,l[_]=new P;const c=new P,f=new P,d=new P,h=new Tt,u=new Tt,m=new Tt,v=new P,g=new P;function p(_,w,D){c.fromBufferAttribute(n,_),f.fromBufferAttribute(n,w),d.fromBufferAttribute(n,D),h.fromBufferAttribute(r,_),u.fromBufferAttribute(r,w),m.fromBufferAttribute(r,D),f.sub(c),d.sub(c),u.sub(h),m.sub(h);const B=1/(u.x*m.y-m.x*u.y);isFinite(B)&&(v.copy(f).multiplyScalar(m.y).addScaledVector(d,-u.y).multiplyScalar(B),g.copy(d).multiplyScalar(u.x).addScaledVector(f,-m.x).multiplyScalar(B),o[_].add(v),o[w].add(v),o[D].add(v),l[_].add(g),l[w].add(g),l[D].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let _=0,w=y.length;_<w;++_){const D=y[_],B=D.start,O=D.count;for(let L=B,A=B+O;L<A;L+=3)p(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const T=new P,M=new P,S=new P,E=new P;function R(_){S.fromBufferAttribute(s,_),E.copy(S);const w=o[_];T.copy(w),T.sub(S.multiplyScalar(S.dot(w))).normalize(),M.crossVectors(E,w);const B=M.dot(l[_])<0?-1:1;a.setXYZW(_,T.x,T.y,T.z,B)}for(let _=0,w=y.length;_<w;++_){const D=y[_],B=D.start,O=D.count;for(let L=B,A=B+O;L<A;L+=3)R(t.getX(L+0)),R(t.getX(L+1)),R(t.getX(L+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,u=n.count;h<u;h++)n.setXYZ(h,0,0,0);const s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,f=new P,d=new P;if(t)for(let h=0,u=t.count;h<u;h+=3){const m=t.getX(h+0),v=t.getX(h+1),g=t.getX(h+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,g),f.subVectors(a,r),d.subVectors(s,r),f.cross(d),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(f),l.add(f),c.add(f),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,u=e.count;h<u;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),f.subVectors(a,r),d.subVectors(s,r),f.cross(d),n.setXYZ(h+0,f.x,f.y,f.z),n.setXYZ(h+1,f.x,f.y,f.z),n.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(o,l){const c=o.array,f=o.itemSize,d=o.normalized,h=new c.constructor(l.length*f);let u=0,m=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?u=l[v]*o.data.stride+o.offset:u=l[v]*f;for(let p=0;p<f;p++)h[m++]=c[u++]}return new Qe(h,f,d)}if(this.index===null)return Xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ee,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let f=0,d=c.length;f<d;f++){const h=c[f],u=t(h,n);l.push(u)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){const u=c[d];f.push(u.toJSON(t.data))}f.length>0&&(s[l]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const f=s[c];this.setAttribute(c,f.clone(e))}const r=t.morphAttributes;for(const c in r){const f=[],d=r[c];for(let h=0,u=d.length;h<u;h++)f.push(d[h].clone(e));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,f=a.length;c<f;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Du{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=_h,this.updateRanges=[],this.version=0,this.uuid=Xn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const tn=new P;class Br{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Mn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Mn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Mn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Mn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){zr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Br(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){zr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const wa=new P,Uu=new P,Nu=new Kt;class ri{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=wa.subVectors(n,e).cross(Uu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(wa),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Nu.getNormalMatrix(t),s=this.coplanarPoint(wa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Fu=0;class Di extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=Xn(),this.name="",this.type="Material",this.blending=Ps,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nh,this.blendDst=ih,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oa,this.stencilZFail=oa,this.stencilZPass=oa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Xt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Vt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ri().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Tt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Tt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Vs extends Di{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Yi;const xs=new P,qi=new P,Zi=new P,Ki=new Tt,_s=new Tt,wh=new he,sr=new P,vs=new P,rr=new P,$l=new Tt,Ta=new Tt,Ql=new Tt;class Yr extends Le{constructor(t=new Vs){if(super(),this.isSprite=!0,this.type="Sprite",Yi===void 0){Yi=new Ee;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Du(e,5);Yi.setIndex([0,1,2,0,2,3]),Yi.setAttribute("position",new Br(n,3,0,!1)),Yi.setAttribute("uv",new Br(n,2,3,!1))}this.geometry=Yi,this.material=t,this.center=new Tt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ce('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qi.setFromMatrixScale(this.matrixWorld),wh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Zi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qi.multiplyScalar(-Zi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;ar(sr.set(-.5,-.5,0),Zi,a,qi,s,r),ar(vs.set(.5,-.5,0),Zi,a,qi,s,r),ar(rr.set(.5,.5,0),Zi,a,qi,s,r),$l.set(0,0),Ta.set(1,0),Ql.set(1,1);let o=t.ray.intersectTriangle(sr,vs,rr,!1,xs);if(o===null&&(ar(vs.set(-.5,.5,0),Zi,a,qi,s,r),Ta.set(0,1),o=t.ray.intersectTriangle(sr,rr,vs,!1,xs),o===null))return;const l=t.ray.origin.distanceTo(xs);l<t.near||l>t.far||e.push({distance:l,point:xs.clone(),uv:mn.getInterpolation(xs,sr,vs,rr,$l,Ta,Ql,new Tt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ar(i,t,e,n,s,r){Ki.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(_s.x=r*Ki.x-s*Ki.y,_s.y=s*Ki.x+r*Ki.y):_s.copy(Ki),i.copy(t),i.x+=_s.x,i.y+=_s.y,i.applyMatrix4(wh)}const Gn=new P,Aa=new P,or=new P,lr=new P;class Th{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Aa.copy(t).add(e).multiplyScalar(.5),or.copy(e).sub(t).normalize(),lr.copy(this.origin).sub(Aa);const r=t.distanceTo(e)*.5,a=-this.direction.dot(or),o=lr.dot(this.direction),l=-lr.dot(or),c=lr.lengthSq(),f=Math.abs(1-a*a);let d,h,u,m;if(f>0)if(d=a*l-o,h=a*o-l,m=r*f,d>=0)if(h>=-m)if(h<=m){const v=1/f;d*=v,h*=v,u=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),u=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),u=-d*d+h*(h+2*l)+c;else h<=-m?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+h*(h+2*l)+c):h<=m?(d=0,h=Math.min(Math.max(-r,-l),r),u=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),u=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Aa).addScaledVector(or,h),u}intersectSphere(t,e){if(t.radius<0)return null;Gn.subVectors(t.center,this.origin);const n=Gn.dot(this.direction),s=Gn.dot(Gn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),f>=0?(r=(t.min.y-h.y)*f,a=(t.max.y-h.y)*f):(r=(t.max.y-h.y)*f,a=(t.min.y-h.y)*f),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,f=o.z,d=t.x-a.x,h=t.y-a.y,u=t.z-a.z,m=e.x-a.x,v=e.y-a.y,g=e.z-a.z,p=n.x-a.x,y=n.y-a.y,T=n.z-a.z,M=Math.abs(l),S=Math.abs(c),E=Math.abs(f);let R,_,w,D,B,O,L,A,U,z,V,Z;if(M>=S&&M>=E?(w=l,O=d,U=m,Z=p,l>=0?(R=c,_=f,D=h,B=u,L=v,A=g,z=y,V=T):(R=f,_=c,D=u,B=h,L=g,A=v,z=T,V=y)):S>=E?(w=c,O=h,U=v,Z=y,c>=0?(R=f,_=l,D=u,B=d,L=g,A=m,z=T,V=p):(R=l,_=f,D=d,B=u,L=m,A=g,z=p,V=T)):(w=f,O=u,U=g,Z=T,f>=0?(R=l,_=c,D=d,B=h,L=m,A=v,z=p,V=y):(R=c,_=l,D=h,B=d,L=v,A=m,z=y,V=p)),w===0)return null;const k=R/w,Q=_/w,et=1/w,ut=D-k*O,yt=B-Q*O,te=L-k*U,bt=A-Q*U,Ot=z-k*Z,j=V-Q*Z,nt=Ot*bt-j*te,vt=ut*j-yt*Ot,Ft=te*yt-bt*ut;if(s){if(nt<0||vt<0||Ft<0)return null}else if((nt<0||vt<0||Ft<0)&&(nt>0||vt>0||Ft>0))return null;const gt=nt+vt+Ft;if(gt===0)return null;const zt=et*(nt*O+vt*U+Ft*Z);return(gt>0?zt<0:zt>0)?null:this.at(zt/gt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de extends Di{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=ko,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const jl=new he,_i=new Th,cr=new cs,tc=new P,hr=new P,fr=new P,ur=new P,Ra=new P,dr=new P,ec=new P,pr=new P;class Ut extends Le{constructor(t=new Ee,e=new de){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){dr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const f=o[l],d=r[l];f!==0&&(Ra.fromBufferAttribute(d,t),a?dr.addScaledVector(Ra,f):dr.addScaledVector(Ra.sub(e),f))}e.add(dr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(r),_i.copy(t.ray).recast(t.near),!(cr.containsPoint(_i.origin)===!1&&(_i.intersectSphere(cr,tc)===null||_i.origin.distanceToSquared(tc)>(t.far-t.near)**2))&&(jl.copy(r).invert(),_i.copy(t.ray).applyMatrix4(jl),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_i)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,d=r.attributes.normal,h=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=h.length;m<v;m++){const g=h[m],p=a[g.materialIndex],y=Math.max(g.start,u.start),T=Math.min(o.count,Math.min(g.start+g.count,u.start+u.count));for(let M=y,S=T;M<S;M+=3){const E=o.getX(M),R=o.getX(M+1),_=o.getX(M+2);s=mr(this,p,t,n,c,f,d,E,R,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,u.start),v=Math.min(o.count,u.start+u.count);for(let g=m,p=v;g<p;g+=3){const y=o.getX(g),T=o.getX(g+1),M=o.getX(g+2);s=mr(this,a,t,n,c,f,d,y,T,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,v=h.length;m<v;m++){const g=h[m],p=a[g.materialIndex],y=Math.max(g.start,u.start),T=Math.min(l.count,Math.min(g.start+g.count,u.start+u.count));for(let M=y,S=T;M<S;M+=3){const E=M,R=M+1,_=M+2;s=mr(this,p,t,n,c,f,d,E,R,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,u.start),v=Math.min(l.count,u.start+u.count);for(let g=m,p=v;g<p;g+=3){const y=g,T=g+1,M=g+2;s=mr(this,a,t,n,c,f,d,y,T,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Ou(i,t,e,n,s,r,a,o){let l;if(t.side===$e?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Ti,o),l===null)return null;pr.copy(o),pr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(pr);return c<e.near||c>e.far?null:{distance:c,point:pr.clone(),object:i}}function mr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,hr),i.getVertexPosition(l,fr),i.getVertexPosition(c,ur);const f=Ou(i,t,e,n,hr,fr,ur,ec);if(f){const d=new P;mn.getBarycoord(ec,hr,fr,ur,d),s&&(f.uv=mn.getInterpolatedAttribute(s,o,l,c,d,new Tt)),r&&(f.uv1=mn.getInterpolatedAttribute(r,o,l,c,d,new Tt)),a&&(f.normal=mn.getInterpolatedAttribute(a,o,l,c,d,new P),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new P,materialIndex:0};mn.getNormal(hr,fr,ur,h.normal),f.face=h,f.barycoord=d}return f}class Ah extends Xe{constructor(t=null,e=1,n=1,s,r,a,o,l,c=He,f=He,d,h){super(null,a,o,l,c,f,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nc extends Qe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ji=new he,ic=new he,gr=[],sc=new Ii,zu=new he,Ms=new Ut,ys=new cs;class Ie extends Ut{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new nc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,zu)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ji),sc.copy(t.boundingBox).applyMatrix4(Ji),this.boundingBox.union(sc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new cs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ji),ys.copy(t.boundingSphere).applyMatrix4(Ji),this.boundingSphere.union(ys)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ms.geometry=this.geometry,Ms.material=this.material,Ms.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ys.copy(this.boundingSphere),ys.applyMatrix4(n),t.ray.intersectsSphere(ys)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ji),ic.multiplyMatrices(n,Ji),Ms.matrixWorld=ic,Ms.raycast(t,gr);for(let a=0,o=gr.length;a<o;a++){const l=gr[a];l.instanceId=r,l.object=this,e.push(l)}gr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new nc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ah(new Float32Array(s*this.count),s,this.count,Wo,yn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const vi=new cs,Bu=new Tt(.5,.5),xr=new P;class jo{constructor(t=new ri,e=new ri,n=new ri,s=new ri,r=new ri,a=new ri){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=In,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],f=r[4],d=r[5],h=r[6],u=r[7],m=r[8],v=r[9],g=r[10],p=r[11],y=r[12],T=r[13],M=r[14],S=r[15];if(s[0].setComponents(c-a,u-f,p-m,S-y).normalize(),s[1].setComponents(c+a,u+f,p+m,S+y).normalize(),s[2].setComponents(c+o,u+d,p+v,S+T).normalize(),s[3].setComponents(c-o,u-d,p-v,S-T).normalize(),n)s[4].setComponents(l,h,g,M).normalize(),s[5].setComponents(c-l,u-h,p-g,S-M).normalize();else if(s[4].setComponents(c-l,u-h,p-g,S-M).normalize(),e===In)s[5].setComponents(c+l,u+h,p+g,S+M).normalize();else if(e===zs)s[5].setComponents(l,h,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(t){vi.center.set(0,0,0);const e=Bu.distanceTo(t.center);return vi.radius=.7071067811865476+e,vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(xr.x=s.normal.x>0?t.max.x:t.min.x,xr.y=s.normal.y>0?t.max.y:t.min.y,xr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(xr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tl extends Di{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const rc=new he,Do=new Th,_r=new cs,vr=new P;class el extends Le{constructor(t=new Ee,e=new tl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(s),_r.radius+=r,t.ray.intersectsSphere(_r)===!1)return;rc.copy(s).invert(),Do.copy(t.ray).applyMatrix4(rc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);for(let m=h,v=u;m<v;m++){const g=c.getX(m);vr.fromBufferAttribute(d,g),ac(vr,g,l,s,t,e,this)}}else{const h=Math.max(0,a.start),u=Math.min(d.count,a.start+a.count);for(let m=h,v=u;m<v;m++)vr.fromBufferAttribute(d,m),ac(vr,m,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ac(i,t,e,n,s,r,a){const o=Do.distanceSqToPoint(i);if(o<e){const l=new P;Do.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Rh extends Xe{constructor(t=[],e=Ai,n,s,r,a,o,l,c,f){super(t,e,n,s,r,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class kr extends Xe{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gs extends Xe{constructor(t,e,n=Un,s,r,a,o=He,l=He,c,f=qn,d=1){if(f!==qn&&f!==bi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,s,r,a,o,l,f,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new $o(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class ku extends Gs{constructor(t,e=Un,n=Ai,s,r,a=He,o=He,l,c=qn){const f={width:t,height:t,depth:1},d=[f,f,f,f,f,f];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Ch extends Xe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class se extends Ee{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],f=[],d=[];let h=0,u=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(f,3)),this.setAttribute("uv",new ne(d,2));function m(v,g,p,y,T,M,S,E,R,_,w){const D=M/R,B=S/_,O=M/2,L=S/2,A=E/2,U=R+1,z=_+1;let V=0,Z=0;const k=new P;for(let Q=0;Q<z;Q++){const et=Q*B-L;for(let ut=0;ut<U;ut++){const yt=ut*D-O;k[v]=yt*y,k[g]=et*T,k[p]=A,c.push(k.x,k.y,k.z),k[v]=0,k[g]=0,k[p]=E>0?1:-1,f.push(k.x,k.y,k.z),d.push(ut/R),d.push(1-Q/_),V+=1}}for(let Q=0;Q<_;Q++)for(let et=0;et<R;et++){const ut=h+et+U*Q,yt=h+et+U*(Q+1),te=h+(et+1)+U*(Q+1),bt=h+(et+1)+U*Q;l.push(ut,yt,bt),l.push(yt,te,bt),Z+=6}o.addGroup(u,Z,w),u+=Z,h+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new se(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ws extends Ee{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],f=e/2,d=Math.PI/2*t,h=e,u=2*d+h,m=n*2+r,v=s+1,g=new P,p=new P;for(let y=0;y<=m;y++){let T=0,M=0,S=0,E=0;if(y<=n){const w=y/n,D=w*Math.PI/2;M=-f-t*Math.cos(D),S=t*Math.sin(D),E=-t*Math.cos(D),T=w*d}else if(y<=n+r){const w=(y-n)/r;M=-f+w*e,S=t,E=0,T=d+w*h}else{const w=(y-n-r)/n,D=w*Math.PI/2;M=f+t*Math.sin(D),S=t*Math.cos(D),E=t*Math.sin(D),T=d+h+w*d}const R=Math.max(0,Math.min(1,T/u));let _=0;y===0?_=.5/s:y===m&&(_=-.5/s);for(let w=0;w<=s;w++){const D=w/s,B=D*Math.PI*2,O=Math.sin(B),L=Math.cos(B);p.x=-S*L,p.y=M,p.z=S*O,o.push(p.x,p.y,p.z),g.set(-S*L,E,S*O),g.normalize(),l.push(g.x,g.y,g.z),c.push(D+_,R)}if(y>0){const w=(y-1)*v;for(let D=0;D<s;D++){const B=w+D,O=w+D+1,L=y*v+D,A=y*v+D+1;a.push(B,O,L),a.push(O,A,L)}}}this.setIndex(a),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ws(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Gr extends Ee{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new P,f=new Tt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){const u=n+d/e*s;c.x=t*Math.cos(u),c.y=t*Math.sin(u),a.push(c.x,c.y,c.z),o.push(0,0,1),f.x=(a[h]/t+1)/2,f.y=(a[h+1]/t+1)/2,l.push(f.x,f.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(o,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ke extends Ee{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const f=[],d=[],h=[],u=[];let m=0;const v=[],g=n/2;let p=0;y(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(f),this.setAttribute("position",new ne(d,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2));function y(){const M=new P,S=new P;let E=0;const R=(e-t)/n;for(let _=0;_<=r;_++){const w=[],D=_/r,B=D*(e-t)+t;for(let O=0;O<=s;O++){const L=O/s,A=L*l+o,U=Math.sin(A),z=Math.cos(A);S.x=B*U,S.y=-D*n+g,S.z=B*z,d.push(S.x,S.y,S.z),M.set(U,R,z).normalize(),h.push(M.x,M.y,M.z),u.push(L,1-D),w.push(m++)}v.push(w)}for(let _=0;_<s;_++)for(let w=0;w<r;w++){const D=v[w][_],B=v[w+1][_],O=v[w+1][_+1],L=v[w][_+1];(t>0||w!==0)&&(f.push(D,B,L),E+=3),(e>0||w!==r-1)&&(f.push(B,O,L),E+=3)}c.addGroup(p,E,0),p+=E}function T(M){const S=m,E=new Tt,R=new P;let _=0;const w=M===!0?t:e,D=M===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,g*D,0),h.push(0,D,0),u.push(.5,.5),m++;const B=m;for(let O=0;O<=s;O++){const A=O/s*l+o,U=Math.cos(A),z=Math.sin(A);R.x=w*z,R.y=g*D,R.z=w*U,d.push(R.x,R.y,R.z),h.push(0,D,0),E.x=U*.5+.5,E.y=z*.5*D+.5,u.push(E.x,E.y),m++}for(let O=0;O<s;O++){const L=S+O,A=B+O;M===!0?f.push(A,A+1,L):f.push(A+1,A,L),_+=3}c.addGroup(p,_,M===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ke(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ci extends Ke{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Ci(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class qr extends Ee{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),f(),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(r.slice(),3)),this.setAttribute("uv",new ne(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const T=new P,M=new P,S=new P;for(let E=0;E<e.length;E+=3)u(e[E+0],T),u(e[E+1],M),u(e[E+2],S),l(T,M,S,y)}function l(y,T,M,S){const E=S+1,R=[];for(let _=0;_<=E;_++){R[_]=[];const w=y.clone().lerp(M,_/E),D=T.clone().lerp(M,_/E),B=E-_;for(let O=0;O<=B;O++)O===0&&_===E?R[_][O]=w:R[_][O]=w.clone().lerp(D,O/B)}for(let _=0;_<E;_++)for(let w=0;w<2*(E-_)-1;w++){const D=Math.floor(w/2);w%2===0?(h(R[_][D+1]),h(R[_+1][D]),h(R[_][D])):(h(R[_][D+1]),h(R[_+1][D+1]),h(R[_+1][D]))}}function c(y){const T=new P;for(let M=0;M<r.length;M+=3)T.x=r[M+0],T.y=r[M+1],T.z=r[M+2],T.normalize().multiplyScalar(y),r[M+0]=T.x,r[M+1]=T.y,r[M+2]=T.z}function f(){const y=new P;for(let T=0;T<r.length;T+=3){y.x=r[T+0],y.y=r[T+1],y.z=r[T+2];const M=g(y)/2/Math.PI+.5,S=p(y)/Math.PI+.5;a.push(M,1-S)}m(),d()}function d(){for(let y=0;y<a.length;y+=6){const T=a[y+0],M=a[y+2],S=a[y+4],E=Math.max(T,M,S),R=Math.min(T,M,S);E>.9&&R<.1&&(T<.2&&(a[y+0]+=1),M<.2&&(a[y+2]+=1),S<.2&&(a[y+4]+=1))}}function h(y){r.push(y.x,y.y,y.z)}function u(y,T){const M=y*3;T.x=t[M+0],T.y=t[M+1],T.z=t[M+2]}function m(){const y=new P,T=new P,M=new P,S=new P,E=new Tt,R=new Tt,_=new Tt;for(let w=0,D=0;w<r.length;w+=9,D+=6){y.set(r[w+0],r[w+1],r[w+2]),T.set(r[w+3],r[w+4],r[w+5]),M.set(r[w+6],r[w+7],r[w+8]),E.set(a[D+0],a[D+1]),R.set(a[D+2],a[D+3]),_.set(a[D+4],a[D+5]),S.copy(y).add(T).add(M).divideScalar(3);const B=g(S);v(E,D+0,y,B),v(R,D+2,T,B),v(_,D+4,M,B)}}function v(y,T,M,S){S<0&&y.x===1&&(a[T]=y.x-1),M.x===0&&M.z===0&&(a[T]=S/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qr(t.vertices,t.indices,t.radius,t.detail)}}class Kn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const f=n[s],h=n[s+1]-f,u=(a-f)/h;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Tt:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new P,s=[],r=[],a=[],o=new P,l=new he;for(let u=0;u<=t;u++){const m=u/t;s[u]=this.getTangentAt(m,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const f=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);f<=c&&(c=f,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(ee(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(o,m))}a[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(ee(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(u=-u);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],u*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ph extends Kn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Tt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const f=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,u=c-this.aY;l=h*f-u*d+this.aX,c=h*d+u*f+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Gu extends Ph{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function nl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,f,d){let h=(a-r)/c-(o-r)/(c+f)+(o-a)/f,u=(o-a)/f-(l-a)/(f+d)+(l-o)/d;h*=f,u*=f,s(a,o,h,u)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const oc=new P,lc=new P,Ca=new nl,Pa=new nl,La=new nl;class Lh extends Kn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,f;this.closed||o>0?c=s[(o-1)%r]:(lc.subVectors(s[0],s[1]).add(s[0]),c=lc);const d=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?f=s[(o+2)%r]:(oc.subVectors(s[r-1],s[r-2]).add(s[r-1]),f=oc),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(d),u),v=Math.pow(d.distanceToSquared(h),u),g=Math.pow(h.distanceToSquared(f),u);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),Ca.initNonuniformCatmullRom(c.x,d.x,h.x,f.x,m,v,g),Pa.initNonuniformCatmullRom(c.y,d.y,h.y,f.y,m,v,g),La.initNonuniformCatmullRom(c.z,d.z,h.z,f.z,m,v,g)}else this.curveType==="catmullrom"&&(Ca.initCatmullRom(c.x,d.x,h.x,f.x,this.tension),Pa.initCatmullRom(c.y,d.y,h.y,f.y,this.tension),La.initCatmullRom(c.z,d.z,h.z,f.z,this.tension));return n.set(Ca.calc(l),Pa.calc(l),La.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function cc(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Hu(i,t){const e=1-i;return e*e*t}function Vu(i,t){return 2*(1-i)*i*t}function Wu(i,t){return i*i*t}function Ds(i,t,e,n){return Hu(i,t)+Vu(i,e)+Wu(i,n)}function Xu(i,t){const e=1-i;return e*e*e*t}function Yu(i,t){const e=1-i;return 3*e*e*i*t}function qu(i,t){return 3*(1-i)*i*i*t}function Zu(i,t){return i*i*i*t}function Us(i,t,e,n,s){return Xu(i,t)+Yu(i,e)+qu(i,n)+Zu(i,s)}class Ku extends Kn{constructor(t=new Tt,e=new Tt,n=new Tt,s=new Tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Tt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Us(t,s.x,r.x,a.x,o.x),Us(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ju extends Kn{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Us(t,s.x,r.x,a.x,o.x),Us(t,s.y,r.y,a.y,o.y),Us(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $u extends Kn{constructor(t=new Tt,e=new Tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Tt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qu extends Kn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ju extends Kn{constructor(t=new Tt,e=new Tt,n=new Tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Tt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ds(t,s.x,r.x,a.x),Ds(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class il extends Kn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ds(t,s.x,r.x,a.x),Ds(t,s.y,r.y,a.y),Ds(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class td extends Kn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Tt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],f=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(cc(o,l.x,c.x,f.x,d.x),cc(o,l.y,c.y,f.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Tt().fromArray(s))}return this}}var ed=Object.freeze({__proto__:null,ArcCurve:Gu,CatmullRomCurve3:Lh,CubicBezierCurve:Ku,CubicBezierCurve3:Ju,EllipseCurve:Ph,LineCurve:$u,LineCurve3:Qu,QuadraticBezierCurve:ju,QuadraticBezierCurve3:il,SplineCurve:td});class Zr extends qr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Zr(t.radius,t.detail)}}class sl extends qr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new sl(t.radius,t.detail)}}class Te extends Ee{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,f=l+1,d=t/o,h=e/l,u=[],m=[],v=[],g=[];for(let p=0;p<f;p++){const y=p*h-a;for(let T=0;T<c;T++){const M=T*d-r;m.push(M,-y,0),v.push(0,0,1),g.push(T/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const T=y+c*p,M=y+c*(p+1),S=y+1+c*(p+1),E=y+1+c*p;u.push(T,M,E),u.push(M,S,E)}this.setIndex(u),this.setAttribute("position",new ne(m,3)),this.setAttribute("normal",new ne(v,3)),this.setAttribute("uv",new ne(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Te(t.width,t.height,t.widthSegments,t.heightSegments)}}class Hr extends Ee{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],f=[];let d=t;const h=(e-t)/s,u=new P,m=new Tt;for(let v=0;v<=s;v++){for(let g=0;g<=n;g++){const p=r+g/n*a;u.x=d*Math.cos(p),u.y=d*Math.sin(p),l.push(u.x,u.y,u.z),c.push(0,0,1),m.x=(u.x/e+1)/2,m.y=(u.y/e+1)/2,f.push(m.x,m.y)}d+=h}for(let v=0;v<s;v++){const g=v*(n+1);for(let p=0;p<n;p++){const y=p+g,T=y,M=y+n+1,S=y+n+2,E=y+1;o.push(T,M,E),o.push(M,S,E)}}this.setIndex(o),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Se extends Ee{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const f=[],d=new P,h=new P,u=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){const y=[],T=p/n,M=a+T*o,S=t*Math.cos(M),E=Math.sqrt(t*t-S*S);let R=0;p===0&&a===0?R=.5/e:p===n&&l===Math.PI&&(R=-.5/e);for(let _=0;_<=e;_++){const w=_/e,D=s+w*r;d.x=-E*Math.cos(D),d.y=S,d.z=E*Math.sin(D),m.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),g.push(w+R,1-T),y.push(c++)}f.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const T=f[p][y+1],M=f[p][y],S=f[p+1][y],E=f[p+1][y+1];(p!==0||a>0)&&u.push(T,M,E),(p!==n-1||l<Math.PI)&&u.push(M,S,E)}this.setIndex(u),this.setAttribute("position",new ne(m,3)),this.setAttribute("normal",new ne(v,3)),this.setAttribute("uv",new ne(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Se(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Pi extends Ee{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],f=[],d=[],h=new P,u=new P,m=new P;for(let v=0;v<=n;v++){const g=a+v/n*o;for(let p=0;p<=s;p++){const y=p/s*r;u.x=(t+e*Math.cos(g))*Math.cos(y),u.y=(t+e*Math.cos(g))*Math.sin(y),u.z=e*Math.sin(g),c.push(u.x,u.y,u.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),m.subVectors(u,h).normalize(),f.push(m.x,m.y,m.z),d.push(p/s),d.push(v/n)}}for(let v=1;v<=n;v++)for(let g=1;g<=s;g++){const p=(s+1)*v+g-1,y=(s+1)*(v-1)+g-1,T=(s+1)*(v-1)+g,M=(s+1)*v+g;l.push(p,y,M),l.push(y,T,M)}this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(f,3)),this.setAttribute("uv",new ne(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class rl extends Ee{constructor(t=new il(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new P,l=new P,c=new Tt;let f=new P;const d=[],h=[],u=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new ne(d,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2));function v(){for(let T=0;T<e;T++)g(T);g(r===!1?e:0),y(),p()}function g(T){f=t.getPointAt(T/e,f);const M=a.normals[T],S=a.binormals[T];for(let E=0;E<=s;E++){const R=E/s*Math.PI*2,_=Math.sin(R),w=-Math.cos(R);l.x=w*M.x+_*S.x,l.y=w*M.y+_*S.y,l.z=w*M.z+_*S.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=f.x+n*l.x,o.y=f.y+n*l.y,o.z=f.z+n*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let T=1;T<=e;T++)for(let M=1;M<=s;M++){const S=(s+1)*(T-1)+(M-1),E=(s+1)*T+(M-1),R=(s+1)*T+M,_=(s+1)*(T-1)+M;m.push(S,E,_),m.push(E,R,_)}}function y(){for(let T=0;T<=e;T++)for(let M=0;M<=s;M++)c.x=T/e,c.y=M/s,u.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new rl(new ed[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function ls(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(hc(s))s.isRenderTargetTexture?(Xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(hc(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function en(i){const t={};for(let e=0;e<i.length;e++){const n=ls(i[e]);for(const s in n)t[s]=n[s]}return t}function hc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function nd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ih(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const al={clone:ls,merge:en};var id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class an extends Di{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=id,this.fragmentShader=sd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ls(t.uniforms),this.uniformsGroups=nd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Vt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Tt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new we().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Kt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new he().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class rd extends an{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xs extends Di{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lo,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=ko,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ad extends Di{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class od extends Di{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ia={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(fc(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!fc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function fc(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class ld{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(f){o++,r===!1&&s.onStart!==void 0&&s.onStart(f,a,o),r=!0},this.itemEnd=function(f){a++,s.onProgress!==void 0&&s.onProgress(f,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,d){return c.push(f,d),this},this.removeHandler=function(f){const d=c.indexOf(f);return d!==-1&&c.splice(d,2),this},this.getHandler=function(f){for(let d=0,h=c.length;d<h;d+=2){const u=c[d],m=c[d+1];if(u.global&&(u.lastIndex=0),u.test(f))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const cd=new ld;class ol{constructor(t){this.manager=t!==void 0?t:cd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}ol.DEFAULT_MATERIAL_NAME="__DEFAULT";const $i=new WeakMap;class hd extends ol{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Ia.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let d=$i.get(a);d===void 0&&(d=[],$i.set(a,d)),d.push({onLoad:e,onError:s})}return a}const o=Bs("img");function l(){f(),e&&e(this);const d=$i.get(this)||[];for(let h=0;h<d.length;h++){const u=d[h];u.onLoad&&u.onLoad(this)}$i.delete(this),r.manager.itemEnd(t)}function c(d){f(),s&&s(d),Ia.remove(`image:${t}`);const h=$i.get(this)||[];for(let u=0;u<h.length;u++){const m=h[u];m.onError&&m.onError(d)}$i.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function f(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ia.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}}class fd extends ol{constructor(t){super(t)}load(t,e,n,s){const r=new Xe,a=new hd(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class ll extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class ud extends ll{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Da=new he,uc=new P,dc=new P;class Dh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.mapType=fn,this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jo,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;uc.setFromMatrixPosition(t.matrixWorld),e.position.copy(uc),dc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(dc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Da.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Da,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===zs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Da)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Mr=new P,yr=new Fn,Tn=new P;class Uh extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Mr,yr,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mr,yr,Tn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Mr,yr,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mr,yr,Tn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ii=new P,pc=new Tt,mc=new Tt;class cn extends Uh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ks*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ls*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ks*2*Math.atan(Math.tan(Ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ii.x,ii.y).multiplyScalar(-t/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-t/ii.z)}getViewSize(t,e){return this.getViewBounds(t,pc,mc),e.subVectors(mc,pc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ls*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class dd extends Dh{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0}}class pd extends ll{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new dd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class cl extends Uh{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class md extends Dh{constructor(){super(new cl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gc extends ll{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new md}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Qi=-90,ji=1;class gd extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new cn(Qi,ji,t,e);s.layers=this.layers,this.add(s);const r=new cn(Qi,ji,t,e);r.layers=this.layers,this.add(r);const a=new cn(Qi,ji,t,e);a.layers=this.layers,this.add(a);const o=new cn(Qi,ji,t,e);o.layers=this.layers,this.add(o);const l=new cn(Qi,ji,t,e);l.layers=this.layers,this.add(l);const c=new cn(Qi,ji,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===In)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,f]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(d,h,u),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class xd extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const bl=class bl{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};bl.prototype.isMatrix2=!0;let xc=bl;function _c(i,t,e,n){const s=_d(n);switch(e){case gh:return i*t;case Wo:return i*t/s.components*s.byteLength;case Xo:return i*t/s.components*s.byteLength;case Ri:return i*t*2/s.components*s.byteLength;case Yo:return i*t*2/s.components*s.byteLength;case xh:return i*t*3/s.components*s.byteLength;case Sn:return i*t*4/s.components*s.byteLength;case qo:return i*t*4/s.components*s.byteLength;case Ar:case Rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Cr:case Pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case eo:case io:return Math.max(i,16)*Math.max(t,8)/4;case to:case no:return Math.max(i,8)*Math.max(t,8)/2;case so:case ro:case oo:case lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ao:case Ur:case co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case uo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case po:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case mo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case go:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case xo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case _o:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case vo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Mo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case yo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case So:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case bo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Eo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case wo:case To:case Ao:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ro:case Co:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Nr:case Po:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _d(i){switch(i){case fn:case uh:return{byteLength:1,components:1};case Fs:case dh:case Nn:return{byteLength:2,components:1};case Ho:case Vo:return{byteLength:2,components:4};case Un:case Go:case yn:return{byteLength:4,components:1};case ph:case mh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bo}}));typeof window<"u"&&(window.__THREE__?Xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bo);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Nh(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function vd(i){const t=new WeakMap;function e(o,l){const c=o.array,f=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,f),o.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const f=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,f);else{d.sort((u,m)=>u.start-m.start);let h=0;for(let u=1;u<d.length;u++){const m=d[h],v=d[u];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++h,d[h]=v)}d.length=h+1;for(let u=0,m=d.length;u<m;u++){const v=d[u];i.bufferSubData(c,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Md=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Sd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ed=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Td=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ad=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Cd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ld=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Id=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Dd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ud=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,kd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Gd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Hd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Vd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Wd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Xd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Yd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jd="gl_FragColor = linearToOutputTexel( gl_FragColor );",$d=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,jd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,tp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,np=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ip=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ap=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,op=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,up=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,dp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_p=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,bp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ep=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ap=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Pp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ip=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Up=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Np=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Op=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Vp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Jp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$p=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,t0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,e0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,n0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,i0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,s0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,r0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,a0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,o0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,l0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,c0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,h0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,f0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,u0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,d0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,p0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,m0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,g0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,x0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,v0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const M0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,A0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,R0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,C0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,D0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,U0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,N0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,B0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,G0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,H0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,X0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,K0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,J0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Q0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,j0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:Md,alphahash_pars_fragment:yd,alphamap_fragment:Sd,alphamap_pars_fragment:bd,alphatest_fragment:Ed,alphatest_pars_fragment:wd,aomap_fragment:Td,aomap_pars_fragment:Ad,batching_pars_vertex:Rd,batching_vertex:Cd,begin_vertex:Pd,beginnormal_vertex:Ld,bsdfs:Id,iridescence_fragment:Dd,bumpmap_pars_fragment:Ud,clipping_planes_fragment:Nd,clipping_planes_pars_fragment:Fd,clipping_planes_pars_vertex:Od,clipping_planes_vertex:zd,color_fragment:Bd,color_pars_fragment:kd,color_pars_vertex:Gd,color_vertex:Hd,common:Vd,cube_uv_reflection_fragment:Wd,defaultnormal_vertex:Xd,displacementmap_pars_vertex:Yd,displacementmap_vertex:qd,emissivemap_fragment:Zd,emissivemap_pars_fragment:Kd,colorspace_fragment:Jd,colorspace_pars_fragment:$d,envmap_fragment:Qd,envmap_common_pars_fragment:jd,envmap_pars_fragment:tp,envmap_pars_vertex:ep,envmap_physical_pars_fragment:up,envmap_vertex:np,fog_vertex:ip,fog_pars_vertex:sp,fog_fragment:rp,fog_pars_fragment:ap,gradientmap_pars_fragment:op,lightmap_pars_fragment:lp,lights_lambert_fragment:cp,lights_lambert_pars_fragment:hp,lights_pars_begin:fp,lights_toon_fragment:dp,lights_toon_pars_fragment:pp,lights_phong_fragment:mp,lights_phong_pars_fragment:gp,lights_physical_fragment:xp,lights_physical_pars_fragment:_p,lights_fragment_begin:vp,lights_fragment_maps:Mp,lights_fragment_end:yp,lightprobes_pars_fragment:Sp,logdepthbuf_fragment:bp,logdepthbuf_pars_fragment:Ep,logdepthbuf_pars_vertex:wp,logdepthbuf_vertex:Tp,map_fragment:Ap,map_pars_fragment:Rp,map_particle_fragment:Cp,map_particle_pars_fragment:Pp,metalnessmap_fragment:Lp,metalnessmap_pars_fragment:Ip,morphinstance_vertex:Dp,morphcolor_vertex:Up,morphnormal_vertex:Np,morphtarget_pars_vertex:Fp,morphtarget_vertex:Op,normal_fragment_begin:zp,normal_fragment_maps:Bp,normal_pars_fragment:kp,normal_pars_vertex:Gp,normal_vertex:Hp,normalmap_pars_fragment:Vp,clearcoat_normal_fragment_begin:Wp,clearcoat_normal_fragment_maps:Xp,clearcoat_pars_fragment:Yp,iridescence_pars_fragment:qp,opaque_fragment:Zp,packing:Kp,premultiplied_alpha_fragment:Jp,project_vertex:$p,dithering_fragment:Qp,dithering_pars_fragment:jp,roughnessmap_fragment:t0,roughnessmap_pars_fragment:e0,shadowmap_pars_fragment:n0,shadowmap_pars_vertex:i0,shadowmap_vertex:s0,shadowmask_pars_fragment:r0,skinbase_vertex:a0,skinning_pars_vertex:o0,skinning_vertex:l0,skinnormal_vertex:c0,specularmap_fragment:h0,specularmap_pars_fragment:f0,tonemapping_fragment:u0,tonemapping_pars_fragment:d0,transmission_fragment:p0,transmission_pars_fragment:m0,uv_pars_fragment:g0,uv_pars_vertex:x0,uv_vertex:_0,worldpos_vertex:v0,background_vert:M0,background_frag:y0,backgroundCube_vert:S0,backgroundCube_frag:b0,cube_vert:E0,cube_frag:w0,depth_vert:T0,depth_frag:A0,distance_vert:R0,distance_frag:C0,equirect_vert:P0,equirect_frag:L0,linedashed_vert:I0,linedashed_frag:D0,meshbasic_vert:U0,meshbasic_frag:N0,meshlambert_vert:F0,meshlambert_frag:O0,meshmatcap_vert:z0,meshmatcap_frag:B0,meshnormal_vert:k0,meshnormal_frag:G0,meshphong_vert:H0,meshphong_frag:V0,meshphysical_vert:W0,meshphysical_frag:X0,meshtoon_vert:Y0,meshtoon_frag:q0,points_vert:Z0,points_frag:K0,shadow_vert:J0,shadow_frag:$0,sprite_vert:Q0,sprite_frag:j0},pt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Cn={basic:{uniforms:en([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:en([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Vt(0)},envMapIntensity:{value:1}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:en([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:en([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:en([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:en([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:en([pt.points,pt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:en([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:en([pt.common,pt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:en([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:en([pt.sprite,pt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distance:{uniforms:en([pt.common,pt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distance_vert,fragmentShader:Qt.distance_frag},shadow:{uniforms:en([pt.lights,pt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Cn.physical={uniforms:en([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const Sr={r:0,b:0,g:0},tm=new he,Fh=new Kt;Fh.set(-1,0,0,0,1,0,0,0,1);function em(i,t,e,n,s,r){const a=new Vt(0);let o=s===!0?0:1,l,c,f=null,d=0,h=null;function u(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){const M=y.backgroundBlurriness>0;T=t.get(T,M)}return T}function m(y){let T=!1;const M=u(y);M===null?g(a,o):M&&M.isColor&&(g(M,1),T=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(y,T){const M=u(T);M&&(M.isCubeTexture||M.mapping===Xr)?(c===void 0&&(c=new Ut(new se(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:ls(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(tm.makeRotationFromEuler(T.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Fh),c.material.toneMapped=ae.getTransfer(M.colorSpace)!==me,(f!==M||d!==M.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,f=M,d=M.version,h=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Ut(new Te(2,2),new an({name:"BackgroundMaterial",uniforms:ls(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=ae.getTransfer(M.colorSpace)!==me,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||d!==M.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,f=M,d=M.version,h=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,T){y.getRGB(Sr,Ih(i)),e.buffers.color.setClear(Sr.r,Sr.g,Sr.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,T=1){a.set(y),o=T,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,g(a,o)},render:m,addToRenderList:v,dispose:p}}function nm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(B,O,L,A,U){let z=!1;const V=d(B,A,L,O);r!==V&&(r=V,c(r.object)),z=u(B,A,L,U),z&&m(B,A,L,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,M(B,O,L,A),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return i.createVertexArray()}function c(B){return i.bindVertexArray(B)}function f(B){return i.deleteVertexArray(B)}function d(B,O,L,A){const U=A.wireframe===!0;let z=n[O.id];z===void 0&&(z={},n[O.id]=z);const V=B.isInstancedMesh===!0?B.id:0;let Z=z[V];Z===void 0&&(Z={},z[V]=Z);let k=Z[L.id];k===void 0&&(k={},Z[L.id]=k);let Q=k[U];return Q===void 0&&(Q=h(l()),k[U]=Q),Q}function h(B){const O=[],L=[],A=[];for(let U=0;U<e;U++)O[U]=0,L[U]=0,A[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:L,attributeDivisors:A,object:B,attributes:{},index:null}}function u(B,O,L,A){const U=r.attributes,z=O.attributes;let V=0;const Z=L.getAttributes();for(const k in Z)if(Z[k].location>=0){const et=U[k];let ut=z[k];if(ut===void 0&&(k==="instanceMatrix"&&B.instanceMatrix&&(ut=B.instanceMatrix),k==="instanceColor"&&B.instanceColor&&(ut=B.instanceColor)),et===void 0||et.attribute!==ut||ut&&et.data!==ut.data)return!0;V++}return r.attributesNum!==V||r.index!==A}function m(B,O,L,A){const U={},z=O.attributes;let V=0;const Z=L.getAttributes();for(const k in Z)if(Z[k].location>=0){let et=z[k];et===void 0&&(k==="instanceMatrix"&&B.instanceMatrix&&(et=B.instanceMatrix),k==="instanceColor"&&B.instanceColor&&(et=B.instanceColor));const ut={};ut.attribute=et,et&&et.data&&(ut.data=et.data),U[k]=ut,V++}r.attributes=U,r.attributesNum=V,r.index=A}function v(){const B=r.newAttributes;for(let O=0,L=B.length;O<L;O++)B[O]=0}function g(B){p(B,0)}function p(B,O){const L=r.newAttributes,A=r.enabledAttributes,U=r.attributeDivisors;L[B]=1,A[B]===0&&(i.enableVertexAttribArray(B),A[B]=1),U[B]!==O&&(i.vertexAttribDivisor(B,O),U[B]=O)}function y(){const B=r.newAttributes,O=r.enabledAttributes;for(let L=0,A=O.length;L<A;L++)O[L]!==B[L]&&(i.disableVertexAttribArray(L),O[L]=0)}function T(B,O,L,A,U,z,V){V===!0?i.vertexAttribIPointer(B,O,L,U,z):i.vertexAttribPointer(B,O,L,A,U,z)}function M(B,O,L,A){v();const U=A.attributes,z=L.getAttributes(),V=O.defaultAttributeValues;for(const Z in z){const k=z[Z];if(k.location>=0){let Q=U[Z];if(Q===void 0&&(Z==="instanceMatrix"&&B.instanceMatrix&&(Q=B.instanceMatrix),Z==="instanceColor"&&B.instanceColor&&(Q=B.instanceColor)),Q!==void 0){const et=Q.normalized,ut=Q.itemSize,yt=t.get(Q);if(yt===void 0)continue;const te=yt.buffer,bt=yt.type,Ot=yt.bytesPerElement,j=bt===i.INT||bt===i.UNSIGNED_INT||Q.gpuType===Go;if(Q.isInterleavedBufferAttribute){const nt=Q.data,vt=nt.stride,Ft=Q.offset;if(nt.isInstancedInterleavedBuffer){for(let gt=0;gt<k.locationSize;gt++)p(k.location+gt,nt.meshPerAttribute);B.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let gt=0;gt<k.locationSize;gt++)g(k.location+gt);i.bindBuffer(i.ARRAY_BUFFER,te);for(let gt=0;gt<k.locationSize;gt++)T(k.location+gt,ut/k.locationSize,bt,et,vt*Ot,(Ft+ut/k.locationSize*gt)*Ot,j)}else{if(Q.isInstancedBufferAttribute){for(let nt=0;nt<k.locationSize;nt++)p(k.location+nt,Q.meshPerAttribute);B.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let nt=0;nt<k.locationSize;nt++)g(k.location+nt);i.bindBuffer(i.ARRAY_BUFFER,te);for(let nt=0;nt<k.locationSize;nt++)T(k.location+nt,ut/k.locationSize,bt,et,ut*Ot,ut/k.locationSize*nt*Ot,j)}}else if(V!==void 0){const et=V[Z];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(k.location,et);break;case 3:i.vertexAttrib3fv(k.location,et);break;case 4:i.vertexAttrib4fv(k.location,et);break;default:i.vertexAttrib1fv(k.location,et)}}}}y()}function S(){w();for(const B in n){const O=n[B];for(const L in O){const A=O[L];for(const U in A){const z=A[U];for(const V in z)f(z[V].object),delete z[V];delete A[U]}}delete n[B]}}function E(B){if(n[B.id]===void 0)return;const O=n[B.id];for(const L in O){const A=O[L];for(const U in A){const z=A[U];for(const V in z)f(z[V].object),delete z[V];delete A[U]}}delete n[B.id]}function R(B){for(const O in n){const L=n[O];for(const A in L){const U=L[A];if(U[B.id]===void 0)continue;const z=U[B.id];for(const V in z)f(z[V].object),delete z[V];delete U[B.id]}}}function _(B){for(const O in n){const L=n[O],A=B.isInstancedMesh===!0?B.id:0,U=L[A];if(U!==void 0){for(const z in U){const V=U[z];for(const Z in V)f(V[Z].object),delete V[Z];delete U[z]}delete L[A],Object.keys(L).length===0&&delete n[O]}}}function w(){D(),a=!0,r!==s&&(r=s,c(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:D,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:g,disableUnusedAttributes:y}}function im(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,f){f!==0&&(i.drawArraysInstanced(n,l,c,f),e.update(c,n,f))}function o(l,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,f);let h=0;for(let u=0;u<f;u++)h+=c[u];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function sm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Sn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const _=R===Nn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==fn&&R!==yn&&!_&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const f=l(c);f!==c&&(Xt("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:u,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:M,maxSamples:S,samples:E}}function rm(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new ri,o=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const u=d.length!==0||h||n!==0||s;return s=h,n=d.length,u},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=f(d,h,0)},this.setState=function(d,h,u){const m=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!s||m===null||m.length===0||r&&!g)r?f(null):c();else{const y=r?0:n,T=y*4;let M=p.clippingState||null;l.value=M,M=f(m,h,T,u);for(let S=0;S!==T;++S)M[S]=e[S];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(d,h,u,m){const v=d!==null?d.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const p=u+v*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let T=0,M=u;T!==v;++T,M+=4)a.copy(d[T]).applyMatrix4(y,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}const ss=4,am=6,om=20,lm=256,Ss=new cl,vc=new Vt;let Ua=null,Na=0,Fa=0,Oa=!1;const cm=new P,Mi=new P;class Mc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=cm}=r;Ua=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ua,Na,Fa),this._renderer.xr.enabled=Oa,t.scissorTest=!1,ts(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ai||t.mapping===os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ua=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:Nn,format:Sn,colorSpace:Fr,depthBuffer:!1},s=yc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yc(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=hm(r)),this._blurMaterial=um(r,t,e),this._ggxMaterial=fm(r,t,e)}return s}_compileMaterial(t){const e=new Ut(new Ee,t);this._renderer.compile(e,Ss)}_sceneToCubeUV(t,e,n,s,r){const l=new cn(90,1,e,n),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,u=d.toneMapping;d.getClearColor(vc),d.toneMapping=Dn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ut(new se,new de({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let p=!1;const y=t.background;y?y.isColor&&(g.color.copy(y),t.background=null,p=!0):(g.color.copy(vc),p=!0);for(let T=0;T<6;T++){const M=T%3;M===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+f[T],r.y,r.z)):M===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+f[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+f[T]));const S=this._cubeSize;ts(s,M*S,T>2?S:0,S,S),d.setRenderTarget(s),p&&d.render(v,l),d.render(t,l)}d.toneMapping=u,d.autoClear=h,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ai||t.mapping===os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;ts(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ss)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),f=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-f*f),h=c*1.25,u=d*h,{_lodMax:m}=this,v=this._sizeLods[n],g=3*v*(n>m-ss?n-m+ss:0),p=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=u,l.mipInt.value=m-e,ts(r,g,p,3*v,2*v),s.setRenderTarget(r),s.render(o,Ss),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,ts(t,g,p,3*v,2*v),s.setRenderTarget(t),s.render(o,Ss)}_blur(t,e,n,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const f=this._sizeLods[s],d=3*f*(s>this._lodMax-ss?s-this._lodMax+ss:0),h=4*(this._cubeSize-f);ts(e,d,h,3*f,2*f),a.setRenderTarget(e),a.render(l,Ss)}}function hm(i){const t=[],e=[];let n=i;const s=i-ss+1+am;for(let r=0;r<s;r++){const a=Math.pow(2,n);t.push(a);const o=1/(a-2),l=-o,c=1+o,f=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,u=3,m=new Float32Array(u*h*d),v=new Float32Array(u*h*d);for(let p=0;p<d;p++){const y=p%3*2/3-1,T=p>2?0:-1,M=[y,T,0,y+2/3,T,0,y+2/3,T+1,0,y,T,0,y+2/3,T+1,0,y,T+1,0];m.set(M,u*h*p);for(let S=0;S<h;S++){const E=f[S*2]*2-1,R=f[S*2+1]*2-1;p===0?Mi.set(1,R,E):p===1?Mi.set(-E,1,-R):p===2?Mi.set(-E,R,1):p===3?Mi.set(-1,R,-E):p===4?Mi.set(-E,-1,R):Mi.set(E,R,-1),Mi.toArray(v,(p*h+S)*u)}}const g=new Ee;g.setAttribute("position",new Qe(m,u)),g.setAttribute("outputDirection",new Qe(v,u)),e.push(new Ut(g,null)),n>ss&&n--}return{lodMeshes:e,sizeLods:t}}function yc(i,t,e){const n=new bn(i,t,e);return n.texture.mapping=Xr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ts(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function fm(i,t,e){return new an({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:lm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Kr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function um(i,t,e){return new an({name:"SphericalGaussianBlur",defines:{SAMPLES:om,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Kr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Sc(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function bc(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Kr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Oh extends bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Rh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new se(5,5,5),r=new an({name:"CubemapFromEquirect",uniforms:ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:Wn});r.uniforms.tEquirect.value=e;const a=new Ut(s,r),o=e.minFilter;return e.minFilter===Si&&(e.minFilter=Je),new gd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}function dm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,u=!1){return h==null?null:u?a(h):r(h)}function r(h){if(h&&h.isTexture){const u=h.mapping;if(u===sa||u===ra)if(t.has(h)){const m=t.get(h).texture;return o(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const v=new Oh(m.height);return v.fromEquirectangularTexture(i,h),t.set(h,v),h.addEventListener("dispose",c),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const u=h.mapping,m=u===sa||u===ra,v=u===Ai||u===os;if(m||v){let g=e.get(h);const p=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Mc(i)),g=m?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const y=h.image;return m&&y&&y.height>0||v&&y&&l(y)?(n===null&&(n=new Mc(i)),g=m?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",f),g.texture):null}}}return h}function o(h,u){return u===sa?h.mapping=Ai:u===ra&&(h.mapping=os),h}function l(h){let u=0;const m=6;for(let v=0;v<m;v++)h[v]!==void 0&&u++;return u===m}function c(h){const u=h.target;u.removeEventListener("dispose",c);const m=t.get(u);m!==void 0&&(t.delete(u),m.dispose())}function f(h){const u=h.target;u.removeEventListener("dispose",f);const m=e.get(u);m!==void 0&&(e.delete(u),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function pm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&rs("WebGLRenderer: "+n+" extension not supported."),s}}}function mm(i,t,e,n){const s={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const m in h.attributes)t.remove(h.attributes[m]);h.removeEventListener("dispose",a),delete s[h.id];const u=r.get(h);u&&(t.remove(u),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(d){const h=d.attributes;for(const u in h)t.update(h[u],i.ARRAY_BUFFER)}function c(d){const h=[],u=d.index,m=d.attributes.position;let v=0;if(m===void 0)return;if(u!==null){const y=u.array;v=u.version;for(let T=0,M=y.length;T<M;T+=3){const S=y[T+0],E=y[T+1],R=y[T+2];h.push(S,E,E,R,R,S)}}else{const y=m.array;v=m.version;for(let T=0,M=y.length/3-1;T<M;T+=3){const S=T+0,E=T+1,R=T+2;h.push(S,E,E,R,R,S)}}const g=new(m.count>=65535?Eh:bh)(h,1);g.version=v;const p=r.get(d);p&&t.remove(p),r.set(d,g)}function f(d){const h=r.get(d);if(h){const u=d.index;u!==null&&h.version<u.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:f}}function gm(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){i.drawElements(n,h,r,d*a),e.update(h,n,1)}function c(d,h,u){u!==0&&(i.drawElementsInstanced(n,h,r,d*a,u),e.update(h,n,u))}function f(d,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,u);let v=0;for(let g=0;g<u;g++)v+=h[g];e.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function xm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:ce("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function _m(i,t,e){const n=new WeakMap,s=new we;function r(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=f!==void 0?f.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let w=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();const u=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let T=0;u===!0&&(T=1),m===!0&&(T=2),v===!0&&(T=3);let M=o.attributes.position.count*T,S=1;M>t.maxTextureSize&&(S=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const E=new Float32Array(M*S*4*d),R=new Mh(E,M,S,d);R.type=yn,R.needsUpdate=!0;const _=T*4;for(let D=0;D<d;D++){const B=g[D],O=p[D],L=y[D],A=M*S*4*D;for(let U=0;U<B.count;U++){const z=U*_;u===!0&&(s.fromBufferAttribute(B,U),E[A+z+0]=s.x,E[A+z+1]=s.y,E[A+z+2]=s.z,E[A+z+3]=0),m===!0&&(s.fromBufferAttribute(O,U),E[A+z+4]=s.x,E[A+z+5]=s.y,E[A+z+6]=s.z,E[A+z+7]=0),v===!0&&(s.fromBufferAttribute(L,U),E[A+z+8]=s.x,E[A+z+9]=s.y,E[A+z+10]=s.z,E[A+z+11]=L.itemSize===4?s.w:1)}}h={count:d,texture:R,size:new Tt(M,S)},n.set(o,h),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let u=0;for(let v=0;v<c.length;v++)u+=c[v];const m=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function vm(i,t,e,n,s){let r=new WeakMap;function a(c){const f=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==f&&(t.update(h),r.set(h,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==f&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,f))),c.isSkinnedMesh){const u=c.skeleton;r.get(u)!==f&&(u.update(),r.set(u,f))}return h}function o(){r=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),n.releaseStatesOfObject(f),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:a,dispose:o}}const Mm={[sh]:"LINEAR_TONE_MAPPING",[rh]:"REINHARD_TONE_MAPPING",[ah]:"CINEON_TONE_MAPPING",[oh]:"ACES_FILMIC_TONE_MAPPING",[ch]:"AGX_TONE_MAPPING",[hh]:"NEUTRAL_TONE_MAPPING",[lh]:"CUSTOM_TONE_MAPPING"};function ym(i,t,e,n,s,r){const a=new bn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Ee;c.setAttribute("position",new ne([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ne([0,2,0,0,2,0],2));const f=new rd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Ut(c,f),h=new cl(-1,1,1,-1,0,1);let u=null,m=null,v=!1,g,p=null,y=[],T=!1;this.setSize=function(M,S){a.setSize(M,S),o!==null&&o.setSize(M,S),l!==null&&l.setSize(M,S);for(let E=0;E<y.length;E++){const R=y[E];R.setSize&&R.setSize(M,S)}},this.setEffects=function(M){y=M,T=y.length>0&&y[0].isRenderPass===!0;const S=a.width,E=a.height;y.length>0&&o===null&&(o=new bn(S,E,{type:Nn,depthBuffer:!1,stencilBuffer:!1}),l=new bn(S,E,{type:Nn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<y.length;R++){const _=y[R];_.setSize&&_.setSize(S,E)}},this.begin=function(M,S){if(v||M.toneMapping===Dn&&y.length===0)return!1;if(p=S,S!==null){const E=S.width,R=S.height;(a.width!==E||a.height!==R)&&this.setSize(E,R)}return T===!1&&M.setRenderTarget(a),g=M.toneMapping,M.toneMapping=Dn,!0},this.hasRenderPass=function(){return T},this.end=function(M,S){M.toneMapping=g,v=!0;let E=a,R=o;for(let _=0;_<y.length;_++){const w=y[_];w.enabled!==!1&&(w.render(M,R,E,S),w.needsSwap!==!1&&(E=R,R=R===o?l:o))}if(u!==M.outputColorSpace||m!==M.toneMapping){u=M.outputColorSpace,m=M.toneMapping,f.defines={},ae.getTransfer(u)===me&&(f.defines.SRGB_TRANSFER="");const _=Mm[m];_&&(f.defines[_]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=E.texture,M.setRenderTarget(p),M.render(d,h),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}const zh=new Xe,Uo=new Gs(1,1),Bh=new Mh,kh=new yu,Gh=new Rh,Ec=[],wc=[],Tc=new Float32Array(16),Ac=new Float32Array(9),Rc=new Float32Array(4);function hs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ec[s];if(r===void 0&&(r=new Float32Array(s),Ec[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Jr(i,t){let e=wc[t];e===void 0&&(e=new Int32Array(t),wc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Sm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function Em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function Tm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Rc.set(n),i.uniformMatrix2fv(this.addr,!1,Rc),Ne(e,n)}}function Am(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Ac.set(n),i.uniformMatrix3fv(this.addr,!1,Ac),Ne(e,n)}}function Rm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Tc.set(n),i.uniformMatrix4fv(this.addr,!1,Tc),Ne(e,n)}}function Cm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Pm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function Lm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function Im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function Dm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function Nm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function Fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function Om(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Uo.compareFunction=e.isReversedDepthBuffer()?Ko:Zo,r=Uo):r=zh,e.setTexture2D(t||r,s)}function zm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||kh,s)}function Bm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Gh,s)}function km(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Bh,s)}function Gm(i){switch(i){case 5126:return Sm;case 35664:return bm;case 35665:return Em;case 35666:return wm;case 35674:return Tm;case 35675:return Am;case 35676:return Rm;case 5124:case 35670:return Cm;case 35667:case 35671:return Pm;case 35668:case 35672:return Lm;case 35669:case 35673:return Im;case 5125:return Dm;case 36294:return Um;case 36295:return Nm;case 36296:return Fm;case 35678:case 36198:case 36298:case 36306:case 35682:return Om;case 35679:case 36299:case 36307:return zm;case 35680:case 36300:case 36308:case 36293:return Bm;case 36289:case 36303:case 36311:case 36292:return km}}function Hm(i,t){i.uniform1fv(this.addr,t)}function Vm(i,t){const e=hs(t,this.size,2);i.uniform2fv(this.addr,e)}function Wm(i,t){const e=hs(t,this.size,3);i.uniform3fv(this.addr,e)}function Xm(i,t){const e=hs(t,this.size,4);i.uniform4fv(this.addr,e)}function Ym(i,t){const e=hs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function qm(i,t){const e=hs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Zm(i,t){const e=hs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Km(i,t){i.uniform1iv(this.addr,t)}function Jm(i,t){i.uniform2iv(this.addr,t)}function $m(i,t){i.uniform3iv(this.addr,t)}function Qm(i,t){i.uniform4iv(this.addr,t)}function jm(i,t){i.uniform1uiv(this.addr,t)}function tg(i,t){i.uniform2uiv(this.addr,t)}function eg(i,t){i.uniform3uiv(this.addr,t)}function ng(i,t){i.uniform4uiv(this.addr,t)}function ig(i,t,e){const n=this.cache,s=t.length,r=Jr(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Uo:a=zh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function sg(i,t,e){const n=this.cache,s=t.length,r=Jr(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||kh,r[a])}function rg(i,t,e){const n=this.cache,s=t.length,r=Jr(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Gh,r[a])}function ag(i,t,e){const n=this.cache,s=t.length,r=Jr(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Bh,r[a])}function og(i){switch(i){case 5126:return Hm;case 35664:return Vm;case 35665:return Wm;case 35666:return Xm;case 35674:return Ym;case 35675:return qm;case 35676:return Zm;case 5124:case 35670:return Km;case 35667:case 35671:return Jm;case 35668:case 35672:return $m;case 35669:case 35673:return Qm;case 5125:return jm;case 36294:return tg;case 36295:return eg;case 36296:return ng;case 35678:case 36198:case 36298:case 36306:case 35682:return ig;case 35679:case 36299:case 36307:return sg;case 35680:case 36300:case 36308:case 36293:return rg;case 36289:case 36303:case 36311:case 36292:return ag}}class lg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Gm(e.type)}}class cg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=og(e.type)}}class hg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const za=/(\w+)(\])?(\[|\.)?/g;function Cc(i,t){i.seq.push(t),i.map[t.id]=t}function fg(i,t,e){const n=i.name,s=n.length;for(za.lastIndex=0;;){const r=za.exec(n),a=za.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Cc(e,c===void 0?new lg(o,i,t):new cg(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new hg(o),Cc(e,d)),e=d}}}class Lr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);fg(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Pc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const ug=37297;let dg=0;function pg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Lc=new Kt;function mg(i){ae._getMatrix(Lc,ae.workingColorSpace,i);const t=`mat3( ${Lc.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(i)){case Or:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return Xt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ic(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+pg(i.getShaderSource(t),o)}else return r}function gg(i,t){const e=mg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const xg={[sh]:"Linear",[rh]:"Reinhard",[ah]:"Cineon",[oh]:"ACESFilmic",[ch]:"AgX",[hh]:"Neutral",[lh]:"Custom"};function _g(i,t){const e=xg[t];return e===void 0?(Xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const br=new P;function vg(){ae.getLuminanceCoefficients(br);const i=br.x.toFixed(4),t=br.y.toFixed(4),e=br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(As).join(`
`)}function yg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Sg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function As(i){return i!==""}function Dc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Uc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function No(i){return i.replace(bg,wg)}const Eg=new Map;function wg(i,t){let e=Qt[t];if(e===void 0){const n=Eg.get(t);if(n!==void 0)e=Qt[n],Xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return No(e)}const Tg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nc(i){return i.replace(Tg,Ag)}function Ag(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Rg={[Tr]:"SHADOWMAP_TYPE_PCF",[Ts]:"SHADOWMAP_TYPE_VSM"};function Cg(i){return Rg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Pg={[Ai]:"ENVMAP_TYPE_CUBE",[os]:"ENVMAP_TYPE_CUBE",[Xr]:"ENVMAP_TYPE_CUBE_UV"};function Lg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Pg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Ig={[os]:"ENVMAP_MODE_REFRACTION"};function Dg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ig[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Ug={[ko]:"ENVMAP_BLENDING_MULTIPLY",[zf]:"ENVMAP_BLENDING_MIX",[Bf]:"ENVMAP_BLENDING_ADD"};function Ng(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ug[i.combine]||"ENVMAP_BLENDING_NONE"}function Fg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Og(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Cg(e),c=Lg(e),f=Dg(e),d=Ng(e),h=Fg(e),u=Mg(e),m=yg(r),v=s.createProgram();let g,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(As).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(As).join(`
`),p.length>0&&(p+=`
`)):(g=[Fc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),p=[Fc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Dn?"#define TONE_MAPPING":"",e.toneMapping!==Dn?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Dn?_g("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,gg("linearToOutputTexel",e.outputColorSpace),vg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(As).join(`
`)),a=No(a),a=Dc(a,e),a=Uc(a,e),o=No(o),o=Dc(o,e),o=Uc(o,e),a=Nc(a),o=Nc(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=y+g+a,M=y+p+o,S=Pc(s,s.VERTEX_SHADER,T),E=Pc(s,s.FRAGMENT_SHADER,M);s.attachShader(v,S),s.attachShader(v,E),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(B){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(v)||"",L=s.getShaderInfoLog(S)||"",A=s.getShaderInfoLog(E)||"",U=O.trim(),z=L.trim(),V=A.trim();let Z=!0,k=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,S,E);else{const Q=Ic(s,S,"vertex"),et=Ic(s,E,"fragment");ce("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+U+`
`+Q+`
`+et)}else U!==""?Xt("WebGLProgram: Program Info Log:",U):(z===""||V==="")&&(k=!1);k&&(B.diagnostics={runnable:Z,programLog:U,vertexShader:{log:z,prefix:g},fragmentShader:{log:V,prefix:p}})}s.deleteShader(S),s.deleteShader(E),_=new Lr(s,v),w=Sg(s,v)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(v,ug)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=dg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=E,this}let zg=0;class Bg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new kg(t),e.set(t,n)),n}}class kg{constructor(t){this.id=zg++,this.code=t,this.usedTimes=0}}function Gg(i){return i===Ri||i===Ur||i===Nr}function Hg(i,t,e,n,s,r){const a=new yh,o=new Bg,l=new Set,c=[],f=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,w,D,B,O,L){const A=B.fog,U=O.geometry,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?B.environment:null,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Z=t.get(_.envMap||z,V),k=Z&&Z.mapping===Xr?Z.image.height:null,Q=u[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&Xt("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const et=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ut=et!==void 0?et.length:0;let yt=0;U.morphAttributes.position!==void 0&&(yt=1),U.morphAttributes.normal!==void 0&&(yt=2),U.morphAttributes.color!==void 0&&(yt=3);let te,bt,Ot,j;if(Q){const Me=Cn[Q];te=Me.vertexShader,bt=Me.fragmentShader}else{te=_.vertexShader,bt=_.fragmentShader;const Me=o.getVertexShaderStage(_),fe=o.getFragmentShaderStage(_);o.update(_,Me,fe),Ot=Me.id,j=fe.id}const nt=i.getRenderTarget(),vt=i.state.buffers.depth.getReversed(),Ft=O.isInstancedMesh===!0,gt=O.isBatchedMesh===!0,zt=!!_.map,pe=!!_.matcap,Yt=!!Z,Jt=!!_.aoMap,oe=!!_.lightMap,Wt=!!_.bumpMap&&_.wireframe===!1,$=!!_.normalMap,at=!!_.displacementMap,lt=!!_.emissiveMap,mt=!!_.metalnessMap,kt=!!_.roughnessMap,F=_.anisotropy>0,Gt=_.clearcoat>0,Et=_.dispersion>0,C=_.retroreflectivity>0,x=_.iridescence>0,W=_.sheen>0,I=_.transmission>0,N=F&&!!_.anisotropyMap,K=Gt&&!!_.clearcoatMap,it=Gt&&!!_.clearcoatNormalMap,q=Gt&&!!_.clearcoatRoughnessMap,tt=x&&!!_.iridescenceMap,ot=x&&!!_.iridescenceThicknessMap,Ct=W&&!!_.sheenColorMap,dt=W&&!!_.sheenRoughnessMap,ct=!!_.specularMap,Pt=!!_.specularColorMap,Nt=!!_.specularIntensityMap,qt=I&&!!_.transmissionMap,G=I&&!!_.thicknessMap,ht=!!_.gradientMap,st=!!_.alphaMap,ft=_.alphaTest>0,xt=!!_.alphaHash,rt=!!_.extensions;let Dt=Dn;_.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Dt=i.toneMapping);const Lt={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:te,fragmentShader:bt,defines:_.defines,customVertexShaderID:Ot,customFragmentShaderID:j,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:gt,batchingColor:gt&&O._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&O.instanceColor!==null,instancingMorph:Ft&&O.morphTexture!==null,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:ae.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:zt,matcap:pe,envMap:Yt,envMapMode:Yt&&Z.mapping,envMapCubeUVHeight:k,aoMap:Jt,lightMap:oe,bumpMap:Wt,normalMap:$,displacementMap:at,emissiveMap:lt,normalMapObjectSpace:$&&_.normalMapType===Hf,normalMapTangentSpace:$&&_.normalMapType===Lo,packedNormalMap:$&&_.normalMapType===Lo&&Gg(_.normalMap.format),metalnessMap:mt,roughnessMap:kt,anisotropy:F,anisotropyMap:N,clearcoat:Gt,clearcoatMap:K,clearcoatNormalMap:it,clearcoatRoughnessMap:q,dispersion:Et,retroreflection:C,iridescence:x,iridescenceMap:tt,iridescenceThicknessMap:ot,sheen:W,sheenColorMap:Ct,sheenRoughnessMap:dt,specularMap:ct,specularColorMap:Pt,specularIntensityMap:Nt,transmission:I,transmissionMap:qt,thicknessMap:G,gradientMap:ht,opaque:_.transparent===!1&&_.blending===Ps&&_.alphaToCoverage===!1,alphaMap:st,alphaTest:ft,alphaHash:xt,combine:_.combine,mapUv:zt&&m(_.map.channel),aoMapUv:Jt&&m(_.aoMap.channel),lightMapUv:oe&&m(_.lightMap.channel),bumpMapUv:Wt&&m(_.bumpMap.channel),normalMapUv:$&&m(_.normalMap.channel),displacementMapUv:at&&m(_.displacementMap.channel),emissiveMapUv:lt&&m(_.emissiveMap.channel),metalnessMapUv:mt&&m(_.metalnessMap.channel),roughnessMapUv:kt&&m(_.roughnessMap.channel),anisotropyMapUv:N&&m(_.anisotropyMap.channel),clearcoatMapUv:K&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:it&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:dt&&m(_.sheenRoughnessMap.channel),specularMapUv:ct&&m(_.specularMap.channel),specularColorMapUv:Pt&&m(_.specularColorMap.channel),specularIntensityMapUv:Nt&&m(_.specularIntensityMap.channel),transmissionMapUv:qt&&m(_.transmissionMap.channel),thicknessMapUv:G&&m(_.thicknessMap.channel),alphaMapUv:st&&m(_.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&($||F),vertexNormals:!!U.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!U.attributes.uv&&(zt||st),fog:!!A,useFog:_.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||U.attributes.normal===void 0&&$===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:vt,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:yt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Dt,decodeVideoTexture:zt&&_.map.isVideoTexture===!0&&ae.getTransfer(_.map.colorSpace)===me,decodeVideoTextureEmissive:lt&&_.emissiveMap.isVideoTexture===!0&&ae.getTransfer(_.emissiveMap.colorSpace)===me,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ge,flipSided:_.side===$e,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:rt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&_.extensions.multiDraw===!0||gt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function g(_){const w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(const D in _.defines)w.push(D),w.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(p(w,_),y(w,_),w.push(i.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function p(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function y(_,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function T(_){const w=u[_.type];let D;if(w){const B=Cn[w];D=al.clone(B.uniforms)}else D=_.uniforms;return D}function M(_,w){let D=f.get(w);return D!==void 0?++D.usedTimes:(D=new Og(i,w,_,s),c.push(D),f.set(w,D)),D}function S(_){if(--_.usedTimes===0){const w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),f.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function R(){o.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:T,acquireProgram:M,releaseProgram:S,releaseShaderCache:E,programs:c,dispose:R}}function Vg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Wg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Oc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function zc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let u=0;return h.isInstancedMesh&&(u+=2),h.isSkinnedMesh&&(u+=1),u}function o(h,u,m,v,g,p){let y=i[t];return y===void 0?(y={id:h.id,object:h,geometry:u,material:m,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:g,group:p},i[t]=y):(y.id=h.id,y.object=h,y.geometry=u,y.material=m,y.materialVariant=a(h),y.groupOrder=v,y.renderOrder=h.renderOrder,y.z=g,y.group=p),t++,y}function l(h,u,m,v,g,p,y){y.reversedDepth===!0&&(g=-g);const T=o(h,u,m,v,g,p);m.transmission>0?n.push(T):m.transparent===!0?s.push(T):e.push(T)}function c(h,u,m,v,g,p){const y=o(h,u,m,v,g,p);m.transmission>0?n.unshift(y):m.transparent===!0?s.unshift(y):e.unshift(y)}function f(h,u){e.length>1&&e.sort(h||Wg),n.length>1&&n.sort(u||Oc),s.length>1&&s.sort(u||Oc)}function d(){for(let h=t,u=i.length;h<u;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:f}}function Xg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new zc,i.set(n,[a])):s>=r.length?(a=new zc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Yg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new Vt};break;case"SpotLight":e={position:new P,direction:new P,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function qg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Zg=0;function Kg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Jg(i){const t=new Yg,e=qg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new he,a=new he;function o(c){let f=0,d=0,h=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let u=0,m=0,v=0,g=0,p=0,y=0,T=0,M=0,S=0,E=0,R=0,_=0,w=0,D=0;c.sort(Kg);for(let O=0,L=c.length;O<L;O++){const A=c[O],U=A.color,z=A.intensity,V=A.distance;let Z=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===Ri?Z=A.shadow.map.texture:Z=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)f+=U.r*z,d+=U.g*z,h+=U.b*z;else if(A.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(A.sh.coefficients[k],z);D++}else if(A.isSunLight){const k=t.get(A);if(k.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const Q=A.shadow,et=e.get(A);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[m]=et,n.sunShadowMap[m]=Z;const ut=Q.getViewportCount();for(let yt=0;yt<ut;yt++)n.sunShadowMatrix[v+yt]=Q.getMatrix(yt),n.sunShadowCascade[v+yt]=Q._cascadeData[yt];v+=ut,m++}n.sun[u]=k,u++}else if(A.isDirectionalLight){const k=t.get(A);if(k.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const Q=A.shadow,et=e.get(A);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,n.directionalShadow[g]=et,n.directionalShadowMap[g]=Z,n.directionalShadowMatrix[g]=A.shadow.matrix,S++}n.directional[g]=k,g++}else if(A.isSpotLight){const k=t.get(A);k.position.setFromMatrixPosition(A.matrixWorld),k.color.copy(U).multiplyScalar(z),k.distance=V,k.coneCos=Math.cos(A.angle),k.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),k.decay=A.decay,n.spot[y]=k;const Q=A.shadow;if(A.map&&(n.spotLightMap[_]=A.map,_++,Q.updateMatrices(A),A.castShadow&&w++),n.spotLightMatrix[y]=Q.matrix,A.castShadow){const et=e.get(A);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,n.spotShadow[y]=et,n.spotShadowMap[y]=Z,R++}y++}else if(A.isRectAreaLight){const k=t.get(A);k.color.copy(U).multiplyScalar(z),k.halfWidth.set(A.width*.5,0,0),k.halfHeight.set(0,A.height*.5,0),n.rectArea[T]=k,T++}else if(A.isPointLight){const k=t.get(A);if(k.color.copy(A.color).multiplyScalar(A.intensity),k.distance=A.distance,k.decay=A.decay,A.castShadow){const Q=A.shadow,et=e.get(A);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,et.shadowCameraNear=Q.camera.near,et.shadowCameraFar=Q.camera.far,n.pointShadow[p]=et,n.pointShadowMap[p]=Z,n.pointShadowMatrix[p]=A.shadow.matrix,E++}n.point[p]=k,p++}else if(A.isHemisphereLight){const k=t.get(A);k.skyColor.copy(A.color).multiplyScalar(z),k.groundColor.copy(A.groundColor).multiplyScalar(z),n.hemi[M]=k,M++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=d,n.ambient[2]=h;const B=n.hash;(B.sunLength!==u||B.directionalLength!==g||B.pointLength!==p||B.spotLength!==y||B.rectAreaLength!==T||B.hemiLength!==M||B.numSunShadows!==m||B.numDirectionalShadows!==S||B.numPointShadows!==E||B.numSpotShadows!==R||B.numSpotMaps!==_||B.numLightProbes!==D)&&(n.sun.length=u,n.directional.length=g,n.spot.length=y,n.rectArea.length=T,n.point.length=p,n.hemi.length=M,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+_-w,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=D,B.sunLength=u,B.directionalLength=g,B.pointLength=p,B.spotLength=y,B.rectAreaLength=T,B.hemiLength=M,B.numSunShadows=m,B.numDirectionalShadows=S,B.numPointShadows=E,B.numSpotShadows=R,B.numSpotMaps=_,B.numLightProbes=D,n.version=Zg++)}function l(c,f){let d=0,h=0,u=0,m=0,v=0,g=0;const p=f.matrixWorldInverse;for(let y=0,T=c.length;y<T;y++){const M=c[y];if(M.isSunLight){const S=n.sun[d];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(p),d++}else if(M.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),h++}else if(M.isSpotLight){const S=n.spot[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),m++}else if(M.isRectAreaLight){const S=n.rectArea[v];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){const S=n.point[u];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),u++}else if(M.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function Bc(i){const t=new Jg(i),e=[],n=[],s=[];function r(h){d.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function f(h){t.setupView(e,h)}const d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function $g(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Bc(i),t.set(s,[o])):r>=a.length?(o=new Bc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Qg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,tx=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],ex=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],kc=new he,bs=new P,Ba=new P;function nx(i,t,e){let n=new jo;const s=new Tt,r=new Tt,a=new we,o=new ad,l=new od,c={},f=e.maxTextureSize,d={[Ti]:$e,[$e]:Ti,[Ge]:Ge},h=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:Qg,fragmentShader:jg}),u=h.clone();u.defines.HORIZONTAL_PASS=1;const m=new Ee;m.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ut(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tr;let p=this.type;this.render=function(E,R,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===vf&&(Xt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Tr);const w=i.getRenderTarget(),D=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Wn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const L=p!==this.type;L&&R.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(U=>U.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,U=E.length;A<U;A++){const z=E[A],V=z.shadow;if(V===void 0){Xt("WebGLShadowMap:",z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const Z=V.getFrameExtents();s.multiply(Z),r.copy(V.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/Z.x),s.x=r.x*Z.x,V.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/Z.y),s.y=r.y*Z.y,V.mapSize.y=r.y));const k=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=k,V.map===null||L===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Ts){if(z.isPointLight){Xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new bn(s.x,s.y,{format:Ri,type:Nn,minFilter:Je,magFilter:Je,generateMipmaps:!1}),V.map.texture.name=z.name+".shadowMap",V.map.depthTexture=new Gs(s.x,s.y,yn),V.map.depthTexture.name=z.name+".shadowMapDepth",V.map.depthTexture.format=qn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=He,V.map.depthTexture.magFilter=He}else z.isPointLight?(V.map=new Oh(s.x),V.map.depthTexture=new ku(s.x,Un)):(V.map=new bn(s.x,s.y),V.map.depthTexture=new Gs(s.x,s.y,Un)),V.map.depthTexture.name=z.name+".shadowMap",V.map.depthTexture.format=qn,this.type===Tr?(V.map.depthTexture.compareFunction=k?Ko:Zo,V.map.depthTexture.minFilter=Je,V.map.depthTexture.magFilter=Je):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=He,V.map.depthTexture.magFilter=He);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);const Q=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();z.isPointLight!==!0&&V.updateMatrices(z,_);for(let et=0;et<Q;et++){const ut=V.getCamera(et);if(z.isPointLight){const yt=V.camera,te=V.matrix,bt=z.distance||yt.far;bt!==yt.far&&(yt.far=bt,yt.updateProjectionMatrix()),bs.setFromMatrixPosition(z.matrixWorld),yt.position.copy(bs),Ba.copy(yt.position),Ba.add(tx[et]),yt.up.copy(ex[et]),yt.lookAt(Ba),yt.updateMatrixWorld(),te.makeTranslation(-bs.x,-bs.y,-bs.z),kc.multiplyMatrices(yt.projectionMatrix,yt.matrixWorldInverse),V._frustum.setFromProjectionMatrix(kc,yt.coordinateSystem,yt.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,et),i.clear();else{et===0&&(i.setRenderTarget(V.map),i.clear());const yt=V.getViewport(et);a.set(r.x*yt.x,r.y*yt.y,r.x*yt.z,r.y*yt.w),O.viewport(a)}n=V.getFrustum(et),M(R,_,ut,z,this.type)}V.isPointLightShadow!==!0&&this.type===Ts&&y(V,_),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(w,D,B)};function y(E,R){const _=t.update(v);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null?E.mapPass=new bn(s.x,s.y,{format:Ri,type:Nn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,_,h,v,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,_,u,v,null)}function T(E,R,_,w){let D=null;const B=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(B!==void 0)D=B;else if(D=_.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const O=D.uuid,L=R.uuid;let A=c[O];A===void 0&&(A={},c[O]=A);let U=A[L];U===void 0&&(U=D.clone(),A[L]=U,R.addEventListener("dispose",S)),D=U}if(D.visible=R.visible,D.wireframe=R.wireframe,w===Ts?D.side=R.shadowSide!==null?R.shadowSide:R.side:D.side=R.shadowSide!==null?R.shadowSide:d[R.side],D.alphaMap=R.alphaMap,D.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,D.map=R.map,D.clipShadows=R.clipShadows,D.clippingPlanes=R.clippingPlanes,D.clipIntersection=R.clipIntersection,D.displacementMap=R.displacementMap,D.displacementScale=R.displacementScale,D.displacementBias=R.displacementBias,D.wireframeLinewidth=R.wireframeLinewidth,D.linewidth=R.linewidth,_.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const O=i.properties.get(D);O.light=_}return D}function M(E,R,_,w,D){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===Ts)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);const L=t.update(E),A=E.material;if(Array.isArray(A)){const U=L.groups;for(let z=0,V=U.length;z<V;z++){const Z=U[z],k=A[Z.materialIndex];if(k&&k.visible){const Q=T(E,k,w,D);E.onBeforeShadow(i,E,R,_,L,Q,Z),i.renderBufferDirect(_,null,L,Q,E,Z),E.onAfterShadow(i,E,R,_,L,Q,Z)}}}else if(A.visible){const U=T(E,A,w,D);E.onBeforeShadow(i,E,R,_,L,U,null),i.renderBufferDirect(_,null,L,U,E,null),E.onAfterShadow(i,E,R,_,L,U,null)}}const O=E.children;for(let L=0,A=O.length;L<A;L++)M(O[L],R,_,w,D)}function S(E){E.target.removeEventListener("dispose",S);for(const _ in c){const w=c[_],D=E.target.uuid;D in w&&(w[D].dispose(),delete w[D])}}}function ix(i,t){function e(){let G=!1;const ht=new we;let st=null;const ft=new we(0,0,0,0);return{setMask:function(xt){st!==xt&&!G&&(i.colorMask(xt,xt,xt,xt),st=xt)},setLocked:function(xt){G=xt},setClear:function(xt,rt,Dt,Lt,Me){Me===!0&&(xt*=Lt,rt*=Lt,Dt*=Lt),ht.set(xt,rt,Dt,Lt),ft.equals(ht)===!1&&(i.clearColor(xt,rt,Dt,Lt),ft.copy(ht))},reset:function(){G=!1,st=null,ft.set(-1,0,0,0)}}}function n(){let G=!1,ht=!1,st=null,ft=null,xt=null;return{setReversed:function(rt){if(ht!==rt){const Dt=t.get("EXT_clip_control");rt?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),ht=rt;const Lt=xt;xt=null,this.setClear(Lt)}},getReversed:function(){return ht},setTest:function(rt){rt?nt(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function(rt){st!==rt&&!G&&(i.depthMask(rt),st=rt)},setFunc:function(rt){if(ht&&(rt=jf[rt]),ft!==rt){switch(rt){case Ya:i.depthFunc(i.NEVER);break;case qa:i.depthFunc(i.ALWAYS);break;case Za:i.depthFunc(i.LESS);break;case Ns:i.depthFunc(i.LEQUAL);break;case Ka:i.depthFunc(i.EQUAL);break;case Ja:i.depthFunc(i.GEQUAL);break;case $a:i.depthFunc(i.GREATER);break;case Qa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ft=rt}},setLocked:function(rt){G=rt},setClear:function(rt){xt!==rt&&(xt=rt,ht&&(rt=1-rt),i.clearDepth(rt))},reset:function(){G=!1,st=null,ft=null,xt=null,ht=!1}}}function s(){let G=!1,ht=null,st=null,ft=null,xt=null,rt=null,Dt=null,Lt=null,Me=null;return{setTest:function(fe){G||(fe?nt(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function(fe){ht!==fe&&!G&&(i.stencilMask(fe),ht=fe)},setFunc:function(fe,gn,En){(st!==fe||ft!==gn||xt!==En)&&(i.stencilFunc(fe,gn,En),st=fe,ft=gn,xt=En)},setOp:function(fe,gn,En){(rt!==fe||Dt!==gn||Lt!==En)&&(i.stencilOp(fe,gn,En),rt=fe,Dt=gn,Lt=En)},setLocked:function(fe){G=fe},setClear:function(fe){Me!==fe&&(i.clearStencil(fe),Me=fe)},reset:function(){G=!1,ht=null,st=null,ft=null,xt=null,rt=null,Dt=null,Lt=null,Me=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let f={},d={},h={},u=new WeakMap,m=[],v=null,g=!1,p=null,y=null,T=null,M=null,S=null,E=null,R=null,_=new Vt(0,0,0),w=0,D=!1,B=null,O=null,L=null,A=null,U=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Z=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(k)[1]),V=Z>=1):k.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),V=Z>=2);let Q=null,et={};const ut=i.getParameter(i.SCISSOR_BOX),yt=i.getParameter(i.VIEWPORT),te=new we().fromArray(ut),bt=new we().fromArray(yt);function Ot(G,ht,st,ft){const xt=new Uint8Array(4),rt=i.createTexture();i.bindTexture(G,rt),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<st;Dt++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,ft,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(ht+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return rt}const j={};j[i.TEXTURE_2D]=Ot(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=Ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=Ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=Ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(i.DEPTH_TEST),a.setFunc(Ns),Wt(!1),$(Ul),nt(i.CULL_FACE),Jt(Wn);function nt(G){f[G]!==!0&&(i.enable(G),f[G]=!0)}function vt(G){f[G]!==!1&&(i.disable(G),f[G]=!1)}function Ft(G,ht){return h[G]!==ht?(i.bindFramebuffer(G,ht),h[G]=ht,G===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ht),G===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function gt(G,ht){let st=m,ft=!1;if(G){st=u.get(ht),st===void 0&&(st=[],u.set(ht,st));const xt=G.textures;if(st.length!==xt.length||st[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,Dt=xt.length;rt<Dt;rt++)st[rt]=i.COLOR_ATTACHMENT0+rt;st.length=xt.length,ft=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,ft=!0);ft&&i.drawBuffers(st)}function zt(G){return v!==G?(i.useProgram(G),v=G,!0):!1}const pe={[is]:i.FUNC_ADD,[yf]:i.FUNC_SUBTRACT,[Sf]:i.FUNC_REVERSE_SUBTRACT};pe[bf]=i.MIN,pe[Ef]=i.MAX;const Yt={[wf]:i.ZERO,[Tf]:i.ONE,[Af]:i.SRC_COLOR,[nh]:i.SRC_ALPHA,[Df]:i.SRC_ALPHA_SATURATE,[Lf]:i.DST_COLOR,[Cf]:i.DST_ALPHA,[Rf]:i.ONE_MINUS_SRC_COLOR,[ih]:i.ONE_MINUS_SRC_ALPHA,[If]:i.ONE_MINUS_DST_COLOR,[Pf]:i.ONE_MINUS_DST_ALPHA,[Uf]:i.CONSTANT_COLOR,[Nf]:i.ONE_MINUS_CONSTANT_COLOR,[Ff]:i.CONSTANT_ALPHA,[Of]:i.ONE_MINUS_CONSTANT_ALPHA};function Jt(G,ht,st,ft,xt,rt,Dt,Lt,Me,fe){if(G===Wn){g===!0&&(vt(i.BLEND),g=!1);return}if(g===!1&&(nt(i.BLEND),g=!0),G!==Mf){if(G!==p||fe!==D){if((y!==is||S!==is)&&(i.blendEquation(i.FUNC_ADD),y=is,S=is),fe)switch(G){case Ps:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case De:i.blendFunc(i.ONE,i.ONE);break;case Nl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ce("WebGLState: Invalid blending: ",G);break}else switch(G){case Ps:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case De:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Nl:ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fl:ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ce("WebGLState: Invalid blending: ",G);break}T=null,M=null,E=null,R=null,_.set(0,0,0),w=0,p=G,D=fe}return}xt=xt||ht,rt=rt||st,Dt=Dt||ft,(ht!==y||xt!==S)&&(i.blendEquationSeparate(pe[ht],pe[xt]),y=ht,S=xt),(st!==T||ft!==M||rt!==E||Dt!==R)&&(i.blendFuncSeparate(Yt[st],Yt[ft],Yt[rt],Yt[Dt]),T=st,M=ft,E=rt,R=Dt),(Lt.equals(_)===!1||Me!==w)&&(i.blendColor(Lt.r,Lt.g,Lt.b,Me),_.copy(Lt),w=Me),p=G,D=!1}function oe(G,ht){G.side===Ge?vt(i.CULL_FACE):nt(i.CULL_FACE);let st=G.side===$e;ht&&(st=!st),Wt(st),G.blending===Ps&&G.transparent===!1?Jt(Wn):Jt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),r.setMask(G.colorWrite);const ft=G.stencilWrite;o.setTest(ft),ft&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),lt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(G){B!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),B=G)}function $(G){G!==xf?(nt(i.CULL_FACE),G!==O&&(G===Ul?i.cullFace(i.BACK):G===_f?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),O=G}function at(G){G!==L&&(V&&i.lineWidth(G),L=G)}function lt(G,ht,st){G?(nt(i.POLYGON_OFFSET_FILL),(A!==ht||U!==st)&&(A=ht,U=st,a.getReversed()&&(ht=-ht),i.polygonOffset(ht,st))):vt(i.POLYGON_OFFSET_FILL)}function mt(G){G?nt(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function kt(G){G===void 0&&(G=i.TEXTURE0+z-1),Q!==G&&(i.activeTexture(G),Q=G)}function F(G,ht,st){st===void 0&&(Q===null?st=i.TEXTURE0+z-1:st=Q);let ft=et[st];ft===void 0&&(ft={type:void 0,texture:void 0},et[st]=ft),(ft.type!==G||ft.texture!==ht)&&(Q!==st&&(i.activeTexture(st),Q=st),i.bindTexture(G,ht||j[G]),ft.type=G,ft.texture=ht)}function Gt(){const G=et[Q];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Et(){try{i.compressedTexImage2D(...arguments)}catch(G){ce("WebGLState:",G)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(G){ce("WebGLState:",G)}}function x(){try{i.texSubImage2D(...arguments)}catch(G){ce("WebGLState:",G)}}function W(){try{i.texSubImage3D(...arguments)}catch(G){ce("WebGLState:",G)}}function I(){try{i.compressedTexSubImage2D(...arguments)}catch(G){ce("WebGLState:",G)}}function N(){try{i.compressedTexSubImage3D(...arguments)}catch(G){ce("WebGLState:",G)}}function K(){try{i.texStorage2D(...arguments)}catch(G){ce("WebGLState:",G)}}function it(){try{i.texStorage3D(...arguments)}catch(G){ce("WebGLState:",G)}}function q(){try{i.texImage2D(...arguments)}catch(G){ce("WebGLState:",G)}}function tt(){try{i.texImage3D(...arguments)}catch(G){ce("WebGLState:",G)}}function ot(G){return d[G]!==void 0?d[G]:i.getParameter(G)}function Ct(G,ht){d[G]!==ht&&(i.pixelStorei(G,ht),d[G]=ht)}function dt(G){te.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),te.copy(G))}function ct(G){bt.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),bt.copy(G))}function Pt(G,ht){let st=c.get(ht);st===void 0&&(st=new WeakMap,c.set(ht,st));let ft=st.get(G);ft===void 0&&(ft=i.getUniformBlockIndex(ht,G.name),st.set(G,ft))}function Nt(G,ht){const ft=c.get(ht).get(G);l.get(ht)!==ft&&(i.uniformBlockBinding(ht,ft,G.__bindingPointIndex),l.set(ht,ft))}function qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},d={},Q=null,et={},h={},u=new WeakMap,m=[],v=null,g=!1,p=null,y=null,T=null,M=null,S=null,E=null,R=null,_=new Vt(0,0,0),w=0,D=!1,B=null,O=null,L=null,A=null,U=null,te.set(0,0,i.canvas.width,i.canvas.height),bt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:nt,disable:vt,bindFramebuffer:Ft,drawBuffers:gt,useProgram:zt,setBlending:Jt,setMaterial:oe,setFlipSided:Wt,setCullFace:$,setLineWidth:at,setPolygonOffset:lt,setScissorTest:mt,activeTexture:kt,bindTexture:F,unbindTexture:Gt,compressedTexImage2D:Et,compressedTexImage3D:C,texImage2D:q,texImage3D:tt,pixelStorei:Ct,getParameter:ot,updateUBOMapping:Pt,uniformBlockBinding:Nt,texStorage2D:K,texStorage3D:it,texSubImage2D:x,texSubImage3D:W,compressedTexSubImage2D:I,compressedTexSubImage3D:N,scissor:dt,viewport:ct,reset:qt}}function sx(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Tt,f=new WeakMap,d=new Set;let h;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,x){return m?new OffscreenCanvas(C,x):Bs("canvas")}function g(C,x,W){let I=1;const N=Et(C);if((N.width>W||N.height>W)&&(I=W/Math.max(N.width,N.height)),I<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const K=Math.floor(I*N.width),it=Math.floor(I*N.height);h===void 0&&(h=v(K,it));const q=x?v(K,it):h;return q.width=K,q.height=it,q.getContext("2d").drawImage(C,0,0,K,it),Xt("WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+K+"x"+it+")."),q}else return"data"in C&&Xt("WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),C;return C}function p(C){return C.generateMipmaps}function y(C){i.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(C,x,W,I,N,K=!1){if(C!==null){if(i[C]!==void 0)return i[C];Xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let it;I&&(it=t.get("EXT_texture_norm16"),it||Xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=x;if(x===i.RED&&(W===i.FLOAT&&(q=i.R32F),W===i.HALF_FLOAT&&(q=i.R16F),W===i.UNSIGNED_BYTE&&(q=i.R8),W===i.UNSIGNED_SHORT&&it&&(q=it.R16_EXT),W===i.SHORT&&it&&(q=it.R16_SNORM_EXT)),x===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(q=i.R8UI),W===i.UNSIGNED_SHORT&&(q=i.R16UI),W===i.UNSIGNED_INT&&(q=i.R32UI),W===i.BYTE&&(q=i.R8I),W===i.SHORT&&(q=i.R16I),W===i.INT&&(q=i.R32I)),x===i.RG&&(W===i.FLOAT&&(q=i.RG32F),W===i.HALF_FLOAT&&(q=i.RG16F),W===i.UNSIGNED_BYTE&&(q=i.RG8),W===i.UNSIGNED_SHORT&&it&&(q=it.RG16_EXT),W===i.SHORT&&it&&(q=it.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(q=i.RG8UI),W===i.UNSIGNED_SHORT&&(q=i.RG16UI),W===i.UNSIGNED_INT&&(q=i.RG32UI),W===i.BYTE&&(q=i.RG8I),W===i.SHORT&&(q=i.RG16I),W===i.INT&&(q=i.RG32I)),x===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(q=i.RGB8UI),W===i.UNSIGNED_SHORT&&(q=i.RGB16UI),W===i.UNSIGNED_INT&&(q=i.RGB32UI),W===i.BYTE&&(q=i.RGB8I),W===i.SHORT&&(q=i.RGB16I),W===i.INT&&(q=i.RGB32I)),x===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),W===i.UNSIGNED_INT&&(q=i.RGBA32UI),W===i.BYTE&&(q=i.RGBA8I),W===i.SHORT&&(q=i.RGBA16I),W===i.INT&&(q=i.RGBA32I)),x===i.RGB&&(W===i.UNSIGNED_SHORT&&it&&(q=it.RGB16_EXT),W===i.SHORT&&it&&(q=it.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),x===i.RGBA){const tt=K?Or:ae.getTransfer(N);W===i.FLOAT&&(q=i.RGBA32F),W===i.HALF_FLOAT&&(q=i.RGBA16F),W===i.UNSIGNED_BYTE&&(q=tt===me?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&it&&(q=it.RGBA16_EXT),W===i.SHORT&&it&&(q=it.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function S(C,x){let W;return C?x===null||x===Un||x===Os?W=i.DEPTH24_STENCIL8:x===yn?W=i.DEPTH32F_STENCIL8:x===Fs&&(W=i.DEPTH24_STENCIL8,Xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Un||x===Os?W=i.DEPTH_COMPONENT24:x===yn?W=i.DEPTH_COMPONENT32F:x===Fs&&(W=i.DEPTH_COMPONENT16),W}function E(C,x){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==He&&C.minFilter!==Je?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function R(C){const x=C.target;x.removeEventListener("dispose",R),w(x),x.isVideoTexture&&f.delete(x),x.isHTMLTexture&&d.delete(x)}function _(C){const x=C.target;x.removeEventListener("dispose",_),B(x)}function w(C){const x=n.get(C);if(x.__webglInit===void 0)return;const W=C.source,I=u.get(W);if(I){const N=I[x.__cacheKey];N.usedTimes--,N.usedTimes===0&&D(C),Object.keys(I).length===0&&u.delete(W)}n.remove(C)}function D(C){const x=n.get(C);i.deleteTexture(x.__webglTexture);const W=C.source,I=u.get(W);delete I[x.__cacheKey],a.memory.textures--}function B(C){const x=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let I=0;I<6;I++){if(Array.isArray(x.__webglFramebuffer[I]))for(let N=0;N<x.__webglFramebuffer[I].length;N++)i.deleteFramebuffer(x.__webglFramebuffer[I][N]);else i.deleteFramebuffer(x.__webglFramebuffer[I]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[I])}else{if(Array.isArray(x.__webglFramebuffer))for(let I=0;I<x.__webglFramebuffer.length;I++)i.deleteFramebuffer(x.__webglFramebuffer[I]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let I=0;I<x.__webglColorRenderbuffer.length;I++)x.__webglColorRenderbuffer[I]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[I]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const W=C.textures;for(let I=0,N=W.length;I<N;I++){const K=n.get(W[I]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(W[I])}n.remove(C)}let O=0;function L(){O=0}function A(){return O}function U(C){O=C}function z(){const C=O;return C>=s.maxTextures&&Xt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,C}function V(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function Z(C,x){const W=n.get(C);if(C.isVideoTexture&&F(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&W.__version!==C.version){const I=C.image;if(I===null)Xt("WebGLRenderer: Texture marked for update but no image data found.");else if(I.complete===!1)Xt("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(W,C,x);return}}else C.isExternalTexture&&(W.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+x)}function k(C,x){const W=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){vt(W,C,x);return}else C.isExternalTexture&&(W.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+x)}function Q(C,x){const W=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){vt(W,C,x);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+x)}function et(C,x){const W=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&W.__version!==C.version){Ft(W,C,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+x)}const ut={[Dr]:i.REPEAT,[Ln]:i.CLAMP_TO_EDGE,[ja]:i.MIRRORED_REPEAT},yt={[He]:i.NEAREST,[kf]:i.NEAREST_MIPMAP_NEAREST,[Js]:i.NEAREST_MIPMAP_LINEAR,[Je]:i.LINEAR,[aa]:i.LINEAR_MIPMAP_NEAREST,[Si]:i.LINEAR_MIPMAP_LINEAR},te={[Wf]:i.NEVER,[Kf]:i.ALWAYS,[Xf]:i.LESS,[Zo]:i.LEQUAL,[Yf]:i.EQUAL,[Ko]:i.GEQUAL,[qf]:i.GREATER,[Zf]:i.NOTEQUAL};function bt(C,x){if(x.type===yn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Je||x.magFilter===aa||x.magFilter===Js||x.magFilter===Si||x.minFilter===Je||x.minFilter===aa||x.minFilter===Js||x.minFilter===Si)&&Xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ut[x.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ut[x.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ut[x.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,yt[x.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,yt[x.minFilter]),x.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,te[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===He||x.minFilter!==Js&&x.minFilter!==Si||x.type===yn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ot(C,x){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",R));const I=x.source;let N=u.get(I);N===void 0&&(N={},u.set(I,N));const K=V(x);if(K!==C.__cacheKey){N[K]===void 0&&(N[K]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),N[K].usedTimes++;const it=N[C.__cacheKey];it!==void 0&&(N[C.__cacheKey].usedTimes--,it.usedTimes===0&&D(x)),C.__cacheKey=K,C.__webglTexture=N[K].texture}return W}function j(C,x,W){return Math.floor(Math.floor(C/W)/x)}function nt(C,x,W,I){const K=C.updateRanges;if(K.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,W,I,x.data);else{K.sort((Ct,dt)=>Ct.start-dt.start);let it=0;for(let Ct=1;Ct<K.length;Ct++){const dt=K[it],ct=K[Ct],Pt=dt.start+dt.count,Nt=j(ct.start,x.width,4),qt=j(dt.start,x.width,4);ct.start<=Pt+1&&Nt===qt&&j(ct.start+ct.count-1,x.width,4)===Nt?dt.count=Math.max(dt.count,ct.start+ct.count-dt.start):(++it,K[it]=ct)}K.length=it+1;const q=e.getParameter(i.UNPACK_ROW_LENGTH),tt=e.getParameter(i.UNPACK_SKIP_PIXELS),ot=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Ct=0,dt=K.length;Ct<dt;Ct++){const ct=K[Ct],Pt=Math.floor(ct.start/4),Nt=Math.ceil(ct.count/4),qt=Pt%x.width,G=Math.floor(Pt/x.width),ht=Nt,st=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,qt),e.pixelStorei(i.UNPACK_SKIP_ROWS,G),e.texSubImage2D(i.TEXTURE_2D,0,qt,G,ht,st,W,I,x.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,q),e.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(i.UNPACK_SKIP_ROWS,ot)}}function vt(C,x,W){let I=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(I=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(I=i.TEXTURE_3D);const N=Ot(C,x),K=x.source;e.bindTexture(I,C.__webglTexture,i.TEXTURE0+W);const it=n.get(K);if(K.version!==it.__version||N===!0){if(e.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const st=ae.getPrimaries(ae.workingColorSpace),ft=x.colorSpace===ai?null:ae.getPrimaries(x.colorSpace),xt=x.colorSpace===ai||st===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let tt=g(x.image,!1,s.maxTextureSize);tt=Gt(x,tt);const ot=r.convert(x.format,x.colorSpace),Ct=r.convert(x.type);let dt=M(x.internalFormat,ot,Ct,x.normalized,x.colorSpace,x.isVideoTexture);bt(I,x);let ct;const Pt=x.mipmaps,Nt=x.isVideoTexture!==!0,qt=it.__version===void 0||N===!0,G=K.dataReady,ht=E(x,tt);if(x.isDepthTexture)dt=S(x.format===bi,x.type),qt&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,dt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,dt,tt.width,tt.height,0,ot,Ct,null));else if(x.isDataTexture)if(Pt.length>0){Nt&&qt&&e.texStorage2D(i.TEXTURE_2D,ht,dt,Pt[0].width,Pt[0].height);for(let st=0,ft=Pt.length;st<ft;st++)ct=Pt[st],Nt?G&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,ct.width,ct.height,ot,Ct,ct.data):e.texImage2D(i.TEXTURE_2D,st,dt,ct.width,ct.height,0,ot,Ct,ct.data);x.generateMipmaps=!1}else Nt?(qt&&e.texStorage2D(i.TEXTURE_2D,ht,dt,tt.width,tt.height),G&&nt(x,tt,ot,Ct)):e.texImage2D(i.TEXTURE_2D,0,dt,tt.width,tt.height,0,ot,Ct,tt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Nt&&qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,dt,Pt[0].width,Pt[0].height,tt.depth);for(let st=0,ft=Pt.length;st<ft;st++)if(ct=Pt[st],x.format!==Sn)if(ot!==null)if(Nt){if(G)if(x.layerUpdates.size>0){const xt=_c(ct.width,ct.height,x.format,x.type);for(const rt of x.layerUpdates){const Dt=ct.data.subarray(rt*xt/ct.data.BYTES_PER_ELEMENT,(rt+1)*xt/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,rt,ct.width,ct.height,1,ot,Dt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,ct.width,ct.height,tt.depth,ot,ct.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,dt,ct.width,ct.height,tt.depth,0,ct.data,0,0);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?G&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,ct.width,ct.height,tt.depth,ot,Ct,ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,dt,ct.width,ct.height,tt.depth,0,ot,Ct,ct.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Nt&&qt&&e.texStorage2D(i.TEXTURE_2D,ht,dt,Pt[0].width,Pt[0].height);for(let st=0,ft=Pt.length;st<ft;st++)ct=Pt[st],x.format!==Sn?ot!==null?Nt?G&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,ct.width,ct.height,ot,ct.data):e.compressedTexImage2D(i.TEXTURE_2D,st,dt,ct.width,ct.height,0,ct.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?G&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,ct.width,ct.height,ot,Ct,ct.data):e.texImage2D(i.TEXTURE_2D,st,dt,ct.width,ct.height,0,ot,Ct,ct.data)}else if(x.isDataArrayTexture)if(Nt){if(qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,dt,tt.width,tt.height,tt.depth),G)if(x.layerUpdates.size>0){const st=_c(tt.width,tt.height,x.format,x.type);for(const ft of x.layerUpdates){const xt=tt.data.subarray(ft*st/tt.data.BYTES_PER_ELEMENT,(ft+1)*st/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ft,tt.width,tt.height,1,ot,Ct,xt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ot,Ct,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,dt,tt.width,tt.height,tt.depth,0,ot,Ct,tt.data);else if(x.isData3DTexture)Nt?(qt&&e.texStorage3D(i.TEXTURE_3D,ht,dt,tt.width,tt.height,tt.depth),G&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ot,Ct,tt.data)):e.texImage3D(i.TEXTURE_3D,0,dt,tt.width,tt.height,tt.depth,0,ot,Ct,tt.data);else if(x.isFramebufferTexture){if(qt)if(Nt)e.texStorage2D(i.TEXTURE_2D,ht,dt,tt.width,tt.height);else{let st=tt.width,ft=tt.height;for(let xt=0;xt<ht;xt++)e.texImage2D(i.TEXTURE_2D,xt,dt,st,ft,0,ot,Ct,null),st>>=1,ft>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){const st=i.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),tt.parentNode!==st){st.appendChild(tt),d.add(x),st.onpaint=ft=>{const xt=ft.changedElements;for(const rt of d)xt.includes(rt.image)&&(rt.needsUpdate=!0)},st.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,tt);else{const xt=i.RGBA,rt=i.RGBA,Dt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,xt,rt,Dt,tt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Pt.length>0){if(Nt&&qt){const st=Et(Pt[0]);e.texStorage2D(i.TEXTURE_2D,ht,dt,st.width,st.height)}for(let st=0,ft=Pt.length;st<ft;st++)ct=Pt[st],Nt?G&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,ot,Ct,ct):e.texImage2D(i.TEXTURE_2D,st,dt,ot,Ct,ct);x.generateMipmaps=!1}else if(Nt){if(qt){const st=Et(tt);e.texStorage2D(i.TEXTURE_2D,ht,dt,st.width,st.height)}G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot,Ct,tt)}else e.texImage2D(i.TEXTURE_2D,0,dt,ot,Ct,tt);p(x)&&y(I),it.__version=K.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Ft(C,x,W){if(x.image.length!==6)return;const I=Ot(C,x),N=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+W);const K=n.get(N);if(N.version!==K.__version||I===!0){e.activeTexture(i.TEXTURE0+W);const it=ae.getPrimaries(ae.workingColorSpace),q=x.colorSpace===ai?null:ae.getPrimaries(x.colorSpace),tt=x.colorSpace===ai||it===q?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);const ot=x.isCompressedTexture||x.image[0].isCompressedTexture,Ct=x.image[0]&&x.image[0].isDataTexture,dt=[];for(let rt=0;rt<6;rt++)!ot&&!Ct?dt[rt]=g(x.image[rt],!0,s.maxCubemapSize):dt[rt]=Ct?x.image[rt].image:x.image[rt],dt[rt]=Gt(x,dt[rt]);const ct=dt[0],Pt=r.convert(x.format,x.colorSpace),Nt=r.convert(x.type),qt=M(x.internalFormat,Pt,Nt,x.normalized,x.colorSpace),G=x.isVideoTexture!==!0,ht=K.__version===void 0||I===!0,st=N.dataReady;let ft=E(x,ct);bt(i.TEXTURE_CUBE_MAP,x);let xt;if(ot){G&&ht&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,qt,ct.width,ct.height);for(let rt=0;rt<6;rt++){xt=dt[rt].mipmaps;for(let Dt=0;Dt<xt.length;Dt++){const Lt=xt[Dt];x.format!==Sn?Pt!==null?G?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Dt,0,0,Lt.width,Lt.height,Pt,Lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Dt,qt,Lt.width,Lt.height,0,Lt.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Dt,0,0,Lt.width,Lt.height,Pt,Nt,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Dt,qt,Lt.width,Lt.height,0,Pt,Nt,Lt.data)}}}else{if(xt=x.mipmaps,G&&ht){xt.length>0&&ft++;const rt=Et(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,qt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(Ct){G?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,dt[rt].width,dt[rt].height,Pt,Nt,dt[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,qt,dt[rt].width,dt[rt].height,0,Pt,Nt,dt[rt].data);for(let Dt=0;Dt<xt.length;Dt++){const Me=xt[Dt].image[rt].image;G?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Dt+1,0,0,Me.width,Me.height,Pt,Nt,Me.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Dt+1,qt,Me.width,Me.height,0,Pt,Nt,Me.data)}}else{G?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Pt,Nt,dt[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,qt,Pt,Nt,dt[rt]);for(let Dt=0;Dt<xt.length;Dt++){const Lt=xt[Dt];G?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Dt+1,0,0,Pt,Nt,Lt.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Dt+1,qt,Pt,Nt,Lt.image[rt])}}}p(x)&&y(i.TEXTURE_CUBE_MAP),K.__version=N.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function gt(C,x,W,I,N,K){const it=r.convert(W.format,W.colorSpace),q=r.convert(W.type),tt=M(W.internalFormat,it,q,W.normalized,W.colorSpace),ot=n.get(x),Ct=n.get(W);if(Ct.__renderTarget=x,!ot.__hasExternalTextures){const dt=Math.max(1,x.width>>K),ct=Math.max(1,x.height>>K);N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?e.texImage3D(N,K,tt,dt,ct,x.depth,0,it,q,null):e.texImage2D(N,K,tt,dt,ct,0,it,q,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),kt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,I,N,Ct.__webglTexture,0,mt(x)):(N===i.TEXTURE_2D||N>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&N<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,I,N,Ct.__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(C,x,W){if(i.bindRenderbuffer(i.RENDERBUFFER,C),x.depthBuffer){const I=x.depthTexture,N=I&&I.isDepthTexture?I.type:null,K=S(x.stencilBuffer,N),it=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;kt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt(x),K,x.width,x.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt(x),K,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,K,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,C)}else{const I=x.textures;for(let N=0;N<I.length;N++){const K=I[N],it=r.convert(K.format,K.colorSpace),q=r.convert(K.type),tt=M(K.internalFormat,it,q,K.normalized,K.colorSpace);kt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt(x),tt,x.width,x.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt(x),tt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,tt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pe(C,x,W){const I=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const N=n.get(x.depthTexture);if(N.__renderTarget=x,(!N.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),I){if(N.__webglInit===void 0&&(N.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),N.__webglTexture===void 0){N.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture),bt(i.TEXTURE_CUBE_MAP,x.depthTexture);const ot=r.convert(x.depthTexture.format),Ct=r.convert(x.depthTexture.type);let dt;x.depthTexture.format===qn?dt=i.DEPTH_COMPONENT24:x.depthTexture.format===bi&&(dt=i.DEPTH24_STENCIL8);for(let ct=0;ct<6;ct++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,dt,x.width,x.height,0,ot,Ct,null)}}else Z(x.depthTexture,0);const K=N.__webglTexture,it=mt(x),q=I?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,tt=x.depthTexture.format===bi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===qn)kt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,q,K,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,tt,q,K,0);else if(x.depthTexture.format===bi)kt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,q,K,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,tt,q,K,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Yt(C){const x=n.get(C),W=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){const I=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),I){const N=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,I.removeEventListener("dispose",N)};I.addEventListener("dispose",N),x.__depthDisposeCallback=N}x.__boundDepthTexture=I}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(W)for(let I=0;I<6;I++)pe(x.__webglFramebuffer[I],C,I);else{const I=C.texture.mipmaps;I&&I.length>0?pe(x.__webglFramebuffer[0],C,0):pe(x.__webglFramebuffer,C,0)}else if(W){x.__webglDepthbuffer=[];for(let I=0;I<6;I++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[I]),x.__webglDepthbuffer[I]===void 0)x.__webglDepthbuffer[I]=i.createRenderbuffer(),zt(x.__webglDepthbuffer[I],C,!1);else{const N=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer[I];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,N,i.RENDERBUFFER,K)}}else{const I=C.texture.mipmaps;if(I&&I.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),zt(x.__webglDepthbuffer,C,!1);else{const N=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,N,i.RENDERBUFFER,K)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Jt(C,x,W){const I=n.get(C);x!==void 0&&gt(I.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Yt(C)}function oe(C){const x=C.texture,W=n.get(C),I=n.get(x);C.addEventListener("dispose",_);const N=C.textures,K=C.isWebGLCubeRenderTarget===!0,it=N.length>1;if(it||(I.__webglTexture===void 0&&(I.__webglTexture=i.createTexture()),I.__version=x.version,a.memory.textures++),K){W.__webglFramebuffer=[];for(let q=0;q<6;q++)if(x.mipmaps&&x.mipmaps.length>0){W.__webglFramebuffer[q]=[];for(let tt=0;tt<x.mipmaps.length;tt++)W.__webglFramebuffer[q][tt]=i.createFramebuffer()}else W.__webglFramebuffer[q]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){W.__webglFramebuffer=[];for(let q=0;q<x.mipmaps.length;q++)W.__webglFramebuffer[q]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(it)for(let q=0,tt=N.length;q<tt;q++){const ot=n.get(N[q]);ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&kt(C)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let q=0;q<N.length;q++){const tt=N[q];W.__webglColorRenderbuffer[q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[q]);const ot=r.convert(tt.format,tt.colorSpace),Ct=r.convert(tt.type),dt=M(tt.internalFormat,ot,Ct,tt.normalized,tt.colorSpace,C.isXRRenderTarget===!0),ct=mt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,dt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,W.__webglColorRenderbuffer[q])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),zt(W.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture),bt(i.TEXTURE_CUBE_MAP,x);for(let q=0;q<6;q++)if(x.mipmaps&&x.mipmaps.length>0)for(let tt=0;tt<x.mipmaps.length;tt++)gt(W.__webglFramebuffer[q][tt],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,tt);else gt(W.__webglFramebuffer[q],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);p(x)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(it){for(let q=0,tt=N.length;q<tt;q++){const ot=N[q],Ct=n.get(ot);let dt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(dt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,Ct.__webglTexture),bt(dt,ot),gt(W.__webglFramebuffer,C,ot,i.COLOR_ATTACHMENT0+q,dt,0),p(ot)&&y(dt)}e.unbindTexture()}else{let q=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(q=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(q,I.__webglTexture),bt(q,x),x.mipmaps&&x.mipmaps.length>0)for(let tt=0;tt<x.mipmaps.length;tt++)gt(W.__webglFramebuffer[tt],C,x,i.COLOR_ATTACHMENT0,q,tt);else gt(W.__webglFramebuffer,C,x,i.COLOR_ATTACHMENT0,q,0);p(x)&&y(q),e.unbindTexture()}C.depthBuffer&&Yt(C)}function Wt(C){const x=C.textures;for(let W=0,I=x.length;W<I;W++){const N=x[W];if(p(N)){const K=T(C),it=n.get(N).__webglTexture;e.bindTexture(K,it),y(K),e.unbindTexture()}}}const $=[],at=[];function lt(C){if(C.samples>0){if(kt(C)===!1){const x=C.textures,W=C.width,I=C.height;let N=i.COLOR_BUFFER_BIT;const K=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=n.get(C),q=x.length>1;if(q)for(let ot=0;ot<x.length;ot++)e.bindFramebuffer(i.FRAMEBUFFER,it.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,it.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,it.__webglMultisampledFramebuffer);const tt=C.texture.mipmaps;tt&&tt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,it.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,it.__webglFramebuffer);for(let ot=0;ot<x.length;ot++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(N|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(N|=i.STENCIL_BUFFER_BIT)),q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,it.__webglColorRenderbuffer[ot]);const Ct=n.get(x[ot]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ct,0)}i.blitFramebuffer(0,0,W,I,0,0,W,I,N,i.NEAREST),l===!0&&($.length=0,at.length=0,$.push(i.COLOR_ATTACHMENT0+ot),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&($.push(K),at.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,at)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),q)for(let ot=0;ot<x.length;ot++){e.bindFramebuffer(i.FRAMEBUFFER,it.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,it.__webglColorRenderbuffer[ot]);const Ct=n.get(x[ot]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,it.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,Ct,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,it.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){const x=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function mt(C){return Math.min(s.maxSamples,C.samples)}function kt(C){const x=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function F(C){const x=a.render.frame;f.get(C)!==x&&(f.set(C,x),C.update())}function Gt(C,x){const W=C.colorSpace,I=C.format,N=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||W!==Fr&&W!==ai&&(ae.getTransfer(W)===me?(I!==Sn||N!==fn)&&Xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ce("WebGLTextures: Unsupported texture color space:",W)),x}function Et(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=L,this.getTextureUnits=A,this.setTextureUnits=U,this.setTexture2D=Z,this.setTexture2DArray=k,this.setTexture3D=Q,this.setTextureCube=et,this.rebindTextures=Jt,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=kt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function rx(i,t){function e(n,s=ai){let r;const a=ae.getTransfer(s);if(n===fn)return i.UNSIGNED_BYTE;if(n===Ho)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Vo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ph)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===mh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===uh)return i.BYTE;if(n===dh)return i.SHORT;if(n===Fs)return i.UNSIGNED_SHORT;if(n===Go)return i.INT;if(n===Un)return i.UNSIGNED_INT;if(n===yn)return i.FLOAT;if(n===Nn)return i.HALF_FLOAT;if(n===gh)return i.ALPHA;if(n===xh)return i.RGB;if(n===Sn)return i.RGBA;if(n===qn)return i.DEPTH_COMPONENT;if(n===bi)return i.DEPTH_STENCIL;if(n===Wo)return i.RED;if(n===Xo)return i.RED_INTEGER;if(n===Ri)return i.RG;if(n===Yo)return i.RG_INTEGER;if(n===qo)return i.RGBA_INTEGER;if(n===Ar||n===Rr||n===Cr||n===Pr)if(a===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ar)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ar)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===to||n===eo||n===no||n===io)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===to)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===eo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===no)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===io)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===so||n===ro||n===ao||n===oo||n===lo||n===Ur||n===co)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===so||n===ro)return a===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ao)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===oo)return r.COMPRESSED_R11_EAC;if(n===lo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ur)return r.COMPRESSED_RG11_EAC;if(n===co)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ho||n===fo||n===uo||n===po||n===mo||n===go||n===xo||n===_o||n===vo||n===Mo||n===yo||n===So||n===bo||n===Eo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ho)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===uo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===po)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===mo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===go)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_o)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===So)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Eo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wo||n===To||n===Ao)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===wo)return a===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===To)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ao)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ro||n===Co||n===Nr||n===Po)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ro)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Co)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Nr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Po)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const ax=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ox=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class lx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Ch(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new an({vertexShader:ax,fragmentShader:ox,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ut(new Te(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cx extends Li{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,f=null,d=null,h=null,u=null,m=null;const v=typeof XRWebGLBinding<"u",g=new lx,p={},y=e.getContextAttributes();let T=null,M=null;const S=[],E=[],R=new Tt;let _=null,w=null;const D=new cn;D.viewport=new we;const B=new cn;B.viewport=new we;const O=[D,B],L=new xd;let A=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let nt=S[j];return nt===void 0&&(nt=new da,S[j]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(j){let nt=S[j];return nt===void 0&&(nt=new da,S[j]=nt),nt.getGripSpace()},this.getHand=function(j){let nt=S[j];return nt===void 0&&(nt=new da,S[j]=nt),nt.getHandSpace()};function z(j){const nt=E.indexOf(j.inputSource);if(nt===-1)return;const vt=S[nt];vt!==void 0&&(vt.update(j.inputSource,j.frame,c||a),vt.dispatchEvent({type:j.type,data:j.inputSource}))}function V(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",Z);for(let j=0;j<S.length;j++){const nt=E[j];nt!==null&&(E[j]=null,S[j].disconnect(nt))}A=null,U=null,g.reset();for(const j in p)delete p[j];if(t.setRenderTarget(T),u=null,h=null,d=null,s=null,M=null,Ot.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(R.width,R.height,!1),w!==null){const j=w.camera;j.fov=w.fov,j.zoom=w.zoom,j.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:u},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",V),s.addEventListener("inputsourceschange",Z),y.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Ft=null,gt=null;y.depth&&(gt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=y.stencil?bi:qn,Ft=y.stencil?Os:Un);const zt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(zt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new bn(h.textureWidth,h.textureHeight,{format:Sn,type:fn,depthTexture:new Gs(h.textureWidth,h.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const vt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),M=new bn(u.framebufferWidth,u.framebufferHeight,{format:Sn,type:fn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ot.setContext(s),Ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Z(j){for(let nt=0;nt<j.removed.length;nt++){const vt=j.removed[nt],Ft=E.indexOf(vt);Ft>=0&&(E[Ft]=null,S[Ft].disconnect(vt))}for(let nt=0;nt<j.added.length;nt++){const vt=j.added[nt];let Ft=E.indexOf(vt);if(Ft===-1){for(let zt=0;zt<S.length;zt++)if(zt>=E.length){E.push(vt),Ft=zt;break}else if(E[zt]===null){E[zt]=vt,Ft=zt;break}if(Ft===-1)break}const gt=S[Ft];gt&&gt.connect(vt)}}const k=new P,Q=new P;function et(j,nt,vt){k.setFromMatrixPosition(nt.matrixWorld),Q.setFromMatrixPosition(vt.matrixWorld);const Ft=k.distanceTo(Q),gt=nt.projectionMatrix.elements,zt=vt.projectionMatrix.elements,pe=gt[14]/(gt[10]-1),Yt=gt[14]/(gt[10]+1),Jt=(gt[9]+1)/gt[5],oe=(gt[9]-1)/gt[5],Wt=(gt[8]-1)/gt[0],$=(zt[8]+1)/zt[0],at=pe*Wt,lt=pe*$,mt=Ft/(-Wt+$),kt=mt*-Wt;if(nt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(kt),j.translateZ(mt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),gt[10]===-1)j.projectionMatrix.copy(nt.projectionMatrix),j.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const F=pe+mt,Gt=Yt+mt,Et=at-kt,C=lt+(Ft-kt),x=Jt*Yt/Gt*F,W=oe*Yt/Gt*F;j.projectionMatrix.makePerspective(Et,C,x,W,F,Gt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ut(j,nt){nt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(nt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let nt=j.near,vt=j.far;g.texture!==null&&(g.depthNear>0&&(nt=g.depthNear),g.depthFar>0&&(vt=g.depthFar)),L.near=B.near=D.near=nt,L.far=B.far=D.far=vt,(A!==L.near||U!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),A=L.near,U=L.far),L.layers.mask=j.layers.mask|6,D.layers.mask=L.layers.mask&-5,B.layers.mask=L.layers.mask&-3;const Ft=j.parent,gt=L.cameras;ut(L,Ft);for(let zt=0;zt<gt.length;zt++)ut(gt[zt],Ft);gt.length===2?et(L,D,B):L.projectionMatrix.copy(D.projectionMatrix),w===null&&j.isPerspectiveCamera&&(w={camera:j,fov:j.fov,zoom:j.zoom}),yt(j,L,Ft)};function yt(j,nt,vt){vt===null?j.matrix.copy(nt.matrixWorld):(j.matrix.copy(vt.matrixWorld),j.matrix.invert(),j.matrix.multiply(nt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(nt.projectionMatrix),j.projectionMatrixInverse.copy(nt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ks*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(h===null&&u===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(j){return p[j]};let te=null;function bt(j,nt){if(f=nt.getViewerPose(c||a),m=nt,f!==null){const vt=f.views;u!==null&&(t.setRenderTargetFramebuffer(M,u.framebuffer),t.setRenderTarget(M));let Ft=!1;vt.length!==L.cameras.length&&(L.cameras.length=0,Ft=!0);for(let Yt=0;Yt<vt.length;Yt++){const Jt=vt[Yt];let oe=null;if(u!==null)oe=u.getViewport(Jt);else{const $=d.getViewSubImage(h,Jt);oe=$.viewport,Yt===0&&(t.setRenderTargetTextures(M,$.colorTexture,$.depthStencilTexture),t.setRenderTarget(M))}let Wt=O[Yt];Wt===void 0&&(Wt=new cn,Wt.layers.enable(Yt),Wt.viewport=new we,O[Yt]=Wt),Wt.matrix.fromArray(Jt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Jt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(oe.x,oe.y,oe.width,oe.height),Yt===0&&(L.matrix.copy(Wt.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ft===!0&&L.cameras.push(Wt)}const gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const Yt=d.getDepthInformation(vt[0]);Yt&&Yt.isValid&&Yt.texture&&g.init(Yt,s.renderState)}if(gt&&gt.includes("camera-access")&&v){t.state.unbindTexture(),d=n.getBinding();for(let Yt=0;Yt<vt.length;Yt++){const Jt=vt[Yt].camera;if(Jt){let oe=p[Jt];oe||(oe=new Ch,p[Jt]=oe);const Wt=d.getCameraImage(Jt);oe.sourceTexture=Wt}}}}for(let vt=0;vt<S.length;vt++){const Ft=E[vt],gt=S[vt];Ft!==null&&gt!==void 0&&gt.update(Ft,nt,c||a)}te&&te(j,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),m=null}const Ot=new Nh;Ot.setAnimationLoop(bt),this.setAnimationLoop=function(j){te=j},this.dispose=function(){}}}const hx=new he,Hh=new Kt;Hh.set(-1,0,0,0,1,0,0,0,1);function fx(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Ih(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,y,T,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),f(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),h(g,p),p.isMeshPhysicalMaterial&&u(g,p,M)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,y,T):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===$e&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===$e&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const y=t.get(p),T=y.envMap,M=y.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(hx.makeRotationFromEuler(M)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Hh),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,T){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=T*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function f(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function u(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$e&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const y=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ux(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){const E=S.program;n.uniformBlockBinding(M,E)}function c(M,S){let E=s[M.id];E===void 0&&(g(M),E=f(M),s[M.id]=E,M.addEventListener("dispose",y));const R=S.program;n.updateUBOMapping(M,R);const _=t.render.frame;r[M.id]!==_&&(h(M),r[M.id]=_)}function f(M){const S=d();M.__bindingPointIndex=S;const E=i.createBuffer(),R=M.__size,_=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,R,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,E),E}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const S=s[M.id],E=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let _=0,w=E.length;_<w;_++){const D=E[_];if(Array.isArray(D))for(let B=0,O=D.length;B<O;B++)u(D[B],_,B,R);else u(D,_,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(M,S,E,R){if(v(M,S,E,R)===!0){const _=M.__offset,w=M.value;if(Array.isArray(w)){let D=0;for(let B=0;B<w.length;B++){const O=w[B],L=p(O);m(O,M.__data,D),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(D+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(w,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,M.__data)}}function m(M,S,E){typeof M=="number"||typeof M=="boolean"?S[0]=M:M.isMatrix3?(S[0]=M.elements[0],S[1]=M.elements[1],S[2]=M.elements[2],S[3]=0,S[4]=M.elements[3],S[5]=M.elements[4],S[6]=M.elements[5],S[7]=0,S[8]=M.elements[6],S[9]=M.elements[7],S[10]=M.elements[8],S[11]=0):ArrayBuffer.isView(M)?S.set(new M.constructor(M.buffer,M.byteOffset,S.length)):M.toArray(S,E)}function v(M,S,E,R){const _=M.value,w=S+"_"+E;if(R[w]===void 0)return typeof _=="number"||typeof _=="boolean"?R[w]=_:ArrayBuffer.isView(_)?R[w]=_.slice():R[w]=_.clone(),!0;{const D=R[w];if(typeof _=="number"||typeof _=="boolean"){if(D!==_)return R[w]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(D.equals(_)===!1)return D.copy(_),!0}}return!1}function g(M){const S=M.uniforms;let E=0;const R=16;for(let w=0,D=S.length;w<D;w++){const B=Array.isArray(S[w])?S[w]:[S[w]];for(let O=0,L=B.length;O<L;O++){const A=B[O],U=Array.isArray(A.value)?A.value:[A.value];for(let z=0,V=U.length;z<V;z++){const Z=U[z],k=p(Z),Q=E%R,et=Q%k.boundary,ut=Q+et;E+=et,ut!==0&&R-ut<k.storage&&(E+=R-ut),A.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=E,E+=k.storage}}}const _=E%R;return _>0&&(E+=R-_),M.__size=E,M.__cache={},this}function p(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?Xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(S.boundary=16,S.storage=M.byteLength):Xt("WebGLRenderer: Unsupported uniform value type.",M),S}function y(M){const S=M.target;S.removeEventListener("dispose",y);const E=a.indexOf(S.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function T(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:T}}const dx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let An=null;function px(){return An===null&&(An=new Ah(dx,16,16,Ri,Nn),An.name="DFG_LUT",An.minFilter=Je,An.magFilter=Je,An.wrapS=Ln,An.wrapT=Ln,An.generateMipmaps=!1,An.needsUpdate=!0),An}class mx{constructor(t={}){const{canvas:e=$f(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:u=fn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const v=u,g=new Set([qo,Yo,Xo]),p=new Set([fn,Un,Fs,Os,Ho,Vo]),y=new Uint32Array(4),T=new Int32Array(4),M=new P;let S=null,E=null;const R=[],_=[];let w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let B=!1,O=null,L=null,A=null,U=null;this._outputColorSpace=Be;let z=0,V=0,Z=null,k=-1,Q=null;const et=new we,ut=new we;let yt=null;const te=new Vt(0);let bt=0,Ot=e.width,j=e.height,nt=1,vt=null,Ft=null;const gt=new we(0,0,Ot,j),zt=new we(0,0,Ot,j);let pe=!1;const Yt=new jo;let Jt=!1,oe=!1;const Wt=new he,$=new P,at=new we,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function kt(){return Z===null?nt:1}let F=n;function Gt(b,H){return e.getContext(b,H)}let Et,C,x,W,I,N,K,it,q,tt,ot,Ct,dt,ct,Pt,Nt,qt,G,ht,st,ft,xt,rt;try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Bo}`),e.addEventListener("webglcontextlost",Me,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",gn,!1),F===null){const H="webgl2";if(F=Gt(H,b),F===null)throw Gt(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Dt()}catch(b){throw e.removeEventListener("webglcontextlost",Me,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",gn,!1),ce("WebGLRenderer: "+b.message),b}function Dt(){Et=new pm(F),Et.init(),ft=new rx(F,Et),C=new sm(F,Et,t,ft),x=new ix(F,Et),C.reversedDepthBuffer&&h&&x.buffers.depth.setReversed(!0),L=F.createFramebuffer(),A=F.createFramebuffer(),U=F.createFramebuffer(),W=new xm(F),I=new Vg,N=new sx(F,Et,x,I,C,ft,W),K=new dm(D),it=new vd(F),xt=new nm(F,it),q=new mm(F,it,W,xt),tt=new vm(F,q,it,xt,W),G=new _m(F,C,N),Pt=new rm(I),ot=new Hg(D,K,Et,C,xt,Pt),Ct=new fx(D,I),dt=new Xg,ct=new $g(Et),qt=new em(D,K,x,tt,m,l),Nt=new nx(D,tt,C),rt=new ux(F,W,C,x),ht=new im(F,Et,W),st=new gm(F,Et,W),W.programs=ot.programs,D.capabilities=C,D.extensions=Et,D.properties=I,D.renderLists=dt,D.shadowMap=Nt,D.state=x,D.info=W}v!==fn&&(w=new ym(v,e.width,e.height,o,s,r));const Lt=new cx(D,F);this.xr=Lt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const b=Et.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Et.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(b){b!==void 0&&(nt=b,this.setSize(Ot,j,!1))},this.getSize=function(b){return b.set(Ot,j)},this.setSize=function(b,H,J=!0){if(Lt.isPresenting){Xt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ot=b,j=H,e.width=Math.floor(b*nt),e.height=Math.floor(H*nt),J===!0&&(e.style.width=b+"px",e.style.height=H+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set(Ot*nt,j*nt).floor()},this.setDrawingBufferSize=function(b,H,J){Ot=b,j=H,nt=J,e.width=Math.floor(b*J),e.height=Math.floor(H*J),this.setViewport(0,0,b,H)},this.setEffects=function(b){if(v===fn){ce("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let H=0;H<b.length;H++)if(b[H].isOutputPass===!0){Xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(et)},this.getViewport=function(b){return b.copy(gt)},this.setViewport=function(b,H,J,X){b.isVector4?gt.set(b.x,b.y,b.z,b.w):gt.set(b,H,J,X),x.viewport(et.copy(gt).multiplyScalar(nt).round())},this.getScissor=function(b){return b.copy(zt)},this.setScissor=function(b,H,J,X){b.isVector4?zt.set(b.x,b.y,b.z,b.w):zt.set(b,H,J,X),x.scissor(ut.copy(zt).multiplyScalar(nt).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(b){x.setScissorTest(pe=b)},this.setOpaqueSort=function(b){vt=b},this.setTransparentSort=function(b){Ft=b},this.getClearColor=function(b){return b.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(b=!0,H=!0,J=!0){let X=0;if(b){let Y=!1;if(Z!==null){const Mt=Z.texture.format;Y=g.has(Mt)}if(Y){const Mt=Z.texture.type,wt=p.has(Mt),_t=qt.getClearColor(),At=qt.getClearAlpha(),It=_t.r,$t=_t.g,ie=_t.b;wt?(y[0]=It,y[1]=$t,y[2]=ie,y[3]=At,F.clearBufferuiv(F.COLOR,0,y)):(T[0]=It,T[1]=$t,T[2]=ie,T[3]=At,F.clearBufferiv(F.COLOR,0,T))}else X|=F.COLOR_BUFFER_BIT}H&&(X|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(X|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&F.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),O=b},this.dispose=function(){e.removeEventListener("webglcontextlost",Me,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",gn,!1),qt.dispose(),dt.dispose(),ct.dispose(),I.dispose(),K.dispose(),tt.dispose(),xt.dispose(),rt.dispose(),ot.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",wl),Lt.removeEventListener("sessionend",Tl),mi.stop()};function Me(b){b.preventDefault(),zr("WebGLRenderer: Context Lost."),B=!0}function fe(){zr("WebGLRenderer: Context Restored."),B=!1;const b=W.autoReset,H=Nt.enabled,J=Nt.autoUpdate,X=Nt.needsUpdate,Y=Nt.type;Dt(),W.autoReset=b,Nt.enabled=H,Nt.autoUpdate=J,Nt.needsUpdate=X,Nt.type=Y}function gn(b){ce("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function En(b){const H=b.target;H.removeEventListener("dispose",En),hf(H)}function hf(b){ff(b),I.remove(b)}function ff(b){const H=I.get(b).programs;H!==void 0&&(H.forEach(function(J){ot.releaseProgram(J)}),b.isShaderMaterial&&ot.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,J,X,Y,Mt){H===null&&(H=lt);const wt=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,_t=pf(b,H,J,X,Y);x.setMaterial(X,wt);let At=J.index,It=1;if(X.wireframe===!0){if(At=q.getWireframeAttribute(J),At===void 0)return;It=2}const $t=J.drawRange,ie=J.attributes.position;let Rt=$t.start*It,ue=($t.start+$t.count)*It;Mt!==null&&(Rt=Math.max(Rt,Mt.start*It),ue=Math.min(ue,(Mt.start+Mt.count)*It)),At!==null?(Rt=Math.max(Rt,0),ue=Math.min(ue,At.count)):ie!=null&&(Rt=Math.max(Rt,0),ue=Math.min(ue,ie.count));const Ce=ue-Rt;if(Ce<0||Ce===1/0)return;xt.setup(Y,X,_t,J,At);let be,_e=ht;if(At!==null&&(be=it.get(At),_e=st,_e.setIndex(be)),Y.isMesh)X.wireframe===!0?(x.setLineWidth(X.wireframeLinewidth*kt()),_e.setMode(F.LINES)):_e.setMode(F.TRIANGLES);else if(Y.isLine){let Ye=X.linewidth;Ye===void 0&&(Ye=1),x.setLineWidth(Ye*kt()),Y.isLineSegments?_e.setMode(F.LINES):Y.isLineLoop?_e.setMode(F.LINE_LOOP):_e.setMode(F.LINE_STRIP)}else Y.isPoints?_e.setMode(F.POINTS):Y.isSprite&&_e.setMode(F.TRIANGLES);if(Y.isBatchedMesh)if(Et.get("WEBGL_multi_draw"))_e.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Ye=Y._multiDrawStarts,St=Y._multiDrawCounts,je=Y._multiDrawCount,le=At?it.get(At).bytesPerElement:1,dn=I.get(X).currentProgram.getUniforms();for(let wn=0;wn<je;wn++)dn.setValue(F,"_gl_DrawID",wn),_e.render(Ye[wn]/le,St[wn])}else if(Y.isInstancedMesh)_e.renderInstances(Rt,Ce,Y.count);else if(J.isInstancedBufferGeometry){const Ye=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,St=Math.min(J.instanceCount,Ye);_e.renderInstances(Rt,Ce,St)}else _e.render(Rt,Ce)};function El(b,H,J,X){O!==null&&b.isNodeMaterial&&O.setObject(X,b),Jt===!0&&Pt.setState(b,J,!1),b.transparent===!0&&b.side===Ge&&b.forceSinglePass===!1?(b.side=$e,b.needsUpdate=!0,Ks(b,H,X),b.side=Ti,b.needsUpdate=!0,Ks(b,H,X),b.side=Ge):Ks(b,H,X)}this.compile=function(b,H,J=null){J===null&&(J=b),O!==null&&O.renderStart(b,H,J),E=ct.get(J),E.init(H),_.push(E),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),b!==J&&b.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),E.setupLights(),O!==null&&O.updateLights(E.state.lightsArray),oe=this.localClippingEnabled,Jt=Pt.init(this.clippingPlanes,oe),Jt===!0&&Pt.setGlobalState(this.clippingPlanes,H),O!==null&&Nt.render(E.state.shadowsArray,J,H);const X=new Set;return b.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Mt=Y.material;if(Mt)if(Array.isArray(Mt))for(let wt=0;wt<Mt.length;wt++){const _t=Mt[wt];El(_t,J,H,Y),X.add(_t)}else El(Mt,J,H,Y),X.add(Mt)}),E=_.pop(),O!==null&&O.renderEnd(),X},this.compileAsync=function(b,H,J=null){const X=this.compile(b,H,J);return new Promise(Y=>{function Mt(){if(X.forEach(function(wt){const At=I.get(wt).currentProgram;(At===void 0||At.isReady())&&X.delete(wt)}),X.size===0){Y(b);return}setTimeout(Mt,10)}Et.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let na=null;function uf(b){na&&na(b)}function wl(){mi.stop()}function Tl(){mi.start()}const mi=new Nh;mi.setAnimationLoop(uf),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(b){na=b,Lt.setAnimationLoop(b),b===null?mi.stop():mi.start()},Lt.addEventListener("sessionstart",wl),Lt.addEventListener("sessionend",Tl),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;O!==null&&O.renderStart(b,H);const J=Lt.enabled===!0&&Lt.isPresenting===!0,X=w!==null&&(Z===null||J)&&w.begin(D,Z);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(H),H=Lt.getCamera()),b.isScene===!0&&b.onBeforeRender(D,b,H,Z),E=ct.get(b,_.length),E.init(H),E.state.textureUnits=N.getTextureUnits(),_.push(E),Wt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Yt.setFromProjectionMatrix(Wt,In,H.reversedDepth),oe=this.localClippingEnabled,Jt=Pt.init(this.clippingPlanes,oe),S=dt.get(b,R.length),S.init(),R.push(S),Lt.enabled===!0&&Lt.isPresenting===!0){const wt=D.xr.getDepthSensingMesh();wt!==null&&ia(wt,H,-1/0,D.sortObjects)}ia(b,H,0,D.sortObjects),S.finish(),O!==null&&O.updateLights(E.state.lightsArray),D.sortObjects===!0&&S.sort(vt,Ft),mt=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,mt&&qt.addToRenderList(S,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Jt===!0&&Pt.beginShadows();const Y=E.state.shadowsArray;if(Nt.render(Y,b,H),Jt===!0&&Pt.endShadows(),(X&&w.hasRenderPass())===!1){const wt=S.opaque,_t=S.transmissive;if(E.setupLights(),H.isArrayCamera){const At=H.cameras;if(_t.length>0)for(let It=0,$t=At.length;It<$t;It++){const ie=At[It];Rl(wt,_t,b,ie)}mt&&qt.render(b);for(let It=0,$t=At.length;It<$t;It++){const ie=At[It];Al(S,b,ie,ie.viewport)}}else _t.length>0&&Rl(wt,_t,b,H),mt&&qt.render(b),Al(S,b,H)}Z!==null&&V===0&&(N.updateMultisampleRenderTarget(Z),N.updateRenderTargetMipmap(Z)),X&&w.end(D),b.isScene===!0&&b.onAfterRender(D,b,H),xt.resetDefaultState(),k=-1,Q=null,_.pop(),_.length>0?(E=_[_.length-1],N.setTextureUnits(E.state.textureUnits),Jt===!0&&Pt.setGlobalState(D.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?S=R[R.length-1]:S=null,O!==null&&O.renderEnd()};function ia(b,H,J,X){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)J=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLightProbeGrid)E.pushLightProbeGrid(b);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(Yt)){X&&at.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Wt);const wt=tt.update(b),_t=b.material;_t.visible&&S.push(b,wt,_t,J,at.z,null,H)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(Yt))){const wt=tt.update(b),_t=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),at.copy(b.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),at.copy(wt.boundingSphere.center)),at.applyMatrix4(b.matrixWorld).applyMatrix4(Wt)),Array.isArray(_t)){const At=wt.groups;for(let It=0,$t=At.length;It<$t;It++){const ie=At[It],Rt=_t[ie.materialIndex];Rt&&Rt.visible&&S.push(b,wt,Rt,J,at.z,ie,H)}}else _t.visible&&S.push(b,wt,_t,J,at.z,null,H)}}const Mt=b.children;for(let wt=0,_t=Mt.length;wt<_t;wt++)ia(Mt[wt],H,J,X)}function Al(b,H,J,X){const{opaque:Y,transmissive:Mt,transparent:wt}=b;E.setupLightsView(J),Jt===!0&&Pt.setGlobalState(D.clippingPlanes,J),X&&x.viewport(et.copy(X)),Y.length>0&&Zs(Y,H,J),Mt.length>0&&Zs(Mt,H,J),wt.length>0&&Zs(wt,H,J),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Rl(b,H,J,X){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[X.id]===void 0){const Rt=Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[X.id]=new bn(1,1,{generateMipmaps:!0,type:Rt?Nn:fn,minFilter:Si,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ae.workingColorSpace})}const Mt=E.state.transmissionRenderTarget[X.id],wt=X.viewport||et;Mt.setSize(wt.z*D.transmissionResolutionScale,wt.w*D.transmissionResolutionScale);const _t=D.getRenderTarget(),At=D.getActiveCubeFace(),It=D.getActiveMipmapLevel();D.setRenderTarget(Mt),D.getClearColor(te),bt=D.getClearAlpha(),bt<1&&D.setClearColor(16777215,.5),D.clear(),mt&&qt.render(J);const $t=D.toneMapping;D.toneMapping=Dn;const ie=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),E.setupLightsView(X),Jt===!0&&Pt.setGlobalState(D.clippingPlanes,X),Zs(b,J,X),N.updateMultisampleRenderTarget(Mt),N.updateRenderTargetMipmap(Mt),Et.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let ue=0,Ce=H.length;ue<Ce;ue++){const be=H[ue],{object:_e,geometry:Ye,material:St,group:je}=be;if(St.side===Ge&&_e.layers.test(X.layers)){const le=St.side;St.side=$e,St.needsUpdate=!0,Cl(_e,J,X,Ye,St,je),St.side=le,St.needsUpdate=!0,Rt=!0}}Rt===!0&&(N.updateMultisampleRenderTarget(Mt),N.updateRenderTargetMipmap(Mt))}D.setRenderTarget(_t,At,It),D.setClearColor(te,bt),ie!==void 0&&(X.viewport=ie),D.toneMapping=$t}function Zs(b,H,J){const X=H.isScene===!0?H.overrideMaterial:null;for(let Y=0,Mt=b.length;Y<Mt;Y++){const wt=b[Y],{object:_t,geometry:At,group:It}=wt;let $t=wt.material;$t.allowOverride===!0&&X!==null&&($t=X),_t.layers.test(J.layers)&&Cl(_t,H,J,At,$t,It)}}function Cl(b,H,J,X,Y,Mt){O!==null&&Y.isNodeMaterial&&O.setObject(b,Y),b.onBeforeRender(D,H,J,X,Y,Mt),b.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(D,H,J,X,b,Mt),Y.transparent===!0&&Y.side===Ge&&Y.forceSinglePass===!1?(Y.side=$e,Y.needsUpdate=!0,D.renderBufferDirect(J,H,X,Y,b,Mt),Y.side=Ti,Y.needsUpdate=!0,D.renderBufferDirect(J,H,X,Y,b,Mt),Y.side=Ge):D.renderBufferDirect(J,H,X,Y,b,Mt),b.onAfterRender(D,H,J,X,Y,Mt)}function Ks(b,H,J){H.isScene!==!0&&(H=lt);const X=I.get(b),Y=E.state.lights,Mt=E.state.shadowsArray,wt=Y.state.version,_t=ot.getParameters(b,Y.state,Mt,H,J,E.state.lightProbeGridArray),At=ot.getProgramCacheKey(_t);let It=X.programs;X.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?H.environment:null,X.fog=H.fog;const $t=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;X.envMap=K.get(b.envMap||X.environment,$t),X.envMapRotation=X.environment!==null&&b.envMap===null?H.environmentRotation:b.envMapRotation,It===void 0&&(b.addEventListener("dispose",En),It=new Map,X.programs=It);let ie=It.get(At);if(ie!==void 0){if(X.currentProgram===ie&&X.lightsStateVersion===wt)return Ll(b,_t),ie}else _t.uniforms=ot.getUniforms(b),O!==null&&b.isNodeMaterial&&O.build(b,J,_t),b.onBeforeCompile(_t,D),ie=ot.acquireProgram(_t,At),It.set(At,ie),X.uniforms=_t.uniforms;const Rt=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Rt.clippingPlanes=Pt.uniform),Ll(b,_t),X.needsLights=gf(b),X.lightsStateVersion=wt,X.needsLights&&(Rt.ambientLightColor.value=Y.state.ambient,Rt.lightProbe.value=Y.state.probe,Rt.sunLights.value=Y.state.sun,Rt.sunLightShadows.value=Y.state.sunShadow,Rt.directionalLights.value=Y.state.directional,Rt.directionalLightShadows.value=Y.state.directionalShadow,Rt.spotLights.value=Y.state.spot,Rt.spotLightShadows.value=Y.state.spotShadow,Rt.rectAreaLights.value=Y.state.rectArea,Rt.ltc_1.value=Y.state.rectAreaLTC1,Rt.ltc_2.value=Y.state.rectAreaLTC2,Rt.pointLights.value=Y.state.point,Rt.pointLightShadows.value=Y.state.pointShadow,Rt.hemisphereLights.value=Y.state.hemi,Rt.sunShadowMatrix.value=Y.state.sunShadowMatrix,Rt.sunShadowCascade.value=Y.state.sunShadowCascade,Rt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Rt.spotLightMatrix.value=Y.state.spotLightMatrix,Rt.spotLightMap.value=Y.state.spotLightMap,Rt.pointShadowMatrix.value=Y.state.pointShadowMatrix),X.lightProbeGrid=E.state.lightProbeGridArray.length>0,X.currentProgram=ie,X.uniformsList=null,ie}function Pl(b){if(b.uniformsList===null){const H=b.currentProgram.getUniforms();b.uniformsList=Lr.seqWithValue(H.seq,b.uniforms)}return b.uniformsList}function Ll(b,H){const J=I.get(b);J.outputColorSpace=H.outputColorSpace,J.batching=H.batching,J.batchingColor=H.batchingColor,J.instancing=H.instancing,J.instancingColor=H.instancingColor,J.instancingMorph=H.instancingMorph,J.skinning=H.skinning,J.morphTargets=H.morphTargets,J.morphNormals=H.morphNormals,J.morphColors=H.morphColors,J.morphTargetsCount=H.morphTargetsCount,J.numClippingPlanes=H.numClippingPlanes,J.numIntersection=H.numClipIntersection,J.vertexAlphas=H.vertexAlphas,J.vertexTangents=H.vertexTangents,J.toneMapping=H.toneMapping}function df(b,H){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;M.setFromMatrixPosition(H.matrixWorld);for(let J=0,X=b.length;J<X;J++){const Y=b[J];if(Y.texture!==null&&Y.boundingBox.containsPoint(M))return Y}return null}function pf(b,H,J,X,Y){H.isScene!==!0&&(H=lt),N.resetTextureUnits();const Mt=H.fog,wt=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?H.environment:null,_t=Z===null?D.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ae.workingColorSpace,At=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,It=K.get(X.envMap||wt,At),$t=X.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ie=!!J.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Rt=!!J.morphAttributes.position,ue=!!J.morphAttributes.normal,Ce=!!J.morphAttributes.color;let be=Dn;X.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(be=D.toneMapping);const _e=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Ye=_e!==void 0?_e.length:0,St=I.get(X),je=E.state.lights;if(Jt===!0&&(oe===!0||b!==Q)){const ye=b===Q&&X.id===k;Pt.setState(X,b,ye)}let le=!1;X.version===St.__version?(St.needsLights&&St.lightsStateVersion!==je.state.version||St.outputColorSpace!==_t||Y.isBatchedMesh&&St.batching===!1||!Y.isBatchedMesh&&St.batching===!0||Y.isBatchedMesh&&St.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&St.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&St.instancing===!1||!Y.isInstancedMesh&&St.instancing===!0||Y.isSkinnedMesh&&St.skinning===!1||!Y.isSkinnedMesh&&St.skinning===!0||Y.isInstancedMesh&&St.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&St.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&St.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&St.instancingMorph===!1&&Y.morphTexture!==null||St.envMap!==It||X.fog===!0&&St.fog!==Mt||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==Pt.numPlanes||St.numIntersection!==Pt.numIntersection)||St.vertexAlphas!==$t||St.vertexTangents!==ie||St.morphTargets!==Rt||St.morphNormals!==ue||St.morphColors!==Ce||St.toneMapping!==be||St.morphTargetsCount!==Ye||!!St.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(le=!0):(le=!0,St.__version=X.version);let dn=St.currentProgram;le===!0&&(dn=Ks(X,H,Y),O&&X.isNodeMaterial&&O.onUpdateProgram(X,dn,St));let wn=!1,Jn=!1,Ui=!1;const xe=dn.getUniforms(),Re=St.uniforms;if(x.useProgram(dn.program)&&(wn=!0,Jn=!0,Ui=!0),X.id!==k&&(k=X.id,Jn=!0),St.needsLights){const ye=df(E.state.lightProbeGridArray,Y);St.lightProbeGrid!==ye&&(St.lightProbeGrid=ye,Jn=!0)}if(wn||Q!==b){x.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),xe.setValue(F,"projectionMatrix",b.projectionMatrix),xe.setValue(F,"viewMatrix",b.matrixWorldInverse);const Qn=xe.map.cameraPosition;Qn!==void 0&&Qn.setValue(F,$.setFromMatrixPosition(b.matrixWorld)),C.logarithmicDepthBuffer&&xe.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&xe.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),Q!==b&&(Q=b,Jn=!0,Ui=!0)}if(St.needsLights&&(je.state.sunShadowMap.length>0&&xe.setValue(F,"sunShadowMap",je.state.sunShadowMap,N),je.state.directionalShadowMap.length>0&&xe.setValue(F,"directionalShadowMap",je.state.directionalShadowMap,N),je.state.spotShadowMap.length>0&&xe.setValue(F,"spotShadowMap",je.state.spotShadowMap,N),je.state.pointShadowMap.length>0&&xe.setValue(F,"pointShadowMap",je.state.pointShadowMap,N)),Y.isSkinnedMesh){xe.setOptional(F,Y,"bindMatrix"),xe.setOptional(F,Y,"bindMatrixInverse");const ye=Y.skeleton;ye&&(ye.boneTexture===null&&ye.computeBoneTexture(),xe.setValue(F,"boneTexture",ye.boneTexture,N))}Y.isBatchedMesh&&(xe.setOptional(F,Y,"batchingTexture"),xe.setValue(F,"batchingTexture",Y._matricesTexture,N),xe.setOptional(F,Y,"batchingIdTexture"),xe.setValue(F,"batchingIdTexture",Y._indirectTexture,N),xe.setOptional(F,Y,"batchingColorTexture"),Y._colorsTexture!==null&&xe.setValue(F,"batchingColorTexture",Y._colorsTexture,N));const $n=J.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&G.update(Y,J,dn),(Jn||St.receiveShadow!==Y.receiveShadow)&&(St.receiveShadow=Y.receiveShadow,xe.setValue(F,"receiveShadow",Y.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&H.environment!==null&&(Re.envMapIntensity.value=H.environmentIntensity),Re.dfgLUT!==void 0&&(Re.dfgLUT.value=px()),Jn){if(xe.setValue(F,"toneMappingExposure",D.toneMappingExposure),St.needsLights&&mf(Re,Ui),Mt&&X.fog===!0&&Ct.refreshFogUniforms(Re,Mt),Ct.refreshMaterialUniforms(Re,X,nt,j,E.state.transmissionRenderTarget[b.id]),St.needsLights&&St.lightProbeGrid){const ye=St.lightProbeGrid;Re.probesSH.value=ye.texture,Re.probesMin.value.copy(ye.boundingBox.min),Re.probesMax.value.copy(ye.boundingBox.max),Re.probesResolution.value.copy(ye.resolution)}Lr.upload(F,Pl(St),Re,N)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Lr.upload(F,Pl(St),Re,N),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&xe.setValue(F,"center",Y.center),xe.setValue(F,"modelViewMatrix",Y.modelViewMatrix),xe.setValue(F,"normalMatrix",Y.normalMatrix),xe.setValue(F,"modelMatrix",Y.matrixWorld),X.uniformsGroups!==void 0){const ye=X.uniformsGroups;for(let Qn=0,Ni=ye.length;Qn<Ni;Qn++){const Dl=ye[Qn];rt.update(Dl,dn),rt.bind(Dl,dn)}}return dn}function mf(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.sunLights.needsUpdate=H,b.sunLightShadows.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function gf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(b,H,J){const X=I.get(b);X.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),I.get(b.texture).__webglTexture=H,I.get(b.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:J,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,H){const J=I.get(b);J.__webglFramebuffer=H,J.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(b,H=0,J=0){Z=b,z=H,V=J;let X=null,Y=!1,Mt=!1;if(b){const _t=I.get(b);if(_t.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(F.FRAMEBUFFER,_t.__webglFramebuffer),et.copy(b.viewport),ut.copy(b.scissor),yt=b.scissorTest,x.viewport(et),x.scissor(ut),x.setScissorTest(yt),k=-1;return}else if(_t.__webglFramebuffer===void 0)N.setupRenderTarget(b);else if(_t.__hasExternalTextures)N.rebindTextures(b,I.get(b.texture).__webglTexture,I.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const $t=b.depthTexture;if(_t.__boundDepthTexture!==$t){if($t!==null&&I.has($t)&&(b.width!==$t.image.width||b.height!==$t.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(b)}}const At=b.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(Mt=!0);const It=I.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(It[H])?X=It[H][J]:X=It[H],Y=!0):b.samples>0&&N.useMultisampledRTT(b)===!1?X=I.get(b).__webglMultisampledFramebuffer:Array.isArray(It)?X=It[J]:X=It,et.copy(b.viewport),ut.copy(b.scissor),yt=b.scissorTest}else et.copy(gt).multiplyScalar(nt).floor(),ut.copy(zt).multiplyScalar(nt).floor(),yt=pe;if(J!==0&&(X=L),x.bindFramebuffer(F.FRAMEBUFFER,X)&&x.drawBuffers(b,X),x.viewport(et),x.scissor(ut),x.setScissorTest(yt),Y){const _t=I.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+H,_t.__webglTexture,J)}else if(Mt){const _t=H;for(let At=0;At<b.textures.length;At++){const It=I.get(b.textures[At]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+At,It.__webglTexture,J,_t)}}else if(b!==null&&J!==0){const _t=I.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,_t.__webglTexture,J)}k=-1};function Il(b){const H=I.get(b);return(H.__readFormat!==b.format||H.__readType!==b.type)&&(H.__readFormat=b.format,H.__readType=b.type,H.__formatReadable=C.textureFormatReadable(b.format),H.__typeReadable=C.textureTypeReadable(b.type)),H}this.readRenderTargetPixels=function(b,H,J,X,Y,Mt,wt,_t=0){if(!(b&&b.isWebGLRenderTarget)){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=I.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&wt!==void 0&&(At=At[wt]),At){x.bindFramebuffer(F.FRAMEBUFFER,At);try{const It=b.textures[_t],$t=It.format,ie=It.type;b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+_t);const Rt=Il(It);if(Rt.__formatReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Rt.__typeReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-X&&J>=0&&J<=b.height-Y&&F.readPixels(H,J,X,Y,ft.convert($t),ft.convert(ie),Mt)}finally{const It=Z!==null?I.get(Z).__webglFramebuffer:null;x.bindFramebuffer(F.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(b,H,J,X,Y,Mt,wt,_t=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=I.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&wt!==void 0&&(At=At[wt]),At)if(H>=0&&H<=b.width-X&&J>=0&&J<=b.height-Y){x.bindFramebuffer(F.FRAMEBUFFER,At);const It=b.textures[_t],$t=It.format,ie=It.type;b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+_t);const Rt=Il(It);if(Rt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Rt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ue=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ue),F.bufferData(F.PIXEL_PACK_BUFFER,Mt.byteLength,F.STREAM_READ),F.readPixels(H,J,X,Y,ft.convert($t),ft.convert(ie),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const Ce=Z!==null?I.get(Z).__webglFramebuffer:null;x.bindFramebuffer(F.FRAMEBUFFER,Ce);const be=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Qf(F,be,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ue),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Mt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ue),F.deleteSync(be),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,H=null,J=0){const X=Math.pow(2,-J),Y=Math.floor(b.image.width*X),Mt=Math.floor(b.image.height*X),wt=H!==null?H.x:0,_t=H!==null?H.y:0;N.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,J,0,0,wt,_t,Y,Mt),x.unbindTexture()},this.copyTextureToTexture=function(b,H,J=null,X=null,Y=0,Mt=0){let wt,_t,At,It,$t,ie,Rt,ue,Ce;const be=b.isCompressedTexture?b.mipmaps[Mt]:b.image;if(J!==null)wt=J.max.x-J.min.x,_t=J.max.y-J.min.y,At=J.isBox3?J.max.z-J.min.z:1,It=J.min.x,$t=J.min.y,ie=J.isBox3?J.min.z:0;else{const Re=Math.pow(2,-Y);wt=Math.floor(be.width*Re),_t=Math.floor(be.height*Re),b.isDataArrayTexture?At=be.depth:b.isData3DTexture?At=Math.floor(be.depth*Re):At=1,It=0,$t=0,ie=0}X!==null?(Rt=X.x,ue=X.y,Ce=X.z):(Rt=0,ue=0,Ce=0);const _e=ft.convert(H.format),Ye=ft.convert(H.type);let St;H.isData3DTexture?(N.setTexture3D(H,0),St=F.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(N.setTexture2DArray(H,0),St=F.TEXTURE_2D_ARRAY):(N.setTexture2D(H,0),St=F.TEXTURE_2D),x.activeTexture(F.TEXTURE0),x.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,H.flipY),x.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),x.pixelStorei(F.UNPACK_ALIGNMENT,H.unpackAlignment);const je=x.getParameter(F.UNPACK_ROW_LENGTH),le=x.getParameter(F.UNPACK_IMAGE_HEIGHT),dn=x.getParameter(F.UNPACK_SKIP_PIXELS),wn=x.getParameter(F.UNPACK_SKIP_ROWS),Jn=x.getParameter(F.UNPACK_SKIP_IMAGES);x.pixelStorei(F.UNPACK_ROW_LENGTH,be.width),x.pixelStorei(F.UNPACK_IMAGE_HEIGHT,be.height),x.pixelStorei(F.UNPACK_SKIP_PIXELS,It),x.pixelStorei(F.UNPACK_SKIP_ROWS,$t),x.pixelStorei(F.UNPACK_SKIP_IMAGES,ie);const Ui=b.isDataArrayTexture||b.isData3DTexture,xe=H.isDataArrayTexture||H.isData3DTexture;if(b.isDepthTexture){const Re=I.get(b),$n=I.get(H),ye=I.get(Re.__renderTarget),Qn=I.get($n.__renderTarget);x.bindFramebuffer(F.READ_FRAMEBUFFER,ye.__webglFramebuffer),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let Ni=0;Ni<At;Ni++)Ui&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,I.get(b).__webglTexture,Y,ie+Ni),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,I.get(H).__webglTexture,Mt,Ce+Ni)),F.blitFramebuffer(It,$t,wt,_t,Rt,ue,wt,_t,F.DEPTH_BUFFER_BIT,F.NEAREST);x.bindFramebuffer(F.READ_FRAMEBUFFER,null),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Y!==0||b.isRenderTargetTexture||I.has(b)){const Re=I.get(b),$n=I.get(H);x.bindFramebuffer(F.READ_FRAMEBUFFER,A),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,U);for(let ye=0;ye<At;ye++)Ui?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Re.__webglTexture,Y,ie+ye):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Re.__webglTexture,Y),xe?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,$n.__webglTexture,Mt,Ce+ye):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,$n.__webglTexture,Mt),Y!==0?F.blitFramebuffer(It,$t,wt,_t,Rt,ue,wt,_t,F.COLOR_BUFFER_BIT,F.NEAREST):xe?F.copyTexSubImage3D(St,Mt,Rt,ue,Ce+ye,It,$t,wt,_t):F.copyTexSubImage2D(St,Mt,Rt,ue,It,$t,wt,_t);x.bindFramebuffer(F.READ_FRAMEBUFFER,null),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else xe?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(St,Mt,Rt,ue,Ce,wt,_t,At,_e,Ye,be.data):H.isCompressedArrayTexture?F.compressedTexSubImage3D(St,Mt,Rt,ue,Ce,wt,_t,At,_e,be.data):F.texSubImage3D(St,Mt,Rt,ue,Ce,wt,_t,At,_e,Ye,be):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Mt,Rt,ue,wt,_t,_e,Ye,be.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Mt,Rt,ue,be.width,be.height,_e,be.data):F.texSubImage2D(F.TEXTURE_2D,Mt,Rt,ue,wt,_t,_e,Ye,be);x.pixelStorei(F.UNPACK_ROW_LENGTH,je),x.pixelStorei(F.UNPACK_IMAGE_HEIGHT,le),x.pixelStorei(F.UNPACK_SKIP_PIXELS,dn),x.pixelStorei(F.UNPACK_SKIP_ROWS,wn),x.pixelStorei(F.UNPACK_SKIP_IMAGES,Jn),Mt===0&&H.generateMipmaps&&F.generateMipmap(St),x.unbindTexture()},this.initRenderTarget=function(b){I.get(b).__webglFramebuffer===void 0&&N.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?N.setTextureCube(b,0):b.isData3DTexture?N.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?N.setTexture2DArray(b,0):N.setTexture2D(b,0),x.unbindTexture()},this.resetState=function(){z=0,V=0,Z=null,x.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}class gx{constructor(){this.boxes=[],this.bounds={minX:-100,maxX:100,minZ:-170,maxZ:100},this.grid=new Map,this.cell=20}add(t,e,n,s,r,a=0,o=null){const l={minX:t,maxX:e,minZ:n,maxZ:s,top:r,bottom:a,tag:o};this.boxes.push(l);const c=this.cell;for(let f=Math.floor(t/c);f<=Math.floor(e/c);f++)for(let d=Math.floor(n/c);d<=Math.floor(s/c);d++){const h=f*1e3+d;this.grid.has(h)||this.grid.set(h,[]),this.grid.get(h).push(l)}return l}near(t,e,n){const s=this.cell,r=new Set;for(let a=Math.floor((t-n)/s);a<=Math.floor((t+n)/s);a++)for(let o=Math.floor((e-n)/s);o<=Math.floor((e+n)/s);o++){const l=this.grid.get(a*1e3+o);if(l)for(const c of l)r.add(c)}return r}groundAt(t,e,n,s,r=.55){let a=0;for(const o of this.near(t,e,n))t+n*.6<o.minX||t-n*.6>o.maxX||e+n*.6<o.minZ||e-n*.6>o.maxZ||o.top<=s+r&&o.top>a&&(a=o.top);return a}resolve(t,e,n,s=.55){let r=!1;for(const o of this.near(t.x,t.z,e)){if(t.y>=o.top-s||t.y+n<=o.bottom)continue;const l=Math.max(o.minX,Math.min(t.x,o.maxX)),c=Math.max(o.minZ,Math.min(t.z,o.maxZ));let f=t.x-l,d=t.z-c;const h=f*f+d*d;if(!(h>=e*e))if(r=!0,h>1e-8){const u=Math.sqrt(h),m=(e-u)/u;t.x+=f*m,t.z+=d*m}else{const u=t.x-o.minX,m=o.maxX-t.x,v=t.z-o.minZ,g=o.maxZ-t.z,p=Math.min(u,m,v,g);p===u?t.x=o.minX-e:p===m?t.x=o.maxX+e:p===v?t.z=o.minZ-e:t.z=o.maxZ+e}}const a=this.bounds;return t.x<a.minX+e&&(t.x=a.minX+e,r=!0),t.x>a.maxX-e&&(t.x=a.maxX-e,r=!0),t.z<a.minZ+e&&(t.z=a.minZ+e,r=!0),t.z>a.maxZ-e&&(t.z=a.maxZ-e,r=!0),r}raycast(t,e,n,s,r,a,o=0){let l=1;const c=s-t,f=r-e,d=a-n,h=(t+s)/2,u=(n+a)/2,m=Math.hypot(c,d)/2+1;for(const v of this.near(h,u,m)){if(v.top<o)continue;let g=0,p=l;const y=[[t,c,v.minX,v.maxX],[e,f,v.bottom,v.top],[n,d,v.minZ,v.maxZ]];let T=!0;for(const[M,S,E,R]of y){if(Math.abs(S)<1e-9){if(M<E||M>R){T=!1;break}continue}let _=(E-M)/S,w=(R-M)/S;if(_>w&&([_,w]=[w,_]),g=Math.max(g,_),p=Math.min(p,w),g>p){T=!1;break}}T&&g<l&&(l=g)}return l}}const ka=new Map;function fs(i,t){const e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function fi(i,t=!0){const e=new kr(i);return t&&(e.colorSpace=Be),e.anisotropy=2,e}function ui(i,t){return ka.has(i)||ka.set(i,t()),ka.get(i)}const oi=()=>ui("glow",()=>{const[i,t]=fs(64,64),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),fi(i)}),hl=()=>ui("ring",()=>{const[i,t]=fs(128,128),e=t.createRadialGradient(64,64,30,64,64,64);return e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.7,"rgba(255,255,255,.15)"),e.addColorStop(.9,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),fi(i)}),Vh=()=>ui("blob",()=>{const[i,t]=fs(64,64),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(0,0,0,.65)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),fi(i)});function Gc(i,t,e,n,s,r){const a=[[0,1],[.42,.86],[-.42,.86],[.9,.62],[-.9,.62],[1.35,.34],[-1.35,.34]];i.save(),i.translate(t,e);for(const[o,l]of a){i.save(),i.rotate(o);const c=n*l,f=n*.15*(.6+l*.4);i.beginPath(),i.moveTo(0,0);const d=9;for(let h=1;h<=d;h++){const u=h/d,m=Math.sin(u*Math.PI)*f*(1-u*.25);i.lineTo(m+(h%2?f*.12:0),-c*u)}for(let h=d-1;h>=1;h--){const u=h/d,m=Math.sin(u*Math.PI)*f*(1-u*.25);i.lineTo(-m-(h%2?f*.12:0),-c*u)}i.closePath(),i.fillStyle=s,i.fill(),r&&(i.strokeStyle=r,i.lineWidth=n*.02,i.stroke()),i.beginPath(),i.moveTo(0,0),i.lineTo(0,-c*.95),i.strokeStyle="rgba(20,90,30,.85)",i.lineWidth=n*.018,i.stroke(),i.restore()}i.beginPath(),i.moveTo(0,0),i.quadraticCurveTo(n*.04,n*.3,-n*.04,n*.5),i.strokeStyle=s,i.lineWidth=n*.05,i.stroke(),i.restore()}const xx=()=>ui("emblem",()=>{const[i,t]=fs(256,256),e=t.createRadialGradient(128,120,10,128,120,128);return e.addColorStop(0,"rgba(140,255,120,.28)"),e.addColorStop(1,"rgba(60,255,90,0)"),t.fillStyle=e,t.fillRect(0,0,256,256),t.shadowColor="#8bff6a",t.shadowBlur=16,Gc(t,128,150,112,"#5fe85a","#c8ffb0"),t.shadowBlur=0,Gc(t,128,150,112,"rgba(80,215,80,.95)","#e2ffd0"),fi(i)});function fl(i,t){const[e,n]=fs(512,256);n.fillStyle=i,n.fillRect(0,0,512,256);const s=128,r=n.createRadialGradient(s,140,20,s,140,130);return r.addColorStop(0,"rgba(0,0,0,0)"),r.addColorStop(1,t),n.fillStyle=r,n.fillRect(0,0,512,256),[e,n,s]}const _x=()=>ui("cbface",()=>{const[i,t,e]=fl("#d9a27c","rgba(120,60,40,.35)");t.fillStyle="rgba(150,80,55,.35)",t.beginPath(),t.ellipse(e,146,7,14,0,0,Math.PI*2),t.fill(),t.fillStyle="rgba(230,120,110,.18)";for(const n of[-1,1])t.beginPath(),t.ellipse(e+n*30,152,13,8,0,0,6.3),t.fill();t.beginPath(),t.moveTo(e,108),t.bezierCurveTo(e+20,96,e+44,94,e+70,102),t.lineTo(e+80,110),t.bezierCurveTo(e+70,134,e+48,148,e+24,142),t.bezierCurveTo(e+12,138,e+6,132,e,134),t.bezierCurveTo(e-6,132,e-12,138,e-24,142),t.bezierCurveTo(e-48,148,e-70,134,e-80,110),t.lineTo(e-70,102),t.bezierCurveTo(e-44,94,e-20,96,e,108),t.closePath(),t.fillStyle="#2f8a3a",t.fill(),t.lineWidth=3,t.strokeStyle="#123d18",t.stroke(),t.fillStyle="rgba(160,255,140,.25)",t.beginPath(),t.ellipse(e-30,112,18,3,0,0,6.3),t.ellipse(e+30,112,18,3,0,0,6.3),t.fill(),t.strokeStyle="#4a2c18",t.lineWidth=4;for(const n of[-1,1])t.beginPath(),t.moveTo(e+n*14,96),t.quadraticCurveTo(e+n*34,88,e+n*56,94),t.stroke();return t.fillStyle="#5a1f1a",t.beginPath(),t.moveTo(e-30,164),t.quadraticCurveTo(e,186,e+30,164),t.quadraticCurveTo(e,170,e-30,164),t.fill(),t.fillStyle="#fbfaf3",t.beginPath(),t.moveTo(e-26,165),t.quadraticCurveTo(e,178,e+26,165),t.quadraticCurveTo(e,169,e-26,165),t.fill(),t.strokeStyle="rgba(120,50,40,.6)",t.lineWidth=2,t.beginPath(),t.moveTo(e-33,162),t.quadraticCurveTo(e,188,e+33,162),t.stroke(),t.fillStyle="#4a2a16",t.beginPath(),t.moveTo(e-7,182),t.lineTo(e+7,182),t.lineTo(e+5,190),t.lineTo(e-5,190),t.fill(),t.beginPath(),t.moveTo(e-26,190),t.quadraticCurveTo(e,186,e+26,190),t.quadraticCurveTo(e+20,214,e,228),t.quadraticCurveTo(e-20,214,e-26,190),t.fill(),fi(i)}),vx=()=>ui("ampface",()=>{const[i,t,e]=fl("#8a5636","rgba(40,15,10,.45)");t.fillStyle="rgba(60,25,15,.4)",t.beginPath(),t.ellipse(e,146,7,14,0,0,6.3),t.fill();for(const n of[-1,1]){const s=t.createRadialGradient(e+n*28,122,2,e+n*28,122,22);s.addColorStop(0,"rgba(255,90,230,.95)"),s.addColorStop(1,"rgba(255,40,200,0)"),t.fillStyle=s,t.fillRect(e+n*28-24,100,48,44),t.strokeStyle="#1a0a10",t.lineWidth=5,t.beginPath(),t.moveTo(e+n*10,112),t.lineTo(e+n*46,104),t.stroke()}return t.fillStyle="#3a0d12",t.beginPath(),t.moveTo(e-28,162),t.quadraticCurveTo(e+4,186,e+34,156),t.quadraticCurveTo(e+4,170,e-28,162),t.fill(),t.fillStyle="#f6f2ea",t.beginPath(),t.moveTo(e-24,163),t.quadraticCurveTo(e+4,177,e+30,158),t.quadraticCurveTo(e+4,168,e-24,163),t.fill(),t.fillStyle="rgba(30,12,8,.35)",t.fillRect(e-40,196,80,30),fi(i)});function ul(i,t="stressed"){return ui("npc"+i+t,()=>{const[e,n,s]=fl(i,"rgba(40,20,20,.35)");n.fillStyle="#1b1010";for(const r of[-1,1])n.beginPath(),n.ellipse(s+r*24,124,5,6,0,0,6.3),n.fill();n.strokeStyle="#2a1510",n.lineWidth=3;for(const r of[-1,1])n.beginPath(),n.moveTo(s+r*12,106),n.lineTo(s+r*34,112),n.stroke();return n.beginPath(),n.ellipse(s,168,10,7,0,0,6.3),n.fillStyle="#3a1010",n.fill(),fi(e)})}const Mx=()=>ui("ground",()=>{const[i,t]=fs(256,256);t.fillStyle="#17141f",t.fillRect(0,0,256,256);for(let n=0;n<1400;n++){const s=18+Math.random()*18;t.fillStyle=`rgb(${s},${s-2},${s+8})`,t.fillRect(Math.random()*256,Math.random()*256,2,2)}const e=fi(i);return e.wrapS=e.wrapT=Dr,e});function rn(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Ee;let c=0;for(let f=0;f<i.length;++f){const d=i[f];let h=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const u in d.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(d.attributes[u]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const u in d.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;a[u]===void 0&&(a[u]=[]),a[u].push(d.morphAttributes[u])}if(t){let u;if(e)u=d.index.count;else if(d.attributes.position!==void 0)u=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,u,f),c+=u}}if(e){let f=0;const d=[];for(let h=0;h<i.length;++h){const u=i[h].index;for(let m=0;m<u.count;++m)d.push(u.getX(m)+f);f+=i[h].attributes.position.count}l.setIndex(d)}for(const f in r){const d=Hc(r[f]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;l.setAttribute(f,d)}for(const f in a){const d=a[f][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[f]=[];for(let h=0;h<d;++h){const u=[];for(let v=0;v<a[f].length;++v)u.push(a[f][v][h]);const m=Hc(u);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;l.morphAttributes[f].push(m)}}}return l}function Hc(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const f=i[c];if(t===void 0&&(t=f.array.constructor),t!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=f.itemSize),e!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=f.normalized),n!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=f.gpuType),s!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=f.count*e}const a=new t(r),o=new Qe(a,e,n);let l=0;for(let c=0;c<i.length;++c){const f=i[c];if(f.isInterleavedBufferAttribute){const d=l/e;for(let h=0,u=f.count;h<u;h++)for(let m=0;m<e;m++){const v=f.getComponent(h,m);o.setComponent(h+d,m,v)}}else a.set(f.array,l);l+=f.count*e}return s!==void 0&&(o.gpuType=s),o}const Vc=["hips","spine","chest","neck","head","armL","armR","foreL","foreR","handL","handR","legL","legR","shinL","shinR","footL","footR"];function Zt(i,t={}){const{selfLit:e,...n}=t,s=new Xs({color:i,...n});return e&&s.emissive.set(i).multiplyScalar(e),s}function ke(i){return new de({color:i,toneMapped:!1})}function We(i,t,e=.8){const n=new Yr(new Vs({map:oi(),color:i,transparent:!0,opacity:e,blending:De,depthWrite:!1,toneMapped:!1}));return n.scale.setScalar(t),n}function Vn(i,t={}){const{selfLit:e,...n}=t,s=new Xs({color:16777215,...n});return s.onBeforeCompile=r=>{r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vObjP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vObjP = position;`);const a=i+(i.includes("suitGlow")?"":`
vec3 suitGlow(vec3 p){ return vec3(0.0); }
`)+`
vec3 selfLit(vec3 p){ return suitColor(p) * ${(t.selfLit??0).toFixed(3)}; }
`;r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vObjP;
`+a).replace("vec4 diffuseColor = vec4( diffuse, opacity );","vec4 diffuseColor = vec4( diffuse * suitColor(vObjP), opacity );").replace("vec3 totalEmissiveRadiance = emissive;","vec3 totalEmissiveRadiance = emissive + suitGlow(vObjP) + selfLit(vObjP);")},s.customProgramCacheKey=()=>i+(t.selfLit??0),s}const Er=(i,t,e=16)=>new Ws(i,t,6,e);function yi(i,t,e,n=1){const s=new Ws(i,e,6,16),r=s.attributes.position,a=e/2+i;for(let o=0;o<r.count;o++){const l=r.getY(o),c=(a-l)/(2*a),f=Io.lerp(1,t/i,c)*(1+(n-1)*Math.sin(Math.PI*Math.min(1,c*1.4)));r.setX(o,r.getX(o)*f),r.setZ(o,r.getZ(o)*f)}return s.computeVertexNormals(),s}function Ht(i,t,e=0,n=0,s=0,r){const a=new Ut(i,t);return a.position.set(e,n,s),r&&r.add(a),a}function Ys(i){const t=i.scale||1,e=i.bulk||1,n=new Ve,s=new Ve;s.scale.setScalar(t),n.add(s);const r={},a=(S,E,R,_,w)=>{const D=new Le;return D.name=S,D.position.set(R,_,w),E.add(D),r[S]=D,D},o=i.colors;a("hips",s,0,.98,0),a("spine",r.hips,0,.08,0),a("chest",r.spine,0,.2,0),a("neck",r.chest,0,.3,0),a("head",r.neck,0,.1,0);const c=(i.shoulderW||.25)*e;a("armL",r.chest,c,.22,0),a("armR",r.chest,-c,.22,0),a("foreL",r.armL,0,-.3,0),a("foreR",r.armR,0,-.3,0),a("handL",r.foreL,0,-.27,0),a("handR",r.foreR,0,-.27,0),a("legL",r.hips,.1*e,-.04,0),a("legR",r.hips,-.1*e,-.04,0),a("shinL",r.legL,0,-.45,0),a("shinR",r.legR,0,-.45,0),a("footL",r.shinL,0,-.44,0),a("footR",r.shinR,0,-.44,0);const f=Ht(yi(.15*e,.13*e,.08,.95),o.pelvis,0,.02,0,r.hips);f.scale.set(1.1,1,.8);const d=Ht(yi(.14*e,.13*e,.12,1),o.torso,0,.09,0,r.spine);d.scale.set(1.04,1,.76);const h=Er(.19*e,.2,20);{const S=h.attributes.position,E=i.taper||1;for(let R=0;R<S.count;R++){const _=S.getX(R),w=S.getY(R),D=S.getZ(R),B=Io.lerp(E,1,Io.smoothstep(w,-.29,.14)),O=D>0?1+(i.pecs||0)*Math.exp(-((w-.07)**2)/.006)*Math.exp(-((Math.abs(_)-.08)**2)/.01):1;S.setXYZ(R,_*B,w,D*(.86+.14*B)*O)}h.computeVertexNormals()}const u=Ht(h,o.torso,0,.12,0,r.chest);u.scale.set(1.2,1,.74);const m=i.deltoid||.095,v=Ht(Er(m*.8*e,c*2-.08,14),o.shoulder||o.torso,0,.2,-.01,r.chest);v.rotation.z=Math.PI/2,Ht(yi(.056*e,.06*e,.08,1),o.neck||o.skin,0,.05,0,r.neck);for(const S of["L","R"]){Ht(new Se(m*e,16,12),o.shoulder||o.upperArm,0,-.03,0,r["arm"+S]).scale.set(1,1.05,.95),Ht(yi(.07*e,.056*e,.2,1.08),o.upperArm,0,-.15,0,r["arm"+S]),Ht(yi(.058*e,.044*e,.18,1.08),o.glove,0,-.13,0,r["fore"+S]);const R=Ht(new Se(.05*e,12,10),o.glove,0,-.06,.005,r["hand"+S]);R.scale.set(.95,1.35,.6),R.name="hand";const _=Ht(Er(.017,.04,8),o.glove,(S==="L"?-1:1)*-.04,-.035,.02,r["hand"+S]);_.rotation.z=(S==="L"?-1:1)*.5,Ht(yi(.095*e,.066*e,.29,1.06),o.thigh,0,-.21,0,r["leg"+S]),Ht(yi(.066*e,.05*e,.3,1.12),o.shin,0,-.21,0,r["shin"+S]);const w=Ht(Er(.05*e,.13,12),o.boot,0,-.03,.05,r["foot"+S]);w.rotation.x=Math.PI/2,w.scale.set(1.05,1,.75),w.name="foot"}const g=.135,p=new Xs({map:i.head.tex});i.selfLit&&(p.emissive.set(16777215).multiplyScalar(i.selfLit*.9),p.emissiveMap=i.head.tex);const y=Ht(new Se(g,32,24),p,0,.1,.005,r.head);y.scale.set(.95,i.head.scaleY||1.14,1),y.rotation.y=0,y.name="headMesh";const T=Ht(new Ci(.018,.045,6),o.skinMat,0,-.01,.132,y);T.rotation.x=Math.PI/2-.5,T.scale.set(1.1,1,.8);for(const S of[-1,1])Ht(new Se(.03,6,6),o.skinMat,S*.13,0,0,y).scale.set(.5,1,.8);const M={root:n,body:s,j:r,head:y,headR:g,parts:{torso:u,pelvis:f,abdomen:d},S:t};return i.extras?.(M),M.root.traverse(S=>{S.isMesh&&(S.frustumCulled=!0)}),M}function Fo(i,t,e){const n=Math.PI/2+e;return new P(-Math.cos(n)*Math.sin(t)*i,Math.cos(t)*i,Math.sin(n)*Math.sin(t)*i)}function yx(i){const t=i.map(({from:e,dir:n,len:s,wave:r,r:a,phase:o})=>{const l=[],f=new P(n.z,0,-n.x).normalize();for(let d=0;d<=10;d++){const h=d/10,u=e.clone().addScaledVector(n,s*h).addScaledVector(f,Math.sin(h*7+o)*r*h);l.push(u)}return Sx(new Lh(l),20,a,6)});return rn(t)}function Sx(i,t,e,n){const s=i.computeFrenetFrames(t,!1),r=[],a=[];for(let l=0;l<=t;l++){const c=l/t,f=i.getPointAt(c),d=e*(.75+.45*Math.sin(Math.PI*Math.min(1,c*1.6+.2)))*(1-.7*c*c);for(let h=0;h<n;h++){const u=h/n*Math.PI*2,m=s.normals[l].clone().multiplyScalar(Math.cos(u)).addScaledVector(s.binormals[l],Math.sin(u)*.55);r.push(f.x+m.x*d,f.y+m.y*d,f.z+m.z*d)}}for(let l=0;l<t;l++)for(let c=0;c<n;c++){const f=l*n+c,d=l*n+(c+1)%n,h=f+n,u=d+n;a.push(f,h,d,d,h,u)}const o=new Ee;return o.setAttribute("position",new ne(r,3)),o.setIndex(a),o.computeVertexNormals(),o}class us{constructor(t){this.rig=t,this.cur={};for(const e of Vc)this.cur[e]=[0,0,0];this.hipY=0,this.lift=0,this.t=0}apply(t,e,n=14){const s=1-Math.exp(-n*e);for(const r of Vc){const a=t[r]||bx,o=this.cur[r];o[0]+=(a[0]-o[0])*s,o[1]+=(a[1]-o[1])*s,o[2]+=(a[2]-o[2])*s,this.rig.j[r].rotation.set(o[0],o[1],o[2])}this.hipY+=((t.hipY||0)-this.hipY)*s,this.lift+=((t.lift||0)-this.lift)*s,this.rig.j.hips.position.y=.98+this.hipY,this.rig.body.position.y=this.lift}}const bx=[0,0,0],sn=Math.sin,Ga=Math.cos,Bt={idle(i){const t=sn(i*2.2)*.03;return{spine:[t,0,0],chest:[t,0,0],neck:[-t,0,0],armL:[.05,0,.14],armR:[.05,0,-.14],foreL:[-.18,0,0],foreR:[-.18,0,0],legL:[0,0,.03],legR:[0,0,-.03],hipY:-.01+t*.1}},run(i,t){const e=i*(8+t*3),n=.35+t*.6,s=sn(e),r=Ga(e);return{spine:[.12*t,sn(e)*.1,0],chest:[.06*t,-s*.18*t,0],neck:[-.12*t,s*.1,0],head:[0,0,0],legL:[-s*n,0,.02],legR:[s*n,0,-.02],shinL:[Math.max(0,-r)*(.5+n)+.1,0,0],shinR:[Math.max(0,r)*(.5+n)+.1,0,0],footL:[.1,0,0],footR:[.1,0,0],armL:[s*n*.9,0,.12],armR:[-s*n*.9,0,-.12],foreL:[-.6-t*.6,0,0],foreR:[-.6-t*.6,0,0],hipY:-Math.abs(r)*.05*t}},jump(i,t){const e=t>0;return{spine:[.1,0,0],legL:[e?-.9:-.4,0,.05],legR:[e?-.2:-.6,0,-.05],shinL:[e?1.3:.6,0,0],shinR:[e?.5:.9,0,0],armL:[e?-.6:.2,0,.9],armR:[e?-.6:.2,0,-.9],foreL:[-.4,0,0],foreR:[-.4,0,0]}},strike1(i,t){const e=t<.3?t/.3:1-(t-.3)/.7*.6;return{spine:[.1,.2*e,0],chest:[0,.45*e,0],armR:[-1.5*e,0,-.2],foreR:[-.15,0,0],handR:[.6*e,0,0],armL:[-.4,0,.35],foreL:[-1.6,0,0],legL:[-.5,0,.05],shinL:[.4,0,0],legR:[.3,0,-.05],shinR:[.2,0,0],hipY:-.06}},strike2(i,t){const e=t<.3?t/.3:1-(t-.3)/.7*.6;return{spine:[.1,-.2*e,0],chest:[0,-.45*e,0],armL:[-1.5*e,0,.2],foreL:[-.15,0,0],handL:[.6*e,0,0],armR:[-.4,0,-.35],foreR:[-1.6,0,0],legR:[-.5,0,-.05],shinR:[.4,0,0],legL:[.3,0,.05],shinL:[.2,0,0],hipY:-.06}},strike3(i,t){const e=t<.4?t/.4:1,n=t<.4?1-e:0;return{spine:[.15-n*.3,0,0],armL:[-1.45*e+n*.6,0,.15],armR:[-1.45*e+n*.6,0,-.15],foreL:[-.1-n,0,0],foreR:[-.1-n,0,0],handL:[.9*e,0,0],handR:[.9*e,0,0],legL:[-.7,0,.1],shinL:[.5,0,0],legR:[.5,0,-.1],shinR:[.3,0,0],hipY:-.12,lift:sn(t*Math.PI)*.25}},blast(i,t){const e=Math.min(1,t/.25);return{chest:[0,.35,0],armR:[-1.55*e,0,-.05],foreR:[0,0,0],handR:[.8,0,0],armL:[.2,0,.5],foreL:[-1,0,0],legL:[-.35,0,.05],shinL:[.3,0,0],legR:[.25,0,0],hipY:-.04}},field(i){const t=sn(i*4)*.05;return{spine:[-.08,0,0],neck:[-.15,0,0],armL:[-.3,0,1.35+t],armR:[-.3,0,-1.35-t],foreL:[-.2,0,.2],foreR:[-.2,0,-.2],handL:[0,0,.6],handR:[0,0,-.6],legL:[-.1,0,.12],legR:[-.1,0,-.12],shinL:[.25,0,0],shinR:[.25,0,0],footL:[.4,0,0],footR:[.4,0,0],lift:.25+t}},hit(i,t){const e=1-t;return{spine:[-.35*e,0,0],neck:[-.3*e,0,0],armL:[-.5*e,0,.6],armR:[-.5*e,0,-.6],foreL:[-.8,0,0],foreR:[-.8,0,0],legL:[-.2,0,0],shinL:[.3,0,0]}},stressed(i,t,e=0){const n=sn(i*13+e)*.08;return{spine:[.15,n,0],neck:[.2,sn(i*9+e)*.35,0],armL:[-2.6,0,.5],armR:[-2.6,0,-.5],foreL:[-2,0,0],foreR:[-2,0,0],legL:[0,0,.05],legR:[0,0,-.05],hipY:Math.abs(n)*-.1}},sit(i){const t=sn(i*1.5)*.02;return{spine:[-.15+t,0,0],chest:[t,0,0],neck:[.1,0,0],legL:[-1.5,0,.12],legR:[-1.5,0,-.12],shinL:[.2,0,0],shinR:[.2,0,0],armL:[.2,0,.25],armR:[.2,0,-.25],foreL:[-.6,0,0],foreR:[-.6,0,0],hipY:-.78}},windup(i,t){return{spine:[-.15,.3,0],chest:[0,.3,0],armR:[-.4,0,-1.6],foreR:[-1.6,0,0],armL:[-.6,0,.4],foreL:[-1.2,0,0],legL:[-.4,0,0],shinL:[.3,0,0],legR:[.3,0,0],hipY:-.06}},punch(i,t){return{spine:[.2,-.35,0],chest:[0,-.4,0],armR:[-1.55,0,-.1],foreR:[-.1,0,0],armL:[-.3,0,.4],foreL:[-1.4,0,0],legL:[-.6,0,0],shinL:[.4,0,0],legR:[.4,0,0],hipY:-.08}},charge(i,t){const e=i*16;return{spine:[.55,0,0],neck:[-.4,0,0],armL:[.9,0,.3],armR:[.9,0,-.3],foreL:[-.5,0,0],foreR:[-.5,0,0],legL:[-sn(e)*1,0,0],legR:[sn(e)*1,0,0],shinL:[Math.max(0,-Ga(e))*1.4,0,0],shinR:[Math.max(0,Ga(e))*1.4,0,0]}},slam(i,t){const e=t<.55;return{spine:[e?-.3:.6,0,0],armL:[e?-3:-1.2,0,.2],armR:[e?-3:-1.2,0,-.2],foreL:[-.3,0,0],foreR:[-.3,0,0],legL:[-.5,0,.2],legR:[-.5,0,-.2],shinL:[.6,0,0],shinR:[.6,0,0],hipY:e?0:-.2}},dazed(i){return{spine:[.3,sn(i*3)*.2,0],neck:[.5,sn(i*4)*.4,0],armL:[.2,0,.3],armR:[.2,0,-.3],legL:[-.3,0,.1],legR:[-.3,0,-.1],shinL:[.6,0,0],shinR:[.6,0,0],hipY:-.15}},hype(i,t){const e=Math.min(1,t/.3);return{chest:[-.1,-.4*e,0],armR:[-1.6*e,.3,-.1],foreR:[-.1,0,0],handR:[.4,0,0],armL:[-.2,0,.6],foreL:[-1.8,0,0],neck:[-.1,.2,0],legL:[-.3,0,0],legR:[.3,0,0]}},taunt(i){const t=sn(i*3);return{chest:[-.1,t*.15,0],neck:[-.2,t*.2,0],armL:[-.5,0,1.1+t*.2],armR:[-.5,0,-1.1-t*.2],foreL:[-1.2,0,0],foreR:[-1.2,0,0],lift:.05}},overdrive(i){const t=sn(i*30)*.05;return{spine:[-.25,0,0],neck:[-.4,0,0],armL:[-2.9,0,.6+t],armR:[-2.9,0,-.6-t],foreL:[-.2,0,0],foreR:[-.2,0,0],legL:[-.2,0,.3],legR:[-.2,0,-.3],lift:.4}}},es=[-50,0,50],Wc=2.6,Xc=4.4,hn=4.4,Pn=1.9,Es={green:7,yellow:1.6},wr={moving:[10,16],cruise:9,stopGap:7};function Ei(i,t){const e=i.attributes.position.count,n=new Float32Array(e*3);for(let s=0;s<e;s++)n[s*3]=t[0],n[s*3+1]=t[1],n[s*3+2]=t[2];return i.setAttribute("color",new Qe(n,3)),delete i.attributes.uv,i}function Ex(){const i=new se(Pn,.62,hn,1,1,2).translate(0,.55,0),t=i.attributes.position;for(let o=0;o<t.count;o++)Math.abs(t.getZ(o))>hn/2-.01&&t.getY(o)>.6&&t.setZ(o,t.getZ(o)*.93);const e=new se(Pn*.86,.55,hn*.5).translate(0,1.13,-.15),n=e.attributes.position;for(let o=0;o<n.count;o++)n.getY(o)>1.2&&(n.setZ(o,n.getZ(o)*.7-.05),n.setX(o,n.getX(o)*.9));const s=new se(Pn*.88,.36,hn*.44).translate(0,1.12,-.15),r=s.attributes.position;for(let o=0;o<r.count;o++)r.getY(o)>1.2&&r.setZ(o,r.getZ(o)*.72-.05);const a=[Ei(i,[1,1,1]),Ei(e,[.85,.85,.9]),Ei(s,[.08,.1,.16])];for(const[o,l]of[[-.95,1.35],[.95,1.35],[-.95,-1.35],[.95,-1.35]])a.push(Ei(new Ke(.36,.36,.28,10).rotateZ(Math.PI/2).translate(o,.36,l),[.05,.05,.06]));return rn(a)}function wx(){const i=[];for(const t of[-1,1])i.push(Ei(new se(.42,.14,.06).translate(t*.66,.68,hn/2+.01),[1,.95,.8])),i.push(Ei(new se(.5,.12,.06).translate(t*.62,.7,-hn/2-.01),[1,.08,.2]));return i.push(Ei(new se(Pn*.9,.05,hn*.8).translate(0,.16,0),[.1,.9,1])),rn(i)}function Tx(i,t,e,n,s=[]){const r=[],a=(A,U)=>s.some(z=>Math.hypot(A-z.x,U-z.z)<z.r);for(const A of es)for(const U of[-1,1])for(let z=-92;z<=92;z+=7.5)if(!(es.some(V=>Math.abs(z-V)<10)||n()<.45))for(const V of[!0,!1]){const Z=V?A+U*Xc:z,k=V?z:A+U*Xc;a(Z,k)||n()<.4||(r.push({parked:!0,alongZ:V,x:Z,z:k,dir:n()<.5?1:-1}),V?t.add(Z-Pn/2,Z+Pn/2,k-hn/2,k+hn/2,1.4):t.add(Z-hn/2,Z+hn/2,k-Pn/2,k+Pn/2,1.4))}const o=wr.moving[e===0?0:1];for(let A=0;A<o;A++){const U=A%2===0,z=es[A%3],V=(A>>1)%2?1:-1;r.push({parked:!1,alongZ:U,road:z,dir:V,s:-90+n()*180,v:wr.cruise,lane:z+V*(U?-Wc:Wc)})}const l=[2287359,16722902,16769354,15263984,8019199,2763320,16738858,3800954],c=new Ie(Ex(),Zt(16777215,{vertexColors:!0,selfLit:.12}),r.length),f=new Ie(wx(),new de({vertexColors:!0,toneMapped:!1}),r.length),d=new he,h=new Fn,u=new P,m=new P(1,1,1),v=new Vt,g=new P(0,1,0);r.forEach((A,U)=>c.setColorAt(U,v.set(l[Math.floor(n()*l.length)])));const p=(A,U)=>{const z=A.parked?A.x:A.alongZ?A.lane:A.s,V=A.parked?A.z:A.alongZ?A.s:A.lane;A.px=z,A.pz=V;const Z=A.alongZ?A.dir>0?0:Math.PI:A.dir>0?Math.PI/2:-Math.PI/2;d.compose(u.set(z,0,V),h.setFromAxisAngle(g,Z),m),c.setMatrixAt(U,d),f.setMatrixAt(U,d)};r.forEach(p),c.userData.dynamic=f.userData.dynamic=!0,i.add(c,f);const y=[],T=[];for(const A of es)for(const U of es)for(const z of["x","z"]){const V=A+(z==="z"?6.2:-6.2),Z=U+(z==="z"?6.2:-6.2);T.push(new Ke(.1,.12,5.2,6).translate(V,2.6,Z));const k=z==="z"?V-2.4:V,Q=z==="z"?Z:Z+2.4;T.push(new se(z==="z"?2.6:.12,.12,z==="z"?.12:2.6).translate((V+k)/2,5.1,(Z+Q)/2)),T.push(new se(.42,1.25,.42).translate(k,4.4,Q)),y.push({axis:z,x:k,z:Q})}const M=new Ut(rn(T.map(A=>(delete A.attributes.uv,A))),Zt(1841700));i.add(M);const S=new Ie(new Se(.14,8,6),new de({toneMapped:!1}),y.length*3);y.forEach((A,U)=>{for(let z=0;z<3;z++)d.compose(u.set(A.x,4.8-z*.38,A.z),h.identity(),m),S.setMatrixAt(U*3+z,d)}),S.userData.dynamic=!0,i.add(S);const E=new Vt(1710618),R=new Vt(16719936),_=new Vt(16760864),w=new Vt(3211136),D=2*(Es.green+Es.yellow),B=(A,U)=>{const z=U%D,V=Es.green+Es.yellow;return(A==="x"?z<V:z>=V)?z%V<Es.green?"g":"y":"r"};let O="";const L={cars:r,signal:B,stops:0,honks:0};return L.update=(A,U,z)=>{const V=B("x",U),Z=B("z",U);V+Z!==O&&(O=V+Z,y.forEach((k,Q)=>{const et=k.axis==="x"?V:Z;S.setColorAt(Q*3,et==="r"?R:E),S.setColorAt(Q*3+1,et==="y"?_:E),S.setColorAt(Q*3+2,et==="g"?w:E)}),S.instanceColor.needsUpdate=!0),r.forEach((k,Q)=>{if(k.parked)return;const et=k.alongZ?Z:V;let ut=wr.cruise;for(const bt of es){const Ot=(bt-k.s)*k.dir;Ot>6&&Ot<6+wr.stopGap&&et!=="g"&&(ut=0)}const yt=k.alongZ?0:k.dir,te=k.alongZ?k.dir:0;for(const bt of z){const Ot=bt.x-k.px,j=bt.z-k.pz,nt=Ot*yt+j*te,vt=Math.abs(Ot*te-j*yt);nt>0&&nt<7.5&&vt<1.8+(bt.r||.5)&&(ut=0,bt.player&&!k.honked&&(k.honked=!0,L.honks++))}for(const bt of r){if(bt===k||bt.parked||bt.alongZ!==k.alongZ||bt.lane!==k.lane)continue;const Ot=(bt.s-k.s)*k.dir;Ot>0&&Ot<7&&(ut=0)}ut===0&&k.v>.5&&L.stops++,ut>0&&(k.honked=!1),k.v+=(ut-k.v)*Math.min(1,A*(ut<k.v?4:1.2)),k.s+=k.v*k.dir*A,k.s>97&&(k.s=-97),k.s<-97&&(k.s=97),p(k,Q)}),c.instanceMatrix.needsUpdate=!0,f.instanceMatrix.needsUpdate=!0},L.pushOut=(A,U)=>{for(const z of r){if(z.parked)continue;const V=(z.alongZ?Pn:hn)/2+U,Z=(z.alongZ?hn:Pn)/2+U,k=A.x-z.px,Q=A.z-z.pz;if(Math.abs(k)<V&&Math.abs(Q)<Z&&A.y<1.5){const et=V-Math.abs(k),ut=Z-Math.abs(Q);et<ut?A.x+=Math.sign(k||1)*et:A.z+=Math.sign(Q||1)*ut}}},L.counts={parked:r.filter(A=>A.parked).length,moving:o,trafficLights:y.length},L}function Ax(i){const t=[];i.traverse(n=>{n.isInstancedMesh&&!n.userData.dynamic&&t.push(n)});let e=0;for(const n of t){const s=n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone();for(const v of Object.keys(s.attributes))["position","normal","uv","color"].includes(v)||s.deleteAttribute(v);const r=s.attributes.position.count,a=new he,o=new Vt,l=[],c=!!n.instanceColor,f=!!s.attributes.color;for(let v=0;v<n.count;v++){if(n.getMatrixAt(v,a),a.elements[0]===0&&a.elements[5]===0&&a.elements[10]===0)continue;const g=s.clone();if(g.applyMatrix4(a),c||f){c?n.getColorAt(v,o):o.setRGB(1,1,1);const p=new Float32Array(r*3);for(let y=0;y<r;y++){const T=f?s.attributes.color.getX(y):1,M=f?s.attributes.color.getY(y):1,S=f?s.attributes.color.getZ(y):1;p[y*3]=T*o.r,p[y*3+1]=M*o.g,p[y*3+2]=S*o.b}g.setAttribute("color",new Qe(p,3))}l.push(g)}if(!l.length){n.parent?.remove(n);continue}const d=rn(l);d.computeBoundingSphere();const h=n.material;(c||f)&&(h.vertexColors=!0,h.needsUpdate=!0);const u=new Ut(d,h);u.position.copy(n.position),u.quaternion.copy(n.quaternion),u.scale.copy(n.scale),u.renderOrder=n.renderOrder,u.frustumCulled=!1,u.name=n.name,u.userData={...n.userData,baked:!0};const m=n.parent;m.add(u),m.remove(n),n.dispose?.(),e++}return e}const Wh=[["STAY CHILL","#39ff7a","#062a14","leaf"],["HYPE CORP","#ff2bd6","#2a0624","bolt"],["NOODLES 24/7","#22e6ff","#06202a","bowl"],["AMP ENERGY","#ff2bd6","#1a0430","bolt"],["LOFI RADIO","#22e6ff","#120a2e","wave"],["BREATHE","#39ff7a","#04201a","wave"],["OVERDRIVE","#ff4ae0","#22041e","bolt"],["NEON TEA","#22e6ff","#041a24","bowl"]];function Rx(){const e=document.createElement("canvas");e.width=1024,e.height=512;const n=e.getContext("2d");Wh.forEach(([r,a,o,l],c)=>{const f=c%4*256,d=Math.floor(c/4)*256,h=n.createLinearGradient(f,d,f,d+256);if(h.addColorStop(0,o),h.addColorStop(1,"rgba(0,0,0,0.25)"),n.fillStyle=h,n.fillRect(f+4,d+4,248,248),n.strokeStyle=a,n.lineWidth=6,n.strokeRect(f+8,d+8,240,240),n.save(),n.translate(f+128,d+100),n.strokeStyle=a,n.fillStyle=a,n.lineWidth=7,n.shadowColor=a,n.shadowBlur=14,l==="bolt")n.beginPath(),n.moveTo(10,-60),n.lineTo(-30,8),n.lineTo(0,8),n.lineTo(-12,60),n.lineTo(32,-12),n.lineTo(2,-12),n.closePath(),n.fill();else if(l==="bowl"){n.beginPath(),n.arc(0,0,48,0,Math.PI),n.closePath(),n.stroke();for(const u of[-20,0,20])n.beginPath(),n.moveTo(u,-12),n.quadraticCurveTo(u+10,-40,u,-62),n.stroke()}else if(l==="wave"){n.beginPath();for(let u=-70;u<=70;u+=4)n.lineTo(u,Math.sin(u*.12)*26*Math.cos(u*.02));n.stroke()}else{n.beginPath(),n.ellipse(0,0,22,58,0,0,Math.PI*2),n.stroke();for(const u of[-1,1])n.save(),n.rotate(u*.9),n.beginPath(),n.ellipse(0,-10,14,44,0,0,Math.PI*2),n.stroke(),n.restore()}n.restore(),n.fillStyle=a,n.shadowColor=a,n.shadowBlur=12,n.font=`900 ${r.length>9?30:38}px system-ui, sans-serif`,n.textAlign="center",n.fillText(r,f+128,d+215),n.shadowBlur=0});const s=new kr(e);return s.colorSpace=Be,s.anisotropy=2,s}function Cx(i){const t=al.merge([pt.fog,{t:{value:0}}]);return t.map={value:i},new an({uniforms:t,transparent:!0,depthWrite:!1,blending:De,side:Ge,fog:!0,vertexShader:`attribute float seed; varying vec2 vUv; varying float vSeed;
#include <fog_pars_vertex>
void main(){ vUv = uv; vSeed = seed; vec4 mvPosition = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * mvPosition;
#include <fog_vertex>
}`,fragmentShader:`uniform sampler2D map; uniform float t; varying vec2 vUv; varying float vSeed;
#include <fog_pars_fragment>
void main(){ float g = step(0.985, fract(sin(floor(t*6.0 + vSeed*13.0))*43758.5)); vec2 uv = vUv + vec2(g*0.01*sin(vUv.y*80.0), 0.0);
  vec4 c = texture2D(map, uv); float scan = 0.78 + 0.22*sin(vUv.y*900.0 - t*12.0); float flick = 0.88 + 0.12*sin(t*23.0 + vSeed*7.0);
  gl_FragColor = vec4(c.rgb * scan * flick * 1.25, c.a * 0.9);
#include <fog_fragment>
}`})}function Px(i,t,e,n,s){const r=new he,a=new Fn,o=new P,l=new P(1,1,1);new Vt;const c=e.filter(L=>L.h>16&&!L.noDeco),f=e.filter(L=>!L.noDeco&&L.h>7),d=n===0?14:24,h=[];for(let L=0;L<d&&c.length;L++){const A=c[Math.floor(s()*c.length)],U=Math.floor(s()*Wh.length),z=Math.min(A.w,A.d)*(.45+s()*.25),V=z*(.55+s()*.35),Z=new Te(z,V),k=Z.attributes.uv,Q=U%4/4,et=1-(Math.floor(U/4)+1)/2;for(let bt=0;bt<k.count;bt++)k.setXY(bt,Q+k.getX(bt)/4,et+k.getY(bt)/2);const ut=Math.floor(s()*4),yt=Math.max(8,A.h*(.45+s()*.4));if(L%5===4)Z.translate(0,A.h+V/2+1.2,0),Z.rotateY(s()*Math.PI),Z.translate(A.cx,0,A.cz);else{const bt=[0,Math.PI,Math.PI/2,-Math.PI/2][ut];Z.rotateY(bt);const Ot=[[0,A.d/2+.35],[0,-A.d/2-.35],[A.w/2+.35,0],[-A.w/2-.35,0]][ut];Z.translate(A.cx+Ot[0],yt,A.cz+Ot[1])}const te=new Float32Array(Z.attributes.position.count).fill(s());Z.setAttribute("seed",new Qe(te,1)),h.push(Z)}if(h.length){const L=new Ut(rn(h),Cx(Rx()));L.renderOrder=2,i.add(L),t.animated.push(A=>{L.material.uniforms.t.value=A}),t.holo=L}const u=[],m=[];for(const L of f){const A=L.w>9?1+Math.floor(s()*3):s()<.5?1:0;for(let U=0;U<A;U++)u.push([L.cx+(s()-.5)*L.w*.6,L.h,L.cz+(s()-.5)*L.d*.6,1.4+s()*1.4,.9+s()*.8,1.2+s()*1.2]);L.h>20&&(L.spire||s()<.45)&&m.push([L.cx+(s()-.5)*L.w*.3,L.h,L.cz+(s()-.5)*L.d*.3,4+s()*(L.spire?12:6)])}const v=new se(1,1,1).translate(0,.5,0),g=new Ie(v,Zt(3816012,{selfLit:.15}),u.length);u.forEach(([L,A,U,z,V,Z],k)=>{r.compose(o.set(L,A,U),a.identity(),l.set(z,V,Z)),g.setMatrixAt(k,r)}),i.add(g);const p=rn([new Ke(.06,.12,1,5).translate(0,.5,0),new se(.9,.05,.05).translate(0,.7,0),new se(.6,.05,.05).translate(0,.85,0)]),y=new Ie(p,Zt(2763318),m.length),T=[];m.forEach(([L,A,U,z],V)=>{r.compose(o.set(L,A,U),a.identity(),l.set(1,z,1)),y.setMatrixAt(V,r),T.push(L,A+z+.1,U)}),i.add(y);const M=new Ee;M.setAttribute("position",new ne(T,3));const S=new el(M,new tl({color:16724821,size:2.2,map:oi(),transparent:!0,depthWrite:!1,blending:De,sizeAttenuation:!0}));i.add(S),t.animated.push(L=>{S.material.opacity=Math.sin(L*3)>0?1:.15});const E=[],R=[],_=(L,A)=>{let U=0;for(const z of e)Math.abs(L-z.cx)<=z.w/2+.5&&Math.abs(A-z.cz)<=z.d/2+.5&&(U=Math.max(U,z.h));return U},w=n===0?26:44;for(let L=0;L<w;L++){const A=s()<.5,U=[-50,0,50][Math.floor(s()*3)],z=(s()-.5)*180,V=A?new P(U-8.2,0,z):new P(z,0,U-8.2),Z=A?new P(U+8.2,0,z+(s()-.5)*4):new P(z+(s()-.5)*4,0,U+8.2),k=Math.min(_(V.x-(A?1:0),V.z-(A?0:1)),_(Z.x+(A?1:0),Z.z+(A?0:1)));if(k<9)continue;V.y=7+s()*Math.min(10,k-8),Z.y=V.y+(s()-.5)*2;const Q=V.clone().lerp(Z,.5);Q.y-=1.2+s()*1.5;const et=new rl(new il(V,Q,Z),10,.05,3,!1);delete et.attributes.uv,(s()<.25?R:E).push(et)}E.length&&i.add(new Ut(rn(E),new de({color:789010}))),R.length&&i.add(new Ut(rn(R),new de({color:2287359,toneMapped:!1})));const D=[];for(let L=0;L<(n===0?8:12);L++){const A=s()<.5,U=[-50,0,50][Math.floor(s()*3)],z=[-75,-25,25,75][Math.floor(s()*4)]+(s()-.5)*16,V=_(A?U-9:z,A?z:U-9),Z=_(A?U+9:z,A?z:U+9),k=Math.min(V,Z);if(k<16)continue;const Q=11+s()*Math.min(10,k-14);D.push({alongX:A,s:U,p:z,y:Q})}const B=new se(1,1,1),O=new Ie(B,Zt(2761792,{selfLit:.1}),D.length*2);return D.forEach((L,A)=>{const z=L.alongX?L.s:L.p,V=L.alongX?L.p:L.s;r.compose(o.set(z,L.y,V),a.identity(),L.alongX?l.set(16.6,2.2,3):l.set(3,2.2,16.6)),O.setMatrixAt(A*2,r),r.compose(o.set(z,L.y+1.3,V),a.identity(),L.alongX?l.set(16.6,.3,3.4):l.set(3.4,.3,16.6)),O.setMatrixAt(A*2+1,r);const Z=A%2?2287359:16722902;t.trimAdd(z,L.y-1.12,V,L.alongX?16.6:.25,.08,L.alongX?.25:16.6,Z),t.trimAdd(z,L.y+.2,V+(L.alongX?1.52:0),L.alongX?16.6:.06,.5,L.alongX?.06:16.6,10483455)}),i.add(O),{billboards:h.length,acs:u.length,antennas:m.length,cables:E.length+R.length,walkways:D.length}}const ws={cyberdeck:[.00390625,.75390625,.2421875,.16015625,2.016260162601626],synapse:[.25390625,.75,.2421875,.16666666666666666,1.9375],neo:[.50390625,.7083333333333333,.2421875,.25,1.2916666666666667],bar:[.75390625,.7447916666666667,.2421875,.17708333333333334,1.8235294117647058],hotel:[.0439453125,.33854166666666663,.162109375,.3229166666666667,.6693548387096774],ramen:[.2958984375,.33854166666666663,.1572265625,.3229166666666667,.6491935483870968],"open-24-hours":[.50390625,.41927083333333337,.2421875,.16145833333333334,2],vacancy:[.8037109375,.33854166666666663,.1416015625,.3229166666666667,.5846774193548387],"future-city":[.00390625,.07552083333333337,.2421875,.18229166666666666,1.7714285714285714],"chill-zone":[.25390625,.07421875,.2421875,.18489583333333334,1.7464788732394365],overdrive:[.50390625,.078125,.2421875,.17708333333333334,1.8235294117647058],"amp-tower":[.7724609375,.00520833333333337,.2041015625,.3229166666666667,.842741935483871]},Yc={"holo-face":[.0166015625,.00390625,.298828125,.9921875,.6023622047244095],"holo-chill-zone":[.35546875,.005859375,.2880859375,.990234375,.5818540433925049],"holo-overdrive":[.68359375,.00390625,.2978515625,.9921875,.6003937007874016]},Lx=""+new URL("signs-atlas-OiKJRqLS.webp",import.meta.url).href,Ix=""+new URL("holo-atlas-Cd4475eH.webp",import.meta.url).href,Dx=new fd,qc=i=>{const t=Dx.load(i);return t.colorSpace=Be,t.anisotropy=4,t},Ux={cyberdeck:16722902,synapse:16730848,neo:2287359,bar:16722902,hotel:16722902,ramen:16722902,"open-24-hours":2287359,vacancy:16722902,"future-city":2287359,"chill-zone":3800954,overdrive:16722902,"amp-tower":16722902},wi=[-50,0,50];function Zc(i,t,e,n,s,r,a=.3){const o=new Te(e,n),l=[0,Math.PI,Math.PI/2,-Math.PI/2][t];o.rotateY(l);const c=[[r*i.w,i.d/2+a],[r*i.w,-i.d/2-a],[i.w/2+a,r*i.d],[-i.w/2-a,r*i.d]][t];return o.translate(i.cx+c[0],s,i.cz+c[1]),{g:o,x:i.cx+c[0],z:i.cz+c[1],rotY:l}}function Ha(i,t){const e=i.attributes.uv;for(let n=0;n<e.count;n++)e.setXY(n,t[0]+e.getX(n)*t[2],t[1]+e.getY(n)*t[3])}function Va(i){const t=Math.min(...wi.map(s=>Math.abs(i.cx-s))),e=Math.min(...wi.map(s=>Math.abs(i.cz-s)));return t<e?wi.reduce((r,a)=>Math.abs(i.cx-a)<Math.abs(i.cx-r)?a:r)>i.cx?2:3:wi.reduce((s,r)=>Math.abs(i.cz-r)<Math.abs(i.cz-s)?r:s)>i.cz?0:1}function Wa(i,t,e,n,s){const r=[[0,1],[0,-1],[1,0],[-1,0]][e],a=e<2?s*t.w:e===2?t.w/2:-t.w/2,o=e<2?e===0?t.d/2:-t.d/2:s*t.d;for(const l of[1,4,8]){const c=t.cx+a+r[0]*l,f=t.cz+o+r[1]*l;for(const d of i)if(d!==t&&d.h>n-2&&Math.abs(c-d.cx)<d.w/2&&Math.abs(f-d.cz)<d.d/2)return!0}return!1}function Nx(i,t,e,n,s){const r={};for(const $ of e)if($.base=0,$.tier)for(const at of e)at!==$&&at.tier===0&&Math.abs(at.cx-$.cx)<at.w/2&&Math.abs(at.cz-$.cz)<at.d/2&&($.base=Math.max($.base,at.h));const a=e.filter($=>!$.noDeco&&$.h>9),o=a.filter($=>!$.tier),l=e.filter($=>!$.noDeco&&$.h-$.base>14),c=Object.keys(ws),f=[],d=[],h=n===0?70:110,u=c.filter($=>ws[$][4]<.9),m=c.filter($=>ws[$][4]>=.9),v={big:n===0?26:42,small:n===0?40:64},g={big:0,small:0};for(let $=0;$<h*5&&(g.big<v.big||g.small<v.small);$++){const at=g.big<v.big&&($%2===0||g.small>=v.small);if(!at&&g.small>=v.small)continue;const lt=at?l:o,mt=lt[Math.floor(s()*lt.length)],kt=at&&$%4===0?u[($>>2)%u.length]:at?m[($>>1)%m.length]:c[$%c.length],F=ws[kt],Gt=s()<.75?Va(mt):Math.floor(s()*4),Et=at?F[4]<.9?12+s()*10:6+s()*6:2.6+s()*2.4,C=Et*F[4],x=Gt<2?mt.w:mt.d;if(C>x*.9)continue;const W=at?mt.base+Et/2+2+s()*Math.max(0,mt.h-mt.base-Et-4):Math.min(mt.h-Et/2-.5,3.4+s()*4+Et/2),I=(s()-.5)*.5;if(Wa(e,mt,Gt,W,I))continue;const{g:N,x:K,z:it}=Zc(mt,Gt,C,Et,W,I,.25+$*.002);Ha(N,F),f.push(N),g[at?"big":"small"]++,at||d.push({x:K,z:it,w:C,c:Ux[kt],face:Gt})}const p=new de({map:qc(Lx),transparent:!0,depthWrite:!1,toneMapped:!1,side:Ge,color:16777215});p.color.setScalar(1.35);const y=new Ut(rn(f),p);y.renderOrder=2,i.add(y),r.signBoards=f.length;const T=[],M=n===0?40:90,S=$=>Math.min(...wi.map(at=>Math.abs($-at)));for(let $=0;$<M*8&&T.length<M*2;$++){const at=a[Math.floor(s()*a.length)],lt=Va(at),mt=lt===2?at.cx+at.w/2:lt===3?at.cx-at.w/2:lt===0?at.cz+at.d/2:at.cz-at.d/2;if(S(mt)>13)continue;const kt=u[$%u.length],F=ws[kt],Gt=7+s()*9,Et=Gt*F[4],C=Math.max(at.base,0)+Gt/2+4+s()*Math.max(0,at.h-Math.max(at.base,0)-Gt-6);if(C+Gt/2>at.h-1)continue;const x=(s()-.5)*.8;if(Wa(e,at,lt,C,x))continue;const W=lt===2?1:lt===3?-1:0,I=lt===0?1:lt===1?-1:0,N=Et/2+.5,K=lt<2?at.cx+x*at.w:mt+W*N,it=lt<2?mt+I*N:at.cz+x*at.d;for(const q of[0,1]){const tt=new Te(Et,Gt);tt.rotateY((lt<2?Math.PI/2:0)+q*Math.PI);const ot=lt<2?[q?-.06:.06,0]:[0,q?-.06:.06];tt.translate(K+ot[0],C,it+ot[1]),Ha(tt,F),T.push(tt)}}if(T.length){const $=new de({map:p.map,transparent:!0,depthWrite:!1,toneMapped:!1,color:16777215});$.color.setScalar(1.35);const at=new Ut(rn(T),$);at.renderOrder=2,i.add(at)}r.bladeSigns=T.length/2;const E=[],R=Object.keys(Yc),_=l.filter($=>$.h-$.base>24);for(let $=0,at=0;$<120&&at<(n===0?10:16)&&_.length;$++){const lt=_[Math.floor(s()*_.length)],mt=Yc[R[$%R.length]],kt=Va(lt),F=10+s()*10,Gt=F*mt[4];if(Gt>(kt<2?lt.w:lt.d)*.95)continue;const Et=lt.base+F/2+2+s()*Math.max(0,lt.h-lt.base-F-4),C=(s()-.5)*.3;if(Wa(e,lt,kt,Et,C))continue;const{g:x}=Zc(lt,kt,Gt,F,Et,C,.6);Ha(x,mt),x.setAttribute("seed",new Qe(new Float32Array(x.attributes.position.count).fill(s()),1)),E.push(x),at++}if(E.length){const $=al.merge([pt.fog,{t:{value:0}}]);$.map={value:qc(Ix)};const at=new Ut(rn(E),new an({uniforms:$,transparent:!0,depthWrite:!1,blending:De,side:Ge,fog:!0,vertexShader:`attribute float seed; varying vec2 vUv; varying float vS;
#include <fog_pars_vertex>
void main(){ vUv = uv; vS = seed; vec4 mvPosition = modelViewMatrix*vec4(position,1.0); gl_Position = projectionMatrix*mvPosition;
#include <fog_vertex>
}`,fragmentShader:`uniform sampler2D map; uniform float t; varying vec2 vUv; varying float vS;
#include <fog_pars_fragment>
void main(){ float gl = step(0.97, fract(sin(floor(t*5.0+vS*17.0))*43758.5)); vec2 uv = vUv + vec2(gl*0.004*sin(vUv.y*300.0),0.0); vec4 c = texture2D(map, uv); float scan = 0.75+0.25*sin(vUv.y*1400.0 - t*10.0); float fl = 0.85+0.15*sin(t*17.0+vS*9.0); gl_FragColor = vec4(c.rgb*scan*fl*1.4, c.a);
#include <fog_fragment>
}`}));at.renderOrder=3,i.add(at),t.animated.push(lt=>{at.material.uniforms.t.value=lt}),r.holoPortraits=E.length}const w=new Te(1,1).rotateX(-Math.PI/2),D=(()=>{const $=document.createElement("canvas");$.width=64,$.height=256;const at=$.getContext("2d"),lt=at.createLinearGradient(0,0,0,256);lt.addColorStop(0,"rgba(255,255,255,0)"),lt.addColorStop(.2,"rgba(255,255,255,.9)"),lt.addColorStop(1,"rgba(255,255,255,0)"),at.fillStyle=lt,at.fillRect(0,0,64,256),at.globalCompositeOperation="destination-in";const mt=at.createLinearGradient(0,0,64,0);return mt.addColorStop(0,"rgba(0,0,0,0)"),mt.addColorStop(.5,"#000"),mt.addColorStop(1,"rgba(0,0,0,0)"),at.fillStyle=mt,at.fillRect(0,0,64,256),new kr($)})(),B=new Ie(w,new de({map:D,transparent:!0,depthWrite:!1,blending:De,opacity:n===2?.55:.4,toneMapped:!1}),d.length),O=new he,L=new Fn,A=new P,U=new P,z=new Vt,V=new P(0,1,0);d.forEach(($,at)=>{const lt=[[0,1],[0,-1],[1,0],[-1,0]][$.face],mt=7;O.compose(A.set($.x+lt[0]*(mt/2+.5),.205+at*3e-4,$.z+lt[1]*(mt/2+.5)),L.setFromAxisAngle(V,$.face<2?0:Math.PI/2),U.set($.w*.8,1,mt)),B.setMatrixAt(at,O),B.setColorAt(at,z.set($.c))}),i.add(B),r.wetReflections=d.length;const Z=[];for(let $=0;$<(n===0?8:14);$++){const at=s()<.5,lt=wi[Math.floor(s()*3)],mt=-85+s()*170;wi.some(kt=>Math.abs(mt-kt)<8)||Z.push(at?[lt+(s()-.5)*6,mt]:[mt,lt+(s()-.5)*6])}const k=14,Q=[],et=[];Z.forEach(([$,at])=>{for(let lt=0;lt<k;lt++)Q.push($,0,at),et.push(lt/k,s())});const ut=new Ee;ut.setAttribute("position",new ne(Q,3)),ut.setAttribute("ph",new ne(et,2));const yt=new el(ut,new an({transparent:!0,depthWrite:!1,uniforms:{t:{value:0},map:{value:oi()}},vertexShader:"attribute vec2 ph; uniform float t; varying float vA; void main(){ float k = fract(t*0.25 + ph.x); vec3 p = position + vec3(sin(ph.y*30.0+t)*0.6*k, k*7.0, cos(ph.y*20.0)*0.6*k); vA = (1.0-k)*smoothstep(0.0,0.1,k); vec4 mv = modelViewMatrix*vec4(p,1.0); gl_PointSize = (90.0 + 260.0*k) / -mv.z; gl_Position = projectionMatrix*mv; }",fragmentShader:"uniform sampler2D map; varying float vA; void main(){ float a = texture2D(map, gl_PointCoord).a; gl_FragColor = vec4(0.62,0.6,0.85, a*vA*0.35); }"}));yt.frustumCulled=!1,i.add(yt),t.animated.push($=>{yt.material.uniforms.t.value=$}),r.steamVents=Z.length;const te=new Ie(new Te(1.6,1.6).rotateX(-Math.PI/2),new de({color:1709096}),Z.length);Z.forEach(([$,at],lt)=>{O.compose(A.set($,.2,at),L.identity(),U.set(1,1,1)),te.setMatrixAt(lt,O)}),i.add(te);const bt=[],Ot=e.filter($=>$.h<16&&!$.noDeco).slice(0,n===0?30:60);t.relayLot&&Ot.unshift(t.relayLot);for(const $ of Ot)for(const[at,lt,mt,kt]of[[-1,-1,1,-1],[1,-1,1,1],[1,1,-1,1],[-1,1,-1,-1]]){const F=$.cx+at*$.w/2,Gt=$.cz+lt*$.d/2,Et=$.cx+mt*$.w/2,C=$.cz+kt*$.d/2,x=Math.hypot(Et-F,C-Gt),W=Math.max(2,Math.round(x/2.5));for(let I=0;I<=W;I++){const N=I/W;bt.push(new se(.07,1,.07).translate(F+(Et-F)*N,$.h+.5,Gt+(C-Gt)*N))}for(const I of[.5,1])bt.push(new se(Math.abs(Et-F)+.07,.05,Math.abs(C-Gt)+.07).translate((F+Et)/2,$.h+I,(Gt+C)/2))}bt.forEach($=>{delete $.attributes.uv,delete $.attributes.normal});const j=rn(bt);j.computeVertexNormals(),i.add(new Ut(j,Zt(2894394,{selfLit:.25}))),r.railedRoofs=Ot.length;const nt=n===0?8:14,vt=[];for(let $=0;$<nt;$++)vt.push({cx:(s()-.5)*160,cz:-40+(s()-.5)*200,r:30+s()*60,y:32+s()*40,sp:(.05+s()*.06)*(s()<.5?1:-1),a:s()*6.28,bob:s()*6});const Ft=rn([new Se(1,10,6).scale(1.3,.45,2.6),new se(4.2,.12,.8).translate(0,0,-.6)].map($=>(delete $.attributes.uv,$))),gt=new Ie(Ft,Zt(2763322,{selfLit:.2}),nt),zt=new Ie(new Te(1,1),new de({map:oi(),transparent:!0,depthWrite:!1,blending:De,toneMapped:!1}),nt*2);for(let $=0;$<nt;$++)zt.setColorAt($*2,z.set(2287359)),zt.setColorAt($*2+1,z.set(16722902));gt.userData.dynamic=zt.userData.dynamic=!0,i.add(gt,zt),t.animated.push(($,at)=>{vt.forEach((lt,mt)=>{const kt=lt.a+$*lt.sp,F=lt.cx+Math.cos(kt)*lt.r,Gt=lt.cz+Math.sin(kt)*lt.r,Et=lt.y+Math.sin($*.5+lt.bob)*2,C=Math.atan2(-Math.sin(kt)*Math.sign(lt.sp),Math.cos(kt)*Math.sign(lt.sp));O.compose(A.set(F,Et,Gt),L.setFromAxisAngle(V,C),U.set(1,1,1)),gt.setMatrixAt(mt,O);const x=at?at.quaternion:L;O.compose(A.set(F+Math.sin(C)*2.6,Et,Gt+Math.cos(C)*2.6),x,U.set(3,3,3)),zt.setMatrixAt(mt*2,O),O.compose(A.set(F-Math.sin(C)*2.6,Et,Gt-Math.cos(C)*2.6),x,U.set(2.2,2.2,2.2)),zt.setMatrixAt(mt*2+1,O)}),gt.instanceMatrix.needsUpdate=!0,zt.instanceMatrix.needsUpdate=!0}),r.flyingVehicles=nt;const pe=(()=>{const $=document.createElement("canvas");$.width=128,$.height=512;const at=$.getContext("2d");at.fillStyle="#0b0a1c",at.fillRect(0,0,128,512);for(let mt=8;mt<512;mt+=9)for(let kt=6;kt<122;kt+=8){const F=Math.random();F<.5||(at.fillStyle=F>.93?"#ff4ae0":F>.8?"#3ae8ff":F>.7?"#ffd28a":"#2a3a6a",at.fillRect(kt,mt,4,5))}at.fillStyle="#ff2bd6",at.fillRect(0,0,128,3);const lt=new kr($);return lt.colorSpace=Be,lt})(),Yt=n===0?50:120,Jt=new Ie(new Te(1,1).translate(0,.5,0),new de({map:pe,fog:!0,toneMapped:!1}),Yt);for(let $=0;$<Yt;$++){const at=$/Yt*Math.PI*2+s()*.05,lt=150+$%3*30+s()*20,mt=Math.cos(at)*lt,kt=Math.sin(at)*lt-35,F=14+s()*22,Gt=50+s()*120;O.compose(A.set(mt,0,kt),L.setFromAxisAngle(V,Math.atan2(-mt,-(kt+35))),U.set(F,Gt,1)),Jt.setMatrixAt($,O);const Et=.55+s()*.45;Jt.setColorAt($,z.setRGB(Et,Et,Et*1.1))}if(i.add(Jt),r.farCards=Yt,n===0)return r;const oe=oi();for(const[$,at,lt]of[[14,.12,3820799],[38,.08,11545304]]){const mt=new Ut(new Te(420,420).rotateX(-Math.PI/2),new de({map:oe,color:lt,transparent:!0,opacity:at,depthWrite:!1,blending:De,fog:!1,side:Ge}));mt.position.set(0,$,-35),mt.renderOrder=4,i.add(mt)}const Wt=new Ut(new Ke(135,135,70,32,1,!0),new de({color:2764912,transparent:!0,opacity:.22,depthWrite:!1,side:$e,fog:!1}));return Wt.position.set(0,25,-35),i.add(Wt),r}const re={spawn:new P(0,0,88),blocksX:[-75,-25,25,75],blocksZ:[75,25,-25,-75],half:18,park:{x:25,z:-25},roofBlock:{x:-75,z:-25},towerPlaza:new P(0,0,-132),tower:new P(0,0,-156),hotspots:[{id:"h1",name:"Noodle Row",pos:new P(-50,0,50),kind:"street"},{id:"h2",name:"Bass Alley",pos:new P(50,0,0),kind:"street"},{id:"h3",name:"Rooftop Relay",pos:new P(-75,9,-25),kind:"roof"}]};function Fx(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Ox(){const i=new Xs({color:16777215});return i.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP; varying vec3 vWN;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
 
#ifdef USE_INSTANCING
 vec4 wp4 = modelMatrix * instanceMatrix * vec4(transformed,1.0); vWN = normalize(mat3(modelMatrix * instanceMatrix) * objectNormal);
#else
 vec4 wp4 = modelMatrix * vec4(transformed,1.0); vWN = normalize(mat3(modelMatrix) * objectNormal);
#endif
 vWP = wp4.xyz;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWP; varying vec3 vWN;
float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }`).replace("vec3 totalEmissiveRadiance = emissive;",`vec3 totalEmissiveRadiance = emissive;
      if (abs(vWN.y) < 0.5) {
        float u = abs(vWN.x) > 0.5 ? vWP.z : vWP.x;
        // dense emissive window grid (1.3 m x 1.6 m cells); filtered to average coverage at distance to avoid shimmer
        vec2 gc = vec2(u/0.7, vWP.y/1.0); vec2 cell = floor(gc); vec2 f = fract(gc);
        float win = step(0.22,f.x)*step(f.x,0.78)*step(0.3,f.y)*step(f.y,0.78)*step(3.0, vWP.y);
        float aa = clamp(1.0 - max(fwidth(gc.x), fwidth(gc.y))*1.2, 0.0, 1.0); win = mix(0.24, win, aa) * step(3.0, vWP.y);
        float hs = h21(cell + floor(vWN.xz*3.0) + floor(vWP.xz/40.0)*7.0);
        float bh = h21(floor(vWP.xz/16.0) + 3.1);
        vec3 wc = hs > 0.95 ? vec3(1.0,0.25,0.8) : (hs > 0.86 ? vec3(0.3,0.85,1.0) : vec3(1.0,0.78,0.5));
        float lit = step(0.72, hs) * (0.35 + 0.65*h21(cell*0.37));
        totalEmissiveRadiance += win * (lit * wc * 0.55 + (1.0-lit) * vec3(0.02,0.04,0.09));
        // horizontal neon floor bands on some towers (cyan / magenta)
        float band = step(0.93, fract(vWP.y/12.0)) * step(0.55, bh) * step(6.0, vWP.y);
        totalEmissiveRadiance += band * (bh > 0.8 ? vec3(1.0,0.15,0.75) : vec3(0.1,0.8,1.0)) * 0.55;
        float store = step(vWP.y,2.6)*step(0.6,vWP.y)*step(0.1,f.x)*step(f.x,0.9);
        totalEmissiveRadiance += store * (h21(cell*1.3)>0.5 ? vec3(0.1,0.5,0.6) : vec3(0.5,0.15,0.45)) * 0.16;
      }`)},i}function zx(i,t,e){const n=Fx(7),s={animated:[],signs:[],mapRects:[],tower:null,core:null,sprout:null},r=e==="low"?0:e==="medium"?1:2,a=new Ut(new Se(400,24,12),new an({side:$e,depthWrite:!1,fog:!1,uniforms:{},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"varying vec3 vP; void main(){ float h = normalize(vP).y; vec3 c = mix(vec3(0.07,0.10,0.30), vec3(0.005,0.01,0.06), smoothstep(-0.05,0.55,h)); c += vec3(0.25,0.06,0.35)*pow(1.0-abs(h),10.0); c += vec3(0.02,0.08,0.2)*pow(1.0-abs(h),3.0); gl_FragColor = vec4(c,1.0); }"}));a.renderOrder=-1,i.add(a),s.sky=a;const o=new Ee,l=[];for(let I=0;I<400;I++){const N=n()*Math.PI*2,K=.15+n()*1.2;l.push(Math.cos(N)*Math.cos(K)*380,Math.sin(K)*380,Math.sin(N)*Math.cos(K)*380)}o.setAttribute("position",new ne(l,3)),i.add(new el(o,new tl({color:12577023,size:1.6,sizeAttenuation:!1,fog:!1})));const c=We(14221296,60,.9);c.position.set(-150,160,-260),c.material.fog=!1,i.add(c);const f=Mx();f.repeat.set(60,70);const d=new Ut(new Te(260,300),new Xs({map:f,color:10130096}));d.rotation.x=-Math.PI/2,d.position.set(0,0,-35),i.add(d);const h=new Te(.25,2.6);h.rotateX(-Math.PI/2);const u=[];for(const I of[-100,-50,0,50,100])for(let N=-100;N<=100;N+=6)u.push([I,N,0]);for(const I of[-100,-50,0,50,100])for(let N=-100;N<=100;N+=6)u.push([N,I,Math.PI/2]);const m=new Ie(h,new de({color:9075264}),u.length),v=new he,g=new Fn,p=new P,y=new P(1,1,1);u.forEach(([I,N,K],it)=>{g.setFromAxisAngle(new P(0,1,0),K),v.compose(p.set(I,.02,N),g,y),m.setMatrixAt(it,v)}),i.add(m);const T=[],M=[],S=(I,N,K,it,q,tt,ot={})=>{T.push({cx:I,cz:N,w:K,d:it,h:q,color:tt,...ot}),t.add(I-K/2,I+K/2,N-it/2,N+it/2,q),s.mapRects.push([I-K/2,N-it/2,K,it,q])},E=[2498624,2893392,1907251,3352655,1713728,2629436,1450042];for(const I of re.blocksX)for(const N of re.blocksZ){const K=re.half;if(M.push([I,N,K*2+3,K*2+3]),!(I===re.park.x&&N===re.park.z)){if(I===re.roofBlock.x&&N===re.roofBlock.z){S(I-4,N,24,26,9,2959940),S(I+12.5,N+6,9,12,4.6,3485773),S(I+12.5,N-8,9,10,14,2498872);continue}for(const[it,q]of[[-1,-1],[1,-1],[-1,1],[1,1]]){const tt=15+n()*2,ot=15+n()*2,Ct=n()<.15,dt=Ct?5+n()*1.5:10+n()*(Math.abs(N)>60?14:20),ct=I+it*8.6,Pt=N+q*8.6,Nt=E[Math.floor(n()*E.length)];if(S(ct,Pt,tt,ot,dt,Nt,{tier:0}),!Ct&&n()<.8){const qt=tt*(.55+n()*.25),G=ot*(.55+n()*.25),ht=ct+(n()-.5)*(tt-qt)*.6,st=Pt+(n()-.5)*(ot-G)*.6,ft=dt+12+n()*34;if(S(ht,st,qt,G,ft,E[Math.floor(n()*E.length)],{tier:1}),n()<.6){const xt=qt*(.45+n()*.25),rt=G*(.45+n()*.25);S(ht+(n()-.5)*(qt-xt)*.5,st+(n()-.5)*(G-rt)*.5,xt,rt,ft+14+n()*34,Nt,{tier:2,spire:!0})}}}}}for(const I of[-1,1])for(let N=-112;N>-170;N-=18){const K=I*(52+n()*6),it=18+n()*24;S(K,N,22,16,it,E[Math.floor(n()*E.length)],{tier:0}),S(K+I*2,N,13,10,it+12+n()*20,E[Math.floor(n()*E.length)],{tier:1,spire:n()<.5})}const R=new se(1,1,1);R.translate(0,.5,0);const _=new Ie(R,Ox(),T.length),w=new Vt;T.forEach((I,N)=>{v.compose(p.set(I.cx,0,I.cz),g.identity(),y.set(I.w,I.h,I.d)),_.setMatrixAt(N,v),_.setColorAt(N,w.set(I.color))}),i.add(_),s.buildings=_,s.lots=T;const D=[];T.forEach(I=>{n()<.75&&D.push(I)});const B=T.filter(I=>I.h>14&&n()<.5),O=[2287359,16722902,2287359,16722902,3800954],L=new Ie(new se(1,1,1),new de({color:16777215,toneMapped:!1}),D.length*4+B.length*4+64);let A=0;y.set(1,1,1);for(const I of D){const N=O[Math.floor(n()*O.length)];for(const[K,it,q,tt]of[[I.cx,I.cz-I.d/2,I.w,.2],[I.cx,I.cz+I.d/2,I.w,.2],[I.cx-I.w/2,I.cz,.2,I.d],[I.cx+I.w/2,I.cz,.2,I.d]])v.compose(p.set(K,I.h+.1,it),g.identity(),y.set(q,.2,tt)),L.setMatrixAt(A,v),L.setColorAt(A++,w.set(N))}for(const I of B){const N=O[Math.floor(n()*O.length)],K=I.tier?T.find(it=>it.tier===0&&Math.abs(it.cx-I.cx)<10&&Math.abs(it.cz-I.cz)<10)?.h||0:3;for(const[it,q]of[[-1,-1],[1,-1],[-1,1],[1,1]])v.compose(p.set(I.cx+it*(I.w/2+.05),(K+I.h)/2,I.cz+q*(I.d/2+.05)),g.identity(),y.set(.16,I.h-K,.16)),L.setMatrixAt(A,v),L.setColorAt(A++,w.set(N))}s.trimMesh=L,s.trimNext=()=>A,s.trimAdd=(I,N,K,it,q,tt,ot)=>{A>=L.count||(v.compose(p.set(I,N,K),g.identity(),y.set(it,q,tt)),L.setMatrixAt(A,v),L.setColorAt(A++,w.set(ot)))},i.add(L);const U=new Ie(new se(1,1,1),Zt(3880272),M.length);M.forEach(([I,N,K,it],q)=>{v.compose(p.set(I,.09,N),g.identity(),y.set(K,.18,it)),U.setMatrixAt(q,v),t.add(I-K/2,I+K/2,N-it/2,N+it/2,.18)}),i.add(U);const z=[],V=(I,N,K,it,q,tt=4147802)=>{z.push({x:I,z:N,w:K,d:it,h:q,c:tt}),t.add(I-K/2,I+K/2,N-it/2,N+it/2,q),s.mapRects.push([I-K/2,N-it/2,K,it,q])};V(-75+12.5,-25+13.3,4,2.4,1.7,3107402),V(-75+12.5,-25+16.2,2,2,.9,5917234),V(-75+11.5,-25+2.5,2.4,2.4,6.8,4868698);for(let I=0;I<14;I++){const N=re.blocksX[I%4],K=re.blocksZ[I*3%4];N===re.park.x&&K===re.park.z||V(N+(n()-.5)*30,K+19.6,1.4,1.4,1.1,5917234)}const Z=new Ie(new se(1,1,1),Zt(16777215),z.length);z.forEach((I,N)=>{v.compose(p.set(I.x,I.h/2,I.z),g.identity(),y.set(I.w,I.h,I.d)),Z.setMatrixAt(N,v),Z.setColorAt(N,w.set(I.c))}),i.add(Z);const k=new Ve;k.position.copy(re.hotspots[2].pos).setY(9),i.add(k);const Q=new Ut(new Ke(.15,.3,6,6),Zt(2761270));Q.position.y=3,k.add(Q);const et=new Ut(new Pi(.9,.08,6,18),ke(16722902));et.position.y=5.2,k.add(et),t.add(k.position.x-.35,k.position.x+.35,k.position.z-.35,k.position.z+.35,15),s.relay={group:k,dish:et},s.animated.push(I=>{et.rotation.y=I*2,et.rotation.x=Math.sin(I)*.4});const ut=re.park,yt=new Ut(new Gr(17,40),Zt(2767412));yt.rotation.x=-Math.PI/2,yt.position.set(ut.x,.2,ut.z),i.add(yt);const te=new Ut(new Hr(16.6,17,48),ke(2287359));te.rotation.x=-Math.PI/2,te.position.set(ut.x,.22,ut.z),i.add(te);for(let I=0;I<6;I++){const N=I/6*Math.PI*2,K=ut.x+Math.cos(N)*12,it=ut.z+Math.sin(N)*12,q=new Ut(new se(2.4,.5,.8),Zt(4864554));q.position.set(K,.45,it),q.rotation.y=-N,i.add(q)}const bt=[];for(const I of[-50,0,50])for(let N=-90;N<=90;N+=30)bt.push([I+6.5,N],[I-6.5,N+15]);const Ot=new Ke(.08,.12,6,5);Ot.translate(0,3,0);const j=new Ie(Ot,Zt(2236458),bt.length),nt=new Ie(new Se(.3,8,6),new de({color:16777215,toneMapped:!1}),bt.length),vt=new Ie(new Te(9,9).rotateX(-Math.PI/2),new de({map:oi(),color:16777215,transparent:!0,opacity:.22,blending:De,depthWrite:!1}),bt.length);bt.forEach(([I,N],K)=>{v.compose(p.set(I,0,N),g.identity(),y.set(1,1,1)),j.setMatrixAt(K,v),v.compose(p.set(I,6,N),g.identity(),y.set(1,1,1)),nt.setMatrixAt(K,v),v.compose(p.set(I,.21+K*5e-4,N),g.identity(),y.set(1,1,1)),vt.setMatrixAt(K,v);const it=K%3===0?16734944:5958399;nt.setColorAt(K,w.set(it)),vt.setColorAt(K,w.set(it))}),i.add(j,nt,vt);const Ft=new Ve;Ft.position.set(0,0,96),i.add(Ft);const gt=new Ut(new Ke(1.2,1.4,.8,10),Zt(2761270));gt.position.y=.4,Ft.add(gt),t.add(-1.3,1.3,94.7,97.3,.8);for(let I=0;I<7;I++){const N=-1.3+I*.43,K=new Ut(new Ci(.18,1.6,4),ke(3800954));K.position.set(Math.sin(N)*.5,1.5+Math.cos(N)*.4,0),K.rotation.z=-N,Ft.add(K)}const zt=We(3800954,6,.5);zt.position.y=1.6,Ft.add(zt),s.sprout=Ft,s.animated.push(I=>{zt.material.opacity=.4+Math.sin(I*2)*.12});const pe=re.tower,Yt=re.towerPlaza,Jt=new Ut(new Gr(26,48),Zt(2365998));Jt.rotation.x=-Math.PI/2,Jt.position.set(Yt.x,.03,Yt.z),i.add(Jt);const oe=new Ut(new Hr(25.4,26,64),ke(16722902));oe.rotation.x=-Math.PI/2,oe.position.set(Yt.x,.05,Yt.z),i.add(oe),s.plazaRing=oe;const Wt=new Ve;Wt.position.copy(pe),i.add(Wt);const $=Zt(1708580),at=[[9,7,10],[7,5.5,14],[5.5,4,16],[4,2.5,18],[2.5,1.2,14]];let lt=0;const mt=[];for(const[I,N,K]of at){const it=new Ut(new Ke(N,I,K,8),$);it.position.y=lt+K/2,Wt.add(it);const q=new Ut(new Pi(N+.4,.18,6,32),ke(16722902));q.rotation.x=Math.PI/2,q.position.y=lt+K,Wt.add(q),mt.push(q),lt+=K}const kt=new Ut(new Ke(.1,.4,12,6),$);kt.position.y=lt+6,Wt.add(kt);const F=new Ut(new Se(1.8,16,12),ke(16722902));F.position.y=lt+12,Wt.add(F);const Gt=We(16722902,22,.6);Gt.position.y=lt+12,Gt.material.fog=!1,Wt.add(Gt),t.add(pe.x-9,pe.x+9,pe.z-9,pe.z+9,10);const Et=new Ve;Et.position.set(pe.x,0,pe.z+11),i.add(Et);const C=new Ut(new Ke(1.4,1.8,1.2,10),$);C.position.y=.6,Et.add(C),t.add(Et.position.x-1.6,Et.position.x+1.6,Et.position.z-1.6,Et.position.z+1.6,1.2);const x=new Ut(new Zr(1.1,1),ke(16722902));x.position.y=2.6,Et.add(x);const W=We(16722902,6,.6);return W.position.y=2.6,Et.add(W),s.core={group:Et,orb:x,glow:W},s.tower={group:Wt,rings:mt,beacon:F,bglow:Gt,top:lt+12},s.setTowerCalm=I=>{const N=new Vt(16722902).lerp(new Vt(3800954),I);for(const K of mt)K.material.color.copy(N);F.material.color.copy(N),Gt.material.color.copy(N),oe.material.color.copy(N),x.material.color.copy(N),W.material.color.copy(N)},s.animated.push(I=>{mt.forEach((N,K)=>{N.rotation.z=I*(.5+K*.2),N.position.y+=0}),Gt.scale.setScalar(20+Math.sin(I*3)*3),x.rotation.y=I,x.rotation.x=I*.7}),s.traffic=Tx(i,t,r,n,[{x:-50,z:50,r:16},{x:50,z:0,r:16},{x:-62.5,z:-10,r:14},{x:0,z:88,r:9}]),s.relayLot=T.find(I=>I.h===9),s.cyber=Px(i,s,T,r,n),s.neon=Nx(i,s,T,r,n),s.baked=Ax(i),s.update=(I,N)=>{for(const K of s.animated)K(I,N)},s}function Bx(i,t){const e=document.createElement("canvas"),n=2,s=t.bounds;e.width=(s.maxX-s.minX)*n,e.height=(s.maxZ-s.minZ)*n;const r=e.getContext("2d");r.fillStyle="#120c22",r.fillRect(0,0,e.width,e.height);for(const[a,o,l,c,f]of i.mapRects)r.fillStyle=f>8?"#3a3260":"#4e4580",r.fillRect((a-s.minX)*n,(o-s.minZ)*n,l*n,c*n);return r.strokeStyle="#ff2bd6",r.lineWidth=3,r.beginPath(),r.arc((re.towerPlaza.x-s.minX)*n,(re.towerPlaza.z-s.minZ)*n,26*n,0,Math.PI*2),r.stroke(),r.strokeStyle="#22e6ff",r.beginPath(),r.arc((re.park.x-s.minX)*n,(re.park.z-s.minZ)*n,17*n,0,Math.PI*2),r.stroke(),{canvas:e,scale:n}}class kx{constructor(t,e){this.scene=t,this.parts=[],this.max=e==="low"?60:140,this.pool=[];for(let n=0;n<this.max;n++){const s=new Yr(new Vs({map:oi(),transparent:!0,blending:De,depthWrite:!1,toneMapped:!1}));s.visible=!1,t.add(s),this.pool.push({s,life:0,v:new P,max:1,size:1})}this.rings=[]}burst(t,e,n=12,s=4,r=.5,a=.6,o=2){for(let l=0;l<n;l++){const c=this.pool.find(f=>f.life<=0);if(!c)return;c.s.visible=!0,c.s.position.copy(t),c.s.material.color.set(e),c.life=c.max=a*(.6+Math.random()*.6),c.size=r*(.6+Math.random()*.8),c.v.set((Math.random()-.5)*2,Math.random()*o/Math.max(s,.01)+.2,(Math.random()-.5)*2).normalize().multiplyScalar(s*(.5+Math.random()))}}ring(t,e,n,s,r,a=.15){const o=new Ut(new Te(1,1).rotateX(-Math.PI/2),new de({map:hl(),color:e,transparent:!0,blending:De,depthWrite:!1,toneMapped:!1}));o.position.copy(t),o.position.y=t.y+a,this.scene.add(o),this.rings.push({m:o,r0:n,r1:s,t:0,dur:r})}update(t){for(const e of this.pool){if(e.life<=0)continue;if(e.life-=t,e.life<=0){e.s.visible=!1;continue}e.s.position.addScaledVector(e.v,t),e.v.multiplyScalar(1-2*t),e.v.y+=1.5*t;const n=e.life/e.max;e.s.material.opacity=n,e.s.scale.setScalar(e.size*(.5+n*.5))}for(let e=this.rings.length-1;e>=0;e--){const n=this.rings[e];n.t+=t;const s=n.t/n.dur,r=(n.r0+(n.r1-n.r0)*s)*2;n.m.scale.set(r,1,r),n.m.material.opacity=1-s,s>=1&&(this.scene.remove(n.m),n.m.geometry.dispose(),n.m.material.dispose(),this.rings.splice(e,1))}}}class Gx{constructor(t){this.scene=t,this.list=[],this.geo=new Se(1,10,8)}spawn(t){const e=new Ut(this.geo,ke(t.color));e.scale.setScalar(t.size||.3);const n=new Yr(new Vs({map:oi(),color:t.color,transparent:!0,blending:De,depthWrite:!1,toneMapped:!1}));n.scale.setScalar((t.size||.3)*6),e.add(n),n.scale.divideScalar(t.size||.3),e.position.copy(t.pos),this.scene.add(e);const s={...t,mesh:e,vel:t.dir.clone().multiplyScalar(t.speed),age:0,dead:!1};return this.list.push(s),s}kill(t){t.dead=!0,this.scene.remove(t.mesh),t.mesh.material.dispose(),t.mesh.children[0].material.dispose()}clear(){for(const t of this.list)t.dead||this.kill(t);this.list=[]}}function Hx(i){const t=new Ve,e=new Ut(new Se(1,20,10,0,Math.PI*2,0,Math.PI/2),new de({color:i,transparent:!0,opacity:.16,blending:De,depthWrite:!1,side:Ge,toneMapped:!1})),n=new Ut(new Te(2,2).rotateX(-Math.PI/2),new de({map:hl(),color:i,transparent:!0,blending:De,depthWrite:!1,toneMapped:!1}));return n.position.y=.12,t.add(e,n),t.visible=!1,t.userData={dome:e,ring:n},t}const Hn=new P,Vx={meleeCombo(i,t,e){const n={idx:-1,t:0,active:!1,queued:!1,sinceEnd:9,hitDone:!1};return n.press=()=>{if(!(t.busy()&&!n.active)){if(n.active){n.queued=!0;return}n.start(n.sinceEnd<i.comboWindow?(n.idx+1)%i.hits.length:0)}},n.start=s=>{n.idx=s,e.stats.comboSeq=(e.stats.comboSeq||"").slice(-8)+(s+1),n.t=0,n.active=!0,n.queued=!1,n.hitDone=!1,t.faceTarget();const r=i.hits[s];t.action={pose:r.pose,k:0},e.sfx.play("whoosh")},n.update=s=>{if(n.sinceEnd+=s,!n.active)return;const r=i.hits[n.idx];if(n.t+=s,t.action.k=n.t/r.dur,n.t<r.at){const a=t.aimTarget(4.5);if(a){Hn.subVectors(a.pos,t.pos).setY(0);const o=Hn.length()-a.radius-t.radius-.6;o>0&&t.pushVel(Hn.normalize(),Math.min(r.lunge,o/s))}}if(!n.hitDone&&n.t>=r.at){n.hitDone=!0;let a=!1;for(const o of e.targets()){Hn.subVectors(o.pos,t.pos);const l=Math.abs(o.pos.y+(o.centerY||1)-(t.pos.y+1));Hn.y=0;const c=Hn.length();c>r.range+o.radius||l>(o.reachY||1.8)||Math.abs(li(Math.atan2(Hn.x,Hn.z),t.facing))>r.arc/2&&c>o.radius+.6||(o.calmHit(r.stress,{knock:r.knock||1.5,stagger:r.stagger||.18,dir:Hn.normalize(),kind:"melee"}),a=!0,e.fx.burst(o.pos.clone().setY(o.pos.y+(o.centerY||1)),8257418,8,5,.5))}a&&(t.addChill(i.chillGain),e.panic=Math.max(0,e.panic-(i.panicRelief||0)),e.sfx.play(r.sfx),e.hitstop(.04),r.whoosh&&e.popup("WHOOSH!",t.pos,!0))}n.t>=r.dur&&(n.active=!1,n.sinceEnd=0,t.action=null,n.queued&&n.start((n.idx+1)%i.hits.length))},n.cancel=()=>{n.active=!1,n.queued=!1,t.action&&i.hits.some(s=>s.pose===t.action.pose)&&(t.action=null)},n.busy=()=>n.active,n},projectile(i,t,e){const n={cd:0,t:0,active:!1};return n.press=()=>{if(n.cd>0||t.busy())return;if(t.chill<i.cost){e.flashButton("blast");return}t.chill-=i.cost,n.cd=i.cooldown,n.active=!0,n.t=0,t.faceTarget(),t.action={pose:i.pose,k:0};const s=new P(Math.sin(t.facing),0,Math.cos(t.facing)),r=t.aimTarget(40),a=t.pos.clone().add(new P(0,1.4,0)).addScaledVector(s,.8);r?s.subVectors(r.pos.clone().setY(r.pos.y+(r.centerY||1)),a).normalize():(s.y=Math.sin(-e.cam.pitch*.5)*.3,s.normalize()),e.proj.spawn({pos:a,dir:s,speed:i.speed,color:i.color,size:.32,owner:"player",stress:i.stress,splash:i.splash,life:i.life,homing:i.homing,target:r,stagger:i.stagger}),e.sfx.play("blast")},n.update=s=>{n.cd=Math.max(0,n.cd-s),n.active&&(n.t+=s,t.action.k=n.t/.3,n.t>.3&&(n.active=!1,t.action=null))},n.cancel=()=>{n.active=!1},n.busy=()=>n.active,n.cdFrac=()=>n.cd/i.cooldown,n},aura(i,t,e){const n={on:!1,t:0,mesh:Hx(i.color)};return e.scene.add(n.mesh),n.press=()=>{if(t.kit.strike.cancel(),t.kit.blast.cancel(),!(t.hitT>0&&!n.on)){if(t.chill<i.minCost){e.flashButton("field");return}n.on=!0,n.t=0,e.sfx.play("field"),e.popup("WHOOSH!",t.pos),e.fx.ring(t.pos,i.color,.5,i.radius,.4)}},n.release=()=>{n.on&&(n.on=!1,n.mesh.visible=!1,t.action=null)},n.update=(s,r)=>{if(!n.on)return;if(!r){n.release();return}if(n.t+=s,t.chill-=i.drain*s,e.panic=Math.max(0,e.panic-(i.panicPerSec||0)*s),t.chill<=0){t.chill=0,n.release();return}t.action={pose:i.pose,k:0};const a=i.radius*Math.min(1,n.t*5);n.mesh.visible=!0,n.mesh.position.copy(t.pos),n.mesh.userData.dome.scale.set(a,a*.6,a),n.mesh.userData.ring.scale.setScalar(a),n.mesh.userData.dome.material.opacity=.12+Math.sin(n.t*10)*.04;for(const o of e.targets())o.pos.distanceTo(t.pos)<a+o.radius&&o.fieldTick(i.stressPerSec*s,s)},n.cancel=n.release,n.busy=()=>n.on,n.blocks=()=>n.on&&i.blocksPulses,n},multiJump(i,t,e){return{press:()=>t.tryJump(),update(){},cancel(){},busy:()=>!1}},lockOn(i,t,e){return{press:()=>e.cycleLock(i.range),update(){},cancel(){},busy:()=>!1}}};function li(i,t){let e=i-t;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}function Wx(i,t,e){const n={};for(const[s,r]of Object.entries(i)){const a=Vx[r.type];if(!a)throw new Error("Unknown ability type "+r.type);n[s]=a(r,t,e),n[s].cfg=r}return n}class Xx{constructor(t,e){this.hero=t,this.game=e,this.st=t.stats,this.rig=t.model(),this.anim=new us(this.rig),e.scene.add(this.rig.root),this.pos=new P,this.vel=new P,this.facing=Math.PI,this.radius=this.st.radius,this.height=this.st.height,this.grounded=!0,this.airJumps=this.st.airJumps,this.chill=this.st.startChill,this.action=null,this.hitT=0,this.invuln=0,this.t=0,this.lungeV=null,this.speedK=0,this.jumpCount=0,this.kit=Wx(t.kit,this,e);const n=new Ut(new Te(1.4,1.4).rotateX(-Math.PI/2),new de({map:Vh(),transparent:!0,depthWrite:!1}));e.scene.add(n),this.shadow=n}get maxChill(){return this.st.maxChill}addChill(t){this.chill=Math.min(this.maxChill,this.chill+t)}busy(){const t=this.kit;return t.strike.busy()||t.blast.busy()||t.field.busy()||this.hitT>0}pushVel(t,e){this.lungeV=t.clone().multiplyScalar(e)}aimTarget(t){const e=this.game;if(e.lock&&!e.lock.calmed&&e.lock.pos.distanceTo(this.pos)<t)return e.lock;let n=null,s=1e9;for(const r of e.targets()){const a=r.pos.distanceTo(this.pos);if(a>t)continue;const o=Math.abs(li(Math.atan2(r.pos.x-this.pos.x,r.pos.z-this.pos.z),this.facing)),l=a+o*4;o<1.2&&l<s&&(s=l,n=r)}return n}faceTarget(){const t=this.aimTarget(Yx());t&&(this.facing=Math.atan2(t.pos.x-this.pos.x,t.pos.z-this.pos.z))}tryJump(){this.hitT>0||(this.grounded?(this.vel.y=this.st.jumpV,this.grounded=!1,this.airJumps=this.st.airJumps,this.game.sfx.play("jump"),this.jumpCount++):this.airJumps>0&&(this.airJumps--,this.vel.y=this.st.airJumpV,this.game.sfx.play("jump"),this.game.fx.ring(this.pos,3800954,.2,1.6,.35,0),this.game.popup("WHOOSH!",this.pos),this.jumpCount++))}hurt(t,e,n=6){return this.invuln>0?!1:(this.game.addPanic(t),this.invuln=.7,this.hitT=.3,this.lastHurtT=this.t,this.kit.strike.cancel(),e&&(this.vel.x=e.x*n,this.vel.z=e.z*n),this.vel.y=Math.max(this.vel.y,3),this.grounded=!1,this.game.sfx.play("hit"),this.game.fx.burst(this.pos.clone().setY(this.pos.y+1.2),16722902,10,5,.5),this.game.shake(.3),!0)}update(t,e,n){const s=this.st,r=this.game,a=this.kit;this.t+=t,this.hitT=Math.max(0,this.hitT-t),this.invuln=Math.max(0,this.invuln-t);for(const T of["field"])e.released.has(T)&&a[T].release?.(!1);for(const T of["jump","strike","blast","field","lock"])e.pressed.has(T)&&a[T].press();for(const T of Object.keys(a))a[T].update(t,e.held[T]);const o=new P(-Math.sin(n),0,-Math.cos(n)),l=new P(Math.cos(n),0,-Math.sin(n)),c=o.multiplyScalar(e.move.y).addScaledVector(l,e.move.x),f=Math.min(1,c.length());let d=s.speed*f;a.field.busy()?d*=.45:(a.strike.busy()||a.blast.busy())&&(d*=.25),this.hitT>0&&(d=0);const h=f>.01?c.normalize().multiplyScalar(d):new P,u=(this.grounded?s.accel:s.accel*.45)*t;if(this.hitT<=0){const T=h.x-this.vel.x,M=h.z-this.vel.z,S=Math.hypot(T,M);S>u?(this.vel.x+=T/S*u,this.vel.z+=M/S*u):(this.vel.x=h.x,this.vel.z=h.z)}else this.vel.x*=1-4*t,this.vel.z*=1-4*t;this.lungeV&&(this.vel.x=this.lungeV.x,this.vel.z=this.lungeV.z,this.lungeV=null),f>.1&&!this.busy()&&(this.facing=qx(this.facing,Math.atan2(c.x,c.z),1-Math.exp(-14*t))),r.lock&&(a.field.busy()||a.blast.busy())&&(this.facing=Math.atan2(r.lock.pos.x-this.pos.x,r.lock.pos.z-this.pos.z));const m=a.field.busy();this.vel.y-=s.gravity*t*(m&&this.vel.y<0?.25:1),this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t,this.pos.y+=this.vel.y*t,r.col.resolve(this.pos,this.radius,this.height);const v=r.col.groundAt(this.pos.x,this.pos.z,this.radius,this.pos.y);this.pos.y<=v?(this.pos.y=v,this.vel.y<0&&(this.vel.y=0),this.grounded||(this.grounded=!0,this.airJumps=s.airJumps)):this.pos.y>v+.05&&(this.grounded=!1),this.pos.y<-5&&(this.pos.copy(r.checkpointPos()),this.vel.set(0,0,0)),this.speedK=Math.hypot(this.vel.x,this.vel.z)/s.speed;const g=this.hitT>0||this.busy()?0:Math.min(1,this.speedK);g>.05&&this.addChill(s.moveChillPerSec*g*t);let p;this.hitT>0?p=Bt.hit(this.t,1-this.hitT/.3):this.action?p=Bt[this.action.pose](this.t,Math.min(1,this.action.k)):this.grounded?this.speedK>.08?p=Bt.run(this.t,Math.min(1,this.speedK)):p=Bt.idle(this.t):p=Bt.jump(this.t,this.vel.y),this.anim.apply(p,t,this.action?22:14),this.rig.root.position.copy(this.pos),this.rig.root.rotation.y=this.facing,this.shadow.position.set(this.pos.x,v+.03,this.pos.z),this.shadow.material.opacity=Math.max(.15,1-(this.pos.y-v)*.2);const y=a.field.busy()?.55:0;this.rig.aura.material.opacity+=(y-this.rig.aura.material.opacity)*Math.min(1,t*6),this.rig.emblemGlow.material.opacity=.12+this.chill/this.maxChill*.2+Math.sin(this.t*3)*.04,this.rig.root.visible=!(this.invuln>0&&Math.floor(this.t*20)%2===0&&this.hitT<=0)}}function Yx(){return 5}function qx(i,t,e){return i+li(t,i)*e}const Oe={selfLit:.22},Xh=["#e0b08c","#c68a62","#9a6643","#6e472e","#f1c9a5"],Zx=[3894952,11031867,9079354,5979018,3115651,10104650,7039856],Kx=[2237754,3812898,1973794,2898474],Jx=[2759184,1118481,6965792,10123840,3811882],Rs=(i,t)=>i[Math.floor(t*i.length)%i.length];let Vr=1;const si=()=>(Vr=Vr*16807%2147483647)/2147483647;function $x(i){Vr=1e3+i*77;const t=Rs(Xh,si()),e=Zt(t,Oe),n=Zt(Rs(Zx,si())),s=Zt(Rs(Kx,si())),r=Zt(Rs(Jx,si()));return Ys({selfLit:Oe.selfLit,scale:.92+si()*.12,bulk:.95+si()*.15,colors:{torso:n,pelvis:s,shoulder:n,upperArm:n,glove:e,thigh:s,shin:s,boot:Zt(1381658,Oe),skin:e,skinMat:e},head:{tex:ul(t),scaleY:1.1},extras(o){Ht(new Se(o.headR*1.06,12,8,0,Math.PI*2,0,.45*Math.PI),r,0,.01,-.01,o.head),si()>.5&&Ht(new se(.3,.24,.1),Zt(3355460,Oe),0,.1,-.17,o.j.chest)}})}function Yh(i){Vr=5e3+i*31;const t=Rs(Xh,si()),e=Zt(t,Oe),n=Zt(1446428,Oe),s=Zt(1776420,Oe),r=ke(16722902);return Ys({selfLit:Oe.selfLit,scale:1.02,bulk:1.15,colors:{torso:n,pelvis:s,shoulder:n,upperArm:n,glove:Zt(2236962,Oe),thigh:s,shin:s,boot:Zt(789518,Oe),skin:e,skinMat:e},head:{tex:ul(t),scaleY:1.1},extras(o){Ht(new Se(o.headR*1.18,12,10,Math.PI-1.2,Math.PI+2.4,0,.7*Math.PI),n,0,0,-.01,o.head);const l=Ht(new se(.2,.035,.05),r,0,.012,.125,o.head);for(const c of[-1,1])Ht(new se(.02,.3,.02),r,c*.12,.12,.15,o.j.chest);Ht(new se(.4,.02,.02),r,0,-.02,.16,o.j.chest),o.visor=l}})}function Qx(i){const t=Yh(i+900),e=ke(2287359);for(const r of[-1,1])Ht(new se(.03,.03,.3),e,r*.2,.2,0,t.j.chest);Ht(new Pi(.12,.012,6,16),e,0,.3,0,t.head).rotation.x=Math.PI/2;const n=Ht(new Zr(.09,1),ke(16722902),0,-.12,.06,t.j.handR),s=We(16722902,.55,.7);return n.add(s),t.orb=n,t}function jx(){const i=Zt(8015924,Oe),t=Zt(1709088,Oe),e=Zt(1380890,Oe),n=ke(16722902),s=Zt(3024440,Oe),r=Ys({selfLit:Oe.selfLit,scale:1.9,bulk:1.45,colors:{torso:t,pelvis:e,shoulder:s,upperArm:t,glove:s,thigh:e,shin:s,boot:Zt(657932,Oe),skin:i,skinMat:i},head:{tex:ul("#7a5034"),scaleY:1.05},extras(o){for(const l of[-1,1]){const c=Ht(new se(.26,.12,.26),s,0,.08,0,o.j["arm"+(l>0?"L":"R")]);c.rotation.z=l*.35,Ht(new se(.2,.03,.03),n,0,.14,.12,o.j["arm"+(l>0?"L":"R")]),Ht(new Se(.1,8,6),s,0,-.07,.01,o.j["hand"+(l>0?"L":"R")]).scale.set(1,1.1,1),Ht(new Se(.03,6,4),n,0,-.12,.08,o.j["hand"+(l>0?"L":"R")])}o.visor=Ht(new se(.24,.045,.06),n,0,.015,.12,o.head),Ht(new se(.34,.28,.06),s,0,.14,.15,o.j.chest),Ht(new Pi(.07,.015,6,16),n,0,.15,.185,o.j.chest),Ht(new Se(o.headR*1.04,10,8,0,Math.PI*2,0,.35*Math.PI),Zt(1118481,Oe),0,.01,0,o.head)}}),a=We(16722902,5,.18);return a.position.y=2.2,r.root.add(a),r.aura=a,r}function t_(){const i=new Ve,t=new Ve;i.add(t),Ht(new sl(.45,0),Zt(2366510,{flatShading:!0,selfLit:.2}),0,0,0,t).scale.set(1,.7,1);const n=Ht(new Pi(.62,.05,6,20),ke(16722902),0,0,0,t);n.rotation.x=Math.PI/2;const s=Ht(new Se(.14,10,8),ke(16722902),0,0,.36,t);for(const a of[-1,1]){const o=Ht(new se(.5,.04,.16),Zt(3813444,Oe),a*.62,.1,0,t);o.rotation.z=a*.3}const r=We(16722902,1.6,.5);return t.add(r),{root:i,body:t,ring:n,eye:s,glow:r,isDrone:!0}}const Rn={selfLit:.28},Kc=`
vec3 suitColor(vec3 p){
  vec3 J = vec3(0.03,0.025,0.035); vec3 T = vec3(0.16,0.16,0.17); vec3 M = vec3(1.0,0.12,0.75);
  float front = smoothstep(-0.02,0.04,p.z);
  float open = front*(1.0 - smoothstep(0.04 + (p.y+0.29)*0.12, 0.05 + (p.y+0.29)*0.12, abs(p.x)));
  float line1 = 1.0 - smoothstep(0.0,0.008, abs(abs(p.x) - 0.12 + p.y*0.25));
  float line2 = 1.0 - smoothstep(0.0,0.006, abs(p.y + 0.12 - abs(p.x)*0.4));
  return mix(J, T, open);
}
vec3 suitGlow(vec3 p){
  vec3 M = vec3(1.0,0.12,0.75);
  float front = smoothstep(-0.02,0.04,p.z);
  float open = front*(1.0 - smoothstep(0.04 + (p.y+0.29)*0.12, 0.05 + (p.y+0.29)*0.12, abs(p.x)));
  float line1 = 1.0 - smoothstep(0.0,0.008, abs(abs(p.x) - 0.12 + p.y*0.25));
  float line2 = 1.0 - smoothstep(0.0,0.006, abs(p.y + 0.12 - abs(p.x)*0.4));
  return (1.0-open)*max(line1,line2)*M*0.9;
}`,e_=`
vec3 suitColor(vec3 p){
  vec3 J = vec3(0.03,0.025,0.035); vec3 M = vec3(1.0,0.12,0.75);
  return J;
}
vec3 suitGlow(vec3 p){ float l = 1.0 - smoothstep(0.0,0.008, abs(p.x + p.y*0.15)); return l*vec3(1.0,0.12,0.75)*0.9; }`;function n_(i=1.18){const t=Zt(9066038,Rn),e=Zt(1182996,Rn),n=Zt(1710112,Rn),s=Zt(657932,Rn),r=Zt(1839128,Rn),a=Zt(2762032,Rn),o=ke(16722902),l=Vn(e_,Rn),c=Ys({selfLit:Rn.selfLit,scale:i,bulk:1.12,colors:{torso:Vn(Kc,Rn),pelvis:n,shoulder:l,neck:t,upperArm:l,glove:t,thigh:n,shin:n,boot:s,skin:t,skinMat:t},head:{tex:vx(),scaleY:1.1},extras(d){const{j:h,head:u,headR:m,parts:v}=d;v.abdomen.material=Vn(Kc,Rn);for(const y of[-1,1])Ht(new se(.12,.13,.02),e,y*.11,.33,.02,h.chest).rotation.set(-.2,y*.5,y*.3);h.foreL.children[0].material=l;for(let y=0;y<4;y++)Ht(new Ke(.07-y*.003,.068-y*.003,.055,10),a,0,-.04-y*.06,0,h.foreR);h.foreR.children[0].material=a,h.handR.children.forEach(y=>y.material=a),d.knuckles=[];for(let y=0;y<3;y++){const T=Ht(new Se(.014,6,4),o,-.03+y*.03,-.1,.03,h.handR);d.knuckles.push(T)}const g=We(16722902,.5,.7);g.position.set(0,-.08,.04),h.handR.add(g),d.handGlow=g;for(const y of[-1,1]){const T=new Ut(new Se(.02,8,6),o);T.position.copy(Fo(m*.99,.47*Math.PI,y*.36)),T.scale.set(1.2,.6,.5),u.add(T);const M=We(16726745,.1,.9);M.position.copy(T.position).multiplyScalar(1.04),u.add(M)}Ht(new Se(m*1.05,16,8,0,Math.PI*2,0,.36*Math.PI),r,0,.005,-.01,u),Ht(new Se(m*1.06,16,8,Math.PI-.4,Math.PI+.8,0,.6*Math.PI),r,0,0,-.01,u);const p=ke(13639600);for(let y=0;y<16;y++){const T=.05+y%3*.12+Math.random()*.05,M=y/16*Math.PI*2,S=new P(Math.cos(M)*Math.sin(T*Math.PI),Math.cos(T*Math.PI),Math.sin(M)*Math.sin(T*Math.PI)).multiplyScalar(m);if(S.z>.06&&S.y<m*.8)continue;const E=.1+Math.random()*.05,R=new Ve;R.position.copy(S),u.add(R),R.quaternion.setFromUnitVectors(new P(0,1,0),S.clone().normalize().add(new P(0,.6,-.25)).normalize()),Ht(new Ci(.04,E,5),r,0,E/2,0,R),Ht(new Ci(.018,E*.38,5),p,0,E*.86,0,R)}}}),f=We(16722902,3.2,.25);return f.position.y=1.2*i,c.root.add(f),c.aura=f,c}const ve=new P,hi={chase:60,homeRadius:70,returnSpeed:1.6,droneHome:100,hotspotReset:120},dl={caster:{tele:.75,cdMin:2.4,cdMax:3.2,speed:15,panic:6,spread:.025,range:24},drone:{tele:.45,cdMin:2.2,cdMax:3.2,speed:13,panic:6,spread:.08,range:24}},i_=new P(0,1,0),Hs={follow:75,giveUp:115};function qh(i,t){const e=i.game.col.bounds,n=3;i.pos.x=Math.min(e.maxX-n,Math.max(e.minX+n,i.pos.x)),i.pos.z=Math.min(e.maxZ-n,Math.max(e.minZ+n,i.pos.z)),(i.pos.y<-3||i.pos.y>30)&&(i.pos.copy(i.arena).setY(0),i.vel.set(0,0,0));const s=i.game,r=Math.hypot(i.pos.x-i.arena.x,i.pos.z-i.arena.z);if(s.stats.bossMaxOut=Math.max(s.stats.bossMaxOut||0,+r.toFixed(1)),i._stT=(i._stT||0)+t,i._stP||(i._stP=i.pos.clone()),i._stT>1.5){const a=i._stP.distanceTo(i.pos);i.wantMove&&a<.6&&(i.sidestep=1,i.sideSign=-(i.sideSign||1),s.stats.bossUnstuck=(s.stats.bossUnstuck||0)+1),i._stT=0,i._stP.copy(i.pos)}i.sidestep=Math.max(0,(i.sidestep||0)-t)}function Oo(i,t){if(!(i.sidestep>0))return t;const e=t.clone().sub(i.pos).setY(0).normalize();return i.pos.clone().add(new P(e.z*i.sideSign,0,-e.x*i.sideSign).multiplyScalar(6)).addScaledVector(e,2)}function Zh(i,t,e){const n=i.col.bounds;return t>n.minX+3&&t<n.maxX-3&&e>n.minZ+3&&e<n.maxZ-3&&i.col.groundAt(t,e,.8,20)<.3}function Kh(i,t,e,n,s){const r=e.clone().sub(t).normalize().applyAxisAngle(i_,(Math.random()-.5)*2*n.spread);i.proj.spawn({pos:t,dir:r,speed:n.speed,color:16722902,size:.26,owner:"enemy",panic:i.boss?4:n.panic,life:2.6,src:s}),i.stats.boltsFired=(i.stats.boltsFired||0)+1,i.sfx.play("hype")}function Jh(i,t){return t<hi.chase&&i.pos.distanceTo(i.home)<hi.homeRadius}let s_=0;function r_(){const i=new Ve,t=(s,r)=>new Yr(new Vs({color:s,transparent:!0,opacity:r,depthTest:!1,toneMapped:!1})),e=t(1050648,.7);e.scale.set(1,.12,1);const n=t(16722902,1);return n.center.set(0,.5),n.position.x=-.48,n.scale.set(.96,.08,1),e.renderOrder=n.renderOrder=10,i.add(e,n),i.userData.fill=n,i}class di{constructor(t,e,n,s={}){this.game=t,this.kind=e,this.id=++s_,this.pos=n.clone(),this.vel=new P,this.home=n.clone(),this.radius=.45,this.height=1.8,this.centerY=1,this.facing=Math.random()*6.28,this.t=Math.random()*10,this.seed=Math.random()*10,this.calmed=!1,this.calmT=0,this.stun=0,this.stagger=0,this.cd=1+Math.random(),this.state="idle",this.stateT=0,this.boss=!1,this.removed=!1,this.hotspot=s.hotspot||null,this.grounded=!0,this.flying=!1}attach(t){if(this.root=t,this.game.scene.add(t),this.boss||(this.bar=r_(),this.bar.position.y=this.height*(this.barY||1.15),t.add(this.bar)),this.calmGlow=We(3800954,this.height*1.6,0),this.calmGlow.position.y=this.height*.5,t.add(this.calmGlow),this.stressGlow=We(16722902,this.height*1.2,.18),this.stressGlow.position.y=this.height*.55,t.add(this.stressGlow),!this.flying){const e=new Ut(new Te(1,1).rotateX(-Math.PI/2),new de({map:Vh(),transparent:!0,depthWrite:!1}));e.scale.setScalar(this.radius*3.2),e.position.y=.04,t.add(e)}}get stressK(){return this.stress/this.maxStress}calmHit(t,e={}){if(this.calmed||this.invuln>0)return;const n=this.dazed>0?1.6:1;this.stress=Math.max(0,this.stress-t*n*(this.resist||1)),this.flashT=.12,e.stagger&&!this.boss&&(this.stagger=Math.max(this.stagger,e.stagger),this.state==="windup"&&this.setState("idle")),e.knock&&e.dir&&!this.boss&&(this.vel.x+=e.dir.x*e.knock,this.vel.z+=e.dir.z*e.knock),e.dir&&this.boss&&(this.bossHitDir=e.dir),this.onHit?.(t,e),this.stress<=0&&this.becomeCalm()}fieldTick(t,e){this.calmed||(this.calmHit(t*(this.boss?.6:1),{}),this.boss?this.stun=Math.max(this.stun,this.stunResistT?0:.2):this.stun=Math.max(this.stun,.35))}becomeCalm(){if(this.calmed)return;this.calmed=!0,this.calmT=0,this.state="calm";const t=this.game;t.onCalmed(this),t.fx.burst(this.pos.clone().setY(this.pos.y+this.centerY),3800954,22,5,.7,.9,4),t.fx.ring(this.pos,3800954,.2,3,.6),t.popup("WHOOSH!",this.pos.clone().setY(this.pos.y+this.height),!0),t.sfx.play("calm"),this.bar&&(this.bar.visible=!1),this.stressGlow.visible=!1}setState(t){this.state=t,this.stateT=0}moveToward(t,e,n,s=30){ve.subVectors(t,this.pos).setY(0);const r=ve.length();if(r<.05)return r;ve.multiplyScalar(e/r);const a=ve.x-this.vel.x,o=ve.z-this.vel.z,l=Math.hypot(a,o),c=s*n;return l>c?(this.vel.x+=a/l*c,this.vel.z+=o/l*c):(this.vel.x=ve.x,this.vel.z=ve.z),this.facing=Jc(this.facing,Math.atan2(ve.x,ve.z),1-Math.exp(-10*n)),r}physics(t,e=8){if(this.flying){this.pos.addScaledVector(this.vel,t);return}this.vel.y-=30*t,this.pos.addScaledVector(this.vel,t);const n=this.game.col.resolve(this.pos,this.radius,this.height),s=this.game.col.groundAt(this.pos.x,this.pos.z,this.radius,this.pos.y);return this.pos.y<=s?(this.pos.y=s,this.vel.y=0,this.grounded=!0):this.grounded=!1,n}damp(t,e=8){this.vel.x*=Math.exp(-e*t),this.vel.z*=Math.exp(-e*t)}faceDir(t,e,n=10){this.facing=Jc(this.facing,Math.atan2(t.x-this.pos.x,t.z-this.pos.z),1-Math.exp(-n*e))}commonUpdate(t){if(this.t+=t,this.stateT+=t,this.stun=Math.max(0,this.stun-t),this.stagger=Math.max(0,this.stagger-t),this.cd-=t,this.flashT=Math.max(0,(this.flashT||0)-t),this.invuln=Math.max(0,(this.invuln||0)-t),this.dazed=Math.max(0,(this.dazed||0)-t),this.bar){const e=this.bar.userData.fill;e.scale.x=.96*this.stressK,e.material.color.setHSL(.86-(1-this.stressK)*.5,1,.55),this.bar.visible=!this.calmed&&this.pos.distanceTo(this.game.player.pos)<30}this.calmed?(this.calmT+=t,this.calmGlow.material.opacity=Math.max(.15,.6-this.calmT*.1)):(this.stressGlow.material.opacity=.1+this.stressK*.25+(this.flashT>0?.5:0),this.stressGlow.material.color.set(this.flashT>0?10354586:16722902))}sync(){this.root.position.copy(this.pos),this.root.rotation.y=this.facing}playerInFront(t,e=1.2){const n=this.game.player;ve.subVectors(n.pos,this.pos);const s=Math.abs(ve.y);return ve.y=0,ve.length()<t&&s<1.6&&Math.abs(li(Math.atan2(ve.x,ve.z),this.facing))<e}remove(){this.removed||(this.removed=!0,this.game.scene.remove(this.root))}}const Jc=(i,t,e)=>i+li(t,i)*e;class $h extends di{constructor(t,e,n){super(t,"citizen",e,n),this.maxStress=this.stress=40,this.rig=$x(this.id),this.anim=new us(this.rig),this.attach(this.rig.root),this.wander=e.clone(),this.sync()}update(t){this.commonUpdate(t);const e=this.game.player;let n;this.calmed?(this.damp(t),this.physics(t),n=Bt.sit(this.t)):this.stun>0||this.stagger>0?(this.damp(t),this.physics(t),n=Bt.dazed(this.t)):this.state==="windup"?(this.damp(t),this.physics(t),this.faceDir(e.pos,t),n=Bt.windup(this.t,this.stateT),this.stateT>.55&&(this.playerInFront(2.4)&&e.hurt(6,e.pos.clone().sub(this.pos).setY(0).normalize(),6),this.setState("recover"),this.cd=2.2)):this.state==="recover"?(this.damp(t),this.physics(t),n=Bt.punch(this.t,1),this.stateT>.35&&this.setState("idle")):e.pos.distanceTo(this.pos)<2.2&&this.cd<=0?(this.setState("windup"),n=Bt.windup(this.t,0)):((this.wander.distanceTo(this.pos)<1||this.stateT>3)&&(this.wander.set(this.home.x+(Math.random()-.5)*14,0,this.home.z+(Math.random()-.5)*14),this.stateT=0),Math.sin(this.t*.9+this.seed)>-.3?(this.moveToward(this.wander,4.2,t),n=Bt.run(this.t,.7)):(this.damp(t),this.faceDir(e.pos,t,4),n=Bt.stressed(this.t,0,this.seed)),this.physics(t)),this.anim.apply(n,t),this.sync()}}class Qh extends di{constructor(t,e,n){super(t,"goon",e,n),this.maxStress=this.stress=75,this.rig=Yh(this.id),this.anim=new us(this.rig),this.attach(this.rig.root),this.sync()}update(t){this.commonUpdate(t);const e=this.game.player;let n;if(this.calmed)this.calmT<4?(ve.subVectors(this.pos,e.pos).setY(0).normalize().multiplyScalar(5).add(this.pos),this.moveToward(ve.clone(),2.2,t),n=Bt.run(this.t*.6,.25)):(this.damp(t),n=Bt.sit(this.t)),this.physics(t),this.rig.visor&&this.rig.visor.material.color.set(3800954);else if(this.stun>0||this.stagger>0)this.damp(t),this.physics(t),n=Bt.dazed(this.t);else if(this.state==="windup")this.damp(t),this.physics(t),this.faceDir(e.pos,t,6),n=Bt.windup(this.t,this.stateT),this.stressGlow.material.opacity=.6,this.stateT>.6&&(this.playerInFront(2.6)&&e.hurt(11,e.pos.clone().sub(this.pos).setY(0).normalize(),8),this.setState("recover"),this.cd=1.5);else if(this.state==="recover")this.damp(t),this.physics(t),n=Bt.punch(this.t,1),this.stateT>.45&&this.setState("idle");else{const s=e.pos.distanceTo(this.pos);s<2.2&&this.cd<=0?(this.setState("windup"),n=Bt.windup(this.t,0),this.physics(t)):!this.returning&&Jh(this,s)?(s>1.8?this.moveToward(e.pos,5.2,t):(this.damp(t),this.faceDir(e.pos,t)),n=this.vel.length()>.5?Bt.run(this.t,.8):Bt.stressed(this.t,0,this.seed),this.physics(t)):(this.returning=this.pos.distanceTo(this.home)>4,this.moveToward(this.home,hi.returnSpeed,t),n=Bt.run(this.t*.6,.3),this.physics(t),s<12&&(this.returning=!1))}this.anim.apply(n,t),this.sync()}}class pl extends di{constructor(t,e,n){super(t,"drone",e,n),this.flying=!0,this.maxStress=this.stress=45,this.radius=.7,this.height=1.2,this.centerY=0,this.barY=1.1,this.reachY=3.2,this.m=t_(),this.attach(this.m.root),this.calmGlow.position.y=0,this.stressGlow.position.y=0,this.hoverY=e.y,this.orbitA=Math.random()*6.28,this.cd=1.5+Math.random()*1.5,this.sync()}update(t){this.commonUpdate(t);const e=this.game.player,n=this.game;if(this.calmed){const s=n.col.groundAt(this.pos.x,this.pos.z,.5,this.pos.y)+.5;this.pos.y=Math.max(s,this.pos.y-t*1.5),this.vel.multiplyScalar(Math.exp(-3*t)),this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t,this.m.ring.material.color.set(3800954),this.m.eye.material.color.set(3800954),this.m.glow.material.color.set(3800954),this.m.body.rotation.y+=t*.5}else if(this.stun>0||this.stagger>0)this.aimT=0,this.m.eye.scale.setScalar(1),this.vel.multiplyScalar(Math.exp(-4*t)),this.pos.addScaledVector(this.vel,t),this.m.body.rotation.z=Math.sin(this.t*12)*.3;else{this.orbitA+=t*.6;const s=9,r=e.pos.x+Math.cos(this.orbitA)*s,a=e.pos.z+Math.sin(this.orbitA)*s,o=e.pos.distanceTo(this.home),l=o<hi.droneHome?new P(r,Math.max(e.pos.y+3.2,this.hoverY-2),a):this.home.clone();ve.subVectors(l,this.pos);const c=Math.min(o<hi.droneHome?6:2.5,ve.length()*2);ve.normalize().multiplyScalar(c),this.vel.lerp(ve,1-Math.exp(-2*t)),this.pos.addScaledVector(this.vel,t),this.facing=Math.atan2(e.pos.x-this.pos.x,e.pos.z-this.pos.z),this.m.body.rotation.z=Math.sin(this.t*2)*.1;const f=dl.drone;if(this.aimT>0){this.aimT-=t;const d=1-this.aimT/f.tele;this.m.eye.scale.setScalar(1+d*1.2),this.m.glow.scale.setScalar(1.6*(1+d)),this.aimT<=0&&(this.m.eye.scale.setScalar(1),this.m.glow.scale.setScalar(1.6),Kh(n,this.pos.clone(),e.pos.clone().setY(e.pos.y+1),f,this),this.cd=f.cdMin+Math.random()*(f.cdMax-f.cdMin))}else this.cd<=0&&this.pos.distanceTo(e.pos)<f.range&&(this.aimT=f.tele,this.telegraphs=(this.telegraphs||0)+1,n.stats.telegraphs=(n.stats.telegraphs||0)+1)}this.m.body.position.y=Math.sin(this.t*3)*.12,this.m.ring.rotation.z+=t*3,n.col.resolve(this.pos,.5,.6),this.sync()}}class ml extends di{constructor(t,e,n){super(t,"caster",e,n),this.maxStress=this.stress=55,this.rig=Qx(this.id),this.anim=new us(this.rig),this.attach(this.rig.root),this.cd=1.5+Math.random()*1.5,this.strafe=Math.random()<.5?1:-1,this.aimLine=new Ut(new Te(.18,1).translate(0,.5,0).rotateX(-Math.PI/2),new de({color:16722902,transparent:!0,opacity:.5,depthWrite:!1,toneMapped:!1,blending:De})),this.aimLine.visible=!1,t.scene.add(this.aimLine),this.aimAt=new P,this.sync()}update(t){this.commonUpdate(t);const e=this.game.player,n=this.game;let s;const r=e.pos.distanceTo(this.pos),a=dl.caster,o=this.rig.orb;if(this.aimLine.visible=!1,this.calmed)o.material.color.set(3800954),o.scale.setScalar(.6),this.rig.visor&&this.rig.visor.material.color.set(3800954),this.calmT<4?(ve.subVectors(this.pos,e.pos).setY(0).normalize().multiplyScalar(5).add(this.pos),this.moveToward(ve.clone(),2.2,t),s=Bt.run(this.t*.6,.25)):(this.damp(t),s=Bt.sit(this.t)),this.physics(t);else if(this.stun>0||this.stagger>0)this.state==="aim"&&this.setState("idle"),this.damp(t),this.physics(t),s=Bt.dazed(this.t),o.scale.setScalar(1);else if(this.state==="aim"){this.damp(t),this.physics(t),this.faceDir(e.pos,t,8);const l=this.stateT/a.tele;s=Bt.hype(this.t,Math.min(.29,l*.3)),this.stateT<a.tele-.15&&this.aimAt.copy(e.pos).setY(e.pos.y+1),o.scale.setScalar(1+l*1.4),this.stressGlow.material.opacity=.3+l*.5;const c=Math.min(a.range,this.pos.distanceTo(this.aimAt));if(this.aimLine.visible=!0,this.aimLine.position.copy(this.pos).setY(this.pos.y+.06),this.aimLine.rotation.y=Math.atan2(this.aimAt.x-this.pos.x,this.aimAt.z-this.pos.z),this.aimLine.scale.set(1,1,c),this.aimLine.material.opacity=.25+.35*Math.abs(Math.sin(this.stateT*18)),this.stateT>=a.tele){const f=this.pos.clone().add(new P(Math.sin(this.facing)*.5,1.45,Math.cos(this.facing)*.5));Kh(n,f,this.aimAt,a,this),o.scale.setScalar(1),this.setState("recover"),this.cd=a.cdMin+Math.random()*(a.cdMax-a.cdMin)}}else if(this.state==="recover")this.damp(t),this.physics(t),s=Bt.hype(this.t,.5),this.stateT>.4&&this.setState("idle");else{o.scale.setScalar(1+Math.sin(this.t*6)*.08);const l=()=>n.col.raycast(this.pos.x,this.pos.y+1.5,this.pos.z,e.pos.x,e.pos.y+1,e.pos.z)>=1;if(!this.returning&&Jh(this,r))if(this.cd<=0&&r<a.range&&r>3&&l())this.setState("aim"),this.aimAt.copy(e.pos).setY(e.pos.y+1),n.stats.telegraphs=(n.stats.telegraphs||0)+1,s=Bt.hype(this.t,0),this.physics(t);else{ve.subVectors(e.pos,this.pos).setY(0).normalize();const c=new P(ve.z,0,-ve.x).multiplyScalar(this.strafe);let f;r>13?f=e.pos:r<6?f=this.pos.clone().addScaledVector(ve,-4):f=this.pos.clone().addScaledVector(c,3),Math.random()<t*.3&&(this.strafe*=-1),this.moveToward(f,r<6?4.4:3.6,t),this.faceDir(e.pos,t,6),this.physics(t),s=this.vel.length()>.5?Bt.run(this.t,.6):Bt.stressed(this.t,0,this.seed)}else this.returning=this.pos.distanceTo(this.home)>4,this.moveToward(this.home,hi.returnSpeed,t),this.physics(t),s=Bt.run(this.t*.6,.3),r<12&&(this.returning=!1)}this.anim.apply(s,t),this.sync()}remove(){super.remove(),this.game.scene.remove(this.aimLine)}}class jh extends di{constructor(t,e,n){super(t,"enforcer",e),this.boss=!0,this.name="AMP ENFORCER",this.maxStress=this.stress=700,this.radius=1.1,this.height=3.4,this.centerY=1.9,this.reachY=2.6,this.arena=n,this.resist=1,this.rig=jx(),this.anim=new us(this.rig),this.attach(this.rig.root),this.cd=2,this.chargeDir=new P,this.sync(),this.tele=new Ut(new Te(2.2,1).translate(0,.5,0).rotateX(-Math.PI/2),new de({color:16722902,transparent:!0,opacity:.35,depthWrite:!1,toneMapped:!1})),this.tele.visible=!1,t.scene.add(this.tele),this.slams=0}update(t){this.commonUpdate(t);const e=this.game.player,n=this.game;let s;const r=e.pos.distanceTo(this.pos);if(this.calmed)this.damp(t),this.physics(t),s=Bt.sit(this.t),this.tele.visible=!1,this.rig.visor&&this.rig.visor.material.color.set(3800954),this.rig.aura.material.color.set(3800954);else if(this.dazed>0)this.damp(t,4),this.physics(t),s=Bt.dazed(this.t),Math.random()<t*6&&n.fx.burst(this.pos.clone().setY(3.6),2287359,1,1.5,.5,.6,2);else if(this.state==="tele")this.damp(t),this.physics(t),this.faceDir(e.pos,t,4),this.chargeDir.set(Math.sin(this.facing),0,Math.cos(this.facing)),s=Bt.windup(this.t,this.stateT),this.tele.visible=!0,this.tele.position.copy(this.pos).setY(.25),this.tele.rotation.y=this.facing,this.tele.scale.set(1,1,22),this.tele.material.opacity=.2+Math.sin(this.stateT*20)*.15,this.stateT>.9&&(this.setState("charge"),n.sfx.play("charge"),this.tele.visible=!1);else if(this.state==="charge"){this.vel.x=this.chargeDir.x*22,this.vel.z=this.chargeDir.z*22,s=Bt.charge(this.t,0);const a=this.physics(t);r<this.radius+e.radius+.4&&e.hurt(16,this.chargeDir.clone(),14),(a||this.stateT>1.3)&&(this.vel.set(0,0,0),a?(this.dazed=2.6,n.shake(.5),n.sfx.play("slam"),n.showToast("DAZED! CALM HIM!")):(this.dazed=1.1,n.showToast("WINDED!",.8)),this.setState("idle"),this.cd=1.4),Math.random()<t*20&&n.fx.burst(this.pos.clone().setY(.3),16722902,1,2,.6)}else if(this.state==="slam"){if(this.damp(t),this.physics(t),s=Bt.slam(this.t,this.stateT/.9),this.stateT>.55&&!this.slamDone){this.slamDone=!0,n.sfx.play("slam"),n.shake(.4);const a=this.pos.clone().addScaledVector(new P(Math.sin(this.facing),0,Math.cos(this.facing)),1.5);n.fx.ring(a,16722902,.5,5,.5),e.pos.distanceTo(a)<5&&e.pos.y-a.y<1.2&&!n.player.kit.field.blocks()&&e.hurt(14,e.pos.clone().sub(a).setY(0).normalize(),10)}this.stateT>.95&&(this.setState("idle"),this.cd=1.2)}else this.tele.visible=!1,this.wantMove=!1,Math.hypot(e.pos.x-this.arena.x,e.pos.z-this.arena.z)>Hs.follow?(this.wantMove=!0,this.moveToward(Oo(this,this.arena),3.2,t,10),this.physics(t),s=Bt.run(this.t*.6,.4)):this.cd<=0&&r<4.5?(this.setState("slam"),this.slamDone=!1,s=Bt.slam(this.t,0),this.physics(t)):this.cd<=0&&r>6&&r<30?(this.setState("tele"),s=Bt.windup(this.t,0),this.physics(t)):(r>3?(this.wantMove=!0,this.moveToward(Oo(this,e.pos),4.6,t,10)):(this.damp(t),this.faceDir(e.pos,t)),this.physics(t),s=this.vel.length()>.5?Bt.run(this.t*.7,.5):Bt.taunt(this.t));if(!this.calledBackup&&!this.calmed&&this.stressK<.5){this.calledBackup=!0,n.showToast("HE CALLED HYPE CASTERS!");for(const a of[.6,2.6]){let o=this.pos.x+Math.cos(a)*10,l=this.pos.z+Math.sin(a)*10;Zh(n,o,l)||(o=this.pos.x,l=this.pos.z),n.addEnemy(new ml(n,new P(o,0,l),{}))}}qh(this,t),this.anim.apply(s,t,12),this.sync()}remove(){super.remove(),this.game.scene.remove(this.tele)}}class tf extends di{constructor(t,e,n){super(t,"amp",e),this.boss=!0,this.name="THE AMP",this.maxStress=this.stress=1200,this.radius=.7,this.height=2.2,this.centerY=1.3,this.reachY=2.4,this.arena=n,this.rig=n_(),this.anim=new us(this.rig),this.attach(this.rig.root),this.phase=1,this.cd=2,this.pulseCd=4,this.summonCd=0,this.strafeA=0,this.closeT=0,this.volley=0,this.sync()}onHit(){this.state==="overdrive"&&this.game.player.pos.distanceTo(this.pos)<3}update(t){this.commonUpdate(t);const e=this.game.player,n=this.game;let s;const r=e.pos.distanceTo(this.pos),a=this.stressK,o=a>.66?1:a>.33?2:3;if(o!==this.phase&&!this.calmed&&(this.phase=o,this.invuln=1.2,this.setState("taunt"),n.showToast(o===2?"PHASE 2: OVERDRIVE!":"PHASE 3: DRONE SWARM!"),n.sfx.play("pulse"),n.flash(),o===3&&this.summon(2),this.pulseCd=2.5),this.calmed){this.damp(t),this.physics(t),s=Bt.sit(this.t),this.rig.aura.material.color.set(3800954),this.rig.handGlow.material.color.set(3800954);for(const l of this.rig.knuckles)l.material.color.set(3800954)}else if(this.stagger>0&&this.state!=="overdrive")this.damp(t),this.physics(t),s=Bt.hit(this.t,.5);else if(this.state==="taunt")this.damp(t),this.physics(t),this.faceDir(e.pos,t),s=Bt.taunt(this.t),this.stateT>1.2&&this.setState("idle");else if(this.state==="hype")this.damp(t),this.physics(t),this.faceDir(e.pos,t,8),s=Bt.hype(this.t,this.stateT/.5),this.stateT>.35&&this.volley>0&&(this.volley--,this.stateT=.2,this.fireHype()),this.volley<=0&&this.stateT>.5&&(this.setState("idle"),this.cd=o===1?1.6:2);else if(this.state==="overdrive")this.damp(t),this.physics(t),s=Bt.overdrive(this.t),this.rig.aura.material.opacity=.3+this.stateT*.5,this.stateT>1&&(this.rig.aura.material.opacity=.25,n.spawnPulse(this.pos,o===3?16:13),this.setState("idle"),this.cd=1,this.pulseCd=o===3?5.2:6.5,o===3&&Math.random()<.25&&(this.doublePulse=.9));else if(this.state==="blink"){if(s=Bt.taunt(this.t),this.rig.root.visible=this.stateT>.25,this.stateT>.25&&!this.blinked){this.blinked=!0;for(let l=0;l<10;l++){const c=Math.random()*6.28,f=e.pos.x+Math.cos(c)*11,d=e.pos.z+Math.sin(c)*11;if(Zh(n,f,d)){this.pos.set(f,0,d);break}}n.fx.burst(this.pos.clone().setY(1.2),16722902,16,5,.6)}this.stateT>.5&&(this.rig.root.visible=!0,this.setState("idle"),this.cd=.6)}else{this.pulseCd-=t,this.summonCd-=t,this.doublePulse&&(this.doublePulse-=t,this.doublePulse<=0&&(this.doublePulse=0,n.spawnPulse(this.pos,16))),this.closeT=r<3?this.closeT+t:Math.max(0,this.closeT-t),this.closeT>2.6?(this.closeT=0,this.blinked=!1,this.setState("blink"),n.fx.burst(this.pos.clone().setY(1.2),16722902,16,5,.6),n.sfx.play("hype")):o>=2&&this.pulseCd<=0?(this.setState("overdrive"),n.sfx.play("charge"),n.showToast("OVERDRIVE PULSE! JUMP or CALM FIELD!",1.2)):o===3&&this.summonCd<=0&&n.enemies.filter(h=>h.kind==="drone"&&!h.calmed).length<2?this.summon(2):this.cd<=0&&r<34&&(this.setState("hype"),this.volley=o===1?3:4,this.fireHype()),this.strafeA+=t*.35*(o===3?1.5:1);const l=10;this.wantMove=!0;const c=Math.hypot(e.pos.x-this.arena.x,e.pos.z-this.arena.z),f=c>Hs.follow?this.arena:e.pos,d=new P(f.x+Math.cos(this.strafeA)*l,0,f.z+Math.sin(this.strafeA)*l);this.moveToward(Oo(this,d),c>Hs.follow?3.5:5.2,t,12),this.faceDir(e.pos,t,8),this.physics(t),s=Bt.run(this.t*.6,.35)}qh(this,t),this.rig.handGlow.scale.setScalar(.5+Math.sin(this.t*8)*.1),this.anim.apply(s,t,14),this.sync()}fireHype(){const t=this.game,e=t.player,n=this.pos.clone().add(new P(Math.sin(this.facing)*.8,1.6,Math.cos(this.facing)*.8)),s=e.pos.clone().setY(e.pos.y+1).sub(n).normalize(),r=this.phase===1?0:(Math.random()-.5)*.3,a=s.applyAxisAngle(new P(0,1,0),r);t.proj.spawn({pos:n,dir:a,speed:14,color:16722902,size:.38,owner:"enemy",panic:4,life:2.6}),t.sfx.play("hype")}summon(t){this.summonCd=16;const e=this.game;for(let n=0;n<t;n++){const s=Math.random()*6.28;e.addEnemy(new pl(e,new P(this.pos.x+Math.cos(s)*4,5,this.pos.z+Math.sin(s)*4),{}))}e.fx.burst(this.pos.clone().setY(2),16722902,20,6,.7)}}class ef extends di{constructor(t,e){super(t,"core",e.group.position.clone()),this.boss=!0,this.name="AMP TOWER CORE",this.maxStress=this.stress=160,this.radius=1.6,this.height=3.6,this.centerY=2.6,this.reachY=3.2,this.obj=e,this.root=new Ve,this.root.position.copy(this.pos),t.scene.add(this.root),this.calmGlow=We(3800954,1,0),this.stressGlow=We(16722902,1,0),this.root.add(this.calmGlow,this.stressGlow)}update(t){this.commonUpdate(t),this.obj.orb.scale.setScalar(1+(this.flashT>0?.15:0)+Math.sin(this.t*6)*.04),this.game.city.setTowerCalm(1-this.stressK)}}const a_=Object.freeze(Object.defineProperty({__proto__:null,Amp:tf,BOLT:dl,BOSS_LEASH:Hs,Caster:ml,Citizen:$h,Drone:pl,Enemy:di,Enforcer:jh,Goon:Qh,LEASH:hi,TowerCore:ef},Symbol.toStringTag,{value:"Module"})),qs=`
vec3 G = vec3(0.02,0.25,0.03); vec3 K = vec3(0.006,0.007,0.009);
float scales(vec3 p){ return 0.9 + 0.1*sin(p.x*150.0)*sin(p.y*150.0+p.z*110.0); }
`,o_=qs+`
vec3 suitColor(vec3 p){
  float hw = 0.11 + (p.y+0.29)/0.58*0.13;
  float front = smoothstep(-0.1,0.0,p.z);
  float panel = front * (1.0 - smoothstep(hw-0.008, hw+0.008, abs(p.x)));
  float yoke = smoothstep(0.1,0.15,p.y);
  float m = max(panel, yoke);
  float edge = front*(1.0 - smoothstep(0.0,0.01, abs(abs(p.x)-hw)))*(1.0-yoke);
  return mix(K,G,m)*scales(p);
}
vec3 suitGlow(vec3 p){
  float hw = 0.11 + (p.y+0.29)/0.58*0.13;
  float front = smoothstep(-0.1,0.0,p.z);
  float yoke = smoothstep(0.1,0.15,p.y);
  float edge = front*(1.0 - smoothstep(0.0,0.01, abs(abs(p.x)-hw)))*(1.0-yoke);
  return edge*vec3(0.0);
}`,l_=qs+`
vec3 suitColor(vec3 p){
  float hw = 0.05 + (p.y+0.2)/0.4*0.06;
  float front = smoothstep(-0.04,0.03,p.z);
  float m = front*(1.0 - smoothstep(hw-0.008,hw+0.008,abs(p.x)));
  return mix(K,G,m)*scales(p);
}`,c_=qs+`
vec3 suitColor(vec3 p){
  float front = smoothstep(-0.02,0.05,p.z);
  float v = 0.02 + abs(p.x)*0.75;
  float band = front*(1.0 - smoothstep(0.028,0.036, abs(p.y - v)));
  float above = front*step(v, p.y);
  vec3 c = mix(K, G*0.9, above);
  return mix(c, vec3(0.06,0.55,0.08), band)*scales(p);
}
vec3 suitGlow(vec3 p){
  float front = smoothstep(-0.02,0.05,p.z);
  float v = 0.02 + abs(p.x)*0.75;
  return front*(1.0 - smoothstep(0.028,0.036, abs(p.y - v)))*vec3(0.06,0.3,0.08);
}`,$c=i=>qs+`
vec3 suitColor(vec3 p){
  float outer = smoothstep(0.02,0.045, p.x*${i.toFixed(1)});
  float m = outer*step(-0.17,p.y)*step(p.y,0.06 - abs(p.z)*0.6);
  return mix(K,G,m)*scales(p);
}`,h_=qs+`
vec3 suitColor(vec3 p){
  float notch = p.z > 0.0 ? 0.03 + abs(p.x)*1.4 : 0.11;
  float m = step(p.y, notch);
  return mix(K,G,m)*scales(p);
}`;function f_(){const t={selfLit:.32},e=Zt(2393903,t),n=Zt(1382172,t),s=Zt(14262908,t),r=Zt(6964006,{selfLit:.32,side:Ge}),a=Zt(4860438,t),o=Ys({scale:1.02,bulk:1.06,selfLit:.32,taper:.72,pecs:.22,deltoid:.082,shoulderW:.265,colors:{torso:Vn(o_,t),pelvis:Vn(c_,t),shoulder:e,neck:e,upperArm:n,glove:e,thigh:n,shin:Vn(h_,t),boot:e,skin:s,skinMat:s},head:{tex:_x(),scaleY:1.14},extras(c){const{j:f,head:d,headR:h,parts:u}=c;u.abdomen.material=Vn(l_,t),f.legL.children[0].material=Vn($c(1),t),f.legR.children[0].material=Vn($c(-1),t);{const E=u.torso.geometry.clone(),R=E.attributes.position,_=E.attributes.normal,w=E.attributes.uv,D=.36,B=.36,O=0;for(let U=0;U<R.count;U++){const z=R.getX(U),V=R.getY(U),Z=R.getZ(U);Z>.01?w.setXY(U,z/D+.5,(V-O)/B+.5):w.setXY(U,-1,-1),R.setXYZ(U,z+_.getX(U)*.004,V+_.getY(U)*.004,Z+_.getZ(U)*.004)}const L=xx();L.wrapS=L.wrapT=Ln;const A=new Ut(E,new de({map:L,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2}));A.name="emblem",u.torso.add(A)}const m=We(6160234,.34,.2);m.position.set(0,.1,.22),f.chest.add(m),c.emblemGlow=m,c.eyes=[];for(const E of[-1,1]){const R=new Ut(new Se(.026,10,6),ke(10354554));R.position.copy(Fo(h*.985,.468*Math.PI,E*.37)),R.scale.set(1.05,.55,.5),R.lookAt(R.position.clone().multiplyScalar(2)),d.add(R),c.eyes.push(R);const _=We(7208794,.07,.55);_.position.copy(R.position).multiplyScalar(1.05),d.add(_)}const v=Ht(new Se(h*1.1,28,12,0,Math.PI*2,0,.34*Math.PI),r,0,.006,-.006,d),g=Ht(new Se(h*1.11,24,14,Math.PI-.7,Math.PI+1.4,0,.62*Math.PI),r,0,0,-.008,d),p=Ht(new se(.006,.01,.12),s,0,h*1.07,.03,d);p.rotation.x=.3;const y=[],T=h*1.02;for(const[E,R,_,w]of[[26,1,.33,.36],[20,1.07,.37,.3]])for(let D=0;D<E;D++){const B=-1.25-(D+.5*(R>1))/(E-1)*(Math.PI*2-2.5),O=Math.PI/2+B,L=w*Math.PI,A=new P(-Math.cos(O)*Math.sin(L)*T*R,Math.cos(L)*T*R,Math.sin(O)*Math.sin(L)*T*R),U=new P(A.x,0,A.z).normalize(),z=new P(U.x*.36,-1,U.z*.3-.1).normalize();y.push({from:A,dir:z,len:_+D*7%5*.02,wave:.05,r:.032,phase:D*1.9+R*3})}for(const E of[-1,1])for(const R of[0,1,2]){const _=Math.PI/2+E*(.92+R*.17),w=.27*Math.PI,D=new P(-Math.cos(_)*Math.sin(w)*T*1.05,Math.cos(w)*T,Math.sin(_)*Math.sin(w)*T*1.05);y.push({from:D,dir:new P(-Math.cos(_)*.62,-1,.04).normalize(),len:.31+R*.03,wave:.045,r:.038,phase:R*2.3+E})}const M=new Ut(yx(y),r);d.add(M);for(const E of[-1,1])Ht(new Ws(.035,.1,3,6),r,E*.06,h*.86,.075,d).rotation.set(.5,0,E*1.15);const S=Ht(new Ci(.038,.09,8),a,0,0,0,d);S.position.copy(Fo(h*.93,.8*Math.PI,0)),S.rotation.x=Math.PI+.5,S.scale.set(1,1,.6),c.hair=[v,g,M]}}),l=We(3800954,2.2,0);return l.position.y=1.1,o.root.add(l),o.aura=l,o}const u_=""+new URL("portrait-71rFsCbQ.jpg",import.meta.url).href,Qc={chillblazer:{id:"chillblazer",name:"ChillBlazer",title:"Calm the storm.",color:3800954,portrait:u_,model:f_,stats:{speed:8.5,accel:60,jumpV:13,airJumps:1,airJumpV:11.5,gravity:32,radius:.45,height:1.85,maxChill:100,startChill:50,moveChillPerSec:9,panicRegenPerSec:.35,panicRegenDelay:5},kit:{strike:{type:"meleeCombo",label:"Calm Strike",chillGain:3,panicRelief:.1,comboWindow:.5,hits:[{pose:"strike1",dur:.3,at:.1,stress:14,range:2.4,arc:2,lunge:4,sfx:"strike"},{pose:"strike2",dur:.3,at:.1,stress:14,range:2.4,arc:2,lunge:4,sfx:"strike"},{pose:"strike3",dur:.5,at:.22,stress:28,range:3,arc:2.8,lunge:5,knock:5,stagger:.6,sfx:"strike3",whoosh:!0}]},blast:{type:"projectile",label:"Chill Blast",cost:16,cooldown:.38,speed:30,stress:20,splash:2.2,homing:5,life:1.4,color:3800954,pose:"blast",stagger:.3},field:{type:"aura",label:"Calm Field",minCost:14,drain:28,radius:6.5,stressPerSec:18,panicPerSec:1,stun:!0,blocksPulses:!0,color:3800954,pose:"field"},jump:{type:"multiJump",label:"Jump"},lock:{type:"lockOn",label:"Lock-on",range:30}}}};function d_(i){return Qc[i]||Qc.chillblazer}const ze=i=>document.getElementById(i),ns=new P;class p_{constructor(t){this.g=t,this.el={hud:ze("hud"),chill:ze("chill-fill"),panic:ze("panic-fill"),obj:ze("objective"),boss:ze("bossbar"),bossFill:ze("boss-fill"),bossName:ze("boss-name"),bossSub:ze("boss-sub"),reticle:ze("lock-reticle"),popups:ze("popups"),flash:ze("flash"),toast:ze("toast"),fps:ze("fps"),strip:ze("compass-strip"),mini:ze("minimap")},this.mctx=this.el.mini.getContext("2d"),this.miniT=0,this.toastT=0,this.btn={};for(const e of document.querySelectorAll(".act"))this.btn[e.dataset.act]=e;this.el.fps.classList.toggle("hidden",!t.settings.showFps)}show(t){this.el.hud.classList.toggle("hidden",!t)}objective(t){this.el.obj.textContent!==t&&(this.el.obj.textContent=t)}fps(t){this.el.fps.textContent=t.toFixed(0)+" fps"}flash(t=.5){this.el.flash.style.opacity=t,clearTimeout(this._ft),this._ft=setTimeout(()=>this.el.flash.style.opacity=0,160)}bossIntro(t,e,n){const s=ze("boss-intro");s.querySelector(".bi-img").className="bi-img "+t,s.querySelector(".bi-name").textContent=e,s.querySelector(".bi-line").textContent=n,s.classList.add("show"),clearTimeout(this._bi),this._bi=setTimeout(()=>s.classList.remove("show"),2600)}toast(t,e=2.2){this.el.toast.textContent=t,this.el.toast.classList.add("show"),this.toastT=e}flashButton(t){const e=this.btn[t];e&&(e.classList.add("disabled"),setTimeout(()=>e.classList.remove("disabled"),250))}project(t){return ns.copy(t).project(this.g.camera),ns.z>1?null:{x:(ns.x*.5+.5)*window.innerWidth,y:(-ns.y*.5+.5)*window.innerHeight}}popup(t,e,n){const s=this.project(ns.copy(e).setY(e.y+2));if(!s)return;this.el.popups.childElementCount>6&&this.el.popups.firstChild.remove();const r=document.createElement("div");r.className="pop"+(n?" big":""),r.textContent=t,r.style.left=s.x+(Math.random()-.5)*40+"px",r.style.top=s.y+"px",this.el.popups.appendChild(r),setTimeout(()=>r.remove(),900)}update(t){const e=this.g,n=e.player;this.el.chill.style.width=n.chill/n.maxChill*100+"%",this.el.panic.style.width=e.panic+"%",this.el.panic.parentElement.classList.toggle("danger",e.panic>70);const s=e.boss&&!e.boss.calmed?e.boss:null;if(this.el.boss.classList.toggle("hidden",!s),s){const a=ze("boss-portrait");a.className!==s.kind&&(a.className=s.kind),this.el.bossFill.style.width=s.stressK*100+"%",this.el.bossName.textContent=s.name,this.el.bossSub.textContent=s.kind==="amp"?`STRESS  -  PHASE ${s.phase}/3`:s.dazed>0?"DAZED! x1.6 CALM":"STRESS"}if(e.lock){const a=this.project(ns.copy(e.lock.pos).setY(e.lock.pos.y+(e.lock.centerY||1)));a?(this.el.reticle.classList.remove("hidden"),this.el.reticle.style.left=a.x+"px",this.el.reticle.style.top=a.y+"px"):this.el.reticle.classList.add("hidden")}else this.el.reticle.classList.add("hidden");this.toastT>0&&(this.toastT-=t,this.toastT<=0&&this.el.toast.classList.remove("show"));const r=n.kit;this.btn.blast.classList.toggle("disabled",n.chill<r.blast.cfg.cost),this.btn.blast.querySelector(".cd").style.setProperty("--p",(r.blast.cdFrac()*100).toFixed(0)+"%"),this.btn.field.classList.toggle("disabled",n.chill<r.field.cfg.minCost&&!r.field.busy()),this.btn.lock.classList.toggle("pressed",!!e.lock),this.miniT-=t,this.miniT<=0&&(this.miniT=.1,this.drawMinimap(),this.drawCompass())}drawCompass(){const t=this.g,e=t.cam.yaw,n=this.el.strip.parentElement.clientWidth,s=Math.PI*.9,r=Math.atan2(-Math.sin(e),-Math.cos(e)),a=[["N",Math.PI],["E",Math.PI/2],["S",0],["W",-Math.PI/2]].map(([l,c])=>({t:l,a:c,c:"#9fd",mk:!1}));for(const l of t.objectives())a.push({t:"◆",a:Math.atan2(l.pos.x-t.player.pos.x,l.pos.z-t.player.pos.z),c:l.id==="core"||l.id==="tower"||l.id==="park"?"#ff2bd6":"#ff6fe6",mk:!0});let o="";for(const l of a){let c=l.a-r;for(;c>Math.PI;)c-=2*Math.PI;for(;c<-Math.PI;)c+=2*Math.PI;if(Math.abs(c)>s/2)continue;const f=n/2-c/(s/2)*(n/2);o+=`<span class="${l.mk?"mk":""}" style="left:${f.toFixed(0)}px;color:${l.c}">${l.t}</span>`}this.el.strip.innerHTML=o}drawMinimap(){const t=this.g,e=this.mctx,n=220,s=n/2,r=1.6,a=t.col.bounds,o=t.map,l=t.player.pos;e.clearRect(0,0,n,n),e.save(),e.beginPath(),e.arc(s,s,s,0,Math.PI*2),e.clip(),e.fillStyle="#0b0718",e.fillRect(0,0,n,n),e.translate(s,s),e.rotate(t.cam.yaw);const c=r/o.scale;e.drawImage(o.canvas,-(l.x-a.minX)*r,-(l.z-a.minZ)*r,o.canvas.width*c,o.canvas.height*c);const f=(d,h)=>[(d-l.x)*r,(h-l.z)*r];for(const d of t.enemies){if(d.removed)continue;const[h,u]=f(d.pos.x,d.pos.z);e.fillStyle=d.calmed?"#39ff7a":"#ff2bd6",e.beginPath(),e.arc(h,u,d.boss?6:3.5,0,7),e.fill()}for(const d of t.objectives()){let[h,u]=f(d.pos.x,d.pos.z);const m=Math.hypot(h,u);m>s-10&&(h*=(s-10)/m,u*=(s-10)/m),e.fillStyle="#ff2bd6",e.strokeStyle="#fff",e.lineWidth=2,e.beginPath(),e.moveTo(h,u-8),e.lineTo(h+7,u),e.lineTo(h,u+8),e.lineTo(h-7,u),e.closePath(),e.fill(),e.stroke()}e.restore(),e.save(),e.translate(s,s),e.rotate(-(t.player.facing-Math.atan2(-Math.sin(t.cam.yaw),-Math.cos(t.cam.yaw)))),e.fillStyle="#39ff7a",e.shadowColor="#39ff7a",e.shadowBlur=8,e.beginPath(),e.moveTo(0,-10),e.lineTo(7,7),e.lineTo(0,3),e.lineTo(-7,7),e.closePath(),e.fill(),e.restore()}}const m_={low:1,medium:1.5,high:2},Ir={h1:[[["citizen",3],["caster",1]],[["goon",2],["citizen",2],["caster",1]],[["goon",3],["caster",2]]],h2:[[["goon",3],["caster",1]],[["goon",2],["caster",2],["drone",1]],[["goon",3],["caster",2],["drone",1]]],h3:[[["drone",2],["caster",1]],[["goon",2],["drone",2]],[["goon",2],["caster",2],["drone",1]]]};class gl{constructor(t,e,n,s){this.canvas=t,this.input=e,this.sfx=n,this.settings=s;const r=s.quality;this.renderer=new mx({canvas:t,antialias:r==="high",powerPreference:"high-performance",stencil:!1}),this.renderer.outputColorSpace=Be,this.applyQuality(),this.scene=new Cu,this.scene.fog=new Qo(1450574,r==="low"?.015:.012),this.scene.background=new Vt(330274),this.camera=new cn(62,1,.1,600),this.scene.add(new ud(8023295,2757176,1.25));const a=new gc(11068671,1.1);a.position.set(-40,80,30),this.scene.add(a);const o=new gc(16730840,.5);o.position.set(30,20,-60),this.scene.add(o),this.col=new gx,this.city=zx(this.scene,this.col,r),this.map=Bx(this.city,this.col),this.fx=new kx(this.scene,r),this.proj=new Gx(this.scene),this.hero=d_("chillblazer"),this.player=new Xx(this.hero,this),r!=="low"&&(this.pLight=new pd(3800954,6,9,1.6),this.scene.add(this.pLight)),this.cam={yaw:0,pitch:.28,dist:5,userT:0,shake:0,pos:new P},this.enemies=[],this.pulses=[],this.markers={},this.hud=new p_(this),this.state="title",this.time=0,this.hitstopT=0,this.fps=60,this._fpsAcc=0,this._fpsN=0,this.frameTimes=[],this.makeMarkers(),this.resize(),window.addEventListener("resize",()=>this.resize()),this.signalCd=12}applyQuality(){const t=Math.min(window.devicePixelRatio||1,m_[this.settings.quality]||1.5);this.renderer.setPixelRatio(t),this.pixelRatio=t,this.camera&&this.resize()}resize(){const t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1),this.camera&&(this.camera.aspect=t/e,this.camera.fov=t/e<1.2?75:62,this.camera.updateProjectionMatrix())}startSession(t){this.progress=t,this.clearEnemies(),this.proj.clear(),this.pulses.forEach(e=>this.scene.remove(e.mesh)),this.pulses=[],this.panic=15,this.player.chill=this.hero.stats.startChill,this.lock=null,this.waveIdx={},this.activeHotspot=null,this.boss=null,this.sessionTime=0,this.city.setTowerCalm(0),this.city.relay.dish.material.color.set(t.cleared.includes("h3")?3800954:16722902),this.player.pos.copy(this.checkpointPos()),this.player.vel.set(0,0,0),this.player.facing=Math.PI,this.cam.yaw=0,this.progress.checkpoint==="tower"&&(this.player.facing=Math.PI),this.refreshMarkers(),this.state="play",this.hud.show(!0),this.updateObjective()}checkpointPos(){const t=this.progress?.checkpoint||"start";return t==="start"?re.spawn.clone():t==="h1"?new P(-50,0,62):t==="h2"?new P(50,0,12):t==="h3"?new P(-50,0,-25):t==="park"?new P(25,0,-2):t==="tower"?new P(0,0,-100):re.spawn.clone()}stage(){const t=this.progress;return t.cleared.length<3?"hotspots":t.enforcer?t.amp?"won":t.ampCalmed?"core":"amp":"enforcer"}clearEnemies(){for(const t of this.enemies)t.remove();this.enemies=[],this.boss=null}addEnemy(t){return this.enemies.push(t),t}targets(){return this.enemies.filter(t=>!t.calmed&&!t.removed)}makeMarkers(){const t=(e,n)=>{const s=new Ve;s.position.copy(e);const r=new Ut(new Ke(.6,1.4,60,10,1,!0),new de({color:n,transparent:!0,opacity:.22,blending:De,depthWrite:!1,side:Ge,toneMapped:!1,fog:!1}));r.position.y=30,s.add(r);const a=new Ut(new Te(10,10).rotateX(-Math.PI/2),new de({map:hl(),color:n,transparent:!0,blending:De,depthWrite:!1,toneMapped:!1}));return a.position.y=.2,s.add(a),s.userData={beam:r,ring:a},this.scene.add(s),s};for(const e of re.hotspots)this.markers[e.id]=t(e.pos,16722902);this.markers.park=t(new P(re.park.x,0,re.park.z),16722902),this.markers.tower=t(re.towerPlaza.clone(),16722902)}refreshMarkers(){const t=this.stage(),e=this.nextHotspot();for(const n of re.hotspots){const s=this.markers[n.id],r=this.progress.cleared.includes(n.id);s.visible=!!e&&e.id===n.id,s.userData.beam.material.color.set(r?3800954:16722902),s.userData.ring.material.color.set(r?3800954:16722902),s.userData.beam.material.opacity=r?.08:.22}this.markers.park.visible=t==="enforcer"||this.progress.enforcer,this.markers.park.userData.beam.material.color.set(this.progress.enforcer?3800954:16722902),this.markers.tower.visible=t==="amp"||t==="core"}nextHotspot(){return this.stage()!=="hotspots"?null:re.hotspots.find(t=>!this.progress.cleared.includes(t.id))||null}objectives(){const t=this.stage(),e=[];if(t==="hotspots"){const n=this.nextHotspot();n&&e.push({id:n.id,name:n.name,pos:n.pos})}return t==="enforcer"&&e.push({id:"park",name:"Amp Enforcer",pos:new P(re.park.x,0,re.park.z)}),t==="amp"&&e.push({id:"tower",name:"The Amp",pos:re.towerPlaza.clone()}),t==="core"&&e.push({id:"core",name:"Tower Core",pos:this.city.core.group.position.clone()}),e}updateObjective(){const t=this.stage();let e;if(this.activeHotspot){const n=re.hotspots.find(r=>r.id===this.activeHotspot),s=this.targets().length;e=`Calm ${n.name}: ${s} stressed left (wave ${this.waveIdx[n.id]+1}/${Ir[n.id].length})`}else t==="hotspots"?e=`Find the stress hotspot on your map (${3-(3-this.progress.cleared.length)}/3 calmed). Follow the magenta beam.`:t==="enforcer"?e=this.boss?"Calm the Amp Enforcer! Sidestep his charge so he hits a wall.":"Hotspots calm. The Amp Enforcer waits in the park plaza.":t==="amp"?e=this.boss?"Calm The Amp! Jump or Calm Field the pulses.":"Head north to the Amp Tower. End the OVERDRIVE signal.":t==="core"?e="The Amp is calm. Now calm the Amp Tower core!":e="The city is calm.";this.hud.objective(e)}spawnWave(t){const e=re.hotspots.find(a=>a.id===t),n=Ir[t][this.waveIdx[t]];let s=0;const r=n.reduce((a,o)=>a+o[1],0);for(const[a,o]of n)for(let l=0;l<o;l++,s++){const c=s/r*Math.PI*2+Math.random()*.5,f=e.kind==="roof"?5+s%2*1.5:7+s%3*2,d=new P(e.pos.x+Math.cos(c)*f,e.pos.y,e.pos.z+Math.sin(c)*f);a==="drone"&&(d.y=e.pos.y+4);const h=a==="citizen"?$h:a==="goon"?Qh:a==="caster"?ml:pl;this.addEnemy(new h(this,d,{hotspot:t}))}this.fx.ring(e.pos,16722902,1,12,.8),this.sfx.play("pulse")}encounterUpdate(t){const e=this.player.pos,n=this.stage();if(n==="hotspots"&&!this.activeHotspot)for(const s of[this.nextHotspot()].filter(Boolean)){const r=Math.hypot(e.x-s.pos.x,e.z-s.pos.z);if(s.kind==="roof"?r<15&&e.y>7:r<20){this.activeHotspot=s.id,this.waveIdx[s.id]=0,this.spawnWave(s.id),this.showToast(s.name.toUpperCase()+": CALM THE STORM"),this.updateObjective();break}}if(this.activeHotspot){const s=this.activeHotspot;this.targets().length===0&&(this.waveDelay=(this.waveDelay??1.2)-t,this.waveDelay<=0&&(this.waveDelay=void 0,this.waveIdx[s]++,this.waveIdx[s]>=Ir[s].length?(this.progress.cleared.push(s),this.progress.checkpoint=s,this.activeHotspot=null,this.lock=null,this.addPanic(-8),s==="h3"&&this.city.relay.dish.material.color.set(3800954),this.showToast(re.hotspots.find(a=>a.id===s).name.toUpperCase()+" CALMED"),this.sfx.play("win"),this.save(),this.refreshMarkers(),this.stage()==="enforcer"&&setTimeout(()=>this.showToast("THE AMP ENFORCER IS IN THE PARK"),1800)):this.spawnWave(s),this.updateObjective()));const r=re.hotspots.find(a=>a.id===s);this.activeHotspot&&Math.hypot(e.x-r.pos.x,e.z-r.pos.z)>hi.hotspotReset&&(this.clearEnemies(),this.activeHotspot=null,this.updateObjective())}if(n==="enforcer"&&!this.boss){const s=re.park;Math.hypot(e.x-s.x,e.z-s.z)<17&&(this.clearEnemies(),this.boss=this.addEnemy(new jh(this,new P(s.x,0,s.z-8),new P(s.x,0,s.z))),this.hud.bossIntro("enforcer","AMP ENFORCER","He chases you anywhere. Dodge his charge into a wall, then calm him."),this.sfx.play("slam"),this.updateObjective())}if(n==="amp"&&!this.boss){const s=re.towerPlaza;Math.hypot(e.x-s.x,e.z-s.z)<24&&(this.clearEnemies(),this.progress.checkpoint="tower",this.save(),this.boss=this.addEnemy(new tf(this,new P(s.x,0,s.z-8),s.clone())),this.hud.bossIntro("amp","THE AMP",'"Panic sells, hero. And business is BOOMING."'),this.sfx.play("pulse"),this.flash(),this.updateObjective())}if(this.boss&&(this.boss.kind==="enforcer"||this.boss.kind==="amp")&&!this.boss.calmed){const s=this.boss.arena;Math.hypot(e.x-s.x,e.z-s.z)>Hs.giveUp&&(this.clearEnemies(),this.pulses.forEach(r=>this.scene.remove(r.mesh)),this.pulses=[],this.showToast("THE BOSS WENT BACK TO ITS ARENA"),this.updateObjective())}n==="core"&&!this.boss&&(this.boss=this.addEnemy(new ef(this,this.city.core)),this.updateObjective());for(const s of this.enemies)s.calmed&&s.calmT>25&&!s.boss&&s.remove();this.enemies=this.enemies.filter(s=>!s.removed)}onCalmed(t){if(this.addPanic(t.boss?-25:-3),this.player.addChill(t.boss?35:4),this.lock===t&&(this.lock=null,this.cycleLock(30,!0)),t.kind==="enforcer"){for(const e of this.enemies)e.kind==="caster"&&!e.calmed&&!e.hotspot&&e.becomeCalm();this.progress.enforcer=!0,this.progress.checkpoint="park",this.boss=null,this.showToast("AMP ENFORCER CALMED"),this.sfx.play("win"),this.save(),this.refreshMarkers(),setTimeout(()=>this.state==="play"&&this.showToast("NOW: THE AMP TOWER (NORTH)"),2e3)}if(t.kind==="amp"){this.progress.ampCalmed=!0,this.boss=null;for(const e of this.enemies)e.kind==="drone"&&!e.calmed&&e.becomeCalm();this.pulses.forEach(e=>this.scene.remove(e.mesh)),this.pulses=[],this.showToast("THE AMP IS CALM... NOW THE TOWER"),this.save()}t.kind==="core"&&(this.progress.amp=!0,this.win()),this.updateObjective()}spawnPulse(t,e){const n=new Ut(new Ke(1,1,1.1,48,1,!0),new de({color:16722902,transparent:!0,opacity:.55,blending:De,side:Ge,depthWrite:!1,toneMapped:!1}));n.position.set(t.x,.55,t.z),this.scene.add(n),this.pulses.push({c:t.clone(),r:.5,speed:e,max:30,mesh:n,hit:!1}),this.sfx.play("pulse"),this.flash(),this.shake(.25)}pulsesUpdate(t){const e=this.player;for(let n=this.pulses.length-1;n>=0;n--){const s=this.pulses[n];s.r+=s.speed*t,s.mesh.scale.set(s.r,1,s.r),s.mesh.material.opacity=.55*(1-s.r/s.max);const r=Math.hypot(e.pos.x-s.c.x,e.pos.z-s.c.z);if(!s.hit&&Math.abs(r-s.r)<.8){const a=this.col.groundAt(e.pos.x,e.pos.z,e.radius,e.pos.y);e.kit.field.blocks()?(s.hit=!0,this.popup("WHOOSH!",e.pos),this.fx.burst(e.pos.clone().setY(e.pos.y+1),3800954,10,4),this.stats.pulsesBlocked++):e.pos.y-a<.9?(s.hit=!0,e.hurt(14,new P(e.pos.x-s.c.x,0,e.pos.z-s.c.z).normalize(),9),this.stats.pulsesHit++):(s.hit=!0,this.stats.pulsesJumped++,this.popup("WHOOSH!",e.pos))}s.r>s.max&&(this.scene.remove(s.mesh),s.mesh.geometry.dispose(),this.pulses.splice(n,1))}}projUpdate(t){const e=this.player;for(const n of this.proj.list){if(n.dead)continue;if(n.age+=t,n.homing&&n.target&&!n.target.calmed){const a=n.target.pos.clone().setY(n.target.pos.y+(n.target.centerY||1)).sub(n.mesh.position).normalize().multiplyScalar(n.speed);n.vel.lerp(a,Math.min(1,n.homing*t))}n.mesh.position.addScaledVector(n.vel,t);const s=n.mesh.position;let r=!1;if((n.age>n.life||s.y<.05||this.col.raycast(s.x,s.y,s.z,s.x+.01,s.y,s.z)<1)&&(r=!0),n.owner==="player"){for(const a of this.targets())if(a.pos.clone().setY(a.pos.y+(a.centerY||1)).distanceTo(s)<a.radius+.5+(a.boss?a.height*.3:.3)){r=!0;break}if(r){for(const a of this.targets()){const l=a.pos.clone().setY(a.pos.y+(a.centerY||1)).distanceTo(s);l<n.splash+a.radius+(a.boss?1:0)&&(a.calmHit(n.stress*(l<a.radius+1.2?1:.5),{stagger:n.stagger,knock:2,dir:n.vel.clone().setY(0).normalize(),kind:"blast"}),this.panic=Math.max(0,this.panic-.5))}this.fx.burst(s,8257418,12,5,.6),this.fx.ring(s.clone().setY(Math.max(0,s.y-1)),3800954,.3,n.splash,.35),this.popup("WHOOSH!",s)}}else{const o=e.pos.clone().setY(e.pos.y+1).distanceTo(s);e.kit.field.blocks()&&e.pos.distanceTo(s)<e.kit.field.cfg.radius?(r=!0,this.fx.burst(s,3800954,8,3,.5)):o<.65&&(r=!0,e.hurt(n.panic,n.vel.clone().setY(0).normalize(),5)&&this.stats.projHits++),r&&this.fx.burst(s,16722902,8,4,.5)}r&&this.proj.kill(n)}this.proj.list=this.proj.list.filter(n=>!n.dead)}addPanic(t){this.state==="play"&&(this.panic=Math.max(0,Math.min(100,this.panic+t)),this.panic>=100&&this.lose())}cycleLock(t=30,e=!1){const n=this.player,s=this.targets().filter(a=>a.pos.distanceTo(n.pos)<t);if(!s.length){this.lock=null;return}const r=Math.atan2(-Math.sin(this.cam.yaw),-Math.cos(this.cam.yaw));if(s.sort((a,o)=>Math.abs(li(Math.atan2(a.pos.x-n.pos.x,a.pos.z-n.pos.z),r))*8+a.pos.distanceTo(n.pos)-(Math.abs(li(Math.atan2(o.pos.x-n.pos.x,o.pos.z-n.pos.z),r))*8+o.pos.distanceTo(n.pos))),this.lock&&s.includes(this.lock)&&!e){const a=s.indexOf(this.lock);this.lock=s[(a+1)%s.length],s.length===1&&(this.lock=null)}else this.lock=s[0];e||this.sfx.play("lock")}update(t){this.time+=t,this.city.update(this.time,this.camera);{const a=this.city.traffic,o=this.player,l=[{x:o.pos.x,z:o.pos.z,r:o.radius,player:!0}];for(const c of this.enemies)!c.removed&&!c.flying&&l.push({x:c.pos.x,z:c.pos.z,r:c.radius});a.update(t,this.time,l),a.pushOut(o.pos,o.radius);for(const c of this.enemies)!c.removed&&!c.flying&&a.pushOut(c.pos,c.radius)}if(this.state!=="play"){this.titleCam(t);return}this.sessionTime+=t,this.progress.playTime+=t,this.hitstopT>0&&(this.hitstopT-=t,t*=.15);const e=this.input.sample(),n=this.settings.sens;(e.look.x||e.look.y)&&(this.cam.yaw-=e.look.x*.0065*n,this.cam.pitch+=e.look.y*.005*n*(this.settings.invertY?-1:1),this.cam.userT=.8),this.cam.pitch=Math.max(-.3,Math.min(1.15,this.cam.pitch)),this.cam.userT-=t,this.lock&&(this.lock.calmed||this.lock.removed||this.lock.pos.distanceTo(this.player.pos)>40)&&(this.lock=null),this.player.update(t,e,this.cam.yaw);for(const a of this.enemies)a.removed||a.update(t);if(this.projUpdate(t),this.pulsesUpdate(t),this.fx.update(t),this.encounterUpdate(t),this.signalCd-=t,this.signalCd<=0&&this.stage()!=="won"&&!this.progress.ampCalmed){this.signalCd=15,this.flash(.35),this.sfx.play("pulse"),this.player.kit.field.blocks()||(this.addPanic(this.stage()==="amp"?2:4),this.stats.signal++);for(const o of this.targets())o.boss||(o.stress=Math.min(o.maxStress,o.stress+o.maxStress*.15));this.city.tower.bglow.scale.setScalar(40)}const s=this.hero.stats;!this.targets().some(a=>a.pos.distanceTo(this.player.pos)<18)&&this.player.t-(this.player.lastHurtT??-99)>s.panicRegenDelay&&(this.panic=Math.max(0,this.panic-s.panicRegenPerSec*t)),this.pLight&&(this.pLight.position.copy(this.player.pos).add(new P(0,1.6,0)),this.pLight.intensity=4+(this.player.kit.field.busy()?10:0)),this.updateCamera(t),this.hud.update(t),this._saveT=(this._saveT||0)+t,this._saveT>15&&(this._saveT=0,this.save())}updateCamera(t){const e=this.cam,n=this.player;if(this.lock&&e.userT<=0){const c=Math.atan2(-(this.lock.pos.x-n.pos.x),-(this.lock.pos.z-n.pos.z));e.yaw+=li(c,e.yaw)*(1-Math.exp(-4*t))}const s=new P(n.pos.x,n.pos.y+1.55,n.pos.z),r=e.dist*(this.boss&&this.boss.kind!=="core"?1.25:1),a=new P(Math.sin(e.yaw)*Math.cos(e.pitch),Math.sin(e.pitch),Math.cos(e.yaw)*Math.cos(e.pitch)),o=s.clone().addScaledVector(a,r),l=this.col.raycast(s.x,s.y,s.z,o.x,o.y,o.z,.3);if(l<1&&o.lerpVectors(s,o,Math.max(.15,l-.06)),o.y<.4&&(o.y=.4),e.pos.lerp(o,1-Math.exp(-18*t)),e.pos.distanceTo(o)>4&&e.pos.copy(o),this.camera.position.copy(e.pos),e.shake>0){e.shake=Math.max(0,e.shake-t);const c=e.shake*.5;this.camera.position.add(new P((Math.random()-.5)*c,(Math.random()-.5)*c,(Math.random()-.5)*c))}this.camera.lookAt(s)}titleCam(t){const e=this.player;if(this.state==="model"){const n=this.modelView;e.pos.set(3,0,70),e.facing=n.yaw;const s=n.pose?Bt[n.pose](this.time,.35):Bt.idle(this.time);if(e.anim.apply(s,t,30),e.rig.root.position.copy(e.pos),e.rig.root.rotation.y=e.facing,e.shadow.position.set(3,.03,70),n.cam){this.camera.position.set(...n.cam),this.camera.lookAt(...n.at);return}this.camera.position.set(3,n.h,70+n.dist),this.camera.lookAt(3,n.look,70);return}if(this.state==="title"&&(e.pos.set(0,0,70),e.facing=Math.PI+Math.sin(this.time*.3)*.5,e.anim.apply(g_(this.time),t),e.rig.root.position.copy(e.pos),e.rig.root.rotation.y=e.facing,e.shadow.position.set(e.pos.x,.03,e.pos.z)),this.state==="title"){const n=this.time*.08;this.camera.position.set(e.pos.x+Math.sin(n)*7-2,2.2,e.pos.z-6+Math.cos(n)*2),this.camera.lookAt(e.pos.x-1.6,1.7,e.pos.z-1)}}render(){this.renderer.render(this.scene,this.camera)}tick(t,e){this._fpsAcc+=e,this._fpsN++,this._fpsAcc>1&&(this.fps=this._fpsN/this._fpsAcc,this._fpsAcc=0,this._fpsN=0,this.hud.fps(this.fps)),this.frameTimes.push(e),this.frameTimes.length>600&&this.frameTimes.shift(),this.update(t),this.render()}hitstop(t){this.hitstopT=Math.max(this.hitstopT,t)}shake(t){this.cam.shake=Math.max(this.cam.shake,t)}flash(t){this.hud.flash(t)}popup(t,e,n){this.hud.popup(t,e,n)}showToast(t,e){this.hud.toast(t,e)}flashButton(t){this.hud.flashButton(t)}win(){this.state="end",this.progress.wins++;const t=this.sessionTime;(!this.progress.bestTime||t<this.progress.bestTime)&&(this.progress.bestTime=t),this.city.setTowerCalm(1),this.sfx.play("win"),this.save(),this.onEnd?.("win")}lose(){this.state==="play"&&(this.state="end",this.sfx.play("lose"),this.save(),this.onEnd?.("lose"))}save(){this.onSave?.()}}const g_=i=>Bt.idle(i);Object.defineProperty(gl.prototype,"stats",{get(){return this._stats||(this._stats={pulsesHit:0,pulsesJumped:0,pulsesBlocked:0,projHits:0,signal:0})}});const x_=Object.freeze(Object.defineProperty({__proto__:null,Game:gl,WAVES:Ir},Symbol.toStringTag,{value:"Module"})),Xa=["jump","strike","blast","field","lock"];class __{constructor(t){this.move={x:0,y:0},this.look={x:0,y:0},this.held=Object.fromEntries(Xa.map(a=>[a,!1])),this.pressed=new Set,this.released=new Set,this.keys=new Set,this.joy=null,this.lookPtr=null,this.mouse=null,this.virtual=null,this.enabled=!0,this.usingTouch=!1,this.base=document.getElementById("joy-base"),this.knob=document.getElementById("joy-knob"),this._joyHome();const e=document.getElementById("joy-zone");e.addEventListener("pointerdown",a=>{if(a.preventDefault(),this.usingTouch||(this.usingTouch=a.pointerType==="touch"),this.joy)return;e.setPointerCapture?.(a.pointerId),this.joy={id:a.pointerId,ox:a.clientX,oy:a.clientY};const o=e.getBoundingClientRect();this.base.style.left=a.clientX-o.left+"px",this.base.style.top=a.clientY-o.top+"px",this._knob(0,0)}),e.addEventListener("pointermove",a=>{if(!this.joy||a.pointerId!==this.joy.id)return;a.preventDefault();let o=a.clientX-this.joy.ox,l=a.clientY-this.joy.oy;const c=46,f=Math.hypot(o,l);f>c&&(o*=c/f,l*=c/f),this._knob(o,l),this.move.x=o/c,this.move.y=-l/c});const n=a=>{!this.joy||a.pointerId!==this.joy.id||(this.joy=null,this.move.x=this.move.y=0,this._joyHome())};e.addEventListener("pointerup",n),e.addEventListener("pointercancel",n),t.addEventListener("pointerdown",a=>{if(this.usingTouch||(this.usingTouch=a.pointerType==="touch"),a.pointerType==="mouse"){this.mouse={x:a.clientX,y:a.clientY,moved:0,btn:a.button},a.button===2&&this._press("blast");return}this.lookPtr||(this.lookPtr={id:a.pointerId,x:a.clientX,y:a.clientY},t.setPointerCapture?.(a.pointerId))}),t.addEventListener("pointermove",a=>{if(a.pointerType==="mouse"){if(this.mouse){const o=a.clientX-this.mouse.x,l=a.clientY-this.mouse.y;this.look.x+=o,this.look.y+=l,this.mouse.moved+=Math.abs(o)+Math.abs(l),this.mouse.x=a.clientX,this.mouse.y=a.clientY}return}!this.lookPtr||a.pointerId!==this.lookPtr.id||(this.look.x+=a.clientX-this.lookPtr.x,this.look.y+=a.clientY-this.lookPtr.y,this.lookPtr.x=a.clientX,this.lookPtr.y=a.clientY)});const s=a=>{if(a.pointerType==="mouse"){this.mouse&&this.mouse.btn===0&&this.mouse.moved<6&&this._press("strike"),this.mouse?.btn===2&&this._release("blast"),this.mouse=null;return}this.lookPtr&&a.pointerId===this.lookPtr.id&&(this.lookPtr=null)};t.addEventListener("pointerup",s),t.addEventListener("pointercancel",s),t.addEventListener("contextmenu",a=>a.preventDefault());for(const a of document.querySelectorAll(".act")){const o=a.dataset.act,l=document.createElement("div");l.className="cd",a.appendChild(l),a.addEventListener("pointerdown",f=>{f.preventDefault(),f.stopPropagation(),this.usingTouch||(this.usingTouch=f.pointerType==="touch"),a.setPointerCapture?.(f.pointerId),a.classList.add("pressed"),this._press(o)});const c=f=>{f.preventDefault(),a.classList.remove("pressed"),this._release(o)};a.addEventListener("pointerup",c),a.addEventListener("pointercancel",c),a.addEventListener("lostpointercapture",c)}const r={Space:"jump",KeyJ:"strike",KeyK:"blast",KeyQ:"field",KeyF:"lock",Tab:"lock"};window.addEventListener("keydown",a=>{if(a.repeat)return;this.keys.add(a.code);const o=r[a.code];o&&(a.preventDefault(),this._press(o)),(a.code==="Escape"||a.code==="KeyP")&&this.onPause?.()}),window.addEventListener("keyup",a=>{this.keys.delete(a.code);const o=r[a.code];o&&this._release(o)}),window.addEventListener("blur",()=>{this.keys.clear();for(const a of Xa)this._release(a);this.move.x=this.move.y=0,this.joy=null,this._joyHome()})}_joyHome(){this.base.style.left="84px",this.base.style.top="calc(100% - 78px)",this._knob(0,0)}_knob(t,e){this.knob.style.transform=`translate(${t}px, ${e}px)`}_press(t){this.held[t]||this.pressed.add(t),this.held[t]=!0}_release(t){this.held[t]&&this.released.add(t),this.held[t]=!1}sample(){let t=this.move.x,e=this.move.y;const n=this.keys;n.has("KeyW")&&(e+=1),n.has("KeyS")&&(e-=1),n.has("KeyA")&&(t-=1),n.has("KeyD")&&(t+=1);let s=this.look.x,r=this.look.y;this.look.x=this.look.y=0,n.has("ArrowLeft")&&(s-=8),n.has("ArrowRight")&&(s+=8),n.has("ArrowUp")&&(r-=5),n.has("ArrowDown")&&(r+=5);const a={...this.held},o=new Set(this.pressed),l=new Set(this.released);if(this.pressed.clear(),this.released.clear(),this.virtual){const f=this.virtual;f.move&&(t+=f.move.x,e+=f.move.y),f.look&&(s+=f.look.x,r+=f.look.y,f.look=null);for(const d of Xa){const h=!!f.held?.[d];h&&!f._prev?.[d]&&o.add(d),!h&&f._prev?.[d]&&l.add(d),a[d]=a[d]||h}f._prev={...f.held};for(const d of f.taps||[])o.add(d),l.add(d);f.taps=[]}const c=Math.hypot(t,e);return c>1&&(t/=c,e/=c),this.enabled?{move:{x:t,y:e},look:{x:s,y:r},held:a,pressed:o,released:l}:{move:{x:0,y:0},look:{x:0,y:0},held:{},pressed:new Set,released:new Set}}}class v_{constructor(){this.ctx=null,this.master=null,this.vol=.7,this.noiseBuf=null,this.pad=null}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.vol,this.master.connect(this.ctx.destination);const e=this.ctx.sampleRate*1;this.noiseBuf=this.ctx.createBuffer(1,e,this.ctx.sampleRate);const n=this.noiseBuf.getChannelData(0);for(let s=0;s<e;s++)n[s]=Math.random()*2-1}setVolume(t){this.vol=t,this.master&&(this.master.gain.value=t)}_env(t,e,n,s,r){t.gain.setValueAtTime(1e-4,e),t.gain.exponentialRampToValueAtTime(s,e+n),t.gain.exponentialRampToValueAtTime(1e-4,e+r)}tone(t,e,n,s,r=.2,a=0){if(!this.ctx)return;const o=this.ctx.currentTime+a,l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type=t,l.frequency.setValueAtTime(e,o),l.frequency.exponentialRampToValueAtTime(Math.max(20,n),o+s),this._env(c,o,.01,r,s),l.connect(c).connect(this.master),l.start(o),l.stop(o+s+.05)}noise(t,e,n,s=.25,r=1.2,a=0){if(!this.ctx)return;const o=this.ctx.currentTime+a,l=this.ctx.createBufferSource();l.buffer=this.noiseBuf;const c=this.ctx.createBiquadFilter();c.type="bandpass",c.Q.value=r,c.frequency.setValueAtTime(t,o),c.frequency.exponentialRampToValueAtTime(e,o+n);const f=this.ctx.createGain();this._env(f,o,.03,s,n),l.connect(c).connect(f).connect(this.master),l.start(o),l.stop(o+n+.05)}play(t){switch(t){case"whoosh":this.noise(400,2400,.35,.3);break;case"strike":this.noise(900,3e3,.12,.2,2),this.tone("triangle",520,300,.12,.12);break;case"strike3":this.noise(500,3200,.25,.3,1.5),this.tone("sine",330,660,.25,.18);break;case"blast":this.tone("sine",880,220,.3,.2),this.noise(1500,500,.25,.12);break;case"calm":[523,659,784,1047].forEach((e,n)=>this.tone("sine",e,e,.5,.12,n*.07));break;case"jump":this.tone("triangle",300,600,.15,.12);break;case"hit":this.tone("square",160,60,.2,.15),this.noise(300,120,.2,.2);break;case"field":this.tone("sine",196,392,.6,.12),this.tone("sine",294,588,.6,.08);break;case"pulse":this.tone("sawtooth",110,55,.6,.15),this.tone("square",220,880,.3,.05);break;case"hype":this.tone("sawtooth",660,990,.18,.08);break;case"charge":this.tone("sawtooth",80,240,.8,.15);break;case"slam":this.noise(200,60,.5,.4,.8),this.tone("sine",90,40,.5,.3);break;case"lock":this.tone("square",1200,1600,.06,.06);break;case"win":[523,659,784,1047,1319].forEach((e,n)=>this.tone("triangle",e,e,.7,.12,n*.12));break;case"lose":[392,330,262].forEach((e,n)=>this.tone("sawtooth",e,e*.9,.5,.08,n*.2));break;case"ui":this.tone("sine",700,900,.08,.08);break}}startPad(){if(!this.ctx||this.pad)return;const t=this.ctx.createGain();t.gain.value=.035;const e=this.ctx.createBiquadFilter();e.type="lowpass",e.frequency.value=700;const n=[110,164.8,220.5].map(a=>{const o=this.ctx.createOscillator();return o.type="sawtooth",o.frequency.value=a,o.connect(e),o.start(),o}),s=this.ctx.createOscillator();s.frequency.value=.08;const r=this.ctx.createGain();r.gain.value=300,s.connect(r).connect(e.frequency),s.start(),e.connect(t).connect(this.master),this.pad={g:t,os:n,lfo:s}}}const xl="chillblazer-brawler-save-v1",jc={quality:"medium",sens:1,vol:.7,invertY:!1,showFps:!1};function $r(){return{hero:"chillblazer",cleared:[],enforcer:!1,ampCalmed:!1,amp:!1,wins:0,bestTime:0,playTime:0,checkpoint:"start"}}function M_(){try{const i=JSON.parse(localStorage.getItem(xl)||"null");if(i&&i.v===1)return{settings:{...jc,...i.settings},progress:i.progress?{...$r(),...i.progress}:null}}catch{}return{settings:{...jc},progress:null}}function y_(i,t){try{localStorage.setItem(xl,JSON.stringify({v:1,settings:i,progress:t,savedAt:Date.now()}))}catch{}}function S_(){try{localStorage.removeItem(xl)}catch{}}const b_="modulepreload",E_=function(i,t){return new URL(i,t).href},th={},eh=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");s=Promise.allSettled(e.map(c=>{if(c=E_(c,n),c in th)return;th[c]=!0;const f=c.endsWith(".css"),d=f?'[rel="stylesheet"]':"";if(!!n)for(let m=a.length-1;m>=0;m--){const v=a[m];if(v.href===c&&(!f||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${d}`))return;const u=document.createElement("link");if(u.rel=f?"stylesheet":b_,f||(u.as="script"),u.crossOrigin="",u.href=c,l&&u.setAttribute("nonce",l),document.head.appendChild(u),f)return new Promise((m,v)=>{u.addEventListener("load",m),u.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})};function w_(i,t){const e=()=>{var h;return(h=i.input).virtual||(h.virtual={move:{x:0,y:0},held:{},taps:[]})},n={on:!1,t:0,holdUntil:{},tapCd:{},goal:null,lastPos:new P,log:[]},s={app:t,game:i,state(){const h=i.player,u=i.boss;return{screen:i.state,stage:i.progress?i.stage():null,progress:i.progress?JSON.parse(JSON.stringify(i.progress)):null,player:{x:+h.pos.x.toFixed(2),y:+h.pos.y.toFixed(2),z:+h.pos.z.toFixed(2),facing:+h.facing.toFixed(2),chill:+h.chill.toFixed(1),grounded:h.grounded,action:h.action?.pose||null,jumps:h.jumpCount},panic:+(i.panic??0).toFixed(1),cam:{yaw:+i.cam.yaw.toFixed(3),pitch:+i.cam.pitch.toFixed(3)},enemies:i.enemies.filter(m=>!m.removed).map(m=>({kind:m.kind,stress:+m.stress.toFixed(1),max:m.maxStress,calmed:m.calmed,state:m.state,d:+m.pos.distanceTo(h.pos).toFixed(1)})),boss:u?{name:u.name,kind:u.kind,stress:+u.stress.toFixed(1),max:u.maxStress,phase:u.phase||0}:null,lock:i.lock?i.lock.kind:null,activeHotspot:i.activeHotspot,fps:+i.fps.toFixed(1),pulses:{...i.stats},fieldOn:h.kit.field.busy(),hasFive:!!h.kit.five,objectives:i.progress?i.objectives().map(m=>m.id):[],markersVisible:Object.entries(i.markers||{}).filter(([m,v])=>v.visible&&/^h/.test(m)).map(([m])=>m),traffic:i.city.traffic?{...i.city.traffic.counts,stops:i.city.traffic.stops,honks:i.city.traffic.honks}:null,pixelRatio:i.pixelRatio,drawCalls:i.renderer.info.render.calls,tris:i.renderer.info.render.triangles}},setVirtual(h){Object.assign(e(),h)},tap(h){e().taps.push(h)},hold(h,u){e().held[h]=u},teleport(h,u,m){i.player.pos.set(h,u,m),i.player.vel.set(0,0,0),i.cam.pos.set(h,u+3,m+6)},faceCamera(h){i.cam.yaw=h},frameStats(){const h=i.frameTimes.slice(-300),u=h.reduce((v,g)=>v+g,0)/Math.max(1,h.length),m=[...h].sort((v,g)=>v-g);return{avgFps:1/u,p95ms:(m[Math.floor(m.length*.95)]||0)*1e3,n:h.length}},autopilot(h,u){if(n.on=h,n.goal=u?new P(u.x,0,u.z):null,!h){const m=e();m.move={x:0,y:0},m.held={}}},apLog:()=>n.log,modelView(h={}){i.modelView={yaw:0,dist:2.6,h:1.4,look:1.15,pose:null,...h},i.state="model",i.hud.show(!1);for(const u of document.querySelectorAll(".screen"))u.classList.add("hidden")}};s.spawn=async(h,u,m,v=0)=>{const g=await eh(()=>Promise.resolve().then(()=>a_),void 0,import.meta.url),p={citizen:g.Citizen,goon:g.Goon,caster:g.Caster,drone:g.Drone}[h];return i.addEnemy(new p(i,new P(u,v,m),{})).id},s.enemy=h=>{const u=i.enemies.find(m=>m.id===h);return u?{x:+u.pos.x.toFixed(2),z:+u.pos.z.toFixed(2),state:u.state,stress:u.stress,calmed:u.calmed,d:+u.pos.distanceTo(i.player.pos).toFixed(2)}:null},s.cars=()=>i.city.traffic.cars.filter(h=>!h.parked).map(h=>({alongZ:h.alongZ,lane:h.lane,dir:h.dir,s:+h.s.toFixed(2),v:+h.v.toFixed(2),x:+h.px.toFixed(2),z:+h.pz.toFixed(2)})),s.signal=h=>i.city.traffic.signal(h,i.time),s.waves=async()=>(await eh(async()=>{const{WAVES:h}=await Promise.resolve().then(()=>x_);return{WAVES:h}},void 0,import.meta.url)).WAVES,s.setProgress=h=>{Object.assign(i.progress,h),i.refreshMarkers(),i.updateObjective()},window.__CB=s;const r=i.input.sample.bind(i.input);i.input.sample=()=>(a.on&&i.state==="play"?o(1/60):n.on&&i.state==="play"&&f(1/60),r());const a={on:!1,i:0,t:0,wps:[],log:[]};s.climb=h=>{Object.assign(a,{on:!0,i:0,t:0,wps:h,log:[]})},s.climbState=()=>({on:a.on,i:a.i,n:a.wps.length,log:a.log});function o(h){const u=e(),m=i.player,v=a.wps[a.i];if(!v){a.on=!1,u.move={x:0,y:0};return}a.t+=h;const g=new P(v.x-m.pos.x,0,v.z-m.pos.z),p=g.length();u.move=p>.3?l(g.normalize()):{x:0,y:0},v.j&&m.grounded&&p<(v.trigger||2.2)&&m.pos.y<(v.y??99)-.3&&(u.taps.push("jump"),a.jumped=!0),v.j===2&&a.jumped&&!m.grounded&&m.vel.y<3&&m.airJumps>0&&(u.taps.push("jump"),a.jumped=!1),p<.6&&m.pos.y>=(v.y??-1)-.15&&m.grounded?(a.log.push({i:a.i,y:+m.pos.y.toFixed(2),t:+a.t.toFixed(2)}),a.i++,a.t=0,a.jumped=!1):a.t>8&&(a.log.push({i:a.i,fail:!0,x:+m.pos.x.toFixed(2),y:+m.pos.y.toFixed(2),z:+m.pos.z.toFixed(2)}),a.on=!1,u.move={x:0,y:0})}function l(h){const u=i.cam.yaw,m=new P(-Math.sin(u),0,-Math.cos(u)),v=new P(Math.cos(u),0,-Math.sin(u));return{x:h.dot(v),y:h.dot(m)}}function c(h,u){const m=performance.now();(n.tapCd[h]||0)>m||(n.tapCd[h]=m+u*1e3,e().taps.push(h))}function f(h){const u=e(),m=i.player,v=performance.now();u.held=u.held||{},u.held.field=(n.holdUntil.field||0)>v;const g=i.targets().filter(L=>L.pos.distanceTo(m.pos)<45);let p=i.lock&&!i.lock.calmed?i.lock:null;!p&&g.length&&c("lock",.5),p||(p=g.sort((L,A)=>L.pos.distanceTo(m.pos)-A.pos.distanceTo(m.pos))[0]);for(const L of i.pulses){const U=(Math.hypot(m.pos.x-L.c.x,m.pos.z-L.c.z)-L.r)/L.speed;!L.hit&&!L.bot&&U>.02&&U<.3&&m.pos.y-i.col.groundAt(m.pos.x,m.pos.z,m.radius,m.pos.y)<.5&&(L.bot=!0,m.chill>30&&Math.random()<.35?(n.holdUntil.field=v+700,u.held.field=!0):u.taps.push("jump"))}const y=i.boss&&i.boss.kind==="amp"?i.boss:null;if(y&&y.state==="overdrive"&&y.stateT>.8&&!n.odJump&&(n.odJump=!0,m.chill>30?(n.holdUntil.field=v+900,u.held.field=!0):u.taps.push("jump")),y&&y.state!=="overdrive"&&(n.odJump=!1),!p){if(m.chill<75&&!g.length){n.jogA=(n.jogA||0)+h*1.6,u.move={x:Math.cos(n.jogA),y:Math.sin(n.jogA)};return}if(n.goal){const L=n.goal.clone().sub(m.pos).setY(0);L.length()>1.5?(u.move=l(L.normalize()),d(h,u)):u.move={x:0,y:0}}else u.move={x:0,y:0};return}const T=p.pos.clone().sub(m.pos),M=T.y;T.y=0;const S=T.length()-(p.radius||.5),E=T.clone().normalize();if(p.kind==="enforcer"&&(p.state==="tele"||p.state==="charge")){const L=new P(E.z,0,-E.x);u.move=l(L);return}if(p.kind==="enforcer"&&p.state==="slam"){u.move=l(E.clone().multiplyScalar(-1));return}(i.proj.list.some(L=>L.owner==="enemy"&&!L.dead&&L.mesh.position.distanceTo(m.pos)<6)||i.panic>65)&&m.chill>30&&!m.kit.field.busy()&&(n.holdUntil.field=v+700),g.filter(L=>L.pos.distanceTo(m.pos)<5).length>=3&&m.chill>35&&!m.kit.field.busy()&&(n.holdUntil.field=v+1400);const w=i.proj.list.find(L=>L.owner==="enemy"&&!L.dead&&L.mesh.position.distanceTo(m.pos)<9&&L.vel.clone().normalize().dot(m.pos.clone().sub(L.mesh.position).normalize())>.8);if(w&&!m.kit.field.busy()){const L=w.vel.clone().setY(0).normalize();n.dodge=n.dodge||(Math.random()<.5?1:-1),u.move=l(new P(L.z*n.dodge,0,-L.x*n.dodge));return}else n.dodge=0;if(m.chill<18&&p.kind!=="core"){n.jogA=(n.jogA||0)+h*1.2;const L=new P(E.z,0,-E.x);u.move=l(L.multiplyScalar(.9).addScaledVector(E,S<5?-.6:.2).normalize()),d(h,u);return}const D=p.kind==="drone"||p.kind==="core";(D||S>5)&&m.chill>=16&&c("blast",.42);const B=p.kind==="amp"?1.6:p.kind==="drone"?5:1.4;D&&n.goal&&m.pos.clone().setY(0).distanceTo(n.goal)>7?(u.move=l(n.goal.clone().sub(m.pos).setY(0).normalize()),d(h,u)):S>B?(u.move=l(E),d(h,u)):u.move={x:0,y:0},S<2.6&&Math.abs(M)<1.6&&c("strike",.14),p.kind==="core"&&S<3&&(c("jump",.8),c("strike",.14))}function d(h,u){const m=i.player;n.t+=h,n.t>.5&&(m.pos.distanceTo(n.lastPos)<.6&&Math.hypot(u.move.x,u.move.y)>.5&&c("jump",.4),n.lastPos.copy(m.pos),n.t=0)}}const jt=i=>document.getElementById(i),nf=M_(),un=nf.settings;let nn=nf.progress;const Zn=new v_;Zn.setVolume(un.vol);const sf=new __(jt("game")),Ae=new gl(jt("game"),sf,Zn,un),Qr=()=>y_(un,nn);Ae.onSave=()=>{nn=Ae.progress,Qr()};const T_=["screen-title","screen-pause","screen-settings","screen-end"];function pi(i){for(const t of T_)jt(t).classList.toggle("hidden",t!==i)}function rf(){const i=nn&&!nn.amp&&(nn.cleared.length||nn.enforcer||nn.playTime>5);jt("btn-continue").classList.toggle("hidden",!i);const t=nn;let e="";t&&(e=`Saved: ${t.cleared.length}/3 hotspots calmed${t.enforcer?", Enforcer calmed":""}${t.ampCalmed&&!t.amp?", Amp calmed":""}${t.wins?` | City calmed x${t.wins}, best ${af(t.bestTime)}`:""}`),jt("save-info").textContent=e}const af=i=>`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`;function jr(){Ae.state="title",Ae.hud.show(!1),Ae.clearEnemies(),pi("screen-title"),rf()}function ta(i){Zn.unlock(),Zn.startPad(),nn=i,Qr(),pi(null),Ae.startSession(nn),A_()}function A_(){const i=document.documentElement;!document.fullscreenElement&&i.requestFullscreen&&matchMedia("(pointer: coarse)").matches&&i.requestFullscreen({navigationUI:"hide"}).then(()=>screen.orientation?.lock?.("landscape").catch(()=>{})).catch(()=>{})}function ea(){Ae.state==="play"&&(Ae.state="pause",Ae.save(),pi("screen-pause"))}function _l(){pi(null),Ae.state="play",zo=performance.now()}sf.onPause=()=>{Ae.state==="play"?ea():Ae.state==="pause"&&_l()};jt("btn-new").onclick=()=>{Zn.unlock(),Zn.play("ui"),ta($r())};jt("btn-continue").onclick=()=>{Zn.unlock(),Zn.play("ui"),ta(nn)};jt("btn-pause").onclick=ea;jt("btn-pause").addEventListener("pointerdown",i=>i.stopPropagation());jt("btn-resume").onclick=_l;jt("btn-quit").onclick=()=>{Ae.save(),jr()};let of="screen-title";const lf=i=>{of=i,jt("set-quality").value=un.quality,jt("set-sens").value=un.sens,jt("set-vol").value=un.vol,jt("set-invert").checked=un.invertY,jt("set-fps").checked=un.showFps,pi("screen-settings")};jt("btn-settings").onclick=()=>lf("screen-title");jt("btn-settings2").onclick=()=>lf("screen-pause");jt("btn-settings-done").onclick=()=>{const i=jt("set-quality").value,t=i!==un.quality;Object.assign(un,{quality:i,sens:+jt("set-sens").value,vol:+jt("set-vol").value,invertY:jt("set-invert").checked,showFps:jt("set-fps").checked}),Zn.setVolume(un.vol),jt("fps").classList.toggle("hidden",!un.showFps),Qr(),t&&(Ae.applyQuality(),Ae.showToast?.("Quality saved (full effect after reload)")),pi(of)};jt("btn-reset").onclick=()=>{S_(),nn=null,rf(),pi("screen-title")};Ae.onEnd=i=>{nn=Ae.progress,Qr(),Ae.hud.show(!1),pi("screen-end"),jt("screen-end").classList.toggle("win",i==="win"),jt("screen-end").classList.toggle("lose",i!=="win"),i==="win"?(jt("end-title").textContent="CITY CALMED",jt("end-text").textContent=`The OVERDRIVE signal is silent and the Amp Tower glows green. The Amp finally sat down and breathed. Calm the storm. Time ${af(Ae.sessionTime)}.`,jt("btn-end-primary").textContent="PLAY AGAIN"):(jt("end-title").textContent="THE CITY PANICKED",jt("end-text").textContent="Panic hit 100%. Keep moving to recharge Chill, calm enemies before they swarm you, and jump or Calm Field through OVERDRIVE pulses.",jt("btn-end-primary").textContent="RETRY FROM CHECKPOINT"),jt("btn-end-primary").onclick=()=>ta(i==="win"?$r():nn)};jt("btn-end-title").onclick=jr;document.addEventListener("visibilitychange",()=>{document.hidden&&ea()});let zo=performance.now();function cf(i){const t=Math.min(.1,(i-zo)/1e3);zo=i;const e=window.__CB?.speed||1;for(let n=1;n<e;n++)Ae.update(Math.min(t,1/30));Ae.tick(Math.min(t,1/30),t),requestAnimationFrame(cf)}requestAnimationFrame(cf);jr();w_(Ae,{start:ta,pause:ea,resume:_l,goTitle:jr,settings:un,getProgress:()=>nn,defaultProgress:$r});"serviceWorker"in navigator&&window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(i=>console.warn("SW registration failed",i)));let Cs=null;window.addEventListener("beforeinstallprompt",i=>{i.preventDefault(),Cs=i,window.__CB_installable=!0,jt("btn-install").classList.remove("hidden")});jt("btn-install").onclick=async()=>{Cs&&(Cs.prompt(),await Cs.userChoice.catch(()=>{}),Cs=null,jt("btn-install").classList.add("hidden"))};

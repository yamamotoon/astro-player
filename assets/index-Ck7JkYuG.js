var Rh=Object.defineProperty;var Ch=(i,t,e)=>t in i?Rh(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var F=(i,t,e)=>Ch(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Lh={ja:{"page-title":"天空プレイヤー - 太陽・月位置シミュレーター",h1:"天空プレイヤー","toggle-aria":"設定を開閉","nav-back":"メニューに戻る","nav-dashboard":"🪐 3D+2D","nav-sky":"🔭 SKY","nav-scale":"🌍 スケール","nav-scale-orbit":"☀️ 地球の公転","nav-scale-spin":"🌓 地球の自転","menu-dashboard-desc":"3D天球・2D方位図・天体情報","menu-sky-desc":"ジャイロで天球を見るARビュー","menu-scale-desc":"太陽系の天体の大きさを並べて比較","menu-scale-orbit-desc":"太陽の周りを回る地球と、月の動き・満ち欠けを見る","menu-scale-spin-desc":"地球の自転（昼と夜）と、月がいつも同じ面を向けている様子を見る",location:"場所",lat:"緯度",lng:"経度","show-constellations":"星座表示","show-famous":"有名な星座","show-triangles":"大三角形","play-title":"24時間シミュレーション 再生/停止","view-3d":"3D 天球","compass-toggle-title":"デバイスの向きに合わせる","view-2d":"2D 方位図","scale-view-btn":"視点","scale-view-title":"視点を選ぶ","scale-view-moon-orbit":"地球と月の軌道を見る","scale-view-earth-orbit":"地球の公転軌道を見る","scale-view-focus-sun":"太陽に寄る","scale-view-focus-earth":"地球に寄る","scale-view-focus-moon":"月に寄る","scale-view-focus-mercury":"水星に寄る","scale-view-focus-venus":"金星に寄る","scale-view-focus-mars":"火星に寄る","dialog-close":"閉じる","scale-fit-title":"全体を表示 (Home)","scale-display":"表示","scale-deform-real":"実比率","scale-deform-deform":"見やすく","scale-mode-day":"日","scale-mode-month":"月","scale-mode-year":"年","now-btn":"NOW","now-title":"現在時刻に戻す","ar-start-text":"🔭 タップして開始","skyview-manual":"🖥 手動","skyview-gyro":"🔄 ジャイロ","dir-north":"北(N)","dir-south":"南(S)","dir-east":"東(E)","dir-west":"西(W)","label-sun":"太陽","label-moon":"月","label-earth":"地球","label-mercury":"水星","label-venus":"金星","label-mars":"火星","locate-btn":"現在地","locate-btn-busy":"取得中…","locate-error":"現在地を取得できませんでした。位置情報の使用が許可されているか確認してください。","label-jupiter":"木星","label-saturn":"土星","label-uranus":"天王星","label-neptune":"海王星","label-pluto":"冥王星","size-dwarf-note":"（準惑星）","size-view-all":"全体を見る","size-focus":"{name}に寄る"},en:{"page-title":"astro-player - Sun & Moon Simulator",h1:"astro-player","toggle-aria":"Toggle settings","nav-back":"Back to menu","nav-dashboard":"🪐 3D+2D","nav-sky":"🔭 SKY","nav-scale":"🌍 Scale","nav-scale-orbit":"☀️ Earth's Orbit","nav-scale-spin":"🌓 Earth's Spin","menu-dashboard-desc":"3D sky sphere, 2D compass, celestial info","menu-sky-desc":"AR sky view with gyro","menu-scale-desc":"Compare the sizes of Solar System bodies side by side","menu-scale-orbit-desc":"Earth orbiting the Sun, the Moon's motion & phases","menu-scale-spin-desc":"Earth's day/night spin, and the Moon's tidal lock",location:"Location",lat:"Lat",lng:"Lng","show-constellations":"Constellations","show-famous":"Famous constellations","show-triangles":"Summer Triangle","play-title":"24h Simulation Play/Stop","view-3d":"3D Sky Sphere","compass-toggle-title":"Sync with device heading","view-2d":"2D Compass","scale-view-btn":"View","scale-view-title":"Choose a view","scale-view-moon-orbit":"View the Moon's orbit around Earth","scale-view-earth-orbit":"View Earth's orbit around the Sun","scale-view-focus-sun":"Zoom to the Sun","scale-view-focus-earth":"Zoom to Earth","scale-view-focus-moon":"Zoom to the Moon","scale-view-focus-mercury":"Zoom to Mercury","scale-view-focus-venus":"Zoom to Venus","scale-view-focus-mars":"Zoom to Mars","dialog-close":"Close","scale-fit-title":"Frame all (Home)","scale-display":"Display","scale-deform-real":"To scale","scale-deform-deform":"Easy view","scale-mode-day":"Day","scale-mode-month":"Month","scale-mode-year":"Year","now-btn":"NOW","now-title":"Jump to current time","ar-start-text":"🔭 Tap to start","skyview-manual":"🖥 Manual","skyview-gyro":"🔄 Gyro","dir-north":"N","dir-south":"S","dir-east":"E","dir-west":"W","label-sun":"Sun","label-moon":"Moon","label-earth":"Earth","label-mercury":"Mercury","label-venus":"Venus","label-mars":"Mars","locate-btn":"My location","locate-btn-busy":"Locating…","locate-error":"Could not get your location. Please check that location access is allowed.","label-jupiter":"Jupiter","label-saturn":"Saturn","label-uranus":"Uranus","label-neptune":"Neptune","label-pluto":"Pluto","size-dwarf-note":" (dwarf planet)","size-view-all":"View all","size-focus":"Zoom to {name}"}};let ka="ja";function Xt(i){return Lh[ka][i]??i}function Dn(){return ka}function _c(i){ka=i,document.documentElement.lang=i,document.title=Xt("page-title"),document.querySelectorAll("[data-i18n]").forEach(t=>{t.textContent=Xt(t.dataset.i18n)}),document.querySelectorAll("[data-i18n-title]").forEach(t=>{t.title=Xt(t.dataset.i18nTitle)}),document.querySelectorAll("[data-i18n-aria-label]").forEach(t=>{t.setAttribute("aria-label",Xt(t.dataset.i18nAriaLabel))})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ga="163",_n={ROTATE:0,DOLLY:1,PAN:2},Ln={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ph=0,xo=1,Dh=2,vc=1,Ih=2,gn=3,kn=0,Ie=1,Xe=2,Bn=0,Fi=1,Mo=2,yo=3,So=4,Uh=5,ei=100,Nh=101,Fh=102,Oh=103,Bh=104,zh=200,Hh=201,kh=202,Gh=203,wa=204,Ra=205,Vh=206,Wh=207,Xh=208,Yh=209,qh=210,Kh=211,jh=212,Zh=213,$h=214,Jh=0,Qh=1,tu=2,_r=3,eu=4,nu=5,iu=6,su=7,Va=0,ru=1,au=2,zn=0,ou=1,lu=2,cu=3,hu=4,uu=5,du=6,fu=7,xc=300,Hi=301,ki=302,Ca=303,La=304,wr=306,Pa=1e3,ii=1001,Da=1002,Ye=1003,pu=1004,Us=1005,Je=1006,Hr=1007,si=1008,Hn=1009,mu=1010,gu=1011,Mc=1012,yc=1013,Gi=1014,On=1015,vr=1016,Sc=1017,Ec=1018,As=1020,_u=35902,vu=1021,xu=1022,ln=1023,Mu=1024,yu=1025,Oi=1026,Es=1027,Su=1028,bc=1029,Eu=1030,Tc=1031,Ac=1033,kr=33776,Gr=33777,Vr=33778,Wr=33779,Eo=35840,bo=35841,To=35842,Ao=35843,wc=36196,wo=37492,Ro=37496,Co=37808,Lo=37809,Po=37810,Do=37811,Io=37812,Uo=37813,No=37814,Fo=37815,Oo=37816,Bo=37817,zo=37818,Ho=37819,ko=37820,Go=37821,Xr=36492,Vo=36494,Wo=36495,bu=36283,Xo=36284,Yo=36285,qo=36286,Tu=3200,Au=3201,Rc=0,wu=1,In="",an="srgb",Vn="srgb-linear",Wa="display-p3",Rr="display-p3-linear",xr="linear",ne="srgb",Mr="rec709",yr="p3",hi=7680,Ko=519,Ru=512,Cu=513,Lu=514,Cc=515,Pu=516,Du=517,Iu=518,Uu=519,Ia=35044,jo="300 es",xn=2e3,Sr=2001;class li{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Zo=1234567;const ps=Math.PI/180,bs=180/Math.PI;function Mn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(be[i&255]+be[i>>8&255]+be[i>>16&255]+be[i>>24&255]+"-"+be[t&255]+be[t>>8&255]+"-"+be[t>>16&15|64]+be[t>>24&255]+"-"+be[e&63|128]+be[e>>8&255]+"-"+be[e>>16&255]+be[e>>24&255]+be[n&255]+be[n>>8&255]+be[n>>16&255]+be[n>>24&255]).toLowerCase()}function we(i,t,e){return Math.max(t,Math.min(e,i))}function Xa(i,t){return(i%t+t)%t}function Nu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Fu(i,t,e){return i!==t?(e-i)/(t-i):0}function ms(i,t,e){return(1-e)*i+e*t}function Ou(i,t,e,n){return ms(i,t,1-Math.exp(-e*n))}function Bu(i,t=1){return t-Math.abs(Xa(i,t*2)-t)}function zu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Hu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function ku(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Gu(i,t){return i+Math.random()*(t-i)}function Vu(i){return i*(.5-Math.random())}function Wu(i){i!==void 0&&(Zo=i);let t=Zo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Xu(i){return i*ps}function Yu(i){return i*bs}function qu(i){return(i&i-1)===0&&i!==0}function Ku(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ju(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zu(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),m=r((n-t)/2),v=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*v,l*m,o*c);break;case"YXY":i.set(l*m,o*h,l*v,o*c);break;case"ZYZ":i.set(l*v,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Qe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Zt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const re={DEG2RAD:ps,RAD2DEG:bs,generateUUID:Mn,clamp:we,euclideanModulo:Xa,mapLinear:Nu,inverseLerp:Fu,lerp:ms,damp:Ou,pingpong:Bu,smoothstep:zu,smootherstep:Hu,randInt:ku,randFloat:Gu,randFloatSpread:Vu,seededRandom:Wu,degToRad:Xu,radToDeg:Yu,isPowerOfTwo:qu,ceilPowerOfTwo:Ku,floorPowerOfTwo:ju,setQuaternionFromProperEuler:Zu,normalize:Zt,denormalize:Qe};class vt{constructor(t=0,e=0){vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,e,n,s,r,a,o,l,c){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],v=n[8],M=s[0],p=s[3],f=s[6],R=s[1],x=s[4],A=s[7],D=s[2],L=s[5],w=s[8];return r[0]=a*M+o*R+l*D,r[3]=a*p+o*x+l*L,r[6]=a*f+o*A+l*w,r[1]=c*M+h*R+u*D,r[4]=c*p+h*x+u*L,r[7]=c*f+h*A+u*w,r[2]=d*M+m*R+v*D,r[5]=d*p+m*x+v*L,r[8]=d*f+m*A+v*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,m=c*r-a*l,v=e*u+n*d+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return t[0]=u*M,t[1]=(s*c-h*n)*M,t[2]=(o*n-s*a)*M,t[3]=d*M,t[4]=(h*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=m*M,t[7]=(n*l-c*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Yr.makeScale(t,e)),this}rotate(t){return this.premultiply(Yr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Yr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Yr=new Ft;function Lc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ts(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $u(){const i=Ts("canvas");return i.style.display="block",i}const $o={};function Pc(i){i in $o||($o[i]=!0,console.warn(i))}const Jo=new Ft().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Qo=new Ft().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ns={[Vn]:{transfer:xr,primaries:Mr,toReference:i=>i,fromReference:i=>i},[an]:{transfer:ne,primaries:Mr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Rr]:{transfer:xr,primaries:yr,toReference:i=>i.applyMatrix3(Qo),fromReference:i=>i.applyMatrix3(Jo)},[Wa]:{transfer:ne,primaries:yr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Qo),fromReference:i=>i.applyMatrix3(Jo).convertLinearToSRGB()}},Ju=new Set([Vn,Rr]),Qt={enabled:!0,_workingColorSpace:Vn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Ju.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Ns[t].toReference,s=Ns[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Ns[i].primaries},getTransfer:function(i){return i===In?xr:Ns[i].transfer}};function Bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ui;class Qu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ui===void 0&&(ui=Ts("canvas")),ui.width=t.width,ui.height=t.height;const n=ui.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ui}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ts("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Bi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bi(e[n]/255)*255):e[n]=Bi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let td=0;class Dc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=Mn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Kr(s[a].image)):r.push(Kr(s[a]))}else r=Kr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Kr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ed=0;class Le extends li{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,n=ii,s=ii,r=Je,a=si,o=ln,l=Hn,c=Le.DEFAULT_ANISOTROPY,h=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=Mn(),this.name="",this.source=new Dc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pa:t.x=t.x-Math.floor(t.x);break;case ii:t.x=t.x<0?0:1;break;case Da:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pa:t.y=t.y-Math.floor(t.y);break;case ii:t.y=t.y<0?0:1;break;case Da:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=xc;Le.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,n=0,s=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],v=l[9],M=l[2],p=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-M)<.01&&Math.abs(v-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+M)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,A=(m+1)/2,D=(f+1)/2,L=(h+d)/4,w=(u+M)/4,O=(v+p)/4;return x>A&&x>D?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=L/n,r=w/n):A>D?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=L/s,r=O/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=w/r,s=O/r),this.set(n,s,r,e),this}let R=Math.sqrt((p-v)*(p-v)+(u-M)*(u-M)+(d-h)*(d-h));return Math.abs(R)<.001&&(R=1),this.x=(p-v)/R,this.y=(u-M)/R,this.z=(d-h)/R,this.w=Math.acos((c+m+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nd extends li{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const r=new Le(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Dc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends nd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ic extends Le{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class id extends Le{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ue{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],m=r[a+1],v=r[a+2],M=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=v,t[e+3]=M;return}if(u!==M||l!==d||c!==m||h!==v){let p=1-o;const f=l*d+c*m+h*v+u*M,R=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const D=Math.sqrt(x),L=Math.atan2(D,f*R);p=Math.sin(p*L)/D,o=Math.sin(o*L)/D}const A=o*R;if(l=l*p+d*A,c=c*p+m*A,h=h*p+v*A,u=u*p+M*A,p===1-o){const D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],m=r[a+2],v=r[a+3];return t[e]=o*v+h*u+l*m-c*d,t[e+1]=l*v+h*d+c*u-o*m,t[e+2]=c*v+h*m+o*d-l*u,t[e+3]=h*v-o*u-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),m=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*m*v,this._y=c*m*u-d*h*v,this._z=c*h*v+d*m*u,this._w=c*h*u-d*m*v;break;case"YXZ":this._x=d*h*u+c*m*v,this._y=c*m*u-d*h*v,this._z=c*h*v-d*m*u,this._w=c*h*u+d*m*v;break;case"ZXY":this._x=d*h*u-c*m*v,this._y=c*m*u+d*h*v,this._z=c*h*v+d*m*u,this._w=c*h*u-d*m*v;break;case"ZYX":this._x=d*h*u-c*m*v,this._y=c*m*u+d*h*v,this._z=c*h*v-d*m*u,this._w=c*h*u+d*m*v;break;case"YZX":this._x=d*h*u+c*m*v,this._y=c*m*u+d*h*v,this._z=c*h*v-d*m*u,this._w=c*h*u-d*m*v;break;case"XZY":this._x=d*h*u-c*m*v,this._y=c*m*u-d*h*v,this._z=c*h*v+d*m*u,this._w=c*h*u+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(t=0,e=0,n=0){T.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(tl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(tl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return jr.copy(this).projectOnVector(t),this.sub(jr)}reflect(t){return this.sub(jr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jr=new T,tl=new Ue;class ws{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ke):Ke.fromBufferAttribute(r,a),Ke.applyMatrix4(t.matrixWorld),this.expandByPoint(Ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fs.copy(n.boundingBox)),Fs.applyMatrix4(t.matrixWorld),this.union(Fs)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ke),Ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ji),Os.subVectors(this.max,Ji),di.subVectors(t.a,Ji),fi.subVectors(t.b,Ji),pi.subVectors(t.c,Ji),bn.subVectors(fi,di),Tn.subVectors(pi,fi),qn.subVectors(di,pi);let e=[0,-bn.z,bn.y,0,-Tn.z,Tn.y,0,-qn.z,qn.y,bn.z,0,-bn.x,Tn.z,0,-Tn.x,qn.z,0,-qn.x,-bn.y,bn.x,0,-Tn.y,Tn.x,0,-qn.y,qn.x,0];return!Zr(e,di,fi,pi,Os)||(e=[1,0,0,0,1,0,0,0,1],!Zr(e,di,fi,pi,Os))?!1:(Bs.crossVectors(bn,Tn),e=[Bs.x,Bs.y,Bs.z],Zr(e,di,fi,pi,Os))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const un=[new T,new T,new T,new T,new T,new T,new T,new T],Ke=new T,Fs=new ws,di=new T,fi=new T,pi=new T,bn=new T,Tn=new T,qn=new T,Ji=new T,Os=new T,Bs=new T,Kn=new T;function Zr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Kn.fromArray(i,r);const o=s.x*Math.abs(Kn.x)+s.y*Math.abs(Kn.y)+s.z*Math.abs(Kn.z),l=t.dot(Kn),c=e.dot(Kn),h=n.dot(Kn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const sd=new ws,Qi=new T,$r=new T;class Rs{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):sd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qi.subVectors(t,this.center);const e=Qi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Qi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($r.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qi.copy(t.center).add($r)),this.expandByPoint(Qi.copy(t.center).sub($r))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dn=new T,Jr=new T,zs=new T,An=new T,Qr=new T,Hs=new T,ta=new T;class Cs{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(dn.copy(this.origin).addScaledVector(this.direction,e),dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Jr.copy(t).add(e).multiplyScalar(.5),zs.copy(e).sub(t).normalize(),An.copy(this.origin).sub(Jr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(zs),o=An.dot(this.direction),l=-An.dot(zs),c=An.lengthSq(),h=Math.abs(1-a*a);let u,d,m,v;if(h>0)if(u=a*l-o,d=a*o-l,v=r*h,u>=0)if(d>=-v)if(d<=v){const M=1/h;u*=M,d*=M,m=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d<=-v?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c):d<=v?(u=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Jr).addScaledVector(zs,d),m}intersectSphere(t,e){dn.subVectors(t.center,this.origin);const n=dn.dot(this.direction),s=dn.dot(dn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,dn)!==null}intersectTriangle(t,e,n,s,r){Qr.subVectors(e,t),Hs.subVectors(n,t),ta.crossVectors(Qr,Hs);let a=this.direction.dot(ta),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;An.subVectors(this.origin,t);const l=o*this.direction.dot(Hs.crossVectors(An,Hs));if(l<0)return null;const c=o*this.direction.dot(Qr.cross(An));if(c<0||l+c>a)return null;const h=-o*An.dot(ta);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class te{constructor(t,e,n,s,r,a,o,l,c,h,u,d,m,v,M,p){te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,m,v,M,p)}set(t,e,n,s,r,a,o,l,c,h,u,d,m,v,M,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=v,f[11]=M,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/mi.setFromMatrixColumn(t,0).length(),r=1/mi.setFromMatrixColumn(t,1).length(),a=1/mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,m=a*u,v=o*h,M=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+v*c,e[5]=d-M*c,e[9]=-o*l,e[2]=M-d*c,e[6]=v+m*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,m=l*u,v=c*h,M=c*u;e[0]=d+M*o,e[4]=v*o-m,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=m*o-v,e[6]=M+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,m=l*u,v=c*h,M=c*u;e[0]=d-M*o,e[4]=-a*u,e[8]=v+m*o,e[1]=m+v*o,e[5]=a*h,e[9]=M-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,m=a*u,v=o*h,M=o*u;e[0]=l*h,e[4]=v*c-m,e[8]=d*c+M,e[1]=l*u,e[5]=M*c+d,e[9]=m*c-v,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,m=a*c,v=o*l,M=o*c;e[0]=l*h,e[4]=M-d*u,e[8]=v*u+m,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*u+v,e[10]=d-M*u}else if(t.order==="XZY"){const d=a*l,m=a*c,v=o*l,M=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+M,e[5]=a*h,e[9]=m*u-v,e[2]=v*u-m,e[6]=o*h,e[10]=M*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rd,t,ad)}lookAt(t,e,n){const s=this.elements;return Oe.subVectors(t,e),Oe.lengthSq()===0&&(Oe.z=1),Oe.normalize(),wn.crossVectors(n,Oe),wn.lengthSq()===0&&(Math.abs(n.z)===1?Oe.x+=1e-4:Oe.z+=1e-4,Oe.normalize(),wn.crossVectors(n,Oe)),wn.normalize(),ks.crossVectors(Oe,wn),s[0]=wn.x,s[4]=ks.x,s[8]=Oe.x,s[1]=wn.y,s[5]=ks.y,s[9]=Oe.y,s[2]=wn.z,s[6]=ks.z,s[10]=Oe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],v=n[2],M=n[6],p=n[10],f=n[14],R=n[3],x=n[7],A=n[11],D=n[15],L=s[0],w=s[4],O=s[8],E=s[12],_=s[1],C=s[5],I=s[9],P=s[13],B=s[2],W=s[6],$=s[10],Q=s[14],z=s[3],nt=s[7],it=s[11],q=s[15];return r[0]=a*L+o*_+l*B+c*z,r[4]=a*w+o*C+l*W+c*nt,r[8]=a*O+o*I+l*$+c*it,r[12]=a*E+o*P+l*Q+c*q,r[1]=h*L+u*_+d*B+m*z,r[5]=h*w+u*C+d*W+m*nt,r[9]=h*O+u*I+d*$+m*it,r[13]=h*E+u*P+d*Q+m*q,r[2]=v*L+M*_+p*B+f*z,r[6]=v*w+M*C+p*W+f*nt,r[10]=v*O+M*I+p*$+f*it,r[14]=v*E+M*P+p*Q+f*q,r[3]=R*L+x*_+A*B+D*z,r[7]=R*w+x*C+A*W+D*nt,r[11]=R*O+x*I+A*$+D*it,r[15]=R*E+x*P+A*Q+D*q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],m=t[14],v=t[3],M=t[7],p=t[11],f=t[15];return v*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*m-n*l*m)+M*(+e*l*m-e*c*d+r*a*d-s*a*m+s*c*h-r*l*h)+p*(+e*c*u-e*o*m-r*a*u+n*a*m+r*o*h-n*c*h)+f*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],m=t[11],v=t[12],M=t[13],p=t[14],f=t[15],R=u*p*c-M*d*c+M*l*m-o*p*m-u*l*f+o*d*f,x=v*d*c-h*p*c-v*l*m+a*p*m+h*l*f-a*d*f,A=h*M*c-v*u*c+v*o*m-a*M*m-h*o*f+a*u*f,D=v*u*l-h*M*l-v*o*d+a*M*d+h*o*p-a*u*p,L=e*R+n*x+s*A+r*D;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/L;return t[0]=R*w,t[1]=(M*d*r-u*p*r-M*s*m+n*p*m+u*s*f-n*d*f)*w,t[2]=(o*p*r-M*l*r+M*s*c-n*p*c-o*s*f+n*l*f)*w,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*m-n*l*m)*w,t[4]=x*w,t[5]=(h*p*r-v*d*r+v*s*m-e*p*m-h*s*f+e*d*f)*w,t[6]=(v*l*r-a*p*r-v*s*c+e*p*c+a*s*f-e*l*f)*w,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*m+e*l*m)*w,t[8]=A*w,t[9]=(v*u*r-h*M*r-v*n*m+e*M*m+h*n*f-e*u*f)*w,t[10]=(a*M*r-v*o*r+v*n*c-e*M*c-a*n*f+e*o*f)*w,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*m-e*o*m)*w,t[12]=D*w,t[13]=(h*M*s-v*u*s+v*n*d-e*M*d-h*n*p+e*u*p)*w,t[14]=(v*o*s-a*M*s-v*n*l+e*M*l+a*n*p-e*o*p)*w,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,m=r*h,v=r*u,M=a*h,p=a*u,f=o*u,R=l*c,x=l*h,A=l*u,D=n.x,L=n.y,w=n.z;return s[0]=(1-(M+f))*D,s[1]=(m+A)*D,s[2]=(v-x)*D,s[3]=0,s[4]=(m-A)*L,s[5]=(1-(d+f))*L,s[6]=(p+R)*L,s[7]=0,s[8]=(v+x)*w,s[9]=(p-R)*w,s[10]=(1-(d+M))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=mi.set(s[0],s[1],s[2]).length();const a=mi.set(s[4],s[5],s[6]).length(),o=mi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],je.copy(this);const c=1/r,h=1/a,u=1/o;return je.elements[0]*=c,je.elements[1]*=c,je.elements[2]*=c,je.elements[4]*=h,je.elements[5]*=h,je.elements[6]*=h,je.elements[8]*=u,je.elements[9]*=u,je.elements[10]*=u,e.setFromRotationMatrix(je),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=xn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let m,v;if(o===xn)m=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Sr)m=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=xn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,m=(n+s)*h;let v,M;if(o===xn)v=(a+r)*u,M=-2*u;else if(o===Sr)v=r*u,M=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=M,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const mi=new T,je=new te,rd=new T(0,0,0),ad=new T(1,1,1),wn=new T,ks=new T,Oe=new T,el=new te,nl=new Ue;class ke{constructor(t=0,e=0,n=0,s=ke.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-we(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(we(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-we(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(we(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return el.makeRotationFromQuaternion(t),this.setFromRotationMatrix(el,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nl.setFromEuler(this),this.setFromQuaternion(nl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ke.DEFAULT_ORDER="XYZ";class Ya{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let od=0;const il=new T,gi=new Ue,fn=new te,Gs=new T,ts=new T,ld=new T,cd=new Ue,sl=new T(1,0,0),rl=new T(0,1,0),al=new T(0,0,1),ol={type:"added"},hd={type:"removed"},_i={type:"childadded",child:null},ea={type:"childremoved",child:null};class pe extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=Mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pe.DEFAULT_UP.clone();const t=new T,e=new ke,n=new Ue,s=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new te},normalMatrix:{value:new Ft}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ya,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.multiply(gi),this}rotateOnWorldAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.premultiply(gi),this}rotateX(t){return this.rotateOnAxis(sl,t)}rotateY(t){return this.rotateOnAxis(rl,t)}rotateZ(t){return this.rotateOnAxis(al,t)}translateOnAxis(t,e){return il.copy(t).applyQuaternion(this.quaternion),this.position.add(il.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sl,t)}translateY(t){return this.translateOnAxis(rl,t)}translateZ(t){return this.translateOnAxis(al,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Gs.copy(t):Gs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(ts,Gs,this.up):fn.lookAt(Gs,ts,this.up),this.quaternion.setFromRotationMatrix(fn),s&&(fn.extractRotation(s.matrixWorld),gi.setFromRotationMatrix(fn),this.quaternion.premultiply(gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ol),_i.child=t,this.dispatchEvent(_i),_i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hd),ea.child=t,this.dispatchEvent(ea),ea.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ol),_i.child=t,this.dispatchEvent(_i),_i.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,t,ld),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,cd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),m=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}pe.DEFAULT_UP=new T(0,1,0);pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ze=new T,pn=new T,na=new T,mn=new T,vi=new T,xi=new T,ll=new T,ia=new T,sa=new T,ra=new T;class tn{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ze.subVectors(t,e),s.cross(Ze);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ze.subVectors(s,e),pn.subVectors(n,e),na.subVectors(t,e);const a=Ze.dot(Ze),o=Ze.dot(pn),l=Ze.dot(na),c=pn.dot(pn),h=pn.dot(na),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,m=(c*l-o*h)*d,v=(a*h-o*l)*d;return r.set(1-m-v,v,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,mn.x),l.addScaledVector(a,mn.y),l.addScaledVector(o,mn.z),l)}static isFrontFacing(t,e,n,s){return Ze.subVectors(n,e),pn.subVectors(t,e),Ze.cross(pn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ze.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),Ze.cross(pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return tn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;vi.subVectors(s,n),xi.subVectors(r,n),ia.subVectors(t,n);const l=vi.dot(ia),c=xi.dot(ia);if(l<=0&&c<=0)return e.copy(n);sa.subVectors(t,s);const h=vi.dot(sa),u=xi.dot(sa);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(vi,a);ra.subVectors(t,r);const m=vi.dot(ra),v=xi.dot(ra);if(v>=0&&m<=v)return e.copy(r);const M=m*c-l*v;if(M<=0&&c>=0&&v<=0)return o=c/(c-v),e.copy(n).addScaledVector(xi,o);const p=h*v-m*u;if(p<=0&&u-h>=0&&m-v>=0)return ll.subVectors(r,s),o=(u-h)/(u-h+(m-v)),e.copy(s).addScaledVector(ll,o);const f=1/(p+M+d);return a=M*f,o=d*f,e.copy(n).addScaledVector(vi,a).addScaledVector(xi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Uc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function aa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=an){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=Xa(t,1),e=we(e,0,1),n=we(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=aa(a,r,t+1/3),this.g=aa(a,r,t),this.b=aa(a,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=an){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=an){const n=Uc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}copyLinearToSRGB(t){return this.r=qr(t.r),this.g=qr(t.g),this.b=qr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=an){return Qt.fromWorkingColorSpace(Te.copy(this),t),Math.round(we(Te.r*255,0,255))*65536+Math.round(we(Te.g*255,0,255))*256+Math.round(we(Te.b*255,0,255))}getHexString(t=an){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Te.copy(this),e);const n=Te.r,s=Te.g,r=Te.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=an){Qt.fromWorkingColorSpace(Te.copy(this),t);const e=Te.r,n=Te.g,s=Te.b;return t!==an?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Rn),this.setHSL(Rn.h+t,Rn.s+e,Rn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Rn),t.getHSL(Vs);const n=ms(Rn.h,Vs.h,e),s=ms(Rn.s,Vs.s,e),r=ms(Rn.l,Vs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Te=new Ht;Ht.NAMES=Uc;let ud=0;class Wn extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=Mn(),this.name="",this.type="Material",this.blending=Fi,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wa,this.blendDst=Ra,this.blendEquation=ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=_r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ko,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hi,this.stencilZFail=hi,this.stencilZPass=hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fi&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ra&&(n.blendDst=this.blendDst),this.blendEquation!==ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_r&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ko&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Me extends Wn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ke,this.combine=Va,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ue=new T,Ws=new vt;class fe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ia,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Pc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ws.fromBufferAttribute(this,e),Ws.applyMatrix3(t),this.setXY(e,Ws.x,Ws.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Qe(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qe(e,this.array)),e}setX(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qe(e,this.array)),e}setY(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qe(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qe(e,this.array)),e}setW(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),s=Zt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),s=Zt(s,this.array),r=Zt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ia&&(t.usage=this.usage),t}}class Nc extends fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Fc extends fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ee extends fe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let dd=0;const We=new te,oa=new pe,Mi=new T,Be=new ws,es=new ws,xe=new T;class $t extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=Mn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lc(t)?Fc:Nc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,n){return We.makeTranslation(t,e,n),this.applyMatrix4(We),this}scale(t,e,n){return We.makeScale(t,e,n),this.applyMatrix4(We),this}lookAt(t){return oa.lookAt(t),oa.updateMatrix(),this.applyMatrix4(oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ee(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ws);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Be.setFromBufferAttribute(r),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,Be.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,Be.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(Be.min),this.boundingBox.expandByPoint(Be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){const n=this.boundingSphere.center;if(Be.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];es.setFromBufferAttribute(o),this.morphTargetsRelative?(xe.addVectors(Be.min,es.min),Be.expandByPoint(xe),xe.addVectors(Be.max,es.max),Be.expandByPoint(xe)):(Be.expandByPoint(es.min),Be.expandByPoint(es.max))}Be.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(xe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)xe.fromBufferAttribute(o,c),l&&(Mi.fromBufferAttribute(t,c),xe.add(Mi)),s=Math.max(s,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let O=0;O<n.count;O++)o[O]=new T,l[O]=new T;const c=new T,h=new T,u=new T,d=new vt,m=new vt,v=new vt,M=new T,p=new T;function f(O,E,_){c.fromBufferAttribute(n,O),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,_),d.fromBufferAttribute(r,O),m.fromBufferAttribute(r,E),v.fromBufferAttribute(r,_),h.sub(c),u.sub(c),m.sub(d),v.sub(d);const C=1/(m.x*v.y-v.x*m.y);isFinite(C)&&(M.copy(h).multiplyScalar(v.y).addScaledVector(u,-m.y).multiplyScalar(C),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(C),o[O].add(M),o[E].add(M),o[_].add(M),l[O].add(p),l[E].add(p),l[_].add(p))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let O=0,E=R.length;O<E;++O){const _=R[O],C=_.start,I=_.count;for(let P=C,B=C+I;P<B;P+=3)f(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const x=new T,A=new T,D=new T,L=new T;function w(O){D.fromBufferAttribute(s,O),L.copy(D);const E=o[O];x.copy(E),x.sub(D.multiplyScalar(D.dot(E))).normalize(),A.crossVectors(L,E);const C=A.dot(l[O])<0?-1:1;a.setXYZW(O,x.x,x.y,x.z,C)}for(let O=0,E=R.length;O<E;++O){const _=R[O],C=_.start,I=_.count;for(let P=C,B=C+I;P<B;P+=3)w(t.getX(P+0)),w(t.getX(P+1)),w(t.getX(P+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const s=new T,r=new T,a=new T,o=new T,l=new T,c=new T,h=new T,u=new T;if(t)for(let d=0,m=t.count;d<m;d+=3){const v=t.getX(d+0),M=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let m=0,v=0;for(let M=0,p=l.length;M<p;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*h;for(let f=0;f<h;f++)d[v++]=c[m++]}return new fe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new $t,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=t(d,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cl=new te,jn=new Cs,Xs=new Rs,hl=new T,yi=new T,Si=new T,Ei=new T,la=new T,Ys=new T,qs=new vt,Ks=new vt,js=new vt,ul=new T,dl=new T,fl=new T,Zs=new T,$s=new T;class Wt extends pe{constructor(t=new $t,e=new Me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Ys.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(la.fromBufferAttribute(u,t),a?Ys.addScaledVector(la,h):Ys.addScaledVector(la.sub(e),h))}e.add(Ys)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(r),jn.copy(t.ray).recast(t.near),!(Xs.containsPoint(jn.origin)===!1&&(jn.intersectSphere(Xs,hl)===null||jn.origin.distanceToSquared(hl)>(t.far-t.near)**2))&&(cl.copy(r).invert(),jn.copy(t.ray).applyMatrix4(cl),!(n.boundingBox!==null&&jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,jn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,M=d.length;v<M;v++){const p=d[v],f=a[p.materialIndex],R=Math.max(p.start,m.start),x=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let A=R,D=x;A<D;A+=3){const L=o.getX(A),w=o.getX(A+1),O=o.getX(A+2);s=Js(this,f,t,n,c,h,u,L,w,O),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const v=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let p=v,f=M;p<f;p+=3){const R=o.getX(p),x=o.getX(p+1),A=o.getX(p+2);s=Js(this,a,t,n,c,h,u,R,x,A),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,M=d.length;v<M;v++){const p=d[v],f=a[p.materialIndex],R=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let A=R,D=x;A<D;A+=3){const L=A,w=A+1,O=A+2;s=Js(this,f,t,n,c,h,u,L,w,O),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const v=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let p=v,f=M;p<f;p+=3){const R=p,x=p+1,A=p+2;s=Js(this,a,t,n,c,h,u,R,x,A),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function fd(i,t,e,n,s,r,a,o){let l;if(t.side===Ie?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===kn,o),l===null)return null;$s.copy(o),$s.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo($s);return c<e.near||c>e.far?null:{distance:c,point:$s.clone(),object:i}}function Js(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,yi),i.getVertexPosition(l,Si),i.getVertexPosition(c,Ei);const h=fd(i,t,e,n,yi,Si,Ei,Zs);if(h){s&&(qs.fromBufferAttribute(s,o),Ks.fromBufferAttribute(s,l),js.fromBufferAttribute(s,c),h.uv=tn.getInterpolation(Zs,yi,Si,Ei,qs,Ks,js,new vt)),r&&(qs.fromBufferAttribute(r,o),Ks.fromBufferAttribute(r,l),js.fromBufferAttribute(r,c),h.uv1=tn.getInterpolation(Zs,yi,Si,Ei,qs,Ks,js,new vt)),a&&(ul.fromBufferAttribute(a,o),dl.fromBufferAttribute(a,l),fl.fromBufferAttribute(a,c),h.normal=tn.getInterpolation(Zs,yi,Si,Ei,ul,dl,fl,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new T,materialIndex:0};tn.getNormal(yi,Si,Ei,u.normal),h.face=u}return h}class Ls extends $t{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,m=0;v("z","y","x",-1,-1,n,e,t,a,r,0),v("z","y","x",1,-1,n,e,-t,a,r,1),v("x","z","y",1,1,t,n,e,s,a,2),v("x","z","y",1,-1,t,n,-e,s,a,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(u,2));function v(M,p,f,R,x,A,D,L,w,O,E){const _=A/w,C=D/O,I=A/2,P=D/2,B=L/2,W=w+1,$=O+1;let Q=0,z=0;const nt=new T;for(let it=0;it<$;it++){const q=it*C-P;for(let st=0;st<W;st++){const ht=st*_-I;nt[M]=ht*R,nt[p]=q*x,nt[f]=B,c.push(nt.x,nt.y,nt.z),nt[M]=0,nt[p]=0,nt[f]=L>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(st/w),u.push(1-it/O),Q+=1}}for(let it=0;it<O;it++)for(let q=0;q<w;q++){const st=d+q+W*it,ht=d+q+W*(it+1),H=d+(q+1)+W*(it+1),Z=d+(q+1)+W*it;l.push(st,ht,Z),l.push(ht,H,Z),z+=6}o.addGroup(m,z,E),m+=z,d+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ls(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Vi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function De(i){const t={};for(let e=0;e<i.length;e++){const n=Vi(i[e]);for(const s in n)t[s]=n[s]}return t}function pd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Oc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const md={clone:Vi,merge:De};var gd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_d=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends Wn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gd,this.fragmentShader=_d,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vi(t.uniforms),this.uniformsGroups=pd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Bc extends pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Cn=new T,pl=new vt,ml=new vt;class Re extends Bc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=bs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ps*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Cn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Cn.x,Cn.y).multiplyScalar(-t/Cn.z),Cn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cn.x,Cn.y).multiplyScalar(-t/Cn.z)}getViewSize(t,e){return this.getViewBounds(t,pl,ml),e.subVectors(ml,pl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ps*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const bi=-90,Ti=1;class vd extends pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Re(bi,Ti,t,e);s.layers=this.layers,this.add(s);const r=new Re(bi,Ti,t,e);r.layers=this.layers,this.add(r);const a=new Re(bi,Ti,t,e);a.layers=this.layers,this.add(a);const o=new Re(bi,Ti,t,e);o.layers=this.layers,this.add(o);const l=new Re(bi,Ti,t,e);l.layers=this.layers,this.add(l);const c=new Re(bi,Ti,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Sr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class zc extends Le{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Hi,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class xd extends oi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new zc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ls(5,5,5),r=new Gn({name:"CubemapFromEquirect",uniforms:Vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ie,blending:Bn});r.uniforms.tEquirect.value=e;const a=new Wt(s,r),o=e.minFilter;return e.minFilter===si&&(e.minFilter=Je),new vd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const ca=new T,Md=new T,yd=new Ft;class Pn{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ca.subVectors(n,e).cross(Md.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ca),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||yd.getNormalMatrix(t),s=this.coplanarPoint(ca).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zn=new Rs,Qs=new T;class qa{constructor(t=new Pn,e=new Pn,n=new Pn,s=new Pn,r=new Pn,a=new Pn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=xn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],m=s[8],v=s[9],M=s[10],p=s[11],f=s[12],R=s[13],x=s[14],A=s[15];if(n[0].setComponents(l-r,d-c,p-m,A-f).normalize(),n[1].setComponents(l+r,d+c,p+m,A+f).normalize(),n[2].setComponents(l+a,d+h,p+v,A+R).normalize(),n[3].setComponents(l-a,d-h,p-v,A-R).normalize(),n[4].setComponents(l-o,d-u,p-M,A-x).normalize(),e===xn)n[5].setComponents(l+o,d+u,p+M,A+x).normalize();else if(e===Sr)n[5].setComponents(o,u,M,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zn)}intersectsSprite(t){return Zn.center.set(0,0,0),Zn.radius=.7071067811865476,Zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Qs.x=s.normal.x>0?t.max.x:t.min.x,Qs.y=s.normal.y>0?t.max.y:t.min.y,Qs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Sd(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l._updateRange,d=l.updateRanges;if(i.bindBuffer(c,o),u.count===-1&&d.length===0&&i.bufferSubData(c,0,h),d.length!==0){for(let m=0,v=d.length;m<v;m++){const M=d[m];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}u.count!==-1&&(i.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Cr extends $t{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,m=[],v=[],M=[],p=[];for(let f=0;f<h;f++){const R=f*d-a;for(let x=0;x<c;x++){const A=x*u-r;v.push(A,-R,0),M.push(0,0,1),p.push(x/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let R=0;R<o;R++){const x=R+c*f,A=R+c*(f+1),D=R+1+c*(f+1),L=R+1+c*f;m.push(x,A,L),m.push(A,D,L)}this.setIndex(m),this.setAttribute("position",new ee(v,3)),this.setAttribute("normal",new ee(M,3)),this.setAttribute("uv",new ee(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ed=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bd=`#ifdef USE_ALPHAHASH
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
#endif`,Td=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ad=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cd=`#ifdef USE_AOMAP
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
#endif`,Ld=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pd=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Dd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Id=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ud=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fd=`#ifdef USE_IRIDESCENCE
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
#endif`,Od=`#ifdef USE_BUMPMAP
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
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Yd=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,qd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kd=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$d=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qd="gl_FragColor = linearToOutputTexel( gl_FragColor );",tf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,ef=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sf=`#ifdef USE_ENVMAP
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
#endif`,rf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,af=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,of=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uf=`#ifdef USE_GRADIENTMAP
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
}`,df=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ff=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gf=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
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
#endif`,_f=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,vf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Ef=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bf=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Tf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Af=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Df=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,If=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Uf=`#if defined( USE_POINTS_UV )
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
#endif`,Nf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ff=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Of=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Hf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,kf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Gf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qf=`#ifdef USE_NORMALMAP
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
#endif`,Kf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$f=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,tp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ep=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,np=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ip=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ap=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,op=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,cp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,up=`#ifdef USE_SKINNING
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
#endif`,dp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fp=`#ifdef USE_SKINNING
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
#endif`,pp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_p=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vp=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xp=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ep=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tp=`uniform sampler2D t2D;
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
}`,Ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lp=`#include <common>
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
}`,Pp=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Dp=`#define DISTANCE
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
}`,Ip=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Np=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fp=`uniform float scale;
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
}`,Op=`uniform vec3 diffuse;
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
}`,Bp=`#include <common>
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
}`,zp=`uniform vec3 diffuse;
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
}`,Hp=`#define LAMBERT
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
}`,kp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Gp=`#define MATCAP
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
}`,Vp=`#define MATCAP
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
}`,Wp=`#define NORMAL
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
}`,Xp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yp=`#define PHONG
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
}`,qp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Kp=`#define STANDARD
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
}`,jp=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Zp=`#define TOON
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
}`,$p=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Jp=`uniform float size;
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
}`,Qp=`uniform vec3 diffuse;
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
}`,tm=`#include <common>
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
}`,em=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,nm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,im=`uniform vec3 diffuse;
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
}`,Nt={alphahash_fragment:Ed,alphahash_pars_fragment:bd,alphamap_fragment:Td,alphamap_pars_fragment:Ad,alphatest_fragment:wd,alphatest_pars_fragment:Rd,aomap_fragment:Cd,aomap_pars_fragment:Ld,batching_pars_vertex:Pd,batching_vertex:Dd,begin_vertex:Id,beginnormal_vertex:Ud,bsdfs:Nd,iridescence_fragment:Fd,bumpmap_pars_fragment:Od,clipping_planes_fragment:Bd,clipping_planes_pars_fragment:zd,clipping_planes_pars_vertex:Hd,clipping_planes_vertex:kd,color_fragment:Gd,color_pars_fragment:Vd,color_pars_vertex:Wd,color_vertex:Xd,common:Yd,cube_uv_reflection_fragment:qd,defaultnormal_vertex:Kd,displacementmap_pars_vertex:jd,displacementmap_vertex:Zd,emissivemap_fragment:$d,emissivemap_pars_fragment:Jd,colorspace_fragment:Qd,colorspace_pars_fragment:tf,envmap_fragment:ef,envmap_common_pars_fragment:nf,envmap_pars_fragment:sf,envmap_pars_vertex:rf,envmap_physical_pars_fragment:_f,envmap_vertex:af,fog_vertex:of,fog_pars_vertex:lf,fog_fragment:cf,fog_pars_fragment:hf,gradientmap_pars_fragment:uf,lightmap_fragment:df,lightmap_pars_fragment:ff,lights_lambert_fragment:pf,lights_lambert_pars_fragment:mf,lights_pars_begin:gf,lights_toon_fragment:vf,lights_toon_pars_fragment:xf,lights_phong_fragment:Mf,lights_phong_pars_fragment:yf,lights_physical_fragment:Sf,lights_physical_pars_fragment:Ef,lights_fragment_begin:bf,lights_fragment_maps:Tf,lights_fragment_end:Af,logdepthbuf_fragment:wf,logdepthbuf_pars_fragment:Rf,logdepthbuf_pars_vertex:Cf,logdepthbuf_vertex:Lf,map_fragment:Pf,map_pars_fragment:Df,map_particle_fragment:If,map_particle_pars_fragment:Uf,metalnessmap_fragment:Nf,metalnessmap_pars_fragment:Ff,morphinstance_vertex:Of,morphcolor_vertex:Bf,morphnormal_vertex:zf,morphtarget_pars_vertex:Hf,morphtarget_vertex:kf,normal_fragment_begin:Gf,normal_fragment_maps:Vf,normal_pars_fragment:Wf,normal_pars_vertex:Xf,normal_vertex:Yf,normalmap_pars_fragment:qf,clearcoat_normal_fragment_begin:Kf,clearcoat_normal_fragment_maps:jf,clearcoat_pars_fragment:Zf,iridescence_pars_fragment:$f,opaque_fragment:Jf,packing:Qf,premultiplied_alpha_fragment:tp,project_vertex:ep,dithering_fragment:np,dithering_pars_fragment:ip,roughnessmap_fragment:sp,roughnessmap_pars_fragment:rp,shadowmap_pars_fragment:ap,shadowmap_pars_vertex:op,shadowmap_vertex:lp,shadowmask_pars_fragment:cp,skinbase_vertex:hp,skinning_pars_vertex:up,skinning_vertex:dp,skinnormal_vertex:fp,specularmap_fragment:pp,specularmap_pars_fragment:mp,tonemapping_fragment:gp,tonemapping_pars_fragment:_p,transmission_fragment:vp,transmission_pars_fragment:xp,uv_pars_fragment:Mp,uv_pars_vertex:yp,uv_vertex:Sp,worldpos_vertex:Ep,background_vert:bp,background_frag:Tp,backgroundCube_vert:Ap,backgroundCube_frag:wp,cube_vert:Rp,cube_frag:Cp,depth_vert:Lp,depth_frag:Pp,distanceRGBA_vert:Dp,distanceRGBA_frag:Ip,equirect_vert:Up,equirect_frag:Np,linedashed_vert:Fp,linedashed_frag:Op,meshbasic_vert:Bp,meshbasic_frag:zp,meshlambert_vert:Hp,meshlambert_frag:kp,meshmatcap_vert:Gp,meshmatcap_frag:Vp,meshnormal_vert:Wp,meshnormal_frag:Xp,meshphong_vert:Yp,meshphong_frag:qp,meshphysical_vert:Kp,meshphysical_frag:jp,meshtoon_vert:Zp,meshtoon_frag:$p,points_vert:Jp,points_frag:Qp,shadow_vert:tm,shadow_frag:em,sprite_vert:nm,sprite_frag:im},ct={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},on={basic:{uniforms:De([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:De([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:De([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:De([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:De([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:De([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:De([ct.points,ct.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:De([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:De([ct.common,ct.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:De([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:De([ct.sprite,ct.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:De([ct.common,ct.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:De([ct.lights,ct.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};on.physical={uniforms:De([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const tr={r:0,b:0,g:0},$n=new ke,sm=new te;function rm(i,t,e,n,s,r,a){const o=new Ht(0);let l=r===!0?0:1,c,h,u=null,d=0,m=null;function v(p,f){let R=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?e:t).get(x)),x===null?M(o,l):x&&x.isColor&&(M(x,1),R=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||R)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===wr)?(h===void 0&&(h=new Wt(new Ls(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:Vi(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,L,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),$n.copy(f.backgroundRotation),$n.x*=-1,$n.y*=-1,$n.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&($n.y*=-1,$n.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(sm.makeRotationFromEuler($n)),h.material.toneMapped=Qt.getTransfer(x.colorSpace)!==ne,(u!==x||d!==x.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Wt(new Cr(2,2),new Gn({name:"BackgroundMaterial",uniforms:Vi(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(x.colorSpace)!==ne,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function M(p,f){p.getRGB(tr,Oc(i)),n.buffers.color.setClear(tr.r,tr.g,tr.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),l=f,M(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,M(o,l)},render:v}}function am(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(_,C,I,P,B){let W=!1;const $=u(P,I,C);r!==$&&(r=$,c(r.object)),W=m(_,P,I,B),W&&v(_,P,I,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,A(_,C,I,P),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,C,I){const P=I.wireframe===!0;let B=n[_.id];B===void 0&&(B={},n[_.id]=B);let W=B[C.id];W===void 0&&(W={},B[C.id]=W);let $=W[P];return $===void 0&&($=d(l()),W[P]=$),$}function d(_){const C=[],I=[],P=[];for(let B=0;B<e;B++)C[B]=0,I[B]=0,P[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:I,attributeDivisors:P,object:_,attributes:{},index:null}}function m(_,C,I,P){const B=r.attributes,W=C.attributes;let $=0;const Q=I.getAttributes();for(const z in Q)if(Q[z].location>=0){const it=B[z];let q=W[z];if(q===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&(q=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&(q=_.instanceColor)),it===void 0||it.attribute!==q||q&&it.data!==q.data)return!0;$++}return r.attributesNum!==$||r.index!==P}function v(_,C,I,P){const B={},W=C.attributes;let $=0;const Q=I.getAttributes();for(const z in Q)if(Q[z].location>=0){let it=W[z];it===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&(it=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&(it=_.instanceColor));const q={};q.attribute=it,it&&it.data&&(q.data=it.data),B[z]=q,$++}r.attributes=B,r.attributesNum=$,r.index=P}function M(){const _=r.newAttributes;for(let C=0,I=_.length;C<I;C++)_[C]=0}function p(_){f(_,0)}function f(_,C){const I=r.newAttributes,P=r.enabledAttributes,B=r.attributeDivisors;I[_]=1,P[_]===0&&(i.enableVertexAttribArray(_),P[_]=1),B[_]!==C&&(i.vertexAttribDivisor(_,C),B[_]=C)}function R(){const _=r.newAttributes,C=r.enabledAttributes;for(let I=0,P=C.length;I<P;I++)C[I]!==_[I]&&(i.disableVertexAttribArray(I),C[I]=0)}function x(_,C,I,P,B,W,$){$===!0?i.vertexAttribIPointer(_,C,I,B,W):i.vertexAttribPointer(_,C,I,P,B,W)}function A(_,C,I,P){M();const B=P.attributes,W=I.getAttributes(),$=C.defaultAttributeValues;for(const Q in W){const z=W[Q];if(z.location>=0){let nt=B[Q];if(nt===void 0&&(Q==="instanceMatrix"&&_.instanceMatrix&&(nt=_.instanceMatrix),Q==="instanceColor"&&_.instanceColor&&(nt=_.instanceColor)),nt!==void 0){const it=nt.normalized,q=nt.itemSize,st=t.get(nt);if(st===void 0)continue;const ht=st.buffer,H=st.type,Z=st.bytesPerElement,at=H===i.INT||H===i.UNSIGNED_INT||nt.gpuType===yc;if(nt.isInterleavedBufferAttribute){const et=nt.data,dt=et.stride,mt=nt.offset;if(et.isInstancedInterleavedBuffer){for(let bt=0;bt<z.locationSize;bt++)f(z.location+bt,et.meshPerAttribute);_.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let bt=0;bt<z.locationSize;bt++)p(z.location+bt);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let bt=0;bt<z.locationSize;bt++)x(z.location+bt,q/z.locationSize,H,it,dt*Z,(mt+q/z.locationSize*bt)*Z,at)}else{if(nt.isInstancedBufferAttribute){for(let et=0;et<z.locationSize;et++)f(z.location+et,nt.meshPerAttribute);_.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let et=0;et<z.locationSize;et++)p(z.location+et);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let et=0;et<z.locationSize;et++)x(z.location+et,q/z.locationSize,H,it,q*Z,q/z.locationSize*et*Z,at)}}else if($!==void 0){const it=$[Q];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(z.location,it);break;case 3:i.vertexAttrib3fv(z.location,it);break;case 4:i.vertexAttrib4fv(z.location,it);break;default:i.vertexAttrib1fv(z.location,it)}}}}R()}function D(){O();for(const _ in n){const C=n[_];for(const I in C){const P=C[I];for(const B in P)h(P[B].object),delete P[B];delete C[I]}delete n[_]}}function L(_){if(n[_.id]===void 0)return;const C=n[_.id];for(const I in C){const P=C[I];for(const B in P)h(P[B].object),delete P[B];delete C[I]}delete n[_.id]}function w(_){for(const C in n){const I=n[C];if(I[_.id]===void 0)continue;const P=I[_.id];for(const B in P)h(P[B].object),delete P[B];delete I[_.id]}}function O(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:O,resetDefaultState:E,dispose:D,releaseStatesOfGeometry:L,releaseStatesOfProgram:w,initAttributes:M,enableAttribute:p,disableUnusedAttributes:R}}function om(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<h;d++)this.render(l[d],c[d]);else{u.multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let m=0;m<h;m++)d+=c[m];e.update(d,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function lm(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const x=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=e.precision!==void 0?e.precision:"highp";const o=r(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);const l=e.logarithmicDepthBuffer===!0,c=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),p=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),f=h>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:h,maxTextureSize:u,maxCubemapSize:d,maxAttributes:m,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:p,vertexTextures:f,maxSamples:R}}function cm(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Pn,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||s;return s=d,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){const v=u.clippingPlanes,M=u.clipIntersection,p=u.clipShadows,f=i.get(u);if(!s||v===null||v.length===0||r&&!p)r?h(null):c();else{const R=r?0:n,x=R*4;let A=f.clippingState||null;l.value=A,A=h(v,d,x,m);for(let D=0;D!==x;++D)A[D]=e[D];f.clippingState=A,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,v){const M=u!==null?u.length:0;let p=null;if(M!==0){if(p=l.value,v!==!0||p===null){const f=m+M*4,R=d.matrixWorldInverse;o.getNormalMatrix(R),(p===null||p.length<f)&&(p=new Float32Array(f));for(let x=0,A=m;x!==M;++x,A+=4)a.copy(u[x]).applyMatrix4(R,o),a.normal.toArray(p,A),p[A+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,p}}function hm(i){let t=new WeakMap;function e(a,o){return o===Ca?a.mapping=Hi:o===La&&(a.mapping=ki),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ca||o===La)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new xd(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Lr extends Bc{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ui=4,gl=[.125,.215,.35,.446,.526,.582],ni=20,ha=new Lr,_l=new Ht;let ua=null,da=0,fa=0,pa=!1;const ti=(1+Math.sqrt(5))/2,Ai=1/ti,vl=[new T(1,1,1),new T(-1,1,1),new T(1,1,-1),new T(-1,1,-1),new T(0,ti,Ai),new T(0,ti,-Ai),new T(Ai,0,ti),new T(-Ai,0,ti),new T(ti,Ai,0),new T(-ti,Ai,0)];class xl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ua=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ua,da,fa),this._renderer.xr.enabled=pa,t.scissorTest=!1,er(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hi||t.mapping===ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ua=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:vr,format:ln,colorSpace:Vn,depthBuffer:!1},s=Ml(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ml(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=um(r)),this._blurMaterial=dm(r,t,e)}return s}_compileMaterial(t){const e=new Wt(this._lodPlanes[0],t);this._renderer.compile(e,ha)}_sceneToCubeUV(t,e,n,s){const o=new Re(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(_l),h.toneMapping=zn,h.autoClear=!1;const m=new Me({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),v=new Wt(new Ls,m);let M=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,M=!0):(m.color.copy(_l),M=!0);for(let f=0;f<6;f++){const R=f%3;R===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):R===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const x=this._cubeSize;er(s,R*x,f>2?x:0,x,x),h.setRenderTarget(s),M&&h.render(v,o),h.render(t,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Hi||t.mapping===ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Wt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;er(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ha)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=vl[(s-1)%vl.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Wt(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ni-1),M=r/v,p=isFinite(r)?1+Math.floor(h*M):ni;p>ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ni}`);const f=[];let R=0;for(let w=0;w<ni;++w){const O=w/M,E=Math.exp(-O*O/2);f.push(E),w===0?R+=E:w<p&&(R+=2*E)}for(let w=0;w<f.length;w++)f[w]=f[w]/R;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=v,d.mipInt.value=x-n;const A=this._sizeLods[s],D=3*A*(s>x-Ui?s-x+Ui:0),L=4*(this._cubeSize-A);er(e,D,L,3*A,2*A),l.setRenderTarget(e),l.render(u,ha)}}function um(i){const t=[],e=[],n=[];let s=i;const r=i-Ui+1+gl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Ui?l=gl[a-i+Ui-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,v=6,M=3,p=2,f=1,R=new Float32Array(M*v*m),x=new Float32Array(p*v*m),A=new Float32Array(f*v*m);for(let L=0;L<m;L++){const w=L%3*2/3-1,O=L>2?0:-1,E=[w,O,0,w+2/3,O,0,w+2/3,O+1,0,w,O,0,w+2/3,O+1,0,w,O+1,0];R.set(E,M*v*L),x.set(d,p*v*L);const _=[L,L,L,L,L,L];A.set(_,f*v*L)}const D=new $t;D.setAttribute("position",new fe(R,M)),D.setAttribute("uv",new fe(x,p)),D.setAttribute("faceIndex",new fe(A,f)),t.push(D),s>Ui&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ml(i,t,e){const n=new oi(i,t,e);return n.texture.mapping=wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function er(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function dm(i,t,e){const n=new Float32Array(ni),s=new T(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:ni,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function yl(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ka(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Sl(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Ka(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fm(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ca||l===La,h=l===Hi||l===ki;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new xl(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new xl(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function pm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function mm(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const v in d.attributes)t.remove(d.attributes[v]);for(const v in d.morphAttributes){const M=d.morphAttributes[v];for(let p=0,f=M.length;p<f;p++)t.remove(M[p])}d.removeEventListener("dispose",a),delete s[d.id];const m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const v in d)t.update(d[v],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const v in m){const M=m[v];for(let p=0,f=M.length;p<f;p++)t.update(M[p],i.ARRAY_BUFFER)}}function c(u){const d=[],m=u.index,v=u.attributes.position;let M=0;if(m!==null){const R=m.array;M=m.version;for(let x=0,A=R.length;x<A;x+=3){const D=R[x+0],L=R[x+1],w=R[x+2];d.push(D,L,L,w,w,D)}}else if(v!==void 0){const R=v.array;M=v.version;for(let x=0,A=R.length/3-1;x<A;x+=3){const D=x+0,L=x+1,w=x+2;d.push(D,L,L,w,w,D)}}else return;const p=new(Lc(d)?Fc:Nc)(d,1);p.version=M;const f=r.get(u);f&&t.remove(f),r.set(u,p)}function h(u){const d=r.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function gm(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),e.update(d,n,1)}function c(u,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,u*a,m),e.update(d,n,m))}function h(u,d,m){if(m===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let M=0;M<m;M++)this.render(u[M]/a,d[M]);else{v.multiDrawElementsWEBGL(n,d,0,r,u,0,m);let M=0;for(let p=0;p<m;p++)M+=d[p];e.update(M,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function _m(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function vm(i,t,e){const n=new WeakMap,s=new ae;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let _=function(){O.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var m=_;d!==void 0&&d.texture.dispose();const v=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],R=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let A=0;v===!0&&(A=1),M===!0&&(A=2),p===!0&&(A=3);let D=o.attributes.position.count*A,L=1;D>t.maxTextureSize&&(L=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const w=new Float32Array(D*L*4*u),O=new Ic(w,D,L,u);O.type=On,O.needsUpdate=!0;const E=A*4;for(let C=0;C<u;C++){const I=f[C],P=R[C],B=x[C],W=D*L*4*C;for(let $=0;$<I.count;$++){const Q=$*E;v===!0&&(s.fromBufferAttribute(I,$),w[W+Q+0]=s.x,w[W+Q+1]=s.y,w[W+Q+2]=s.z,w[W+Q+3]=0),M===!0&&(s.fromBufferAttribute(P,$),w[W+Q+4]=s.x,w[W+Q+5]=s.y,w[W+Q+6]=s.z,w[W+Q+7]=0),p===!0&&(s.fromBufferAttribute(B,$),w[W+Q+8]=s.x,w[W+Q+9]=s.y,w[W+Q+10]=s.z,w[W+Q+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:O,size:new vt(D,L)},n.set(o,d),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let v=0;for(let p=0;p<c.length;p++)v+=c[p];const M=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",M),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function xm(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class kc extends Le{constructor(t,e,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:Oi,h!==Oi&&h!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Oi&&(n=Gi),n===void 0&&h===Es&&(n=As),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ye,this.minFilter=l!==void 0?l:Ye,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Gc=new Le,Vc=new kc(1,1);Vc.compareFunction=Cc;const Wc=new Ic,Xc=new id,Yc=new zc,El=[],bl=[],Tl=new Float32Array(16),Al=new Float32Array(9),wl=new Float32Array(4);function Ki(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=El[s];if(r===void 0&&(r=new Float32Array(s),El[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Pr(i,t){let e=bl[t];e===void 0&&(e=new Int32Array(t),bl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Mm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2fv(this.addr,t),ge(e,t)}}function Sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;i.uniform3fv(this.addr,t),ge(e,t)}}function Em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4fv(this.addr,t),ge(e,t)}}function bm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;wl.set(n),i.uniformMatrix2fv(this.addr,!1,wl),ge(e,n)}}function Tm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;Al.set(n),i.uniformMatrix3fv(this.addr,!1,Al),ge(e,n)}}function Am(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;Tl.set(n),i.uniformMatrix4fv(this.addr,!1,Tl),ge(e,n)}}function wm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2iv(this.addr,t),ge(e,t)}}function Cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3iv(this.addr,t),ge(e,t)}}function Lm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4iv(this.addr,t),ge(e,t)}}function Pm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2uiv(this.addr,t),ge(e,t)}}function Im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3uiv(this.addr,t),ge(e,t)}}function Um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4uiv(this.addr,t),ge(e,t)}}function Nm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Vc:Gc;e.setTexture2D(t||r,s)}function Fm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Xc,s)}function Om(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Yc,s)}function Bm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Wc,s)}function zm(i){switch(i){case 5126:return Mm;case 35664:return ym;case 35665:return Sm;case 35666:return Em;case 35674:return bm;case 35675:return Tm;case 35676:return Am;case 5124:case 35670:return wm;case 35667:case 35671:return Rm;case 35668:case 35672:return Cm;case 35669:case 35673:return Lm;case 5125:return Pm;case 36294:return Dm;case 36295:return Im;case 36296:return Um;case 35678:case 36198:case 36298:case 36306:case 35682:return Nm;case 35679:case 36299:case 36307:return Fm;case 35680:case 36300:case 36308:case 36293:return Om;case 36289:case 36303:case 36311:case 36292:return Bm}}function Hm(i,t){i.uniform1fv(this.addr,t)}function km(i,t){const e=Ki(t,this.size,2);i.uniform2fv(this.addr,e)}function Gm(i,t){const e=Ki(t,this.size,3);i.uniform3fv(this.addr,e)}function Vm(i,t){const e=Ki(t,this.size,4);i.uniform4fv(this.addr,e)}function Wm(i,t){const e=Ki(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Xm(i,t){const e=Ki(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ym(i,t){const e=Ki(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function qm(i,t){i.uniform1iv(this.addr,t)}function Km(i,t){i.uniform2iv(this.addr,t)}function jm(i,t){i.uniform3iv(this.addr,t)}function Zm(i,t){i.uniform4iv(this.addr,t)}function $m(i,t){i.uniform1uiv(this.addr,t)}function Jm(i,t){i.uniform2uiv(this.addr,t)}function Qm(i,t){i.uniform3uiv(this.addr,t)}function tg(i,t){i.uniform4uiv(this.addr,t)}function eg(i,t,e){const n=this.cache,s=t.length,r=Pr(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Gc,r[a])}function ng(i,t,e){const n=this.cache,s=t.length,r=Pr(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Xc,r[a])}function ig(i,t,e){const n=this.cache,s=t.length,r=Pr(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Yc,r[a])}function sg(i,t,e){const n=this.cache,s=t.length,r=Pr(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Wc,r[a])}function rg(i){switch(i){case 5126:return Hm;case 35664:return km;case 35665:return Gm;case 35666:return Vm;case 35674:return Wm;case 35675:return Xm;case 35676:return Ym;case 5124:case 35670:return qm;case 35667:case 35671:return Km;case 35668:case 35672:return jm;case 35669:case 35673:return Zm;case 5125:return $m;case 36294:return Jm;case 36295:return Qm;case 36296:return tg;case 35678:case 36198:case 36298:case 36306:case 35682:return eg;case 35679:case 36299:case 36307:return ng;case 35680:case 36300:case 36308:case 36293:return ig;case 36289:case 36303:case 36311:case 36292:return sg}}class ag{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zm(e.type)}}class og{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=rg(e.type)}}class lg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const ma=/(\w+)(\])?(\[|\.)?/g;function Rl(i,t){i.seq.push(t),i.map[t.id]=t}function cg(i,t,e){const n=i.name,s=n.length;for(ma.lastIndex=0;;){const r=ma.exec(n),a=ma.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Rl(e,c===void 0?new ag(o,i,t):new og(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new lg(o),Rl(e,u)),e=u}}}class ur{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);cg(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Cl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const hg=37297;let ug=0;function dg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function fg(i){const t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(i);let n;switch(t===e?n="":t===yr&&e===Mr?n="LinearDisplayP3ToLinearSRGB":t===Mr&&e===yr&&(n="LinearSRGBToLinearDisplayP3"),i){case Vn:case Rr:return[n,"LinearTransferOETF"];case an:case Wa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ll(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+dg(i.getShaderSource(t),a)}else return s}function pg(i,t){const e=fg(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function mg(i,t){let e;switch(t){case ou:e="Linear";break;case lu:e="Reinhard";break;case cu:e="OptimizedCineon";break;case hu:e="ACESFilmic";break;case du:e="AgX";break;case fu:e="Neutral";break;case uu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function gg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(us).join(`
`)}function _g(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function vg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function us(i){return i!==""}function Pl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const xg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ua(i){return i.replace(xg,yg)}const Mg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function yg(i,t){let e=Nt[t];if(e===void 0){const n=Mg.get(t);if(n!==void 0)e=Nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ua(e)}const Sg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Il(i){return i.replace(Sg,Eg)}function Eg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ul(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function bg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===vc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ih?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===gn&&(t="SHADOWMAP_TYPE_VSM"),t}function Tg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Hi:case ki:t="ENVMAP_TYPE_CUBE";break;case wr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ag(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ki:t="ENVMAP_MODE_REFRACTION";break}return t}function wg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Va:t="ENVMAP_BLENDING_MULTIPLY";break;case ru:t="ENVMAP_BLENDING_MIX";break;case au:t="ENVMAP_BLENDING_ADD";break}return t}function Rg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Cg(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=bg(e),c=Tg(e),h=Ag(e),u=wg(e),d=Rg(e),m=gg(e),v=_g(r),M=s.createProgram();let p,f,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(us).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(us).join(`
`),f.length>0&&(f+=`
`)):(p=[Ul(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(us).join(`
`),f=[Ul(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zn?"#define TONE_MAPPING":"",e.toneMapping!==zn?Nt.tonemapping_pars_fragment:"",e.toneMapping!==zn?mg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,pg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(us).join(`
`)),a=Ua(a),a=Pl(a,e),a=Dl(a,e),o=Ua(o),o=Pl(o,e),o=Dl(o,e),a=Il(a),o=Il(o),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===jo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=R+p+a,A=R+f+o,D=Cl(s,s.VERTEX_SHADER,x),L=Cl(s,s.FRAGMENT_SHADER,A);s.attachShader(M,D),s.attachShader(M,L),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function w(C){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(M).trim(),P=s.getShaderInfoLog(D).trim(),B=s.getShaderInfoLog(L).trim();let W=!0,$=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,D,L);else{const Q=Ll(s,D,"vertex"),z=Ll(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+Q+`
`+z)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(P===""||B==="")&&($=!1);$&&(C.diagnostics={runnable:W,programLog:I,vertexShader:{log:P,prefix:p},fragmentShader:{log:B,prefix:f}})}s.deleteShader(D),s.deleteShader(L),O=new ur(s,M),E=vg(s,M)}let O;this.getUniforms=function(){return O===void 0&&w(this),O};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(M,hg)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ug++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=D,this.fragmentShader=L,this}let Lg=0;class Pg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Dg(t),e.set(t,n)),n}}class Dg{constructor(t){this.id=Lg++,this.code=t,this.usedTimes=0}}function Ig(i,t,e,n,s,r,a){const o=new Ya,l=new Pg,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let m=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return c.add(E),E===0?"uv":`uv${E}`}function p(E,_,C,I,P){const B=I.fog,W=P.geometry,$=E.isMeshStandardMaterial?I.environment:null,Q=(E.isMeshStandardMaterial?e:t).get(E.envMap||$),z=Q&&Q.mapping===wr?Q.image.height:null,nt=v[E.type];E.precision!==null&&(m=s.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const it=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,q=it!==void 0?it.length:0;let st=0;W.morphAttributes.position!==void 0&&(st=1),W.morphAttributes.normal!==void 0&&(st=2),W.morphAttributes.color!==void 0&&(st=3);let ht,H,Z,at;if(nt){const _e=on[nt];ht=_e.vertexShader,H=_e.fragmentShader}else ht=E.vertexShader,H=E.fragmentShader,l.update(E),Z=l.getVertexShaderID(E),at=l.getFragmentShaderID(E);const et=i.getRenderTarget(),dt=P.isInstancedMesh===!0,mt=P.isBatchedMesh===!0,bt=!!E.map,N=!!E.matcap,wt=!!Q,Mt=!!E.aoMap,Yt=!!E.lightMap,xt=!!E.bumpMap,Ot=!!E.normalMap,b=!!E.displacementMap,y=!!E.emissiveMap,k=!!E.metalnessMap,K=!!E.roughnessMap,J=E.anisotropy>0,tt=E.clearcoat>0,Tt=E.iridescence>0,rt=E.sheen>0,Et=E.transmission>0,At=J&&!!E.anisotropyMap,lt=tt&&!!E.clearcoatMap,ft=tt&&!!E.clearcoatNormalMap,Ct=tt&&!!E.clearcoatRoughnessMap,gt=Tt&&!!E.iridescenceMap,_t=Tt&&!!E.iridescenceThicknessMap,kt=rt&&!!E.sheenColorMap,Gt=rt&&!!E.sheenRoughnessMap,Kt=!!E.specularMap,qt=!!E.specularColorMap,jt=!!E.specularIntensityMap,yt=Et&&!!E.transmissionMap,g=Et&&!!E.thicknessMap,G=!!E.gradientMap,j=!!E.alphaMap,ot=E.alphaTest>0,pt=!!E.alphaHash,Vt=!!E.extensions;let Bt=zn;E.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Bt=i.toneMapping);const ie={shaderID:nt,shaderType:E.type,shaderName:E.name,vertexShader:ht,fragmentShader:H,defines:E.defines,customVertexShaderID:Z,customFragmentShaderID:at,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:mt,instancing:dt,instancingColor:dt&&P.instanceColor!==null,instancingMorph:dt&&P.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Vn,alphaToCoverage:!!E.alphaToCoverage,map:bt,matcap:N,envMap:wt,envMapMode:wt&&Q.mapping,envMapCubeUVHeight:z,aoMap:Mt,lightMap:Yt,bumpMap:xt,normalMap:Ot,displacementMap:d&&b,emissiveMap:y,normalMapObjectSpace:Ot&&E.normalMapType===wu,normalMapTangentSpace:Ot&&E.normalMapType===Rc,metalnessMap:k,roughnessMap:K,anisotropy:J,anisotropyMap:At,clearcoat:tt,clearcoatMap:lt,clearcoatNormalMap:ft,clearcoatRoughnessMap:Ct,iridescence:Tt,iridescenceMap:gt,iridescenceThicknessMap:_t,sheen:rt,sheenColorMap:kt,sheenRoughnessMap:Gt,specularMap:Kt,specularColorMap:qt,specularIntensityMap:jt,transmission:Et,transmissionMap:yt,thicknessMap:g,gradientMap:G,opaque:E.transparent===!1&&E.blending===Fi&&E.alphaToCoverage===!1,alphaMap:j,alphaTest:ot,alphaHash:pt,combine:E.combine,mapUv:bt&&M(E.map.channel),aoMapUv:Mt&&M(E.aoMap.channel),lightMapUv:Yt&&M(E.lightMap.channel),bumpMapUv:xt&&M(E.bumpMap.channel),normalMapUv:Ot&&M(E.normalMap.channel),displacementMapUv:b&&M(E.displacementMap.channel),emissiveMapUv:y&&M(E.emissiveMap.channel),metalnessMapUv:k&&M(E.metalnessMap.channel),roughnessMapUv:K&&M(E.roughnessMap.channel),anisotropyMapUv:At&&M(E.anisotropyMap.channel),clearcoatMapUv:lt&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:ft&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&M(E.sheenRoughnessMap.channel),specularMapUv:Kt&&M(E.specularMap.channel),specularColorMapUv:qt&&M(E.specularColorMap.channel),specularIntensityMapUv:jt&&M(E.specularIntensityMap.channel),transmissionMapUv:yt&&M(E.transmissionMap.channel),thicknessMapUv:g&&M(E.thicknessMap.channel),alphaMapUv:j&&M(E.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ot||J),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!W.attributes.uv&&(bt||j),fog:!!B,useFog:E.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:P.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:st,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Bt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:bt&&E.map.isVideoTexture===!0&&Qt.getTransfer(E.map.colorSpace)===ne,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Xe,flipSided:E.side===Ie,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Vt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Vt&&E.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ie.vertexUv1s=c.has(1),ie.vertexUv2s=c.has(2),ie.vertexUv3s=c.has(3),c.clear(),ie}function f(E){const _=[];if(E.shaderID?_.push(E.shaderID):(_.push(E.customVertexShaderID),_.push(E.customFragmentShaderID)),E.defines!==void 0)for(const C in E.defines)_.push(C),_.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(R(_,E),x(_,E),_.push(i.outputColorSpace)),_.push(E.customProgramCacheKey),_.join()}function R(E,_){E.push(_.precision),E.push(_.outputColorSpace),E.push(_.envMapMode),E.push(_.envMapCubeUVHeight),E.push(_.mapUv),E.push(_.alphaMapUv),E.push(_.lightMapUv),E.push(_.aoMapUv),E.push(_.bumpMapUv),E.push(_.normalMapUv),E.push(_.displacementMapUv),E.push(_.emissiveMapUv),E.push(_.metalnessMapUv),E.push(_.roughnessMapUv),E.push(_.anisotropyMapUv),E.push(_.clearcoatMapUv),E.push(_.clearcoatNormalMapUv),E.push(_.clearcoatRoughnessMapUv),E.push(_.iridescenceMapUv),E.push(_.iridescenceThicknessMapUv),E.push(_.sheenColorMapUv),E.push(_.sheenRoughnessMapUv),E.push(_.specularMapUv),E.push(_.specularColorMapUv),E.push(_.specularIntensityMapUv),E.push(_.transmissionMapUv),E.push(_.thicknessMapUv),E.push(_.combine),E.push(_.fogExp2),E.push(_.sizeAttenuation),E.push(_.morphTargetsCount),E.push(_.morphAttributeCount),E.push(_.numDirLights),E.push(_.numPointLights),E.push(_.numSpotLights),E.push(_.numSpotLightMaps),E.push(_.numHemiLights),E.push(_.numRectAreaLights),E.push(_.numDirLightShadows),E.push(_.numPointLightShadows),E.push(_.numSpotLightShadows),E.push(_.numSpotLightShadowsWithMaps),E.push(_.numLightProbes),E.push(_.shadowMapType),E.push(_.toneMapping),E.push(_.numClippingPlanes),E.push(_.numClipIntersection),E.push(_.depthPacking)}function x(E,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),E.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.skinning&&o.enable(4),_.morphTargets&&o.enable(5),_.morphNormals&&o.enable(6),_.morphColors&&o.enable(7),_.premultipliedAlpha&&o.enable(8),_.shadowMapEnabled&&o.enable(9),_.useLegacyLights&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.alphaToCoverage&&o.enable(20),E.push(o.mask)}function A(E){const _=v[E.type];let C;if(_){const I=on[_];C=md.clone(I.uniforms)}else C=E.uniforms;return C}function D(E,_){let C;for(let I=0,P=h.length;I<P;I++){const B=h[I];if(B.cacheKey===_){C=B,++C.usedTimes;break}}return C===void 0&&(C=new Cg(i,_,E,r),h.push(C)),C}function L(E){if(--E.usedTimes===0){const _=h.indexOf(E);h[_]=h[h.length-1],h.pop(),E.destroy()}}function w(E){l.remove(E)}function O(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:A,acquireProgram:D,releaseProgram:L,releaseShaderCache:w,programs:h,dispose:O}}function Ug(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Ng(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Nl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Fl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,m,v,M,p){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:v,renderOrder:u.renderOrder,z:M,group:p},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=v,f.renderOrder=u.renderOrder,f.z=M,f.group=p),t++,f}function o(u,d,m,v,M,p){const f=a(u,d,m,v,M,p);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):e.push(f)}function l(u,d,m,v,M,p){const f=a(u,d,m,v,M,p);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Ng),n.length>1&&n.sort(d||Nl),s.length>1&&s.sort(d||Nl)}function h(){for(let u=t,d=i.length;u<d;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Fg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Fl,i.set(n,[a])):s>=r.length?(a=new Fl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Og(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new Ht};break;case"SpotLight":e={position:new T,direction:new T,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new T,halfWidth:new T,halfHeight:new T};break}return i[t.id]=e,e}}}function Bg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let zg=0;function Hg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function kg(i){const t=new Og,e=Bg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);const s=new T,r=new te,a=new te;function o(c,h){let u=0,d=0,m=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let v=0,M=0,p=0,f=0,R=0,x=0,A=0,D=0,L=0,w=0,O=0;c.sort(Hg);const E=h===!0?Math.PI:1;for(let C=0,I=c.length;C<I;C++){const P=c[C],B=P.color,W=P.intensity,$=P.distance,Q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=B.r*W*E,d+=B.g*W*E,m+=B.b*W*E;else if(P.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(P.sh.coefficients[z],W);O++}else if(P.isDirectionalLight){const z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity*E),P.castShadow){const nt=P.shadow,it=e.get(P);it.shadowBias=nt.bias,it.shadowNormalBias=nt.normalBias,it.shadowRadius=nt.radius,it.shadowMapSize=nt.mapSize,n.directionalShadow[v]=it,n.directionalShadowMap[v]=Q,n.directionalShadowMatrix[v]=P.shadow.matrix,x++}n.directional[v]=z,v++}else if(P.isSpotLight){const z=t.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(B).multiplyScalar(W*E),z.distance=$,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,n.spot[p]=z;const nt=P.shadow;if(P.map&&(n.spotLightMap[L]=P.map,L++,nt.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[p]=nt.matrix,P.castShadow){const it=e.get(P);it.shadowBias=nt.bias,it.shadowNormalBias=nt.normalBias,it.shadowRadius=nt.radius,it.shadowMapSize=nt.mapSize,n.spotShadow[p]=it,n.spotShadowMap[p]=Q,D++}p++}else if(P.isRectAreaLight){const z=t.get(P);z.color.copy(B).multiplyScalar(W),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),n.rectArea[f]=z,f++}else if(P.isPointLight){const z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity*E),z.distance=P.distance,z.decay=P.decay,P.castShadow){const nt=P.shadow,it=e.get(P);it.shadowBias=nt.bias,it.shadowNormalBias=nt.normalBias,it.shadowRadius=nt.radius,it.shadowMapSize=nt.mapSize,it.shadowCameraNear=nt.camera.near,it.shadowCameraFar=nt.camera.far,n.pointShadow[M]=it,n.pointShadowMap[M]=Q,n.pointShadowMatrix[M]=P.shadow.matrix,A++}n.point[M]=z,M++}else if(P.isHemisphereLight){const z=t.get(P);z.skyColor.copy(P.color).multiplyScalar(W*E),z.groundColor.copy(P.groundColor).multiplyScalar(W*E),n.hemi[R]=z,R++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=m;const _=n.hash;(_.directionalLength!==v||_.pointLength!==M||_.spotLength!==p||_.rectAreaLength!==f||_.hemiLength!==R||_.numDirectionalShadows!==x||_.numPointShadows!==A||_.numSpotShadows!==D||_.numSpotMaps!==L||_.numLightProbes!==O)&&(n.directional.length=v,n.spot.length=p,n.rectArea.length=f,n.point.length=M,n.hemi.length=R,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=D,n.spotShadowMap.length=D,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=D+L-w,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=O,_.directionalLength=v,_.pointLength=M,_.spotLength=p,_.rectAreaLength=f,_.hemiLength=R,_.numDirectionalShadows=x,_.numPointShadows=A,_.numSpotShadows=D,_.numSpotMaps=L,_.numLightProbes=O,n.version=zg++)}function l(c,h){let u=0,d=0,m=0,v=0,M=0;const p=h.matrixWorldInverse;for(let f=0,R=c.length;f<R;f++){const x=c[f];if(x.isDirectionalLight){const A=n.directional[u];A.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),u++}else if(x.isSpotLight){const A=n.spot[m];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),m++}else if(x.isRectAreaLight){const A=n.rectArea[v];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(p),a.identity(),r.copy(x.matrixWorld),r.premultiply(p),a.extractRotation(r),A.halfWidth.set(x.width*.5,0,0),A.halfHeight.set(0,x.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),v++}else if(x.isPointLight){const A=n.point[d];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const A=n.hemi[M];A.direction.setFromMatrixPosition(x.matrixWorld),A.direction.transformDirection(p),M++}}}return{setup:o,setupView:l,state:n}}function Ol(i){const t=new kg(i),e=[],n=[];function s(){e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(h){t.setup(e,h)}function l(h){t.setupView(e,h)}return{init:s,state:{lightsArray:e,shadowsArray:n,lights:t,transmissionRenderTarget:null},setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Gg(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Ol(i),t.set(s,[o])):r>=a.length?(o=new Ol(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Vg extends Wn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Wg extends Wn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Xg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qg(i,t,e){let n=new qa;const s=new vt,r=new vt,a=new ae,o=new Vg({depthPacking:Au}),l=new Wg,c={},h=e.maxTextureSize,u={[kn]:Ie,[Ie]:kn,[Xe]:Xe},d=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:Xg,fragmentShader:Yg}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new $t;v.setAttribute("position",new fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Wt(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vc;let f=this.type;this.render=function(L,w,O){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||L.length===0)return;const E=i.getRenderTarget(),_=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Bn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const P=f!==gn&&this.type===gn,B=f===gn&&this.type!==gn;for(let W=0,$=L.length;W<$;W++){const Q=L[W],z=Q.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const nt=z.getFrameExtents();if(s.multiply(nt),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,z.mapSize.y=r.y)),z.map===null||P===!0||B===!0){const q=this.type!==gn?{minFilter:Ye,magFilter:Ye}:{};z.map!==null&&z.map.dispose(),z.map=new oi(s.x,s.y,q),z.map.texture.name=Q.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const it=z.getViewportCount();for(let q=0;q<it;q++){const st=z.getViewport(q);a.set(r.x*st.x,r.y*st.y,r.x*st.z,r.y*st.w),I.viewport(a),z.updateMatrices(Q,q),n=z.getFrustum(),A(w,O,z.camera,Q,this.type)}z.isPointLightShadow!==!0&&this.type===gn&&R(z,O),z.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(E,_,C)};function R(L,w){const O=t.update(M);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,m.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new oi(s.x,s.y)),d.uniforms.shadow_pass.value=L.map.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(w,null,O,d,M,null),m.uniforms.shadow_pass.value=L.mapPass.texture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(w,null,O,m,M,null)}function x(L,w,O,E){let _=null;const C=O.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(C!==void 0)_=C;else if(_=O.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const I=_.uuid,P=w.uuid;let B=c[I];B===void 0&&(B={},c[I]=B);let W=B[P];W===void 0&&(W=_.clone(),B[P]=W,w.addEventListener("dispose",D)),_=W}if(_.visible=w.visible,_.wireframe=w.wireframe,E===gn?_.side=w.shadowSide!==null?w.shadowSide:w.side:_.side=w.shadowSide!==null?w.shadowSide:u[w.side],_.alphaMap=w.alphaMap,_.alphaTest=w.alphaTest,_.map=w.map,_.clipShadows=w.clipShadows,_.clippingPlanes=w.clippingPlanes,_.clipIntersection=w.clipIntersection,_.displacementMap=w.displacementMap,_.displacementScale=w.displacementScale,_.displacementBias=w.displacementBias,_.wireframeLinewidth=w.wireframeLinewidth,_.linewidth=w.linewidth,O.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const I=i.properties.get(_);I.light=O}return _}function A(L,w,O,E,_){if(L.visible===!1)return;if(L.layers.test(w.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&_===gn)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,L.matrixWorld);const P=t.update(L),B=L.material;if(Array.isArray(B)){const W=P.groups;for(let $=0,Q=W.length;$<Q;$++){const z=W[$],nt=B[z.materialIndex];if(nt&&nt.visible){const it=x(L,nt,E,_);L.onBeforeShadow(i,L,w,O,P,it,z),i.renderBufferDirect(O,null,P,it,L,z),L.onAfterShadow(i,L,w,O,P,it,z)}}}else if(B.visible){const W=x(L,B,E,_);L.onBeforeShadow(i,L,w,O,P,W,null),i.renderBufferDirect(O,null,P,W,L,null),L.onAfterShadow(i,L,w,O,P,W,null)}}const I=L.children;for(let P=0,B=I.length;P<B;P++)A(I[P],w,O,E,_)}function D(L){L.target.removeEventListener("dispose",D);for(const O in c){const E=c[O],_=L.target.uuid;_ in E&&(E[_].dispose(),delete E[_])}}}function Kg(i){function t(){let g=!1;const G=new ae;let j=null;const ot=new ae(0,0,0,0);return{setMask:function(pt){j!==pt&&!g&&(i.colorMask(pt,pt,pt,pt),j=pt)},setLocked:function(pt){g=pt},setClear:function(pt,Vt,Bt,ie,_e){_e===!0&&(pt*=ie,Vt*=ie,Bt*=ie),G.set(pt,Vt,Bt,ie),ot.equals(G)===!1&&(i.clearColor(pt,Vt,Bt,ie),ot.copy(G))},reset:function(){g=!1,j=null,ot.set(-1,0,0,0)}}}function e(){let g=!1,G=null,j=null,ot=null;return{setTest:function(pt){pt?at(i.DEPTH_TEST):et(i.DEPTH_TEST)},setMask:function(pt){G!==pt&&!g&&(i.depthMask(pt),G=pt)},setFunc:function(pt){if(j!==pt){switch(pt){case Jh:i.depthFunc(i.NEVER);break;case Qh:i.depthFunc(i.ALWAYS);break;case tu:i.depthFunc(i.LESS);break;case _r:i.depthFunc(i.LEQUAL);break;case eu:i.depthFunc(i.EQUAL);break;case nu:i.depthFunc(i.GEQUAL);break;case iu:i.depthFunc(i.GREATER);break;case su:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=pt}},setLocked:function(pt){g=pt},setClear:function(pt){ot!==pt&&(i.clearDepth(pt),ot=pt)},reset:function(){g=!1,G=null,j=null,ot=null}}}function n(){let g=!1,G=null,j=null,ot=null,pt=null,Vt=null,Bt=null,ie=null,_e=null;return{setTest:function(Jt){g||(Jt?at(i.STENCIL_TEST):et(i.STENCIL_TEST))},setMask:function(Jt){G!==Jt&&!g&&(i.stencilMask(Jt),G=Jt)},setFunc:function(Jt,ce,he){(j!==Jt||ot!==ce||pt!==he)&&(i.stencilFunc(Jt,ce,he),j=Jt,ot=ce,pt=he)},setOp:function(Jt,ce,he){(Vt!==Jt||Bt!==ce||ie!==he)&&(i.stencilOp(Jt,ce,he),Vt=Jt,Bt=ce,ie=he)},setLocked:function(Jt){g=Jt},setClear:function(Jt){_e!==Jt&&(i.clearStencil(Jt),_e=Jt)},reset:function(){g=!1,G=null,j=null,ot=null,pt=null,Vt=null,Bt=null,ie=null,_e=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],m=null,v=!1,M=null,p=null,f=null,R=null,x=null,A=null,D=null,L=new Ht(0,0,0),w=0,O=!1,E=null,_=null,C=null,I=null,P=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,$=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Q)[1]),W=$>=1):Q.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),W=$>=2);let z=null,nt={};const it=i.getParameter(i.SCISSOR_BOX),q=i.getParameter(i.VIEWPORT),st=new ae().fromArray(it),ht=new ae().fromArray(q);function H(g,G,j,ot){const pt=new Uint8Array(4),Vt=i.createTexture();i.bindTexture(g,Vt),i.texParameteri(g,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(g,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Bt=0;Bt<j;Bt++)g===i.TEXTURE_3D||g===i.TEXTURE_2D_ARRAY?i.texImage3D(G,0,i.RGBA,1,1,ot,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(G+Bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return Vt}const Z={};Z[i.TEXTURE_2D]=H(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=H(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=H(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=H(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),at(i.DEPTH_TEST),r.setFunc(_r),xt(!1),Ot(xo),at(i.CULL_FACE),Mt(Bn);function at(g){c[g]!==!0&&(i.enable(g),c[g]=!0)}function et(g){c[g]!==!1&&(i.disable(g),c[g]=!1)}function dt(g,G){return h[g]!==G?(i.bindFramebuffer(g,G),h[g]=G,g===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=G),g===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=G),!0):!1}function mt(g,G){let j=d,ot=!1;if(g){j=u.get(G),j===void 0&&(j=[],u.set(G,j));const pt=g.textures;if(j.length!==pt.length||j[0]!==i.COLOR_ATTACHMENT0){for(let Vt=0,Bt=pt.length;Vt<Bt;Vt++)j[Vt]=i.COLOR_ATTACHMENT0+Vt;j.length=pt.length,ot=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,ot=!0);ot&&i.drawBuffers(j)}function bt(g){return m!==g?(i.useProgram(g),m=g,!0):!1}const N={[ei]:i.FUNC_ADD,[Nh]:i.FUNC_SUBTRACT,[Fh]:i.FUNC_REVERSE_SUBTRACT};N[Oh]=i.MIN,N[Bh]=i.MAX;const wt={[zh]:i.ZERO,[Hh]:i.ONE,[kh]:i.SRC_COLOR,[wa]:i.SRC_ALPHA,[qh]:i.SRC_ALPHA_SATURATE,[Xh]:i.DST_COLOR,[Vh]:i.DST_ALPHA,[Gh]:i.ONE_MINUS_SRC_COLOR,[Ra]:i.ONE_MINUS_SRC_ALPHA,[Yh]:i.ONE_MINUS_DST_COLOR,[Wh]:i.ONE_MINUS_DST_ALPHA,[Kh]:i.CONSTANT_COLOR,[jh]:i.ONE_MINUS_CONSTANT_COLOR,[Zh]:i.CONSTANT_ALPHA,[$h]:i.ONE_MINUS_CONSTANT_ALPHA};function Mt(g,G,j,ot,pt,Vt,Bt,ie,_e,Jt){if(g===Bn){v===!0&&(et(i.BLEND),v=!1);return}if(v===!1&&(at(i.BLEND),v=!0),g!==Uh){if(g!==M||Jt!==O){if((p!==ei||x!==ei)&&(i.blendEquation(i.FUNC_ADD),p=ei,x=ei),Jt)switch(g){case Fi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mo:i.blendFunc(i.ONE,i.ONE);break;case yo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case So:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",g);break}else switch(g){case Fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case yo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case So:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",g);break}f=null,R=null,A=null,D=null,L.set(0,0,0),w=0,M=g,O=Jt}return}pt=pt||G,Vt=Vt||j,Bt=Bt||ot,(G!==p||pt!==x)&&(i.blendEquationSeparate(N[G],N[pt]),p=G,x=pt),(j!==f||ot!==R||Vt!==A||Bt!==D)&&(i.blendFuncSeparate(wt[j],wt[ot],wt[Vt],wt[Bt]),f=j,R=ot,A=Vt,D=Bt),(ie.equals(L)===!1||_e!==w)&&(i.blendColor(ie.r,ie.g,ie.b,_e),L.copy(ie),w=_e),M=g,O=!1}function Yt(g,G){g.side===Xe?et(i.CULL_FACE):at(i.CULL_FACE);let j=g.side===Ie;G&&(j=!j),xt(j),g.blending===Fi&&g.transparent===!1?Mt(Bn):Mt(g.blending,g.blendEquation,g.blendSrc,g.blendDst,g.blendEquationAlpha,g.blendSrcAlpha,g.blendDstAlpha,g.blendColor,g.blendAlpha,g.premultipliedAlpha),r.setFunc(g.depthFunc),r.setTest(g.depthTest),r.setMask(g.depthWrite),s.setMask(g.colorWrite);const ot=g.stencilWrite;a.setTest(ot),ot&&(a.setMask(g.stencilWriteMask),a.setFunc(g.stencilFunc,g.stencilRef,g.stencilFuncMask),a.setOp(g.stencilFail,g.stencilZFail,g.stencilZPass)),y(g.polygonOffset,g.polygonOffsetFactor,g.polygonOffsetUnits),g.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):et(i.SAMPLE_ALPHA_TO_COVERAGE)}function xt(g){E!==g&&(g?i.frontFace(i.CW):i.frontFace(i.CCW),E=g)}function Ot(g){g!==Ph?(at(i.CULL_FACE),g!==_&&(g===xo?i.cullFace(i.BACK):g===Dh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):et(i.CULL_FACE),_=g}function b(g){g!==C&&(W&&i.lineWidth(g),C=g)}function y(g,G,j){g?(at(i.POLYGON_OFFSET_FILL),(I!==G||P!==j)&&(i.polygonOffset(G,j),I=G,P=j)):et(i.POLYGON_OFFSET_FILL)}function k(g){g?at(i.SCISSOR_TEST):et(i.SCISSOR_TEST)}function K(g){g===void 0&&(g=i.TEXTURE0+B-1),z!==g&&(i.activeTexture(g),z=g)}function J(g,G,j){j===void 0&&(z===null?j=i.TEXTURE0+B-1:j=z);let ot=nt[j];ot===void 0&&(ot={type:void 0,texture:void 0},nt[j]=ot),(ot.type!==g||ot.texture!==G)&&(z!==j&&(i.activeTexture(j),z=j),i.bindTexture(g,G||Z[g]),ot.type=g,ot.texture=G)}function tt(){const g=nt[z];g!==void 0&&g.type!==void 0&&(i.bindTexture(g.type,null),g.type=void 0,g.texture=void 0)}function Tt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function rt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function Et(){try{i.texSubImage2D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function At(){try{i.texSubImage3D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function lt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function Ct(){try{i.texStorage2D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function gt(){try{i.texStorage3D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function _t(){try{i.texImage2D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function kt(){try{i.texImage3D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function Gt(g){st.equals(g)===!1&&(i.scissor(g.x,g.y,g.z,g.w),st.copy(g))}function Kt(g){ht.equals(g)===!1&&(i.viewport(g.x,g.y,g.z,g.w),ht.copy(g))}function qt(g,G){let j=l.get(G);j===void 0&&(j=new WeakMap,l.set(G,j));let ot=j.get(g);ot===void 0&&(ot=i.getUniformBlockIndex(G,g.name),j.set(g,ot))}function jt(g,G){const ot=l.get(G).get(g);o.get(G)!==ot&&(i.uniformBlockBinding(G,ot,g.__bindingPointIndex),o.set(G,ot))}function yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},z=null,nt={},h={},u=new WeakMap,d=[],m=null,v=!1,M=null,p=null,f=null,R=null,x=null,A=null,D=null,L=new Ht(0,0,0),w=0,O=!1,E=null,_=null,C=null,I=null,P=null,st.set(0,0,i.canvas.width,i.canvas.height),ht.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:at,disable:et,bindFramebuffer:dt,drawBuffers:mt,useProgram:bt,setBlending:Mt,setMaterial:Yt,setFlipSided:xt,setCullFace:Ot,setLineWidth:b,setPolygonOffset:y,setScissorTest:k,activeTexture:K,bindTexture:J,unbindTexture:tt,compressedTexImage2D:Tt,compressedTexImage3D:rt,texImage2D:_t,texImage3D:kt,updateUBOMapping:qt,uniformBlockBinding:jt,texStorage2D:Ct,texStorage3D:gt,texSubImage2D:Et,texSubImage3D:At,compressedTexSubImage2D:lt,compressedTexSubImage3D:ft,scissor:Gt,viewport:Kt,reset:yt}}function jg(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,h=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,y){return m?new OffscreenCanvas(b,y):Ts("canvas")}function M(b,y,k){let K=1;const J=Ot(b);if((J.width>k||J.height>k)&&(K=k/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const tt=Math.floor(K*J.width),Tt=Math.floor(K*J.height);u===void 0&&(u=v(tt,Tt));const rt=y?v(tt,Tt):u;return rt.width=tt,rt.height=Tt,rt.getContext("2d").drawImage(b,0,0,tt,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+tt+"x"+Tt+")."),rt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),b;return b}function p(b){return b.generateMipmaps&&b.minFilter!==Ye&&b.minFilter!==Je}function f(b){i.generateMipmap(b)}function R(b,y,k,K,J=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let tt=y;if(y===i.RED&&(k===i.FLOAT&&(tt=i.R32F),k===i.HALF_FLOAT&&(tt=i.R16F),k===i.UNSIGNED_BYTE&&(tt=i.R8)),y===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(tt=i.R8UI),k===i.UNSIGNED_SHORT&&(tt=i.R16UI),k===i.UNSIGNED_INT&&(tt=i.R32UI),k===i.BYTE&&(tt=i.R8I),k===i.SHORT&&(tt=i.R16I),k===i.INT&&(tt=i.R32I)),y===i.RG&&(k===i.FLOAT&&(tt=i.RG32F),k===i.HALF_FLOAT&&(tt=i.RG16F),k===i.UNSIGNED_BYTE&&(tt=i.RG8)),y===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(tt=i.RG8UI),k===i.UNSIGNED_SHORT&&(tt=i.RG16UI),k===i.UNSIGNED_INT&&(tt=i.RG32UI),k===i.BYTE&&(tt=i.RG8I),k===i.SHORT&&(tt=i.RG16I),k===i.INT&&(tt=i.RG32I)),y===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),y===i.RGBA){const Tt=J?xr:Qt.getTransfer(K);k===i.FLOAT&&(tt=i.RGBA32F),k===i.HALF_FLOAT&&(tt=i.RGBA16F),k===i.UNSIGNED_BYTE&&(tt=Tt===ne?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function x(b,y){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==Ye&&b.minFilter!==Je?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function A(b){const y=b.target;y.removeEventListener("dispose",A),L(y),y.isVideoTexture&&h.delete(y)}function D(b){const y=b.target;y.removeEventListener("dispose",D),O(y)}function L(b){const y=n.get(b);if(y.__webglInit===void 0)return;const k=b.source,K=d.get(k);if(K){const J=K[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&w(b),Object.keys(K).length===0&&d.delete(k)}n.remove(b)}function w(b){const y=n.get(b);i.deleteTexture(y.__webglTexture);const k=b.source,K=d.get(k);delete K[y.__cacheKey],a.memory.textures--}function O(b){const y=n.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let J=0;J<y.__webglFramebuffer[K].length;J++)i.deleteFramebuffer(y.__webglFramebuffer[K][J]);else i.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)i.deleteFramebuffer(y.__webglFramebuffer[K]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const k=b.textures;for(let K=0,J=k.length;K<J;K++){const tt=n.get(k[K]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),a.memory.textures--),n.remove(k[K])}n.remove(b)}let E=0;function _(){E=0}function C(){const b=E;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),E+=1,b}function I(b){const y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function P(b,y){const k=n.get(b);if(b.isVideoTexture&&Yt(b),b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){const K=b.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(k,b,y);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+y)}function B(b,y){const k=n.get(b);if(b.version>0&&k.__version!==b.version){st(k,b,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+y)}function W(b,y){const k=n.get(b);if(b.version>0&&k.__version!==b.version){st(k,b,y);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+y)}function $(b,y){const k=n.get(b);if(b.version>0&&k.__version!==b.version){ht(k,b,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+y)}const Q={[Pa]:i.REPEAT,[ii]:i.CLAMP_TO_EDGE,[Da]:i.MIRRORED_REPEAT},z={[Ye]:i.NEAREST,[pu]:i.NEAREST_MIPMAP_NEAREST,[Us]:i.NEAREST_MIPMAP_LINEAR,[Je]:i.LINEAR,[Hr]:i.LINEAR_MIPMAP_NEAREST,[si]:i.LINEAR_MIPMAP_LINEAR},nt={[Ru]:i.NEVER,[Uu]:i.ALWAYS,[Cu]:i.LESS,[Cc]:i.LEQUAL,[Lu]:i.EQUAL,[Iu]:i.GEQUAL,[Pu]:i.GREATER,[Du]:i.NOTEQUAL};function it(b,y){if(y.type===On&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Je||y.magFilter===Hr||y.magFilter===Us||y.magFilter===si||y.minFilter===Je||y.minFilter===Hr||y.minFilter===Us||y.minFilter===si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,Q[y.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,Q[y.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,Q[y.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,z[y.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,z[y.minFilter]),y.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,nt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ye||y.minFilter!==Us&&y.minFilter!==si||y.type===On&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function q(b,y){let k=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",A));const K=y.source;let J=d.get(K);J===void 0&&(J={},d.set(K,J));const tt=I(y);if(tt!==b.__cacheKey){J[tt]===void 0&&(J[tt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),J[tt].usedTimes++;const Tt=J[b.__cacheKey];Tt!==void 0&&(J[b.__cacheKey].usedTimes--,Tt.usedTimes===0&&w(y)),b.__cacheKey=tt,b.__webglTexture=J[tt].texture}return k}function st(b,y,k){let K=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=i.TEXTURE_3D);const J=q(b,y),tt=y.source;e.bindTexture(K,b.__webglTexture,i.TEXTURE0+k);const Tt=n.get(tt);if(tt.version!==Tt.__version||J===!0){e.activeTexture(i.TEXTURE0+k);const rt=Qt.getPrimaries(Qt.workingColorSpace),Et=y.colorSpace===In?null:Qt.getPrimaries(y.colorSpace),At=y.colorSpace===In||rt===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let lt=M(y.image,!1,s.maxTextureSize);lt=xt(y,lt);const ft=r.convert(y.format,y.colorSpace),Ct=r.convert(y.type);let gt=R(y.internalFormat,ft,Ct,y.colorSpace,y.isVideoTexture);it(K,y);let _t;const kt=y.mipmaps,Gt=y.isVideoTexture!==!0&&gt!==wc,Kt=Tt.__version===void 0||J===!0,qt=tt.dataReady,jt=x(y,lt);if(y.isDepthTexture)gt=i.DEPTH_COMPONENT16,y.type===On?gt=i.DEPTH_COMPONENT32F:y.type===Gi?gt=i.DEPTH_COMPONENT24:y.type===As&&(gt=i.DEPTH24_STENCIL8),Kt&&(Gt?e.texStorage2D(i.TEXTURE_2D,1,gt,lt.width,lt.height):e.texImage2D(i.TEXTURE_2D,0,gt,lt.width,lt.height,0,ft,Ct,null));else if(y.isDataTexture)if(kt.length>0){Gt&&Kt&&e.texStorage2D(i.TEXTURE_2D,jt,gt,kt[0].width,kt[0].height);for(let yt=0,g=kt.length;yt<g;yt++)_t=kt[yt],Gt?qt&&e.texSubImage2D(i.TEXTURE_2D,yt,0,0,_t.width,_t.height,ft,Ct,_t.data):e.texImage2D(i.TEXTURE_2D,yt,gt,_t.width,_t.height,0,ft,Ct,_t.data);y.generateMipmaps=!1}else Gt?(Kt&&e.texStorage2D(i.TEXTURE_2D,jt,gt,lt.width,lt.height),qt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt.width,lt.height,ft,Ct,lt.data)):e.texImage2D(i.TEXTURE_2D,0,gt,lt.width,lt.height,0,ft,Ct,lt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Gt&&Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,jt,gt,kt[0].width,kt[0].height,lt.depth);for(let yt=0,g=kt.length;yt<g;yt++)_t=kt[yt],y.format!==ln?ft!==null?Gt?qt&&e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,yt,0,0,0,_t.width,_t.height,lt.depth,ft,_t.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,yt,gt,_t.width,_t.height,lt.depth,0,_t.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?qt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,yt,0,0,0,_t.width,_t.height,lt.depth,ft,Ct,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,yt,gt,_t.width,_t.height,lt.depth,0,ft,Ct,_t.data)}else{Gt&&Kt&&e.texStorage2D(i.TEXTURE_2D,jt,gt,kt[0].width,kt[0].height);for(let yt=0,g=kt.length;yt<g;yt++)_t=kt[yt],y.format!==ln?ft!==null?Gt?qt&&e.compressedTexSubImage2D(i.TEXTURE_2D,yt,0,0,_t.width,_t.height,ft,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,yt,gt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?qt&&e.texSubImage2D(i.TEXTURE_2D,yt,0,0,_t.width,_t.height,ft,Ct,_t.data):e.texImage2D(i.TEXTURE_2D,yt,gt,_t.width,_t.height,0,ft,Ct,_t.data)}else if(y.isDataArrayTexture)Gt?(Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,jt,gt,lt.width,lt.height,lt.depth),qt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,ft,Ct,lt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,gt,lt.width,lt.height,lt.depth,0,ft,Ct,lt.data);else if(y.isData3DTexture)Gt?(Kt&&e.texStorage3D(i.TEXTURE_3D,jt,gt,lt.width,lt.height,lt.depth),qt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,ft,Ct,lt.data)):e.texImage3D(i.TEXTURE_3D,0,gt,lt.width,lt.height,lt.depth,0,ft,Ct,lt.data);else if(y.isFramebufferTexture){if(Kt)if(Gt)e.texStorage2D(i.TEXTURE_2D,jt,gt,lt.width,lt.height);else{let yt=lt.width,g=lt.height;for(let G=0;G<jt;G++)e.texImage2D(i.TEXTURE_2D,G,gt,yt,g,0,ft,Ct,null),yt>>=1,g>>=1}}else if(kt.length>0){if(Gt&&Kt){const yt=Ot(kt[0]);e.texStorage2D(i.TEXTURE_2D,jt,gt,yt.width,yt.height)}for(let yt=0,g=kt.length;yt<g;yt++)_t=kt[yt],Gt?qt&&e.texSubImage2D(i.TEXTURE_2D,yt,0,0,ft,Ct,_t):e.texImage2D(i.TEXTURE_2D,yt,gt,ft,Ct,_t);y.generateMipmaps=!1}else if(Gt){if(Kt){const yt=Ot(lt);e.texStorage2D(i.TEXTURE_2D,jt,gt,yt.width,yt.height)}qt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,Ct,lt)}else e.texImage2D(i.TEXTURE_2D,0,gt,ft,Ct,lt);p(y)&&f(K),Tt.__version=tt.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function ht(b,y,k){if(y.image.length!==6)return;const K=q(b,y),J=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+k);const tt=n.get(J);if(J.version!==tt.__version||K===!0){e.activeTexture(i.TEXTURE0+k);const Tt=Qt.getPrimaries(Qt.workingColorSpace),rt=y.colorSpace===In?null:Qt.getPrimaries(y.colorSpace),Et=y.colorSpace===In||Tt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const At=y.isCompressedTexture||y.image[0].isCompressedTexture,lt=y.image[0]&&y.image[0].isDataTexture,ft=[];for(let g=0;g<6;g++)!At&&!lt?ft[g]=M(y.image[g],!0,s.maxCubemapSize):ft[g]=lt?y.image[g].image:y.image[g],ft[g]=xt(y,ft[g]);const Ct=ft[0],gt=r.convert(y.format,y.colorSpace),_t=r.convert(y.type),kt=R(y.internalFormat,gt,_t,y.colorSpace),Gt=y.isVideoTexture!==!0,Kt=tt.__version===void 0||K===!0,qt=J.dataReady;let jt=x(y,Ct);it(i.TEXTURE_CUBE_MAP,y);let yt;if(At){Gt&&Kt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,jt,kt,Ct.width,Ct.height);for(let g=0;g<6;g++){yt=ft[g].mipmaps;for(let G=0;G<yt.length;G++){const j=yt[G];y.format!==ln?gt!==null?Gt?qt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+g,G,0,0,j.width,j.height,gt,j.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+g,G,kt,j.width,j.height,0,j.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?qt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+g,G,0,0,j.width,j.height,gt,_t,j.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+g,G,kt,j.width,j.height,0,gt,_t,j.data)}}}else{if(yt=y.mipmaps,Gt&&Kt){yt.length>0&&jt++;const g=Ot(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,jt,kt,g.width,g.height)}for(let g=0;g<6;g++)if(lt){Gt?qt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+g,0,0,0,ft[g].width,ft[g].height,gt,_t,ft[g].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+g,0,kt,ft[g].width,ft[g].height,0,gt,_t,ft[g].data);for(let G=0;G<yt.length;G++){const ot=yt[G].image[g].image;Gt?qt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+g,G+1,0,0,ot.width,ot.height,gt,_t,ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+g,G+1,kt,ot.width,ot.height,0,gt,_t,ot.data)}}else{Gt?qt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+g,0,0,0,gt,_t,ft[g]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+g,0,kt,gt,_t,ft[g]);for(let G=0;G<yt.length;G++){const j=yt[G];Gt?qt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+g,G+1,0,0,gt,_t,j.image[g]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+g,G+1,kt,gt,_t,j.image[g])}}}p(y)&&f(i.TEXTURE_CUBE_MAP),tt.__version=J.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function H(b,y,k,K,J,tt){const Tt=r.convert(k.format,k.colorSpace),rt=r.convert(k.type),Et=R(k.internalFormat,Tt,rt,k.colorSpace);if(!n.get(y).__hasExternalTextures){const lt=Math.max(1,y.width>>tt),ft=Math.max(1,y.height>>tt);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,tt,Et,lt,ft,y.depth,0,Tt,rt,null):e.texImage2D(J,tt,Et,lt,ft,0,Tt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),Mt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,J,n.get(k).__webglTexture,0,wt(y)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,J,n.get(k).__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Z(b,y,k){if(i.bindRenderbuffer(i.RENDERBUFFER,b),y.depthBuffer&&!y.stencilBuffer){let K=i.DEPTH_COMPONENT24;if(k||Mt(y)){const J=y.depthTexture;J&&J.isDepthTexture&&(J.type===On?K=i.DEPTH_COMPONENT32F:J.type===Gi&&(K=i.DEPTH_COMPONENT24));const tt=wt(y);Mt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt,K,y.width,y.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,K,y.width,y.height)}else i.renderbufferStorage(i.RENDERBUFFER,K,y.width,y.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,b)}else if(y.depthBuffer&&y.stencilBuffer){const K=wt(y);k&&Mt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,K,i.DEPTH24_STENCIL8,y.width,y.height):Mt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,K,i.DEPTH24_STENCIL8,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,b)}else{const K=y.textures;for(let J=0;J<K.length;J++){const tt=K[J],Tt=r.convert(tt.format,tt.colorSpace),rt=r.convert(tt.type),Et=R(tt.internalFormat,Tt,rt,tt.colorSpace),At=wt(y);k&&Mt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,At,Et,y.width,y.height):Mt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At,Et,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Et,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function at(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),P(y.depthTexture,0);const K=n.get(y.depthTexture).__webglTexture,J=wt(y);if(y.depthTexture.format===Oi)Mt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(y.depthTexture.format===Es)Mt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function et(b){const y=n.get(b),k=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");at(y.__webglFramebuffer,b)}else if(k){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]=i.createRenderbuffer(),Z(y.__webglDepthbuffer[K],b,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),Z(y.__webglDepthbuffer,b,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(b,y,k){const K=n.get(b);y!==void 0&&H(K.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&et(b)}function mt(b){const y=b.texture,k=n.get(b),K=n.get(y);b.addEventListener("dispose",D);const J=b.textures,tt=b.isWebGLCubeRenderTarget===!0,Tt=J.length>1;if(Tt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=y.version,a.memory.textures++),tt){k.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[rt]=[];for(let Et=0;Et<y.mipmaps.length;Et++)k.__webglFramebuffer[rt][Et]=i.createFramebuffer()}else k.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let rt=0;rt<y.mipmaps.length;rt++)k.__webglFramebuffer[rt]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let rt=0,Et=J.length;rt<Et;rt++){const At=n.get(J[rt]);At.__webglTexture===void 0&&(At.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&Mt(b)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let rt=0;rt<J.length;rt++){const Et=J[rt];k.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[rt]);const At=r.convert(Et.format,Et.colorSpace),lt=r.convert(Et.type),ft=R(Et.internalFormat,At,lt,Et.colorSpace,b.isXRRenderTarget===!0),Ct=wt(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,ft,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,k.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Z(k.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),it(i.TEXTURE_CUBE_MAP,y);for(let rt=0;rt<6;rt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Et=0;Et<y.mipmaps.length;Et++)H(k.__webglFramebuffer[rt][Et],b,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et);else H(k.__webglFramebuffer[rt],b,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);p(y)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let rt=0,Et=J.length;rt<Et;rt++){const At=J[rt],lt=n.get(At);e.bindTexture(i.TEXTURE_2D,lt.__webglTexture),it(i.TEXTURE_2D,At),H(k.__webglFramebuffer,b,At,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,0),p(At)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(rt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,K.__webglTexture),it(rt,y),y.mipmaps&&y.mipmaps.length>0)for(let Et=0;Et<y.mipmaps.length;Et++)H(k.__webglFramebuffer[Et],b,y,i.COLOR_ATTACHMENT0,rt,Et);else H(k.__webglFramebuffer,b,y,i.COLOR_ATTACHMENT0,rt,0);p(y)&&f(rt),e.unbindTexture()}b.depthBuffer&&et(b)}function bt(b){const y=b.textures;for(let k=0,K=y.length;k<K;k++){const J=y[k];if(p(J)){const tt=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Tt=n.get(J).__webglTexture;e.bindTexture(tt,Tt),f(tt),e.unbindTexture()}}}function N(b){if(b.samples>0&&Mt(b)===!1){const y=b.textures,k=b.width,K=b.height;let J=i.COLOR_BUFFER_BIT;const tt=[],Tt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=n.get(b),Et=y.length>1;if(Et)for(let At=0;At<y.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let At=0;At<y.length;At++){tt.push(i.COLOR_ATTACHMENT0+At),b.depthBuffer&&tt.push(Tt);const lt=rt.__ignoreDepthValues!==void 0?rt.__ignoreDepthValues:!1;if(lt===!1&&(b.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&rt.__isTransmissionRenderTarget!==!0&&(J|=i.STENCIL_BUFFER_BIT)),Et&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,rt.__webglColorRenderbuffer[At]),lt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Tt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Tt])),Et){const ft=n.get(y[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ft,0)}i.blitFramebuffer(0,0,k,K,0,0,k,K,J,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Et)for(let At=0;At<y.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,rt.__webglColorRenderbuffer[At]);const lt=n.get(y[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}}function wt(b){return Math.min(s.maxSamples,b.samples)}function Mt(b){const y=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Yt(b){const y=a.render.frame;h.get(b)!==y&&(h.set(b,y),b.update())}function xt(b,y){const k=b.colorSpace,K=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||k!==Vn&&k!==In&&(Qt.getTransfer(k)===ne?(K!==ln||J!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}function Ot(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=C,this.resetTextureUnits=_,this.setTexture2D=P,this.setTexture2DArray=B,this.setTexture3D=W,this.setTextureCube=$,this.rebindTextures=dt,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=H,this.useMultisampledRTT=Mt}function Zg(i,t){function e(n,s=In){let r;const a=Qt.getTransfer(s);if(n===Hn)return i.UNSIGNED_BYTE;if(n===Sc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ec)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_u)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===mu)return i.BYTE;if(n===gu)return i.SHORT;if(n===Mc)return i.UNSIGNED_SHORT;if(n===yc)return i.INT;if(n===Gi)return i.UNSIGNED_INT;if(n===On)return i.FLOAT;if(n===vr)return i.HALF_FLOAT;if(n===vu)return i.ALPHA;if(n===xu)return i.RGB;if(n===ln)return i.RGBA;if(n===Mu)return i.LUMINANCE;if(n===yu)return i.LUMINANCE_ALPHA;if(n===Oi)return i.DEPTH_COMPONENT;if(n===Es)return i.DEPTH_STENCIL;if(n===Su)return i.RED;if(n===bc)return i.RED_INTEGER;if(n===Eu)return i.RG;if(n===Tc)return i.RG_INTEGER;if(n===Ac)return i.RGBA_INTEGER;if(n===kr||n===Gr||n===Vr||n===Wr)if(a===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Eo||n===bo||n===To||n===Ao)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Eo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===To)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ao)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wc)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===wo||n===Ro)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wo)return a===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ro)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Co||n===Lo||n===Po||n===Do||n===Io||n===Uo||n===No||n===Fo||n===Oo||n===Bo||n===zo||n===Ho||n===ko||n===Go)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Co)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Po)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Do)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Io)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===No)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ho)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ko)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Go)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xr||n===Vo||n===Wo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Xr)return a===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bu||n===Xo||n===Yo||n===qo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===As?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class $g extends Re{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class nn extends pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jg={type:"move"};class ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const M of t.hand.values()){const p=e.getJointPose(M,n),f=this._getHandJoint(c,M);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,v=.005;c.inputState.pinching&&d>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new nn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Qg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t_=`
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

}`;class e_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Le,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,s=new Gn({vertexShader:Qg,fragmentShader:t_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Wt(new Cr(20,20),s)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class n_ extends li{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,v=null;const M=new e_,p=e.getContextAttributes();let f=null,R=null;const x=[],A=[],D=new vt;let L=null;const w=new Re;w.layers.enable(1),w.viewport=new ae;const O=new Re;O.layers.enable(2),O.viewport=new ae;const E=[w,O],_=new $g;_.layers.enable(1),_.layers.enable(2);let C=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Z=x[H];return Z===void 0&&(Z=new ga,x[H]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(H){let Z=x[H];return Z===void 0&&(Z=new ga,x[H]=Z),Z.getGripSpace()},this.getHand=function(H){let Z=x[H];return Z===void 0&&(Z=new ga,x[H]=Z),Z.getHandSpace()};function P(H){const Z=A.indexOf(H.inputSource);if(Z===-1)return;const at=x[Z];at!==void 0&&(at.update(H.inputSource,H.frame,c||a),at.dispatchEvent({type:H.type,data:H.inputSource}))}function B(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",W);for(let H=0;H<x.length;H++){const Z=A[H];Z!==null&&(A[H]=null,x[H].disconnect(Z))}C=null,I=null,M.reset(),t.setRenderTarget(f),m=null,d=null,u=null,s=null,R=null,ht.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",B),s.addEventListener("inputsourceschange",W),p.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const Z={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,Z),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),R=new oi(m.framebufferWidth,m.framebufferHeight,{format:ln,type:Hn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let Z=null,at=null,et=null;p.depth&&(et=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=p.stencil?Es:Oi,at=p.stencil?As:Gi);const dt={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(dt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),R=new oi(d.textureWidth,d.textureHeight,{format:ln,type:Hn,depthTexture:new kc(d.textureWidth,d.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0});const mt=t.properties.get(R);mt.__ignoreDepthValues=d.ignoreDepthValues}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ht.setContext(s),ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function W(H){for(let Z=0;Z<H.removed.length;Z++){const at=H.removed[Z],et=A.indexOf(at);et>=0&&(A[et]=null,x[et].disconnect(at))}for(let Z=0;Z<H.added.length;Z++){const at=H.added[Z];let et=A.indexOf(at);if(et===-1){for(let mt=0;mt<x.length;mt++)if(mt>=A.length){A.push(at),et=mt;break}else if(A[mt]===null){A[mt]=at,et=mt;break}if(et===-1)break}const dt=x[et];dt&&dt.connect(at)}}const $=new T,Q=new T;function z(H,Z,at){$.setFromMatrixPosition(Z.matrixWorld),Q.setFromMatrixPosition(at.matrixWorld);const et=$.distanceTo(Q),dt=Z.projectionMatrix.elements,mt=at.projectionMatrix.elements,bt=dt[14]/(dt[10]-1),N=dt[14]/(dt[10]+1),wt=(dt[9]+1)/dt[5],Mt=(dt[9]-1)/dt[5],Yt=(dt[8]-1)/dt[0],xt=(mt[8]+1)/mt[0],Ot=bt*Yt,b=bt*xt,y=et/(-Yt+xt),k=y*-Yt;Z.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(k),H.translateZ(y),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const K=bt+y,J=N+y,tt=Ot-k,Tt=b+(et-k),rt=wt*N/J*K,Et=Mt*N/J*K;H.projectionMatrix.makePerspective(tt,Tt,rt,Et,K,J),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function nt(H,Z){Z===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Z.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;M.texture!==null&&(H.near=M.depthNear,H.far=M.depthFar),_.near=O.near=w.near=H.near,_.far=O.far=w.far=H.far,(C!==_.near||I!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),C=_.near,I=_.far,w.near=C,w.far=I,O.near=C,O.far=I,w.updateProjectionMatrix(),O.updateProjectionMatrix(),H.updateProjectionMatrix());const Z=H.parent,at=_.cameras;nt(_,Z);for(let et=0;et<at.length;et++)nt(at[et],Z);at.length===2?z(_,w,O):_.projectionMatrix.copy(w.projectionMatrix),it(H,_,Z)};function it(H,Z,at){at===null?H.matrix.copy(Z.matrixWorld):(H.matrix.copy(at.matrixWorld),H.matrix.invert(),H.matrix.multiply(Z.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Z.projectionMatrix),H.projectionMatrixInverse.copy(Z.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=bs*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.hasDepthSensing=function(){return M.texture!==null};let q=null;function st(H,Z){if(h=Z.getViewerPose(c||a),v=Z,h!==null){const at=h.views;m!==null&&(t.setRenderTargetFramebuffer(R,m.framebuffer),t.setRenderTarget(R));let et=!1;at.length!==_.cameras.length&&(_.cameras.length=0,et=!0);for(let mt=0;mt<at.length;mt++){const bt=at[mt];let N=null;if(m!==null)N=m.getViewport(bt);else{const Mt=u.getViewSubImage(d,bt);N=Mt.viewport,mt===0&&(t.setRenderTargetTextures(R,Mt.colorTexture,d.ignoreDepthValues?void 0:Mt.depthStencilTexture),t.setRenderTarget(R))}let wt=E[mt];wt===void 0&&(wt=new Re,wt.layers.enable(mt),wt.viewport=new ae,E[mt]=wt),wt.matrix.fromArray(bt.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(bt.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(N.x,N.y,N.width,N.height),mt===0&&(_.matrix.copy(wt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),et===!0&&_.cameras.push(wt)}const dt=s.enabledFeatures;if(dt&&dt.includes("depth-sensing")){const mt=u.getDepthInformation(at[0]);mt&&mt.isValid&&mt.texture&&M.init(t,mt,s.renderState)}}for(let at=0;at<x.length;at++){const et=A[at],dt=x[at];et!==null&&dt!==void 0&&dt.update(et,Z,c||a)}M.render(t,_),q&&q(H,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),v=null}const ht=new Hc;ht.setAnimationLoop(st),this.setAnimationLoop=function(H){q=H},this.dispose=function(){}}}const Jn=new ke,i_=new te;function s_(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Oc(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,R,x,A){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,A)):f.isMeshMatcapMaterial?(r(p,f),v(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),M(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,R,x):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Ie&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Ie&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const R=t.get(f),x=R.envMap,A=R.envMapRotation;if(x&&(p.envMap.value=x,Jn.copy(A),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),p.envMapRotation.value.setFromMatrix4(i_.makeRotationFromEuler(Jn)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const D=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*D,e(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,R,x){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*R,p.scale.value=x*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,R){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ie&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=R.texture,p.transmissionSamplerSize.value.set(R.width,R.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,f){f.matcap&&(p.matcap.value=f.matcap)}function M(p,f){const R=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(R.matrixWorld),p.nearDistance.value=R.shadow.camera.near,p.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function r_(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,x){const A=x.program;n.uniformBlockBinding(R,A)}function c(R,x){let A=s[R.id];A===void 0&&(v(R),A=h(R),s[R.id]=A,R.addEventListener("dispose",p));const D=x.program;n.updateUBOMapping(R,D);const L=t.render.frame;r[R.id]!==L&&(d(R),r[R.id]=L)}function h(R){const x=u();R.__bindingPointIndex=x;const A=i.createBuffer(),D=R.__size,L=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,D,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,A),A}function u(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(R){const x=s[R.id],A=R.uniforms,D=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let L=0,w=A.length;L<w;L++){const O=Array.isArray(A[L])?A[L]:[A[L]];for(let E=0,_=O.length;E<_;E++){const C=O[E];if(m(C,L,E,D)===!0){const I=C.__offset,P=Array.isArray(C.value)?C.value:[C.value];let B=0;for(let W=0;W<P.length;W++){const $=P[W],Q=M($);typeof $=="number"||typeof $=="boolean"?(C.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,I+B,C.__data)):$.isMatrix3?(C.__data[0]=$.elements[0],C.__data[1]=$.elements[1],C.__data[2]=$.elements[2],C.__data[3]=0,C.__data[4]=$.elements[3],C.__data[5]=$.elements[4],C.__data[6]=$.elements[5],C.__data[7]=0,C.__data[8]=$.elements[6],C.__data[9]=$.elements[7],C.__data[10]=$.elements[8],C.__data[11]=0):($.toArray(C.__data,B),B+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(R,x,A,D){const L=R.value,w=x+"_"+A;if(D[w]===void 0)return typeof L=="number"||typeof L=="boolean"?D[w]=L:D[w]=L.clone(),!0;{const O=D[w];if(typeof L=="number"||typeof L=="boolean"){if(O!==L)return D[w]=L,!0}else if(O.equals(L)===!1)return O.copy(L),!0}return!1}function v(R){const x=R.uniforms;let A=0;const D=16;for(let w=0,O=x.length;w<O;w++){const E=Array.isArray(x[w])?x[w]:[x[w]];for(let _=0,C=E.length;_<C;_++){const I=E[_],P=Array.isArray(I.value)?I.value:[I.value];for(let B=0,W=P.length;B<W;B++){const $=P[B],Q=M($),z=A%D;z!==0&&D-z<Q.boundary&&(A+=D-z),I.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=A,A+=Q.storage}}}const L=A%D;return L>0&&(A+=D-L),R.__size=A,R.__cache={},this}function M(R){const x={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(x.boundary=4,x.storage=4):R.isVector2?(x.boundary=8,x.storage=8):R.isVector3||R.isColor?(x.boundary=16,x.storage=12):R.isVector4?(x.boundary=16,x.storage=16):R.isMatrix3?(x.boundary=48,x.storage=48):R.isMatrix4?(x.boundary=64,x.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),x}function p(R){const x=R.target;x.removeEventListener("dispose",p);const A=a.indexOf(x.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(const R in s)i.deleteBuffer(s[R]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class Wi{constructor(t={}){const{canvas:e=$u(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const m=new Uint32Array(4),v=new Int32Array(4);let M=null,p=null;const f=[],R=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=an,this._useLegacyLights=!1,this.toneMapping=zn,this.toneMappingExposure=1;const x=this;let A=!1,D=0,L=0,w=null,O=-1,E=null;const _=new ae,C=new ae;let I=null;const P=new Ht(0);let B=0,W=e.width,$=e.height,Q=1,z=null,nt=null;const it=new ae(0,0,W,$),q=new ae(0,0,W,$);let st=!1;const ht=new qa;let H=!1,Z=!1;const at=new te,et=new vt,dt=new T,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function bt(){return w===null?Q:1}let N=n;function wt(S,U){const X=e.getContext(S,U);return X!==null?X:null}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ga}`),e.addEventListener("webglcontextlost",G,!1),e.addEventListener("webglcontextrestored",j,!1),e.addEventListener("webglcontextcreationerror",ot,!1),N===null){const U="webgl2";if(N=wt(U,S),N===null)throw wt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Mt,Yt,xt,Ot,b,y,k,K,J,tt,Tt,rt,Et,At,lt,ft,Ct,gt,_t,kt,Gt,Kt,qt,jt;function yt(){Mt=new pm(N),Mt.init(),Yt=new lm(N,Mt,t),Kt=new Zg(N,Mt),xt=new Kg(N),Ot=new _m(N),b=new Ug,y=new jg(N,Mt,xt,b,Yt,Kt,Ot),k=new hm(x),K=new fm(x),J=new Sd(N),qt=new am(N,J),tt=new mm(N,J,Ot,qt),Tt=new xm(N,tt,J,Ot),_t=new vm(N,Yt,y),ft=new cm(b),rt=new Ig(x,k,K,Mt,Yt,qt,ft),Et=new s_(x,b),At=new Fg,lt=new Gg(Mt),gt=new rm(x,k,K,xt,Tt,d,l),Ct=new qg(x,Tt,Yt),jt=new r_(N,Ot,Yt,xt),kt=new om(N,Mt,Ot),Gt=new gm(N,Mt,Ot),Ot.programs=rt.programs,x.capabilities=Yt,x.extensions=Mt,x.properties=b,x.renderLists=At,x.shadowMap=Ct,x.state=xt,x.info=Ot}yt();const g=new n_(x,N);this.xr=g,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const S=Mt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Mt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(S){S!==void 0&&(Q=S,this.setSize(W,$,!1))},this.getSize=function(S){return S.set(W,$)},this.setSize=function(S,U,X=!0){if(g.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=S,$=U,e.width=Math.floor(S*Q),e.height=Math.floor(U*Q),X===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(W*Q,$*Q).floor()},this.setDrawingBufferSize=function(S,U,X){W=S,$=U,Q=X,e.width=Math.floor(S*X),e.height=Math.floor(U*X),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(_)},this.getViewport=function(S){return S.copy(it)},this.setViewport=function(S,U,X,Y){S.isVector4?it.set(S.x,S.y,S.z,S.w):it.set(S,U,X,Y),xt.viewport(_.copy(it).multiplyScalar(Q).round())},this.getScissor=function(S){return S.copy(q)},this.setScissor=function(S,U,X,Y){S.isVector4?q.set(S.x,S.y,S.z,S.w):q.set(S,U,X,Y),xt.scissor(C.copy(q).multiplyScalar(Q).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(S){xt.setScissorTest(st=S)},this.setOpaqueSort=function(S){z=S},this.setTransparentSort=function(S){nt=S},this.getClearColor=function(S){return S.copy(gt.getClearColor())},this.setClearColor=function(){gt.setClearColor.apply(gt,arguments)},this.getClearAlpha=function(){return gt.getClearAlpha()},this.setClearAlpha=function(){gt.setClearAlpha.apply(gt,arguments)},this.clear=function(S=!0,U=!0,X=!0){let Y=0;if(S){let V=!1;if(w!==null){const ut=w.texture.format;V=ut===Ac||ut===Tc||ut===bc}if(V){const ut=w.texture.type,St=ut===Hn||ut===Gi||ut===Mc||ut===As||ut===Sc||ut===Ec,Rt=gt.getClearColor(),Lt=gt.getClearAlpha(),Dt=Rt.r,Pt=Rt.g,It=Rt.b;St?(m[0]=Dt,m[1]=Pt,m[2]=It,m[3]=Lt,N.clearBufferuiv(N.COLOR,0,m)):(v[0]=Dt,v[1]=Pt,v[2]=It,v[3]=Lt,N.clearBufferiv(N.COLOR,0,v))}else Y|=N.COLOR_BUFFER_BIT}U&&(Y|=N.DEPTH_BUFFER_BIT),X&&(Y|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",G,!1),e.removeEventListener("webglcontextrestored",j,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),At.dispose(),lt.dispose(),b.dispose(),k.dispose(),K.dispose(),Tt.dispose(),qt.dispose(),jt.dispose(),rt.dispose(),g.dispose(),g.removeEventListener("sessionstart",ce),g.removeEventListener("sessionend",he),Ne.stop()};function G(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const S=Ot.autoReset,U=Ct.enabled,X=Ct.autoUpdate,Y=Ct.needsUpdate,V=Ct.type;yt(),Ot.autoReset=S,Ct.enabled=U,Ct.autoUpdate=X,Ct.needsUpdate=Y,Ct.type=V}function ot(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function pt(S){const U=S.target;U.removeEventListener("dispose",pt),Vt(U)}function Vt(S){Bt(S),b.remove(S)}function Bt(S){const U=b.get(S).programs;U!==void 0&&(U.forEach(function(X){rt.releaseProgram(X)}),S.isShaderMaterial&&rt.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,X,Y,V,ut){U===null&&(U=mt);const St=V.isMesh&&V.matrixWorld.determinant()<0,Rt=bh(S,U,X,Y,V);xt.setMaterial(Y,St);let Lt=X.index,Dt=1;if(Y.wireframe===!0){if(Lt=tt.getWireframeAttribute(X),Lt===void 0)return;Dt=2}const Pt=X.drawRange,It=X.attributes.position;let le=Pt.start*Dt,Fe=(Pt.start+Pt.count)*Dt;ut!==null&&(le=Math.max(le,ut.start*Dt),Fe=Math.min(Fe,(ut.start+ut.count)*Dt)),Lt!==null?(le=Math.max(le,0),Fe=Math.min(Fe,Lt.count)):It!=null&&(le=Math.max(le,0),Fe=Math.min(Fe,It.count));const ve=Fe-le;if(ve<0||ve===1/0)return;qt.setup(V,Y,Rt,X,Lt);let hn,oe=kt;if(Lt!==null&&(hn=J.get(Lt),oe=Gt,oe.setIndex(hn)),V.isMesh)Y.wireframe===!0?(xt.setLineWidth(Y.wireframeLinewidth*bt()),oe.setMode(N.LINES)):oe.setMode(N.TRIANGLES);else if(V.isLine){let Ut=Y.linewidth;Ut===void 0&&(Ut=1),xt.setLineWidth(Ut*bt()),V.isLineSegments?oe.setMode(N.LINES):V.isLineLoop?oe.setMode(N.LINE_LOOP):oe.setMode(N.LINE_STRIP)}else V.isPoints?oe.setMode(N.POINTS):V.isSprite&&oe.setMode(N.TRIANGLES);if(V.isBatchedMesh)oe.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)oe.renderInstances(le,ve,V.count);else if(X.isInstancedBufferGeometry){const Ut=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Fr=Math.min(X.instanceCount,Ut);oe.renderInstances(le,ve,Fr)}else oe.render(le,ve)};function ie(S,U,X){S.transparent===!0&&S.side===Xe&&S.forceSinglePass===!1?(S.side=Ie,S.needsUpdate=!0,Is(S,U,X),S.side=kn,S.needsUpdate=!0,Is(S,U,X),S.side=Xe):Is(S,U,X)}this.compile=function(S,U,X=null){X===null&&(X=S),p=lt.get(X),p.init(),R.push(p),X.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),S!==X&&S.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights(x._useLegacyLights);const Y=new Set;return S.traverse(function(V){const ut=V.material;if(ut)if(Array.isArray(ut))for(let St=0;St<ut.length;St++){const Rt=ut[St];ie(Rt,X,V),Y.add(Rt)}else ie(ut,X,V),Y.add(ut)}),R.pop(),p=null,Y},this.compileAsync=function(S,U,X=null){const Y=this.compile(S,U,X);return new Promise(V=>{function ut(){if(Y.forEach(function(St){b.get(St).currentProgram.isReady()&&Y.delete(St)}),Y.size===0){V(S);return}setTimeout(ut,10)}Mt.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let _e=null;function Jt(S){_e&&_e(S)}function ce(){Ne.stop()}function he(){Ne.start()}const Ne=new Hc;Ne.setAnimationLoop(Jt),typeof self<"u"&&Ne.setContext(self),this.setAnimationLoop=function(S){_e=S,g.setAnimationLoop(S),S===null?Ne.stop():Ne.start()},g.addEventListener("sessionstart",ce),g.addEventListener("sessionend",he),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),g.enabled===!0&&g.isPresenting===!0&&(g.cameraAutoUpdate===!0&&g.updateCamera(U),U=g.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,U,w),p=lt.get(S,R.length),p.init(),R.push(p),at.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ht.setFromProjectionMatrix(at),Z=this.localClippingEnabled,H=ft.init(this.clippingPlanes,Z),M=At.get(S,f.length),M.init(),f.push(M),Ge(S,U,0,x.sortObjects),M.finish(),x.sortObjects===!0&&M.sort(z,nt),this.info.render.frame++,H===!0&&ft.beginShadows();const X=p.state.shadowsArray;if(Ct.render(X,S,U),H===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset(),(g.enabled===!1||g.isPresenting===!1||g.hasDepthSensing()===!1)&&gt.render(M,S),p.setupLights(x._useLegacyLights),U.isArrayCamera){const Y=U.cameras;for(let V=0,ut=Y.length;V<ut;V++){const St=Y[V];Sn(M,S,St,St.viewport)}}else Sn(M,S,U);w!==null&&(y.updateMultisampleRenderTarget(w),y.updateRenderTargetMipmap(w)),S.isScene===!0&&S.onAfterRender(x,S,U),qt.resetDefaultState(),O=-1,E=null,R.pop(),R.length>0?p=R[R.length-1]:p=null,f.pop(),f.length>0?M=f[f.length-1]:M=null};function Ge(S,U,X,Y){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ht.intersectsSprite(S)){Y&&dt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(at);const St=Tt.update(S),Rt=S.material;Rt.visible&&M.push(S,St,Rt,X,dt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ht.intersectsObject(S))){const St=Tt.update(S),Rt=S.material;if(Y&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),dt.copy(S.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),dt.copy(St.boundingSphere.center)),dt.applyMatrix4(S.matrixWorld).applyMatrix4(at)),Array.isArray(Rt)){const Lt=St.groups;for(let Dt=0,Pt=Lt.length;Dt<Pt;Dt++){const It=Lt[Dt],le=Rt[It.materialIndex];le&&le.visible&&M.push(S,St,le,X,dt.z,It)}}else Rt.visible&&M.push(S,St,Rt,X,dt.z,null)}}const ut=S.children;for(let St=0,Rt=ut.length;St<Rt;St++)Ge(ut[St],U,X,Y)}function Sn(S,U,X,Y){const V=S.opaque,ut=S.transmissive,St=S.transparent;p.setupLightsView(X),H===!0&&ft.setGlobalState(x.clippingPlanes,X),ut.length>0&&ci(V,ut,U,X),Y&&xt.viewport(_.copy(Y)),V.length>0&&Xn(V,U,X),ut.length>0&&Xn(ut,U,X),St.length>0&&Xn(St,U,X),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function ci(S,U,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(p.state.transmissionRenderTarget===null){p.state.transmissionRenderTarget=new oi(1,1,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float")?vr:Hn,minFilter:si,samples:4,stencilBuffer:r});const Dt=b.get(p.state.transmissionRenderTarget);Dt.__isTransmissionRenderTarget=!0}const ut=p.state.transmissionRenderTarget;x.getDrawingBufferSize(et),ut.setSize(et.x,et.y);const St=x.getRenderTarget();x.setRenderTarget(ut),x.getClearColor(P),B=x.getClearAlpha(),B<1&&x.setClearColor(16777215,.5),x.clear();const Rt=x.toneMapping;x.toneMapping=zn,Xn(S,X,Y),y.updateMultisampleRenderTarget(ut),y.updateRenderTargetMipmap(ut);let Lt=!1;for(let Dt=0,Pt=U.length;Dt<Pt;Dt++){const It=U[Dt],le=It.object,Fe=It.geometry,ve=It.material,hn=It.group;if(ve.side===Xe&&le.layers.test(Y.layers)){const oe=ve.side;ve.side=Ie,ve.needsUpdate=!0,po(le,X,Y,Fe,ve,hn),ve.side=oe,ve.needsUpdate=!0,Lt=!0}}Lt===!0&&(y.updateMultisampleRenderTarget(ut),y.updateRenderTargetMipmap(ut)),x.setRenderTarget(St),x.setClearColor(P,B),x.toneMapping=Rt}function Xn(S,U,X){const Y=U.isScene===!0?U.overrideMaterial:null;for(let V=0,ut=S.length;V<ut;V++){const St=S[V],Rt=St.object,Lt=St.geometry,Dt=Y===null?St.material:Y,Pt=St.group;Rt.layers.test(X.layers)&&po(Rt,U,X,Lt,Dt,Pt)}}function po(S,U,X,Y,V,ut){S.onBeforeRender(x,U,X,Y,V,ut),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),V.onBeforeRender(x,U,X,Y,S,ut),V.transparent===!0&&V.side===Xe&&V.forceSinglePass===!1?(V.side=Ie,V.needsUpdate=!0,x.renderBufferDirect(X,U,Y,V,S,ut),V.side=kn,V.needsUpdate=!0,x.renderBufferDirect(X,U,Y,V,S,ut),V.side=Xe):x.renderBufferDirect(X,U,Y,V,S,ut),S.onAfterRender(x,U,X,Y,V,ut)}function Is(S,U,X){U.isScene!==!0&&(U=mt);const Y=b.get(S),V=p.state.lights,ut=p.state.shadowsArray,St=V.state.version,Rt=rt.getParameters(S,V.state,ut,U,X),Lt=rt.getProgramCacheKey(Rt);let Dt=Y.programs;Y.environment=S.isMeshStandardMaterial?U.environment:null,Y.fog=U.fog,Y.envMap=(S.isMeshStandardMaterial?K:k).get(S.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Dt===void 0&&(S.addEventListener("dispose",pt),Dt=new Map,Y.programs=Dt);let Pt=Dt.get(Lt);if(Pt!==void 0){if(Y.currentProgram===Pt&&Y.lightsStateVersion===St)return go(S,Rt),Pt}else Rt.uniforms=rt.getUniforms(S),S.onBuild(X,Rt,x),S.onBeforeCompile(Rt,x),Pt=rt.acquireProgram(Rt,Lt),Dt.set(Lt,Pt),Y.uniforms=Rt.uniforms;const It=Y.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(It.clippingPlanes=ft.uniform),go(S,Rt),Y.needsLights=Ah(S),Y.lightsStateVersion=St,Y.needsLights&&(It.ambientLightColor.value=V.state.ambient,It.lightProbe.value=V.state.probe,It.directionalLights.value=V.state.directional,It.directionalLightShadows.value=V.state.directionalShadow,It.spotLights.value=V.state.spot,It.spotLightShadows.value=V.state.spotShadow,It.rectAreaLights.value=V.state.rectArea,It.ltc_1.value=V.state.rectAreaLTC1,It.ltc_2.value=V.state.rectAreaLTC2,It.pointLights.value=V.state.point,It.pointLightShadows.value=V.state.pointShadow,It.hemisphereLights.value=V.state.hemi,It.directionalShadowMap.value=V.state.directionalShadowMap,It.directionalShadowMatrix.value=V.state.directionalShadowMatrix,It.spotShadowMap.value=V.state.spotShadowMap,It.spotLightMatrix.value=V.state.spotLightMatrix,It.spotLightMap.value=V.state.spotLightMap,It.pointShadowMap.value=V.state.pointShadowMap,It.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=Pt,Y.uniformsList=null,Pt}function mo(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=ur.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function go(S,U){const X=b.get(S);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function bh(S,U,X,Y,V){U.isScene!==!0&&(U=mt),y.resetTextureUnits();const ut=U.fog,St=Y.isMeshStandardMaterial?U.environment:null,Rt=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Vn,Lt=(Y.isMeshStandardMaterial?K:k).get(Y.envMap||St),Dt=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Pt=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),It=!!X.morphAttributes.position,le=!!X.morphAttributes.normal,Fe=!!X.morphAttributes.color;let ve=zn;Y.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ve=x.toneMapping);const hn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,oe=hn!==void 0?hn.length:0,Ut=b.get(Y),Fr=p.state.lights;if(H===!0&&(Z===!0||S!==E)){const Ve=S===E&&Y.id===O;ft.setState(Y,S,Ve)}let se=!1;Y.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==Fr.state.version||Ut.outputColorSpace!==Rt||V.isBatchedMesh&&Ut.batching===!1||!V.isBatchedMesh&&Ut.batching===!0||V.isInstancedMesh&&Ut.instancing===!1||!V.isInstancedMesh&&Ut.instancing===!0||V.isSkinnedMesh&&Ut.skinning===!1||!V.isSkinnedMesh&&Ut.skinning===!0||V.isInstancedMesh&&Ut.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ut.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ut.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ut.instancingMorph===!1&&V.morphTexture!==null||Ut.envMap!==Lt||Y.fog===!0&&Ut.fog!==ut||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==ft.numPlanes||Ut.numIntersection!==ft.numIntersection)||Ut.vertexAlphas!==Dt||Ut.vertexTangents!==Pt||Ut.morphTargets!==It||Ut.morphNormals!==le||Ut.morphColors!==Fe||Ut.toneMapping!==ve||Ut.morphTargetsCount!==oe)&&(se=!0):(se=!0,Ut.__version=Y.version);let Yn=Ut.currentProgram;se===!0&&(Yn=Is(Y,U,V));let _o=!1,$i=!1,Or=!1;const Ee=Yn.getUniforms(),En=Ut.uniforms;if(xt.useProgram(Yn.program)&&(_o=!0,$i=!0,Or=!0),Y.id!==O&&(O=Y.id,$i=!0),_o||E!==S){Ee.setValue(N,"projectionMatrix",S.projectionMatrix),Ee.setValue(N,"viewMatrix",S.matrixWorldInverse);const Ve=Ee.map.cameraPosition;Ve!==void 0&&Ve.setValue(N,dt.setFromMatrixPosition(S.matrixWorld)),Yt.logarithmicDepthBuffer&&Ee.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ee.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),E!==S&&(E=S,$i=!0,Or=!0)}if(V.isSkinnedMesh){Ee.setOptional(N,V,"bindMatrix"),Ee.setOptional(N,V,"bindMatrixInverse");const Ve=V.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),Ee.setValue(N,"boneTexture",Ve.boneTexture,y))}V.isBatchedMesh&&(Ee.setOptional(N,V,"batchingTexture"),Ee.setValue(N,"batchingTexture",V._matricesTexture,y));const Br=X.morphAttributes;if((Br.position!==void 0||Br.normal!==void 0||Br.color!==void 0)&&_t.update(V,X,Yn),($i||Ut.receiveShadow!==V.receiveShadow)&&(Ut.receiveShadow=V.receiveShadow,Ee.setValue(N,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(En.envMap.value=Lt,En.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&U.environment!==null&&(En.envMapIntensity.value=U.environmentIntensity),$i&&(Ee.setValue(N,"toneMappingExposure",x.toneMappingExposure),Ut.needsLights&&Th(En,Or),ut&&Y.fog===!0&&Et.refreshFogUniforms(En,ut),Et.refreshMaterialUniforms(En,Y,Q,$,p.state.transmissionRenderTarget),ur.upload(N,mo(Ut),En,y)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ur.upload(N,mo(Ut),En,y),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ee.setValue(N,"center",V.center),Ee.setValue(N,"modelViewMatrix",V.modelViewMatrix),Ee.setValue(N,"normalMatrix",V.normalMatrix),Ee.setValue(N,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Ve=Y.uniformsGroups;for(let zr=0,wh=Ve.length;zr<wh;zr++){const vo=Ve[zr];jt.update(vo,Yn),jt.bind(vo,Yn)}}return Yn}function Th(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Ah(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(S,U,X){b.get(S.texture).__webglTexture=U,b.get(S.depthTexture).__webglTexture=X;const Y=b.get(S);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||Mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){const X=b.get(S);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,X=0){w=S,D=U,L=X;let Y=!0,V=null,ut=!1,St=!1;if(S){const Lt=b.get(S);Lt.__useDefaultFramebuffer!==void 0?(xt.bindFramebuffer(N.FRAMEBUFFER,null),Y=!1):Lt.__webglFramebuffer===void 0?y.setupRenderTarget(S):Lt.__hasExternalTextures&&y.rebindTextures(S,b.get(S.texture).__webglTexture,b.get(S.depthTexture).__webglTexture);const Dt=S.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(St=!0);const Pt=b.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Pt[U])?V=Pt[U][X]:V=Pt[U],ut=!0):S.samples>0&&y.useMultisampledRTT(S)===!1?V=b.get(S).__webglMultisampledFramebuffer:Array.isArray(Pt)?V=Pt[X]:V=Pt,_.copy(S.viewport),C.copy(S.scissor),I=S.scissorTest}else _.copy(it).multiplyScalar(Q).floor(),C.copy(q).multiplyScalar(Q).floor(),I=st;if(xt.bindFramebuffer(N.FRAMEBUFFER,V)&&Y&&xt.drawBuffers(S,V),xt.viewport(_),xt.scissor(C),xt.setScissorTest(I),ut){const Lt=b.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,Lt.__webglTexture,X)}else if(St){const Lt=b.get(S.texture),Dt=U||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Lt.__webglTexture,X||0,Dt)}O=-1},this.readRenderTargetPixels=function(S,U,X,Y,V,ut,St){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=b.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&St!==void 0&&(Rt=Rt[St]),Rt){xt.bindFramebuffer(N.FRAMEBUFFER,Rt);try{const Lt=S.texture,Dt=Lt.format,Pt=Lt.type;if(Dt!==ln&&Kt.convert(Dt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const It=Pt===vr&&(Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float"));if(Pt!==Hn&&Kt.convert(Pt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&Pt!==On&&!It){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-Y&&X>=0&&X<=S.height-V&&N.readPixels(U,X,Y,V,Kt.convert(Dt),Kt.convert(Pt),ut)}finally{const Lt=w!==null?b.get(w).__webglFramebuffer:null;xt.bindFramebuffer(N.FRAMEBUFFER,Lt)}}},this.copyFramebufferToTexture=function(S,U,X=0){const Y=Math.pow(2,-X),V=Math.floor(U.image.width*Y),ut=Math.floor(U.image.height*Y);y.setTexture2D(U,0),N.copyTexSubImage2D(N.TEXTURE_2D,X,0,0,S.x,S.y,V,ut),xt.unbindTexture()},this.copyTextureToTexture=function(S,U,X,Y=0){const V=U.image.width,ut=U.image.height,St=Kt.convert(X.format),Rt=Kt.convert(X.type);y.setTexture2D(X,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,X.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,X.unpackAlignment),U.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Y,S.x,S.y,V,ut,St,Rt,U.image.data):U.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Y,S.x,S.y,U.mipmaps[0].width,U.mipmaps[0].height,St,U.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,Y,S.x,S.y,St,Rt,U.image),Y===0&&X.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),xt.unbindTexture()},this.copyTextureToTexture3D=function(S,U,X,Y,V=0){const ut=Math.round(S.max.x-S.min.x),St=Math.round(S.max.y-S.min.y),Rt=S.max.z-S.min.z+1,Lt=Kt.convert(Y.format),Dt=Kt.convert(Y.type);let Pt;if(Y.isData3DTexture)y.setTexture3D(Y,0),Pt=N.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)y.setTexture2DArray(Y,0),Pt=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,Y.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,Y.unpackAlignment);const It=N.getParameter(N.UNPACK_ROW_LENGTH),le=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Fe=N.getParameter(N.UNPACK_SKIP_PIXELS),ve=N.getParameter(N.UNPACK_SKIP_ROWS),hn=N.getParameter(N.UNPACK_SKIP_IMAGES),oe=X.isCompressedTexture?X.mipmaps[V]:X.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,oe.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,oe.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,S.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,S.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,S.min.z),X.isDataTexture||X.isData3DTexture?N.texSubImage3D(Pt,V,U.x,U.y,U.z,ut,St,Rt,Lt,Dt,oe.data):Y.isCompressedArrayTexture?N.compressedTexSubImage3D(Pt,V,U.x,U.y,U.z,ut,St,Rt,Lt,oe.data):N.texSubImage3D(Pt,V,U.x,U.y,U.z,ut,St,Rt,Lt,Dt,oe),N.pixelStorei(N.UNPACK_ROW_LENGTH,It),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,le),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Fe),N.pixelStorei(N.UNPACK_SKIP_ROWS,ve),N.pixelStorei(N.UNPACK_SKIP_IMAGES,hn),V===0&&Y.generateMipmaps&&N.generateMipmap(Pt),xt.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?y.setTextureCube(S,0):S.isData3DTexture?y.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?y.setTexture2DArray(S,0):y.setTexture2D(S,0),xt.unbindTexture()},this.resetState=function(){D=0,L=0,w=null,xt.reset(),qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Wa?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===Rr?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Xi extends pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ke,this.environmentIntensity=1,this.environmentRotation=new ke,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class a_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ia,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Mn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Pc("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pe=new T;class Er{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Qe(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Zt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Qe(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Qe(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Qe(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Qe(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),s=Zt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),s=Zt(s,this.array),r=Zt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new fe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Er(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Un extends Wn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let wi;const ns=new T,Ri=new T,Ci=new T,Li=new vt,is=new vt,qc=new te,nr=new T,ss=new T,ir=new T,Bl=new vt,_a=new vt,zl=new vt;class Nn extends pe{constructor(t=new Un){if(super(),this.isSprite=!0,this.type="Sprite",wi===void 0){wi=new $t;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new a_(e,5);wi.setIndex([0,1,2,0,2,3]),wi.setAttribute("position",new Er(n,3,0,!1)),wi.setAttribute("uv",new Er(n,2,3,!1))}this.geometry=wi,this.material=t,this.center=new vt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ri.setFromMatrixScale(this.matrixWorld),qc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ci.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ri.multiplyScalar(-Ci.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;sr(nr.set(-.5,-.5,0),Ci,a,Ri,s,r),sr(ss.set(.5,-.5,0),Ci,a,Ri,s,r),sr(ir.set(.5,.5,0),Ci,a,Ri,s,r),Bl.set(0,0),_a.set(1,0),zl.set(1,1);let o=t.ray.intersectTriangle(nr,ss,ir,!1,ns);if(o===null&&(sr(ss.set(-.5,.5,0),Ci,a,Ri,s,r),_a.set(0,1),o=t.ray.intersectTriangle(nr,ir,ss,!1,ns),o===null))return;const l=t.ray.origin.distanceTo(ns);l<t.near||l>t.far||e.push({distance:l,point:ns.clone(),uv:tn.getInterpolation(ns,nr,ss,ir,Bl,_a,zl,new vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function sr(i,t,e,n,s,r){Li.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(is.x=r*Li.x-s*Li.y,is.y=s*Li.x+r*Li.y):is.copy(Li),i.copy(t),i.x+=is.x,i.y+=is.y,i.applyMatrix4(qc)}class en extends Wn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Hl=new T,kl=new T,Gl=new te,va=new Cs,rr=new Rs;class yn extends pe{constructor(t=new $t,e=new en){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Hl.fromBufferAttribute(e,s-1),kl.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Hl.distanceTo(kl);t.setAttribute("lineDistance",new ee(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(s),rr.radius+=r,t.ray.intersectsSphere(rr)===!1)return;Gl.copy(s).invert(),va.copy(t.ray).applyMatrix4(Gl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new T,h=new T,u=new T,d=new T,m=this.isLineSegments?2:1,v=n.index,p=n.attributes.position;if(v!==null){const f=Math.max(0,a.start),R=Math.min(v.count,a.start+a.count);for(let x=f,A=R-1;x<A;x+=m){const D=v.getX(x),L=v.getX(x+1);if(c.fromBufferAttribute(p,D),h.fromBufferAttribute(p,L),va.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const O=t.ray.origin.distanceTo(d);O<t.near||O>t.far||e.push({distance:O,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),R=Math.min(p.count,a.start+a.count);for(let x=f,A=R-1;x<A;x+=m){if(c.fromBufferAttribute(p,x),h.fromBufferAttribute(p,x+1),va.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const L=t.ray.origin.distanceTo(d);L<t.near||L>t.far||e.push({distance:L,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Vl=new T,Wl=new T;class gs extends yn{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Vl.fromBufferAttribute(e,s),Wl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Vl.distanceTo(Wl);t.setAttribute("lineDistance",new ee(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class o_ extends yn{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class _s extends Wn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Xl=new te,Na=new Cs,ar=new Rs,or=new T;class dr extends pe{constructor(t=new $t,e=new _s){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(s),ar.radius+=r,t.ray.intersectsSphere(ar)===!1)return;Xl.copy(s).invert(),Na.copy(t.ray).applyMatrix4(Xl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let v=d,M=m;v<M;v++){const p=c.getX(v);or.fromBufferAttribute(u,p),Yl(or,p,l,s,t,e,this)}}else{const d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let v=d,M=m;v<M;v++)or.fromBufferAttribute(u,v),Yl(or,v,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Yl(i,t,e,n,s,r,a){const o=Na.distanceSqToPoint(i);if(o<e){const l=new T;Na.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}class He extends Le{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ja extends $t{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new T,h=new vt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const m=n+u/e*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ee(a,3)),this.setAttribute("normal",new ee(o,3)),this.setAttribute("uv",new ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ja(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Dr extends $t{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],m=[];let v=0;const M=[],p=n/2;let f=0;R(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ee(u,3)),this.setAttribute("normal",new ee(d,3)),this.setAttribute("uv",new ee(m,2));function R(){const A=new T,D=new T;let L=0;const w=(e-t)/n;for(let O=0;O<=r;O++){const E=[],_=O/r,C=_*(e-t)+t;for(let I=0;I<=s;I++){const P=I/s,B=P*l+o,W=Math.sin(B),$=Math.cos(B);D.x=C*W,D.y=-_*n+p,D.z=C*$,u.push(D.x,D.y,D.z),A.set(W,w,$).normalize(),d.push(A.x,A.y,A.z),m.push(P,1-_),E.push(v++)}M.push(E)}for(let O=0;O<s;O++)for(let E=0;E<r;E++){const _=M[E][O],C=M[E+1][O],I=M[E+1][O+1],P=M[E][O+1];h.push(_,C,P),h.push(C,I,P),L+=6}c.addGroup(f,L,0),f+=L}function x(A){const D=v,L=new vt,w=new T;let O=0;const E=A===!0?t:e,_=A===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,p*_,0),d.push(0,_,0),m.push(.5,.5),v++;const C=v;for(let I=0;I<=s;I++){const B=I/s*l+o,W=Math.cos(B),$=Math.sin(B);w.x=E*$,w.y=p*_,w.z=E*W,u.push(w.x,w.y,w.z),d.push(0,_,0),L.x=W*.5+.5,L.y=$*.5*_+.5,m.push(L.x,L.y),v++}for(let I=0;I<s;I++){const P=D+I,B=C+I;A===!0?h.push(B,B+1,P):h.push(B+1,B,P),O+=3}c.addGroup(f,O,A===!0?1:2),f+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Za extends Dr{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Za(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ir extends $t{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/s,m=new T,v=new vt;for(let M=0;M<=s;M++){for(let p=0;p<=n;p++){const f=r+p/n*a;m.x=u*Math.cos(f),m.y=u*Math.sin(f),l.push(m.x,m.y,m.z),c.push(0,0,1),v.x=(m.x/e+1)/2,v.y=(m.y/e+1)/2,h.push(v.x,v.y)}u+=d}for(let M=0;M<s;M++){const p=M*(n+1);for(let f=0;f<n;f++){const R=f+p,x=R,A=R+n+1,D=R+n+2,L=R+1;o.push(x,A,L),o.push(A,D,L)}}this.setIndex(o),this.setAttribute("position",new ee(l,3)),this.setAttribute("normal",new ee(c,3)),this.setAttribute("uv",new ee(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ir(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ce extends $t{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new T,d=new T,m=[],v=[],M=[],p=[];for(let f=0;f<=n;f++){const R=[],x=f/n;let A=0;f===0&&a===0?A=.5/e:f===n&&l===Math.PI&&(A=-.5/e);for(let D=0;D<=e;D++){const L=D/e;u.x=-t*Math.cos(s+L*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(s+L*r)*Math.sin(a+x*o),v.push(u.x,u.y,u.z),d.copy(u).normalize(),M.push(d.x,d.y,d.z),p.push(L+A,1-x),R.push(c++)}h.push(R)}for(let f=0;f<n;f++)for(let R=0;R<e;R++){const x=h[f][R+1],A=h[f][R],D=h[f+1][R],L=h[f+1][R+1];(f!==0||a>0)&&m.push(x,A,L),(f!==n-1||l<Math.PI)&&m.push(A,D,L)}this.setIndex(m),this.setAttribute("position",new ee(v,3)),this.setAttribute("normal",new ee(M,3)),this.setAttribute("uv",new ee(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ce(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ur extends $t{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new T,u=new T,d=new T;for(let m=0;m<=n;m++)for(let v=0;v<=s;v++){const M=v/s*r,p=m/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(M),u.y=(t+e*Math.cos(p))*Math.sin(M),u.z=e*Math.sin(p),o.push(u.x,u.y,u.z),h.x=t*Math.cos(M),h.y=t*Math.sin(M),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(v/s),c.push(m/n)}for(let m=1;m<=n;m++)for(let v=1;v<=s;v++){const M=(s+1)*m+v-1,p=(s+1)*(m-1)+v-1,f=(s+1)*(m-1)+v,R=(s+1)*m+v;a.push(M,p,R),a.push(p,f,R)}this.setIndex(a),this.setAttribute("position",new ee(o,3)),this.setAttribute("normal",new ee(l,3)),this.setAttribute("uv",new ee(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ur(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ni extends Wn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rc,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ke,this.combine=Va,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const ql={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class l_{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const m=c[u],v=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return v}return null}}}const c_=new l_;class $a{constructor(t){this.manager=t!==void 0?t:c_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}$a.DEFAULT_MATERIAL_NAME="__DEFAULT";class h_ extends $a{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=ql.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=Ts("img");function l(){h(),ql.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class fr extends $a{constructor(t){super(t)}load(t,e,n,s){const r=new Le,a=new h_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Ja extends pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const xa=new te,Kl=new T,jl=new T;class Kc{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qa,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Kl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Kl),jl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(jl),e.updateMatrixWorld(),xa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Zl=new te,rs=new T,Ma=new T;class u_ extends Kc{constructor(){super(new Re(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new vt(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),rs.setFromMatrixPosition(t.matrixWorld),n.position.copy(rs),Ma.copy(n.position),Ma.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ma),n.updateMatrixWorld(),s.makeTranslation(-rs.x,-rs.y,-rs.z),Zl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zl)}}class d_ extends Ja{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new u_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class f_ extends Kc{constructor(){super(new Lr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jc extends Ja{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.shadow=new f_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Qa extends Ja{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const $l=new te;class p_{constructor(t,e,n=0,s=1/0){this.ray=new Cs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ya,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return $l.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($l),this}intersectObject(t,e=!0,n=[]){return Fa(t,this,n,e),n.sort(Jl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Fa(t[s],this,n,e);return n.sort(Jl),n}}function Jl(i,t){return i.distance-t.distance}function Fa(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){const s=i.children;for(let r=0,a=s.length;r<a;r++)Fa(s[r],t,e,!0)}}class vs{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(we(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class m_ extends gs{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new $t;s.setAttribute("position",new ee(e,3)),s.setAttribute("color",new ee(n,3));const r=new en({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(t,e,n){const s=new Ht,r=this.geometry.attributes.color.array;return s.set(t),s.toArray(r,0),s.toArray(r,3),s.set(e),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ga}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ga);const Ql={type:"change"},ya={type:"start"},tc={type:"end"},lr=new Cs,ec=new Pn,g_=Math.cos(70*re.DEG2RAD);class to extends li{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_n.ROTATE,MIDDLE:_n.DOLLY,RIGHT:_n.PAN},this.touches={ONE:Ln.ROTATE,TWO:Ln.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(g){g.addEventListener("keydown",ft),this._domElementKeyEvents=g},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ft),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ql),n.update(),r=s.NONE},this.update=function(){const g=new T,G=new Ue().setFromUnitVectors(t.up,new T(0,1,0)),j=G.clone().invert(),ot=new T,pt=new Ue,Vt=new T,Bt=2*Math.PI;return function(_e=null){const Jt=n.object.position;g.copy(Jt).sub(n.target),g.applyQuaternion(G),o.setFromVector3(g),n.autoRotate&&r===s.NONE&&I(_(_e)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let ce=n.minAzimuthAngle,he=n.maxAzimuthAngle;isFinite(ce)&&isFinite(he)&&(ce<-Math.PI?ce+=Bt:ce>Math.PI&&(ce-=Bt),he<-Math.PI?he+=Bt:he>Math.PI&&(he-=Bt),ce<=he?o.theta=Math.max(ce,Math.min(he,o.theta)):o.theta=o.theta>(ce+he)/2?Math.max(ce,o.theta):Math.min(he,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Ne=!1;if(n.zoomToCursor&&L||n.object.isOrthographicCamera)o.radius=it(o.radius);else{const Ge=o.radius;o.radius=it(o.radius*c),Ne=Ge!=o.radius}if(g.setFromSpherical(o),g.applyQuaternion(j),Jt.copy(n.target).add(g),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&L){let Ge=null;if(n.object.isPerspectiveCamera){const Sn=g.length();Ge=it(Sn*c);const ci=Sn-Ge;n.object.position.addScaledVector(A,ci),n.object.updateMatrixWorld(),Ne=!!ci}else if(n.object.isOrthographicCamera){const Sn=new T(D.x,D.y,0);Sn.unproject(n.object);const ci=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Ne=ci!==n.object.zoom;const Xn=new T(D.x,D.y,0);Xn.unproject(n.object),n.object.position.sub(Xn).add(Sn),n.object.updateMatrixWorld(),Ge=g.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ge!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ge).add(n.object.position):(lr.origin.copy(n.object.position),lr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(lr.direction))<g_?t.lookAt(n.target):(ec.setFromNormalAndCoplanarPoint(n.object.up,n.target),lr.intersectPlane(ec,n.target))))}else if(n.object.isOrthographicCamera){const Ge=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),Ge!==n.object.zoom&&(n.object.updateProjectionMatrix(),Ne=!0)}return c=1,L=!1,Ne||ot.distanceToSquared(n.object.position)>a||8*(1-pt.dot(n.object.quaternion))>a||Vt.distanceToSquared(n.target)>a?(n.dispatchEvent(Ql),ot.copy(n.object.position),pt.copy(n.object.quaternion),Vt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",_t),n.domElement.removeEventListener("pointerdown",k),n.domElement.removeEventListener("pointercancel",J),n.domElement.removeEventListener("wheel",rt),n.domElement.removeEventListener("pointermove",K),n.domElement.removeEventListener("pointerup",J),n.domElement.getRootNode().removeEventListener("keydown",At,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ft),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const a=1e-6,o=new vs,l=new vs;let c=1;const h=new T,u=new vt,d=new vt,m=new vt,v=new vt,M=new vt,p=new vt,f=new vt,R=new vt,x=new vt,A=new T,D=new vt;let L=!1;const w=[],O={};let E=!1;function _(g){return g!==null?2*Math.PI/60*n.autoRotateSpeed*g:2*Math.PI/60/60*n.autoRotateSpeed}function C(g){const G=Math.abs(g*.01);return Math.pow(.95,n.zoomSpeed*G)}function I(g){l.theta-=g}function P(g){l.phi-=g}const B=function(){const g=new T;return function(j,ot){g.setFromMatrixColumn(ot,0),g.multiplyScalar(-j),h.add(g)}}(),W=function(){const g=new T;return function(j,ot){n.screenSpacePanning===!0?g.setFromMatrixColumn(ot,1):(g.setFromMatrixColumn(ot,0),g.crossVectors(n.object.up,g)),g.multiplyScalar(j),h.add(g)}}(),$=function(){const g=new T;return function(j,ot){const pt=n.domElement;if(n.object.isPerspectiveCamera){const Vt=n.object.position;g.copy(Vt).sub(n.target);let Bt=g.length();Bt*=Math.tan(n.object.fov/2*Math.PI/180),B(2*j*Bt/pt.clientHeight,n.object.matrix),W(2*ot*Bt/pt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(B(j*(n.object.right-n.object.left)/n.object.zoom/pt.clientWidth,n.object.matrix),W(ot*(n.object.top-n.object.bottom)/n.object.zoom/pt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Q(g){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=g:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function z(g){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=g:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function nt(g,G){if(!n.zoomToCursor)return;L=!0;const j=n.domElement.getBoundingClientRect(),ot=g-j.left,pt=G-j.top,Vt=j.width,Bt=j.height;D.x=ot/Vt*2-1,D.y=-(pt/Bt)*2+1,A.set(D.x,D.y,1).unproject(n.object).sub(n.object.position).normalize()}function it(g){return Math.max(n.minDistance,Math.min(n.maxDistance,g))}function q(g){u.set(g.clientX,g.clientY)}function st(g){nt(g.clientX,g.clientX),f.set(g.clientX,g.clientY)}function ht(g){v.set(g.clientX,g.clientY)}function H(g){d.set(g.clientX,g.clientY),m.subVectors(d,u).multiplyScalar(n.rotateSpeed);const G=n.domElement;I(2*Math.PI*m.x/G.clientHeight),P(2*Math.PI*m.y/G.clientHeight),u.copy(d),n.update()}function Z(g){R.set(g.clientX,g.clientY),x.subVectors(R,f),x.y>0?Q(C(x.y)):x.y<0&&z(C(x.y)),f.copy(R),n.update()}function at(g){M.set(g.clientX,g.clientY),p.subVectors(M,v).multiplyScalar(n.panSpeed),$(p.x,p.y),v.copy(M),n.update()}function et(g){nt(g.clientX,g.clientY),g.deltaY<0?z(C(g.deltaY)):g.deltaY>0&&Q(C(g.deltaY)),n.update()}function dt(g){let G=!1;switch(g.code){case n.keys.UP:g.ctrlKey||g.metaKey||g.shiftKey?P(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):$(0,n.keyPanSpeed),G=!0;break;case n.keys.BOTTOM:g.ctrlKey||g.metaKey||g.shiftKey?P(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):$(0,-n.keyPanSpeed),G=!0;break;case n.keys.LEFT:g.ctrlKey||g.metaKey||g.shiftKey?I(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):$(n.keyPanSpeed,0),G=!0;break;case n.keys.RIGHT:g.ctrlKey||g.metaKey||g.shiftKey?I(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):$(-n.keyPanSpeed,0),G=!0;break}G&&(g.preventDefault(),n.update())}function mt(g){if(w.length===1)u.set(g.pageX,g.pageY);else{const G=jt(g),j=.5*(g.pageX+G.x),ot=.5*(g.pageY+G.y);u.set(j,ot)}}function bt(g){if(w.length===1)v.set(g.pageX,g.pageY);else{const G=jt(g),j=.5*(g.pageX+G.x),ot=.5*(g.pageY+G.y);v.set(j,ot)}}function N(g){const G=jt(g),j=g.pageX-G.x,ot=g.pageY-G.y,pt=Math.sqrt(j*j+ot*ot);f.set(0,pt)}function wt(g){n.enableZoom&&N(g),n.enablePan&&bt(g)}function Mt(g){n.enableZoom&&N(g),n.enableRotate&&mt(g)}function Yt(g){if(w.length==1)d.set(g.pageX,g.pageY);else{const j=jt(g),ot=.5*(g.pageX+j.x),pt=.5*(g.pageY+j.y);d.set(ot,pt)}m.subVectors(d,u).multiplyScalar(n.rotateSpeed);const G=n.domElement;I(2*Math.PI*m.x/G.clientHeight),P(2*Math.PI*m.y/G.clientHeight),u.copy(d)}function xt(g){if(w.length===1)M.set(g.pageX,g.pageY);else{const G=jt(g),j=.5*(g.pageX+G.x),ot=.5*(g.pageY+G.y);M.set(j,ot)}p.subVectors(M,v).multiplyScalar(n.panSpeed),$(p.x,p.y),v.copy(M)}function Ot(g){const G=jt(g),j=g.pageX-G.x,ot=g.pageY-G.y,pt=Math.sqrt(j*j+ot*ot);R.set(0,pt),x.set(0,Math.pow(R.y/f.y,n.zoomSpeed)),Q(x.y),f.copy(R);const Vt=(g.pageX+G.x)*.5,Bt=(g.pageY+G.y)*.5;nt(Vt,Bt)}function b(g){n.enableZoom&&Ot(g),n.enablePan&&xt(g)}function y(g){n.enableZoom&&Ot(g),n.enableRotate&&Yt(g)}function k(g){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(g.pointerId),n.domElement.addEventListener("pointermove",K),n.domElement.addEventListener("pointerup",J)),!Kt(g)&&(kt(g),g.pointerType==="touch"?Ct(g):tt(g)))}function K(g){n.enabled!==!1&&(g.pointerType==="touch"?gt(g):Tt(g))}function J(g){switch(Gt(g),w.length){case 0:n.domElement.releasePointerCapture(g.pointerId),n.domElement.removeEventListener("pointermove",K),n.domElement.removeEventListener("pointerup",J),n.dispatchEvent(tc),r=s.NONE;break;case 1:const G=w[0],j=O[G];Ct({pointerId:G,pageX:j.x,pageY:j.y});break}}function tt(g){let G;switch(g.button){case 0:G=n.mouseButtons.LEFT;break;case 1:G=n.mouseButtons.MIDDLE;break;case 2:G=n.mouseButtons.RIGHT;break;default:G=-1}switch(G){case _n.DOLLY:if(n.enableZoom===!1)return;st(g),r=s.DOLLY;break;case _n.ROTATE:if(g.ctrlKey||g.metaKey||g.shiftKey){if(n.enablePan===!1)return;ht(g),r=s.PAN}else{if(n.enableRotate===!1)return;q(g),r=s.ROTATE}break;case _n.PAN:if(g.ctrlKey||g.metaKey||g.shiftKey){if(n.enableRotate===!1)return;q(g),r=s.ROTATE}else{if(n.enablePan===!1)return;ht(g),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(ya)}function Tt(g){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;H(g);break;case s.DOLLY:if(n.enableZoom===!1)return;Z(g);break;case s.PAN:if(n.enablePan===!1)return;at(g);break}}function rt(g){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(g.preventDefault(),n.dispatchEvent(ya),et(Et(g)),n.dispatchEvent(tc))}function Et(g){const G=g.deltaMode,j={clientX:g.clientX,clientY:g.clientY,deltaY:g.deltaY};switch(G){case 1:j.deltaY*=16;break;case 2:j.deltaY*=100;break}return g.ctrlKey&&!E&&(j.deltaY*=10),j}function At(g){g.key==="Control"&&(E=!0,n.domElement.getRootNode().addEventListener("keyup",lt,{passive:!0,capture:!0}))}function lt(g){g.key==="Control"&&(E=!1,n.domElement.getRootNode().removeEventListener("keyup",lt,{passive:!0,capture:!0}))}function ft(g){n.enabled===!1||n.enablePan===!1||dt(g)}function Ct(g){switch(qt(g),w.length){case 1:switch(n.touches.ONE){case Ln.ROTATE:if(n.enableRotate===!1)return;mt(g),r=s.TOUCH_ROTATE;break;case Ln.PAN:if(n.enablePan===!1)return;bt(g),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Ln.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;wt(g),r=s.TOUCH_DOLLY_PAN;break;case Ln.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Mt(g),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(ya)}function gt(g){switch(qt(g),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Yt(g),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;xt(g),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;b(g),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;y(g),n.update();break;default:r=s.NONE}}function _t(g){n.enabled!==!1&&g.preventDefault()}function kt(g){w.push(g.pointerId)}function Gt(g){delete O[g.pointerId];for(let G=0;G<w.length;G++)if(w[G]==g.pointerId){w.splice(G,1);return}}function Kt(g){for(let G=0;G<w.length;G++)if(w[G]==g.pointerId)return!0;return!1}function qt(g){let G=O[g.pointerId];G===void 0&&(G=new vt,O[g.pointerId]=G),G.set(g.pageX,g.pageY)}function jt(g){const G=g.pointerId===w[0]?w[1]:w[0];return O[G]}n.domElement.addEventListener("contextmenu",_t),n.domElement.addEventListener("pointerdown",k),n.domElement.addEventListener("pointercancel",J),n.domElement.addEventListener("wheel",rt,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",At,{passive:!0,capture:!0}),this.update()}}function __(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Zc={exports:{}};(function(i,t){(function(){var e=Math.PI,n=Math.sin,s=Math.cos,r=Math.tan,a=Math.asin,o=Math.atan2,l=Math.acos,c=e/180,h=1e3*60*60*24,u=2440588,d=2451545;function m(q){return q.valueOf()/h-.5+u}function v(q){return new Date((q+.5-u)*h)}function M(q){return m(q)-d}var p=c*23.4397;function f(q,st){return o(n(q)*s(p)-r(st)*n(p),s(q))}function R(q,st){return a(n(st)*s(p)+s(st)*n(p)*n(q))}function x(q,st,ht){return o(n(q),s(q)*n(st)-r(ht)*s(st))}function A(q,st,ht){return a(n(st)*n(ht)+s(st)*s(ht)*s(q))}function D(q,st){return c*(280.16+360.9856235*q)-st}function L(q){return q<0&&(q=0),2967e-7/Math.tan(q+.00312536/(q+.08901179))}function w(q){return c*(357.5291+.98560028*q)}function O(q){var st=c*(1.9148*n(q)+.02*n(2*q)+3e-4*n(3*q)),ht=c*102.9372;return q+st+ht+e}function E(q){var st=w(q),ht=O(st);return{dec:R(ht,0),ra:f(ht,0)}}var _={};_.getPosition=function(q,st,ht){var H=c*-ht,Z=c*st,at=M(q),et=E(at),dt=D(at,H)-et.ra;return{azimuth:x(dt,Z,et.dec),altitude:A(dt,Z,et.dec)}};var C=_.times=[[-.833,"sunrise","sunset"],[-.3,"sunriseEnd","sunsetStart"],[-6,"dawn","dusk"],[-12,"nauticalDawn","nauticalDusk"],[-18,"nightEnd","night"],[6,"goldenHourEnd","goldenHour"]];_.addTime=function(q,st,ht){C.push([q,st,ht])};var I=9e-4;function P(q,st){return Math.round(q-I-st/(2*e))}function B(q,st,ht){return I+(q+st)/(2*e)+ht}function W(q,st,ht){return d+q+.0053*n(st)-.0069*n(2*ht)}function $(q,st,ht){return l((n(q)-n(st)*n(ht))/(s(st)*s(ht)))}function Q(q){return-2.076*Math.sqrt(q)/60}function z(q,st,ht,H,Z,at,et){var dt=$(q,ht,H),mt=B(dt,st,Z);return W(mt,at,et)}_.getTimes=function(q,st,ht,H){H=H||0;var Z=c*-ht,at=c*st,et=Q(H),dt=M(q),mt=P(dt,Z),bt=B(0,Z,mt),N=w(bt),wt=O(N),Mt=R(wt,0),Yt=W(bt,N,wt),xt,Ot,b,y,k,K,J={solarNoon:v(Yt),nadir:v(Yt-.5)};for(xt=0,Ot=C.length;xt<Ot;xt+=1)b=C[xt],y=(b[0]+et)*c,k=z(y,Z,at,Mt,mt,N,wt),K=Yt-(k-Yt),J[b[1]]=v(K),J[b[2]]=v(k);return J};function nt(q){var st=c*(218.316+13.176396*q),ht=c*(134.963+13.064993*q),H=c*(93.272+13.22935*q),Z=st+c*6.289*n(ht),at=c*5.128*n(H),et=385001-20905*s(ht);return{ra:f(Z,at),dec:R(Z,at),dist:et}}_.getMoonPosition=function(q,st,ht){var H=c*-ht,Z=c*st,at=M(q),et=nt(at),dt=D(at,H)-et.ra,mt=A(dt,Z,et.dec),bt=o(n(dt),r(Z)*s(et.dec)-n(et.dec)*s(dt));return mt=mt+L(mt),{azimuth:x(dt,Z,et.dec),altitude:mt,distance:et.dist,parallacticAngle:bt}},_.getMoonIllumination=function(q){var st=M(q||new Date),ht=E(st),H=nt(st),Z=149598e3,at=l(n(ht.dec)*n(H.dec)+s(ht.dec)*s(H.dec)*s(ht.ra-H.ra)),et=o(Z*n(at),H.dist-Z*s(at)),dt=o(s(ht.dec)*n(ht.ra-H.ra),n(ht.dec)*s(H.dec)-s(ht.dec)*n(H.dec)*s(ht.ra-H.ra));return{fraction:(1+s(et))/2,phase:.5+.5*et*(dt<0?-1:1)/Math.PI,angle:dt}};function it(q,st){return new Date(q.valueOf()+st*h/24)}_.getMoonTimes=function(q,st,ht,H){var Z=new Date(q);H?Z.setUTCHours(0,0,0,0):Z.setHours(0,0,0,0);for(var at=.133*c,et=_.getMoonPosition(Z,st,ht).altitude-at,dt,mt,bt,N,wt,Mt,Yt,xt,Ot,b,y,k,K,J=1;J<=24&&(dt=_.getMoonPosition(it(Z,J),st,ht).altitude-at,mt=_.getMoonPosition(it(Z,J+1),st,ht).altitude-at,wt=(et+mt)/2-dt,Mt=(mt-et)/2,Yt=-Mt/(2*wt),xt=(wt*Yt+Mt)*Yt+dt,Ot=Mt*Mt-4*wt*dt,b=0,Ot>=0&&(K=Math.sqrt(Ot)/(Math.abs(wt)*2),y=Yt-K,k=Yt+K,Math.abs(y)<=1&&b++,Math.abs(k)<=1&&b++,y<-1&&(y=k)),b===1?et<0?bt=J+y:N=J+y:b===2&&(bt=J+(xt<0?k:y),N=J+(xt<0?y:k)),!(bt&&N));J+=2)et=mt;var tt={};return bt&&(tt.rise=it(Z,bt)),N&&(tt.set=it(Z,N)),!bt&&!N&&(tt[xt>0?"alwaysUp":"alwaysDown"]=!0),tt},i.exports=_})()})(Zc);var v_=Zc.exports;const ds=__(v_);function nc(i){return((i*180/Math.PI+180)%360+360)%360}function $c(i,t,e){const n=ds.getPosition(i,t,e),s=ds.getMoonPosition(i,t,e),r=ds.getTimes(i,t,e),a=ds.getMoonTimes(i,t,e),o={azimuthRad:n.azimuth,altitudeRad:n.altitude,azimuthDeg:nc(n.azimuth),altitudeDeg:n.altitude*180/Math.PI},l={azimuthRad:s.azimuth,altitudeRad:s.altitude,azimuthDeg:nc(s.azimuth),altitudeDeg:s.altitude*180/Math.PI},c="rise"in a&&a.rise instanceof Date?a.rise:void 0,h="set"in a&&a.set instanceof Date?a.set:void 0;return{sun:o,moon:l,sunTimes:r,moonRise:c,moonSet:h}}function Fn(i,t,e){const n=-Math.sin(i)*Math.cos(t)*e,s=Math.sin(t)*e,r=Math.cos(i)*Math.cos(t)*e;return[n,s,r]}function x_(i){return i.getTime()/864e5+24405875e-1}function pr(i,t,e,n,s){const r=x_(s),a=(r-2451545)/36525,h=((((((280.46061837+360.98564736629*(r-2451545)+387933e-9*a*a-a*a*a/3871e4)%360+360)%360+n)%360+360)%360-i)%360+360)%360*Math.PI/180,u=t*Math.PI/180,d=e*Math.PI/180,m=Math.sin(u)*Math.sin(d)+Math.cos(u)*Math.cos(d)*Math.cos(h),v=Math.asin(Math.max(-1,Math.min(1,m))),M=Math.cos(v),p=M<1e-10?0:(Math.sin(u)-Math.sin(d)*m)/(Math.cos(d)*M);let f=Math.acos(Math.max(-1,Math.min(1,p)));return Math.sin(h)>0&&(f=2*Math.PI-f),{altRad:v,azRad:f-Math.PI}}const sn=[{nameJa:"おひつじ座",nameEn:"Aries",stars:[[31.79,23.46],[28.66,20.81],[28.38,19.29]],lines:[[0,1],[1,2]]},{nameJa:"おうし座",nameEn:"Taurus",stars:[[56.87,24.11],[67.15,19.18],[68.98,16.51],[66.37,15.96],[81.57,28.61]],lines:[[0,1],[1,2],[2,3],[1,4]]},{nameJa:"ふたご座",nameEn:"Gemini",stars:[[95.74,22.51],[100.98,25.13],[99.43,16.4],[113.65,31.89],[116.33,28.03]],lines:[[0,1],[1,3],[1,2],[3,4]]},{nameJa:"かに座",nameEn:"Cancer",stars:[[124.13,9.19],[128.03,18.15],[130.82,21.47],[134.62,11.86]],lines:[[0,1],[1,2],[1,3]]},{nameJa:"しし座",nameEn:"Leo",stars:[[146.46,23.77],[154.17,23.42],[154.99,19.84],[152.09,11.97],[168.53,20.52],[177.27,14.57]],lines:[[0,1],[1,2],[2,3],[2,4],[4,5]]},{nameJa:"おとめ座",nameEn:"Virgo",stars:[[177.67,1.76],[190.42,-1.45],[193.9,3.4],[195.54,10.96],[201.3,-11.16]],lines:[[0,1],[1,2],[2,3],[1,4]]},{nameJa:"てんびん座",nameEn:"Libra",stars:[[222.72,-16.04],[229.25,-9.38],[233.88,-14.79]],lines:[[0,1],[1,2],[0,2]]},{nameJa:"さそり座",nameEn:"Scorpius",stars:[[241.36,-19.81],[240.08,-22.62],[247.35,-26.43],[252.54,-34.29],[265.62,-39.03],[263.4,-37.1]],lines:[[0,1],[1,2],[2,3],[3,4],[4,5]]},{nameJa:"いて座",nameEn:"Sagittarius",stars:[[282.65,-27.67],[275.25,-29.83],[276.04,-34.39],[274.41,-25.42],[283.82,-26.3],[285.65,-29.88]],lines:[[3,1],[1,2],[2,5],[5,4],[4,0],[0,3],[1,0]]},{nameJa:"やぎ座",nameEn:"Capricornus",stars:[[304.51,-12.54],[305.25,-14.78],[321.67,-22.41],[325.02,-16.66],[326.76,-16.13]],lines:[[0,1],[1,2],[2,3],[3,4],[0,2]]},{nameJa:"みずがめ座",nameEn:"Aquarius",stars:[[311.92,-9.5],[322.89,-5.57],[331.45,-.32],[335.41,-1.39],[343.66,-15.82]],lines:[[0,1],[1,2],[2,3],[3,4]]},{nameJa:"うお座",nameEn:"Pisces",stars:[[22.87,15.35],[30.51,2.76],[38.95,3.82],[35.6,6.86]],lines:[[0,1],[1,3],[3,2]]}],rn=[{nameJa:"北極星",nameEn:"Polaris",stars:[[37.95,89.26]],lines:[]},{nameJa:"オリオン座",nameEn:"Orion",stars:[[88.79,7.41],[78.63,-8.2],[81.28,6.35],[83.86,-.3],[84.05,-1.2],[85.19,-1.94],[86.94,-9.67]],lines:[[0,2],[2,3],[3,4],[4,5],[5,6],[6,1],[3,1],[0,4]]},{nameJa:"北斗七星",nameEn:"Big Dipper",stars:[[165.93,61.75],[165.46,56.38],[178.46,53.69],[183.86,57.03],[193.51,55.96],[200.98,54.93],[206.89,49.31]],lines:[[0,1],[0,3],[1,2],[2,3],[3,4],[4,5],[5,6]]},{nameJa:"カシオペア座",nameEn:"Cassiopeia",stars:[[10.13,56.54],[2.29,59.15],[14.18,60.72],[21.45,60.24],[28.6,63.67]],lines:[[1,0],[0,2],[2,3],[3,4]]},{nameJa:"こと座",nameEn:"Lyra",stars:[[279.23,38.78],[282.52,39.67],[284.74,37.61],[282.52,33.36],[284.74,32.69]],lines:[[0,1],[1,2],[2,4],[4,3],[3,1],[2,3]]},{nameJa:"はくちょう座",nameEn:"Cygnus",stars:[[310.36,45.28],[305.56,40.26],[292.68,27.96],[296.24,45.13],[311.55,33.97]],lines:[[2,1],[1,0],[3,1],[1,4]]},{nameJa:"わし座",nameEn:"Aquila",stars:[[297.7,8.87],[296.56,10.61],[298.83,6.41],[293.77,3.11],[286.35,13.86]],lines:[[1,0],[0,2],[4,1],[1,3]]},{nameJa:"大熊座",nameEn:"Ursa Major",stars:[[165.93,61.75],[165.46,56.38],[178.46,53.69],[183.86,57.03],[193.51,55.96],[200.98,54.93],[206.89,49.31],[143.49,51.68],[132.83,48.03],[136.76,47.16],[141.8,41.5],[141.49,33.09]],lines:[[0,1],[1,2],[2,3],[3,0],[3,4],[4,5],[5,6],[0,7],[7,8],[8,9],[9,10],[10,11],[1,10]]},{nameJa:"こぐま座",nameEn:"Ursa Minor",stars:[[37.95,89.26],[263.05,86.59],[251.49,82.04],[236.02,77.79],[244.38,75.76],[222.68,74.16],[230.18,71.83]],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,3]]}],as=[{nameJa:"夏の大三角形",nameEn:"Summer Triangle",colorHex:4500223,stars:[{nameJa:"ベガ",nameEn:"Vega",raDeg:279.23,decDeg:38.78},{nameJa:"デネブ",nameEn:"Deneb",raDeg:310.36,decDeg:45.28},{nameJa:"アルタイル",nameEn:"Altair",raDeg:297.7,decDeg:8.87}]},{nameJa:"冬の大三角形",nameEn:"Winter Triangle",colorHex:16746564,stars:[{nameJa:"シリウス",nameEn:"Sirius",raDeg:101.29,decDeg:-16.72},{nameJa:"ベテルギウス",nameEn:"Betelgeuse",raDeg:88.79,decDeg:7.41},{nameJa:"プロキオン",nameEn:"Procyon",raDeg:114.83,decDeg:5.23}]}],Se=5,Ar=class Ar{constructor(t){F(this,"renderer");F(this,"scene");F(this,"camera");F(this,"controls");F(this,"sunMesh");F(this,"moonMesh");F(this,"sunLine");F(this,"moonLine");F(this,"rafId",null);F(this,"constellationGroup");F(this,"constStarAttr",null);F(this,"constLineAttr",null);F(this,"constLabels",[]);F(this,"famousGroup");F(this,"famousStarAttr",null);F(this,"famousLineAttr",null);F(this,"famousLabels",[]);F(this,"triangleGroup");F(this,"triangleData",[]);F(this,"cardinalSprites",[]);this.renderer=new Wi({canvas:t,antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setClearColor(328986),this.scene=new Xi,this.camera=new Re(55,1,.1,100),this.camera.position.set(0,3,9),this.camera.lookAt(0,0,0),this.controls=new to(this.camera,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.minDistance=2,this.controls.maxDistance=18,this.buildScene();const e=new Ce(.2,16,16),n=new Me({color:16772676});this.sunMesh=new Wt(e,n),this.scene.add(this.sunMesh);const s=new Ce(.32,16,16),r=new Me({color:16772676,transparent:!0,opacity:.18});this.sunMesh.add(new Wt(s,r));const a=new Ce(.13,16,16),o=new Me({color:13421789});this.moonMesh=new Wt(a,o),this.scene.add(this.moonMesh),this.sunLine=this.makeLine(16772676),this.moonLine=this.makeLine(11184844),this.handleResize(!0),window.addEventListener("resize",()=>this.handleResize()),this.startLoop(),this.constellationGroup=new nn,this.constellationGroup.visible=!1,this.scene.add(this.constellationGroup),this.initConstellations(),this.famousGroup=new nn,this.famousGroup.visible=!1,this.scene.add(this.famousGroup),this.initFamous(),this.triangleGroup=new nn,this.triangleGroup.visible=!1,this.scene.add(this.triangleGroup),this.initTriangles()}makeLine(t){const e=new en({color:t,transparent:!0,opacity:.4}),n=[new T(0,0,0),new T(0,1,0)],s=new $t().setFromPoints(n),r=new yn(s,e);return this.scene.add(r),r}buildScene(){this.scene.add(new Wt(new Ce(Se,24,16),new Me({color:1716320,wireframe:!0,transparent:!0,opacity:.15})));const t=new Wt(new ja(Se,64),new Me({color:664080,transparent:!0,opacity:.4,side:Xe}));t.rotation.x=-Math.PI/2,this.scene.add(t);const e=new Wt(new Ir(Se-.02,Se+.02,64),new Me({color:3385941,side:Xe}));e.rotation.x=-Math.PI/2,this.scene.add(e),[{dirKey:"dir-north",x:0,z:-Se,isNorth:!0},{dirKey:"dir-south",x:0,z:Se,isNorth:!1},{dirKey:"dir-east",x:Se,z:0,isNorth:!1},{dirKey:"dir-west",x:-Se,z:0,isNorth:!1}].forEach(({dirKey:a,x:o,z:l,isNorth:c})=>{const h=a==="dir-north"?"北(N)":a==="dir-south"?"南(S)":a==="dir-east"?"東(E)":"西(W)",u=this.makeLabel(h,c);u.position.set(o*1.08,.3,l*1.08),this.scene.add(u),this.cardinalSprites.push({sprite:u,dirKey:a,isNorth:c})}),this.scene.add(new Wt(new Ce(.07,8,8),new Me({color:16777215})));const s=new en({color:3359846,transparent:!0,opacity:.5}),r=new $t().setFromPoints([new T(0,0,0),new T(0,Se,0)]);this.scene.add(new yn(r,s))}makeLabel(t,e=!1){const n=document.createElement("canvas");n.width=128,n.height=64;const s=n.getContext("2d");s.font="bold 36px Arial",s.textAlign="center",s.textBaseline="middle",s.fillStyle=e?"#ff7777":"#66cc77",s.fillText(t,64,32);const r=new Nn(new Un({map:new He(n)}));return r.scale.set(1.3,.65,.65),r}setCompassHeading(t){const e=this.controls.target,n=new T().subVectors(this.camera.position,e),s=new vs().setFromVector3(n);s.theta=-re.degToRad(t),n.setFromSpherical(s),this.camera.position.copy(e).add(n),this.controls.minAzimuthAngle===this.controls.maxAzimuthAngle&&(this.controls.minAzimuthAngle=s.theta,this.controls.maxAzimuthAngle=s.theta),this.controls.update()}getCameraHeadingDeg(){const t=new T().subVectors(this.camera.position,this.controls.target),e=new vs().setFromVector3(t).theta;return-re.radToDeg(e)}onCameraChange(t){this.controls.addEventListener("change",t)}setCompassLocked(t){if(t){const e=new T().subVectors(this.camera.position,this.controls.target),n=new vs().setFromVector3(e).theta;this.controls.minAzimuthAngle=n,this.controls.maxAzimuthAngle=n}else this.controls.minAzimuthAngle=-1/0,this.controls.maxAzimuthAngle=1/0}update(t){const[e,n,s]=Fn(t.sun.azimuthRad,t.sun.altitudeRad,Se);this.sunMesh.position.set(e,n,s),this.setLine(this.sunLine,e,n,s);const r=this.sunMesh.material;r.opacity=t.sun.altitudeRad<0?.25:1,r.transparent=t.sun.altitudeRad<0;const[a,o,l]=Fn(t.moon.azimuthRad,t.moon.altitudeRad,Se);this.moonMesh.position.set(a,o,l),this.setLine(this.moonLine,a,o,l);const c=this.moonMesh.material;c.opacity=t.moon.altitudeRad<0?.25:1,c.transparent=t.moon.altitudeRad<0}setLine(t,e,n,s){const r=t.geometry.attributes.position;r.setXYZ(1,e,n,s),r.needsUpdate=!0}handleResize(t=!1){const e=this.renderer.domElement.parentElement,n=e.clientWidth,s=e.clientHeight;n===0||s===0||(this.renderer.setSize(n,s),this.camera.aspect=n/s,this.camera.updateProjectionMatrix(),t&&this.ensureSphereFitsView())}ensureSphereFitsView(){const t=this.controls.target,e=new T().subVectors(this.camera.position,t),n=e.length();if(n<1e-6)return;const s=re.degToRad(this.camera.fov),r=2*Math.atan(Math.tan(s/2)*this.camera.aspect),a=Se/Math.min(Math.sin(s/2),Math.sin(r/2))*Ar.FIT_MARGIN;a>n&&(a>this.controls.maxDistance&&(this.controls.maxDistance=a),e.setLength(a),this.camera.position.copy(t).add(e),this.controls.update())}startLoop(){const t=()=>{this.rafId=requestAnimationFrame(t),this.controls.update(),this.renderer.render(this.scene,this.camera)};t()}initConstellations(){const t=sn.reduce((r,a)=>r+a.stars.length,0),e=new $t;this.constStarAttr=new fe(new Float32Array(t*3),3),e.setAttribute("position",this.constStarAttr),this.constellationGroup.add(new dr(e,new _s({color:16777130,size:.07,transparent:!0,opacity:.8})));const n=sn.reduce((r,a)=>r+a.lines.length*2,0),s=new $t;this.constLineAttr=new fe(new Float32Array(n*3),3),s.setAttribute("position",this.constLineAttr),this.constellationGroup.add(new gs(s,new en({color:8939059,transparent:!0,opacity:.5})));for(const r of sn){const a=this.makeConstLabel(Dn()==="en"?r.nameEn:r.nameJa);this.constellationGroup.add(a),this.constLabels.push(a)}}makeConstLabel(t){const e=document.createElement("canvas");e.width=160,e.height=40;const n=e.getContext("2d");n.font="bold 18px Arial",n.textAlign="center",n.textBaseline="middle",n.fillStyle="#ccaa55",n.fillText(t,80,20);const s=new Nn(new Un({map:new He(e),transparent:!0,opacity:.85}));return s.scale.set(1.2,.3,.3),s}updateConstellations(t,e,n){if(!this.constStarAttr||!this.constLineAttr)return;const s=[];let r=0;for(const o of sn){const l=[];for(const[c,h]of o.stars){const{altRad:u,azRad:d}=pr(c,h,t,e,n),[m,v,M]=Fn(d,u,Se);this.constStarAttr.setXYZ(r++,m,v,M),l.push([m,v,M])}s.push(l)}this.constStarAttr.needsUpdate=!0;let a=0;for(let o=0;o<sn.length;o++){const l=s[o];for(const[c,h]of sn[o].lines)this.constLineAttr.setXYZ(a++,l[c][0],l[c][1],l[c][2]),this.constLineAttr.setXYZ(a++,l[h][0],l[h][1],l[h][2])}this.constLineAttr.needsUpdate=!0;for(let o=0;o<sn.length;o++){const l=s[o];let c=0,h=0,u=0;for(const[m,v,M]of l)c+=m,h+=v,u+=M;c/=l.length,h/=l.length,u/=l.length;const d=Math.sqrt(c*c+h*h+u*u);if(d>.01){const m=(Se+.25)/d;this.constLabels[o].position.set(c*m,h*m+.15,u*m)}}}setConstellationsVisible(t){this.constellationGroup.visible=t}initFamous(){const t=rn.reduce((r,a)=>r+a.stars.length,0),e=new $t;this.famousStarAttr=new fe(new Float32Array(t*3),3),e.setAttribute("position",this.famousStarAttr),this.famousGroup.add(new dr(e,new _s({color:8969727,size:.1})));const n=rn.reduce((r,a)=>r+a.lines.length*2,0),s=new $t;this.famousLineAttr=new fe(new Float32Array(n*3),3),s.setAttribute("position",this.famousLineAttr),this.famousGroup.add(new gs(s,new en({color:4495820,transparent:!0,opacity:.6})));for(const r of rn){const a=document.createElement("canvas");a.width=180,a.height=44;const o=a.getContext("2d");o.font="bold 20px Arial",o.textAlign="center",o.textBaseline="middle";const l=Dn()==="en"?r.nameEn:r.nameJa;o.fillStyle=r.nameEn==="Polaris ★"?"#ffffff":"#88ddff",o.fillText(l,90,22);const c=new Nn(new Un({map:new He(a),transparent:!0}));c.scale.set(1.4,.35,.35),this.famousGroup.add(c),this.famousLabels.push(c)}}updateFamous(t,e,n){if(!this.famousStarAttr||!this.famousLineAttr)return;const s=[];let r=0;for(const o of rn){const l=[];for(const[c,h]of o.stars){const{altRad:u,azRad:d}=pr(c,h,t,e,n),[m,v,M]=Fn(d,u,Se);this.famousStarAttr.setXYZ(r++,m,v,M),l.push([m,v,M])}s.push(l)}this.famousStarAttr.needsUpdate=!0;let a=0;for(let o=0;o<rn.length;o++){const l=s[o];for(const[c,h]of rn[o].lines)this.famousLineAttr.setXYZ(a++,l[c][0],l[c][1],l[c][2]),this.famousLineAttr.setXYZ(a++,l[h][0],l[h][1],l[h][2])}this.famousLineAttr.needsUpdate=!0;for(let o=0;o<rn.length;o++){const l=s[o];let c=0,h=0,u=0;for(const[m,v,M]of l)c+=m,h+=v,u+=M;c/=l.length,h/=l.length,u/=l.length;const d=Math.sqrt(c*c+h*h+u*u);if(d>.01){const m=(Se+.28)/d;this.famousLabels[o].position.set(c*m,h*m+.15,u*m)}}}setFamousVisible(t){this.famousGroup.visible=t}initTriangles(){for(const t of as){const e="#"+t.colorHex.toString(16).padStart(6,"0"),n=new $t,s=new fe(new Float32Array(9),3);n.setAttribute("position",s),this.triangleGroup.add(new dr(n,new _s({color:t.colorHex,size:.15})));const r=new $t,a=new fe(new Float32Array(18),3);r.setAttribute("position",a),this.triangleGroup.add(new gs(r,new en({color:t.colorHex,transparent:!0,opacity:.65})));const o=t.stars.map(u=>{const d=document.createElement("canvas");d.width=130,d.height=36;const m=d.getContext("2d");m.font="bold 17px Arial",m.textAlign="center",m.textBaseline="middle",m.fillStyle=e,m.fillText(Dn()==="en"?u.nameEn:u.nameJa,65,18);const v=new Nn(new Un({map:new He(d),transparent:!0}));return v.scale.set(.95,.27,.27),this.triangleGroup.add(v),v}),l=document.createElement("canvas");l.width=220,l.height=44;const c=l.getContext("2d");c.font="bold 18px Arial",c.textAlign="center",c.textBaseline="middle",c.fillStyle=e,c.fillText(Dn()==="en"?t.nameEn:t.nameJa,110,22);const h=new Nn(new Un({map:new He(l),transparent:!0}));h.scale.set(1.5,.3,.3),this.triangleGroup.add(h),this.triangleData.push({starAttr:s,lineAttr:a,starLabels:o,nameLabel:h})}}updateTriangles(t,e,n){for(let s=0;s<as.length;s++){const r=as[s],a=this.triangleData[s],o=[];for(let u=0;u<3;u++){const d=r.stars[u],{altRad:m,azRad:v}=pr(d.raDeg,d.decDeg,t,e,n),[M,p,f]=Fn(v,m,Se);o.push([M,p,f]),a.starAttr.setXYZ(u,M,p,f),a.starLabels[u].position.set(M*1.04,p+.16,f*1.04)}a.starAttr.needsUpdate=!0;for(let u=0;u<3;u++){const d=o[u],m=o[(u+1)%3];a.lineAttr.setXYZ(u*2,d[0],d[1],d[2]),a.lineAttr.setXYZ(u*2+1,m[0],m[1],m[2])}a.lineAttr.needsUpdate=!0;const l=(o[0][0]+o[1][0]+o[2][0])/3,c=(o[0][1]+o[1][1]+o[2][1])/3,h=(o[0][2]+o[1][2]+o[2][2])/3;a.nameLabel.position.set(l,c+.35,h)}}setTrianglesVisible(t){this.triangleGroup.visible=t}rewriteSprite(t,e,n,s,r,a){var h;const o=document.createElement("canvas");o.width=s,o.height=r;const l=o.getContext("2d");l.font=`bold ${a}px Arial`,l.textAlign="center",l.textBaseline="middle",l.fillStyle=n,l.fillText(e,s/2,r/2);const c=t.material;(h=c.map)==null||h.dispose(),c.map=new He(o),c.needsUpdate=!0}refreshTextLabels(){const t=Dn()==="en";for(const{sprite:e,dirKey:n,isNorth:s}of this.cardinalSprites){const r={"dir-north":["北(N)","N"],"dir-south":["南(S)","S"],"dir-east":["東(E)","E"],"dir-west":["西(W)","W"]},a=t?r[n][1]:r[n][0];this.rewriteSprite(e,a,s?"#ff7777":"#66cc77",128,64,36)}for(let e=0;e<sn.length;e++){const n=sn[e];this.rewriteSprite(this.constLabels[e],t?n.nameEn:n.nameJa,"#ccaa55",160,40,18)}for(let e=0;e<rn.length;e++){const n=rn[e],s=n.nameEn==="Polaris ★"?"#ffffff":"#88ddff";this.rewriteSprite(this.famousLabels[e],t?n.nameEn:n.nameJa,s,180,44,20)}for(let e=0;e<as.length;e++){const n=as[e],s="#"+n.colorHex.toString(16).padStart(6,"0"),r=this.triangleData[e];this.rewriteSprite(r.nameLabel,t?n.nameEn:n.nameJa,s,220,44,18);for(let a=0;a<n.stars.length;a++)this.rewriteSprite(r.starLabels[a],t?n.stars[a].nameEn:n.stars[a].nameJa,s,130,36,17)}}dispose(){this.rafId!==null&&cancelAnimationFrame(this.rafId),this.renderer.dispose()}};F(Ar,"FIT_MARGIN",1.15);let Oa=Ar;class M_{constructor(t){F(this,"ctx");F(this,"w");F(this,"h");F(this,"cx");F(this,"cy");F(this,"r");this.ctx=t.getContext("2d"),this.w=t.width,this.h=t.height,this.cx=this.w/2,this.cy=this.h/2,this.r=Math.min(this.w,this.h)/2-28}draw(t,e=0){const{ctx:n,cx:s,cy:r,r:a}=this;n.clearRect(0,0,this.w,this.h),n.fillStyle="#05051a",n.fillRect(0,0,this.w,this.h);for(const l of[.25,.5,.75])n.beginPath(),n.arc(s,r,a*l,0,Math.PI*2),n.strokeStyle="#1a1a3a",n.lineWidth=.8,n.stroke();n.beginPath(),n.arc(s,r,a,0,Math.PI*2),n.strokeStyle="#33aa55",n.lineWidth=1.5,n.stroke();for(let l=0;l<360;l+=10){const c=(l-90)*Math.PI/180,h=l%30===0?9:4;n.beginPath(),n.moveTo(s+Math.cos(c)*(a-h),r+Math.sin(c)*(a-h)),n.lineTo(s+Math.cos(c)*a,r+Math.sin(c)*a),n.strokeStyle="#334455",n.lineWidth=1,n.stroke()}n.beginPath(),n.moveTo(s-a,r),n.lineTo(s+a,r),n.moveTo(s,r-a),n.lineTo(s,r+a),n.strokeStyle="#1a2a3a",n.lineWidth=.5,n.stroke();const o=[{label:"北(N)",deg:0,color:"#ff7777"},{label:"東(E)",deg:90,color:"#66cc77"},{label:"南(S)",deg:180,color:"#66cc77"},{label:"西(W)",deg:270,color:"#66cc77"}];n.font="bold 11px Arial",n.textAlign="center",n.textBaseline="middle";for(const{label:l,deg:c,color:h}of o){const u=(c-e-90)*Math.PI/180;n.fillStyle=h,n.fillText(l,s+Math.cos(u)*(a+16),r+Math.sin(u)*(a+16))}this.drawBody(t.sun.azimuthDeg-e,t.sun.altitudeDeg,"#ffee44","☀"),this.drawBody(t.moon.azimuthDeg-e,t.moon.altitudeDeg,"#aaaadd","☽"),n.font="10px Arial",n.textAlign="left",n.globalAlpha=.8,n.fillStyle="#ffee44",n.fillText("● 太陽",6,this.h-20),n.fillStyle="#aaaadd",n.fillText("● 月",6,this.h-8),n.fillStyle="#556677",n.textAlign="right",n.fillText("外縁=地平線 中心=天頂",this.w-6,this.h-8),n.globalAlpha=1}drawBody(t,e,n,s){const{ctx:r,cx:a,cy:o,r:l}=this,c=(t-90)*Math.PI/180,h=l*(1-e/90),u=Math.min(h,l*1.25),d=a+Math.cos(c)*u,m=o+Math.sin(c)*u,v=e<0;r.beginPath(),r.moveTo(a,o),r.lineTo(d,m),r.strokeStyle=n,r.lineWidth=.8,r.globalAlpha=v?.2:.4,r.stroke(),r.globalAlpha=v?.35:1,r.beginPath(),r.arc(d,m,9,0,Math.PI*2),r.fillStyle=n,r.fill(),r.globalAlpha=v?.5:1,r.font="10px Arial",r.fillStyle="#111",r.textAlign="center",r.textBaseline="middle",r.fillText(s,d,m),r.globalAlpha=1}}const Pi=9,cr=.04*6,ic=.1,sc=.3;class y_{constructor(t){F(this,"renderer");F(this,"scene");F(this,"camera");F(this,"sunMesh");F(this,"moonMesh");F(this,"sunLabel");F(this,"moonLabel");F(this,"constGroup");F(this,"rafId",null);F(this,"active",!1);F(this,"hasAbsolute",!1);F(this,"alpha",0);F(this,"beta",0);F(this,"gamma",0);F(this,"gyroReceived",!1);F(this,"manualMode",!1);F(this,"manualYaw",0);F(this,"manualPitch",0);F(this,"dragActive",!1);F(this,"lastX",0);F(this,"lastY",0);F(this,"modeEl",null);F(this,"dirSprites",[]);F(this,"onDown");F(this,"onMove");F(this,"onUp");F(this,"handleAbsolute",t=>{t.alpha===null&&t.beta===null&&t.gamma===null||(this.gyroReceived||(this.gyroReceived=!0,this.manualMode=!1,this.updateModeEl()),this.hasAbsolute=!0,this.alpha=t.alpha??0,this.beta=t.beta??0,this.gamma=t.gamma??0)});F(this,"handleOrientation",t=>{if(this.hasAbsolute)return;const e=t.webkitCompassHeading;t.alpha===null&&t.beta===null&&t.gamma===null&&e==null||(this.gyroReceived||(this.gyroReceived=!0,this.manualMode=!1,this.updateModeEl()),this.alpha=e!=null?(360-e)%360:t.alpha??0,this.beta=t.beta??0,this.gamma=t.gamma??0)});F(this,"loop",()=>{this.active&&(this.rafId=requestAnimationFrame(this.loop),this.manualMode?this.applyManual():this.applyGyro(),this.renderer.render(this.scene,this.camera))});this.renderer=new Wi({canvas:t,antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setClearColor(131599),this.scene=new Xi,this.camera=new Re(60,1,.1,100),this.camera.position.set(0,0,0),this.buildStars(),this.constGroup=new nn,this.scene.add(this.constGroup);const e=new Ce(cr,32,24);this.sunMesh=new Wt(e,new Me({color:16772676})),this.scene.add(this.sunMesh),this.sunLabel=this.makeLabel(Xt("label-sun"),"#ffee44"),this.scene.add(this.sunLabel);const n=new Ce(cr,32,24);this.moonMesh=new Wt(n,new Me({color:13423854})),this.scene.add(this.moonMesh),this.moonLabel=this.makeLabel(Xt("label-moon"),"#ccd4ee"),this.scene.add(this.moonLabel);const s=new Wt(new Ur(Pi,.012,8,128),new Me({color:3385941,transparent:!0,opacity:.6}));s.rotation.x=Math.PI/2,this.scene.add(s);const r=[{key:"dir-north",az:0},{key:"dir-south",az:180},{key:"dir-east",az:90},{key:"dir-west",az:270}];for(const a of r){const o=Xt(a.key),l=this.makeLabel(o,a.key==="dir-north"?"#ff7777":"#66cc77",24),c=a.az*Math.PI/180,h=Math.sin(c)*Pi*.98,u=-Math.cos(c)*Pi*.98;l.position.set(h,-.3,u),l.scale.set(1.6,.8,.8),this.scene.add(l),this.dirSprites.push({sprite:l,az:a.az})}this.onDown=a=>{this.dragActive=!0,this.lastX=a.clientX,this.lastY=a.clientY,a.target.setPointerCapture(a.pointerId)},this.onMove=a=>{if(!this.dragActive||!this.manualMode)return;const o=a.clientX-this.lastX,l=a.clientY-this.lastY;this.lastX=a.clientX,this.lastY=a.clientY,this.manualYaw=(this.manualYaw-o*sc+360)%360,this.manualPitch=Math.max(-85,Math.min(85,this.manualPitch-l*sc))},this.onUp=()=>{this.dragActive=!1}}buildStars(){}makeLabel(t,e,n=22){const s=document.createElement("canvas");s.width=256,s.height=64;const r=s.getContext("2d");r.font=`bold ${n}px Arial`,r.textAlign="center",r.textBaseline="middle",r.shadowColor="#000",r.shadowBlur=8,r.fillStyle=e,r.fillText(t,128,32);const a=new Nn(new Un({map:new He(s),transparent:!0}));return a.scale.set(1.6,.5,.5),a}async start(t){const e=DeviceOrientationEvent;if(typeof e.requestPermission=="function")try{if(await e.requestPermission()!=="granted")return alert("センサーの使用が許可されませんでした。"),!1}catch{return!1}return this.gyroReceived=!1,this.manualMode=!1,this.hasAbsolute=!1,this.manualYaw=0,this.manualPitch=0,window.addEventListener("deviceorientationabsolute",this.handleAbsolute,!0),window.addEventListener("deviceorientation",this.handleOrientation,!0),setTimeout(()=>{this.gyroReceived||(this.manualMode=!0,this.updateModeEl())},1500),t.addEventListener("pointerdown",this.onDown),t.addEventListener("pointermove",this.onMove),t.addEventListener("pointerup",this.onUp),t.addEventListener("pointercancel",this.onUp),this.modeEl=document.getElementById("skyview-mode"),this.active=!0,this.resize(t),window.addEventListener("resize",()=>this.resize(t)),this.loop(),!0}stop(){this.active=!1,this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null),window.removeEventListener("deviceorientationabsolute",this.handleAbsolute,!0),window.removeEventListener("deviceorientation",this.handleOrientation,!0);const t=this.renderer.domElement;t.removeEventListener("pointerdown",this.onDown),t.removeEventListener("pointermove",this.onMove),t.removeEventListener("pointerup",this.onUp),t.removeEventListener("pointercancel",this.onUp)}setData(t,e,n,s){const[r,a,o]=Fn(t.sun.azimuthRad,t.sun.altitudeRad,Pi);this.sunMesh.position.set(r,a,o),this.sunLabel.position.set(r,a+cr+ic,o);const l=this.sunMesh.material;l.opacity=t.sun.altitudeRad<0?.3:1,l.transparent=t.sun.altitudeRad<0;const[c,h,u]=Fn(t.moon.azimuthRad,t.moon.altitudeRad,Pi);this.moonMesh.position.set(c,h,u),this.moonLabel.position.set(c,h+cr+ic,u);const d=this.moonMesh.material;d.opacity=t.moon.altitudeRad<0?.3:1,d.transparent=t.moon.altitudeRad<0,e!==void 0&&n!==void 0&&s&&this.updateConstellations(e,n,s)}updateConstellations(t,e,n){this.constGroup.clear();const s=[...sn,...rn];for(const r of s){const a=[];for(const[c,h]of r.stars){const{altRad:u,azRad:d}=pr(c,h,t,e,n);a.push(Fn(d,u,Pi))}const o=new Float32Array(a.length*3);a.forEach(([c,h,u],d)=>{o[d*3]=c,o[d*3+1]=h,o[d*3+2]=u});const l=new $t;if(l.setAttribute("position",new fe(o,3)),this.constGroup.add(new dr(l,new _s({color:16777130,size:.09}))),r.lines.length>0){const c=[];for(const[h,u]of r.lines)h<a.length&&u<a.length&&c.push(...a[h],...a[u]);if(c.length>0){const h=new $t;h.setAttribute("position",new fe(new Float32Array(c),3)),this.constGroup.add(new gs(h,new en({color:8939059,transparent:!0,opacity:.5})))}}if(a.length>0){const c=a.reduce((m,v)=>m+v[0],0)/a.length,h=a.reduce((m,v)=>m+v[1],0)/a.length,u=a.reduce((m,v)=>m+v[2],0)/a.length,d=this.makeLabel(Dn()==="en"?r.nameEn:r.nameJa,"#aaddff",22);d.position.set(c,h+.4,u),d.scale.set(1.8,.56,.56),this.constGroup.add(d)}}}updateModeEl(){this.modeEl&&(this.modeEl.textContent=this.manualMode?Xt("skyview-manual"):Xt("skyview-gyro"))}refreshDirLabels(){var n;const t=["dir-north","dir-south","dir-east","dir-west"];for(let s=0;s<this.dirSprites.length;s++){const{sprite:r}=this.dirSprites[s],a=Xt(t[s]),o=s===0?"#ff7777":"#66cc77",l=document.createElement("canvas");l.width=256,l.height=64;const c=l.getContext("2d");c.font="bold 24px Arial",c.textAlign="center",c.textBaseline="middle",c.shadowColor="#000",c.shadowBlur=8,c.fillStyle=o,c.fillText(a,128,32);const h=r.material;(n=h.map)==null||n.dispose(),h.map=new He(l),h.needsUpdate=!0}const e=(s,r,a)=>{var h;const o=document.createElement("canvas");o.width=256,o.height=64;const l=o.getContext("2d");l.font="bold 22px Arial",l.textAlign="center",l.textBaseline="middle",l.shadowColor="#000",l.shadowBlur=8,l.fillStyle=a,l.fillText(r,128,32);const c=s.material;(h=c.map)==null||h.dispose(),c.map=new He(o),c.needsUpdate=!0};e(this.sunLabel,Xt("label-sun"),"#ffee44"),e(this.moonLabel,Xt("label-moon"),"#ccd4ee")}applyGyro(){const t=new ke(re.degToRad(this.beta),re.degToRad(this.alpha),re.degToRad(-this.gamma),"YXZ"),e=new Ue(-Math.sqrt(.5),0,0,Math.sqrt(.5));this.camera.quaternion.setFromEuler(t),this.camera.quaternion.multiply(e)}applyManual(){const t=new ke(re.degToRad(90-this.manualPitch),re.degToRad(this.manualYaw),0,"YXZ"),e=new Ue(-Math.sqrt(.5),0,0,Math.sqrt(.5));this.camera.quaternion.setFromEuler(t),this.camera.quaternion.multiply(e)}resize(t){const e=t.clientWidth,n=t.clientHeight;e===0||n===0||(this.renderer.setSize(e,n,!1),this.camera.aspect=e/n,this.camera.updateProjectionMatrix())}setFov(t){this.camera.fov=t,this.camera.updateProjectionMatrix()}}const Jc="/astro-player/assets/earth-texture-BPukPPk-.png",Qc="/astro-player/assets/moon-texture-CwUC8c1r.png",th="/astro-player/assets/mercury-texture-CTdinaWy.png",eh="/astro-player/assets/venus-texture-CRArJTa1.png",nh="/astro-player/assets/mars-texture-DPgRlEoH.png";class S_{constructor(t,e){F(this,"elapsedMs",0);F(this,"playing",!1);this.periodMs=t,this.realDurationMs=e}get fraction(){return this.periodMs===0?0:this.elapsedMs/this.periodMs}get elapsedMilliseconds(){return this.elapsedMs}get isPlaying(){return this.playing}setPeriod(t){this.periodMs=t}seekFraction(t){this.elapsedMs=Math.max(0,Math.min(1,t))*this.periodMs}seekMs(t){this.elapsedMs=Math.max(0,Math.min(this.periodMs,t))}play(){this.elapsedMs>=this.periodMs&&(this.elapsedMs=0),this.playing=!0}pause(){this.playing=!1}togglePlay(){this.playing?this.pause():this.play()}reset(){this.elapsedMs=0,this.playing=!1}tick(t){this.playing&&(this.elapsedMs+=t*1e3*(this.periodMs/this.realDurationMs),this.elapsedMs>=this.periodMs&&(this.elapsedMs=this.periodMs,this.playing=!1))}}function Yi(i,t){i.innerHTML=t}const E_=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill="currentColor" d="M8 5v14l11-7L8 5Z"/>
</svg>
`,b_=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill="currentColor" d="M6 5h4v14H6zM14 5h4v14h-4z"/>
</svg>
`,T_=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" d="M15 5l-7 7 7 7"/>
</svg>
`,A_=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" d="M18 5l-7 7 7 7 M12 5l-7 7 7 7"/>
</svg>
`,w_=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" d="M21 5l-7 7 7 7 M15 5l-7 7 7 7 M9 5l-7 7 7 7"/>
</svg>
`,R_=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
</svg>
`,C_=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" d="M6 5l7 7-7 7 M12 5l7 7-7 7"/>
</svg>
`,L_=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" d="M3 5l7 7-7 7 M9 5l7 7-7 7 M15 5l7 7-7 7"/>
</svg>
`,Sa=24*60*60*1e3,rc={day:Sa,month:30*Sa,year:365*Sa},P_=24e3,D_={hour:60*60*1e3,day:24*60*60*1e3,month:30*24*60*60*1e3},ac=1e3;function eo(i,t,e={}){const n={day:document.getElementById(`${i}-mode-day`),month:document.getElementById(`${i}-mode-month`),year:document.getElementById(`${i}-mode-year`)},s=document.getElementById(`${i}-now-btn`),r=document.getElementById(`${i}-play-btn`),a=document.getElementById(`${i}-seekbar`),o=document.getElementById(`${i}-sim-date-label`),l=e.availableModes??["day","month","year"];for(const _ of["day","month","year"])n[_].hidden=!l.includes(_);let c=e.defaultMode??"day",h=new Date;const u=new S_(rc[c],P_);function d(){return new Date(h.getTime()+u.elapsedMilliseconds)}function m(_){const C=I=>String(I).padStart(2,"0");return`${_.getFullYear()}-${C(_.getMonth()+1)}-${C(_.getDate())} ${C(_.getHours())}:${C(_.getMinutes())}`}function v(){t(d()),p()}let M=null;function p(){for(const I of["day","month","year"])n[I].classList.toggle("active",I===c);u.isPlaying!==M&&(M=u.isPlaying,Yi(r,u.isPlaying?b_:E_)),a.value=String(Math.round(u.fraction*ac));const _=m(d());o.textContent=_;const C=_===m(new Date);s.classList.toggle("now-btn-active",!C)}function f(){h=new Date,u.setPeriod(rc[c]),u.reset(),v()}function R(_){c=_,f()}function x(_){u.pause(),h=new Date(h.getTime()+_),u.reset(),v()}const A=[];function D(_,C,I){_.addEventListener(C,I),A.push(()=>_.removeEventListener(C,I))}for(const _ of["day","month","year"])D(n[_],"click",()=>R(_));D(s,"click",()=>f()),D(r,"click",()=>{u.togglePlay(),p()}),D(a,"input",()=>{u.pause(),u.seekFraction(parseInt(a.value,10)/ac),v()});const L={hour:[T_,R_],day:[A_,C_],month:[w_,L_]};for(const _ of document.querySelectorAll(`#${i}-step-back-b .step-btn, #${i}-step-fwd-b .step-btn`)){const C=_.dataset.unit,I=Number(_.dataset.dir),[P,B]=L[C];Yi(_,I<0?P:B),D(_,"click",()=>x(D_[C]*I))}v();let w=null,O=null;function E(_){w=requestAnimationFrame(E);const C=O===null?0:(_-O)/1e3;O=_,u.isPlaying&&(u.tick(C),v())}return w=requestAnimationFrame(E),{dispose(){w!==null&&cancelAnimationFrame(w);for(const _ of A)_();A.length=0}}}const ih=24*60*60*1e3;function I_(i){const t=new Date(i.getFullYear(),0,1,0,0,0,0);return(i.getTime()-t.getTime())/ih/365.25%1}const U_=Date.UTC(2e3,0,1);function sh(i,t){return(i.getTime()-U_)/ih/t*Math.PI*2}function N_(i){const e=((12-(i.getUTCHours()+i.getUTCMinutes()/60+i.getUTCSeconds()/3600))*15+180)%360-180;return re.degToRad(e<-180?e+360:e)}function F_(i){return rh(0,i)}function rh(i,t){return new T(Math.cos(t)*Math.cos(i),Math.sin(i),-Math.sin(t)*Math.cos(i))}const qe=1737,O_=6371,B_=696e3,z_=384400,H_=1496e5,os=qe/qe,Di=O_/qe,Ea=B_/qe,ri=z_/qe,qi=H_/qe,mr=["mercury","venus","mars"],k_=2439.7,G_=6051.8,V_=3389.5,W_=579e5,X_=1082e5,Y_=2279e5,oc=k_/qe,lc=G_/qe,cc=V_/qe,ah=W_/qe,oh=X_/qe,lh=Y_/qe,Ba={mercury:ah,venus:oh,mars:lh},q_={mercury:87.969,venus:224.701,mars:686.98},K_={mercury:58.646,venus:-243.025,mars:1.025957},vn=10,j_=3*vn,Z_=8*vn,no=2*vn+j_,io=2*vn+Z_,za={mercury:40,venus:70,mars:170},ba=new T(0,0,0),ze=new T(qi,0,0),fs=new T(qi,0,ri),$_=new T(ah,0,0),J_=new T(oh,0,0),Q_=new T(lh,0,0),Ii={mercury:$_,venus:J_,mars:Q_},ls=new T(0,1,0).applyAxisAngle(new T(0,0,1),re.degToRad(-23.44)),t0=5.14,ch=new Ue().setFromAxisAngle(new T(1,0,0),re.degToRad(t0)),e0=new T(0,1,0);function hc(i,t){const e=t?io:qi,n=t?no:ri,s=I_(i)*Math.PI*2;ze.set(Math.cos(s)*e,0,-Math.sin(s)*e);const r=ds.getMoonIllumination(i).phase,o=s+Math.PI+r*Math.PI*2,l=new T(Math.cos(o)*n,0,-Math.sin(o)*n).applyQuaternion(ch);fs.set(ze.x+l.x,l.y,ze.z+l.z);for(const c of mr){const h=t?za[c]:Ba[c],u=sh(i,q_[c]);Ii[c].set(Math.cos(u)*h,0,-Math.sin(u)*h)}return s}const uc=2,n0=.6,i0=.7,dc=["sun","mercury","venus","earth","mars","moon"],s0={sun:qi,earth:ri},r0={sun:io,earth:no},zt=class zt{constructor(t,e){F(this,"renderer");F(this,"scene");F(this,"camera");F(this,"controls");F(this,"rafId",null);F(this,"raycaster",new p_);F(this,"sunMesh");F(this,"earthMesh");F(this,"moonMesh");F(this,"sunLabel");F(this,"earthLabel");F(this,"moonLabel");F(this,"sunLabelFrac",{halfWFrac:1,halfHFrac:1});F(this,"earthLabelFrac",{halfWFrac:1,halfHFrac:1});F(this,"moonLabelFrac",{halfWFrac:1,halfHFrac:1});F(this,"sunLeader");F(this,"earthLeader");F(this,"moonLeader");F(this,"earthOrbitLine");F(this,"moonOrbitLine");F(this,"debugLabelSizeBoxes",[]);F(this,"debugHudEl",document.getElementById("scale-debug-hud"));F(this,"simPlaybackController");F(this,"gizmoScene");F(this,"gizmoCamera");F(this,"gizmoRenderer",null);F(this,"gizmoCanvas",document.getElementById("scale-angle-gizmo"));F(this,"onKeyDown");F(this,"onPointerDown");F(this,"onPointerUp");F(this,"onPointerCancel");F(this,"cleanupFns",[]);F(this,"showInnerPlanets",!1);F(this,"tapCandidate",null);F(this,"activePointerCount",0);F(this,"targetBody","sun");F(this,"deformMode",!1);F(this,"locationMarker");F(this,"viewBtn",document.getElementById("scale-view-btn"));F(this,"viewDialog",document.getElementById("scale-view-dialog"));F(this,"deformRealBtn",document.getElementById("scale-deform-real-btn"));F(this,"deformDeformBtn",document.getElementById("scale-deform-deform-btn"));F(this,"lastTrackedPos",null);F(this,"meshByKey");F(this,"posByKey");F(this,"radiusByKey");F(this,"labelMaps");F(this,"outlineByKey");F(this,"labelByKey");F(this,"labelFracByKey");F(this,"leaderByKey");F(this,"innerPlanetMeshByKey",{});F(this,"innerPlanetOrbitLineByKey",{});F(this,"currentSimDateValue",new Date);F(this,"earthTiltQuaternion",new Ue);F(this,"earthAxisLine");F(this,"earthAxisRef2",new T().crossVectors(ls,zt.EARTH_AXIS_REF1).normalize());this.deformMode=e.deformDefault,this.targetBody=e.defaultTarget,this.showInnerPlanets=e.showInnerPlanets??!1,hc(this.currentSimDate(),this.deformMode),this.renderer=new Wi({canvas:t,antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setClearColor(328986),this.scene=new Xi,this.camera=new Re(50,1,.5,5e5);const n=new T(ri*2,ri*1.2,ri*2);if(this.camera.position.copy(ze).add(n),this.camera.lookAt(ze),this.gizmoScene=new Xi,this.gizmoScene.add(new m_(1)),this.gizmoCamera=new Re(40,1,.1,10),this.gizmoCanvas){const x=this.gizmoCanvas.width||96;this.gizmoRenderer=new Wi({canvas:this.gizmoCanvas,antialias:!0,alpha:!0}),this.gizmoRenderer.setPixelRatio(window.devicePixelRatio),this.gizmoRenderer.setSize(x,x,!1),this.gizmoCamera.aspect=1,this.gizmoCamera.updateProjectionMatrix()}this.controls=new to(this.camera,t),this.controls.target.copy(ze),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.minDistance=os*3,this.controls.maxDistance=qi*1.5,this.controls.enablePan=!1,this.sunMesh=new Wt(new Ce(Ea,32,24),new Me({color:16772676})),this.sunMesh.position.copy(ba),this.sunMesh.userData.radius=Ea,this.scene.add(this.sunMesh),this.earthMesh=new Wt(new Ce(Di,32,24),new Ni({map:new fr().load(Jc)})),this.earthMesh.position.copy(ze),this.earthMesh.userData.radius=Di,this.earthTiltQuaternion.setFromUnitVectors(new T(0,1,0),ls),this.earthMesh.quaternion.copy(this.earthTiltQuaternion),this.scene.add(this.earthMesh),this.locationMarker=new Wt(new Za(n0,uc,12),new Ni({color:16726843,emissive:16726843,emissiveIntensity:i0})),this.earthMesh.add(this.locationMarker);const s=Di*1.2,r=new $t().setFromPoints([ls.clone().multiplyScalar(-s),ls.clone().multiplyScalar(s)]);this.earthAxisLine=new yn(r,new en({color:11171703,transparent:!0,opacity:.4})),this.earthAxisLine.position.copy(ze),this.scene.add(this.earthAxisLine),this.earthOrbitLine=this.makeOrbitLine(6981304),this.moonOrbitLine=this.makeOrbitLine(9476264),this.moonOrbitLine.quaternion.copy(ch),this.scene.add(this.earthOrbitLine,this.moonOrbitLine),this.moonMesh=new Wt(new Ce(os,16,12),new Ni({map:new fr().load(Qc)})),this.moonMesh.position.copy(fs),this.moonMesh.userData.radius=os,this.scene.add(this.moonMesh);const a={mercury:{radius:oc,textureUrl:th},venus:{radius:lc,textureUrl:eh},mars:{radius:cc,textureUrl:nh}};for(const x of mr){const{radius:A,textureUrl:D}=a[x],L=new Wt(new Ce(A,24,18),new Ni({map:new fr().load(D)}));L.position.copy(Ii[x]),L.userData.radius=A,L.visible=this.showInnerPlanets,this.scene.add(L),this.innerPlanetMeshByKey[x]=L;const w=this.makeOrbitLine(6981304);w.scale.setScalar(this.deformMode?za[x]:Ba[x]),w.visible=this.showInnerPlanets,this.scene.add(w),this.innerPlanetOrbitLineByKey[x]=w}const o=new d_(16777215,1.6,0,0);o.position.copy(ba),this.scene.add(o),this.scene.add(new Qa(16777215,.12));const l=this.makeLabel(Xt("label-sun"),"#ffee44");this.sunLabel=l.sprite,this.sunLabelFrac={halfWFrac:l.halfWFrac,halfHFrac:l.halfHFrac},this.scene.add(this.sunLabel);const c=this.makeLabel(Xt("label-earth"),"#8fc0ff");this.earthLabel=c.sprite,this.earthLabelFrac={halfWFrac:c.halfWFrac,halfHFrac:c.halfHFrac},this.scene.add(this.earthLabel);const h=this.makeLabel(Xt("label-moon"),"#ccd4ee");this.moonLabel=h.sprite,this.moonLabelFrac={halfWFrac:h.halfWFrac,halfHFrac:h.halfHFrac},this.scene.add(this.moonLabel);const u={mercury:"#b8afa8",venus:"#e8d4a0",mars:"#e08050"},d={mercury:"label-mercury",venus:"label-venus",mars:"label-mars"},m={},v={},M={},p={},f={};for(const x of mr){const A=this.makeLabel(Xt(d[x]),u[x]);A.sprite.visible=this.showInnerPlanets,this.scene.add(A.sprite),m[x]=A.sprite,v[x]={halfWFrac:A.halfWFrac,halfHFrac:A.halfHFrac},M[x]={normal:A.normalMap,selected:A.selectedMap};const D=this.makeLeaderLine("#8899bb");D.visible=this.showInnerPlanets,this.scene.add(D),p[x]=D,f[x]=this.makeOutlineHull(this.innerPlanetMeshByKey[x])}this.meshByKey={sun:this.sunMesh,earth:this.earthMesh,moon:this.moonMesh,mercury:this.innerPlanetMeshByKey.mercury,venus:this.innerPlanetMeshByKey.venus,mars:this.innerPlanetMeshByKey.mars},this.posByKey={sun:ba,earth:ze,moon:fs,mercury:Ii.mercury,venus:Ii.venus,mars:Ii.mars},this.radiusByKey={sun:Ea,earth:Di,moon:os,mercury:oc,venus:lc,mars:cc},this.applyDeformVisuals(),this.outlineByKey={sun:this.makeOutlineHull(this.sunMesh),earth:this.makeOutlineHull(this.earthMesh),moon:this.makeOutlineHull(this.moonMesh),mercury:f.mercury,venus:f.venus,mars:f.mars},this.labelMaps={sun:{normal:l.normalMap,selected:l.selectedMap},earth:{normal:c.normalMap,selected:c.selectedMap},moon:{normal:h.normalMap,selected:h.selectedMap},mercury:M.mercury,venus:M.venus,mars:M.mars},this.sunLeader=this.makeLeaderLine("#8899bb"),this.earthLeader=this.makeLeaderLine("#8899bb"),this.moonLeader=this.makeLeaderLine("#8899bb"),this.scene.add(this.sunLeader,this.earthLeader,this.moonLeader),this.labelByKey={sun:this.sunLabel,earth:this.earthLabel,moon:this.moonLabel,mercury:m.mercury,venus:m.venus,mars:m.mars},this.labelFracByKey={sun:this.sunLabelFrac,earth:this.earthLabelFrac,moon:this.moonLabelFrac,mercury:v.mercury,venus:v.venus,mars:v.mars},this.leaderByKey={sun:this.sunLeader,earth:this.earthLeader,moon:this.moonLeader,mercury:p.mercury,venus:p.venus,mars:p.mars},this.onPointerDown=x=>{this.activePointerCount++,this.tapCandidate=this.activePointerCount===1?{pointerId:x.pointerId,x:x.clientX,y:x.clientY}:null},this.onPointerUp=x=>{this.activePointerCount=Math.max(0,this.activePointerCount-1);const A=this.tapCandidate;!A||A.pointerId!==x.pointerId||(this.tapCandidate=null,Math.hypot(x.clientX-A.x,x.clientY-A.y)>zt.TAP_MOVE_THRESHOLD_PX)||this.handleTap(x.clientX,x.clientY)},this.onPointerCancel=x=>{var A;this.activePointerCount=Math.max(0,this.activePointerCount-1),((A=this.tapCandidate)==null?void 0:A.pointerId)===x.pointerId&&(this.tapCandidate=null)},t.addEventListener("pointerdown",this.onPointerDown),t.addEventListener("pointerup",this.onPointerUp),t.addEventListener("pointercancel",this.onPointerCancel),this.onKeyDown=x=>{this.viewDialog.open||(x.key==="Home"&&this.frameAll(),(x.key==="Enter"||x.key==="f"||x.key==="F")&&this.focusOnTarget())},window.addEventListener("keydown",this.onKeyDown),this.on(this.viewBtn,"click",()=>this.viewDialog.showModal()),this.on(document.getElementById("scale-view-dialog-close"),"click",()=>this.viewDialog.close()),this.on(this.viewDialog,"click",x=>{x.target===this.viewDialog&&this.viewDialog.close()});for(const x of this.viewDialog.querySelectorAll("button[data-body]"))x.hidden=x.hasAttribute("data-inner-planet")&&!this.showInnerPlanets,this.on(x,"click",()=>{this.selectView(x.dataset.body,x.dataset.view),this.viewDialog.close()});this.on(this.deformRealBtn,"click",()=>this.setDeformMode(!1)),this.on(this.deformDeformBtn,"click",()=>this.setDeformMode(!0)),this.updateDeformButtonUI(),this.simPlaybackController=eo("scale",x=>{this.currentSimDateValue=x},{defaultMode:e.defaultMode,availableModes:e.availableModes}),this.handleResize(),this.focusOnSystemView();const R=new ResizeObserver(()=>this.handleResize());R.observe(t.parentElement),this.cleanupFns.push(()=>R.disconnect()),this.startLoop()}on(t,e,n){t.addEventListener(e,n),this.cleanupFns.push(()=>t.removeEventListener(e,n))}moveCameraTo(t,e){const n=this.camera.position.clone().sub(this.controls.target);n.lengthSq()<1e-9&&n.set(1,.6,1),n.normalize(),e>this.controls.maxDistance&&(this.controls.maxDistance=e),this.controls.target.copy(t),this.camera.position.copy(t).addScaledVector(n,e),this.camera.lookAt(t),console.log("[ScaleModel3D] moveCameraTo",{target:t.toArray().map(s=>+s.toFixed(2)),cameraPos:this.camera.position.toArray().map(s=>+s.toFixed(2)),distance:+e.toFixed(2),dir:n.toArray().map(s=>+s.toFixed(4)),fovVertical:this.camera.fov,aspect:+this.camera.aspect.toFixed(4)})}frameDistance(t,e){const n=re.degToRad(this.camera.fov),s=2*Math.atan(Math.tan(n/2)*this.camera.aspect),r=t/Math.sin(n/2),a=t/Math.sin(s/2),o=Math.max(r,a)*e;return console.log("[ScaleModel3D] frameDistance",{boundingRadius:+t.toFixed(3),margin:e,aspect:+this.camera.aspect.toFixed(4),distV:+r.toFixed(2),distH:+a.toFixed(2),distance:+o.toFixed(2)}),o}frameDistanceForBodies(t,e,n){const s=this.camera.position.clone().sub(this.controls.target);s.lengthSq()<1e-9&&s.set(1,.6,1),s.normalize();const r=new T(1,0,0).applyQuaternion(this.camera.quaternion),a=new T(0,1,0).applyQuaternion(this.camera.quaternion),o=new T,l=re.degToRad(this.camera.fov),c=2*Math.atan(Math.tan(l/2)*this.camera.aspect),h=Math.tan(l/2),u=Math.tan(c/2);let d=0;const m=[];for(const M of t){o.copy(M.pos).sub(e);const p=o.dot(s),f=Math.abs(o.dot(r))+M.radius,R=Math.abs(o.dot(a))+M.radius,x=p+Math.max(f/u,R/h);d=Math.max(d,x),m.push({pos:M.pos.toArray().map(A=>+A.toFixed(2)),radius:+M.radius.toFixed(2),nearerByThisMuch:+p.toFixed(2),lateralW:+f.toFixed(2),lateralH:+R.toFixed(2),need:+x.toFixed(2)})}const v=Math.max(d,0)*n;return console.log("[ScaleModel3D] frameDistanceForBodies",{center:e.toArray().map(M=>+M.toFixed(2)),dir:s.toArray().map(M=>+M.toFixed(4)),aspect:+this.camera.aspect.toFixed(4),margin:n,required:+d.toFixed(2),distance:+v.toFixed(2),bodies:m}),v}frameDistanceForOrbit(t,e){const n=this.camera.position.clone().sub(this.controls.target);n.lengthSq()<1e-9&&n.set(1,.6,1),n.normalize();const s=new T(1,0,0).applyQuaternion(this.camera.quaternion),r=new T(0,1,0).applyQuaternion(this.camera.quaternion),a=re.degToRad(this.camera.fov),o=2*Math.atan(Math.tan(a/2)*this.camera.aspect),l=Math.tan(a/2),c=Math.tan(o/2),h=M=>Math.hypot(M.x,M.z),u=s.clone().divideScalar(c),d=r.clone().divideScalar(l),m=t*Math.max(h(n.clone().add(u)),h(n.clone().sub(u)),h(n.clone().add(d)),h(n.clone().sub(d))),v=Math.max(m,0)*e;return console.log("[ScaleModel3D] frameDistanceForOrbit",{orbitRadius:+t.toFixed(2),dir:n.toArray().map(M=>+M.toFixed(4)),margin:e,required:+m.toFixed(2),distance:+v.toFixed(2)}),v}focusOn(t,e){const n=Math.max(this.frameDistance(e,1.4),this.controls.minDistance);this.moveCameraTo(t,n)}frameAll(){const t=this.focusableBodies(),e=new T;for(const n of t)e.add(n.pos);e.divideScalar(t.length),this.moveCameraTo(e,this.frameDistanceForBodies(t,e,1.15))}currentSimDate(){return this.currentSimDateValue}angleAroundEarthAxis(t){return Math.atan2(t.dot(this.earthAxisRef2),t.dot(zt.EARTH_AXIS_REF1))}syncSceneToOrbitalState(t){this.earthMesh.position.copy(ze),this.moonMesh.position.copy(fs),this.earthAxisLine.position.copy(ze),this.earthOrbitLine.scale.setScalar(this.deformMode?io:qi),this.moonOrbitLine.position.copy(ze),this.moonOrbitLine.scale.setScalar(this.deformMode?no:ri);for(const v of mr)this.innerPlanetMeshByKey[v].position.copy(Ii[v]),this.innerPlanetMeshByKey[v].rotation.y=sh(this.currentSimDate(),K_[v]),this.innerPlanetOrbitLineByKey[v].scale.setScalar(this.deformMode?za[v]:Ba[v]);const e=new T().subVectors(ze,fs),n=Math.atan2(-e.z,e.x);this.moonMesh.quaternion.setFromAxisAngle(e0,n);const s=this.currentSimDate(),r=N_(s),o=F_(r).applyQuaternion(this.earthTiltQuaternion),l=this.angleAroundEarthAxis(o),c=t+Math.PI,h=new T(Math.cos(c),0,-Math.sin(c)),d=this.angleAroundEarthAxis(h)-l,m=new Ue().setFromAxisAngle(ls,d);this.earthMesh.quaternion.copy(m).multiply(this.earthTiltQuaternion)}handleTap(t,e){const n=this.hitTestBody(t,e);!n||n===this.targetBody||(this.targetBody=n,this.lastTrackedPos=null)}hitTestBody(t,e){const n=this.renderer.domElement.getBoundingClientRect(),s=new vt((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1);this.raycaster.setFromCamera(s,this.camera);const r=this.activeBodyKeys(),a=this.raycaster.intersectObjects(r.map(o=>this.meshByKey[o]),!1);if(a.length>0){const o=a[0].object;for(const l of r)if(this.meshByKey[l]===o)return l}return this.hitTestLabel(t,e,n)}hitTestLabel(t,e,n){const s=Math.max(this.renderer.domElement.clientHeight,1),r=zt.LABEL_HEIGHT_FRACTION/2*s*zt.LABEL_HIT_PADDING,a=r*4;let o=null;for(const l of this.activeBodyKeys()){const h=this.labelByKey[l].position.clone().project(this.camera);if(h.z<-1||h.z>1)continue;const u=n.left+(h.x*.5+.5)*n.width,d=n.top+(-h.y*.5+.5)*n.height;Math.abs(t-u)>a||Math.abs(e-d)>r||(!o||h.z<o.z)&&(o={key:l,z:h.z})}return(o==null?void 0:o.key)??null}selectView(t,e){this.targetBody=t,this.lastTrackedPos=null,e==="focus"?this.focusOnTarget():this.focusOnSystemView()}focusOnTarget(){this.focusOn(this.posByKey[this.targetBody],this.displayRadius(this.targetBody))}displayRadius(t){return this.deformMode?vn:this.radiusByKey[t]}activeBodyKeys(){return this.showInnerPlanets?dc:["sun","earth","moon"]}focusableBodies(){return this.activeBodyKeys().map(t=>({pos:this.posByKey[t],radius:this.displayRadius(t)}))}setDeformMode(t){t!==this.deformMode&&(this.deformMode=t,this.applyDeformVisuals(),this.updateDeformButtonUI(),this.focusOnSystemView())}applyDeformVisuals(){for(const t of dc){const e=this.deformMode?vn/this.radiusByKey[t]:1;this.meshByKey[t].scale.setScalar(e)}this.earthAxisLine.scale.setScalar(this.deformMode?vn/Di:1),this.controls.minDistance=(this.deformMode?vn:os)*3}updateDeformButtonUI(){this.deformRealBtn.classList.toggle("active",!this.deformMode),this.deformDeformBtn.classList.toggle("active",this.deformMode)}focusOnSystemView(){const e=(this.deformMode?r0:s0)[this.targetBody];if(e===void 0)return;const n=Math.max(this.frameDistanceForOrbit(e,1.15),this.controls.minDistance);this.moveCameraTo(this.posByKey[this.targetBody],n)}updateCameraTracking(){const t=this.posByKey[this.targetBody];if(this.lastTrackedPos){const e=t.clone().sub(this.lastTrackedPos);this.controls.target.add(e),this.camera.position.add(e)}this.lastTrackedPos=t.clone()}makeOutlineHull(t){const e=new Wt(t.geometry,new Me({color:16777215,side:Ie}));return e.visible=!1,t.add(e),e}makeOrbitLine(t){const e=[];for(let s=0;s<zt.ORBIT_LINE_SEGMENTS;s++){const r=s/zt.ORBIT_LINE_SEGMENTS*Math.PI*2;e.push(new T(Math.cos(r),0,Math.sin(r)))}const n=new $t().setFromPoints(e);return new o_(n,new en({color:t,transparent:!0,opacity:.35}))}measureLabelTextFrac(t,e,n,s){const r=t.measureText(e),a=r.width,o=(r.actualBoundingBoxAscent??14)+(r.actualBoundingBoxDescent??14),l=re.clamp(a/2/(n/2),.05,1),c=re.clamp(o/2/(s/2),.05,1);return{halfWFrac:l,halfHFrac:c}}drawLabelCanvas(t,e,n){const s=document.createElement("canvas");s.width=256,s.height=64;const r=s.getContext("2d");return n&&(r.fillStyle="rgba(255, 255, 255, 0.22)",r.fillRect(6,6,s.width-12,s.height-12),r.strokeStyle=e,r.lineWidth=3,r.strokeRect(6,6,s.width-12,s.height-12)),r.font="bold 28px Arial",r.textAlign="center",r.textBaseline="middle",r.shadowColor="#000",r.shadowBlur=8,r.fillStyle=e,r.fillText(t,128,32),s}makeLabel(t,e){const n=this.drawLabelCanvas(t,e,!1),{halfWFrac:s,halfHFrac:r}=this.measureLabelTextFrac(n.getContext("2d"),t,n.width,n.height),a=new He(n),o=new He(this.drawLabelCanvas(t,e,!0)),l=new Nn(new Un({map:a,transparent:!0,depthTest:!1,depthWrite:!1}));return l.renderOrder=999,{sprite:l,halfWFrac:s,halfHFrac:r,normalMap:a,selectedMap:o}}makeLeaderLine(t){const e=new $t().setFromPoints([new T,new T]),n=new en({color:t,transparent:!0,opacity:.25,depthTest:!1,depthWrite:!1}),s=new yn(e,n);return s.renderOrder=998,s.frustumCulled=!1,s}updateLabels(){const t=re.degToRad(this.camera.fov),e=new T(1,0,0).applyQuaternion(this.camera.quaternion),n=new T(0,1,0).applyQuaternion(this.camera.quaternion),s=new T(0,0,-1).applyQuaternion(this.camera.quaternion),r=_=>{const C=_.clone().sub(this.camera.position),I=Math.max(C.dot(s),1e-6);return{x:C.dot(e)/I,y:C.dot(n)/I,depth:I}},a=Math.tan(t/2)*zt.LABEL_HEIGHT_FRACTION,o=a*4,l=Math.max(this.renderer.domElement.clientHeight,1),c=_=>_*2*Math.tan(t/2)/l,h=c(this.deformMode?zt.DEFORM_MODEL_TO_LINE_PX:zt.MODEL_TO_LINE_PX),u=c(this.deformMode?zt.DEFORM_LINE_LENGTH_PX:zt.LINE_LENGTH_PX),d=c(this.deformMode?zt.DEFORM_LINE_TO_LABEL_PX:zt.LINE_TO_LABEL_PX),m=h+u+d,v=_=>{const C=Math.min(Math.abs(_),.98);return C/Math.sqrt(Math.max(1-C*C,1e-6))},M=(_,C,I,P)=>{const B=Math.abs(_)>1e-9?I/Math.abs(_):1/0,W=Math.abs(C)>1e-9?P/Math.abs(C):1/0;return Math.min(B,W)},p=(_,C,I,P,B,W)=>{const $=C-_.x,Q=I-_.y,z=Math.hypot($,Q),nt=z<1e-6?0:$/z,it=z<1e-6?-1:Q/z,st=v(_.r)+M(nt,it,P,B)+W-z;return st<=0?null:{nx:nt,ny:it,overlap:st}},f=this.activeBodyKeys(),R=f.map(_=>this.labelFracByKey[_]),x=R.map(_=>o*_.halfWFrac),A=R.map(_=>a*_.halfHFrac),D=x.map((_,C)=>Math.hypot(_,A[C])),L=(_,C,I,P)=>{const B=r(P),W=2*a*B.depth;C.scale.set(W*4,W,1);const $=C.material,Q=_===this.targetBody?this.labelMaps[_].selected:this.labelMaps[_].normal;$.map!==Q&&($.map=Q,$.needsUpdate=!0),$.depthTest=this.deformMode;const z=I.material;return z.depthTest=this.deformMode,{key:_,sprite:C,leader:I,bodyPos:P,depth:B.depth,baseX:B.x,baseY:B.y,x:B.x,y:B.y}},w=f.map(_=>L(_,this.labelByKey[_],this.leaderByKey[_],this.posByKey[_])),O=this.focusableBodies().map(_=>{const C=r(_.pos);return{x:C.x,y:C.y,r:_.radius/C.depth}}),E=(_,C,I,P,B,W)=>{const $=P-_,Q=B-C,z=Math.hypot($,Q),nt=I+W-z;return nt<=0?null:z<1e-6?{nx:0,ny:-1,overlap:nt}:{nx:$/z,ny:Q/z,overlap:nt}};if(this.deformMode)w.forEach((_,C)=>{_.y=_.baseY-(v(O[C].r)+m+A[C])});else for(let _=0;_<zt.LABEL_COLLISION_ITERATIONS;_++){for(let C=0;C<w.length;C++)for(let I=C+1;I<w.length;I++){const P=w[C],B=w[I],W=E(P.x,P.y,D[C],B.x,B.y,D[I]);W&&(B.x+=W.nx*W.overlap,B.y+=W.ny*W.overlap)}for(let C=0;C<w.length;C++){const I=w[C];for(const P of O){const B=p(P,I.x,I.y,x[C],A[C],m);B&&(I.x+=B.nx*B.overlap,I.y+=B.ny*B.overlap)}}}for(let _=0;_<w.length;_++){const C=w[_],I=O[_];C.sprite.position.copy(C.bodyPos).addScaledVector(e,(C.x-C.baseX)*C.depth).addScaledVector(n,(C.y-C.baseY)*C.depth);const P=this.outlineByKey[C.key];if(P.visible=C.key===this.targetBody,P.visible){const dt=this.radiusByKey[C.key],mt=this.deformMode?vn/dt:1,bt=dt+C.depth*c(zt.OUTLINE_THICKNESS_PX)/mt;P.scale.setScalar(bt/dt)}const B=C.x-C.baseX,W=C.y-C.baseY,$=Math.hypot(B,W),Q=$>1e-6?B/$:0,z=$>1e-6?W/$:1,nt=v(I.r),it=C.baseX+Q*(nt+h),q=C.baseY+z*(nt+h),st=it+Q*u,ht=q+z*u,H=(dt,mt)=>C.bodyPos.clone().addScaledVector(e,(dt-C.baseX)*C.depth).addScaledVector(n,(mt-C.baseY)*C.depth),Z=H(it,q),at=H(st,ht),et=C.leader.geometry.attributes.position;et.setXYZ(0,Z.x,Z.y,Z.z),et.setXYZ(1,at.x,at.y,at.z),et.needsUpdate=!0}}updateDebugHud(){if(this.debugHudEl){this.debugHudEl.textContent="";return}}renderGizmo(){if(!this.gizmoRenderer)return;const t=new T(0,0,1).applyQuaternion(this.camera.quaternion);this.gizmoCamera.position.copy(t).multiplyScalar(3),this.gizmoCamera.up.copy(this.camera.up),this.gizmoCamera.lookAt(0,0,0),this.gizmoRenderer.render(this.gizmoScene,this.gizmoCamera)}refreshTextLabels(){const t=(e,n,s)=>{const r=this.drawLabelCanvas(n,s,!1),a=this.measureLabelTextFrac(r.getContext("2d"),n,r.width,r.height);return this.labelMaps[e].normal.dispose(),this.labelMaps[e].selected.dispose(),this.labelMaps[e]={normal:new He(r),selected:new He(this.drawLabelCanvas(n,s,!0))},this.labelFracByKey[e]=a,a};this.sunLabelFrac=t("sun",Xt("label-sun"),"#ffee44"),this.earthLabelFrac=t("earth",Xt("label-earth"),"#8fc0ff"),this.moonLabelFrac=t("moon",Xt("label-moon"),"#ccd4ee"),t("mercury",Xt("label-mercury"),"#b8afa8"),t("venus",Xt("label-venus"),"#e8d4a0"),t("mars",Xt("label-mars"),"#e08050")}setLocation(t,e){const n=rh(re.degToRad(t),re.degToRad(e));this.locationMarker.position.copy(n).multiplyScalar(Di+uc/2),this.locationMarker.quaternion.setFromUnitVectors(new T(0,1,0),n.clone().negate())}handleResize(){const t=this.renderer.domElement.parentElement,e=t.clientWidth,n=t.clientHeight;e===0||n===0||(this.renderer.setSize(e,n),this.camera.aspect=e/n,this.camera.updateProjectionMatrix())}startLoop(){const t=()=>{this.rafId=requestAnimationFrame(t);const e=hc(this.currentSimDate(),this.deformMode);this.syncSceneToOrbitalState(e),this.updateCameraTracking(),this.controls.update(),this.updateLabels(),this.updateDebugHud(),this.renderer.render(this.scene,this.camera),this.renderGizmo()};this.rafId=requestAnimationFrame(t)}dispose(){var e;this.viewDialog.open&&this.viewDialog.close(),this.rafId!==null&&cancelAnimationFrame(this.rafId),window.removeEventListener("keydown",this.onKeyDown);const t=this.renderer.domElement;t.removeEventListener("pointerdown",this.onPointerDown),t.removeEventListener("pointerup",this.onPointerUp),t.removeEventListener("pointercancel",this.onPointerCancel);for(const n of this.cleanupFns)n();this.cleanupFns=[],this.simPlaybackController.dispose(),zt.disposeObject3D(this.scene),zt.disposeObject3D(this.gizmoScene),this.controls.dispose(),this.renderer.dispose(),(e=this.gizmoRenderer)==null||e.dispose()}static disposeObject3D(t){t.traverse(e=>{if(e instanceof Wt||e instanceof yn){e.geometry.dispose();const n=Array.isArray(e.material)?e.material:[e.material];for(const s of n)zt.disposeMaterial(s)}else e instanceof Nn&&zt.disposeMaterial(e.material)})}static disposeMaterial(t){var n;(n=t.map)==null||n.dispose(),t.dispose()}};F(zt,"TAP_MOVE_THRESHOLD_PX",6),F(zt,"EARTH_AXIS_REF1",new T(0,0,1)),F(zt,"LABEL_HIT_PADDING",1.5),F(zt,"OUTLINE_THICKNESS_PX",1),F(zt,"ORBIT_LINE_SEGMENTS",128),F(zt,"LABEL_HEIGHT_FRACTION",.035),F(zt,"MODEL_TO_LINE_PX",10),F(zt,"LINE_LENGTH_PX",20),F(zt,"LINE_TO_LABEL_PX",10),F(zt,"DEFORM_MODEL_TO_LINE_PX",4),F(zt,"DEFORM_LINE_LENGTH_PX",10),F(zt,"DEFORM_LINE_TO_LABEL_PX",4),F(zt,"LABEL_COLLISION_ITERATIONS",6),F(zt,"DEBUG_SHOW_LABEL_SIZE",!1),F(zt,"DEBUG_SHOW_CAMERA_HUD",!1);let Ha=zt;const hh=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M9 3H4v5M15 3h5v5M9 21H4v-5M15 21h5v-5"/>
  <circle cx="12" cy="12" r="3" fill="currentColor"/>
</svg>
`,a0="/astro-player/assets/jupiter-texture-Dby4G3vW.png",o0="/astro-player/assets/saturn-texture-ToLrTUsl.png",l0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAQCAYAAADeWHeIAAABqUlEQVR4nO2STW4VMQyAEzvJzJt5nbZwCTaVkJCQkLrhAByBJSvEAVhyBk7RVSWuwGUQEn+v85fYTpAf9BTJp1lMHMtJ7M9+/PD2TSmlELME713OOXvnHItISkRdF4I1xuZSdKsAgDX/0TUiYtG9UspjXh98IBbWmg4R9NN8kXOJbK2xAAC6dz6HiPX/9tXN85cvnn16eFh+AgBaa+10MVzFSHFet99dCAOARe8w7IlWBECtV0wpDsF558K87ieNd50fti3OfR8GZiFEdIloL7nkcegnliwiQsScrLHm4jhc6RtOp+WHntH33egQfCKOIplYhLvg++Bdp3nLuv/R11xOx6dZa2XhGGkDBNd53yMCrFucv33/9eXu/uu9iGSN6X3dv7uQMdaE4P2T6+P4+vbmnc4h5yx6V0RwuiQWYmI6HPpRY0ScmCWJCI/jYXIO/bxsJ2HRWWl/QPumeeee5yzLsn++nI7vY0y7rs/9CaGPKe3wOMxGnTQBKqcJUDlNgMppAlROE6BymgCV0wSonCZA5TQBKqcJUDlNgMppAlROE6BymgCmbv4Ca/EB1aNpbGkAAAAASUVORK5CYII=",c0="/astro-player/assets/uranus-texture-L9oFuifG.png",h0="/astro-player/assets/neptune-texture-CB5jPQZN.png",u0="/astro-player/assets/pluto-texture-Ckz8rHjR.png",d0={initialTiltDeg:0,maxTiltDeg:90,degPerPx:1.5};class f0{constructor(t,e,n={}){F(this,"options");F(this,"tiltDeg");F(this,"spinDeg",0);F(this,"quat",new Ue);F(this,"cleanupFns",[]);this.target=t,this.onChange=e,this.options={...d0,...n},this.tiltDeg=this.options.initialTiltDeg,this.setupDrag(),this.notify()}on(t,e,n){t.addEventListener(e,n),this.cleanupFns.push(()=>t.removeEventListener(e,n))}setupDrag(){let t=null;this.on(this.target,"pointerdown",n=>{const s=n;t||(this.target.setPointerCapture(s.pointerId),t={id:s.pointerId,x:s.clientX,y:s.clientY})}),this.on(this.target,"pointermove",n=>{const s=n;if(!t||s.pointerId!==t.id)return;const{degPerPx:r,maxTiltDeg:a}=this.options;this.spinDeg+=(s.clientX-t.x)*r,this.tiltDeg=re.clamp(this.tiltDeg+(s.clientY-t.y)*r,-a,a),t.x=s.clientX,t.y=s.clientY,this.notify()});const e=n=>{t&&n.pointerId===t.id&&(t=null)};this.on(this.target,"pointerup",e),this.on(this.target,"pointercancel",e)}notify(){this.quat.setFromEuler(new ke(re.degToRad(this.tiltDeg),re.degToRad(this.spinDeg),0,"XYZ")),this.onChange(this.quat)}dispose(){for(const t of this.cleanupFns)t();this.cleanupFns=[]}}class p0{constructor(t,e){F(this,"renderer");F(this,"scene",new Xi);F(this,"camera",new Lr(-1,1,1,-1,.1,100));this.model=e,this.renderer=new Wi({canvas:t,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(t.width,t.height,!1),this.scene.add(new Qa(16777215,1));const n=new jc(16777215,2);n.position.set(-1,1,2),this.scene.add(n),this.scene.add(e),this.fitCamera()}fitCamera(){this.model.updateMatrixWorld(!0);let t=0;const e=new T;this.model.traverse(s=>{if(!(s instanceof Wt||s instanceof yn))return;const r=s.geometry.attributes.position;for(let a=0;a<r.count;a++)t=Math.max(t,e.fromBufferAttribute(r,a).applyMatrix4(s.matrixWorld).length())});const n=t*1.05;this.camera.left=-n,this.camera.right=n,this.camera.top=n,this.camera.bottom=-n,this.camera.position.set(0,0,n*4),this.camera.updateProjectionMatrix()}setOrientation(t){this.model.quaternion.copy(t),this.renderer.render(this.scene,this.camera)}dispose(){this.scene.traverse(t=>{if(t instanceof Wt||t instanceof yn){t.geometry.dispose();const e=Array.isArray(t.material)?t.material:[t.material];for(const n of e)n.dispose()}}),this.renderer.dispose()}}const Ae={wireColor:5271712,wireRadius:.012,meridians:12,latitudeBands:6,axisColors:{x:14701909,y:5619808,z:5605600},axisRadius:.012,axisLength:1,tipRadius:.04,negativeDarken:.6};function m0(){const i=new nn;return i.add(g0(),_0()),i.add(Ta(new T(1,0,0),Ae.axisColors.x)),i.add(Ta(new T(0,1,0),Ae.axisColors.y)),i.add(Ta(new T(0,0,1),Ae.axisColors.z)),i}function g0(){const i=new Wt(new Ce(.98,32,24),new Me({colorWrite:!1}));return i.renderOrder=-1,i}function _0(){const i=new nn,t=e=>new Wt(new Ur(e,Ae.wireRadius,6,64),new Me({color:Ae.wireColor}));for(let e=0;e<Ae.meridians/2;e++){const n=t(1);n.rotation.y=e/Ae.meridians*Math.PI*2,i.add(n)}for(let e=1;e<Ae.latitudeBands;e++){const n=Math.PI/2-e/Ae.latitudeBands*Math.PI,s=t(Math.cos(n));s.rotation.x=Math.PI/2,s.position.y=Math.sin(n),i.add(s)}return i}function Ta(i,t){const e=new Ht(t),n=e.clone().lerp(new Ht(0),Ae.negativeDarken),s=l=>new Me({color:l,depthTest:!1,transparent:!0}),r=(l,c)=>{const h=new Wt(new Dr(Ae.axisRadius,Ae.axisRadius,Ae.axisLength,12),s(l));return h.position.y=c*Ae.axisLength/2,h},a=new Wt(new Ce(Ae.tipRadius,16,12),s(e));a.position.y=Ae.axisLength;const o=new nn;return o.add(r(e,1),r(n,-1),a),o.quaternion.setFromUnitVectors(new T(0,1,0),i),o}const $e={sun:{key:"sun",radius:696.34,color:16768341},mercury:{key:"mercury",radius:2.4397,color:10261648,textureUrl:th},venus:{key:"venus",radius:6.0518,color:15258784,textureUrl:eh},earth:{key:"earth",radius:6.371,color:6003711,textureUrl:Jc},moon:{key:"moon",radius:1.7374,color:13423854,textureUrl:Qc},mars:{key:"mars",radius:3.3895,color:12665870,textureUrl:nh},jupiter:{key:"jupiter",radius:69.911,color:14267276,textureUrl:a0},saturn:{key:"saturn",radius:58.232,color:14929820,textureUrl:o0,ring:{inner:74.658,outer:136.775,textureUrl:l0}},uranus:{key:"uranus",radius:25.362,color:10475744,textureUrl:c0},neptune:{key:"neptune",radius:24.622,color:5210073,textureUrl:h0},pluto:{key:"pluto",radius:1.1883,color:13482405,textureUrl:u0}},Qn=["mercury","venus","earth","mars","jupiter","saturn","uranus","neptune","pluto"],v0=["sun","mercury","venus","earth","moon","mars","jupiter","saturn","uranus","neptune","pluto"],x0=12,M0=7,hr=25,y0=18,fc=.9,S0=2.5,E0=1.2;class so{constructor(t){F(this,"renderer");F(this,"scene",new Xi);F(this,"camera",new Lr(-1,1,1,-1,.1,1e4));F(this,"controls");F(this,"light",new jc(16777215,S0));F(this,"meshByKey",{});F(this,"labelByKey",{});F(this,"orientation",null);F(this,"width",0);F(this,"height",0);F(this,"rafId",null);F(this,"cleanupFns",[]);F(this,"bodyQuat",new Ue);F(this,"gizmoView");F(this,"orientControl");F(this,"labelsLayer");F(this,"viewDialog",document.getElementById("size-view-dialog"));F(this,"viewList",document.getElementById("size-view-list"));this.canvas=t,this.renderer=new Wi({canvas:t,antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setClearColor(328986),this.camera.position.set(0,0,5e3),this.controls=new to(this.camera,t),this.controls.enableRotate=!1,this.controls.screenSpacePanning=!0,this.controls.zoomToCursor=!0,this.controls.mouseButtons={LEFT:_n.PAN,MIDDLE:_n.DOLLY,RIGHT:_n.PAN},this.controls.touches={ONE:Ln.PAN,TWO:Ln.DOLLY_PAN},this.controls.minZoom=.05,this.controls.maxZoom=2e3,this.scene.add(this.light),this.scene.add(new Qa(16777215,E0)),this.createBodies();const e=document.getElementById("size-orient-gizmo");this.gizmoView=new p0(e,m0()),this.orientControl=new f0(e,r=>{this.gizmoView.setOrientation(r),this.applyOrientation(r)},{initialTiltDeg:y0}),this.labelsLayer=document.getElementById("size-labels"),this.createLabels();const n=document.getElementById("size-fit-btn");Yi(n,hh),this.on(n,"click",()=>this.frameAll()),this.setupViewDialog(),this.on(window,"keydown",r=>{this.viewDialog.open||r.key==="Home"&&this.frameAll()});const s=new ResizeObserver(()=>this.handleResize());s.observe(t.parentElement),this.cleanupFns.push(()=>s.disconnect()),this.startLoop()}on(t,e,n){t.addEventListener(e,n),this.cleanupFns.push(()=>t.removeEventListener(e,n))}createBodies(){const t=new fr;for(const e of Object.values($e)){const n=e.radius>20?64:32,s=e.key==="sun"?new Me({color:e.color}):new Ni(e.textureUrl?{map:t.load(e.textureUrl)}:{color:e.color}),r=new Wt(new Ce(e.radius,n,n*3/4),s);if(e.ring){const a=t.load(e.ring.textureUrl);a.anisotropy=this.renderer.capabilities.getMaxAnisotropy();const o=new Wt(so.makeRingGeometry(e.ring.inner,e.ring.outer),new Ni({map:a,side:Xe,transparent:!0}));o.rotation.x=-Math.PI/2,r.add(o)}this.scene.add(r),this.meshByKey[e.key]=r}}static makeRingGeometry(t,e){const n=new Ir(t,e,128),s=n.attributes.position,r=n.attributes.uv;for(let a=0;a<s.count;a++){const o=Math.hypot(s.getX(a),s.getY(a));r.setXY(a,(o-t)/(e-t),.5)}return n}applyOrientation(t){this.bodyQuat.copy(t);for(const a of Object.values(this.meshByKey))a.quaternion.copy(t);if(!this.orientation)return;const e=this.controls.target,n=Object.values(this.meshByKey).reduce((a,o)=>a.position.distanceTo(e)<=o.position.distanceTo(e)?a:o),s=n.position.clone();this.layout(this.orientation);const r=n.position.clone().sub(s);e.add(r),this.camera.position.add(r),this.controls.update()}halfSize(t){if(!t.ring)return{x:t.radius,y:t.radius};const e=new T(0,1,0).applyQuaternion(this.bodyQuat),n=t.ring.outer;return{x:Math.max(t.radius,n*Math.sqrt(Math.max(1-e.x*e.x,0))),y:Math.max(t.radius,n*Math.sqrt(Math.max(1-e.y*e.y,0)))}}layout(t){this.orientation=t;const e=t==="horizontal",n=e?new T(1,0,0):new T(0,-1,0),s=e?new T(0,-1,0):new T(1,0,0),r=o=>{const l=this.halfSize(o);return e?l.x:l.y};this.meshByKey.sun.position.copy(n).multiplyScalar(-$e.sun.radius);let a=0;for(const o of Qn){const l=r($e[o]);a+=x0+l,this.meshByKey[o].position.copy(n).multiplyScalar(a),a+=l}this.meshByKey.moon.position.copy(this.meshByKey.earth.position).addScaledVector(s,$e.earth.radius+M0+$e.moon.radius),this.light.position.copy(n).multiplyScalar(-1).add(new T(0,0,1.2))}bodyBox(t){const e=this.meshByKey[t].position,n=this.halfSize($e[t]);return{minX:e.x-n.x,maxX:e.x+n.x,minY:e.y-n.y,maxY:e.y+n.y}}sunEdgeBox(){return this.orientation==="horizontal"?{minX:-hr,maxX:0,minY:0,maxY:0}:{minX:0,maxX:0,minY:0,maxY:hr}}fitBoxes(t){if(this.width===0||this.height===0)return;const e=t.reduce((l,c)=>({minX:Math.min(l.minX,c.minX),maxX:Math.max(l.maxX,c.maxX),minY:Math.min(l.minY,c.minY),maxY:Math.max(l.maxY,c.maxY)})),n=Math.max(e.maxX-e.minX,1e-6),s=Math.max(e.maxY-e.minY,1e-6),r=Math.min(this.width*fc/n,this.height*fc/s),a=(e.minX+e.maxX)/2,o=(e.minY+e.maxY)/2;this.controls.target.set(a,o,0),this.camera.position.set(a,o,5e3),this.camera.zoom=re.clamp(r,this.controls.minZoom,this.controls.maxZoom),this.camera.updateProjectionMatrix(),this.controls.update()}frameAll(){this.fitBoxes([this.sunEdgeBox(),...Qn.map(t=>this.bodyBox(t)),this.bodyBox("moon")])}focusOn(t){if(t==="sun"){this.fitBoxes([this.bodyBox("sun"),this.bodyBox(Qn[0])]);return}const e=t==="moon"?"earth":t,n=Qn.indexOf(e),s=[this.bodyBox(e)];s.push(n===0?this.sunEdgeBox():this.bodyBox(Qn[n-1])),n<Qn.length-1&&s.push(this.bodyBox(Qn[n+1])),e==="earth"&&s.push(this.bodyBox("moon")),this.fitBoxes(s)}labelText(t){return t==="pluto"?`${Xt("label-pluto")}${Xt("size-dwarf-note")}`:Xt(`label-${t}`)}createLabels(){for(const t of Object.keys($e)){const e=document.createElement("div");e.className=t==="sun"?"size-label size-label-sun":"size-label",this.labelsLayer.appendChild(e),this.labelByKey[t]=e}this.refreshTextLabels(),this.cleanupFns.push(()=>{this.labelsLayer.innerHTML=""})}refreshTextLabels(){for(const t of Object.keys($e))this.labelByKey[t].textContent=this.labelText(t);this.renderViewDialogItems()}updateLabels(){const t=this.camera.zoom,e=this.controls.target,n=(r,a)=>({sx:this.width/2+(r-e.x)*t,sy:this.height/2-(a-e.y)*t}),s=this.orientation==="horizontal";for(const r of Object.keys($e)){const a=this.labelByKey[r];if(r==="sun"){const d=s?n(-hr/2,e.y):n(e.x,hr/2);a.style.transform=`translate(${d.sx}px, ${d.sy}px) translate(-50%, -50%)`;continue}const o=this.meshByKey[r].position,l=this.halfSize($e[r]),{sx:c,sy:h}=n(o.x,o.y);let u;r==="moon"?u=s?`translate(${c}px, ${h+l.y*t+4}px) translate(-50%, 0)`:`translate(${c+l.x*t+6}px, ${h}px) translate(0, -50%)`:u=s?`translate(${c}px, ${h-l.y*t-4}px) translate(-50%, -100%)`:`translate(${c-l.x*t-6}px, ${h}px) translate(-100%, -50%)`,a.style.transform=u}}setupViewDialog(){this.on(document.getElementById("size-view-btn"),"click",()=>this.viewDialog.showModal()),this.on(document.getElementById("size-view-dialog-close"),"click",()=>this.viewDialog.close()),this.on(this.viewDialog,"click",t=>{t.target===this.viewDialog&&this.viewDialog.close()}),this.cleanupFns.push(()=>{this.viewDialog.open&&this.viewDialog.close(),this.viewList.innerHTML=""})}renderViewDialogItems(){this.viewList.innerHTML="";const t=()=>{const s=document.createElement("div");return s.className="scale-view-dialog-list",this.viewList.appendChild(s),s},e=(s,r,a,o)=>{const l=document.createElement("button");if(a){const c=document.createElement("span");c.className="body-dot",c.style.setProperty("--dot",a),l.appendChild(c)}l.appendChild(document.createTextNode(r)),l.addEventListener("click",()=>{o(),this.viewDialog.close()}),s.appendChild(l)};e(t(),Xt("size-view-all"),null,()=>this.frameAll());const n=t();for(const s of v0){const r=`#${$e[s].color.toString(16).padStart(6,"0")}`;e(n,Xt("size-focus").replace("{name}",Xt(`label-${s}`)),r,()=>this.focusOn(s))}}handleResize(){const t=this.canvas.parentElement,e=t.clientWidth,n=t.clientHeight;if(e===0||n===0)return;this.width=e,this.height=n,this.renderer.setSize(e,n),this.camera.left=-e/2,this.camera.right=e/2,this.camera.top=n/2,this.camera.bottom=-n/2,this.camera.updateProjectionMatrix();const s=e>=n?"horizontal":"vertical";s!==this.orientation&&(this.layout(s),this.frameAll())}startLoop(){const t=()=>{this.rafId=requestAnimationFrame(t),this.width!==0&&(this.updateLabels(),this.renderer.render(this.scene,this.camera))};t()}dispose(){this.rafId!==null&&cancelAnimationFrame(this.rafId);for(const t of this.cleanupFns)t();this.cleanupFns=[],this.controls.dispose(),this.orientControl.dispose(),this.gizmoView.dispose(),this.scene.traverse(t=>{var e;if(t instanceof Wt){t.geometry.dispose();const n=t.material;(e=n.map)==null||e.dispose(),n.dispose()}}),this.renderer.dispose()}}class b0{constructor(t){F(this,"hasAbsolute",!1);F(this,"onHeading");F(this,"handleAbsolute");F(this,"handleOrientation");this.onHeading=t,this.handleAbsolute=e=>{e.alpha===null&&e.beta===null&&e.gamma===null||(this.hasAbsolute=!0,this.onHeading(((360-(e.alpha??0))%360+360)%360))},this.handleOrientation=e=>{if(this.hasAbsolute)return;const n=e.webkitCompassHeading;if(e.alpha===null&&n==null)return;const s=n??360-(e.alpha??0);this.onHeading((s%360+360)%360)}}async start(){const t=DeviceOrientationEvent;if(typeof t.requestPermission=="function")try{if(await t.requestPermission()!=="granted")return!1}catch{return!1}return this.hasAbsolute=!1,window.addEventListener("deviceorientationabsolute",this.handleAbsolute,!0),window.addEventListener("deviceorientation",this.handleOrientation,!0),!0}stop(){window.removeEventListener("deviceorientationabsolute",this.handleAbsolute,!0),window.removeEventListener("deviceorientation",this.handleOrientation,!0)}}const T0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M19 12H5M11 18l-6-6 6-6"/>
</svg>
`,A0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill="currentColor" d="M19.14 12.94c.04-.3.06-.61.06-.94s-.02-.64-.07-.94l2.03-1.58a.5.5 0 0 0 .12-.61l-1.92-3.32a.5.5 0 0 0-.58-.22l-2.39.96a7.3 7.3 0 0 0-1.62-.94l-.36-2.54a.48.48 0 0 0-.48-.41h-3.84a.48.48 0 0 0-.48.41l-.36 2.54c-.59.24-1.13.56-1.62.94l-2.39-.96a.5.5 0 0 0-.58.22L2.75 8.87a.5.5 0 0 0 .12.61l2.03 1.58c-.05.3-.08.62-.08.94s.02.64.07.94L2.87 14.5a.5.5 0 0 0-.12.61l1.92 3.32c.12.22.37.29.58.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.25.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .58-.22l1.92-3.32a.5.5 0 0 0-.12-.61l-2.02-1.56ZM12 15.6c-1.99 0-3.6-1.61-3.6-3.6s1.61-3.6 3.6-3.6 3.6 1.61 3.6 3.6-1.61 3.6-3.6 3.6Z"/>
</svg>
`,ro=document.getElementById("lat"),ao=document.getElementById("lng"),xs=document.getElementById("show-constellations"),Ms=document.getElementById("show-famous"),ys=document.getElementById("show-triangles");function Nr(){const i=parseFloat(ro.value)||35.6762,t=parseFloat(ao.value)||139.6503;return{lat:i,lng:t}}const w0=document.getElementById("canvas3d"),ye=new Oa(w0),R0=document.getElementById("canvas2d"),C0=new M_(R0),uh=document.getElementById("ar-canvas"),Ps=new y_(uh),pc=document.getElementById("zoom-slider");pc.addEventListener("input",()=>{Ps.setFov(parseFloat(pc.value))});const L0=document.getElementById("canvas-scale");let de=null;const P0={availableModes:["month","year"],defaultMode:"month",deformDefault:!0,defaultTarget:"sun",showInnerPlanets:!0},D0={availableModes:["day","month"],defaultMode:"day",deformDefault:!0,defaultTarget:"earth"};function dh(i,t){de==null||de.dispose(),de=new Ha(L0,i);const{lat:e,lng:n}=Nr();de.setLocation(e,n),Ds("scale",t)}const fh=document.getElementById("scale-fit-btn");Yi(fh,hh);fh.addEventListener("click",()=>de==null?void 0:de.frameAll());const I0=document.getElementById("canvas-size");let cn=null;function U0(){cn==null||cn.dispose(),cn=new so(I0),Ds("size","nav-scale")}const N0=document.getElementById("scene-menu"),F0=document.getElementById("scene-hud"),O0=document.getElementById("sky-playback"),B0=document.getElementById("dashboard-playback"),z0=document.getElementById("scale-playback"),H0=document.getElementById("scene-dashboard"),k0=document.getElementById("scene-sky"),G0=document.getElementById("scene-scale"),V0=document.getElementById("scene-size"),W0=document.getElementById("const-toggles"),X0=document.getElementById("scale-display-group"),oo=document.getElementById("back-to-menu-btn");Yi(oo,T0);const zi=document.getElementById("toggle-controls");Yi(zi,A0);const Y0=document.getElementById("menu-dashboard-btn"),q0=document.getElementById("menu-sky-btn"),K0=document.getElementById("menu-scale-btn"),j0=document.getElementById("menu-scale-orbit-btn"),Z0=document.getElementById("menu-scale-spin-btn"),ph=document.getElementById("header-title");let mh="h1";function $0(i){mh=i,ph.textContent=Xt(i)}function Ds(i,t="h1"){i!=="scale"&&de&&(de.dispose(),de=null),i!=="size"&&cn&&(cn.dispose(),cn=null),$0(t);const e=i!=="menu"&&i!=="size";N0.style.display=i==="menu"?"":"none",F0.style.display=e?"":"none",O0.style.display=i==="sky"?"":"none",B0.style.display=i==="dashboard"?"":"none",H0.style.display=i==="dashboard"?"":"none",k0.style.display=i==="sky"?"":"none",G0.style.display=i==="scale"?"":"none",V0.style.display=i==="size"?"":"none",z0.style.display=i==="scale"?"":"none",W0.style.display=i==="dashboard"?"":"none",X0.style.display=i==="scale"?"":"none",oo.hidden=i==="menu",zi.hidden=!e,i!=="sky"&&Ps.stop(),i==="dashboard"&&requestAnimationFrame(()=>ye.handleResize(!0)),i==="scale"&&requestAnimationFrame(()=>de==null?void 0:de.handleResize())}const J0=document.querySelector("#scene-dashboard .view-3d"),Q0=document.querySelector("#scene-dashboard .view-2d"),gh=document.getElementById("view-toggle-3d"),_h=document.getElementById("view-toggle-2d");let vh="3d";function lo(i){vh=i,J0.classList.toggle("active",i==="3d"),Q0.classList.toggle("active",i==="2d"),gh.classList.toggle("active",i==="3d"),_h.classList.toggle("active",i==="2d"),i==="3d"&&requestAnimationFrame(()=>ye.handleResize()),i!=="3d"&&Tr("3d",!1),i!=="2d"&&Tr("2d",!1)}gh.addEventListener("click",()=>lo("3d"));_h.addEventListener("click",()=>lo("2d"));const co=document.getElementById("compass-toggle-3d"),ho=document.getElementById("compass-toggle-2d"),xh=co.querySelector(".compass-fab-icon"),Mh=ho.querySelector(".compass-fab-icon");let br=0,Ss=!1,ai=!1,cs=null;function mc(){return Ss||ai}let Aa=0;function yh(){const i=tv(-ye.getCameraHeadingDeg()-Aa);Aa+=i,xh.style.transform=`rotate(${Aa}deg)`}function tv(i){return(i%360+540)%360-180}ye.onCameraChange(yh);yh();function ev(){ai&&(Mh.style.transform=`rotate(${-br}deg)`)}async function Tr(i,t){const e=i==="3d"?co:ho,n=i==="3d"?xh:Mh;if(i==="3d"?(Ss=t,ye.setCompassLocked(t)):ai=t,e.classList.toggle("active",t),e.setAttribute("aria-pressed",String(t)),i==="2d"&&!t&&(n.style.transform=""),mc()&&!cs){const s=new b0(a=>{br=a,Ss&&ye.setCompassHeading(br),ai&&Zi(ji),ev()});if(!await s.start()){alert(Dn()==="ja"?"センサーの使用が許可されませんでした。":"Sensor access was not granted."),i==="3d"?(Ss=!1,ye.setCompassLocked(!1)):ai=!1,e.classList.remove("active"),e.setAttribute("aria-pressed","false");return}cs=s}else!mc()&&cs&&(cs.stop(),cs=null)}co.addEventListener("click",()=>Tr("3d",!Ss));ho.addEventListener("click",()=>Tr("2d",!ai));Y0.addEventListener("click",()=>{Ds("dashboard","nav-dashboard"),lo(vh)});q0.addEventListener("click",()=>{Ds("sky","nav-sky"),Ps.start(uh)});K0.addEventListener("click",U0);j0.addEventListener("click",()=>dh(P0,"nav-scale-orbit"));Z0.addEventListener("click",()=>dh(D0,"nav-scale-spin"));oo.addEventListener("click",()=>Ds("menu"));const gc=document.getElementById("lang-btn");let ji=new Date;function Zi(i){ji=i;const{lat:t,lng:e}=Nr(),n=$c(i,t,e);ye.update(n),C0.draw(n,ai?br:0),xs.checked&&ye.updateConstellations(t,e,i),Ms.checked&&ye.updateFamous(t,e,i),ys.checked&&ye.updateTriangles(t,e,i)}let Sh=new Date;function Eh(i){Sh=i;const{lat:t,lng:e}=Nr(),n=$c(i,t,e);Ps.setData(n,t,e,i)}function uo(){Zi(ji),Eh(Sh);const{lat:i,lng:t}=Nr();de==null||de.setLocation(i,t)}ro.addEventListener("input",uo);ao.addEventListener("input",uo);const hs=document.getElementById("locate-btn");hs.addEventListener("click",()=>{if(!navigator.geolocation){alert(Xt("locate-error"));return}hs.disabled=!0,hs.textContent=Xt("locate-btn-busy");const i=()=>{hs.disabled=!1,hs.textContent=Xt("locate-btn")};navigator.geolocation.getCurrentPosition(t=>{ro.value=t.coords.latitude.toFixed(4),ao.value=t.coords.longitude.toFixed(4),uo(),i()},()=>{i(),alert(Xt("locate-error"))},{enableHighAccuracy:!1,timeout:15e3,maximumAge:6e4})});xs.addEventListener("change",()=>{ye.setConstellationsVisible(xs.checked),xs.checked&&Zi(ji)});Ms.addEventListener("change",()=>{ye.setFamousVisible(Ms.checked),Ms.checked&&Zi(ji)});ys.addEventListener("change",()=>{ye.setTrianglesVisible(ys.checked),ys.checked&&Zi(ji)});ye.setConstellationsVisible(xs.checked);ye.setFamousVisible(Ms.checked);ye.setTrianglesVisible(ys.checked);const gr=document.querySelector(".controls");function fo(){const i=!gr.classList.contains("collapsed");zi.classList.toggle("active",i)}zi.addEventListener("click",()=>{!gr.classList.contains("collapsed")?(gr.classList.add("collapsed"),zi.setAttribute("aria-expanded","false")):(gr.classList.remove("collapsed"),zi.setAttribute("aria-expanded","true")),fo()});_c("ja");fo();gc.addEventListener("click",()=>{const i=Dn()==="ja"?"en":"ja";_c(i),fo(),gc.textContent=i==="ja"?"EN":"JP",ye.refreshTextLabels(),Ps.refreshDirLabels(),de==null||de.refreshTextLabels(),cn==null||cn.refreshTextLabels(),ph.textContent=Xt(mh)});eo("dashboard",Zi);eo("sky",Eh);

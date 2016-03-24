!function(e,t,r){"use strict";function n(r){if(s=t.documentElement,c=t.body,R(),Se=this,r=r||{},Ce=r.constants||{},r.easing)for(var n in r.easing)j[n]=r.easing[n];_e=r.edgeStrategy||"set",xe={beforerender:r.beforerender,render:r.render,keyframe:r.keyframe},Ee=r.forceHeight!==!1,Ee&&(Fe=r.scale||1),He=r.mobileDeceleration||x,qe=r.smoothScrolling!==!1,Le=r.smoothScrollingDuration||A,Me={targetTop:Se.getScrollTop()},Ge=(r.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||e.opera)})(),Ge?(we=t.getElementById(r.skrollrBody||E),we&&le(),W(),ve(s,[y,S],[T])):ve(s,[y,b],[T]),Se.refresh(),se(e,"resize orientationchange",function(){var e=s.clientWidth,t=s.clientHeight;(t!==Oe||e!==Ne)&&(Oe=t,Ne=e,Ve=!0)});var o=U();return function a(){Q(),Ue=o(a)}(),Se}var o={get:function(){return Se},init:function(e){return Se||new n(e)},VERSION:"0.6.30"},a=Object.prototype.hasOwnProperty,i=e.Math,l=e.getComputedStyle,s,c,f="touchstart",u="touchmove",m="touchcancel",p="touchend",d="skrollable",g=d+"-before",v=d+"-between",h=d+"-after",y="skrollr",T="no-"+y,b=y+"-desktop",S=y+"-mobile",k="linear",w=1e3,x=.004,E="skrollr-body",A=200,F="start",C="end",H="center",D="bottom",I="___skrollable_id",P=/^(?:input|textarea|button|select)$/i,N=/^\s+|\s+$/g,O=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,V=/\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,z=/^(@?[a-z\-]+)\[(\w+)\]$/,q=/-([a-z0-9_])/g,L=function(e,t){return t.toUpperCase()},M=/[\-+]?[\d]*\.?[\d]+/g,B=/\{\?\}/g,_=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,G=/[a-z\-]+-gradient/g,K="",Y="",R=function(){var e=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(l){var t=l(c,null);for(var r in t)if(K=r.match(e)||+r==r&&t[r].match(e))break;if(!K)return void(K=Y="");K=K[0],"-"===K.slice(0,1)?(Y=K,K={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[K]):Y="-"+K.toLowerCase()+"-"}},U=function(){var t=e.requestAnimationFrame||e[K.toLowerCase()+"RequestAnimationFrame"],r=Te();return(Ge||!t)&&(t=function(t){var n=Te()-r,o=i.max(0,1e3/60-n);return e.setTimeout(function(){r=Te(),t()},o)}),t},X=function(){var t=e.cancelAnimationFrame||e[K.toLowerCase()+"CancelAnimationFrame"];return(Ge||!t)&&(t=function(t){return e.clearTimeout(t)}),t},j={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-i.cos(e*i.PI)/2+.5},sqrt:function(e){return i.sqrt(e)},outCubic:function(e){return i.pow(e-1,3)+1},bounce:function(e){var t;if(.5083>=e)t=3;else if(.8489>=e)t=9;else if(.96208>=e)t=27;else{if(!(.99981>=e))return 1;t=91}return 1-i.abs(3*i.cos(e*t*1.028)/t)}};n.prototype.refresh=function(e){var n,o,a=!1;for(e===r?(a=!0,ke=[],Be=0,e=t.getElementsByTagName("*")):e.length===r&&(e=[e]),n=0,o=e.length;o>n;n++){var i=e[n],l=i,s=[],c=qe,f=_e,u=!1;if(a&&I in i&&delete i[I],i.attributes){for(var m=0,p=i.attributes.length;p>m;m++){var g=i.attributes[m];if("data-anchor-target"!==g.name)if("data-smooth-scrolling"!==g.name)if("data-edge-strategy"!==g.name)if("data-emit-events"!==g.name){var v=g.name.match(O);if(null!==v){var h={props:g.value,element:i,eventType:g.name.replace(q,L)};s.push(h);var y=v[1];y&&(h.constant=y.substr(1));var T=v[2];/p$/.test(T)?(h.isPercentage=!0,h.offset=(0|T.slice(0,-1))/100):h.offset=0|T;var b=v[3],S=v[4]||b;b&&b!==F&&b!==C?(h.mode="relative",h.anchors=[b,S]):(h.mode="absolute",b===C?h.isEnd=!0:h.isPercentage||(h.offset=h.offset*Fe))}}else u=!0;else f=g.value;else c="off"!==g.value;else if(l=t.querySelector(g.value),null===l)throw'Unable to find anchor target "'+g.value+'"'}if(s.length){var k,w,x;!a&&I in i?(x=i[I],k=ke[x].styleAttr,w=ke[x].classAttr):(x=i[I]=Be++,k=i.style.cssText,w=ge(i)),ke[x]={element:i,styleAttr:k,classAttr:w,anchorTarget:l,keyFrames:s,smoothScrolling:c,edgeStrategy:f,emitEvents:u,lastFrameIndex:-1},ve(i,[d],[])}}}for(me(),n=0,o=e.length;o>n;n++){var E=ke[e[n][I]];E!==r&&(ee(E),re(E))}return Se},n.prototype.relativeToAbsolute=function(e,t,r){var n=s.clientHeight,o=e.getBoundingClientRect(),a=o.top,i=o.bottom-o.top;return t===D?a-=n:t===H&&(a-=n/2),r===D?a+=i:r===H&&(a+=i/2),a+=Se.getScrollTop(),a+.5|0},n.prototype.animateTo=function(e,t){t=t||{};var n=Te(),o=Se.getScrollTop(),a=t.duration===r?w:t.duration;return ze={startTop:o,topDiff:e-o,targetTop:e,duration:a,startTime:n,endTime:n+a,easing:j[t.easing||k],done:t.done},ze.topDiff||(ze.done&&ze.done.call(Se,!1),ze=r),Se},n.prototype.stopAnimateTo=function(){ze&&ze.done&&ze.done.call(Se,!0),ze=r},n.prototype.isAnimatingTo=function(){return!!ze},n.prototype.isMobile=function(){return Ge},n.prototype.setScrollTop=function(t,r){return $e=r===!0,Ge?Ke=i.min(i.max(t,0),Ae):e.scrollTo(0,t),Se},n.prototype.getScrollTop=function(){return Ge?Ke:e.pageYOffset||s.scrollTop||c.scrollTop||0},n.prototype.getMaxScrollTop=function(){return Ae},n.prototype.on=function(e,t){return xe[e]=t,Se},n.prototype.off=function(e){return delete xe[e],Se},n.prototype.destroy=function(){var e=X();e(Ue),fe(),ve(s,[T],[y,b,S]);for(var t=0,n=ke.length;n>t;t++)ie(ke[t].element);s.style.overflow=c.style.overflow="",s.style.height=c.style.height="",we&&o.setStyle(we,"transform","none"),Se=r,we=r,xe=r,Ee=r,Ae=0,Fe=1,Ce=r,He=r,De="down",Ie=-1,Ne=0,Oe=0,Ve=!1,ze=r,qe=r,Le=r,Me=r,$e=r,Be=0,_e=r,Ge=!1,Ke=0,Ye=r};var W=function(){var n,o,a,l,d,g,v,h,y,T,b,S;se(s,[f,u,m,p].join(" "),function(e){var s=e.changedTouches[0];for(l=e.target;3===l.nodeType;)l=l.parentNode;switch(d=s.clientY,g=s.clientX,T=e.timeStamp,P.test(l.tagName)||e.preventDefault(),e.type){case f:n&&n.blur(),Se.stopAnimateTo(),n=l,o=v=d,a=g,y=T;break;case u:P.test(l.tagName)&&t.activeElement!==l&&e.preventDefault(),h=d-v,S=T-b,Se.setScrollTop(Ke-h,!0),v=d,b=T;break;default:case m:case p:var c=o-d,k=a-g,w=k*k+c*c;if(49>w){if(!P.test(n.tagName)){n.focus();var x=t.createEvent("MouseEvents");x.initMouseEvent("click",!0,!0,e.view,1,s.screenX,s.screenY,s.clientX,s.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),n.dispatchEvent(x)}return}n=r;var E=h/S;E=i.max(i.min(E,3),-3);var A=i.abs(E/He),F=E*A+.5*He*A*A,C=Se.getScrollTop()-F,H=0;C>Ae?(H=(Ae-C)/F,C=Ae):0>C&&(H=-C/F,C=0),A*=1-H,Se.animateTo(C+.5|0,{easing:"outCubic",duration:A})}}),e.scrollTo(0,0),s.style.overflow=c.style.overflow="hidden"},Z=function(){var e=s.clientHeight,t=pe(),r,n,o,a,l,c,f,u,m,p,d;for(u=0,m=ke.length;m>u;u++)for(r=ke[u],n=r.element,o=r.anchorTarget,a=r.keyFrames,l=0,c=a.length;c>l;l++)f=a[l],p=f.offset,d=t[f.constant]||0,f.frame=p,f.isPercentage&&(p*=e,f.frame=p),"relative"===f.mode&&(ie(n),f.frame=Se.relativeToAbsolute(o,f.anchors[0],f.anchors[1])-p,ie(n,!0)),f.frame+=d,Ee&&!f.isEnd&&f.frame>Ae&&(Ae=f.frame);for(Ae=i.max(Ae,de()),u=0,m=ke.length;m>u;u++){for(r=ke[u],a=r.keyFrames,l=0,c=a.length;c>l;l++)f=a[l],d=t[f.constant]||0,f.isEnd&&(f.frame=Ae-f.offset+d);r.keyFrames.sort(be)}},J=function(e,t){for(var r=0,n=ke.length;n>r;r++){var i=ke[r],l=i.element,s=i.smoothScrolling?e:t,c=i.keyFrames,f=c.length,u=c[0],m=c[c.length-1],p=s<u.frame,y=s>m.frame,T=p?u:m,b=i.emitEvents,S=i.lastFrameIndex,k,w;if(p||y){if(p&&-1===i.edge||y&&1===i.edge)continue;switch(p?(ve(l,[g],[h,v]),b&&S>-1&&(ue(l,u.eventType,De),i.lastFrameIndex=-1)):(ve(l,[h],[g,v]),b&&f>S&&(ue(l,m.eventType,De),i.lastFrameIndex=f)),i.edge=p?-1:1,i.edgeStrategy){case"reset":ie(l);continue;case"ease":s=T.frame;break;default:case"set":var x=T.props;for(k in x)a.call(x,k)&&(w=ae(x[k].value),0===k.indexOf("@")?l.setAttribute(k.substr(1),w):o.setStyle(l,k,w));continue}}else 0!==i.edge&&(ve(l,[d,v],[g,h]),i.edge=0);for(var E=0;f-1>E;E++)if(s>=c[E].frame&&s<=c[E+1].frame){var A=c[E],F=c[E+1];for(k in A.props)if(a.call(A.props,k)){var C=(s-A.frame)/(F.frame-A.frame);C=A.props[k].easing(C),w=oe(A.props[k].value,F.props[k].value,C),w=ae(w),0===k.indexOf("@")?l.setAttribute(k.substr(1),w):o.setStyle(l,k,w)}b&&S!==E&&("down"===De?ue(l,A.eventType,De):ue(l,F.eventType,De),i.lastFrameIndex=E);break}}},Q=function(){Ve&&(Ve=!1,me());var e=Se.getScrollTop(),t,n=Te(),a;if(ze)n>=ze.endTime?(e=ze.targetTop,t=ze.done,ze=r):(a=ze.easing((n-ze.startTime)/ze.duration),e=ze.startTop+a*ze.topDiff|0),Se.setScrollTop(e,!0);else if(!$e){var i=Me.targetTop-e;i&&(Me={startTop:Ie,topDiff:e-Ie,targetTop:e,startTime:Pe,endTime:Pe+Le}),n<=Me.endTime&&(a=j.sqrt((n-Me.startTime)/Le),e=Me.startTop+a*Me.topDiff|0)}if($e||Ie!==e){De=e>Ie?"down":Ie>e?"up":De,$e=!1;var l={curTop:e,lastTop:Ie,maxTop:Ae,direction:De},s=xe.beforerender&&xe.beforerender.call(Se,l);s!==!1&&(J(e,Se.getScrollTop()),Ge&&we&&o.setStyle(we,"transform","translate(0, "+-Ke+"px) "+Ye),Ie=e,xe.render&&xe.render.call(Se,l)),t&&t.call(Se,!1)}Pe=n},ee=function(e){for(var t=0,r=e.keyFrames.length;r>t;t++){for(var n=e.keyFrames[t],o,a,i,l={},s;null!==(s=V.exec(n.props));)i=s[1],a=s[2],o=i.match(z),null!==o?(i=o[1],o=o[2]):o=k,a=a.indexOf("!")?te(a):[a.slice(1)],l[i]={value:a,easing:j[o]};n.props=l}},te=function(e){var t=[];return _.lastIndex=0,e=e.replace(_,function(e){return e.replace(M,function(e){return e/255*100+"%"})}),Y&&(G.lastIndex=0,e=e.replace(G,function(e){return Y+e})),e=e.replace(M,function(e){return t.push(+e),"{?}"}),t.unshift(e),t},re=function(e){var t={},r,n;for(r=0,n=e.keyFrames.length;n>r;r++)ne(e.keyFrames[r],t);for(t={},r=e.keyFrames.length-1;r>=0;r--)ne(e.keyFrames[r],t)},ne=function(e,t){var r;for(r in t)a.call(e.props,r)||(e.props[r]=t[r]);for(r in e.props)t[r]=e.props[r]},oe=function(e,t,r){var n,o=e.length;if(o!==t.length)throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"';var a=[e[0]];for(n=1;o>n;n++)a[n]=e[n]+(t[n]-e[n])*r;return a},ae=function(e){var t=1;return B.lastIndex=0,e[0].replace(B,function(){return e[t++]})},ie=function(e,t){e=[].concat(e);for(var r,n,o=0,a=e.length;a>o;o++)n=e[o],r=ke[n[I]],r&&(t?(n.style.cssText=r.dirtyStyleAttr,ve(n,r.dirtyClassAttr)):(r.dirtyStyleAttr=n.style.cssText,r.dirtyClassAttr=ge(n),n.style.cssText=r.styleAttr,ve(n,r.classAttr)))},le=function(){Ye="translateZ(0)",o.setStyle(we,"transform",Ye);var e=l(we),t=e.getPropertyValue("transform"),r=e.getPropertyValue(Y+"transform"),n=t&&"none"!==t||r&&"none"!==r;n||(Ye="")};o.setStyle=function(e,t,r){var n=e.style;if(t=t.replace(q,L).replace("-",""),"zIndex"===t)isNaN(r)?n[t]=r:n[t]=""+(0|r);else if("float"===t)n.styleFloat=n.cssFloat=r;else try{K&&(n[K+t.slice(0,1).toUpperCase()+t.slice(1)]=r),n[t]=r}catch(o){}};var se=o.addEvent=function(t,r,n){var o=function(t){return t=t||e.event,t.target||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){t.returnValue=!1,t.defaultPrevented=!0}),n.call(this,t)};r=r.split(" ");for(var a,i=0,l=r.length;l>i;i++)a=r[i],t.addEventListener?t.addEventListener(a,n,!1):t.attachEvent("on"+a,o),Re.push({element:t,name:a,listener:n})},ce=o.removeEvent=function(e,t,r){t=t.split(" ");for(var n=0,o=t.length;o>n;n++)e.removeEventListener?e.removeEventListener(t[n],r,!1):e.detachEvent("on"+t[n],r)},fe=function(){for(var e,t=0,r=Re.length;r>t;t++)e=Re[t],ce(e.element,e.name,e.listener);Re=[]},ue=function(e,t,r){xe.keyframe&&xe.keyframe.call(Se,e,t,r)},me=function(){var e=Se.getScrollTop();Ae=0,Ee&&!Ge&&(c.style.height=""),Z(),Ee&&!Ge&&(c.style.height=Ae+s.clientHeight+"px"),Ge?Se.setScrollTop(i.min(Se.getScrollTop(),Ae)):Se.setScrollTop(e,!0),$e=!0},pe=function(){var e=s.clientHeight,t={},r,n;for(r in Ce)n=Ce[r],"function"==typeof n?n=n.call(Se):/p$/.test(n)&&(n=n.slice(0,-1)/100*e),t[r]=n;return t},de=function(){var e=0,t;return we&&(e=i.max(we.offsetHeight,we.scrollHeight)),t=i.max(e,c.scrollHeight,c.offsetHeight,s.scrollHeight,s.offsetHeight,s.clientHeight),t-s.clientHeight},ge=function(t){var r="className";return e.SVGElement&&t instanceof e.SVGElement&&(t=t[r],r="baseVal"),t[r]},ve=function(t,n,o){var a="className";if(e.SVGElement&&t instanceof e.SVGElement&&(t=t[a],a="baseVal"),o===r)return void(t[a]=n);for(var i=t[a],l=0,s=o.length;s>l;l++)i=ye(i).replace(ye(o[l])," ");i=he(i);for(var c=0,f=n.length;f>c;c++)-1===ye(i).indexOf(ye(n[c]))&&(i+=" "+n[c]);t[a]=he(i)},he=function(e){return e.replace(N,"")},ye=function(e){return" "+e+" "},Te=Date.now||function(){return+new Date},be=function(e,t){return e.frame-t.frame},Se,ke,we,xe,Ee,Ae=0,Fe=1,Ce,He,De="down",Ie=-1,Pe=Te(),Ne=0,Oe=0,Ve=!1,ze,qe,Le,Me,$e,Be=0,_e,Ge=!1,Ke=0,Ye,Re=[],Ue;"function"==typeof define&&define.amd?define([],function(){return o}):"undefined"!=typeof module&&module.exports?module.exports=o:e.skrollr=o}(window,document);
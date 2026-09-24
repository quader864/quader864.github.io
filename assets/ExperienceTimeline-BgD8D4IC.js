import{j as n,u as _,a as R,m as b}from"./vendor-motion-DbUpS2pO.js";import{r as f,e as y}from"./vendor-react-DRi3YQxy.js";import{f as S,E as g}from"./index-C_cc7NrY.js";import{b as L}from"./vendor-icons-aLgrgNZm.js";class k{constructor(){this.masterWebGLCanvas=null,this.master2DCanvas=null,this.gl=null,this.ctx2D=null,this.program=null,this.posBuffer=null,this.uSecRes=null,this.uCardOffset=null,this.uCardSize=null,this.uTime=null,this.uGlobalMouse=null,this.uMouseVel=null,this.uMouseActive=null,this.uHover=null,this.uIsDark=null,this.subscribers=new Map,this.intersectionObserver=null,this.resizeObserver=null,this.animFrameId=null,this.startTime=performance.now(),this.isRunning=!1,this.prefersReducedMotion=!1,this.isTabVisible=!0,this.isInitialized=!1,this.mouse={x:.5,y:.5,targetX:.5,targetY:.5,velocity:0,active:0,targetActive:0,lastMoveTime:0},this.cachedSecRect=null,this.lastSecRectTime=0,this.renderLoop=e=>{this.isRunning&&(this.renderFrame(e),this.animFrameId=requestAnimationFrame(this.renderLoop))}}init(){if(this.isInitialized||typeof window>"u")return;this.isInitialized=!0,this.prefersReducedMotion=window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches??!1,window.matchMedia?.("(prefers-reduced-motion: reduce)")?.addEventListener?.("change",o=>{this.prefersReducedMotion=o.matches,this.prefersReducedMotion?(this.renderSingleFrame(),this.stopLoop()):this.checkAndStartLoop()}),this.masterWebGLCanvas=document.createElement("canvas"),this.masterWebGLCanvas.width=384,this.masterWebGLCanvas.height=384,this.master2DCanvas=document.createElement("canvas"),this.master2DCanvas.width=384,this.master2DCanvas.height=384,this.ctx2D=this.master2DCanvas.getContext("2d",{alpha:!0}),this.initMasterWebGL(),this.intersectionObserver=new IntersectionObserver(o=>{let t=!1;o.forEach(s=>{const a=s.target,r=a.dataset.cardId||a.getAttribute("data-card-id");if(r&&this.subscribers.has(r)){const h=this.subscribers.get(r),i=h.isVisible;h.isVisible=s.isIntersecting,i!==h.isVisible&&(t=!0),s.isIntersecting&&this.updateSubscriberRect(h)}}),t&&this.checkAndStartLoop()},{rootMargin:"200px",threshold:.01}),typeof ResizeObserver<"u"&&(this.resizeObserver=new ResizeObserver(o=>{for(const t of o){const s=t.target,a=s.dataset.cardId||s.getAttribute("data-card-id");if(a&&this.subscribers.has(a)){const r=this.subscribers.get(a),h=Math.min(window.devicePixelRatio||1,1.25),i=Math.round(t.contentRect.width*h),c=Math.round(t.contentRect.height*h);i>0&&c>0&&(r.width=i,r.height=c,(r.canvas.width!==i||r.canvas.height!==c)&&(r.canvas.width=i,r.canvas.height=c)),this.updateSubscriberRect(r)}}})),document.addEventListener("visibilitychange",()=>{this.isTabVisible=document.visibilityState==="visible",this.isTabVisible?(this.cachedSecRect=null,this.updateAllSubscriberRects(!0),this.renderSingleFrame(),this.startLoop()):this.stopLoop()}),window.addEventListener("focus",()=>{this.isTabVisible=!0,this.cachedSecRect=null,this.updateAllSubscriberRects(!0),this.renderSingleFrame(),this.startLoop()}),window.addEventListener("resize",()=>{this.cachedSecRect=null,this.updateAllSubscriberRects()},{passive:!0}),window.addEventListener("scroll",()=>{this.cachedSecRect=null},{passive:!0}),this.initMouseListeners()}initMasterWebGL(){if(!this.masterWebGLCanvas)return;try{this.gl=this.masterWebGLCanvas.getContext("webgl",{alpha:!0,antialias:!1,depth:!1,stencil:!1,powerPreference:"low-power",preserveDrawingBuffer:!0})}catch{this.gl=null}if(!this.gl)return;const e=this.gl,o=`
      attribute vec2 a_position;
      varying vec2 v_uv;
      void main() {
        v_uv = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `,t=`
      precision highp float;
      varying vec2 v_uv;

      uniform vec2 u_section_res;
      uniform vec2 u_card_offset;
      uniform vec2 u_card_size;
      uniform float u_time;
      uniform vec2 u_global_mouse;
      uniform float u_mouse_velocity;
      uniform float u_mouse_active;
      uniform float u_hover;
      uniform float u_isDark;

      vec2 hash2(vec2 p) {
        p = mod(p, 256.0);
        p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
        return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(dot(hash2(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
              dot(hash2(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
          mix(dot(hash2(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
              dot(hash2(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x), u.y
        );
      }

      float fbm(vec2 p) {
        float total = 0.0;
        float amp = 0.5;
        float freq = 1.0;
        for (int i = 0; i < 4; i++) {
          total += noise(p * freq) * amp;
          freq *= 2.02;
          amp *= 0.5;
        }
        return total;
      }

      void main() {
        vec2 globalUV = v_uv;
        vec2 uvCorrected = globalUV;

        vec2 mouseCorrected = u_global_mouse;
        vec2 mouseDiff = uvCorrected - mouseCorrected;
        float mouseDist = length(mouseDiff);
        
        float rippleWave = sin(mouseDist * 14.0 - u_time * 2.5) * exp(-mouseDist * 3.8);
        vec2 mouseDisplacement = normalize(mouseDiff + 0.0001) * rippleWave * (0.03 + u_mouse_velocity * 0.04) * u_mouse_active;

        float t = mod(u_time * 0.20, 62.831853);

        vec2 p = uvCorrected * 1.8 + mouseDisplacement;
        
        vec2 q = vec2(
          fbm(p + vec2(0.0, 0.0) + t * 0.6),
          fbm(p + vec2(5.2, 1.3) + t * 0.5)
        );

        vec2 r = vec2(
          fbm(p + 3.2 * q + vec2(1.7, 9.2) + t * 0.8),
          fbm(p + 3.2 * q + vec2(8.3, 2.8) + t * 0.7)
        );

        float f = fbm(p + 3.0 * r + t * 0.4);
        float fluidHeight = clamp((f + 0.6) * 0.85, 0.0, 1.0);

        vec2 eps = vec2(0.015, 0.0);
        float hL = fbm(p - eps.xy + 3.0 * r);
        float hR = fbm(p + eps.xy + 3.0 * r);
        float hD = fbm(p - eps.yx + 3.0 * r);
        float hU = fbm(p + eps.yx + 3.0 * r);
        vec3 normal = normalize(vec3(hL - hR, hD - hU, 0.18));
        
        vec3 lightDir = normalize(vec3(
          mix(0.35, (u_global_mouse.x - 0.5) * 1.2, u_mouse_active * 0.4),
          mix(0.65, (0.5 - u_global_mouse.y) * 1.2, u_mouse_active * 0.4),
          0.85
        ));

        float diffuse = max(0.0, dot(normal, lightDir));
        float specular = pow(max(0.0, dot(reflect(-lightDir, normal), vec3(0.0, 0.0, 1.0))), 14.0);

        vec3 colorIndigo = vec3(0.32, 0.28, 0.88);
        vec3 colorPurple = vec3(0.62, 0.22, 0.94);
        vec3 colorPink   = vec3(0.94, 0.28, 0.64);
        vec3 colorCyan   = vec3(0.06, 0.74, 0.90);
        vec3 colorGold   = vec3(0.98, 0.76, 0.28);

        vec3 fluidColor = mix(colorIndigo, colorPurple, smoothstep(0.08, 0.48, length(q)));
        fluidColor = mix(fluidColor, colorPink, smoothstep(0.18, 0.68, r.x * 0.5 + 0.5));
        fluidColor = mix(fluidColor, colorCyan, smoothstep(0.28, 0.82, r.y * 0.5 + 0.5));
        fluidColor = mix(fluidColor, colorGold, smoothstep(0.68, 0.96, fluidHeight) * 0.7);

        fluidColor += vec3(1.0, 0.96, 0.98) * specular * (0.28 + u_hover * 0.22);

        vec4 finalColor;
        if (u_isDark > 0.5) {
          vec3 darkBase = vec3(0.04, 0.03, 0.08);
          vec3 blended = mix(darkBase, fluidColor, smoothstep(0.08, 0.92, fluidHeight) * 0.75 + diffuse * 0.25);
          blended += vec3(0.10, 0.08, 0.22) * u_hover;
          finalColor = vec4(blended, 0.88 + u_hover * 0.12);
        } else {
          vec3 lightBase = vec3(0.95, 0.94, 0.98);
          vec3 blended = mix(lightBase, fluidColor, 0.58 + smoothstep(0.05, 0.95, fluidHeight) * 0.36 + diffuse * 0.14);
          blended = mix(blended, vec3(1.0), 0.04);
          finalColor = vec4(blended, 0.92 + u_hover * 0.08);
        }

        gl_FragColor = finalColor;
      }
    `,s=(i,c)=>{const l=e.createShader(i);return l?(e.shaderSource(l,c),e.compileShader(l),e.getShaderParameter(l,e.COMPILE_STATUS)?l:(e.deleteShader(l),null)):null},a=s(e.VERTEX_SHADER,o),r=s(e.FRAGMENT_SHADER,t);if(!a||!r||(this.program=e.createProgram(),!this.program)||(e.attachShader(this.program,a),e.attachShader(this.program,r),e.linkProgram(this.program),!e.getProgramParameter(this.program,e.LINK_STATUS)))return;this.posBuffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.posBuffer),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW);const h=e.getAttribLocation(this.program,"a_position");e.enableVertexAttribArray(h),e.vertexAttribPointer(h,2,e.FLOAT,!1,0,0),this.uSecRes=e.getUniformLocation(this.program,"u_section_res"),this.uCardOffset=e.getUniformLocation(this.program,"u_card_offset"),this.uCardSize=e.getUniformLocation(this.program,"u_card_size"),this.uTime=e.getUniformLocation(this.program,"u_time"),this.uGlobalMouse=e.getUniformLocation(this.program,"u_global_mouse"),this.uMouseVel=e.getUniformLocation(this.program,"u_mouse_velocity"),this.uMouseActive=e.getUniformLocation(this.program,"u_mouse_active"),this.uHover=e.getUniformLocation(this.program,"u_hover"),this.uIsDark=e.getUniformLocation(this.program,"u_isDark"),e.viewport(0,0,384,384),this.masterWebGLCanvas.addEventListener("webglcontextlost",i=>{i.preventDefault(),this.gl=null,this.program=null}),this.masterWebGLCanvas.addEventListener("webglcontextrestored",()=>{this.initMasterWebGL(),this.renderSingleFrame(),this.checkAndStartLoop()})}getCachedSectionRect(e=!1){const o=performance.now();if(e||!this.cachedSecRect||o-this.lastSecRectTime>800){const t=document.getElementById("experience");if(!t)return null;const s=t.getBoundingClientRect();this.cachedSecRect={left:s.left,top:s.top,right:s.right,bottom:s.bottom,width:s.width,height:s.height},this.lastSecRectTime=o}return this.cachedSecRect}initMouseListeners(){const e=t=>{const s=this.getCachedSectionRect();if(!s||s.height<=0||s.width<=0)return;const a=80;if(t.clientX>=s.left-a&&t.clientX<=s.right+a&&t.clientY>=s.top-a&&t.clientY<=s.bottom+a){const r=Math.max(0,Math.min(1,(t.clientX-s.left)/s.width)),h=Math.max(0,Math.min(1,(t.clientY-s.top)/s.height)),i=r-this.mouse.targetX,c=h-this.mouse.targetY,l=Math.sqrt(i*i+c*c)*8;this.mouse.targetX=r,this.mouse.targetY=h,this.mouse.velocity=Math.min(.5,this.mouse.velocity*.8+l*.2),this.mouse.targetActive=1,this.mouse.lastMoveTime=performance.now()}},o=()=>{this.mouse.targetActive=0};window.addEventListener("pointermove",e,{passive:!0}),document.addEventListener("mouseleave",o)}updateSubscriberRect(e,o){const t=o||this.getCachedSectionRect(),s=e.canvas.closest(".group")||e.canvas.parentElement;if(t&&s){const a=s.getBoundingClientRect(),r=Math.max(1,t.width),h=Math.max(1,t.height);e.cachedRect={normLeft:Math.max(0,Math.min(1,(a.left-t.left)/r)),normTop:Math.max(0,Math.min(1,(a.top-t.top)/h)),normWidth:Math.max(.1,Math.min(1,a.width/r)),normHeight:Math.max(.1,Math.min(1,a.height/h))}}else{const a=Math.max(1,e.totalItems),r=e.index/a;e.cachedRect={normLeft:e.index%2===0?.52:.02,normTop:r,normWidth:.45,normHeight:1/a}}}updateAllSubscriberRects(e=!1){const o=this.getCachedSectionRect(e);this.subscribers.forEach(t=>{this.updateSubscriberRect(t,o)})}subscribe(e,o,t,s,a,r,h){this.init();const i=o.getContext("2d",{alpha:!0});if(!i)return;const c=Math.min(window.devicePixelRatio||1,1.25),l=Math.round((t.clientWidth||300)*c),d=Math.round((t.clientHeight||200)*c);o.width=Math.max(1,l),o.height=Math.max(1,d);const m={id:e,canvas:o,ctx:i,isDark:s,index:a,totalItems:r,isVisible:!0,hover:0,targetHover:0,width:l,height:d,cachedRect:{normLeft:0,normTop:0,normWidth:1,normHeight:1}};this.subscribers.set(e,m),this.updateSubscriberRect(m),this.intersectionObserver&&this.intersectionObserver.observe(t),this.resizeObserver&&this.resizeObserver.observe(t),h(),this.renderSingleFrame(),this.checkAndStartLoop()}unsubscribe(e,o){this.subscribers.get(e)&&(this.intersectionObserver&&o&&this.intersectionObserver.unobserve(o),this.resizeObserver&&o&&this.resizeObserver.unobserve(o)),this.subscribers.delete(e),this.checkAndStartLoop()}setHover(e,o){const t=this.subscribers.get(e);t&&(t.targetHover=o)}setTheme(e,o){const t=this.subscribers.get(e);t&&(t.isDark=o)}hasVisibleSubscribers(){for(const e of this.subscribers.values())if(e.isVisible)return!0;return!1}checkAndStartLoop(){if(this.prefersReducedMotion){this.renderSingleFrame(),this.stopLoop();return}this.isTabVisible&&this.hasVisibleSubscribers()&&!this.isRunning?this.startLoop():(!this.isTabVisible||!this.hasVisibleSubscribers())&&this.isRunning&&this.stopLoop()}startLoop(){this.isRunning||(this.isRunning=!0,this.animFrameId=requestAnimationFrame(this.renderLoop))}stopLoop(){this.isRunning=!1,this.animFrameId!==null&&(cancelAnimationFrame(this.animFrameId),this.animFrameId=null)}renderSingleFrame(){this.renderFrame(performance.now())}renderFrame(e){const o=(e-this.startTime)*.001%3600,t=this.mouse;t.x+=(t.targetX-t.x)*.08,t.y+=(t.targetY-t.y)*.08,t.active+=(t.targetActive-t.active)*.06,t.velocity*=.94,e-t.lastMoveTime>2500&&(t.targetActive=0);let s=!0;for(const i of this.subscribers.values())if(i.isVisible){s=i.isDark;break}let a=null;if(this.gl&&this.program&&this.masterWebGLCanvas){const i=this.gl;i.useProgram(this.program),i.uniform2f(this.uSecRes,384,384),i.uniform2f(this.uCardOffset,0,0),i.uniform2f(this.uCardSize,384,384),i.uniform1f(this.uTime,o),i.uniform2f(this.uGlobalMouse,t.x,t.y),i.uniform1f(this.uMouseVel,t.velocity),i.uniform1f(this.uMouseActive,t.active),i.uniform1f(this.uHover,0),i.uniform1f(this.uIsDark,s?1:0),i.drawArrays(i.TRIANGLES,0,6),a=this.masterWebGLCanvas}else if(this.ctx2D&&this.master2DCanvas){const i=this.ctx2D,c=o*.35,l=i.createRadialGradient(192+Math.sin(c)*90,192+Math.cos(c*.8)*90,15,192,192,270);s?(l.addColorStop(0,"rgba(168, 85, 247, 0.75)"),l.addColorStop(.4,"rgba(99, 102, 241, 0.65)"),l.addColorStop(.8,"rgba(6, 182, 212, 0.55)"),l.addColorStop(1,"rgba(15, 23, 42, 0.90)")):(l.addColorStop(0,"rgba(147, 51, 234, 0.65)"),l.addColorStop(.4,"rgba(99, 102, 241, 0.55)"),l.addColorStop(.8,"rgba(6, 182, 212, 0.50)"),l.addColorStop(1,"rgba(243, 232, 255, 0.85)")),i.fillStyle=l,i.fillRect(0,0,384,384),a=this.master2DCanvas}const r=384,h=384;this.subscribers.forEach(i=>{if(!i.isVisible)return;i.hover+=(i.targetHover-i.hover)*.1;const c=i.canvas,l=i.ctx,d=i.cachedRect,m=Math.max(0,Math.min(r-10,d.normLeft*r)),p=Math.max(0,Math.min(h-10,d.normTop*h)),x=Math.max(10,Math.min(r-m,d.normWidth*r)),w=Math.max(10,Math.min(h-p,d.normHeight*h));if(a){l.clearRect(0,0,c.width,c.height);try{l.drawImage(a,m,p,x,w,0,0,c.width,c.height)}catch{l.fillStyle=i.isDark?"#0f172a":"#f8fafc",l.fillRect(0,0,c.width,c.height)}}i.hover>.01&&(l.fillStyle=i.isDark?`rgba(168, 85, 247, ${i.hover*.15})`:`rgba(147, 51, 234, ${i.hover*.12})`,l.fillRect(0,0,c.width,c.height))})}}const v=new k,C=({className:u="",isDark:e=!0,index:o=0,totalItems:t=6})=>{const s=f.useRef(null),a=f.useRef(null),r=f.useId(),[h,i]=f.useState(!1);return f.useEffect(()=>{v.setTheme(r,e)},[e,r]),f.useEffect(()=>{const c=s.current,l=a.current;if(!c||!l)return;v.subscribe(r,c,l,e,o,t,()=>i(!0));const d=c.closest(".group"),m=()=>v.setHover(r,1),p=()=>v.setHover(r,0);return d&&(d.addEventListener("pointerenter",m),d.addEventListener("pointerleave",p)),()=>{d&&(d.removeEventListener("pointerenter",m),d.removeEventListener("pointerleave",p)),v.unsubscribe(r,l)}},[r,o,t,e]),n.jsxs("div",{ref:a,"data-card-id":r,className:`absolute inset-0 w-full h-full pointer-events-none overflow-hidden rounded-[inherit] transition-colors duration-500 ${u}`,children:[n.jsx("div",{className:`absolute inset-0 w-full h-full rounded-[inherit] pointer-events-none ${e?"timeline-ambient-mesh-dark":"timeline-ambient-mesh-light"}`}),n.jsx("canvas",{ref:s,"data-card-id":r,className:`w-full h-full block rounded-[inherit] pointer-events-none transition-opacity duration-500 relative z-10 ${h?"opacity-85":"opacity-0"}`})]})},T=()=>{const{isDark:u}=S(),e=y.useRef(null),{scrollYProgress:o}=_({target:e,offset:["start 65%","end 65%"]}),t=R(o,{stiffness:220,damping:28,restDelta:.001}),s=a=>{a.preventDefault();const r=document.getElementById("footer");r?r.scrollIntoView({behavior:"smooth"}):window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})};return n.jsx("section",{id:"experience",className:"pt-24 sm:pt-32 pb-8 sm:pb-12 bg-transparent relative z-10 overflow-hidden font-sans",children:n.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:[n.jsxs(b.div,{className:"text-center mb-20 sm:mb-28",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[n.jsx("h2",{className:"text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tight break-words font-sans",children:"Timeline_Logs"}),n.jsx("p",{className:"text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-xl font-medium px-2 leading-relaxed",children:"A chronological trace across quantitative finance, MQL5 architecture, and full-stack software development."})]}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"absolute left-4 md:left-1/2 -translate-x-1/2 top-7 bottom-20 w-0.5 bg-slate-200/80 dark:bg-slate-800/80",children:n.jsx(b.div,{style:{scaleY:t,originY:0},className:"w-full h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 shadow-[0_0_15px_rgba(99,102,241,0.5)] origin-top"})}),n.jsx("div",{ref:e,className:"space-y-16 sm:space-y-24",children:g.map((a,r)=>n.jsx(M,{item:a,index:r,isDark:u},a.id))}),n.jsx(b.div,{id:"experience-scroll-down-indicator",initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.2},className:"pt-10 sm:pt-14 pb-1 flex flex-col items-center justify-center relative z-20",children:n.jsx("a",{id:"scroll-to-footer-btn",href:"#footer",onClick:s,className:"group flex flex-col items-center justify-center focus:outline-none transition-transform duration-300 active:scale-90 cursor-pointer","aria-label":"Scroll down to view footer",children:n.jsx(b.div,{animate:{y:[0,6,0]},transition:{repeat:1/0,duration:1.8,ease:"easeInOut"},className:"w-11 h-11 rounded-full border border-purple-300/80 dark:border-cyan-400/40 bg-white/90 dark:bg-slate-950/70 backdrop-blur-md flex items-center justify-center text-purple-600 dark:text-cyan-400 shadow-lg shadow-purple-500/10 group-hover:border-purple-600 group-hover:text-purple-700 dark:group-hover:border-cyan-400 dark:group-hover:text-cyan-300 group-hover:shadow-[0_0_25px_rgba(147,51,234,0.35)] transition-all duration-300",children:n.jsx(L,{className:"w-5 h-5"})})})})]})]})})},M=({item:u,index:e,isDark:o})=>n.jsxs(b.div,{className:`relative flex flex-col md:flex-row md:justify-between items-start group ${e%2===0?"md:flex-row-reverse":""}`,initial:{opacity:0,x:e%2===0?50:-50},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,type:"spring"},children:[n.jsx("div",{className:"absolute left-4 md:left-1/2 -translate-x-1/2 top-7 md:top-8 w-3.5 h-3.5 rounded-full bg-white dark:bg-white border-[3px] border-purple-600 dark:border-indigo-500 z-20 shadow-[0_0_12px_rgba(147,51,234,0.7)] dark:shadow-[0_0_12px_rgba(99,102,241,0.9)] pointer-events-none"}),n.jsx("div",{className:"hidden md:block w-[45%]"}),n.jsx("div",{className:"w-full md:w-[45%] pl-12 md:pl-0 relative",children:n.jsxs("div",{className:"relative isolate p-6 sm:p-8 rounded-2xl sm:rounded-[2.2rem] bg-white/90 dark:bg-slate-900/90 border border-purple-300/80 dark:border-indigo-500/30 hover:border-purple-500 dark:hover:border-indigo-400/70 transition-all duration-500 group overflow-hidden shadow-xl shadow-purple-900/10 dark:shadow-[0_12px_36px_rgba(0,0,0,0.6)]",children:[n.jsx(C,{isDark:o,index:e,totalItems:g.length,className:"z-0"}),n.jsx("div",{className:"absolute inset-0 bg-white/20 dark:bg-slate-950/45 backdrop-blur-md backdrop-saturate-[160%] z-0 pointer-events-none rounded-2xl sm:rounded-[2.2rem]"}),n.jsx("div",{className:"absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-300/80 dark:via-white/50 to-transparent pointer-events-none z-10"}),n.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-white/30 dark:from-white/[0.04] via-transparent to-transparent pointer-events-none rounded-2xl sm:rounded-[2.2rem] z-0"}),n.jsxs("div",{className:"flex items-center justify-between mb-6 relative z-10",children:[n.jsx("div",{className:"p-3 rounded-2xl bg-gradient-to-br from-purple-600 via-indigo-600 to-pink-500 text-white shadow-lg shadow-purple-600/30 border border-purple-300/40",children:n.jsx(u.icon,{size:20})}),n.jsx("div",{className:"font-mono text-[10px] font-bold text-purple-700 dark:text-cyan-300 bg-white/85 dark:bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-purple-200/80 dark:border-indigo-500/40 shadow-sm",children:u.duration})]}),n.jsx("h3",{className:"font-sans font-black text-slate-900 dark:text-white text-2xl mb-1 tracking-tight relative z-10 drop-shadow-none dark:drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]",children:u.title}),n.jsx("h4",{className:"font-mono text-purple-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6 relative z-10 drop-shadow-none dark:drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]",children:u.companyOrContext}),n.jsx("p",{className:"font-sans text-slate-700 dark:text-slate-200 font-medium text-sm sm:text-base leading-relaxed mb-8 relative z-10 drop-shadow-none dark:drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]",children:u.description}),n.jsx("div",{className:"flex flex-wrap gap-2 relative z-10",children:u.skills.map(t=>n.jsx("span",{className:"font-mono text-[10px] font-bold uppercase tracking-tight text-purple-950 dark:text-slate-100 bg-white/85 dark:bg-slate-900/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-purple-200/80 dark:border-indigo-500/40 shadow-sm group-hover:text-purple-600 dark:group-hover:text-cyan-300 group-hover:border-purple-400/70 dark:group-hover:border-cyan-400/80 transition-all",children:t},t))})]})})]});export{T as default};

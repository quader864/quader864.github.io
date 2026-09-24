import{j as a,u as _,a as y,m as b}from"./vendor-motion-J1mK5uht.js";import{r as f,e as k}from"./vendor-react-DRi3YQxy.js";import{f as L,E as g}from"./index-mpFfu0rm.js";import{b as C}from"./vendor-icons-CaSqFhSK.js";class R{constructor(){this.masterWebGLCanvas=null,this.master2DCanvas=null,this.gl=null,this.ctx2D=null,this.program=null,this.posBuffer=null,this.uSecRes=null,this.uCardOffset=null,this.uCardSize=null,this.uTime=null,this.uGlobalMouse=null,this.uMouseVel=null,this.uMouseActive=null,this.uHover=null,this.uIsDark=null,this.subscribers=new Map,this.intersectionObserver=null,this.resizeObserver=null,this.animFrameId=null,this.startTime=performance.now(),this.isRunning=!1,this.prefersReducedMotion=!1,this.isTabVisible=!0,this.isInitialized=!1,this.mouse={x:.5,y:.5,targetX:.5,targetY:.5,velocity:0,active:0,targetActive:0,lastMoveTime:0},this.renderLoop=e=>{this.isRunning&&(this.renderFrame(e),this.animFrameId=requestAnimationFrame(this.renderLoop))}}init(){if(this.isInitialized||typeof window>"u")return;this.isInitialized=!0,this.prefersReducedMotion=window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches??!1,window.matchMedia?.("(prefers-reduced-motion: reduce)")?.addEventListener?.("change",i=>{this.prefersReducedMotion=i.matches,this.prefersReducedMotion?(this.renderSingleFrame(),this.stopLoop()):this.checkAndStartLoop()}),this.masterWebGLCanvas=document.createElement("canvas"),this.masterWebGLCanvas.width=384,this.masterWebGLCanvas.height=384,this.master2DCanvas=document.createElement("canvas"),this.master2DCanvas.width=384,this.master2DCanvas.height=384,this.ctx2D=this.master2DCanvas.getContext("2d",{alpha:!0}),this.initMasterWebGL(),this.intersectionObserver=new IntersectionObserver(i=>{let t=!1;i.forEach(l=>{const o=l.target,s=o.dataset.cardId||o.getAttribute("data-card-id");if(s&&this.subscribers.has(s)){const d=this.subscribers.get(s),r=d.isVisible;d.isVisible=l.isIntersecting,r!==d.isVisible&&(t=!0),l.isIntersecting&&this.updateSubscriberRect(d)}}),t&&this.checkAndStartLoop()},{rootMargin:"200px",threshold:.01}),typeof ResizeObserver<"u"&&(this.resizeObserver=new ResizeObserver(i=>{for(const t of i){const l=t.target,o=l.dataset.cardId||l.getAttribute("data-card-id");if(o&&this.subscribers.has(o)){const s=this.subscribers.get(o),d=Math.min(window.devicePixelRatio||1,1.25),r=Math.round(t.contentRect.width*d),c=Math.round(t.contentRect.height*d);r>0&&c>0&&(s.width=r,s.height=c,(s.canvas.width!==r||s.canvas.height!==c)&&(s.canvas.width=r,s.canvas.height=c)),this.updateSubscriberRect(s)}}})),document.addEventListener("visibilitychange",()=>{this.isTabVisible=document.visibilityState==="visible",this.isTabVisible?(this.subscribers.forEach(i=>{i.isVisible=!0,this.updateSubscriberRect(i)}),this.renderSingleFrame(),this.startLoop()):this.stopLoop()}),window.addEventListener("focus",()=>{this.isTabVisible=!0,this.subscribers.forEach(i=>{i.isVisible=!0,this.updateSubscriberRect(i)}),this.renderSingleFrame(),this.startLoop()}),window.addEventListener("resize",()=>{this.subscribers.forEach(i=>{this.updateSubscriberRect(i)})},{passive:!0}),this.initMouseListeners()}initMasterWebGL(){if(!this.masterWebGLCanvas)return;try{this.gl=this.masterWebGLCanvas.getContext("webgl",{alpha:!0,antialias:!1,depth:!1,stencil:!1,powerPreference:"low-power",preserveDrawingBuffer:!0})}catch{this.gl=null}if(!this.gl)return;const e=this.gl,i=`
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
    `,l=(r,c)=>{const n=e.createShader(r);return n?(e.shaderSource(n,c),e.compileShader(n),e.getShaderParameter(n,e.COMPILE_STATUS)?n:(e.deleteShader(n),null)):null},o=l(e.VERTEX_SHADER,i),s=l(e.FRAGMENT_SHADER,t);if(!o||!s||(this.program=e.createProgram(),!this.program)||(e.attachShader(this.program,o),e.attachShader(this.program,s),e.linkProgram(this.program),!e.getProgramParameter(this.program,e.LINK_STATUS)))return;this.posBuffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.posBuffer),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW);const d=e.getAttribLocation(this.program,"a_position");e.enableVertexAttribArray(d),e.vertexAttribPointer(d,2,e.FLOAT,!1,0,0),this.uSecRes=e.getUniformLocation(this.program,"u_section_res"),this.uCardOffset=e.getUniformLocation(this.program,"u_card_offset"),this.uCardSize=e.getUniformLocation(this.program,"u_card_size"),this.uTime=e.getUniformLocation(this.program,"u_time"),this.uGlobalMouse=e.getUniformLocation(this.program,"u_global_mouse"),this.uMouseVel=e.getUniformLocation(this.program,"u_mouse_velocity"),this.uMouseActive=e.getUniformLocation(this.program,"u_mouse_active"),this.uHover=e.getUniformLocation(this.program,"u_hover"),this.uIsDark=e.getUniformLocation(this.program,"u_isDark"),e.viewport(0,0,384,384),this.masterWebGLCanvas.addEventListener("webglcontextlost",r=>{r.preventDefault(),this.gl=null,this.program=null}),this.masterWebGLCanvas.addEventListener("webglcontextrestored",()=>{this.initMasterWebGL(),this.renderSingleFrame(),this.checkAndStartLoop()})}initMouseListeners(){const e=t=>{const l=document.getElementById("experience");if(!l)return;const o=l.getBoundingClientRect();if(o.height<=0||o.width<=0)return;const s=80;if(t.clientX>=o.left-s&&t.clientX<=o.right+s&&t.clientY>=o.top-s&&t.clientY<=o.bottom+s){const d=Math.max(0,Math.min(1,(t.clientX-o.left)/o.width)),r=Math.max(0,Math.min(1,(t.clientY-o.top)/o.height)),c=d-this.mouse.targetX,n=r-this.mouse.targetY,h=Math.sqrt(c*c+n*n)*8;this.mouse.targetX=d,this.mouse.targetY=r,this.mouse.velocity=Math.min(.5,this.mouse.velocity*.8+h*.2),this.mouse.targetActive=1,this.mouse.lastMoveTime=performance.now()}},i=()=>{this.mouse.targetActive=0};window.addEventListener("pointermove",e,{passive:!0}),document.addEventListener("mouseleave",i)}updateSubscriberRect(e){const i=document.getElementById("experience"),t=e.canvas.closest(".group")||e.canvas.parentElement;if(i&&t){const l=i.getBoundingClientRect(),o=t.getBoundingClientRect(),s=Math.max(1,l.width),d=Math.max(1,l.height);e.cachedRect={normLeft:Math.max(0,Math.min(1,(o.left-l.left)/s)),normTop:Math.max(0,Math.min(1,(o.top-l.top)/d)),normWidth:Math.max(.1,Math.min(1,o.width/s)),normHeight:Math.max(.1,Math.min(1,o.height/d))}}else{const l=Math.max(1,e.totalItems),o=e.index/l;e.cachedRect={normLeft:e.index%2===0?.52:.02,normTop:o,normWidth:.45,normHeight:1/l}}}subscribe(e,i,t,l,o,s,d){this.init();const r=i.getContext("2d",{alpha:!0});if(!r)return;const c=Math.min(window.devicePixelRatio||1,1.25),n=Math.round((t.clientWidth||300)*c),h=Math.round((t.clientHeight||200)*c);i.width=Math.max(1,n),i.height=Math.max(1,h);const m={id:e,canvas:i,ctx:r,isDark:l,index:o,totalItems:s,isVisible:!0,hover:0,targetHover:0,width:n,height:h,cachedRect:{normLeft:0,normTop:0,normWidth:1,normHeight:1}};this.subscribers.set(e,m),this.updateSubscriberRect(m),this.intersectionObserver&&this.intersectionObserver.observe(t),this.resizeObserver&&this.resizeObserver.observe(t),d(),this.renderSingleFrame(),this.checkAndStartLoop()}unsubscribe(e,i){this.subscribers.get(e)&&(this.intersectionObserver&&i&&this.intersectionObserver.unobserve(i),this.resizeObserver&&i&&this.resizeObserver.unobserve(i)),this.subscribers.delete(e),this.checkAndStartLoop()}setHover(e,i){const t=this.subscribers.get(e);t&&(t.targetHover=i)}setTheme(e,i){const t=this.subscribers.get(e);t&&(t.isDark=i)}hasVisibleSubscribers(){for(const e of this.subscribers.values())if(e.isVisible)return!0;return!1}checkAndStartLoop(){if(this.prefersReducedMotion){this.renderSingleFrame(),this.stopLoop();return}this.isTabVisible&&this.hasVisibleSubscribers()&&!this.isRunning?this.startLoop():(!this.isTabVisible||!this.hasVisibleSubscribers())&&this.isRunning&&this.stopLoop()}startLoop(){this.isRunning||(this.isRunning=!0,this.animFrameId=requestAnimationFrame(this.renderLoop))}stopLoop(){this.isRunning=!1,this.animFrameId!==null&&(cancelAnimationFrame(this.animFrameId),this.animFrameId=null)}renderSingleFrame(){this.renderFrame(performance.now())}renderFrame(e){const i=(e-this.startTime)*.001%3600,t=this.mouse;t.x+=(t.targetX-t.x)*.08,t.y+=(t.targetY-t.y)*.08,t.active+=(t.targetActive-t.active)*.06,t.velocity*=.94,e-t.lastMoveTime>2500&&(t.targetActive=0);let l=!0;for(const r of this.subscribers.values())if(r.isVisible){l=r.isDark;break}let o=null;if(this.gl&&this.program&&this.masterWebGLCanvas){const r=this.gl;r.useProgram(this.program),r.uniform2f(this.uSecRes,384,384),r.uniform2f(this.uCardOffset,0,0),r.uniform2f(this.uCardSize,384,384),r.uniform1f(this.uTime,i),r.uniform2f(this.uGlobalMouse,t.x,t.y),r.uniform1f(this.uMouseVel,t.velocity),r.uniform1f(this.uMouseActive,t.active),r.uniform1f(this.uHover,0),r.uniform1f(this.uIsDark,l?1:0),r.drawArrays(r.TRIANGLES,0,6),o=this.masterWebGLCanvas}else if(this.ctx2D&&this.master2DCanvas){const r=this.ctx2D,c=i*.35,n=r.createRadialGradient(192+Math.sin(c)*90,192+Math.cos(c*.8)*90,15,192,192,270);l?(n.addColorStop(0,"rgba(168, 85, 247, 0.75)"),n.addColorStop(.4,"rgba(99, 102, 241, 0.65)"),n.addColorStop(.8,"rgba(6, 182, 212, 0.55)"),n.addColorStop(1,"rgba(15, 23, 42, 0.90)")):(n.addColorStop(0,"rgba(147, 51, 234, 0.65)"),n.addColorStop(.4,"rgba(99, 102, 241, 0.55)"),n.addColorStop(.8,"rgba(6, 182, 212, 0.50)"),n.addColorStop(1,"rgba(243, 232, 255, 0.85)")),r.fillStyle=n,r.fillRect(0,0,384,384),o=this.master2DCanvas}const s=384,d=384;this.subscribers.forEach(r=>{if(!r.isVisible)return;r.hover+=(r.targetHover-r.hover)*.1;const c=r.canvas,n=r.ctx,h=r.cachedRect,m=Math.max(0,Math.min(s-10,h.normLeft*s)),p=Math.max(0,Math.min(d-10,h.normTop*d)),x=Math.max(10,Math.min(s-m,h.normWidth*s)),w=Math.max(10,Math.min(d-p,h.normHeight*d));if(o){n.clearRect(0,0,c.width,c.height);try{n.drawImage(o,m,p,x,w,0,0,c.width,c.height)}catch{n.fillStyle=r.isDark?"#0f172a":"#f8fafc",n.fillRect(0,0,c.width,c.height)}}r.hover>.01&&(n.fillStyle=r.isDark?`rgba(168, 85, 247, ${r.hover*.15})`:`rgba(147, 51, 234, ${r.hover*.12})`,n.fillRect(0,0,c.width,c.height))})}}const v=new R,M=({className:u="",isDark:e=!0,index:i=0,totalItems:t=6})=>{const l=f.useRef(null),o=f.useRef(null),s=f.useId(),[d,r]=f.useState(!1);return f.useEffect(()=>{v.setTheme(s,e)},[e,s]),f.useEffect(()=>{const c=l.current,n=o.current;if(!c||!n)return;v.subscribe(s,c,n,e,i,t,()=>r(!0));const h=c.closest(".group"),m=()=>v.setHover(s,1),p=()=>v.setHover(s,0);return h&&(h.addEventListener("pointerenter",m),h.addEventListener("pointerleave",p)),()=>{h&&(h.removeEventListener("pointerenter",m),h.removeEventListener("pointerleave",p)),v.unsubscribe(s,n)}},[s,i,t,e]),a.jsxs("div",{ref:o,"data-card-id":s,className:`absolute inset-0 w-full h-full pointer-events-none overflow-hidden rounded-[inherit] transition-colors duration-500 ${u}`,children:[a.jsx("div",{className:`absolute inset-0 w-full h-full rounded-[inherit] pointer-events-none ${e?"timeline-ambient-mesh-dark":"timeline-ambient-mesh-light"}`}),a.jsx("canvas",{ref:l,"data-card-id":s,className:`w-full h-full block rounded-[inherit] pointer-events-none transition-opacity duration-500 relative z-10 ${d?"opacity-85":"opacity-0"}`})]})},I=()=>{const{isDark:u}=L(),e=k.useRef(null),{scrollYProgress:i}=_({target:e,offset:["start 65%","end 65%"]}),t=y(i,{stiffness:220,damping:28,restDelta:.001}),l=o=>{o.preventDefault();const s=document.getElementById("footer");s?s.scrollIntoView({behavior:"smooth"}):window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})};return a.jsx("section",{id:"experience",className:"pt-24 sm:pt-32 pb-8 sm:pb-12 bg-transparent relative z-10 overflow-hidden font-sans",children:a.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs(b.div,{className:"text-center mb-20 sm:mb-28",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[a.jsx("h2",{className:"text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tight break-words font-sans",children:"Timeline_Logs"}),a.jsx("p",{className:"text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-xl font-medium px-2 leading-relaxed",children:"A chronological trace across quantitative finance, MQL5 architecture, and full-stack software development."})]}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"absolute left-4 md:left-1/2 -translate-x-1/2 top-7 bottom-20 w-0.5 bg-slate-200/80 dark:bg-slate-800/80",children:a.jsx(b.div,{style:{scaleY:t,originY:0},className:"w-full h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 shadow-[0_0_15px_rgba(99,102,241,0.5)] origin-top"})}),a.jsx("div",{ref:e,className:"space-y-16 sm:space-y-24",children:g.map((o,s)=>a.jsx(S,{item:o,index:s,isDark:u},o.id))}),a.jsx(b.div,{id:"experience-scroll-down-indicator",initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.2},className:"pt-10 sm:pt-14 pb-1 flex flex-col items-center justify-center relative z-20",children:a.jsx("a",{id:"scroll-to-footer-btn",href:"#footer",onClick:l,className:"group flex flex-col items-center justify-center focus:outline-none transition-transform duration-300 active:scale-90 cursor-pointer","aria-label":"Scroll down to view footer",children:a.jsx(b.div,{animate:{y:[0,6,0]},transition:{repeat:1/0,duration:1.8,ease:"easeInOut"},className:"w-11 h-11 rounded-full border border-purple-300/80 dark:border-cyan-400/40 bg-white/90 dark:bg-slate-950/70 backdrop-blur-md flex items-center justify-center text-purple-600 dark:text-cyan-400 shadow-lg shadow-purple-500/10 group-hover:border-purple-600 group-hover:text-purple-700 dark:group-hover:border-cyan-400 dark:group-hover:text-cyan-300 group-hover:shadow-[0_0_25px_rgba(147,51,234,0.35)] transition-all duration-300",children:a.jsx(C,{className:"w-5 h-5"})})})})]})]})})},S=({item:u,index:e,isDark:i})=>a.jsxs(b.div,{className:`relative flex flex-col md:flex-row md:justify-between items-start group ${e%2===0?"md:flex-row-reverse":""}`,initial:{opacity:0,x:e%2===0?50:-50},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,type:"spring"},children:[a.jsx("div",{className:"absolute left-4 md:left-1/2 -translate-x-1/2 top-7 md:top-8 w-3.5 h-3.5 rounded-full bg-white dark:bg-white border-[3px] border-purple-600 dark:border-indigo-500 z-20 shadow-[0_0_12px_rgba(147,51,234,0.7)] dark:shadow-[0_0_12px_rgba(99,102,241,0.9)] pointer-events-none"}),a.jsx("div",{className:"hidden md:block w-[45%]"}),a.jsx("div",{className:"w-full md:w-[45%] pl-12 md:pl-0 relative",children:a.jsxs("div",{className:"relative isolate p-6 sm:p-8 rounded-2xl sm:rounded-[2.2rem] bg-white/90 dark:bg-slate-900/90 border border-purple-300/80 dark:border-indigo-500/30 hover:border-purple-500 dark:hover:border-indigo-400/70 transition-all duration-500 group overflow-hidden shadow-xl shadow-purple-900/10 dark:shadow-[0_12px_36px_rgba(0,0,0,0.6)]",children:[a.jsx(M,{isDark:i,index:e,totalItems:g.length,className:"z-0"}),a.jsx("div",{className:"absolute inset-0 bg-white/20 dark:bg-slate-950/45 backdrop-blur-md backdrop-saturate-[160%] z-0 pointer-events-none rounded-2xl sm:rounded-[2.2rem]"}),a.jsx("div",{className:"absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-300/80 dark:via-white/50 to-transparent pointer-events-none z-10"}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-white/30 dark:from-white/[0.04] via-transparent to-transparent pointer-events-none rounded-2xl sm:rounded-[2.2rem] z-0"}),a.jsxs("div",{className:"flex items-center justify-between mb-6 relative z-10",children:[a.jsx("div",{className:"p-3 rounded-2xl bg-gradient-to-br from-purple-600 via-indigo-600 to-pink-500 text-white shadow-lg shadow-purple-600/30 border border-purple-300/40",children:a.jsx(u.icon,{size:20})}),a.jsx("div",{className:"font-mono text-[10px] font-bold text-purple-700 dark:text-cyan-300 bg-white/85 dark:bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-purple-200/80 dark:border-indigo-500/40 shadow-sm",children:u.duration})]}),a.jsx("h3",{className:"font-sans font-black text-slate-900 dark:text-white text-2xl mb-1 tracking-tight relative z-10 drop-shadow-none dark:drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]",children:u.title}),a.jsx("h4",{className:"font-mono text-purple-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6 relative z-10 drop-shadow-none dark:drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]",children:u.companyOrContext}),a.jsx("p",{className:"font-sans text-slate-700 dark:text-slate-200 font-medium text-sm sm:text-base leading-relaxed mb-8 relative z-10 drop-shadow-none dark:drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]",children:u.description}),a.jsx("div",{className:"flex flex-wrap gap-2 relative z-10",children:u.skills.map(t=>a.jsx("span",{className:"font-mono text-[10px] font-bold uppercase tracking-tight text-purple-950 dark:text-slate-100 bg-white/85 dark:bg-slate-900/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-purple-200/80 dark:border-indigo-500/40 shadow-sm group-hover:text-purple-600 dark:group-hover:text-cyan-300 group-hover:border-purple-400/70 dark:group-hover:border-cyan-400/80 transition-all",children:t},t))})]})})]});export{I as default};

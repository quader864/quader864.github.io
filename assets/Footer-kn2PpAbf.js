import{r as s,a as A,j as e,L as w,d as S}from"./vendor-react-Di1KXTZo.js";import{g as r,S as q}from"./vendor-animation-DQYIMQRy.js";import{I as M,J as L,K as B,N as D,O as I,A as C,Q as k,l as G,Y as P}from"./vendor-icons-B64grDdN.js";typeof window<"u"&&r.registerPlugin(q);const _=`
.cinematic-footer-wrapper {
  font-family: inherit;
  -webkit-font-smoothing: antialiased;
  
  --pill-bg-1: rgba(255, 255, 255, 0.04);
  --pill-bg-2: rgba(255, 255, 255, 0.01);
  --pill-shadow: rgba(0, 0, 0, 0.4);
  --pill-highlight: rgba(255, 255, 255, 0.12);
  --pill-inset-shadow: rgba(0, 0, 0, 0.5);
  --pill-border: rgba(255, 255, 255, 0.08);
  
  --pill-bg-1-hover: rgba(255, 255, 255, 0.1);
  --pill-bg-2-hover: rgba(255, 255, 255, 0.04);
  --pill-border-hover: rgba(168, 85, 247, 0.4);
  --pill-shadow-hover: rgba(168, 85, 247, 0.25);
  --pill-highlight-hover: rgba(255, 255, 255, 0.25);
}

.light .cinematic-footer-wrapper,
:root:not(.dark) .cinematic-footer-wrapper {
  --pill-bg-1: rgba(255, 255, 255, 0.85);
  --pill-bg-2: rgba(241, 245, 249, 0.7);
  --pill-shadow: rgba(15, 23, 42, 0.08);
  --pill-highlight: rgba(255, 255, 255, 0.9);
  --pill-inset-shadow: rgba(203, 213, 225, 0.4);
  --pill-border: rgba(226, 232, 240, 0.9);
  
  --pill-bg-1-hover: rgba(255, 255, 255, 0.95);
  --pill-bg-2-hover: rgba(248, 250, 252, 0.9);
  --pill-border-hover: rgba(147, 51, 234, 0.35);
  --pill-shadow-hover: rgba(147, 51, 234, 0.15);
  --pill-highlight-hover: rgba(255, 255, 255, 1);
}

@keyframes footer-breathe {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.45; }
  100% { transform: translate(-50%, -50%) scale(1.12); opacity: 0.8; }
}

@keyframes footer-scroll-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@keyframes footer-heartbeat {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 4px rgba(244, 63, 94, 0.4)); }
  15%, 45% { transform: scale(1.22); filter: drop-shadow(0 0 9px rgba(244, 63, 94, 0.8)); }
  30% { transform: scale(1); }
}

.animate-footer-breathe {
  animation: footer-breathe 8s ease-in-out infinite alternate;
}

.animate-footer-scroll-marquee {
  animation: footer-scroll-marquee 35s linear infinite;
}

.animate-footer-heartbeat {
  animation: footer-heartbeat 2.2s cubic-bezier(0.25, 1, 0.5, 1) infinite;
}

/* Theme-adaptive Grid Background */
.footer-bg-grid {
  background-size: 50px 50px;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 25%, black 75%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 25%, black 75%, transparent);
}

:root:not(.dark) .footer-bg-grid {
  background-image: 
    linear-gradient(to right, rgba(15, 23, 42, 0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(15, 23, 42, 0.04) 1px, transparent 1px);
}

/* Theme-adaptive Aurora Glow */
.footer-aurora {
  background: radial-gradient(
    circle at 50% 50%, 
    rgba(147, 51, 234, 0.18) 0%, 
    rgba(59, 130, 246, 0.12) 35%, 
    rgba(168, 85, 247, 0.04) 55%,
    transparent 72%
  );
}

/* Glass Pill Theming */
.footer-glass-pill {
  background: linear-gradient(145deg, var(--pill-bg-1) 0%, var(--pill-bg-2) 100%);
  box-shadow: 
      0 10px 25px -8px var(--pill-shadow), 
      inset 0 1px 1px var(--pill-highlight), 
      inset 0 -1px 2px var(--pill-inset-shadow);
  border: 1px solid var(--pill-border);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.footer-glass-pill:hover {
  background: linear-gradient(145deg, var(--pill-bg-1-hover) 0%, var(--pill-bg-2-hover) 100%);
  border-color: var(--pill-border-hover);
  box-shadow: 
      0 18px 36px -10px var(--pill-shadow-hover), 
      inset 0 1px 1px var(--pill-highlight-hover);
}

/* Giant Background Text */
.footer-giant-bg-text {
  font-size: clamp(80px, 22vw, 380px);
  line-height: 0.8;
  font-weight: 900;
  letter-spacing: -0.04em;
  color: #334155;
  -webkit-text-stroke: 0;
  background: none;
  -webkit-background-clip: unset;
  background-clip: unset;
  filter: none;
}

:root:not(.dark) .footer-giant-bg-text {
  color: #cbd5e1;
  -webkit-text-stroke: 0;
  background: none;
  -webkit-background-clip: unset;
  background-clip: unset;
  filter: none;
}

/* Metallic Text Glow */
.footer-text-glow {
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.55) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

:root:not(.dark) .footer-text-glow {
  background: linear-gradient(180deg, #0f172a 0%, #334155 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer-bottom-bar {
  will-change: transform, opacity;
}
`,a=S.forwardRef(({children:t,className:i="",as:p="div",...c},x)=>{const m=s.useRef(null),l=x||m,d=s.useRef(!1);return s.useEffect(()=>{d.current="ontouchstart"in window||navigator.maxTouchPoints>0;const o=l.current;if(!o||d.current)return;const f=r.quickTo(o,"x",{duration:.6,ease:"power3.out"}),n=r.quickTo(o,"y",{duration:.6,ease:"power3.out"}),g=u=>{const{clientX:v,clientY:y}=u,{left:j,top:N,width:T,height:E}=o.getBoundingClientRect(),R=v-(j+T/2),z=y-(N+E/2);f(R*.35),n(z*.35)},h=()=>{f(0),n(0)};return o.addEventListener("mousemove",g),o.addEventListener("mouseleave",h),()=>{o.removeEventListener("mousemove",g),o.removeEventListener("mouseleave",h)}},[l]),e.jsx(p,{ref:l,className:`inline-flex items-center justify-center will-change-transform ${i}`,...c,children:t})});a.displayName="MagneticElement";const b=()=>e.jsxs("div",{className:"flex items-center space-x-8 sm:space-x-10 px-4 sm:px-6 shrink-0",children:[e.jsx("span",{className:"hover:text-purple-600 dark:hover:text-purple-400 transition-colors",children:"Web Development"}),e.jsx("span",{className:"text-purple-500/80 text-xs",children:"✦"}),e.jsx("span",{className:"hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors",children:"Financial Engineering & MQL5"}),e.jsx("span",{className:"text-cyan-500/80 text-xs",children:"✦"}),e.jsx("span",{className:"hover:text-purple-600 dark:hover:text-purple-400 transition-colors",children:"Quantitative Algorithms"}),e.jsx("span",{className:"text-purple-500/80 text-xs",children:"✦"}),e.jsx("span",{className:"hover:text-pink-600 dark:hover:text-pink-400 transition-colors",children:"Motion Design & 3D"}),e.jsx("span",{className:"text-pink-500/80 text-xs",children:"✦"}),e.jsx("span",{className:"hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors",children:"Full-Stack Architecture"}),e.jsx("span",{className:"text-indigo-500/80 text-xs",children:"✦"}),e.jsx("span",{className:"hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors",children:"High Performance Engineering"}),e.jsx("span",{className:"text-emerald-500/80 text-xs",children:"✦"})]}),H=()=>{const t=s.useRef(null),i=s.useRef(null),p=s.useRef(null),c=s.useRef(null),x=s.useRef(null),m=s.useRef(null),l=s.useRef(null),d=A(),o=d.pathname==="/car-detailing";s.useEffect(()=>{if(typeof window>"u"||!t.current)return;let n=null;const g=new IntersectionObserver(([h])=>{h.isIntersecting&&!n&&(n=r.context(()=>{const u=r.matchMedia();u.add("(min-width: 768px)",()=>{r.fromTo(i.current,{y:"5vh",scale:.92,opacity:0},{y:"0vh",scale:1,opacity:1,ease:"power1.out",scrollTrigger:{trigger:t.current,start:"top 85%",end:"top 25%",scrub:.5}}),r.fromTo(p.current,{y:-20,opacity:0},{y:0,opacity:1,ease:"power2.out",scrollTrigger:{trigger:t.current,start:"top 85%",end:"top 35%",scrub:.5}}),r.fromTo([c.current,x.current,m.current],{y:25,opacity:0},{y:0,opacity:1,stagger:.08,ease:"power2.out",scrollTrigger:{trigger:t.current,start:"top 80%",end:"top 30%",scrub:.5}}),r.fromTo(l.current,{y:30,opacity:0},{y:0,opacity:1,ease:"power2.out",scrollTrigger:{trigger:t.current,start:"top 75%",end:"top 20%",scrub:.5}})}),u.add("(max-width: 767px)",()=>{r.fromTo(i.current,{y:"4vh",scale:.9,opacity:0},{y:"0vh",scale:1,opacity:1,ease:"power1.out",scrollTrigger:{trigger:t.current,start:"top 85%",end:"top 20%",scrub:.5}}),r.fromTo(p.current,{y:-15,opacity:0},{y:0,opacity:1,ease:"power2.out",scrollTrigger:{trigger:t.current,start:"top 85%",end:"top 30%",scrub:.5}}),r.fromTo([c.current,x.current,m.current],{y:20,opacity:0},{y:0,opacity:1,stagger:.08,ease:"power2.out",scrollTrigger:{trigger:t.current,start:"top 85%",end:"top 25%",scrub:.5}}),r.fromTo(l.current,{y:25,opacity:0},{y:0,opacity:1,ease:"power2.out",scrollTrigger:{trigger:t.current,start:"top 80%",end:"top 15%",scrub:.5}})})},t))},{rootMargin:"300px"});return g.observe(t.current),()=>{g.disconnect(),n&&n.revert()}},[d.pathname]);const f=()=>{window.scrollTo({top:0,behavior:"smooth"})};return e.jsxs(e.Fragment,{children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:_}}),e.jsx("div",{ref:t,id:"footer",className:"relative h-[100dvh] min-h-[500px] w-full mt-6 sm:mt-10 md:mt-14",style:{clipPath:"polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"},children:e.jsxs("footer",{className:`fixed bottom-0 left-0 flex flex-col justify-between h-[100dvh] min-h-[500px] w-full overflow-hidden cinematic-footer-wrapper transition-colors duration-500 pt-[calc(4.5rem+env(safe-area-inset-top,0px))] sm:pt-20 md:pt-24 pb-0 ${o?"bg-[#E7EEEA] dark:bg-[#020804] text-[#0A2815] dark:text-[#E7EEEA]":"bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100"}`,children:[e.jsx("div",{className:"footer-aurora absolute left-1/2 top-1/2 h-[60vh] w-[85vw] -translate-x-1/2 -translate-y-1/2 animate-footer-breathe rounded-[50%] blur-[80px] pointer-events-none z-0"}),e.jsx("div",{className:"footer-bg-grid absolute inset-0 z-0 pointer-events-none"}),e.jsx("div",{ref:i,className:"footer-giant-bg-text absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none font-black",children:"QUADER"}),e.jsx("div",{ref:p,id:"footer-skills-marquee",className:"relative z-20 w-full shrink-0 overflow-hidden border-y border-purple-500/25 dark:border-purple-400/20 bg-white/85 dark:bg-slate-950/85 backdrop-blur-md py-1.5 sm:py-2 shadow-sm",children:e.jsxs("div",{className:"flex w-max animate-footer-scroll-marquee text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.18em] md:tracking-[0.25em] text-slate-700 dark:text-slate-300 uppercase select-none",children:[e.jsx(b,{}),e.jsx(b,{}),e.jsx(b,{}),e.jsx(b,{})]})}),e.jsxs("div",{className:"footer-center-content relative z-10 min-h-0 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-1 sm:py-2 w-full max-w-5xl mx-auto",children:[e.jsx("h2",{ref:c,className:"footer-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[57px] font-black footer-text-glow tracking-tight mb-3 sm:mb-5 md:mb-7 lg:mb-9 xl:mb-[44px] text-center leading-tight",style:{fontSize:"clamp(1.75rem, 4.2vw, 57px)",marginBottom:"clamp(1rem, 3.2vw, 44px)"},children:"Ready to collaborate?"}),e.jsx("p",{ref:x,className:"footer-subheading text-xs sm:text-[13px] md:text-sm lg:text-[15px] text-slate-600 dark:text-slate-400 text-center max-w-md mb-2.5 sm:mb-3.5 md:mb-[21px] font-medium px-2 leading-relaxed",style:{fontSize:"clamp(12px, 1.1vw, 15px)",marginBottom:"clamp(10px, 1.6vw, 21px)"},children:"Bridging the gap between software development, financial intelligence, and interactive experiences."}),e.jsxs("div",{ref:m,className:"footer-links-container flex flex-col items-center gap-1.5 sm:gap-2.5 w-full max-w-3xl",children:[e.jsxs("div",{className:"footer-primary-links grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 w-full",children:[e.jsxs(a,{as:"a",href:"https://github.com/quader864",target:"_blank",rel:"noopener noreferrer",className:"footer-glass-pill px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full text-slate-900 dark:text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2 group whitespace-nowrap",children:[e.jsx(M,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-500 group-hover:scale-110 transition-transform shrink-0"}),e.jsx("span",{children:"GitHub"})]}),e.jsxs(a,{as:"a",href:"https://t.me/quader864",target:"_blank",rel:"noopener noreferrer",className:"footer-glass-pill px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full text-slate-900 dark:text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2 group whitespace-nowrap",children:[e.jsx(L,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 group-hover:scale-110 transition-transform shrink-0"}),e.jsx("span",{children:"Telegram"})]}),e.jsxs(a,{as:"a",href:"mailto:contact@quader864.ir",className:"footer-glass-pill px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full text-slate-900 dark:text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2 group whitespace-nowrap",children:[e.jsx(B,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-pink-400 group-hover:scale-110 transition-transform shrink-0"}),e.jsx("span",{children:"Email Me"})]}),e.jsxs(a,{as:"a",href:"https://instagram.com/quader864",target:"_blank",rel:"noopener noreferrer",className:"footer-glass-pill px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full text-slate-900 dark:text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2 group whitespace-nowrap",children:[e.jsx(D,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-400 group-hover:scale-110 transition-transform shrink-0"}),e.jsx("span",{children:"Instagram"})]})]}),e.jsxs("div",{className:"footer-secondary-links grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-1 sm:gap-2 w-full",children:[e.jsxs(a,{as:"a",href:"https://docs.quader864.ir/",target:"_blank",rel:"noopener noreferrer",className:"footer-glass-pill px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-slate-600 dark:text-slate-300 font-semibold text-[10px] sm:text-xs hover:text-purple-500 dark:hover:text-purple-400 flex items-center justify-center gap-1.5 whitespace-nowrap",children:[e.jsx(I,{className:"w-3 h-3 text-purple-400 shrink-0"}),e.jsx("span",{children:"API Docs"})]}),e.jsxs(a,{as:"a",href:"https://stats.uptimerobot.com/ZxYJNSAEw3",target:"_blank",rel:"noopener noreferrer",className:"footer-glass-pill px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-slate-600 dark:text-slate-300 font-semibold text-[10px] sm:text-xs hover:text-emerald-500 dark:hover:text-emerald-400 flex items-center justify-center gap-1.5 whitespace-nowrap",children:[e.jsx(C,{className:"w-3 h-3 text-emerald-400 animate-pulse shrink-0"}),e.jsx("span",{children:"System Status"})]}),e.jsxs(a,{as:w,to:"/about-alireza-kiani",className:"footer-glass-pill px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-slate-600 dark:text-slate-300 font-semibold text-[10px] sm:text-xs hover:text-purple-500 dark:hover:text-purple-400 flex items-center justify-center gap-1.5 whitespace-nowrap",children:[e.jsx(k,{className:"w-3 h-3 text-purple-400 shrink-0"}),e.jsx("span",{children:"About Alireza Kiani"})]}),e.jsxs(a,{as:w,to:"/portfolio",className:"footer-glass-pill px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-slate-600 dark:text-slate-300 font-semibold text-[10px] sm:text-xs hover:text-cyan-500 dark:hover:text-cyan-400 flex items-center justify-center gap-1.5 whitespace-nowrap",children:[e.jsx(k,{className:"w-3 h-3 text-cyan-400 shrink-0"}),e.jsx("span",{children:"Projects"})]}),e.jsxs(a,{as:w,to:"/stability-calculator",className:"footer-glass-pill px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-slate-600 dark:text-slate-300 font-semibold text-[10px] sm:text-xs hover:text-indigo-500 dark:hover:text-indigo-400 flex items-center justify-center gap-1.5 whitespace-nowrap",children:[e.jsx(G,{className:"w-3 h-3 text-indigo-400 shrink-0"}),e.jsx("span",{children:"Stability Calc"})]})]})]})]}),e.jsx("div",{ref:l,className:"footer-bottom-bar relative z-20 w-full shrink-0 py-2 sm:py-2.5 md:py-3 px-3 sm:px-6 md:px-8 border-t border-slate-200/60 dark:border-white/10 bg-slate-50/90 dark:bg-slate-950/90 backdrop-blur-md pb-[max(0.6rem,env(safe-area-inset-bottom))]",children:e.jsxs("div",{className:"max-w-7xl mx-auto flex flex-row items-center justify-between gap-2 sm:gap-4 w-full",children:[e.jsxs("div",{className:"text-slate-500 dark:text-slate-400 text-[9px] sm:text-[11px] md:text-xs font-semibold tracking-wider uppercase text-left truncate max-w-[30%] sm:max-w-none",children:["© ",new Date().getFullYear(),' Alireza "Quader" Kiani']}),e.jsx("div",{className:"flex justify-center flex-shrink-0",children:e.jsxs("div",{className:"footer-glass-pill px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full flex items-center gap-1 sm:gap-2 cursor-default shadow-sm",children:[e.jsx("span",{className:"text-slate-500 dark:text-slate-400 text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wider sm:tracking-widest",children:"Crafted with"}),e.jsx("span",{className:"animate-footer-heartbeat text-xs sm:text-sm text-rose-500",children:"❤"}),e.jsx("span",{className:"text-slate-500 dark:text-slate-400 text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wider sm:tracking-widest",children:"by"}),e.jsx("span",{className:"text-slate-900 dark:text-white font-extrabold text-[10px] sm:text-xs md:text-sm tracking-normal",children:"Quader"})]})}),e.jsx("div",{className:"flex justify-end items-center flex-shrink-0",children:e.jsx(a,{as:"button",onClick:f,title:"Back to Top",className:"w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 p-0 rounded-full footer-glass-pill flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-purple-500 dark:hover:text-purple-400 group cursor-pointer transition-colors shadow-sm",children:e.jsx(P,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover:-translate-y-1 transition-transform duration-300 block m-auto"})})})]})})]})})]})};export{H as CinematicFooter,H as default};

import{c as g,r as s,j as e,X as N}from"./index-jrY0XaDR.js";import{A as f}from"./index-CBdRf8sN.js";import{l as k}from"./proxy-DfXWtG79.js";import{C as z}from"./circle-check-big-DVDSFvTV.js";import{C}from"./circle-alert-CQmtqnQA.js";/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],F=g("pen-line",M);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],$=g("triangle-alert",E),R=({show:o,type:r,message:n,onClose:t})=>(s.useEffect(()=>{if(o){const i=setTimeout(()=>{t()},4e3);return()=>clearTimeout(i)}},[o,t]),e.jsx(f,{children:o&&e.jsxs(k.div,{initial:{opacity:0,y:50,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:20,scale:.9},className:`fixed bottom-6 right-6 z-[100] flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl border ${r==="success"?"bg-white dark:bg-slate-800 border-green-200 dark:border-green-900/50 text-green-700 dark:text-green-400":"bg-white dark:bg-slate-800 border-red-200 dark:border-red-900/50 text-red-700 dark:text-red-400"}`,children:[e.jsx("div",{className:`p-2 rounded-full ${r==="success"?"bg-green-100 dark:bg-green-900/30":"bg-red-100 dark:bg-red-900/30"}`,children:r==="success"?e.jsx(z,{size:20}):e.jsx(C,{size:20})}),e.jsx("p",{className:"font-medium text-sm pr-4",children:n}),e.jsx("button",{onClick:t,className:"p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors ml-auto text-slate-400 hover:text-slate-600 dark:hover:text-slate-200",children:e.jsx(N,{size:16})})]})})),I=({isOpen:o,onClose:r,onConfirm:n,title:t,message:i})=>o?e.jsx(f,{children:e.jsxs("div",{className:"fixed inset-0 z-[100] flex items-center justify-center px-4",children:[e.jsx("div",{className:"absolute inset-0 bg-slate-900/60 backdrop-blur-sm",onClick:r}),e.jsxs(k.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},className:"relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-6 max-w-sm w-full border border-slate-200 dark:border-slate-800",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"p-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full",children:e.jsx($,{size:24})}),e.jsx("h3",{className:"text-xl font-bold text-slate-900 dark:text-white",children:t})]}),e.jsx("p",{className:"text-slate-600 dark:text-slate-300 mb-8 leading-relaxed",children:i}),e.jsxs("div",{className:"flex justify-end gap-3",children:[e.jsx("button",{onClick:r,className:"px-4 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg font-medium transition-colors",children:"Cancel"}),e.jsx("button",{onClick:()=>{n(),r()},className:"px-6 py-2 bg-accent-600 text-white hover:bg-accent-700 rounded-lg font-medium transition-colors shadow-lg shadow-accent-600/20",children:"Confirm"})]})]})]})}):null,L=({content:o,title:r="Content",className:n=""})=>{const t=s.useRef(null),[i,y]=s.useState("100px"),[m,v]=s.useState(()=>document.documentElement.classList.contains("dark"));return s.useEffect(()=>{const a=()=>{const d=document.documentElement.classList.contains("dark");v(d)};a();const l=new MutationObserver(d=>{d.forEach(b=>{b.type==="attributes"&&b.attributeName==="class"&&a()})});return l.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),()=>l.disconnect()},[]),s.useEffect(()=>{var l;const a=(l=t.current)==null?void 0:l.contentDocument;if(a){const w=`
        <!DOCTYPE html>
        <html lang="en" class="${m?"dark":""}">
          <head>
            <meta charset="utf-8">
            <style>${`
        ${m?`
        :root {
          color-scheme: dark;
          --text-primary: #cbd5e1; /* slate-300 */
          --text-headings: #f8fafc; /* slate-50 */
          --bg-code: #1e293b; /* slate-800 */
          --text-code: #e2e8f0; /* slate-200 */
          --link: #818cf8; /* accent-400 */
          --border: #334155; /* slate-700 */
          --blockquote-border: #6366f1; /* accent-500 */
        }
      `:`
        :root {
          color-scheme: light;
          --text-primary: #334155; /* slate-700 */
          --text-headings: #0f172a; /* slate-900 */
          --bg-code: #f1f5f9; /* slate-100 */
          --text-code: #1e293b; /* slate-800 */
          --link: #4f46e5; /* accent-600 */
          --border: #e2e8f0; /* slate-200 */
           --blockquote-border: #4f46e5; /* accent-600 */
        }
      `}
        
        html {
          background-color: transparent !important;
        }
        
        body { 
          background-color: transparent !important;
          font-family: 'Inter', system-ui, -apple-system, sans-serif; 
          color: var(--text-primary);
          line-height: 1.6; 
          margin: 0; 
          padding: 8px; 
          overflow-wrap: break-word;
          overflow-y: hidden;
          transition: color 0.3s ease;
        }

        /* Typography */
        h1, h2, h3, h4, h5, h6 { 
          color: var(--text-headings);
          margin-top: 1.5em; 
          margin-bottom: 0.75em; 
          font-weight: 700; 
          line-height: 1.3;
        }
        h1 { font-size: 1.8em; }
        h2 { font-size: 1.5em; }
        h3 { font-size: 1.25em; }

        p { margin-bottom: 1em; }
        
        a { 
          color: var(--link); 
          text-decoration: none; 
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s;
        }
        a:hover { border-bottom-color: var(--link); }

        ul, ol { margin-left: 20px; margin-bottom: 1em; padding-left: 0; }
        li { margin-bottom: 0.5em; }

        /* Media */
        img { 
          max-width: 100%; 
          height: auto; 
          border-radius: 8px; 
          display: block; 
          margin: 1.5em 0;
        }

        /* Code & Pre */
        pre { 
          background: var(--bg-code); 
          color: var(--text-code); 
          padding: 16px; 
          border-radius: 8px; 
          overflow-x: auto; 
          margin: 1.5em 0;
          font-size: 0.9em;
          border: 1px solid var(--border);
        }
        
        code { 
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          background: var(--bg-code); 
          padding: 2px 5px; 
          border-radius: 4px; 
          font-size: 0.9em;
          color: var(--text-code);
        }
        
        pre code { 
          background: transparent; 
          padding: 0; 
          color: inherit;
        }

        /* Quotes */
        blockquote { 
          border-left: 4px solid var(--blockquote-border); 
          padding-left: 16px; 
          margin: 1.5em 0; 
          font-style: italic; 
          opacity: 0.9;
        }
        
        /* Tables */
        table { width: 100%; border-collapse: collapse; margin: 1.5em 0; }
        th, td { border: 1px solid var(--border); padding: 8px 12px; }
        th { font-weight: 600; text-align: left; }

        /* Scrollbar for pre tags */
        ::-webkit-scrollbar { height: 8px; width: 8px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }
      `}</style>
          </head>
          <body>${o||'<p style="font-style:italic; opacity: 0.6;">No content available.</p>'}</body>
        </html>
      `;a.open(),a.write(w),a.close();let c;const p=new ResizeObserver(()=>{c&&cancelAnimationFrame(c),c=requestAnimationFrame(()=>{if(!t.current||!t.current.contentDocument)return;const u=t.current.contentDocument.body;if(u){const x=u.scrollHeight+20;y(h=>{const j=parseInt(h,10);return Math.abs(x-j)>10?`${x}px`:h})}})});return a.body&&p.observe(a.body),()=>{p.disconnect(),c&&cancelAnimationFrame(c)}}},[o,m]),e.jsx("iframe",{ref:t,title:r,className:`w-full block border-none ${n}`,style:{height:i,transition:"height 0.2s ease"},sandbox:"allow-same-origin allow-scripts allow-popups"})};export{I as C,R as N,F as P,L as S,$ as T};

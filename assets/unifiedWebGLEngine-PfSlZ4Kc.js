class St{constructor(){this.size=64,this.width=64,this.height=64,this.maxAge=56,this.radius=.26*64,this.speed=1/56,this.trail=[],this.last=null,this.activeCardId=null,this.ctx=null,this.needsUpload=!0,this.isCleared=!1,this.canvas=document.createElement("canvas"),this.canvas.width=this.width,this.canvas.height=this.height;try{this.ctx=this.canvas.getContext("2d",{willReadFrequently:!1})}catch{this.ctx=null}this.clear()}clear(){this.ctx&&(this.ctx.fillStyle="#000000",this.ctx.fillRect(0,0,this.width,this.height))}resetForCard(t){this.activeCardId!==t&&(this.activeCardId=t,this.trail.length=0,this.last=null,this.clear(),this.isCleared=!0,this.needsUpload=!0)}update(){if(this.trail.length===0)return this.isCleared?!1:(this.clear(),this.isCleared=!0,this.needsUpload=!0,!0);this.isCleared=!1,this.clear();const t=this.speed;for(let i=this.trail.length-1;i>=0;i--){const e=this.trail[i],s=e.force*t*(1-e.age/this.maxAge);e.x+=e.vx*s,e.y+=e.vy*s,e.age++,e.age>this.maxAge?this.trail.splice(i,1):this.drawPoint(e)}return this.needsUpload=!0,!0}addTouch(t,i){this.activeCardId!==t&&this.resetForCard(t);let e=0,s=0,r=0;const o=this.last;if(o){const a=i.x-o.x,n=i.y-o.y;if(a===0&&n===0)return;const u=a*a+n*n,l=Math.sqrt(u);s=a/l,r=n/l,e=Math.min(u*2e4,2)}this.last={x:i.x,y:i.y},this.trail.length>36&&this.trail.shift(),this.trail.push({x:i.x,y:i.y,age:0,force:e,vx:s,vy:r})}drawPoint(t){if(!this.ctx)return;const i=t.x*this.width,e=(1-t.y)*this.height;let s=1;const r=this.maxAge*.3;if(t.age<r)s=Math.sin(t.age/r*(Math.PI/2));else{const m=1-(t.age-r)/(this.maxAge*.7);s=-m*(m-2)}if(s*=t.force,s<=.005)return;const o=Math.round((t.vx+1)*.5*255),a=Math.round((t.vy+1)*.5*255),n=Math.round(Math.min(1,s)*255),u=this.radius*1.45,l=this.ctx.createRadialGradient(i,e,0,i,e,u),c=Math.min(1,.32*s);l.addColorStop(0,`rgba(${o}, ${a}, ${n}, ${c})`),l.addColorStop(.5,`rgba(${o}, ${a}, ${n}, ${c*.45})`),l.addColorStop(1,`rgba(${o}, ${a}, ${n}, 0)`),this.ctx.fillStyle=l,this.ctx.beginPath(),this.ctx.arc(i,e,u,0,Math.PI*2),this.ctx.fill()}}const dt=`
  attribute vec2 aPosition;
  varying vec2 vUv;
  void main() {
    vUv = aPosition * 0.5 + 0.5;
    gl_Position = vec4(aPosition, 0.0, 1.0);
  }
`,At=`
  attribute vec2 aPos;
  attribute float aSize;
  attribute vec3 aColor;
  attribute vec3 aAlphas;

  varying vec3 vColor;
  varying vec3 vAlphas;

  void main() {
    vColor = aColor;
    vAlphas = aAlphas;
    gl_Position = vec4(aPos, 0.0, 1.0);
    gl_PointSize = aSize;
  }
`,Rt=`
  precision mediump float;
  varying vec3 vColor;
  varying vec3 vAlphas;
  uniform float uIsDark;

  void main() {
    vec2 cxy = 2.0 * gl_PointCoord - 1.0;
    float dist = length(cxy);
    if (dist > 1.0) discard;

    // 1. Smooth radial outer halo
    float haloFalloff = (1.0 - dist) * (1.0 - dist);
    float haloA = vAlphas.y * haloFalloff;

    // 2. Crisp colored middle body (radius ~0.31 of total glow sprite)
    float bodyMask = 1.0 - smoothstep(0.24, 0.34, dist);
    float bodyA = vAlphas.x * bodyMask;

    // 3. Bright white specular center dot (radius ~0.13 of total glow sprite)
    float coreMask = 1.0 - smoothstep(0.08, 0.16, dist);
    float coreA = vAlphas.z * coreMask;

    vec3 coreColor = uIsDark > 0.5 ? vec3(1.0) : mix(vColor, vec3(1.0), 0.85);
    float totalA = clamp(haloA + bodyA + coreA * 0.45, 0.0, 1.0);

    vec3 rgb = mix(vColor, coreColor, coreMask * 0.9);
    gl_FragColor = vec4(rgb * totalA, totalA);
  }
`,Dt=`
  attribute vec2 aPos;
  attribute vec4 aColor;
  varying vec4 vColor;

  void main() {
    vColor = aColor;
    gl_Position = vec4(aPos, 0.0, 1.0);
  }
`,Et=`
  precision mediump float;
  varying vec4 vColor;

  void main() {
    gl_FragColor = vec4(vColor.rgb * vColor.a, vColor.a);
  }
`,Lt=`
  precision mediump float;

  uniform float uTime;
  uniform vec2 uCenters[12];
  uniform float uWeights[12];
  uniform vec4 uRot;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform vec3 uColor3;
  uniform vec3 uColor4;
  uniform vec3 uColor5;
  uniform vec3 uColor6;
  uniform float uIntensity;
  uniform sampler2D uTouchTexture;
  uniform float uHasTouch;
  uniform vec3 uDarkNavy;
  uniform float uGradientSize;
  uniform float uColor1Weight;
  uniform float uColor2Weight;
  uniform float uIsLight;
  uniform vec3 uTimeShift;

  varying vec2 vUv;

  vec3 getGradientColor(vec2 uv) {
    float r = uGradientSize;

    float inf0 = 1.0 - smoothstep(0.0, r, length(uv - uCenters[0]));
    float inf1 = 1.0 - smoothstep(0.0, r, length(uv - uCenters[1]));
    float inf2 = 1.0 - smoothstep(0.0, r, length(uv - uCenters[2]));
    float inf3 = 1.0 - smoothstep(0.0, r, length(uv - uCenters[3]));
    float inf4 = 1.0 - smoothstep(0.0, r, length(uv - uCenters[4]));
    float inf5 = 1.0 - smoothstep(0.0, r, length(uv - uCenters[5]));
    float inf6 = 1.0 - smoothstep(0.0, r, length(uv - uCenters[6]));
    float inf7 = 1.0 - smoothstep(0.0, r, length(uv - uCenters[7]));
    float inf8 = 1.0 - smoothstep(0.0, r, length(uv - uCenters[8]));
    float inf9 = 1.0 - smoothstep(0.0, r, length(uv - uCenters[9]));
    float inf10 = 1.0 - smoothstep(0.0, r, length(uv - uCenters[10]));
    float inf11 = 1.0 - smoothstep(0.0, r, length(uv - uCenters[11]));

    vec2 centeredUv = uv - 0.5;
    vec2 rotatedUv1 = vec2(
      centeredUv.x * uRot.x - centeredUv.y * uRot.y,
      centeredUv.x * uRot.y + centeredUv.y * uRot.x
    );
    vec2 rotatedUv2 = vec2(
      centeredUv.x * uRot.z - centeredUv.y * uRot.w,
      centeredUv.x * uRot.w + centeredUv.y * uRot.z
    );

    float radialInfluence1 = 1.0 - smoothstep(0.0, 0.8, length(rotatedUv1));
    float radialInfluence2 = 1.0 - smoothstep(0.0, 0.8, length(rotatedUv2));

    vec3 color = vec3(0.0);
    color += uColor1 * (inf0 * uWeights[0] + inf6 * uWeights[6]);
    color += uColor2 * (inf1 * uWeights[1] + inf7 * uWeights[7]);
    color += uColor3 * (inf2 * uWeights[2] + inf8 * uWeights[8]);
    color += uColor4 * (inf3 * uWeights[3] + inf9 * uWeights[9]);
    color += uColor5 * (inf4 * uWeights[4] + inf10 * uWeights[10]);
    color += uColor6 * (inf5 * uWeights[5] + inf11 * uWeights[11]);

    color += mix(uColor1, uColor3, radialInfluence1) * 0.45 * uColor1Weight;
    color += mix(uColor2, uColor4, radialInfluence2) * 0.40 * uColor2Weight;

    if (uIsLight > 0.5) {
      vec3 lightColor = clamp(color * 0.52, vec3(0.0), vec3(1.0));
      float totalInf = clamp(
        (inf0 + inf2 + inf4 + inf6 + inf8 + inf10) * 0.28 + radialInfluence1 * 0.35,
        0.18,
        0.82
      );
      return mix(uDarkNavy, lightColor, totalInf);
    }

    color = clamp(color, vec3(0.0), vec3(1.0)) * uIntensity;

    float luminance = dot(color, vec3(0.299, 0.587, 0.114));
    color = mix(vec3(luminance), color, 1.35);

    float brightness1 = length(color);
    float mixFactor1 = max(brightness1 * 1.2, 0.15);
    color = mix(uDarkNavy, color, mixFactor1);

    float brightness = length(color);
    if (brightness > 1.0) {
      color = color * (1.0 / brightness);
    }

    return color;
  }

  void main() {
    vec2 uv = vUv;

    // Continuous autonomous liquid wave drift so cards visibly flow even when not hovered
    uv.x += sin(uv.y * 4.5 + uTime * 1.6) * 0.035;
    uv.y += cos(uv.x * 4.5 - uTime * 1.4) * 0.035;

    if (uHasTouch > 0.5) {
      vec4 touchTex = texture2D(uTouchTexture, vUv);
      float intensity = touchTex.b;
      if (intensity > 0.004) {
        float vx = -(touchTex.r * 2.0 - 1.0);
        float vy = -(touchTex.g * 2.0 - 1.0);
        uv.x += vx * 0.8 * intensity;
        uv.y += vy * 0.8 * intensity;

        float dist = length(uv - vec2(0.5));
        float ripple = sin(dist * 20.0 - uTime * 3.0) * 0.04 * intensity;
        float wave = sin(dist * 15.0 - uTime * 2.0) * 0.03 * intensity;
        uv += vec2(ripple + wave);
      }
    }

    vec3 color = getGradientColor(uv);
    color += uTimeShift;

    if (uIsLight < 0.5) {
      float brightness2 = length(color);
      float mixFactor2 = max(brightness2 * 1.2, 0.15);
      color = mix(uDarkNavy, color, mixFactor2);

      color = clamp(color, vec3(0.0), vec3(1.0));
      float brightness = length(color);
      if (brightness > 1.0) {
        color = color * (1.0 / brightness);
      }
    } else {
      color = clamp(color, vec3(0.0), vec3(1.0));
    }

    gl_FragColor = vec4(color, 1.0);
  }
`,It=`
  precision mediump float;
  varying vec2 vUv;

  uniform float uTime;
  uniform vec3 uPrimaryColor;
  uniform float uAmplitude;
  uniform float uPulseX;
  uniform float uMode;
  uniform vec2 uMouse;

  float evalWave(float x, float phase, float freq, float amp, float taper) {
    float edge = mix(1.0, max(0.2, sin(x * 3.14159265)), taper);
    float w1 = sin(x * freq + phase) * amp;
    float w2 = cos(x * freq * 2.0 - phase * 0.8) * (amp * 0.45);
    return 0.48 + (w1 + w2) * edge;
  }

  void main() {
    vec2 uv = vUv;
    vec3 col = vec3(0.0);
    float alpha = 0.0;

    float baseDist = abs(uv.y - 0.48);
    float dash = step(0.5, fract(uv.x * 36.0));
    if (baseDist < 0.008) {
      col += vec3(1.0) * (0.06 * dash);
      alpha = max(alpha, 0.06 * dash);
    }

    if (uMode < 0.5) {
      float wy = evalWave(uv.x, uTime, 12.0, uAmplitude, 1.0);
      float dist = abs(uv.y - wy);

      if (uv.y < wy) {
        float fillFactor = clamp((wy - uv.y) / max(0.01, wy), 0.0, 1.0);
        float fillAlpha = (1.0 - fillFactor) * 0.20;
        col += uPrimaryColor * fillAlpha;
        alpha = max(alpha, fillAlpha);
      }

      float lineCore = 1.0 - smoothstep(0.0, 0.024, dist);
      float lineGlow = exp(-dist * 28.0) * 0.45;
      float lineA = clamp(lineCore + lineGlow, 0.0, 1.0);
      col = mix(col, uPrimaryColor, lineA);
      alpha = max(alpha, lineA);

      float pY = evalWave(uPulseX, uTime, 12.0, uAmplitude, 1.0);
      vec2 dPulse = vec2((uv.x - uPulseX) * 4.2, uv.y - pY);
      float pDist = length(dPulse);
      float pHalo = exp(-pDist * 14.0) * 0.55;
      float pCore = 1.0 - smoothstep(0.0, 0.055, pDist);
      col += uPrimaryColor * pHalo + vec3(1.0) * pCore;
      alpha = clamp(alpha + pHalo + pCore, 0.0, 1.0);
    } else {
      float gridX = 1.0 - smoothstep(0.0, 0.015, abs(fract(uv.x * 12.0) - 0.5));
      float gridY = 1.0 - smoothstep(0.0, 0.015, abs(fract(uv.y * 6.0) - 0.5));
      float gridA = max(gridX, gridY) * 0.03;
      col += vec3(1.0) * gridA;
      alpha = max(alpha, gridA);

      float mouseInfl = 0.0;
      if (uMouse.x >= 0.0) {
        float mDist = abs(uv.x - uMouse.x);
        if (mDist < 0.25) {
          float dir = uMouse.y > 0.48 ? 1.0 : -1.0;
          mouseInfl = (1.0 - mDist / 0.25) * 0.09 * sin(mDist * 30.0 - uTime * 3.0) * dir;
        }
      }

      vec3 c0 = vec3(0.925, 0.659, 0.839);
      vec3 c1 = vec3(0.506, 0.549, 0.973);
      vec3 c2 = vec3(0.220, 0.741, 0.973);

      float y0 = evalWave(uv.x, uTime * 1.0, 9.0, 0.15, 0.0) + mouseInfl;
      float y1 = evalWave(uv.x, uTime * 0.7 + 1.05, 14.0, 0.11, 0.0) + mouseInfl * 0.7;
      float y2 = evalWave(uv.x, uTime * 1.3 + 2.10, 20.0, 0.07, 0.0) + mouseInfl * 0.5;

      float d0 = abs(uv.y - y0);
      float d1 = abs(uv.y - y1);
      float d2 = abs(uv.y - y2);

      if (uv.y < y0) { col += c0 * 0.05; alpha = max(alpha, 0.05); }
      if (uv.y < y1) { col += c1 * 0.04; alpha = max(alpha, 0.04); }
      if (uv.y < y2) { col += c2 * 0.03; alpha = max(alpha, 0.03); }

      float a0 = (1.0 - smoothstep(0.0, 0.012, d0)) * 0.8 + exp(-d0 * 40.0) * 0.3;
      float a1 = (1.0 - smoothstep(0.0, 0.010, d1)) * 0.7 + exp(-d1 * 45.0) * 0.25;
      float a2 = (1.0 - smoothstep(0.0, 0.009, d2)) * 0.65 + exp(-d2 * 50.0) * 0.2;

      col += c0 * a0 + c1 * a1 + c2 * a2;
      alpha = clamp(alpha + a0 + a1 + a2, 0.0, 1.0);

      float py0 = evalWave(uPulseX, uTime * 1.0, 9.0, 0.15, 0.0) + mouseInfl;
      vec2 dp = vec2((uv.x - uPulseX) * 3.2, uv.y - py0);
      float pd = length(dp);
      float ph = exp(-pd * 22.0) * 0.6;
      float pc = 1.0 - smoothstep(0.0, 0.025, pd);
      col += c0 * ph + vec3(1.0) * pc;
      alpha = clamp(alpha + ph + pc, 0.0, 1.0);
    }

    gl_FragColor = vec4(col, alpha);
  }
`,Ut=[{base:[.024,.035,.098],c1:[.576,.2,.918],c2:[.031,.047,.141],c3:[.388,.4,.945],c4:[.059,.09,.165],c5:[.024,.714,.831],c6:[.118,.106,.294]},{base:[.024,.035,.098],c1:[.388,.4,.945],c2:[.031,.047,.141],c3:[.659,.333,.969],c4:[.118,.106,.294],c5:[.925,.282,.6],c6:[.031,.047,.141]},{base:[.024,.035,.098],c1:[.133,.827,.933],c2:[.031,.047,.141],c3:[.31,.275,.898],c4:[.059,.09,.165],c5:[.576,.2,.918],c6:[.118,.106,.294]}],Ft=[{base:[.961,.953,1],c1:[.753,.518,.988],c2:[.933,.949,1],c3:[.506,.549,.973],c4:[.914,.835,1],c5:[.404,.91,.976],c6:[.878,.906,1]},{base:[.961,.953,1],c1:[.506,.549,.973],c2:[.933,.949,1],c3:[.753,.518,.988],c4:[.914,.835,1],c5:[.957,.447,.714],c6:[.933,.949,1]},{base:[.961,.953,1],c1:[.404,.91,.976],c2:[.933,.949,1],c3:[.506,.549,.973],c4:[.878,.906,1],c5:[.753,.518,.988],c6:[.914,.835,1]}],kt=[{base:[.012,.047,.039],c1:[.063,.725,.506],c2:[.016,.082,.067],c3:[.204,.827,.6],c4:[.024,.133,.114],c5:[.078,.722,.651],c6:[.02,.165,.129]},{base:[.016,.035,.102],c1:[.231,.51,.965],c2:[.027,.055,.157],c3:[.133,.827,.933],c4:[.051,.094,.212],c5:[.388,.4,.945],c6:[.086,.141,.318]},{base:[.071,.035,.012],c1:[.961,.62,.043],c2:[.118,.059,.016],c3:[.984,.749,.141],c4:[.173,.082,.02],c5:[.976,.451,.086],c6:[.227,.106,.027]},{base:[.078,.016,.035],c1:[.957,.247,.369],c2:[.133,.024,.059],c3:[.984,.443,.522],c4:[.192,.031,.086],c5:[.882,.114,.282],c6:[.247,.039,.114]}],_t=[{base:[.925,.992,.961],c1:[.16,.8,.565],c2:[.855,.98,.922],c3:[.063,.725,.506],c4:[.816,.965,.937],c5:[.125,.788,.71],c6:[.878,.988,.937]},{base:[.937,.965,1],c1:[.345,.62,.98],c2:[.867,.925,.996],c3:[.231,.51,.965],c4:[.855,.941,.996],c5:[.2,.725,.965],c6:[.894,.933,1]},{base:[1,.984,.922],c1:[.984,.718,.118],c2:[.996,.949,.788],c3:[.961,.62,.043],c4:[1,.918,.812],c5:[.976,.522,.18],c6:[.996,.937,.753]},{base:[1,.945,.949],c1:[.984,.412,.502],c2:[1,.886,.902],c3:[.957,.247,.369],c4:[.992,.875,.933],c5:[.91,.235,.549],c6:[1,.871,.89]}],mt={purple:[192/255,132/255,252/255],cyan:[56/255,189/255,248/255],pink:[244/255,114/255,182/255],indigo:[129/255,140/255,248/255]},pt={purple:[147/255,51/255,234/255],cyan:[2/255,132/255,199/255],pink:[219/255,39/255,119/255],indigo:[79/255,70/255,229/255]},K=32,lt=new Float32Array(K+1),nt=new Float32Array(K+1);for(let d=0;d<=K;d++){const t=d/K*Math.PI*2;lt[d]=Math.cos(t),nt[d]=Math.sin(t)}const z=160,B=108,tt=240,$=84,vt=240,Y=112,ot=12,Bt=new Set(["H1","H2","H3","H4","H5","H6","P","SPAN","A","BUTTON","LABEL","LI","CODE","PRE","STRONG","EM","B","I","BLOCKQUOTE","DT","DD","TH","TD"]),Wt=new Set(["INPUT","TEXTAREA","SELECT"]),Z=new WeakMap;function Ht(d){if(!d||!d.tagName)return{liquidSize:34,dotSize:8};const t=d.tagName.toUpperCase();if(t==="BODY"||t==="HTML"||t==="MAIN"||t==="SECTION"||t==="CANVAS"||t==="IFRAME")return{liquidSize:34,dotSize:8};if(Wt.has(t)?d:d.closest?.("input, textarea, select"))return{liquidSize:24,dotSize:6};const e=Z.get(d);if(e)return e;let s=!1;if(d.childNodes&&d.childNodes.length<=6)for(let n=0;n<d.childNodes.length;n++){const u=d.childNodes[n];if(u.nodeType===3&&u.nodeValue&&u.nodeValue.trim().length>0){s=!0;break}}const r=s||Bt.has(t),o=d.closest?.('a, button, [role="button"], .sentiment-card, .filter-chip, .btn-primary, .btn-toggle, summary');if(o){const n=o.getBoundingClientRect();if(n.width>180&&n.height>56){const w={liquidSize:44,dotSize:8.5};return Z.set(d,w),w}const l=(o.ownerDocument?.defaultView||window).getComputedStyle(o);let m=(parseFloat(l.fontSize)||14)*1.4+10;n.height>0&&n.height<=54&&(m=Math.max(m,Math.min(54,n.height*1.05)));const y=Math.max(28,Math.min(64,Math.round(m))),b=y>50?9:8,x={liquidSize:y,dotSize:b};return Z.set(d,x),x}if(r&&t!=="DIV"){const u=(d.ownerDocument?.defaultView||window).getComputedStyle(d),c=(parseFloat(u.fontSize)||16)*1.35+8,m=Math.max(26,Math.min(96,Math.round(c))),y=m>75?10:m>48?9:8,b={liquidSize:m,dotSize:y};return Z.set(d,b),b}const a={liquidSize:34,dotSize:8};return Z.set(d,a),a}function Yt(d){const t=d.replace("#","");return t.length===3?[parseInt(t[0]+t[0],16)/255,parseInt(t[1]+t[1],16)/255,parseInt(t[2]+t[2],16)/255]:t.length===6?[parseInt(t.substring(0,2),16)/255,parseInt(t.substring(2,4),16)/255,parseInt(t.substring(4,6),16)/255]:[.22,.74,.97]}class Vt{constructor(){this.glCanvas=null,this.gl=null,this.particleProgram=null,this.lineProgram=null,this.fluidProgram=null,this.telemetryProgram=null,this.quadBuffer=null,this.particleBuffer=null,this.lineBuffer=null,this.touchTexture=null,this.glTouchTex=null,this.particleLocs=null,this.lineLocs=null,this.fluidUniforms={},this.telemetryUniforms={},this.particleVertexBuf=new Float32Array(576),this.lineVertexBuf=new Float32Array(2048*6),this.activeScreenParticles=[],this.fluidCentersBuf=new Float32Array(24),this.fluidWeightsBuf=new Float32Array(12),this.blendedBase=new Float32Array(3),this.blendedC1=new Float32Array(3),this.blendedC2=new Float32Array(3),this.blendedC3=new Float32Array(3),this.blendedC4=new Float32Array(3),this.blendedC5=new Float32Array(3),this.blendedC6=new Float32Array(3),this.lastRipplePulseTime=0,this.particleDisplayCanvas=null,this.particleDisplayCtx=null,this.isParticleVisible=!1,this.particles=[],this.particleCount=0,this.baseSphereRadius=800,this.rotX=0,this.rotY=0,this.shockwaves=[],this.cursorClient=null,this.cursorVisible=!1,this.cursorTargetPos={x:-200,y:-200},this.cursorLiquidPos={x:-200,y:-200},this.cursorTrailPos={x:-200,y:-200},this.cursorDotPos={x:-200,y:-200},this.cursorDesiredSize=34,this.cursorCurrentSize=34,this.cursorDesiredDot=8,this.cursorCurrentDot=8,this.cursorWobblePhase=0,this.cursorIsClicking=!1,this.cursorLastHoveredEl=null,this.cursorPendingHoverEl=null,this.fluidClients=new Map,this.telemetryClients=new Map,this.usedSlots=new Set,this.vpWidth=typeof window<"u"?window.innerWidth:1280,this.vpHeight=typeof window<"u"?window.innerHeight:800,this.particlePixelW=1280,this.particlePixelH=800,this.dpr=1,this.isMobile=!1,this.lowPowerDevice=!1,this.isDark=!0,this.prefersReducedMotion=!1,this.pendingMouse={x:-3e3,y:-3e3,active:!1,timestamp:0,hasUpdate:!1},this.mouseState={x:-3e3,y:-3e3,vx:0,vy:0,lastX:-3e3,lastY:-3e3,lastTime:0,active:!1},this.scrollY=0,this.lastScrollY=0,this.scrollVelocity=0,this.rafId=null,this.startTime=typeof performance<"u"?performance.now():0,this.lastParticleTickTime=0,this.lastCursorTickTime=0,this.lastUserActiveTime=0,this.hasUserInteracted=!1,this.listenersBound=!1,this.tick=t=>{if(typeof document<"u"&&document.hidden){this.rafId=null;return}if(this.pendingMouse.hasUpdate){const l=Math.max(8,this.pendingMouse.timestamp-this.mouseState.lastTime);this.mouseState.vx=(this.pendingMouse.x-this.mouseState.lastX)/l*16.6,this.mouseState.vy=(this.pendingMouse.y-this.mouseState.lastY)/l*16.6,this.mouseState.x=this.pendingMouse.x,this.mouseState.y=this.pendingMouse.y,this.mouseState.lastX=this.pendingMouse.x,this.mouseState.lastY=this.pendingMouse.y,this.mouseState.lastTime=this.pendingMouse.timestamp,this.mouseState.active=this.pendingMouse.active,this.pendingMouse.hasUpdate=!1}let i=!1;this.cursorClient&&this.cursorVisible&&(i=this.stepLiquidCursor(t));let e=!1;const s=[];for(const l of this.fluidClients.values()){if(!l.isVisible)continue;e=!0;const c=!!l.stabilityMode&&Math.abs((l.targetRate??25)-(l.currentRate??25))>.1,y=l.isHovered||c||this.touchTexture!==null&&this.touchTexture.activeCardId===l.id&&this.touchTexture.trail.length>0?15.5:29.5;t-l.lastAmbientRender>=y&&(l.lastAmbientRender=t,s.push(l))}let r=!1;const o=[];for(const l of this.telemetryClients.values()){if(!l.isVisible)continue;r=!0;const c=l.mouseActive?16:30;t-l.lastRenderTime>=c&&(l.lastRenderTime=t,o.push(l))}const a=this.isParticleVisible&&!!this.particleDisplayCanvas&&!this.prefersReducedMotion;let n=!1,u=1;if(a){const l=t-this.lastUserActiveTime,m=this.mouseState.active||Math.abs(this.scrollVelocity)>.08||this.shockwaves.length>0||l<2500?1e3/60:1e3/(this.lowPowerDevice?30:36),y=t-this.lastParticleTickTime;y>=m-1.2&&(u=Math.min(2.2,Math.max(.5,y/16.67)),this.lastParticleTickTime=t,n=!0)}s.length>0&&this.touchTexture&&this.gl&&this.glTouchTex&&(this.touchTexture.update(),this.touchTexture.needsUpload&&(this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.glTouchTex),this.gl.texSubImage2D(this.gl.TEXTURE_2D,0,0,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,this.touchTexture.canvas),this.touchTexture.needsUpload=!1));for(let l=0;l<s.length;l++)this.drawFluidSlot(s[l],t);for(let l=0;l<o.length;l++)this.drawTelemetrySlot(o[l]);n&&this.drawParticleZone(t,u);for(let l=0;l<s.length;l++)this.blitFluidSlot(s[l]);for(let l=0;l<o.length;l++)this.blitTelemetrySlot(o[l]);n&&this.blitParticleZone(),a||e||r||i?this.rafId=requestAnimationFrame(this.tick):this.rafId=null},typeof window<"u"&&this.initGlobalListeners()}renderStaticSnapshot(){const t=performance.now();for(const i of this.fluidClients.values())i.isVisible&&this.drawFluidSlot(i,t);for(const i of this.telemetryClients.values())i.isVisible&&this.drawTelemetrySlot(i);this.isParticleVisible&&this.particleDisplayCanvas&&this.drawParticleZone(t,1);for(const i of this.fluidClients.values())i.isVisible&&this.blitFluidSlot(i);for(const i of this.telemetryClients.values())i.isVisible&&this.blitTelemetrySlot(i);this.isParticleVisible&&this.particleDisplayCanvas&&this.blitParticleZone()}allocateSlot(){for(let t=0;t<ot;t++)if(!this.usedSlots.has(t))return this.usedSlots.add(t),t;return 0}releaseSlot(t){typeof t=="number"&&this.usedSlots.delete(t)}initGlobalListeners(){if(this.listenersBound||typeof window>"u")return;this.listenersBound=!0,window.__quaderEngine=this,this.lowPowerDevice=typeof navigator<"u"&&((navigator.hardwareConcurrency||4)<=4||!!(navigator.deviceMemory&&navigator.deviceMemory<=4)),this.prefersReducedMotion=!!window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches,this.isDark=document.documentElement.classList.contains("dark"),this.scrollY=window.scrollY,this.lastScrollY=window.scrollY;const t=()=>{this.hasUserInteracted||(this.hasUserInteracted=!0,this.lastUserActiveTime=performance.now(),this.wakeLoop())};window.addEventListener("wheel",t,{passive:!0,once:!0}),window.addEventListener("touchstart",t,{passive:!0,once:!0}),window.addEventListener("keydown",t,{passive:!0,once:!0});const i=()=>{const a=document.documentElement.classList.contains("dark");a!==this.isDark&&(this.isDark=a,this.hasUserInteracted?this.wakeLoop():this.renderStaticSnapshot())};new MutationObserver(i).observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),window.addEventListener("theme-change",i),window.addEventListener("storage",i);let s=null;const r=()=>{s===null&&(s=requestAnimationFrame(()=>{s=null,this.updateViewportDimensions(),this.hasUserInteracted?this.wakeLoop():this.renderStaticSnapshot()}))};window.addEventListener("resize",r,{passive:!0}),window.addEventListener("scroll",()=>{this.hasUserInteracted=!0,this.scrollY=window.scrollY,this.wakeLoop()},{passive:!0}),window.addEventListener("pointermove",a=>{this.hasUserInteracted=!0;const n=performance.now();this.pendingMouse.x=a.clientX,this.pendingMouse.y=a.clientY,this.pendingMouse.active=!0,this.pendingMouse.timestamp=n,this.pendingMouse.hasUpdate=!0,this.lastUserActiveTime=n,this.cursorClient&&(this.cursorTargetPos.x=a.clientX,this.cursorTargetPos.y=a.clientY,this.cursorPendingHoverEl=a.target,this.cursorVisible||(this.cursorVisible=!0,this.cursorClient.onVisibilityChange(!0))),this.wakeLoop()},{passive:!0,capture:!0}),window.addEventListener("touchmove",a=>{if(!a.touches.length)return;this.hasUserInteracted=!0;const n=a.touches[0],u=performance.now();this.pendingMouse.x=n.clientX,this.pendingMouse.y=n.clientY,this.pendingMouse.active=!0,this.pendingMouse.timestamp=u,this.pendingMouse.hasUpdate=!0,this.lastUserActiveTime=u,this.wakeLoop()},{passive:!0}),window.addEventListener("pointerdown",a=>{this.hasUserInteracted=!0,this.lastUserActiveTime=performance.now(),this.isParticleVisible&&this.shockwaves.push({x:a.clientX,y:a.clientY,radius:10,maxRadius:this.isMobile?200:270,strength:24,life:1}),this.cursorClient&&(this.cursorIsClicking=!0,this.cursorClient.onSpawnDomRipple(a.clientX,a.clientY,Math.max(18,this.cursorCurrentSize*.5))),this.wakeLoop()},{passive:!0,capture:!0});const o=()=>{this.cursorClient&&this.cursorIsClicking&&(this.cursorIsClicking=!1,this.wakeLoop())};window.addEventListener("pointerup",o,{passive:!0,capture:!0}),window.addEventListener("pointercancel",o,{passive:!0,capture:!0}),window.addEventListener("dragend",o,{passive:!0,capture:!0}),window.addEventListener("blur",o,{passive:!0}),document.addEventListener("mouseover",a=>{this.cursorClient&&(this.cursorPendingHoverEl=a.target,this.wakeLoop())},{passive:!0}),document.addEventListener("mouseleave",()=>{this.pendingMouse.active=!1,this.mouseState.active=!1,this.cursorClient&&this.cursorVisible&&(this.cursorVisible=!1,this.cursorClient.onVisibilityChange(!1),this.cursorLastHoveredEl=null,this.cursorPendingHoverEl=null)}),document.addEventListener("visibilitychange",()=>{document.hidden?this.stopLoop():this.wakeLoop()})}handleIframePointerMove(t,i,e){this.hasUserInteracted=!0;const s=performance.now();this.pendingMouse.x=t,this.pendingMouse.y=i,this.pendingMouse.active=!0,this.pendingMouse.timestamp=s,this.pendingMouse.hasUpdate=!0,this.lastUserActiveTime=s,this.cursorClient&&(this.cursorTargetPos.x=t,this.cursorTargetPos.y=i,this.cursorPendingHoverEl=e,this.cursorVisible||(this.cursorVisible=!0,this.cursorClient.onVisibilityChange(!0))),this.wakeLoop()}handleIframePointerDown(t,i){this.hasUserInteracted=!0,this.lastUserActiveTime=performance.now(),this.isParticleVisible&&this.shockwaves.push({x:t,y:i,radius:10,maxRadius:this.isMobile?200:270,strength:24,life:1}),this.cursorClient&&(this.cursorIsClicking=!0,this.cursorClient.onSpawnDomRipple(t,i,Math.max(18,this.cursorCurrentSize*.5))),this.wakeLoop()}handleIframePointerUp(){this.cursorClient&&(this.cursorIsClicking=!1,this.wakeLoop())}ensureWebGL(){if(this.gl&&!this.gl.isContextLost())return!0;if(typeof document>"u")return!1;try{if(!this.glCanvas){const r=document.createElement("canvas");r.addEventListener("webglcontextlost",o=>{o.preventDefault(),this.stopLoop()}),r.addEventListener("webglcontextrestored",()=>{this.gl=null,this.ensureWebGL(),this.wakeLoop()}),this.glCanvas=r}this.glCanvas.width=Math.max(320,this.particlePixelW+vt),this.glCanvas.height=Math.max(320,Math.max(this.particlePixelH,ot*Y));const t=this.glCanvas.getContext("webgl",{alpha:!0,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!1})||this.glCanvas.getContext("experimental-webgl");if(!t)return!1;this.gl=t,this.updateViewportDimensions();const i=(r,o)=>{const a=t.createShader(r);return a?(t.shaderSource(a,o),t.compileShader(a),t.getShaderParameter(a,t.COMPILE_STATUS)?a:(t.deleteShader(a),null)):null},e=(r,o)=>{const a=i(t.VERTEX_SHADER,r),n=i(t.FRAGMENT_SHADER,o);if(!a||!n)return null;const u=t.createProgram();return!u||(t.attachShader(u,a),t.attachShader(u,n),t.linkProgram(u),!t.getProgramParameter(u,t.LINK_STATUS))?null:u};if(this.particleProgram=e(At,Rt),this.particleProgram&&(this.particleLocs={aPos:t.getAttribLocation(this.particleProgram,"aPos"),aSize:t.getAttribLocation(this.particleProgram,"aSize"),aColor:t.getAttribLocation(this.particleProgram,"aColor"),aAlphas:t.getAttribLocation(this.particleProgram,"aAlphas"),uIsDark:t.getUniformLocation(this.particleProgram,"uIsDark")}),this.lineProgram=e(Dt,Et),this.lineProgram&&(this.lineLocs={aPos:t.getAttribLocation(this.lineProgram,"aPos"),aColor:t.getAttribLocation(this.lineProgram,"aColor")}),this.fluidProgram=e(dt,Lt),this.fluidProgram){t.useProgram(this.fluidProgram);const r=["uTime","uCenters[0]","uWeights[0]","uRot","uColor1","uColor2","uColor3","uColor4","uColor5","uColor6","uIntensity","uTouchTexture","uHasTouch","uDarkNavy","uGradientSize","uColor1Weight","uColor2Weight","uIsLight","uTimeShift"];for(const o of r)this.fluidUniforms[o]=t.getUniformLocation(this.fluidProgram,o);this.fluidUniforms.aPosition=t.getAttribLocation(this.fluidProgram,"aPosition"),t.uniform1f(this.fluidUniforms.uIntensity,1.8),t.uniform1f(this.fluidUniforms.uGradientSize,.45),t.uniform1f(this.fluidUniforms.uColor1Weight,.5),t.uniform1f(this.fluidUniforms.uColor2Weight,1.8),t.uniform1i(this.fluidUniforms.uTouchTexture,0)}if(this.telemetryProgram=e(dt,It),this.telemetryProgram){t.useProgram(this.telemetryProgram);const r=["uTime","uPrimaryColor","uAmplitude","uPulseX","uMode","uMouse"];for(const o of r)this.telemetryUniforms[o]=t.getUniformLocation(this.telemetryProgram,o);this.telemetryUniforms.aPosition=t.getAttribLocation(this.telemetryProgram,"aPosition")}this.quadBuffer=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.quadBuffer),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),this.particleBuffer=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.particleBuffer),t.bufferData(t.ARRAY_BUFFER,this.particleVertexBuf.byteLength,t.DYNAMIC_DRAW),this.lineBuffer=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.lineBuffer),t.bufferData(t.ARRAY_BUFFER,this.lineVertexBuf.byteLength,t.DYNAMIC_DRAW),this.touchTexture||(this.touchTexture=new St);const s=t.createTexture();return t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,s),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,this.touchTexture.canvas),this.glTouchTex=s,!0}catch{return this.gl=null,!1}}updateViewportDimensions(){if(!(typeof window>"u")){if(this.vpWidth=Math.max(320,window.innerWidth),this.vpHeight=Math.max(320,window.innerHeight),this.isMobile=this.vpWidth<768,this.dpr=1,this.particlePixelW=Math.floor(this.vpWidth*this.dpr),this.particlePixelH=Math.floor(this.vpHeight*this.dpr),this.glCanvas){const t=this.particlePixelW+vt,i=Math.max(this.particlePixelH,ot*Y);(this.glCanvas.width!==t||this.glCanvas.height!==i)&&(this.glCanvas.width=t,this.glCanvas.height=i)}this.particleDisplayCanvas&&((this.particleDisplayCanvas.width!==this.particlePixelW||this.particleDisplayCanvas.height!==this.particlePixelH)&&(this.particleDisplayCanvas.width=this.particlePixelW,this.particleDisplayCanvas.height=this.particlePixelH),this.particleDisplayCanvas.style.width=`${this.vpWidth}px`,this.particleDisplayCanvas.style.height=`${this.vpHeight}px`),this.particles.length===0?this.initParticles():this.baseSphereRadius=Math.max(this.vpWidth,this.vpHeight)*.72}}initParticles(){const t=this.isMobile?this.lowPowerDevice?28:36:this.lowPowerDevice?46:58;this.particleCount=t,this.baseSphereRadius=Math.max(this.vpWidth,this.vpHeight)*.72;const i=["purple","purple","cyan","indigo","pink"];this.particles=[];for(let e=0;e<t;e++){const s=Math.random()*2*Math.PI,r=Math.acos(Math.random()*2-1),o=this.baseSphereRadius*(.2+Math.random()*.8);this.particles.push({x:o*Math.sin(r)*Math.cos(s),y:o*Math.sin(r)*Math.sin(s),z:o*Math.cos(r),baseRadius:Math.random()*1.6+1.1,phase:Math.random()*Math.PI*2,blinkSpeed:Math.random()*.002+.001,sizeMult:Math.random()*.7+.8,offX:0,offY:0,vx:0,vy:0,glowIntensity:0,colorType:i[Math.floor(Math.random()*i.length)]})}}mountParticleBackground(t){const i=this.ensureWebGL();if(this.particleDisplayCanvas=t,this.particleDisplayCtx=t.getContext("2d",{alpha:!0,willReadFrequently:!1}),this.isParticleVisible=!0,this.updateViewportDimensions(),i&&this.gl){const e=performance.now();this.drawParticleZone(e,1),this.blitParticleZone(),this.wakeLoop()}else this.render2DParticleFallback();return()=>{this.particleDisplayCanvas===t&&(this.particleDisplayCanvas=null,this.particleDisplayCtx=null,this.isParticleVisible=!1),this.checkAndHibernate()}}setParticleVisibility(t){this.isParticleVisible=t,t?this.wakeLoop():this.checkAndHibernate()}registerLiquidCursor(t){return this.cursorClient=t,this.wakeLoop(),()=>{this.cursorClient===t&&(this.cursorClient=null),this.checkAndHibernate()}}registerFluidCard(t){this.ensureWebGL(),t.slot=this.allocateSlot(),t.stabilityMode&&typeof t.currentRate!="number"&&(t.currentRate=t.targetRate??25),this.fluidClients.set(t.id,t);const i=performance.now();return t.lastAmbientRender=i,this.drawFluidSlot(t,i),this.blitFluidSlot(t),this.wakeLoop(),()=>{this.releaseSlot(t.slot),this.fluidClients.delete(t.id),this.checkAndHibernate()}}refreshFluidCardTheme(t,i){const e=this.fluidClients.get(t);if(!e)return;e.isDark=i;const s=performance.now();this.drawFluidSlot(e,s),this.blitFluidSlot(e)}setFluidCardStabilityRate(t,i,e=!1){const s=this.fluidClients.get(t);if(!s)return;const r=Math.max(0,Math.min(100,Number.isFinite(i)?i:0)),o=Math.abs(r-(s.targetRate??r));if(s.targetRate=r,s.stabilityMode=!0,e&&o>.25&&this.touchTexture){const a=performance.now();if(a-this.lastRipplePulseTime>65){this.lastRipplePulseTime=a;const n=a*.004%(Math.PI*2),u=.14+Math.min(.22,o*.004),l=.5+Math.cos(n)*u,c=.5+Math.sin(n)*u;this.touchTexture.addTouch(t,{x:.5,y:.5}),this.touchTexture.addTouch(t,{x:Math.max(.05,Math.min(.95,l)),y:Math.max(.05,Math.min(.95,c))})}}this.lastUserActiveTime=performance.now(),this.wakeLoop()}broadcastStabilityRate(t,i=!0){const e=Math.max(0,Math.min(100,Number.isFinite(t)?t:0));let s=!1;for(const r of this.fluidClients.values())r.stabilityMode&&(this.setFluidCardStabilityRate(r.id,e,i&&!s),s=!0)}addFluidTouch(t,i){this.touchTexture&&(this.touchTexture.addTouch(t,i),this.lastUserActiveTime=performance.now(),this.wakeLoop())}clearFluidHover(t){const i=this.fluidClients.get(t);i&&(i.isHovered=!1),this.touchTexture&&this.touchTexture.activeCardId===t&&(this.touchTexture.last=null)}registerTelemetryWave(t){this.ensureWebGL(),t.slot=this.allocateSlot(),this.telemetryClients.set(t.id,t);const i=performance.now();return t.lastRenderTime=i,this.drawTelemetrySlot(t),this.blitTelemetrySlot(t),this.wakeLoop(),()=>{this.releaseSlot(t.slot),this.telemetryClients.delete(t.id),this.checkAndHibernate()}}updateTelemetryWave(t,i,e,s){const r=this.telemetryClients.get(t);r&&(r.colorRgb=i,r.speed=e,r.amplitude=s,this.wakeLoop())}wakeLoop(){if(this.hasUserInteracted&&!(typeof document<"u"&&document.hidden)&&this.rafId===null){const t=performance.now();this.lastParticleTickTime=t,this.lastCursorTickTime=t,this.rafId=requestAnimationFrame(this.tick)}}stopLoop(){this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null)}hasActiveWork(){if(typeof document<"u"&&document.hidden)return!1;if(this.isParticleVisible&&this.particleDisplayCanvas&&!this.prefersReducedMotion||this.cursorClient&&this.cursorVisible)return!0;for(const t of this.fluidClients.values())if(t.isVisible)return!0;for(const t of this.telemetryClients.values())if(t.isVisible)return!0;return!1}checkAndHibernate(){this.hasActiveWork()||this.stopLoop()}stepLiquidCursor(t){if(!this.cursorClient)return!1;const i=Math.min(32,Math.max(8,t-this.lastCursorTickTime));this.lastCursorTickTime=t;const e=i/16.67;if(this.cursorPendingHoverEl&&this.cursorPendingHoverEl!==this.cursorLastHoveredEl){this.cursorLastHoveredEl=this.cursorPendingHoverEl;const H=Ht(this.cursorPendingHoverEl);this.cursorDesiredSize=H.liquidSize,this.cursorDesiredDot=H.dotSize}this.cursorPendingHoverEl=null,this.cursorDotPos.x=this.cursorTargetPos.x,this.cursorDotPos.y=this.cursorTargetPos.y;const s=this.cursorTargetPos.x-this.cursorLiquidPos.x,r=this.cursorTargetPos.y-this.cursorLiquidPos.y,o=1-Math.pow(1-.18,e);this.cursorLiquidPos.x+=s*o,this.cursorLiquidPos.y+=r*o;const a=this.cursorLiquidPos.x-this.cursorTrailPos.x,n=this.cursorLiquidPos.y-this.cursorTrailPos.y,u=1-Math.pow(1-.12,e);this.cursorTrailPos.x+=a*u,this.cursorTrailPos.y+=n*u;const l=this.cursorDesiredSize-this.cursorCurrentSize,c=this.cursorDesiredDot-this.cursorCurrentDot;this.cursorCurrentSize+=l*(1-Math.pow(1-.16,e)),this.cursorCurrentDot+=c*(1-Math.pow(1-.2,e));const m=Math.hypot(s,r),y=Math.hypot(a,n);m>.2&&(this.cursorWobblePhase+=i*.005);const b=Math.atan2(r,s),x=this.cursorCurrentSize>130,w=x?.12:.45,f=Math.min(m*(x?.002:.0075),w),v=m>.2?Math.sin(this.cursorWobblePhase)*(x?.008:.025):0,et=this.cursorIsClicking?x?.92:.78:1,W=this.cursorCurrentSize/100*et,Q=(1+f+v)*W,N=(1-f*.5-v)*W;if(this.cursorClient.liquidCircleEl&&(this.cursorClient.liquidCircleEl.style.transform=`translate3d(${this.cursorLiquidPos.x}px, ${this.cursorLiquidPos.y}px, 0) translate(-50%, -50%) rotate(${b}rad) scale(${Q}, ${N})`),this.cursorClient.trailDotEl&&(this.cursorClient.trailDotEl.style.transform=`translate3d(${this.cursorTrailPos.x}px, ${this.cursorTrailPos.y}px, 0) translate(-50%, -50%)`),this.cursorClient.precisionDotEl){const H=this.cursorCurrentDot/10;this.cursorClient.precisionDotEl.style.transform=`translate3d(${this.cursorDotPos.x}px, ${this.cursorDotPos.y}px, 0) translate(-50%, -50%) scale(${H})`}return!(m<.05&&y<.05&&Math.abs(l)<.08&&Math.abs(c)<.05&&!this.cursorIsClicking)}precomputeFluidUniforms(t,i,e){const s=t*1.85,r=this.fluidCentersBuf,o=this.fluidWeightsBuf;r[0]=.5+Math.sin(s*.45)*.42,r[1]=.5+Math.cos(s*.55)*.42,r[2]=.5+Math.cos(s*.65)*.48,r[3]=.5+Math.sin(s*.5)*.48,r[4]=.5+Math.sin(s*.4)*.45,r[5]=.5+Math.cos(s*.6)*.45,r[6]=.5+Math.cos(s*.55)*.42,r[7]=.5+Math.sin(s*.45)*.42,r[8]=.5+Math.sin(s*.75)*.38,r[9]=.5+Math.cos(s*.65)*.38,r[10]=.5+Math.cos(s*.5)*.48,r[11]=.5+Math.sin(s*.7)*.48,r[12]=.5+Math.sin(s*.6)*.4,r[13]=.5+Math.cos(s*.52)*.44,r[14]=.5+Math.cos(s*.7)*.38,r[15]=.5+Math.sin(s*.56)*.45,r[16]=.5+Math.sin(s*.46)*.42,r[17]=.5+Math.cos(s*.62)*.4,r[18]=.5+Math.cos(s*.52)*.39,r[19]=.5+Math.sin(s*.66)*.44,r[20]=.5+Math.sin(s*.72)*.36,r[21]=.5+Math.cos(s*.48)*.46,r[22]=.5+Math.cos(s*.42)*.41,r[23]=.5+Math.sin(s*.6)*.43,o[0]=(.55+.45*Math.sin(s))*i,o[1]=(.55+.45*Math.cos(s*1.2))*e,o[2]=(.55+.45*Math.sin(s*.8))*i,o[3]=(.55+.45*Math.cos(s*1.3))*e,o[4]=(.55+.45*Math.sin(s*1.1))*i,o[5]=(.55+.45*Math.cos(s*.9))*e,o[6]=(.55+.45*Math.sin(s*1.4))*i,o[7]=(.55+.45*Math.cos(s*1.5))*e,o[8]=(.55+.45*Math.sin(s*1.6))*i,o[9]=(.55+.45*Math.cos(s*1.7))*e,o[10]=(.55+.45*Math.sin(s*1.8))*i,o[11]=(.55+.45*Math.cos(s*1.9))*e}blendStabilityPalettes(t,i){const e=i?kt:_t;let s=0,r=0,o=0;t<=16?(s=0,r=0,o=0):t<=24?(s=0,r=1,o=(t-16)/8):t<=36?(s=1,r=1,o=0):t<=44?(s=1,r=2,o=(t-36)/8):t<=56?(s=2,r=2,o=0):t<=64?(s=2,r=3,o=(t-56)/8):(s=3,r=3,o=0);const a=o*o*(3-2*o),n=e[s],u=e[r],l=Math.sin(t*.14)*(i?.035:.022);for(let c=0;c<3;c++)this.blendedBase[c]=n.base[c]+(u.base[c]-n.base[c])*a,this.blendedC1[c]=Math.max(0,Math.min(1,n.c1[c]+(u.c1[c]-n.c1[c])*a+l)),this.blendedC2[c]=Math.max(0,Math.min(1,n.c2[c]+(u.c2[c]-n.c2[c])*a)),this.blendedC3[c]=Math.max(0,Math.min(1,n.c3[c]+(u.c3[c]-n.c3[c])*a-l*.7)),this.blendedC4[c]=Math.max(0,Math.min(1,n.c4[c]+(u.c4[c]-n.c4[c])*a)),this.blendedC5[c]=Math.max(0,Math.min(1,n.c5[c]+(u.c5[c]-n.c5[c])*a+l*.5)),this.blendedC6[c]=Math.max(0,Math.min(1,n.c6[c]+(u.c6[c]-n.c6[c])*a))}drawFluidSlot(t,i){if(!this.gl||!this.fluidProgram||!this.glCanvas||!this.quadBuffer)return;const e=this.gl,s=t.slot??0,r=this.particlePixelW,o=s*Y;e.useProgram(this.fluidProgram),e.disable(e.BLEND),e.enable(e.SCISSOR_TEST),e.viewport(r,o,z,B),e.scissor(r,o,z,B),e.bindBuffer(e.ARRAY_BUFFER,this.quadBuffer);const a=this.fluidUniforms.aPosition;e.enableVertexAttribArray(a),e.vertexAttribPointer(a,2,e.FLOAT,!1,0,0);let n=1,u=1.8;if(t.stabilityMode){const T=t.targetRate??25,f=t.currentRate??T,v=f+(T-f)*.11;t.currentRate=Math.abs(T-v)<.03?T:v,n=.82+t.currentRate/100*.78,u=t.isDark?1.72+t.currentRate/100*.36:1.65+t.currentRate/100*.25}const l=(i-this.startTime)*.001*n+t.index*2.35,c=t.isDark?.55:.7,m=t.isDark?1.75:1.1;this.precomputeFluidUniforms(l,c,m);const y=l*1.85*.18,b=-l*1.85*.15,x=l*.65;if(e.uniform1f(this.fluidUniforms.uTime,l),e.uniform1f(this.fluidUniforms.uIntensity,u),e.uniform2fv(this.fluidUniforms["uCenters[0]"],this.fluidCentersBuf),e.uniform1fv(this.fluidUniforms["uWeights[0]"],this.fluidWeightsBuf),e.uniform4f(this.fluidUniforms.uRot,Math.cos(y),Math.sin(y),Math.cos(b),Math.sin(b)),e.uniform3f(this.fluidUniforms.uTimeShift,Math.sin(x)*.022,Math.cos(x*1.4)*.022,Math.sin(x*1.2)*.022),e.uniform1f(this.fluidUniforms.uIsLight,t.isDark?0:1),e.uniform1f(this.fluidUniforms.uColor1Weight,c),e.uniform1f(this.fluidUniforms.uColor2Weight,m),t.stabilityMode)this.blendStabilityPalettes(t.currentRate??25,t.isDark),e.uniform3fv(this.fluidUniforms.uDarkNavy,this.blendedBase),e.uniform3fv(this.fluidUniforms.uColor1,this.blendedC1),e.uniform3fv(this.fluidUniforms.uColor2,this.blendedC2),e.uniform3fv(this.fluidUniforms.uColor3,this.blendedC3),e.uniform3fv(this.fluidUniforms.uColor4,this.blendedC4),e.uniform3fv(this.fluidUniforms.uColor5,this.blendedC5),e.uniform3fv(this.fluidUniforms.uColor6,this.blendedC6);else{const T=t.isDark?Ut:Ft,f=T[t.index%T.length];e.uniform3fv(this.fluidUniforms.uDarkNavy,f.base),e.uniform3fv(this.fluidUniforms.uColor1,f.c1),e.uniform3fv(this.fluidUniforms.uColor2,f.c2),e.uniform3fv(this.fluidUniforms.uColor3,f.c3),e.uniform3fv(this.fluidUniforms.uColor4,f.c4),e.uniform3fv(this.fluidUniforms.uColor5,f.c5),e.uniform3fv(this.fluidUniforms.uColor6,f.c6)}const w=this.touchTexture!==null&&this.touchTexture.activeCardId===t.id&&this.touchTexture.trail.length>0;e.uniform1f(this.fluidUniforms.uHasTouch,w?1:0),e.drawArrays(e.TRIANGLES,0,6)}blitFluidSlot(t){if(!this.glCanvas||!t.ctx||!this.gl){this.render2DFluidFallback(t),t.painted||(t.painted=!0,t.onFirstPaint());return}const i=t.slot??0,e=this.particlePixelW,s=this.glCanvas.height-(i*Y+B);if(e<0||s<0||e+z>this.glCanvas.width||s+B>this.glCanvas.height){this.render2DFluidFallback(t),t.painted||(t.painted=!0,t.onFirstPaint());return}try{t.ctx.drawImage(this.glCanvas,e,s,z,B,0,0,z,B)}catch{this.render2DFluidFallback(t)}t.painted||(t.painted=!0,t.onFirstPaint())}render2DFluidFallback(t){try{const i=z,e=B,s=t.ctx,r=s.createLinearGradient(0,0,i,e);t.isDark?(r.addColorStop(0,"#0a0d14"),r.addColorStop(.5,"#1e1b4b"),r.addColorStop(1,"#0f172a")):(r.addColorStop(0,"#e0e7ff"),r.addColorStop(.5,"#c7d2fe"),r.addColorStop(1,"#f1f5f9")),s.fillStyle=r,s.fillRect(0,0,i,e)}catch{}}drawTelemetrySlot(t){if(!this.gl||!this.telemetryProgram||!this.glCanvas||!this.quadBuffer)return;const i=this.gl,e=t.slot??0,s=this.particlePixelW,r=e*Y;i.useProgram(this.telemetryProgram),i.disable(i.BLEND),i.enable(i.SCISSOR_TEST),i.viewport(s,r,tt,$),i.scissor(s,r,tt,$),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.bindBuffer(i.ARRAY_BUFFER,this.quadBuffer);const o=this.telemetryUniforms.aPosition;i.enableVertexAttribArray(o),i.vertexAttribPointer(o,2,i.FLOAT,!1,0,0),t.phase+=.045*t.speed,t.pulseProgress=(t.pulseProgress+.007*t.speed)%1,i.uniform1f(this.telemetryUniforms.uTime,t.phase),i.uniform3fv(this.telemetryUniforms.uPrimaryColor,t.colorRgb),i.uniform1f(this.telemetryUniforms.uAmplitude,t.amplitude),i.uniform1f(this.telemetryUniforms.uPulseX,t.pulseProgress),i.uniform1f(this.telemetryUniforms.uMode,t.mode==="multi"?1:0),i.uniform2f(this.telemetryUniforms.uMouse,t.mouseActive?t.mouseX:-1,t.mouseY),i.drawArrays(i.TRIANGLES,0,6)}blitTelemetrySlot(t){if(!this.glCanvas||!t.ctx||!this.gl){this.render2DTelemetryFallback(t);return}const i=t.slot??0,e=this.particlePixelW,s=this.glCanvas.height-(i*Y+$);if(e<0||s<0||e+tt>this.glCanvas.width||s+$>this.glCanvas.height){this.render2DTelemetryFallback(t);return}try{t.ctx.clearRect(0,0,t.canvas.width,t.canvas.height),t.ctx.drawImage(this.glCanvas,e,s,tt,$,0,0,t.canvas.width,t.canvas.height)}catch{this.render2DTelemetryFallback(t)}}render2DTelemetryFallback(t){try{const i=t.ctx,e=t.canvas.width,s=t.canvas.height;i.clearRect(0,0,e,s),i.beginPath(),i.strokeStyle=`rgb(${Math.round(t.colorRgb[0]*255)}, ${Math.round(t.colorRgb[1]*255)}, ${Math.round(t.colorRgb[2]*255)})`,i.lineWidth=1.5;const r=s/2;for(let o=0;o<=e;o+=4){const a=r+Math.sin(o*.05+t.phase)*(s*.25*t.amplitude);o===0?i.moveTo(o,a):i.lineTo(o,a)}i.stroke()}catch{}}drawParticleZone(t,i){if(!this.gl||!this.glCanvas||!this.particleProgram||!this.lineProgram||!this.particleLocs||!this.lineLocs||!this.particleBuffer||!this.lineBuffer)return;const e=this.gl,s=this.particlePixelW,r=this.particlePixelH,o=this.vpWidth,a=this.vpHeight;e.enable(e.SCISSOR_TEST),e.viewport(0,0,s,r),e.scissor(0,0,s,r),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA);const n=this.scrollY-this.lastScrollY;this.scrollVelocity+=(n-this.scrollVelocity)*.12*i,this.lastScrollY=this.scrollY;const u=Math.abs(this.scrollVelocity);u>.1&&(this.lastUserActiveTime=t),this.rotY+=(45e-5+u*3e-5)*i,this.rotX+=(25e-5+this.scrollVelocity*2e-5)*i;const l=o*.5,c=a*.5,m=Math.cos(this.rotY),y=Math.sin(this.rotY),b=Math.cos(this.rotX),x=Math.sin(this.rotX),w=2/o,T=2/a;let f=0;const v=this.lineVertexBuf,et=v.length-12,W=(p,h,g,M,C,A,R,D,k)=>{f>et||(v[f++]=p*w-1,v[f++]=1-h*T,v[f++]=C,v[f++]=A,v[f++]=R,v[f++]=D,v[f++]=g*w-1,v[f++]=1-M*T,v[f++]=C,v[f++]=A,v[f++]=R,v[f++]=k)};if(this.shockwaves.length>0){const p=this.isDark?mt.purple:pt.purple;for(let h=this.shockwaves.length-1;h>=0;h--){const g=this.shockwaves[h];if(g.radius+=8*i,g.life*=Math.pow(.93,i),g.radius>g.maxRadius||g.life<.02)this.shockwaves.splice(h,1);else{const M=g.life*(this.isDark?.45:.35);for(let C=0;C<K;C++){const A=g.x+lt[C]*g.radius,R=g.y+nt[C]*g.radius,D=g.x+lt[C+1]*g.radius,k=g.y+nt[C+1]*g.radius;W(A,R,D,k,p[0],p[1],p[2],M,M)}}}}const Q=this.mouseState.active&&t-this.mouseState.lastTime<2800,N=this.isMobile?150:250,ht=N*N,H=this.isDark?mt:pt;let it=0,P=0;const S=this.particleVertexBuf;this.activeScreenParticles.length=0;for(let p=0;p<this.particleCount;p++){const h=this.particles[p],g=h.x*m-h.z*y,M=h.z*m+h.x*y,C=h.y*b-M*x,A=M*b+h.y*x,R=1100+A;if(R<100)continue;const D=1100/R,k=g*D+l,X=C*D+c;let I=k+h.offX,U=X+h.offY,q=9999;if(Q){const E=this.mouseState.x-I,L=this.mouseState.y-U,V=E*E+L*L;if(V<ht){q=Math.sqrt(V);const F=1-q/N,G=Math.max(25,q),j=E/G,J=L/G,O=Math.sin(F*Math.PI*.5)*1.8*i;h.vx+=j*O+this.mouseState.vx*F*.12*i,h.vy+=J*O+this.mouseState.vy*F*.12*i;const Pt=Math.min(1,F*1.6);h.glowIntensity+=(Pt-h.glowIntensity)*.15*i}else h.glowIntensity+=(0-h.glowIntensity)*.05*i}else h.glowIntensity+=(0-h.glowIntensity)*.05*i;if(this.shockwaves.length>0)for(let E=0;E<this.shockwaves.length;E++){const L=this.shockwaves[E],V=I-L.x,F=U-L.y,G=Math.sqrt(V*V+F*F),j=Math.abs(G-L.radius);if(j<40){const J=(1-j/40)*L.strength*L.life*i,O=1/(G+1);h.vx+=V*O*J,h.vy+=F*O*J,h.glowIntensity=Math.min(1,h.glowIntensity+.8*L.life)}}const ft=Math.pow(.88,i);if(h.vx=(h.vx-h.offX*.045*i)*ft,h.vy=(h.vy-h.offY*.045*i)*ft,h.offX+=h.vx*i,h.offY+=h.vy*i,I=k+h.offX,U=X+h.offY,I<-40||I>o+40||U<-40||U>a+40)continue;const Ct=Math.max(.25,Math.min(1,(A+this.baseSphereRadius)/(2*this.baseSphereRadius))),xt=.5+.5*Math.sin(t*h.blinkSpeed+h.phase),bt=Ct*.65+xt*.35,rt=Math.min(1,bt*(this.isDark?.9:.8)+h.glowIntensity*.35),Tt=Math.max(1.4,D*h.sizeMult*(this.isMobile?1.45:1.75)*(1+h.glowIntensity*.6))*(this.isDark?3.4:2.8),Mt=(this.isDark?.28:.18)*rt*(.8+h.glowIntensity*1.2),wt=Math.min(1,rt+.25),_=H[h.colorType];if(S[P++]=I*w-1,S[P++]=1-U*T,S[P++]=Tt*2*this.dpr,S[P++]=_[0],S[P++]=_[1],S[P++]=_[2],S[P++]=rt,S[P++]=Mt,S[P++]=wt,it++,Q&&q<125){const E=(1-q/125)*.38*(.5+h.glowIntensity*.5);W(I,U,this.mouseState.x,this.mouseState.y,_[0],_[1],_[2],E,E*.35)}this.activeScreenParticles.push({x:I,y:U,glow:h.glowIntensity,color:_})}const ct=this.activeScreenParticles.length,st=this.isMobile?80:105,gt=st*st,yt=this.isMobile?3:5;for(let p=0;p<ct;p++){const h=this.activeScreenParticles[p],g=Math.min(ct,p+yt);for(let M=p+1;M<g;M++){const C=this.activeScreenParticles[M],A=h.x-C.x,R=h.y-C.y,D=A*A+R*R;if(D<gt){const X=(1-Math.sqrt(D)/st)*(this.isDark?.22:.16)*(1+(h.glow+C.glow)*.7);W(h.x,h.y,C.x,C.y,h.color[0],h.color[1],h.color[2],X,X)}}}const ut=f/6;if(ut>0){e.useProgram(this.lineProgram),e.bindBuffer(e.ARRAY_BUFFER,this.lineBuffer),e.bufferSubData(e.ARRAY_BUFFER,0,v.subarray(0,f));const p=24;e.enableVertexAttribArray(this.lineLocs.aPos),e.vertexAttribPointer(this.lineLocs.aPos,2,e.FLOAT,!1,p,0),e.enableVertexAttribArray(this.lineLocs.aColor),e.vertexAttribPointer(this.lineLocs.aColor,4,e.FLOAT,!1,p,8),e.drawArrays(e.LINES,0,ut),e.disableVertexAttribArray(this.lineLocs.aColor)}if(it>0){e.useProgram(this.particleProgram),e.uniform1f(this.particleLocs.uIsDark,this.isDark?1:0),e.bindBuffer(e.ARRAY_BUFFER,this.particleBuffer),e.bufferSubData(e.ARRAY_BUFFER,0,S.subarray(0,P));const p=36;e.enableVertexAttribArray(this.particleLocs.aPos),e.vertexAttribPointer(this.particleLocs.aPos,2,e.FLOAT,!1,p,0),e.enableVertexAttribArray(this.particleLocs.aSize),e.vertexAttribPointer(this.particleLocs.aSize,1,e.FLOAT,!1,p,8),e.enableVertexAttribArray(this.particleLocs.aColor),e.vertexAttribPointer(this.particleLocs.aColor,3,e.FLOAT,!1,p,12),e.enableVertexAttribArray(this.particleLocs.aAlphas),e.vertexAttribPointer(this.particleLocs.aAlphas,3,e.FLOAT,!1,p,24),e.drawArrays(e.POINTS,0,it),e.disableVertexAttribArray(this.particleLocs.aSize),e.disableVertexAttribArray(this.particleLocs.aColor),e.disableVertexAttribArray(this.particleLocs.aAlphas)}}blitParticleZone(){if(!this.gl||!this.glCanvas||!this.particleDisplayCtx||!this.particleDisplayCanvas){this.render2DParticleFallback();return}const t=this.particlePixelW,i=this.particlePixelH,e=this.glCanvas.height-i;if(t<=0||i<=0||e<0||t>this.glCanvas.width||e+i>this.glCanvas.height){this.render2DParticleFallback();return}try{this.particleDisplayCtx.clearRect(0,0,t,i),this.particleDisplayCtx.drawImage(this.glCanvas,0,e,t,i,0,0,t,i)}catch{this.render2DParticleFallback()}}render2DParticleFallback(){if(!(!this.particleDisplayCtx||!this.particleDisplayCanvas))try{const t=this.particleDisplayCtx,i=this.particlePixelW,e=this.particlePixelH;t.clearRect(0,0,i,e),t.fillStyle=this.isDark?"#a855f7":"#7c3aed";const s=Math.min(32,this.particles.length);for(let r=0;r<s;r++){const o=this.particles[r],a=(o.x+this.baseSphereRadius)/(2*this.baseSphereRadius)*i,n=(o.y+this.baseSphereRadius)/(2*this.baseSphereRadius)*e;a>=0&&a<=i&&n>=0&&n<=e&&(t.globalAlpha=this.isDark?.35:.25,t.beginPath(),t.arc(a,n,o.baseRadius||1.5,0,Math.PI*2),t.fill())}t.globalAlpha=1}catch{}}}let at=null;function Nt(){return at||(at=new Vt),at}export{B as FLUID_TILE_H,z as FLUID_TILE_W,$ as TELEMETRY_TILE_H,tt as TELEMETRY_TILE_W,Nt as getUnifiedWebGLEngine,Yt as parseHexToNormalizedRgb};

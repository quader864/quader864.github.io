import{w as f,y as w,z as k,h as n,C as D,o as e,q as s,B as S,A as C}from"./index-BNagajia.js";import{A as I}from"./activity-BjIF6_1D.js";/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]],T=f("mouse-pointer-2",A);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=[["path",{d:"M14 4.1 12 6",key:"ita8i4"}],["path",{d:"m5.1 8-2.9-.8",key:"1go3kf"}],["path",{d:"m6 12-1.9 2",key:"mnht97"}],["path",{d:"M7.2 2.2 8 5.1",key:"1cfko1"}],["path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z",key:"s0h3yz"}]],j=f("mouse-pointer-click",U),l=[{id:"myfxblue",label:"myfxblue_outlook.exe",icon:D},{id:"myfxbook",label:"myfxbook_outlook.exe",icon:I}],N=()=>{const{user:o,isLoading:c}=w(),p=k(),[a,b]=n.useState(!1),[r,h]=n.useState("myfxblue"),[i,d]=n.useState(!1);if(n.useEffect(()=>{!c&&(!o||!["admin","moderator"].includes(o.role||""))&&p("/")},[o,c,p]),c||!o||!["admin","moderator"].includes(o.role||""))return null;const x=()=>{b(!a)},m=t=>{h(t),d(!1)},u=l.find(t=>t.id===r)||l[0],g=`
    <style>
      /* Hide Scrollbar completely but allow scrolling */
      ::-webkit-scrollbar {
        display: none;
      }
      * {
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* IE/Edge */
      }
      
      /* Global Box Sizing Reset to prevent overflow */
      *, *::before, *::after {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        padding: 0;
        background-color: #0f172a; /* Match Slate 900 */
        font-family: 'Inter', system-ui, -apple-system, sans-serif;
        color: #cbd5e1;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        min-height: 100vh;
        overflow-x: hidden;
      }
      
      .widget-card {
         background: transparent;
         width: 100%;
         max-width: 100%;
         position: relative;
         opacity: 0;
         transform: translateY(10px);
         transition: all 0.5s ease-out;
         display: flex;
         flex-direction: column;
         align-items: center;
      }

      .widget-card.visible {
        opacity: 1;
        transform: translateY(0);
      }

      /* Loading Spinner */
      .loader-container {
        position: fixed;
        top: 200px;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 50;
        transition: opacity 0.5s ease;
        pointer-events: none;
        gap: 12px;
      }
      
      .loader {
        border: 3px solid rgba(255, 255, 255, 0.2);
        border-top: 3px solid #ffffff;
        border-radius: 50%;
        width: 48px;
        height: 48px;
        animation: spin 1s cubic-bezier(0.55, 0.055, 0.675, 0.19) infinite;
        box-shadow: 0 0 15px rgba(99, 102, 241, 0.3);
      }
      
      .loading-text {
        color: #94a3b8;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.5px;
        animation: pulse 2s infinite;
      }

      .loader-container.hidden {
        opacity: 0;
        visibility: hidden;
      }

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.6; }
      }
      
      /* Error State */
      .error-message {
        color: #ef4444;
        padding: 2rem;
        text-align: center;
        background: rgba(239, 68, 68, 0.1);
        border: 1px solid rgba(239, 68, 68, 0.2);
        border-radius: 8px;
        margin-top: 2rem;
        max-width: 80%;
      }
    </style>
  `,y=`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
        ${g}
        <style>
          /* --- MyFxBook Overrides --- */
          table {
            width: 100% !important;
            font-size: 14px;
            border-collapse: collapse;
            color: #cbd5e1 !important;
            background-color: transparent !important;
          }

          tr:first-child td {
            background-color: #1e293b !important;
            color: #fff !important;
            font-weight: 600 !important;
            border-bottom: 2px solid #334155 !important;
            padding: 10px 5px !important;
          }

          td {
            color: #cbd5e1 !important;
            border-bottom: 1px solid #1e293b !important;
            padding: 8px 5px !important;
          }

          tr:not(:first-child):hover td {
            background-color: #1e293b !important;
          }

          a { color: #818cf8 !important; text-decoration: none; font-weight: 500; transition: color 0.2s; }
          a:hover { color: #a5b4fc !important; }
          img { vertical-align: middle; }
        </style>
      </head>
      <body>
        <div id="loader" class="loader-container">
          <div class="loader"></div>
          <div class="loading-text">Loading MyFxBook Data...</div>
        </div>
        
        <div id="widgetCard" class="widget-card">
           <div style="width: 100%; overflow-x: hidden;">
                <script class="powered" type="text/javascript"
                        src="https://widgets.myfxbook.com/scripts/fxOutlook.js?type=1&symbols=,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,31,32,33,34,36,37,38,40,41,42,43,45,46,47,48,49,50,51,103,107,129,131,136,137,1209,1233,1234,1235,1236,1245,1246,1247,1249,1252,1253,1259,1260,1327,1692,1694,1773,1778,1781,1806,1815,1816,1863,1864,1893,1959,1965,2012,2076,2090,2099,2103,2114,2115,2119,2326,2348,2438,2482,2511,2516,2519,2521,2603,2617,2694,2729,2872,3001,3005,3240,3304,3473,3771,3887,4845,4963,5079,5281,5435,5539,5779,5851,5858,5879,6106,8397,8669,8686,8895,8899,9657,9667,10064,11817,12755,13517,13543,13614,13745,14216,14247,17184,19780,20010,34882,54505,69230,79789,81035,87770,109078,123633,135581,146581,159484,161523,163962,165302,169594,171254,177761,180388,181013,181776,217545,228902,238006,244239,320540,330784,330788,356365,356944,356945,367960,397724,1241343,1366797,1398989,1446802,1535797,1535804,1536337,1536404,1541124,1624396,1631427,"><\/script>
           </div>
           
           <div style="margin-top: 16px; width: 100%; text-align: center; border-top: 1px solid #1e293b; padding-top: 12px; font-size: 12px; margin-bottom: 20px;">
              <a href="https://www.myfxbook.com" title="" class="myfxbookLink" target="_blank" rel="noopener">
                Powered by Myfxbook.com
              </a>
           </div>

           <script type="text/javascript">showOutlookWidget()<\/script>
        </div>

        <script>
           (function() {
             const maxAttempts = 150; 
             let attempts = 0;
             const checkWidgetLoaded = setInterval(function() {
               attempts++;
               const tables = document.getElementsByTagName('table');
               const hasContent = tables.length > 0 && tables[0].rows.length > 1;
               if (hasContent || attempts >= maxAttempts) {
                 clearInterval(checkWidgetLoaded);
                 const loader = document.getElementById('loader');
                 const card = document.getElementById('widgetCard');
                 if (loader) loader.classList.add('hidden');
                 if (card) card.classList.add('visible');
               }
             }, 100);
           })();
        <\/script>
      </body>
    </html>
  `,v=`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Using a specific UMD build to ensure Chart class is available globally -->
        <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.js"><\/script>
        ${g}
        <style>
          .filter-sticky-header {
            position: sticky;
            top: 0;
            background-color: #0f172a; /* Match body bg */
            z-index: 10;
            padding-top: 10px;
            margin-bottom: 10px;
            width: 100%;
          }

          .filter-container {
            display: flex;
            gap: 8px;
            padding: 0 20px 10px 20px;
            overflow-x: auto;
            white-space: nowrap;
            -webkit-overflow-scrolling: touch;
            /* Hide scrollbar */
            scrollbar-width: none;
            width: 100%;
            box-sizing: border-box;
          }
          .filter-container::-webkit-scrollbar {
            display: none;
          }

          .filter-chip {
            background-color: #1e293b;
            border: 1px solid #334155;
            color: #94a3b8;
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 13px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
            outline: none;
            user-select: none;
            flex-shrink: 0;
          }
          .filter-chip:hover {
            background-color: #334155;
            color: #f8fafc;
            border-color: #475569;
          }
          .filter-chip.active {
            background-color: #4f46e5; /* Indigo 600 */
            border-color: #4f46e5;
            color: #ffffff;
            box-shadow: 0 0 10px rgba(79, 70, 229, 0.3);
          }

          .grid-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 16px;
            width: 100%;
            padding: 0 20px 20px 20px;
            box-sizing: border-box;
          }
          
          .sentiment-card {
            background-color: #1e293b; /* Slate 800 */
            border: 1px solid #334155; /* Slate 700 */
            border-radius: 12px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            transition: transform 0.2s, box-shadow 0.2s;
            cursor: pointer; /* Pointer to indicate clickability */
          }
          
          .sentiment-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            border-color: #6366f1; /* Highlight border on hover */
          }

          .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 4px;
          }

          .pair-name {
            font-size: 16px;
            font-weight: 700;
            color: #f8fafc;
            letter-spacing: 0.5px;
          }

          .bar-container {
            display: flex;
            height: 8px;
            width: 100%;
            background-color: #0f172a;
            border-radius: 4px;
            overflow: hidden;
          }

          .bar-long {
            background-color: #22c55e; /* Green 500 */
            height: 100%;
            transition: width 1s ease-out;
          }

          .bar-short {
            background-color: #ef4444; /* Red 500 */
            height: 100%;
            transition: width 1s ease-out;
          }

          .stats-row {
            display: flex;
            justify-content: space-between;
            font-size: 13px;
            font-weight: 500;
          }

          .stat-long { color: #4ade80; } /* Green 400 */
          .stat-short { color: #f87171; } /* Red 400 */
          
          .api-footer {
             width: 100%;
             text-align: center;
             padding: 20px 0;
             color: #64748b;
             font-size: 12px;
             border-top: 1px solid #1e293b;
             margin-top: auto;
             display: flex;
             justify-content: center;
             align-items: center;
             gap: 8px;
          }

          .status-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            display: inline-block;
          }
          
          .status-dot.live { background-color: #22c55e; box-shadow: 0 0 5px #22c55e; }
          .status-dot.offline { background-color: #eab308; }

          /* --- History Section --- */
          .history-section {
            width: 100%;
            max-width: 100%;
            padding: 20px;
            margin-top: 20px;
            border-top: 1px solid #334155;
            background: #0f172a;
            scroll-margin-top: 100px; /* Offset for scrolling */
            box-sizing: border-box;
          }

          .history-title {
            color: #fff;
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 16px;
          }

          .controls-bar {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin-bottom: 20px;
            align-items: flex-end;
          }

          .input-group {
            display: flex;
            flex-direction: column;
            gap: 6px;
          }

          .input-group label {
            color: #94a3b8;
            font-size: 12px;
            font-weight: 500;
          }

          select, input[type="date"] {
            background-color: #1e293b;
            border: 1px solid #475569;
            color: #f8fafc;
            padding: 8px 12px;
            border-radius: 6px;
            outline: none;
            font-family: inherit;
            font-size: 14px;
          }
          
          /* Dark calendar icon override */
          ::-webkit-calendar-picker-indicator {
            filter: invert(1);
            opacity: 0.6;
            cursor: pointer;
          }

          select:focus, input:focus {
            border-color: #6366f1;
          }

          .btn-primary {
            background-color: #4f46e5;
            color: white;
            border: none;
            padding: 9px 20px;
            border-radius: 6px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
            height: 38px;
            opacity: 1;
          }
          
          .btn-primary:hover:not(:disabled) {
            background-color: #4338ca;
          }
          
          .btn-primary:disabled {
            opacity: 0.7;
            cursor: not-allowed;
          }

          .btn-toggle {
            background-color: #1e293b;
            border: 1px solid #475569;
            color: #94a3b8;
            padding: 9px 16px;
            border-radius: 6px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
            height: 38px;
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 13px;
          }
          .btn-toggle:hover {
            background-color: #334155;
            color: #f8fafc;
          }
          .btn-toggle.active {
            background-color: #059669; /* Emerald 600 */
            color: white;
            border-color: #059669;
          }
          .btn-toggle.active:hover {
            background-color: #047857;
          }

          .chart-wrapper {
            background: #1e293b;
            border: 1px solid #334155;
            border-radius: 12px;
            padding: 16px;
            height: 350px;
            width: 100%;
            max-width: 100%;
            position: relative;
            box-sizing: border-box;
            overflow: hidden;
          }
        </style>
      </head>
      <body>
        <div id="loader" class="loader-container">
          <div class="loader"></div>
          <div class="loading-text">Connecting to API...</div>
        </div>

        <div id="sentimentContainer" class="widget-card" style="min-height: 100vh;">
           <!-- Filter Sticky Header -->
           <div class="filter-sticky-header">
             <div id="filterBar" class="filter-container">
               <!-- Filters injected via JS -->
             </div>
           </div>

           <!-- Current Sentiment Grid -->
           <div id="sentimentGrid" class="grid-container">
              <!-- Content injected via JS -->
           </div>

           <!-- Historical Data Section -->
           <div id="historySection" class="history-section">
             <div class="history-title" style="display: flex; justify-content: space-between; align-items: center;">
                <span>Sentiment History (UTC)</span>
                <span id="utcClock" style="font-family: monospace; font-size: 14px; color: #94a3b8; background: rgba(255,255,255,0.05); padding: 2px 6px; rounded: 4px;">--:--:--</span>
             </div>
             
             <div class="controls-bar">
               <div class="input-group">
                 <label>Currency Pair</label>
                 <select id="pairSelect">
                    <!-- Populated via JS -->
                 </select>
               </div>
               
               <div class="input-group">
                 <label>Timeframe</label>
                 <select id="timeframe" onchange="loadHistory()">
                    <option value="1m">1 Minute</option>
                    <option value="5m">5 Minutes</option>
                    <option value="10m">10 Minutes</option>
                    <option value="15m">15 Minutes</option>
                    <option value="30m">30 Minutes</option>
                    <option value="1H">1 Hour</option>
                    <option value="4H">4 Hours</option>
                    <option value="Daily" selected>Daily</option>
                 </select>
               </div>

               <div class="input-group">
                 <label>Start Date (UTC)</label>
                 <input type="date" id="startDate" onchange="loadHistory()">
               </div>
               
               <div class="input-group">
                 <label>End Date (UTC)</label>
                 <input type="date" id="endDate" onchange="loadHistory()">
               </div>

               <button id="loadHistoryBtn" class="btn-primary" onclick="loadHistory()">Load History</button>
               <button id="autoUpdateBtn" class="btn-toggle" onclick="toggleAutoUpdate()">Auto Update: Off</button>
             </div>

             <div class="chart-wrapper">
               <canvas id="historyChart"></canvas>
             </div>
           </div>
           
           <div id="apiFooter" class="api-footer">
              <!-- Content injected via JS -->
           </div>
        </div>

        <script>
          // Extended Mock Data based on user provided list
          const MOCK_DATA = [
            { "pair": "EUR/NZD", "long": { "percent": 45.2 }, "short": { "percent": 54.8 } },
            { "pair": "XAU/USD", "long": { "percent": 72.1 }, "short": { "percent": 27.9 } },
            { "pair": "USD/JPY", "long": { "percent": 65.3 }, "short": { "percent": 34.7 } },
            { "pair": "USD/CHF", "long": { "percent": 55.0 }, "short": { "percent": 45.0 } },
            { "pair": "USD/CAD", "long": { "percent": 45.0 }, "short": { "percent": 55.0 } },
            { "pair": "NZD/USD", "long": { "percent": 49.8 }, "short": { "percent": 50.2 } },
            { "pair": "NZD/JPY", "long": { "percent": 52.1 }, "short": { "percent": 47.9 } },
            { "pair": "NZD/CHF", "long": { "percent": 48.5 }, "short": { "percent": 51.5 } },
            { "pair": "NZD/CAD", "long": { "percent": 44.2 }, "short": { "percent": 55.8 } },
            { "pair": "GBP/USD", "long": { "percent": 38.1 }, "short": { "percent": 61.9 } },
            { "pair": "GBP/NZD", "long": { "percent": 41.5 }, "short": { "percent": 58.5 } },
            { "pair": "GBP/JPY", "long": { "percent": 60.2 }, "short": { "percent": 39.8 } },
            { "pair": "GBP/CHF", "long": { "percent": 53.4 }, "short": { "percent": 46.6 } },
            { "pair": "GBP/CAD", "long": { "percent": 47.8 }, "short": { "percent": 52.2 } },
            { "pair": "GBP/AUD", "long": { "percent": 50.5 }, "short": { "percent": 49.5 } },
            { "pair": "EUR/USD", "long": { "percent": 42.5 }, "short": { "percent": 57.5 } },
            { "pair": "AUD/CAD", "long": { "percent": 35.0 }, "short": { "percent": 65.0 } },
            { "pair": "EUR/JPY", "long": { "percent": 58.9 }, "short": { "percent": 41.1 } },
            { "pair": "EUR/GBP", "long": { "percent": 55.4 }, "short": { "percent": 44.6 } },
            { "pair": "EUR/CHF", "long": { "percent": 51.2 }, "short": { "percent": 48.8 } },
            { "pair": "EUR/CAD", "long": { "percent": 46.5 }, "short": { "percent": 53.5 } },
            { "pair": "EUR/AUD", "long": { "percent": 49.1 }, "short": { "percent": 50.9 } },
            { "pair": "DJ30", "long": { "percent": 58.5 }, "short": { "percent": 41.5 } },
            { "pair": "DAX", "long": { "percent": 61.2 }, "short": { "percent": 38.8 } },
            { "pair": "CHF/JPY", "long": { "percent": 54.3 }, "short": { "percent": 45.7 } },
            { "pair": "CAD/JPY", "long": { "percent": 56.8 }, "short": { "percent": 43.2 } },
            { "pair": "CAD/CHF", "long": { "percent": 52.5 }, "short": { "percent": 47.5 } },
            { "pair": "AUD/USD", "long": { "percent": 51.2 }, "short": { "percent": 48.8 } },
            { "pair": "AUD/NZD", "long": { "percent": 48.9 }, "short": { "percent": 51.1 } },
            { "pair": "AUD/JPY", "long": { "percent": 55.7 }, "short": { "percent": 44.3 } },
            { "pair": "AUD/CHF", "long": { "percent": 30.8 }, "short": { "percent": 69.2 } }
          ];

          async function wait(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
          }

          // Global state for filtering and caching
          let globalData = [];
          let rawHistoryCache = []; // Caches raw data for incremental updates
          let activeFilter = 'ALL';
          const FILTERS = ['ALL', 'USD', 'EUR', 'GBP', 'AUD', 'NZD', 'CAD', 'CHF', 'JPY', 'XAU', 'INDICES'];
          let myChart = null;
          let autoUpdateInterval = null;

          function renderFilters() {
            const container = document.getElementById('filterBar');
            let html = '';
            FILTERS.forEach(f => {
              const activeClass = f === activeFilter ? 'active' : '';
              html += \`<button class="filter-chip \${activeClass}" onclick="setFilter('\${f}')">\${f}</button>\`;
            });
            container.innerHTML = html;
          }
          
          function populatePairSelect(data) {
             const select = document.getElementById('pairSelect');
             if(!select) return;

             // Deduplicate using Set to ensure unique values
             const pairs = [...new Set(data.map(item => item.pair).filter(p => p))].sort();
             
             let html = "";
             pairs.forEach(p => {
                html += \`<option value="\${p}">\${p}</option>\`;
             });
             select.innerHTML = html;
             
             // Initialize dates in UTC (ISO 8601 YYYY-MM-DD)
             const today = new Date();
             // Changed: Start date default to today instead of last month
             const lastMonth = new Date();
             lastMonth.setDate(today.getDate() - 30);
             
             // Use toISOString to get UTC date components
             const toISODate = (d) => d.toISOString().split('T')[0];

             const endInp = document.getElementById('endDate');
             const startInp = document.getElementById('startDate');
             
             // Ensure end date is always today
             if(endInp) endInp.value = toISODate(today);
             // Ensure start date is also today as requested
             if(startInp) startInp.value = toISODate(today);
          }

          // Exposed to window so HTML onClick works
          window.setFilter = function(filter) {
            activeFilter = filter;
            renderFilters();
            renderGrid();
          }
          
          window.toggleAutoUpdate = function() {
             const btn = document.getElementById('autoUpdateBtn');
             if(!btn) return;
             
             if(autoUpdateInterval) {
                clearInterval(autoUpdateInterval);
                autoUpdateInterval = null;
                btn.classList.remove('active');
                btn.innerText = 'Auto Update: Off';
             } else {
                // Auto update every 30 seconds
                autoUpdateInterval = setInterval(() => loadHistory(true), 30000);
                btn.classList.add('active');
                btn.innerText = 'Auto Update: On';
                // Trigger immediate update (flagged as auto update)
                loadHistory(true); 
             }
          }

          // Function to handle grid click: update Select, scroll, and load
          window.selectPairAndScroll = function(pair) {
            const select = document.getElementById('pairSelect');
            if(select) {
               select.value = pair;
               // Trigger load (manual)
               loadHistory();
               // Smooth scroll to history
               const historySec = document.getElementById('historySection');
               if(historySec) {
                  historySec.scrollIntoView({ behavior: 'smooth' });
               }
            }
          }

          function renderGrid() {
            const grid = document.getElementById('sentimentGrid');
            if(!grid) return;
            
            // Filter Logic
            const filteredData = activeFilter === 'ALL' 
              ? globalData 
              : globalData.filter(item => {
                  const pair = (item.pair || '').toUpperCase();
                  
                  // Special Case for Indices/Others
                  if (activeFilter === 'INDICES') {
                    const knownIndices = ['DJ30', 'DAX', 'US30', 'NAS100', 'SPX500', 'GER30', 'UK100'];
                    if (knownIndices.includes(pair)) return true;
                    return !pair.includes('/') && !pair.includes('XAU') && !pair.includes('XAG');
                  }
                  
                  return pair.includes(activeFilter);
              });

            let html = "";
            if (filteredData.length === 0) {
              html = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #64748b;">No pairs found for ' + activeFilter + '</div>';
            } else {
              filteredData.forEach(item => {
                // Handle nested structure from API or flat from mock
                let longVal = item.long;
                if (longVal && typeof longVal === 'object') longVal = longVal.percent;
                longVal = parseFloat(longVal || 0);

                let shortVal = item.short;
                if (shortVal && typeof shortVal === 'object') shortVal = shortVal.percent;
                shortVal = parseFloat(shortVal || 0);
                
                const pairName = item.pair || 'Unknown';
                let priceVal = item.price; 
                
                // Format Price to 5 decimal places
                const formattedPrice = (priceVal !== null && priceVal !== undefined) 
                    ? parseFloat(priceVal).toFixed(5) 
                    : '';
                
                html += \`
                  <div class="sentiment-card" onclick="selectPairAndScroll('\${pairName}')" title="Click to view history for \${pairName}">
                    <div class="card-header">
                        <div class="pair-name">\${pairName}</div>
                    </div>
                    
                    <div class="stats-row">
                        <span class="stat-long">Long \${longVal}%</span>
                        <span class="stat-short">\${shortVal}% Short</span>
                    </div>

                    <div class="bar-container">
                        <div class="bar-long" style="width: \${longVal}%"></div>
                        <div class="bar-short" style="width: \${shortVal}%"></div>
                    </div>
                    
                    \${formattedPrice ? \`<div style="text-align: center; font-size: 13px; color: #94a3b8; margin-top: 8px; font-weight: 500;">\${formattedPrice}</div>\` : ''}
                  </div>
                \`;
              });
            }

            grid.innerHTML = html;
          }
          
          // Helper: Aggregate data based on timeframe
          function processDataForTimeframe(data, timeframe) {
             if (!data || data.length === 0) return [];
             
             // 1. Normalize Data first
             const normalized = data.map(item => {
                 if (!item.date) return null;
                 const time = new Date(item.date).getTime();
                 
                 let longVal = item.long;
                 if (longVal && typeof longVal === 'object') longVal = longVal.percent;
                 longVal = parseFloat(longVal);
                 
                 let shortVal = item.short;
                 if (shortVal && typeof shortVal === 'object') shortVal = shortVal.percent;
                 shortVal = parseFloat(shortVal);
                 
                 // PRICE NORMALIZATION
                 let priceVal = parseFloat(item.price);

                 if (isNaN(longVal) || isNaN(shortVal)) return null;
                 
                 return { 
                    time, 
                    long: longVal, 
                    short: shortVal, 
                    price: isNaN(priceVal) ? null : priceVal 
                 };
             }).filter(x => x !== null);

             // Determine bucket size
             let bucketSize = 0;
             // Using UTC time for aggregation ensures consistency
             switch(timeframe) {
                case '1m': bucketSize = 60 * 1000; break;
                case '5m': bucketSize = 5 * 60 * 1000; break;
                case '10m': bucketSize = 10 * 60 * 1000; break;
                case '15m': bucketSize = 15 * 60 * 1000; break;
                case '30m': bucketSize = 30 * 60 * 1000; break;
                case '1H': bucketSize = 60 * 60 * 1000; break;
                case '4H': bucketSize = 4 * 60 * 60 * 1000; break;
                case 'Daily': bucketSize = 24 * 60 * 60 * 1000; break;
                default: return data; // Return original normalized if undefined (or renderChart will handle raw)
             }
             
             if (bucketSize === 0) return data; // No aggregation

             const buckets = {};

             normalized.forEach(item => {
                 // Floor to bucket size to group them
                 const bucketKey = Math.floor(item.time / bucketSize) * bucketSize;
                 
                 if (!buckets[bucketKey]) {
                     buckets[bucketKey] = { longSum: 0, shortSum: 0, priceSum: 0, priceCount: 0, count: 0 };
                 }
                 buckets[bucketKey].longSum += item.long;
                 buckets[bucketKey].shortSum += item.short;
                 
                 if (item.price !== null) {
                    buckets[bucketKey].priceSum += item.price;
                    buckets[bucketKey].priceCount++;
                 }
                 
                 buckets[bucketKey].count++;
             });

             // Map back to array and sort
             return Object.keys(buckets).sort((a,b) => parseInt(a) - parseInt(b)).map(key => {
                 const b = buckets[key];
                 const avgPrice = (b.priceCount > 0) ? (b.priceSum / b.priceCount) : null;
                 
                 return {
                     date: new Date(parseInt(key)).toISOString(),
                     long: b.longSum / b.count,
                     short: b.shortSum / b.count,
                     price: avgPrice
                 };
             });
          }

          // Generate realistic mock history with irregular intervals (UTC)
          function generateMockHistory(pair, startStr, endStr, timeframe) {
             // Create date objects, assuming inputs are YYYY-MM-DD
             const start = new Date(startStr);
             const end = new Date(endStr);
             
             if(isNaN(start.getTime()) || isNaN(end.getTime())) return [];

             let baseInterval = 24 * 60 * 60 * 1000;
             
             // Generate higher frequency raw mock data so we can demo aggregation
             switch(timeframe) {
                case '1m': baseInterval = 20 * 1000; break; // 3 points per min
                case '5m': baseInterval = 60 * 1000; break; // 1 point per min
                case '10m': baseInterval = 2 * 60 * 1000; break;
                case '15m': baseInterval = 3 * 60 * 1000; break;
                case '30m': baseInterval = 5 * 60 * 1000; break;
                case '1H': baseInterval = 10 * 60 * 1000; break;
                case '4H': baseInterval = 30 * 60 * 1000; break;
                default: baseInterval = 6 * 60 * 60 * 1000; // 4 points per day
             }
             
             const startTime = start.getTime();
             const endTime = end.getTime();
             const history = [];
             
             let currentLong = 40 + Math.random() * 20;
             let currentPrice = 1.0500; // Fake base price
             
             // Limit iterations to prevent browser freeze
             const maxPoints = 1500;
             let current = startTime;
             
             // If range is too big for timeframe, only generate last maxPoints
             if ((endTime - startTime) / baseInterval > maxPoints) {
                current = endTime - (maxPoints * baseInterval);
             }
             
             while (current <= endTime) {
                const dateObj = new Date(current);
                
                // Random walk
                const change = (Math.random() - 0.5) * 5; 
                currentLong += change;
                if(currentLong > 90) currentLong = 90;
                if(currentLong < 10) currentLong = 10;
                
                const priceChange = (Math.random() - 0.5) * 0.0050;
                currentPrice += priceChange;
                
                // Use ISO string for consistency (ALWAYS UTC)
                const dateIso = dateObj.toISOString();

                history.push({
                   date: dateIso,
                   long: currentLong.toFixed(1),
                   short: (100 - currentLong).toFixed(1),
                   // Ensure mock price has 5 decimals
                   price: currentPrice.toFixed(5)
                });
                
                // Randomness
                let variance = 0.8 + Math.random() * 0.4;
                current += baseInterval * variance;
             }
             return history;
          }
          
          function renderChart(data) {
             const canvas = document.getElementById('historyChart');
             if(!canvas) return;
             const ctx = canvas.getContext('2d');
             
             if(typeof Chart === 'undefined') {
                console.error("Chart.js not loaded");
                return;
             }
             
             if(!Array.isArray(data) || data.length === 0) return;

             // Parse Data to {x: timestamp, y: value} for Linear/Time axis behavior
             // Timestamps should be UTC-based
             const parsedData = data.map(d => {
                 if(!d || !d.date) return null;
                 const dateVal = new Date(d.date).getTime();
                 
                 let longVal = parseFloat(d.long);
                 let shortVal = parseFloat(d.short);
                 let priceVal = d.price !== null && d.price !== undefined ? parseFloat(d.price) : null;
                 
                 // If invalid data, ignore point
                 if(isNaN(longVal) || isNaN(shortVal)) return null;

                 return {
                    x: dateVal,
                    long: longVal,
                    short: shortVal,
                    price: priceVal
                 };
             })
             .filter(d => d !== null)
             .sort((a, b) => a.x - b.x); 

             if (parsedData.length === 0) return;

             // Destroy chart if it exists to ensure clean config for new axis setup
             if(myChart) {
                myChart.destroy();
                myChart = null;
             }

             myChart = new Chart(ctx, {
                type: 'line',
                data: {
                   datasets: [
                      {
                         label: 'Long %',
                         data: parsedData.map(d => ({x: d.x, y: d.long, price: d.price})),
                         borderColor: '#22c55e', // Green
                         backgroundColor: 'rgba(34, 197, 94, 0.1)',
                         borderWidth: 2,
                         tension: 0.1,
                         pointRadius: 2,
                         pointHoverRadius: 5,
                         fill: false,
                         yAxisID: 'y'
                      },
                      {
                         label: 'Short %',
                         data: parsedData.map(d => ({x: d.x, y: d.short, price: d.price})),
                         borderColor: '#ef4444', // Red
                         backgroundColor: 'rgba(239, 68, 68, 0.1)',
                         borderWidth: 2,
                         tension: 0.1,
                         pointRadius: 2,
                         pointHoverRadius: 5,
                         fill: false,
                         yAxisID: 'y'
                      }
                   ]
                },
                options: {
                   responsive: true,
                   maintainAspectRatio: false,
                   interaction: {
                      mode: 'index',
                      intersect: false,
                   },
                   plugins: {
                      legend: {
                         labels: { color: '#cbd5e1' }
                      },
                      tooltip: {
                         callbacks: {
                             title: function(context) {
                                 // Force Tooltip to use UTC Time
                                 const dateStr = new Date(context[0].parsed.x).toLocaleString('en-GB', { 
                                    timeZone: 'UTC',
                                    year: 'numeric', 
                                    month: 'short', 
                                    day: 'numeric',
                                    hour: '2-digit', 
                                    minute: '2-digit'
                                 }) + ' (UTC)';
                                 
                                 // Add Price to title area (like the date)
                                 const item = context[0];
                                 if (item && item.raw && item.raw.price !== null && item.raw.price !== undefined) {
                                    return [dateStr, 'Price: ' + parseFloat(item.raw.price).toFixed(5)];
                                 }
                                 return dateStr;
                             },
                             label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed.y !== null) {
                                    label += context.parsed.y.toFixed(1) + '%';
                                }
                                return label;
                             }
                         }
                      }
                   },
                   scales: {
                      x: {
                         type: 'linear',
                         grid: { color: '#334155' },
                         ticks: { 
                             color: '#94a3b8',
                             maxTicksLimit: 8,
                             callback: function(value) {
                                 const d = new Date(value);
                                 const range = this.max - this.min;
                                 const options = { timeZone: 'UTC' };
                                 
                                 if (range < 24 * 60 * 60 * 1000) {
                                     return d.toLocaleTimeString('en-GB', { ...options, hour: '2-digit', minute:'2-digit'});
                                 }
                                 return d.toLocaleDateString('en-GB', { ...options, month: 'short', day: 'numeric'});
                             }
                         },
                         bounds: 'data'
                      },
                      y: {
                         type: 'linear',
                         display: true,
                         min: 0,
                         max: 100,
                         grid: { color: '#334155' }, 
                         ticks: { 
                             color: '#94a3b8',
                             stepSize: 20
                         },
                         title: { display: true, text: 'Sentiment %', color: '#94a3b8', font: {size: 11} }
                      }
                   }
                }
             });
          }

          window.loadHistory = async function(isAutoUpdate = false) {
             const pairSelect = document.getElementById('pairSelect');
             const timeframeSelect = document.getElementById('timeframe');
             const startDateInput = document.getElementById('startDate');
             const endDateInput = document.getElementById('endDate');
             const btn = document.getElementById('loadHistoryBtn');
             
             if(!pairSelect || !startDateInput || !endDateInput) return;

             const pair = pairSelect.value;
             const timeframe = timeframeSelect.value;
             const start = startDateInput.value;
             const end = endDateInput.value;
             
             if(!start || !end) return;
             
             // If manual load, reset cache
             if(!isAutoUpdate) {
                rawHistoryCache = [];
             }

             // UI Feedback only for manual load
             if (btn && !isAutoUpdate) {
                btn.textContent = 'Loading...';
                btn.disabled = true;
                btn.style.opacity = '0.7';
                btn.style.cursor = 'not-allowed';
             }
             
             try {
                // Determine fetch range
                let fetchStart = start;
                
                // If auto-update and we have cache, only fetch data AFTER last point
                if(isAutoUpdate && rawHistoryCache.length > 0) {
                   const lastPoint = rawHistoryCache[rawHistoryCache.length - 1];
                   if(lastPoint && lastPoint.date) {
                      fetchStart = lastPoint.date; 
                   }
                }

                // Construct real API URL
                // Always cover until end of day for endDate
                // Remove timeframe parameter from query string as backend Joi schema rejects unknown keys
                const url = \`https://api.quader864.ir/api/sentiment/\${encodeURIComponent(pair)}?startDate=\${fetchStart === start ? start + 'T00:00:00Z' : fetchStart}&endDate=\${end}T23:59:59Z\`;
                
                // Try fetching
                const res = await fetch(url);
                let newData = [];
                
                if(res.ok) {
                   newData = await res.json();
                   if(!Array.isArray(newData)) throw new Error("Invalid API Data");
                   
                   // Merge Logic
                   if (isAutoUpdate) {
                      // Simple deduplication based on date string
                      const existingDates = new Set(rawHistoryCache.map(d => d.date));
                      const uniqueNewData = newData.filter(d => !existingDates.has(d.date));
                      rawHistoryCache = [...rawHistoryCache, ...uniqueNewData];
                   } else {
                      rawHistoryCache = newData;
                   }
                   
                   // Client Side Aggregation on FULL cache
                   const processedData = processDataForTimeframe(rawHistoryCache, timeframe);
                   renderChart(processedData);
                   
                } else {
                   const errText = await res.text();
                   console.error("API Error Response:", errText);
                   throw new Error("API Error: " + res.status);
                }
                
             } catch(e) {
                console.warn("Falling back to mock data:", e);
                // Fallback handling
                const mock = generateMockHistory(pair, start, end, timeframe);
                const processedMock = processDataForTimeframe(mock, timeframe);
                renderChart(processedMock);
             } finally {
                // Explicitly Reset UI
                if (btn) {
                    btn.textContent = 'Load History';
                    btn.disabled = false;
                    btn.style.opacity = '1';
                    btn.style.cursor = 'pointer';
                }
             }
          }

          async function loadSentiment() {
            const loader = document.getElementById('loader');
            const loadingText = document.querySelector('.loading-text');
            const container = document.getElementById('sentimentContainer');
            const footer = document.getElementById('apiFooter');
            
            let isLive = false;
            const MAX_RETRIES = 3;

            // Retry Loop
            try {
                for (let i = 0; i < MAX_RETRIES; i++) {
                  try {
                    if (loadingText) loadingText.textContent = \`Connecting to API... (Attempt \${i + 1}/\${MAX_RETRIES})\`;
                    
                    const res = await fetch('https://api.quader864.ir/api/sentiment', { 
                        method: 'GET',
                        cache: 'no-store'
                    });
                    
                    if (res.ok) {
                      const jsonData = await res.json();
                      if (Array.isArray(jsonData) && jsonData.length > 0) {
                        // Deduplicate logic: keep first occurrence of each pair
                        const seen = new Set();
                        globalData = jsonData.filter(item => {
                           if (!item.pair) return false;
                           if (seen.has(item.pair)) return false;
                           seen.add(item.pair);
                           return true;
                        });
                        
                        isLive = true;
                        break;
                      }
                    }
                  } catch (err) {
                    console.warn(\`Attempt \${i + 1} failed:\`, err);
                  }
                  if (i < MAX_RETRIES - 1) await wait(1500); 
                }
                
                if (!isLive) {
                    console.warn('All connection attempts failed. Switching to Demo Mode.');
                    globalData = MOCK_DATA; // Fallback to extended mock data
                }

                // Initial Render
                renderFilters();
                renderGrid();
                populatePairSelect(globalData); // Populate the dropdown
                
                // Auto-load chart for first pair
                if(globalData.length > 0) {
                   // Give the select time to populate and Chart.js to load
                   setTimeout(() => loadHistory(), 800);
                }
                
                // Update Footer
                if(footer) {
                    if (isLive) {
                      footer.innerHTML = '<span class="status-dot live"></span> Live Data provided by FXBlue API';
                    } else {
                      footer.innerHTML = '<span class="status-dot offline"></span> Demo Data (Connection Failed)';
                    }
                }
            } catch (e) {
                console.error("Critical error in loadSentiment", e);
            } finally {
                // FORCE SHOW WIDGET - Critical fix
                if (loader) loader.classList.add('hidden');
                if (container) container.classList.add('visible');
            }
          }
          
          // Wait for DOM
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', loadSentiment);
          } else {
            loadSentiment();
          }

          // UTC Clock Logic
          setInterval(() => {
             const clock = document.getElementById('utcClock');
             if(clock) {
                 const now = new Date();
                 const timeString = now.toISOString().split('T')[1].split('.')[0];
                 clock.innerText = timeString;
             }
          }, 1000);
        <\/script>
      </body>
    </html>
  `;return e.jsx("div",{className:"min-h-screen pt-24 pb-12 bg-slate-50 dark:bg-slate-950 px-4 sm:px-6 lg:px-8 transition-colors duration-500",children:e.jsxs("div",{className:"max-w-7xl mx-auto",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx(s.h1,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"text-4xl font-bold text-slate-900 dark:text-white mb-4",children:"Market Sentiment"}),e.jsx(s.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.1},className:"text-slate-600 dark:text-slate-400",children:"Live community outlook for major currency pairs."})]}),e.jsxs(s.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:"bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-800",children:[e.jsxs("div",{className:"bg-slate-800 flex items-center justify-between border-b border-slate-700 min-h-[48px] relative z-20",children:[e.jsxs("div",{className:"flex items-center flex-1 min-w-0",children:[e.jsxs("div",{className:"flex gap-1.5 shrink-0 px-4",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-red-500/80"}),e.jsx("div",{className:"w-3 h-3 rounded-full bg-yellow-500/80"}),e.jsx("div",{className:"w-3 h-3 rounded-full bg-green-500/80"})]}),e.jsxs("div",{className:"md:hidden relative ml-2",children:[e.jsxs("button",{onClick:()=>d(!i),className:"flex items-center gap-2 text-xs font-mono text-accent-400 bg-slate-900/50 hover:bg-slate-900 px-3 py-1.5 rounded-md border border-slate-700 transition-colors",children:[e.jsx(u.icon,{size:14}),e.jsx("span",{className:"truncate max-w-[120px]",children:u.label}),e.jsx(S,{size:14,className:`transition-transform duration-200 ${i?"rotate-180":""}`})]}),e.jsx(C,{children:i&&e.jsx(s.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:10},className:"absolute top-full left-0 mt-2 w-56 bg-slate-800 border border-slate-700 rounded-lg shadow-xl overflow-hidden py-1 z-50",children:l.map(t=>e.jsxs("button",{onClick:()=>m(t.id),className:`w-full flex items-center gap-3 px-4 py-3 text-xs font-mono text-left transition-colors ${r===t.id?"bg-slate-700/50 text-accent-400 border-l-2 border-accent-500":"text-slate-400 hover:bg-slate-700 hover:text-slate-200 border-l-2 border-transparent"}`,children:[e.jsx(t.icon,{size:14}),t.label]},t.id))})})]}),e.jsx("div",{className:"hidden md:flex items-end h-full pt-2",children:l.map(t=>e.jsxs("button",{onClick:()=>m(t.id),className:`flex items-center gap-2 px-4 py-2.5 rounded-t-lg text-xs font-mono transition-colors border-t border-x -mb-[1px] ${r===t.id?"bg-slate-900 text-accent-400 border-slate-700 border-b-slate-900 z-10":"bg-slate-800 text-slate-500 border-transparent hover:bg-slate-700 hover:text-slate-300"}`,children:[e.jsx(t.icon,{size:14}),e.jsx("span",{children:t.label})]},t.id))})]}),e.jsx("div",{className:"pr-4 flex items-center",children:e.jsx("button",{onClick:x,className:`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap ${a?"bg-accent-600 text-white":"bg-slate-700 text-slate-300 hover:bg-slate-600"}`,title:a?"Click to disable interaction and enable smooth scroll":"Click to interact with widget",children:a?e.jsxs(e.Fragment,{children:[e.jsx(j,{size:14}),e.jsx("span",{className:"hidden sm:inline",children:"Interactive"})]}):e.jsxs(e.Fragment,{children:[e.jsx(T,{size:14}),e.jsx("span",{className:"hidden sm:inline",children:"Scroll Mode"})]})})})]}),e.jsxs("div",{className:"bg-slate-950 w-full relative h-[75vh] min-h-[500px]",onClick:()=>i&&d(!1),children:[r==="myfxbook"&&e.jsx("iframe",{srcDoc:y,title:"MyFxBook Widget",className:`absolute inset-0 w-full h-full border-none transition-all duration-300 opacity-100 visible z-10 ${a?"pointer-events-auto":"pointer-events-none"}`,sandbox:"allow-scripts allow-same-origin allow-popups allow-forms allow-modals"}),r==="myfxblue"&&e.jsx("iframe",{srcDoc:v,title:"MyFxBlue Widget",className:`absolute inset-0 w-full h-full border-none transition-all duration-300 opacity-100 visible z-10 ${a?"pointer-events-auto":"pointer-events-none"}`,sandbox:"allow-scripts allow-same-origin allow-popups allow-forms allow-modals"}),!a&&e.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300 z-20",children:e.jsx("div",{className:"bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/10",children:'Switch to "Interactive" to click links'})})]})]})]})})};export{N as default};

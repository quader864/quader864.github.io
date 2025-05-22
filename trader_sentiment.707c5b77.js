var height = 395;
outlookScripts = [];
function getOutlookScripts() {
    var scripts = document.getElementsByTagName('script');
    for(var i = 0; i < scripts.length; ++i)if (scripts[i].src.match('fxOutlook.js')) outlookScripts.push(scripts[i]);
}
loadOutlookWidget(true);
function loadOutlookWidget(fromFx) {
    var ps = getOutlookAttributes();
    getOutlookScripts();
    var url = protocol(location.protocol) + "//widgets.myfxbook.com";
    var widgetContainer;
    if (fromFx) {
        widgetContainer = document.getElementById("outlookWidget");
        if (!widgetContainer) {
            widgetContainer = document.createElement("div");
            widgetContainer.id = "outlookWidget";
            document.body.appendChild(widgetContainer);
        }
    } else {
        widgetContainer = document.createElement("div");
        var script = outlookScripts[outlookScripts.length - 1];
        if (script.parentNode.nodeName.toLowerCase() == 'head') document.body.appendChild(widgetContainer);
        else script.parentNode.insertBefore(widgetContainer, script.nextSibling);
    }
    widgetContainer.innerHTML = '<iframe name="outlook_iframe" width="100%" scrolling="yes" height=' + height + ' frameborder="0" allowtransparency="true" hspace="0" vspace="0" marginheight="0" marginwidth="0" src="' + url + "/widgets/outlook.html" + ps + '"></iframe>';
}
function getOutlookAttributes() {
    var request = '';
    try {
        var scripts = document.getElementsByTagName("script");
        for(var i = 0; i < scripts.length; i++){
            var s = scripts[i];
            if (s.src && s.src.match(/fxOutlook\.js(\?.*)?$/)) {
                var match = s.src.match(/\?([a-z0-9,&=]*)/);
                if (match && match[0]) request = match[0];
            }
        }
    } catch (e) {
        return '';
    }
    return request;
}
function protocol(name) {
    return name === 'https:' ? name : "http:";
}

//# sourceMappingURL=trader_sentiment.707c5b77.js.map

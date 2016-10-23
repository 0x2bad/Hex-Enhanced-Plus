// ==UserScript==
// @name         HexEnhanced+
// @namespace    HexEnhancedPlus
// @version      1.0.0
// @description  HexEnhanced+ adds a load of features to Hacker Experience 1 and fixes some bugs aswell.
// @author       MacHacker, Jasperr & Johannes
// @match        https://*.hackerexperience.com/*
// @grant        none
// ==/UserScript==

if (window.location.hostname.toLowerCase().match('forum')) {
    var script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.1.1.min.js';
    script.onload = loadScript;
    document.getElementsByTagName('head')[0].appendChild(script);
} else {
    loadScript();
}

function loadScript() {
    $.getScript('https://cdn.rawgit.com/Johannes2306/Hex-Enhanced-Plus/master/HexEnhancedPlus.js');
}

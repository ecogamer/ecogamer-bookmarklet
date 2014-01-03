(function(){

    // Initilisation script should only run once
    alert('test');

    // Load jQuery
    // TODO: if jquery is present, move it to something, load my jquery, put my jquery into noconflict and put original jquery back. ALTERNATIVELY use requirejs grunt plugin?
    var done = false;
    var jQueryVersion = '1.9.1';
    var jQueryScriptTag = document.createElement('script');
    jQueryScriptTag.src = '//ajax.googleapis.com/ajax/libs/jquery/' + jQueryVersion + '/jquery.min.js';
    jQueryScriptTag.onload = jQueryScriptTag.onreadystatechange = function(){
        if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
            done = true;
        }
    };
    document.getElementsByTagName('head')[0].appendChild(jQueryScriptTag);
    jQuery.noConflict();

    // Load bookmarklet scripts
    jQuery(document).ready(function($) {
        // include js and CSS
    });

    // Run bookmarlet
    var ecogamerBookmarklet = function() {
        alert('test');
    };

})();
var App = (function(win, doc, $, _, Backbone, headtrackr) {
    'use strict';

    var AppView = Backbone.View.extend({
        el: 'body',
        
        events: {
        },
        
        initialize: function() {
            console.log('App init!');
            var videoInput = document.getElementById('inputVideo');
            var canvasInput = document.getElementById('inputCanvas');

            var htracker = new headtrackr.Tracker();
            htracker.init(videoInput, canvasInput);
            htracker.start();
            $("#stuff").css({
                top:0,
                left:0
            });
            doc.addEventListener('headtrackingEvent', function(e){
                //console.log(e);
                videoInput.style.top = e.y+'px';
                videoInput.style.left = e.x+'px';
                //console.log('translate3d('+e.x+','+e.y+','+e.z+')');
                
            });
        }
    });

    return new AppView();
})(window, document, $, _, Backbone, headtrackr);
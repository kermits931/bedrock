(function($) {
    'use strict';

    var $fundraiser = $('#fundraiser');
    var storageKey = 'fundraiser-eoy2017';
    var wasClosed = false;

    // see if visitor previously dismissed the banner
    try {
        wasClosed = sessionStorage.getItem(storageKey);
    } catch(ex) {
        // fail silently
    }

    if (!wasClosed) {
        // show the banner
        $fundraiser.css('display', 'block');

        // wire up close button
        $('#fundraiser-close').one('click', function() {
            $fundraiser.remove();

            try {
                sessionStorage.setItem(storageKey, true);
            } catch(ex) {
                // fail silently
            }
        });
    }

})(window.jQuery);

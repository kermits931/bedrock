/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * General DOM ready handler applied to all pages in base template.
 */
$(document).ready(function() {
    var utils = Mozilla.Utils;

    utils.initDownloadLinks();

    $(window).on('load', function() {
        $('html').addClass('loaded');
    });
});

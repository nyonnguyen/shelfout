(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./app/js/themes/music/main.js":[function(require,module,exports){
// COMMON
require('../../common/main');

// Essentials
require('../../../vendor/ui/js/main');

// Layout
require('../../../vendor/layout/js/main');

// Sidebar
require('../../../vendor/sidebar/js/main');

// Navbar
require('../../../vendor/navbar/js/main');

// Chat
require('../../../vendor/chat/js/main');

// Carousels
require('../../../vendor/media/js/main');

// Media Players
require('../../../vendor/media/js/player/main');

// Cover
require('../../../vendor/social/js/_cover');
},{"../../../vendor/chat/js/main":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/chat/js/main.js","../../../vendor/layout/js/main":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/layout/js/main.js","../../../vendor/media/js/main":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/media/js/main.js","../../../vendor/media/js/player/main":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/media/js/player/main.js","../../../vendor/navbar/js/main":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/navbar/js/main.js","../../../vendor/sidebar/js/main":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/sidebar/js/main.js","../../../vendor/social/js/_cover":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/social/js/_cover.js","../../../vendor/ui/js/main":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/ui/js/main.js","../../common/main":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/common/main.js"}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/common/main.js":[function(require,module,exports){
require('../components/forms/main');
require('../components/tables/main');
require('../components/other/_tooltip');
require('../components/other/_offcanvas');
require('../components/other/_ratings');
},{"../components/forms/main":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/forms/main.js","../components/other/_offcanvas":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/other/_offcanvas.js","../components/other/_ratings":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/other/_ratings.js","../components/other/_tooltip":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/other/_tooltip.js","../components/tables/main":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/tables/main.js"}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/forms/_datepicker.js":[function(require,module,exports){
(function ($) {
    "use strict";

    // Datepicker INIT
    $('.datepicker').datepicker();

})(jQuery);

},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/forms/_minicolors.js":[function(require,module,exports){
(function ($) {
    "use strict";

    // Minicolors INIT
    $('.minicolors').each(function () {
        $(this).minicolors({
            control: $(this).attr('data-control') || 'hue',
            defaultValue: $(this).attr('data-defaultValue') || '',
            inline: $(this).attr('data-inline') === 'true',
            letterCase: $(this).attr('data-letterCase') || 'lowercase',
            opacity: $(this).attr('data-opacity'),
            position: $(this).attr('data-position') || 'bottom left',
            change: function (hex, opacity) {
                if (! hex) return;
                if (opacity) hex += ', ' + opacity;
                if (typeof console === 'object') {
                    console.log(hex);
                }
            },
            theme: 'bootstrap'
        });
    });

})(jQuery);

},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/forms/_progress-bars.js":[function(require,module,exports){
(function ($) {

    // Progress Bar Animation
    $('.progress-bar').each(function () {
        $(this).width($(this).attr('aria-valuenow') + '%');
    });

})(jQuery);
},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/forms/_selectpicker.js":[function(require,module,exports){
(function ($) {
    "use strict";
    $(function () {
        $('.selectpicker').each(function(){
            $(this).selectpicker({
                width: $(this).data('width') || '100%'
            });
        });
    });

})(jQuery);

},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/forms/_slider.js":[function(require,module,exports){
(function ($) {
    "use strict";

    $('[data-slider="default"]').slider();

    $('[data-slider="formatter"]').slider({
        formatter: function (value) {
            return 'Current value: ' + value;
        }
    });

    $('[data-on-slide]').on("slide", function (slideEvt) {
        $($(this).attr('data-on-slide')).text(slideEvt.value);
    });

    $('.slider-handle').html('<i class="fa fa-bars fa-rotate-90"></i>');

})(jQuery);
},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/forms/main.js":[function(require,module,exports){
require('./_progress-bars');
require('./_slider');
require('./_selectpicker');
require('./_datepicker');
require('./_minicolors');
},{"./_datepicker":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/forms/_datepicker.js","./_minicolors":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/forms/_minicolors.js","./_progress-bars":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/forms/_progress-bars.js","./_selectpicker":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/forms/_selectpicker.js","./_slider":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/forms/_slider.js"}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/other/_offcanvas.js":[function(require,module,exports){
(function ($) {
    "use strict";

    // OffCanvas
    $('[data-toggle="offcanvas"]').click(function () {
        $('.row-offcanvas').toggleClass('active');
    });

})(jQuery);

},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/other/_ratings.js":[function(require,module,exports){
(function ($) {
    "use strict";

    // Ratings
    $('.rating span.star').on('click', function () {
        var total = $(this).parent().children().length;
        var clickedIndex = $(this).index();
        $('.rating span.star').removeClass('filled');
        for (var i = clickedIndex; i < total; i ++) {
            $('.rating span.star').eq(i).addClass('filled');
        }
    });

})(jQuery);

},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/other/_tooltip.js":[function(require,module,exports){
(function ($) {
    "use strict";

    // Tooltip
    $("body").tooltip({selector: '[data-toggle="tooltip"]', container: "body"});

})(jQuery);

},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/tables/_check-all.js":[function(require,module,exports){
(function ($) {
    "use strict";

    // Table Checkbox All
    $('#checkAll').on('click', function (e) {
        $(this).closest('table').find('td input:checkbox').prop('checked', this.checked);
    });

})(jQuery);

},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/tables/_datatables.js":[function(require,module,exports){
(function ($) {

    // Datatables
    $('#data-table').dataTable();

})(jQuery);
},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/tables/main.js":[function(require,module,exports){
require('./_datatables');
require('./_check-all');
},{"./_check-all":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/tables/_check-all.js","./_datatables":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/tables/_datatables.js"}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/chat/js/_breakpoints.js":[function(require,module,exports){
(function ($) {
    "use strict";

    $(window).bind('enterBreakpoint480', function () {
        $('.chat-window-container .panel:not(:last)').remove();
        $('.chat-window-container .panel').attr('id', 'chat-0001');
    });

    $(window).bind('enterBreakpoint768', function () {
        if ($('.chat-window-container .panel').length == 3) {
            $('.chat-window-container .panel:first').remove();
            $('.chat-window-container .panel:first').attr('id', 'chat-0001');
            $('.chat-window-container .panel:last').attr('id', 'chat-0002');
        }
    });

})(jQuery);
},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/chat/js/_search.js":[function(require,module,exports){
(function ($) {

    // match anything
    $.expr[ ":" ].containsNoCase = function (el, i, m) {
        var search = m[ 3 ];
        if (! search) return false;
        return new RegExp(search, "i").test($(el).text());
    };

    // Search Filter
    function searchFilterCallBack($data, $opt) {
        var search = $data instanceof jQuery ? $data.val() : $(this).val(),
            opt = typeof $opt == 'undefined' ? $data.data.opt : $opt;

        var $target = $(opt.targetSelector);
        $target.show();

        if (search && search.length >= opt.charCount) {
            $target.not(":containsNoCase(" + search + ")").hide();
        }
    }

    // input filter
    $.fn.searchFilter = function (options) {
        var opt = $.extend({
            // target selector
            targetSelector: "",
            // number of characters before search is applied
            charCount: 1
        }, options);

        return this.each(function () {
            var $el = $(this);
            $el.off("keyup", searchFilterCallBack);
            $el.on("keyup", null, {opt: opt}, searchFilterCallBack);
        });

    };

    // Filter by All/Online/Offline
    $(".chat-filter a").on('click', function (e) {

        e.preventDefault();
        $('.chat-contacts li').hide();
        $('.chat-contacts').find($(this).data('target')).show();

        $(".chat-filter li").removeClass('active');
        $(this).parent().addClass('active');

        $(".chat-search input").searchFilter({targetSelector: ".chat-contacts " + $(this).data('target')});

        // Filter Contacts by Search and Tabs
        searchFilterCallBack($(".chat-search input"), {
            targetSelector: ".chat-contacts " + $(this).data('target'),
            charCount: 1
        });
    });

    // Trigger Search Filter
    $(".chat-search input").searchFilter({targetSelector: ".chat-contacts li"});

})(jQuery);

},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/chat/js/_toggle.js":[function(require,module,exports){
(function ($) {

    $('[data-toggle="chat-box"]').on('click', function () {
        $(".chat-contacts li:first").trigger('click');
        if ($(this).data('hide')) $(this).hide();
    });

    function checkChat() {
        if (! $('html').hasClass('show-chat')) {
            $('.chat-window-container .panel-body').addClass('display-none');
            $('.chat-window-container input').addClass('display-none');
        } else {
            $('.chat-window-container .panel-body').removeClass('display-none');
            $('.chat-window-container input').removeClass('display-none');
        }
    }

    (function () {
        var toggleBtn = $('[data-toggle="sidebar-chat"]');

        // If No Sidebar Exit
        if (! toggleBtn.length) return;

        toggleBtn.on('click', function () {

            $('html').toggleClass('show-chat');

            checkChat();
        });
    })();

    checkChat();
})(jQuery);
},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/chat/js/_windows.js":[function(require,module,exports){
(function ($) {
    "use strict";

    var container = $('.chat-window-container');

    // Click User
    $(".chat-contacts li").on('click', function () {

        if ($('.chat-window-container [data-user-id="' + $(this).data('userId') + '"]').length) return;

        // If user is offline do nothing
        if ($(this).attr('class') === 'offline') return;

        var source = $("#chat-window-template").html();
        var template = Handlebars.compile(source);

        var context = {user_image: $(this).find('img').attr('src'), user: $(this).find('.contact-name').text()};
        var html = template(context);

        var clone = $(html);

        clone.attr("data-user-id", $(this).data("userId"));

        container.find('.panel:not([id^="chat"])').remove();

        var count = container.find('.panel').length;

        count ++;
        var limit = $(window).width() > 768 ? 3 : 1;
        if (count >= limit) {
            container.find('#chat-000'+ limit).remove();
            count = limit;
        }

        clone.attr('id', 'chat-000' + parseInt(count));
        container.append(clone).show();

        clone.show();
        clone.find('> .panel-body').removeClass('display-none');
        clone.find('> input').removeClass('display-none');
    });

    // Change ID by No. of Windows
    function chatLayout() {
        container.find('.panel').each(function (index, value) {
            $(this).attr('id', 'chat-000' + parseInt(index + 1));
        });
    }

    // remove window
    $("body").on('click', ".chat-window-container .close", function () {
        $(this).parent().parent().remove();
        chatLayout();
        if ($(window).width() < 768) $('.chat-window-container').hide();
    });

    // Chat heading collapse window
    $('body').on('click', '.chat-window-container .panel-heading', function (e) {
        e.preventDefault();
        $(this).parent().find('> .panel-body').toggleClass('display-none');
        $(this).parent().find('> input').toggleClass('display-none');
    });

})(jQuery);

},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/chat/js/main.js":[function(require,module,exports){
require('./_breakpoints');
require('./_search');
require('./_windows');
require('./_toggle');
},{"./_breakpoints":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/chat/js/_breakpoints.js","./_search":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/chat/js/_search.js","./_toggle":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/chat/js/_toggle.js","./_windows":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/chat/js/_windows.js"}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/layout/js/_async.js":[function(require,module,exports){
function contentLoaded(win, fn) {

    var done = false, top = true,

        doc = win.document,
        root = doc.documentElement,
        modern = doc.addEventListener,

        add = modern ? 'addEventListener' : 'attachEvent',
        rem = modern ? 'removeEventListener' : 'detachEvent',
        pre = modern ? '' : 'on',

        init = function (e) {
            if (e.type == 'readystatechange' && doc.readyState != 'complete') return;
            (e.type == 'load' ? win : doc)[ rem ](pre + e.type, init, false);
            if (! done && (done = true)) fn.call(win, e.type || e);
        },

        poll = function () {
            try {
                root.doScroll('left');
            } catch (e) {
                setTimeout(poll, 50);
                return;
            }
            init('poll');
        };

    if (doc.readyState == 'complete') fn.call(win, 'lazy');
    else {
        if (! modern && root.doScroll) {
            try {
                top = ! win.frameElement;
            } catch (e) {
            }
            if (top) poll();
        }
        doc[ add ](pre + 'DOMContentLoaded', init, false);
        doc[ add ](pre + 'readystatechange', init, false);
        win[ add ](pre + 'load', init, false);
    }
}

module.exports = function(urls, callback) {

    var asyncLoader = function (urls, callback) {

        urls.foreach(function (i, file) {
            loadCss(file);
        });

        // checking for a callback function
        if (typeof callback == 'function') {
            // calling the callback
            contentLoaded(window, callback);
        }
    };

    var loadCss = function (url) {
        var link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = url;
        document.getElementsByTagName('head')[ 0 ].appendChild(link);
    };

    // simple foreach implementation
    Array.prototype.foreach = function (callback) {
        for (var i = 0; i < this.length; i ++) {
            callback(i, this[ i ]);
        }
    };

    asyncLoader(urls, callback);

};
},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/layout/js/_breakpoints.js":[function(require,module,exports){
(function ($) {

    $(window).setBreakpoints({
        distinct: true,
        breakpoints: [ 320, 480, 768, 1024 ]
    });

})(jQuery);
},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/layout/js/_gridalicious.js":[function(require,module,exports){
(function($){

    $('[data-toggle*="gridalicious"]').each(function () {
        $(this).gridalicious({
            gutter: $(this).data('gutter') || 15,
            width: $(this).data('width') || 370,
            selector: '> div',
            animationOptions: {
                complete: function(){
                    $(window).trigger('resize');
                }
            }
        });
    });

})(jQuery);
},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/layout/js/_scrollable.js":[function(require,module,exports){
(function ($) {

    var skin = require('./_skin')();

    $('[data-scrollable]').niceScroll({
        cursorborder: 0,
        cursorcolor: config.skins[ skin ][ 'primary-color' ],
        horizrailenabled: false
    });

    $('.st-content-inner').niceScroll({
        cursorborder: 0,
        cursorcolor: config.skins[ skin ][ 'primary-color' ],
        horizrailenabled: false
    });

    $('[data-scrollable]').getNiceScroll().resize();

}(jQuery));
},{"./_skin":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/layout/js/_skin.js"}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/layout/js/_skin.js":[function(require,module,exports){
module.exports = (function () {
    var skin = $.cookie('skin');

    if (typeof skin == 'undefined') {
        skin = 'default';
    }
    return skin;
});
},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/layout/js/_skins.js":[function(require,module,exports){
var asyncLoader = require('./_async');

(function ($) {

    var changeSkin = function () {
        var skin = $.cookie("skin");
        if (typeof skin != 'undefined') {
            asyncLoader([ 'css/' + skin + '.min.css' ], function () {
                $('[data-skin]').removeProp('disabled').parent().removeClass('loading');
            });
        }
    };

    $('[data-skin]').on('click', function () {

        if ($(this).prop('disabled')) return;

        $('[data-skin]').prop('disabled', true);

        $(this).parent().addClass('loading');

        $.cookie("skin", $(this).data('skin'));

        changeSkin();

    });

    var skin = $.cookie("skin");

    if (typeof skin != 'undefined' && skin != 'default') {
        changeSkin();
    }

})(jQuery);
},{"./_async":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/layout/js/_async.js"}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/layout/js/main.js":[function(require,module,exports){
require('./_breakpoints.js');
require('./_gridalicious.js');
require('./_scrollable.js');
require('./_skins');
},{"./_breakpoints.js":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/layout/js/_breakpoints.js","./_gridalicious.js":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/layout/js/_gridalicious.js","./_scrollable.js":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/layout/js/_scrollable.js","./_skins":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/layout/js/_skins.js"}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/media/js/_responsive-videos.js":[function(require,module,exports){
(function ($) {

    // Find all YouTube videos
    var $allVideos = $("iframe[src^='http://player.vimeo.com'], iframe[src^='http://www.youtube.com']"),

    // The element that is fluid width
    $fluidEl = $("panel");

    // Figure out and save aspect ratio for each video
    $allVideos.each(function() {

        $(this)
            .data('aspectRatio', this.height / this.width)

            // and remove the hard coded width/height
            .removeAttr('height')
            .removeAttr('width');

    });

    // When the window is resized
    $(".gallery-grid .panel").resize(function() {

        var newWidth = $fluidEl.width();

        // Resize all videos according to their own aspect ratio
        $allVideos.each(function() {

            var $el = $(this);
            $el
                .width(newWidth)
                .height(newWidth * $el.data('aspectRatio'));

        });

    // Kick off one resize to fix all videos on page load
    }).resize();

})(jQuery);
},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/media/js/carousel/main.js":[function(require,module,exports){
require('./owl/main');
},{"./owl/main":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/media/js/carousel/owl/main.js"}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/media/js/carousel/owl/_default.js":[function(require,module,exports){
(function ($) {

    $(".owl-basic").each(function () {
        var c = $(this);
        $(this).owlCarousel({
            items: c.data('items') || 4,
            itemsDesktop: [ 1199, c.data('itemsDesktop') || 3 ],
            itemsDesktopSmall: [ 979, c.data('itemsDesktopSmall') || 3 ],
            afterUpdate: function () {
                $(window).trigger('resize');
            }
        });
    });

})(jQuery);
},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/media/js/carousel/owl/_mixed.js":[function(require,module,exports){
(function ($) {

    $(".owl-mixed").owlCarousel({
        items: 2,
        pagination: false,
        navigation: true,
        navigationText: [ '<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>' ],
        itemsDesktop: [ 1199, 2 ],
        itemsDesktopSmall: [ 979, 1 ],
        itemsTablet: [ 768, 1 ]
    });

})(jQuery);
},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/media/js/carousel/owl/_preview.js":[function(require,module,exports){
(function ($) {
    var preview = $(".owl-preview");
    var thumb = $(".owl-thumb");

    preview.owlCarousel({
        singleItem: true,
        slideSpeed: 1000,
        pagination: false,
        afterAction: syncPosition,
        responsiveRefreshRate: 200,
        navigation: true,
        navigationText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
    });

    thumb.owlCarousel({
        items: 5,
        itemsDesktop: [ 1199, 5 ],
        itemsDesktopSmall: [ 979, 4 ],
        itemsTablet: [ 768, 4 ],
        itemsMobile: [ 479, 3 ],
        pagination: false,
        navigation: true,
        responsiveRefreshRate: 100,
        afterInit: function (el) {
            el.find(".owl-item").eq(0).addClass("synced");
        }
    });

    function syncPosition(el) {
        var current = this.currentItem;
        $(".owl-thumb")
            .find(".owl-item")
            .removeClass("synced")
            .eq(current)
            .addClass("synced");
        if ($(".owl-thumb").data("owlCarousel") !== undefined) {
            center(current);
        }
    }

    $(".owl-thumb").on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).data("owlItem");
        preview.trigger("owl.goTo", number);
    });

    function center(number) {
        var thumbvisible = thumb.data("owlCarousel").owl.visibleItems;
        var num = number;
        var found = false;
        for (var i in thumbvisible) {
            if (num === thumbvisible[ i ]) {
                found = true;
            }
        }

        if (found === false) {
            if (num > thumbvisible[ thumbvisible.length - 1 ]) {
                thumb.trigger("owl.goTo", num - thumbvisible.length + 2);
            } else {
                if (num - 1 === - 1) {
                    num = 0;
                }
                thumb.trigger("owl.goTo", num);
            }
        } else if (num === thumbvisible[ thumbvisible.length - 1 ]) {
            thumb.trigger("owl.goTo", thumbvisible[ 1 ]);
        } else if (num === thumbvisible[ 0 ]) {
            thumb.trigger("owl.goTo", num - 1);
        }
    }

})(jQuery);
},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/media/js/carousel/owl/main.js":[function(require,module,exports){
require('./_default');
require('./_mixed');
require('./_preview');
},{"./_default":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/media/js/carousel/owl/_default.js","./_mixed":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/media/js/carousel/owl/_mixed.js","./_preview":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/media/js/carousel/owl/_preview.js"}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/media/js/main.js":[function(require,module,exports){
// Carousels
require('./carousel/main');

// Responsive Video iFrame Fix
require('./_responsive-videos');
},{"./_responsive-videos":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/media/js/_responsive-videos.js","./carousel/main":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/media/js/carousel/main.js"}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/media/js/player/_player.js":[function(require,module,exports){
(function ($) {

    $(function () {

        var cssSelectorOptions = {
            videoPlay : ".video-play",
            play : ".play",
            pause : ".pause",
            stop : ".stop",
            seekBar : ".seek-bar",
            playBar : ".play-bar",
            mute : ".mute",
            unmute : ".unmute",
            volumeBar : ".volume-bar",
            volumeBarValue : ".volume-bar-value",
            volumeMax : ".volume-max",
            playbackRateBar : ".playback-rate-bar",
            playbackRateBarValue : ".playback-rate-bar-value",
            currentTime : ".current-time",
            duration : ".duration",
            title : ".title",
            fullScreen : ".full-screen",
            restoreScreen : ".restore-screen",
            repeat : ".repeat",
            repeatOff : ".repeat-off",
            gui : ".gui",
            noSolution : ".no-solution"
        },
        stateClassOptions = {
            playing : "state-playing",
            seeking : "state-seeking",
            muted : "state-muted",
            looped : "state-looped",
            fullScreen : "state-full-screen",
            noVolume : "state-no-volume"
        };

        $("#jquery_jplayer_audio_1").jPlayer({
            ready: function () {
                $(this).jPlayer("setMedia", {
                    title: "Miaow - Bubble",
                    m4a: "http://jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
                    oga: "http://jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
                });
            },
            play: function () {
                $(this).jPlayer("pauseOthers");
            },
            timeFormat: {
                padMin: false
            },
            swfPath: "js/jplayer",
            supplied: "m4a,oga",
            cssSelectorAncestor: "#audio",
            useStateClassSkin: true,
            autoBlur: false,
            smoothPlayBar: true,
            remainingDuration: true,
            keyEnabled: true,
            keyBindings: {
                loop: null,
                muted: null,
                volumeUp: null,
                volumeDown: null
            },
            wmode: "window",
            cssSelector: cssSelectorOptions,
            stateClass: stateClassOptions
        });

        $("#jquery_jplayer_audio_social_cover").jPlayer({
            ready: function () {
                $(this).jPlayer("setMedia", {
                    title: "Miaow - Bubble",
                    m4a: "http://jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
                    oga: "http://jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
                });
            },
            play: function () {
                $(this).jPlayer("pauseOthers");
            },
            timeFormat: {
                padMin: false
            },
            swfPath: "js/jplayer",
            supplied: "m4a,oga",
            cssSelectorAncestor: "#audio_social_cover",
            useStateClassSkin: true,
            autoBlur: false,
            smoothPlayBar: true,
            remainingDuration: true,
            keyEnabled: true,
            keyBindings: {
                loop: null,
                muted: null,
                volumeUp: null,
                volumeDown: null
            },
            wmode: "window",
            cssSelector: cssSelectorOptions,
            stateClass: stateClassOptions
        });

        $("#jquery_jplayer_video_1").jPlayer({
            ready: function (b) {
                var c = $(this).jPlayer("setMedia", {
                    title: "Big Buck Bunny Trailer",
                    m4v: "http://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v",
                    ogv: "http://jplayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv",
                    webmv: "http://jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm",
                    poster: "http://jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png"
                });
                if (b.jPlayer.status.noFullWindow) {
                    var d = $(c.jPlayer("option", "wrapper"));
                    d.find(".screen-control").hide();
                    d.find(".bar").css({
                        right: "0"
                    });
                }
                var e = function () {
                    var a = c.data("jPlayer").ancestorJq.width(),
                        b = 9 * a / 16;

                    c.jPlayer("option", "size", {
                        width: a + "px",
                        height: b + "px"
                    });

                };
                var f = $.jPlayer.platform;
                if (f.ipad || (f.iphone || (f.ipod || b.jPlayer.flash.used))) {
                    $(window).on("resize", function() {
                        e();
                    });
                    e();
                }
            },
            timeFormat: {
                padMin: false
            },
            swfPath: "js/jplayer",
            supplied: "webmv, ogv, m4v",
            cssSelectorAncestor: "#video",
            size: {
                width: "100%",
                height: "auto",
                cssClass: "video-responsive"
            },
            sizeFull: {
                cssClass: "video-full"
            },
            autohide: {
                full: false,
                restored: false
            },
            play: function () {
                //$(this).jPlayer("option", "autohide", {
                //    full: true,
                //    restored: true
                //});
                $(this).jPlayer("pauseOthers");
            },
            pause: function () {
                //$(this).jPlayer("option", "autohide", {
                //    full: false,
                //    restored: false
                //});
            },
            click: function (b) {
                $(this).jPlayer(b.jPlayer.status.paused ? "play" : "pause");
            },
            useStateClassSkin: true,
            autoBlur: false,
            smoothPlayBar: !($.jPlayer.browser.msie && $.jPlayer.browser.version < 9),
            remainingDuration: true,
            keyEnabled: true,
            cssSelector: cssSelectorOptions,
            stateClass: stateClassOptions
        });

        new jPlayerPlaylist({
            jPlayer: "#jquery_playlist_1_player",
            cssSelectorAncestor: "#jquery_playlist_1"
        }, [
            {
                title:"Cro Magnon Man",
                artist:"The Stark Palace",
                mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
                oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
                poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
            },
            {
                title:"Incredibles Teaser",
                artist:"Pixar",
                m4v: "http://www.jplayer.org/video/m4v/Incredibles_Teaser.m4v",
                ogv: "http://www.jplayer.org/video/ogv/Incredibles_Teaser.ogv",
                webmv: "http://www.jplayer.org/video/webm/Incredibles_Teaser.webm",
                poster: "http://www.jplayer.org/video/poster/Incredibles_Teaser_640x272.png"
            },{
                title:"Finding Nemo Teaser",
                artist:"Pixar",
                m4v: "http://www.jplayer.org/video/m4v/Finding_Nemo_Teaser.m4v",
                ogv: "http://www.jplayer.org/video/ogv/Finding_Nemo_Teaser.ogv",
                webmv: "http://www.jplayer.org/video/webm/Finding_Nemo_Teaser.webm",
                poster: "http://www.jplayer.org/video/poster/Finding_Nemo_Teaser_640x352.png"
            }
        ], {
            playlistOptions: {
                enableRemoveControls: false
            },
            swfPath: "js/jplayer",
            supplied: "webmv, ogv, m4v, oga, mp3",
            useStateClassSkin: true,
            autoBlur: false,
            smoothPlayBar: true,
            keyEnabled: true,
            audioFullScreen: true,
            size: {
                width: "100%",
                height: "auto",
                cssClass: "video-responsive"
            },
            sizeFull: {
                cssClass: "video-full"
            },
            cssSelector: cssSelectorOptions,
            stateClass: stateClassOptions
        });

        new jPlayerPlaylist({
            jPlayer: "#jquery_playlist_2_player",
            cssSelectorAncestor: "#jquery_playlist_2"
        }, [
            {
                title:"Cro Magnon Man",
                mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
                oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg"
            },
            {
                title:"Your Face",
                mp3:"http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3",
                oga:"http://www.jplayer.org/audio/ogg/TSP-05-Your_face.ogg"
            },
            {
                title:"Cyber Sonnet",
                mp3:"http://www.jplayer.org/audio/mp3/TSP-07-Cybersonnet.mp3",
                oga:"http://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg"
            },
            {
                title:"Tempered Song",
                mp3:"http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
                oga:"http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg"
            },
            {
                title:"Hidden",
                mp3:"http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3",
                oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
            },
            {
                title:"Lentement",
                mp3:"http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
                oga:"http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg"
            },
            {
                title:"Lismore",
                mp3:"http://www.jplayer.org/audio/mp3/Miaow-04-Lismore.mp3",
                oga:"http://www.jplayer.org/audio/ogg/Miaow-04-Lismore.ogg"
            },
            {
                title:"The Separation",
                mp3:"http://www.jplayer.org/audio/mp3/Miaow-05-The-separation.mp3",
                oga:"http://www.jplayer.org/audio/ogg/Miaow-05-The-separation.ogg"
            },
            {
                title:"Beside Me",
                mp3:"http://www.jplayer.org/audio/mp3/Miaow-06-Beside-me.mp3",
                oga:"http://www.jplayer.org/audio/ogg/Miaow-06-Beside-me.ogg"
            },
            {
                title:"Bubble",
                mp3:"http://www.jplayer.org/audio/mp3/Miaow-07-Bubble.mp3",
                oga:"http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
            },
            {
                title:"Stirring of a Fool",
                mp3:"http://www.jplayer.org/audio/mp3/Miaow-08-Stirring-of-a-fool.mp3",
                oga:"http://www.jplayer.org/audio/ogg/Miaow-08-Stirring-of-a-fool.ogg"
            },
            {
                title:"Partir",
                mp3:"http://www.jplayer.org/audio/mp3/Miaow-09-Partir.mp3",
                oga:"http://www.jplayer.org/audio/ogg/Miaow-09-Partir.ogg"
            },
            {
                title:"Thin Ice",
                mp3:"http://www.jplayer.org/audio/mp3/Miaow-10-Thin-ice.mp3",
                oga:"http://www.jplayer.org/audio/ogg/Miaow-10-Thin-ice.ogg"
            }
        ], {
            playlistOptions: {
                enableRemoveControls: false
            },
            swfPath: "js/jplayer",
            supplied: "oga, mp3",
            useStateClassSkin: true,
            autoBlur: false,
            smoothPlayBar: true,
            keyEnabled: true,
            cssSelector: cssSelectorOptions,
            stateClass: stateClassOptions
        });

    });

})(jQuery);
},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/media/js/player/main.js":[function(require,module,exports){
require('./_player');
},{"./_player":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/media/js/player/_player.js"}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/navbar/js/_switch.js":[function(require,module,exports){
(function ($) {
    $("[name='switch-checkbox']").bootstrapSwitch({
        offColor: 'danger'
    });
})(jQuery);
},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/navbar/js/main.js":[function(require,module,exports){
require('./_switch');
},{"./_switch":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/navbar/js/_switch.js"}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/sidebar/js/_breakpoints.js":[function(require,module,exports){
(function ($) {
    "use strict";

    var restore = function () {
            $("html").addClass('show-sidebar');
            $('.sidebar.sidebar-visible-desktop').not(':visible').each(function () {
                var options = sidebar.options($(this));
                sidebar.open($(this).attr('id'), options);
            });
        },
        hide = function () {
            $("html").removeClass('show-sidebar');
            $('.sidebar:visible').each(function () {
                sidebar.close($(this).attr('id'));
            });
        };

    $(window).bind('enterBreakpoint768', function () {
        if (! $('.sidebar').length) return;
        if ($('.hide-sidebar').length) return;
        restore();
    });

    $(window).bind('enterBreakpoint1024', function () {
        if (! $('.sidebar').length) return;
        if ($('.hide-sidebar').length) return;
        restore();
    });

    $(window).bind('enterBreakpoint480', function () {
        if (! $('.sidebar').length) return;
        hide();
    });

    if ($(window).width() <= 480) {
        if (! $('.sidebar').length) return;
        hide();
    }

})(jQuery);

},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/sidebar/js/_collapsible.js":[function(require,module,exports){
(function($){

    require('./_transform_collapse')();

})(jQuery);
},{"./_transform_collapse":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/sidebar/js/_transform_collapse.js"}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/sidebar/js/_dropdown.js":[function(require,module,exports){
(function ($) {

    var transform_dd = require('./_transform_dropdown'),
        transform_collapse = require('./_transform_collapse');

    transform_dd();

    $(window).bind('enterBreakpoint480', function () {
        if (! $('.sidebar[data-type="dropdown"]').length) return;
        $('.sidebar[data-type="dropdown"]').attr('data-type', 'collapse').attr('data-transformed', true);
        transform_collapse();
    });

    function make_dd() {
        if (! $('.sidebar[data-type="collapse"][data-transformed]').length) return;
        $('.sidebar[data-type="collapse"][data-transformed]').attr('data-type', 'dropdown').attr('data-transformed', true);
        transform_dd();
    }

    $(window).bind('enterBreakpoint768', make_dd);

    $(window).bind('enterBreakpoint1024', make_dd);

})(jQuery);
},{"./_transform_collapse":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/sidebar/js/_transform_collapse.js","./_transform_dropdown":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/sidebar/js/_transform_dropdown.js"}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/sidebar/js/_options.js":[function(require,module,exports){
module.exports = function (sidebar) {
    return {
        "transform-button": sidebar.data('transformButton') === true,
        "transform-button-icon": sidebar.data('transformButtonIcon') || 'fa-ellipsis-h'
    };
};
},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/sidebar/js/_sidebar-menu.js":[function(require,module,exports){
(function ($) {

    var sidebars = $('.sidebar');

    sidebars.each(function () {

        var sidebar = $(this);
        var options = require('./_options')(sidebar);

        if (options[ 'transform-button' ]) {
            var button = $('<button type="button"></button>');

            button
                .attr('data-toggle', 'sidebar-transform')
                .addClass('btn btn-default')
                .html('<i class="fa ' + options[ 'transform-button-icon' ] + '"></i>');

            sidebar.find('.sidebar-menu').append(button);
        }
    });

}(jQuery));
},{"./_options":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/sidebar/js/_options.js"}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/sidebar/js/_sidebar-toggle.js":[function(require,module,exports){
(function ($) {
    /*jshint browser: true, strict: false */

    $('#subnav').collapse({'toggle': false});

    $('[data-toggle="sidebar-transform"]').on('click', function () {
        $('body').toggleClass('sidebar-mini');
        if ($('body').is('.sidebar-mini')) $('.sidebar-menu .collapse').collapse('hide');
        $('#dropdown-temp').hide();
        $('.sidebar-menu .open').removeClass('open');
    });

})(jQuery);

(function ($) {

    function mobilecheck() {
        var check = false;
        (function (a) {
            if (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
                check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    }

    (function () {

        var defaults = {
                effect: 'st-effect-1',
                duration: 550,
                overlay: false
            },

            container = $('.st-container'),

            eventtype = mobilecheck() ? 'touchstart' : 'click',

            getLayoutClasses = function (sidebar, direction) {

                var layoutClasses = sidebar.data('layoutClasses');

                if (! layoutClasses) {
                    var toggleLayout = sidebar.data('toggleLayout');
                    if (typeof toggleLayout == 'string') {
                        layoutClasses = toggleLayout.split(",").join(" ");
                        sidebar.data('layoutClasses', layoutClasses);
                        return layoutClasses;
                    }

                    var match = new RegExp('sidebar-' + direction + '(\\S+)', 'ig');
                    layoutClasses = $('html').get(0).className.match(match);
                    if (layoutClasses !== null && layoutClasses.length) {
                        layoutClasses = layoutClasses.join(" ");
                        sidebar.data('layoutClasses', layoutClasses);
                    }
                }

                return layoutClasses;

            },

            getSidebarDataOptions = function(sidebar){

                return {
                    effect: sidebar.data('effect'),
                    overlay: sidebar.data('overlay')
                };

            },

            animating = function () {

                if ($('body').hasClass('animating')) return true;
                $('body').addClass('animating');

                setTimeout(function () {
                    $('body').removeClass('animating');
                }, defaults.duration);

                return false;

            },

            reset = function (id, options) {

                var target = typeof id !== 'undefined' ? '#' + id : container.data('stMenuTarget'),
                    sidebar = $(target);

                if (! sidebar.length) return false;
                if (! sidebar.is(':visible')) return false;
                if (sidebar.hasClass('sidebar-closed')) return false;

                var effect = typeof options !== 'undefined' && options.effect ? options.effect : container.data('stMenuEffect'),
                    direction = sidebar.is('.left') ? 'l' : 'r',
                    size = sidebar.get(0).className.match(/sidebar-size-(\S+)/).pop(),
                    htmlClass = 'st-effect-' + direction + size,
                    toggleLayout = sidebar.data('toggleLayout'),
                    layoutClasses = getLayoutClasses(sidebar, direction),
                    eventData = {
                        sidebar: sidebar,
                        target: target
                    };

                $(document).trigger('sidebar.hide', eventData);

                $('[data-toggle="sidebar-menu"][href="' + target + '"]')
                    .removeClass('active')
                    .closest('li')
                    .removeClass('active');

                $('html').addClass(htmlClass);
                sidebar.addClass(effect);
                container.addClass(effect);

                container.removeClass('st-menu-open st-pusher-overlay');

                setTimeout(function () {
                    $('html').removeClass(htmlClass);
                    if (toggleLayout) $('html').removeClass(layoutClasses);
                    sidebar.removeClass(effect);
                    container.get(0).className = 'st-container'; // clear
                    sidebar.addClass('sidebar-closed').hide();
                    $(document).trigger('sidebar.hidden', eventData);
                }, defaults.duration);

            },

            open = function (target, options) {

                var sidebar = $(target);
                if (! sidebar.length) return false;

                // on mobile, allow only one sidebar to be open at the same time
                if ($(window).width() < 768 && container.hasClass('st-menu-open')) {
                    return reset();
                }

                $('[data-toggle="sidebar-menu"][href="' + target + '"]')
                    .addClass('active')
                    .closest('li')
                    .addClass('active');

                var effect = options.effect,
                    overlay = options.overlay;

                var direction = sidebar.is('.left') ? 'l' : 'r',
                    size = sidebar.get(0).className.match(/sidebar-size-(\S+)/).pop(),
                    htmlClass = 'st-effect-' + direction + size,
                    toggleLayout = sidebar.data('toggleLayout'),
                    layoutClasses = getLayoutClasses(sidebar, direction),
                    eventData = {
                        sidebar: sidebar,
                        target: target
                    };

                $(document).trigger('sidebar.show', eventData);

                $('html').addClass(htmlClass);
                sidebar.show().removeClass('sidebar-closed');

                container.data('stMenuEffect', effect);
                container.data('stMenuTarget', target);

                sidebar.addClass(effect);
                container.addClass(effect);
                if (overlay) container.addClass('st-pusher-overlay');

                setTimeout(function () {
                    container.addClass('st-menu-open');
                    sidebar.find('[data-scrollable]').getNiceScroll().resize();
                    $(window).trigger('resize');
                }, 25);

                setTimeout(function () {
                    if (toggleLayout) $('html').addClass(layoutClasses);
                    $(document).trigger('sidebar.shown', eventData);
                }, defaults.duration);

            },

            toggle = function (e) {

                e.stopPropagation();
                e.preventDefault();

                var a = animating();
                if (a) return false;

                var button = $(this),
                    target = button.attr('href'),
                    sidebar;

                if (target.length > 3) {
                    sidebar = $(target);
                    if (! sidebar.length) return false;
                }

                if (target.length < 3) {
                    var currentActiveElement = $('[data-toggle="sidebar-menu"]').not(this).closest('li').length ? $('[data-toggle="sidebar-menu"]').not(this).closest('li') : $('[data-toggle="sidebar-menu"]').not(this);
                    var activeElement = $(this).closest('li').length ? $(this).closest('li') : $(this);

                    currentActiveElement.removeClass('active');
                    activeElement.addClass('active');

                    if ($('html').hasClass('show-sidebar')) activeElement.removeClass('active');

                    $('html').removeClass('show-sidebar');

                    if (activeElement.hasClass('active')) $('html').addClass('show-sidebar');
                    return;
                }

                var dataOptions = getSidebarDataOptions(sidebar),
                    buttonOptions = {};

                if (button.data('effect')) buttonOptions.effect = button.data('effect');
                if (button.data('overlay')) buttonOptions.overlay = button.data('overlay');

                var options = $.extend({}, defaults, dataOptions, buttonOptions);

                if (! sidebar.hasClass('sidebar-closed') && sidebar.is(':visible')) {
                    reset(sidebar.attr('id'), options);
                    return;
                }

                open(target, options);

            };

        $('body').on(eventtype, '[data-toggle="sidebar-menu"]', toggle);

        $(document).on('keydown', null, 'esc', function () {
            if (container.hasClass('st-menu-open')) {
                reset();
                return false;
            }
        });

        $('.sidebar').each(function(){
            var sidebar = $(this);

            /* Sidebar Toggle Bar */
            if (sidebar.data('toggleBar')) {
                var bar = $('<a></a>');
                bar.attr('href', '#' + sidebar.attr('id'))
                    .attr('data-toggle', 'sidebar-menu')
                    .addClass('sidebar-toggle-bar');

                sidebar.append(bar);
            }
        });

        window.sidebar = {

            open: function (id, options) {

                var a = animating();
                if (a) return false;

                options = $.extend({}, defaults, options);

                return open('#' + id, options);

            },

            close: function (id, options) {

                options = $.extend({}, defaults, options);

                return reset(id, options);

            },

            options: getSidebarDataOptions

        };

    })();

})(jQuery);
},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/sidebar/js/_transform_collapse.js":[function(require,module,exports){
module.exports = function () {
    var dd = $('.sidebar[data-type="collapse"]');

    if (dd.length) {

        $('.sidebar .sidebar-menu > li > a').off('mouseenter');
        $('.sidebar .sidebar-menu > li.dropdown > a').off('mouseenter');
        $('.sidebar .sidebar-menu > li > a').off('mouseenter');
        $('.sidebar .sidebar-menu > li > a').off('click');
        $('.sidebar').off('mouseleave');
        $('.sidebar .dropdown').off('mouseover');
        $('.sidebar .dropdown').off('mouseout');
        $('body').off('mouseout', '#dropdown-temp .dropdown');

        $('.sidebar ul.collapse').off('shown.bs.collapse');
        $('.sidebar ul.collapse').off('show.bs.collapse');
        $('.sidebar ul.collapse').off('hide.bs.collapse');
        $('.sidebar ul.collapse').off('hidden.bs.collapse');

        dd.find('#dropdown-temp').remove();

        dd.find('.hasSubmenu').removeClass('dropdown')
            .find('> ul').addClass('collapse').removeClass('dropdown-menu submenu-hide submenu-show')
            .end()
            .find('> a').attr('data-toggle', 'collapse');

        dd.find('.collapse').collapse({ 'toggle': false });

        $('.sidebar ul.collapse').on('shown.bs.collapse', function (e) {
            $('.sidebar [data-scrollable]').getNiceScroll().resize();
        });

        // Collapse
        $('.sidebar ul.collapse').on('show.bs.collapse', function (e) {
            e.stopPropagation();
            var parents = $(this).parents('ul:first').find('> li.open [data-toggle="collapse"]');
            if (parents.length) {
                parents.trigger('click');
            }
            $(this).parent().addClass("open");
        });

        $('.sidebar ul.collapse').on('hidden.bs.collapse', function (e) {
            e.stopPropagation();
            $(this).parent().removeClass("open");
        });
    }
};
},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/sidebar/js/_transform_dropdown.js":[function(require,module,exports){
module.exports = function () {
    var dd = $('.sidebar[data-type="dropdown"]');

    if (dd.length) {

        $('.sidebar ul.collapse')
            .off('shown.bs.collapse')
            .off('show.bs.collapse')
            .off('hidden.bs.collapse');

        dd.each(function () {
            var sidebar = $(this);
            var nice = sidebar.find('[data-scrollable]').getNiceScroll()[ 0 ];

            nice.scrollstart(function () {
                if (! sidebar.is('[data-type="dropdown"]')) return;
                sidebar.addClass('scrolling');
                sidebar.find('#dropdown-temp > ul > li').empty();
                sidebar.find('#dropdown-temp').hide();
                sidebar.find('.open').removeClass('open');
            });

            nice.scrollend(function () {
                if (! sidebar.is('[data-type="dropdown"]')) return;
                $.data(this, 'lastScrollTop', nice.getScrollTop());
                sidebar.removeClass('scrolling');
            });
        });

        dd.find('.hasSubmenu').addClass('dropdown').removeClass('open')
            .find('> ul').addClass('dropdown-menu').removeClass('collapse in').removeAttr('style')
            .end()
            .find('> a').removeClass('collapsed')
            .removeAttr('data-toggle');

        $('.sidebar[data-type="dropdown"] .sidebar-menu > li.dropdown > a').on('mouseenter', function () {
            if (! $(this).parent('.dropdown').is('.open') && ! $(this).closest('.sidebar').is('.scrolling')) {
                var p = $(this).parent('.dropdown'),
                    t = p.find('> .dropdown-menu').clone().removeClass('submenu-hide'),
                    sidebar = $(this).parents('.sidebar:first'),
                    m = sidebar.find('.sidebar-menu'),
                    c = sidebar.find('> #dropdown-temp');

                m.find('.open').removeClass('open');

                if (! c.length) {
                    c = $('<div/>').attr('id', 'dropdown-temp').appendTo(sidebar);
                    c.html('<ul><li></li></ul>');
                }

                c.show();
                c.find('.dropdown-menu').remove();
                c = c.find('> ul > li').css({overflow: 'visible'}).addClass('dropdown open');

                p.addClass('open');
                t.appendTo(c).css({
                    top: p.offset().top - c.offset().top,
                    left: '100%'
                }).show();

                if (sidebar.is('.right')) {
                    t.css({
                        left: 'auto',
                        right: '100%'
                    });
                }
            }
        });

        $('.sidebar[data-type="dropdown"] .sidebar-menu > li > a').on('mouseenter', function () {

            if (! $(this).parent().is('.dropdown')) {
                var sidebar = $(this).closest('.sidebar');
                sidebar.find('.open').removeClass('open');
                sidebar.find('#dropdown-temp').hide();
            }

        });

        $('.sidebar[data-type="dropdown"] .sidebar-menu > li > a').on('click', function (e) {
            if ($(this).parent().is('.dropdown')) {
                e.preventDefault();
                e.stopPropagation();
            }
        });

        $('.sidebar[data-type="dropdown"]').on('mouseleave', function () {
            $(this).find('#dropdown-temp').hide();
            $(this).find('.open').removeClass('open');
        });

        $('.sidebar[data-type="dropdown"] .dropdown').on('mouseover', function () {
            $(this).addClass('open').children('ul').removeClass('submenu-hide').addClass('submenu-show');
        }).on('mouseout', function () {
            $(this).children('ul').removeClass('.submenu-show').addClass('submenu-hide');
        });

        $('body').on('mouseout', '#dropdown-temp .dropdown', function () {
            $('.sidebar-menu .open').removeClass('.open');
        });
    }
};
},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/sidebar/js/main.js":[function(require,module,exports){
require('./_breakpoints');
require('./_sidebar-menu');
require('./_collapsible');
require('./_dropdown');
require('./_sidebar-toggle');
},{"./_breakpoints":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/sidebar/js/_breakpoints.js","./_collapsible":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/sidebar/js/_collapsible.js","./_dropdown":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/sidebar/js/_dropdown.js","./_sidebar-menu":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/sidebar/js/_sidebar-menu.js","./_sidebar-toggle":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/sidebar/js/_sidebar-toggle.js"}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/social/js/_cover.js":[function(require,module,exports){
(function ($) {
    "use strict";

    function height() {
        $('.cover.overlay').filter(':visible').not('[class*="height"]').each(function () {
            var t = $(this),
                i = t.find('img:first');

            t.height(i.height());
            $('.overlay-full', t).innerHeight(i.height());
        });
    }

    $(document).ready(height);
    $(window).on('load', height);

    var t;
    $(window).on("debouncedresize", function(){
        clearTimeout(t);
        t = setTimeout(height, 200);
    });

})(jQuery);

},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/ui/js/_show-hover.js":[function(require,module,exports){
(function ($) {

    var showHover = function () {
        $('[data-show-hover]').hide().each(function () {
            var self = $(this),
                parent = $(this).data('showHover');

            self.closest(parent).on('mouseover', function (e) {
                e.stopPropagation();
                self.show();
            }).on('mouseout', function () {
                self.hide();
            });
        });
    };

    showHover();

    window.showHover = showHover;

})(jQuery);
},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/ui/js/_skin.js":[function(require,module,exports){
module.exports=require("/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/layout/js/_skin.js")
},{"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/layout/js/_skin.js":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/layout/js/_skin.js"}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/ui/js/_tabs.js":[function(require,module,exports){
(function ($) {

    var skin = require('./_skin')();

    $('.tabbable .nav-tabs').each(function(){
        var tabs = $(this).niceScroll({
            cursorborder: 0,
            cursorcolor: config.skins[ skin ][ 'primary-color' ],
            horizrailenabled: true,
            oneaxismousemode: true
        });

        var _super = tabs.getContentSize;
        tabs.getContentSize = function() {
            var page = _super.call(tabs);
            page.h = tabs.win.height();
            return page;
        };
    });

    $('[data-scrollable]').getNiceScroll().resize();

    $('.tabbable .nav-tabs a').on('shown.bs.tab', function(e){
        var tab = $(this).closest('.tabbable');
        var target = $(e.target),
            targetPane = target.attr('href') || target.data('target');

        // refresh tabs with horizontal scroll
        tab.find('.nav-tabs').getNiceScroll().resize();

        // refresh [data-scrollable] within the activated tab pane
        $(targetPane).find('[data-scrollable]').getNiceScroll().resize();
    });

}(jQuery));
},{"./_skin":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/ui/js/_skin.js"}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/ui/js/_tree.js":[function(require,module,exports){
(function ($) {

    var tree_glyph_options = {
        map: {
            checkbox: "fa fa-square-o",
            checkboxSelected: "fa fa-check-square",
            checkboxUnknown: "fa fa-check-square fa-muted",
            error: "fa fa-exclamation-triangle",
            expanderClosed: "fa fa-caret-right",
            expanderLazy: "fa fa-angle-right",
            expanderOpen: "fa fa-caret-down",
            doc: "fa fa-file-o",
            noExpander: "",
            docOpen: "fa fa-file",
            loading: "fa fa-refresh fa-spin",
            folder: "fa fa-folder",
            folderOpen: "fa fa-folder-open"
        }
    },
    tree_dnd_options = {
        autoExpandMS: 400,
            focusOnClick: true,
            preventVoidMoves: true, // Prevent dropping nodes 'before self', etc.
            preventRecursiveMoves: true, // Prevent dropping nodes on own descendants
            dragStart: function(node, data) {
            /** This function MUST be defined to enable dragging for the tree.
             *  Return false to cancel dragging of node.
             */
            return true;
        },
        dragEnter: function(node, data) {
            /** data.otherNode may be null for non-fancytree droppables.
             *  Return false to disallow dropping on node. In this case
             *  dragOver and dragLeave are not called.
             *  Return 'over', 'before, or 'after' to force a hitMode.
             *  Return ['before', 'after'] to restrict available hitModes.
             *  Any other return value will calc the hitMode from the cursor position.
             */
            // Prevent dropping a parent below another parent (only sort
            // nodes under the same parent)
            /*
            if(node.parent !== data.otherNode.parent){
                return false;
            }
            // Don't allow dropping *over* a node (would create a child)
            return ["before", "after"];
            */
            return true;
        },
        dragDrop: function(node, data) {
            /** This function MUST be defined to enable dropping of items on
             *  the tree.
             */
            data.otherNode.moveTo(node, data.hitMode);
        }
    };

    // using default options
    $('[data-toggle="tree"]').each(function () {
        var extensions = [ "glyph" ];
        if (typeof $(this).attr('data-tree-dnd') !== "undefined") {
            extensions.push( "dnd" );
        }
        $(this).fancytree({
            extensions: extensions,
            glyph: tree_glyph_options,
            dnd: tree_dnd_options,
            clickFolderMode: 3,
            checkbox: typeof $(this).attr('data-tree-checkbox') !== "undefined" || false,
            selectMode: typeof $(this).attr('data-tree-select') !== "undefined" ? parseInt($(this).attr('data-tree-select')) : 2
        });
    });

}(jQuery));
},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/ui/js/main.js":[function(require,module,exports){
require('./_tabs');
require('./_tree');
require('./_show-hover');
},{"./_show-hover":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/ui/js/_show-hover.js","./_tabs":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/ui/js/_tabs.js","./_tree":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/ui/js/_tree.js"}]},{},["./app/js/themes/music/main.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvdGhlbWVzL211c2ljL21haW4uanMiLCJhcHAvanMvY29tbW9uL21haW4uanMiLCJhcHAvanMvY29tcG9uZW50cy9mb3Jtcy9fZGF0ZXBpY2tlci5qcyIsImFwcC9qcy9jb21wb25lbnRzL2Zvcm1zL19taW5pY29sb3JzLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvZm9ybXMvX3Byb2dyZXNzLWJhcnMuanMiLCJhcHAvanMvY29tcG9uZW50cy9mb3Jtcy9fc2VsZWN0cGlja2VyLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvZm9ybXMvX3NsaWRlci5qcyIsImFwcC9qcy9jb21wb25lbnRzL2Zvcm1zL21haW4uanMiLCJhcHAvanMvY29tcG9uZW50cy9vdGhlci9fb2ZmY2FudmFzLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvb3RoZXIvX3JhdGluZ3MuanMiLCJhcHAvanMvY29tcG9uZW50cy9vdGhlci9fdG9vbHRpcC5qcyIsImFwcC9qcy9jb21wb25lbnRzL3RhYmxlcy9fY2hlY2stYWxsLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvdGFibGVzL19kYXRhdGFibGVzLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvdGFibGVzL21haW4uanMiLCJhcHAvdmVuZG9yL2NoYXQvanMvX2JyZWFrcG9pbnRzLmpzIiwiYXBwL3ZlbmRvci9jaGF0L2pzL19zZWFyY2guanMiLCJhcHAvdmVuZG9yL2NoYXQvanMvX3RvZ2dsZS5qcyIsImFwcC92ZW5kb3IvY2hhdC9qcy9fd2luZG93cy5qcyIsImFwcC92ZW5kb3IvY2hhdC9qcy9tYWluLmpzIiwiYXBwL3ZlbmRvci9sYXlvdXQvanMvX2FzeW5jLmpzIiwiYXBwL3ZlbmRvci9sYXlvdXQvanMvX2JyZWFrcG9pbnRzLmpzIiwiYXBwL3ZlbmRvci9sYXlvdXQvanMvX2dyaWRhbGljaW91cy5qcyIsImFwcC92ZW5kb3IvbGF5b3V0L2pzL19zY3JvbGxhYmxlLmpzIiwiYXBwL3ZlbmRvci9sYXlvdXQvanMvX3NraW4uanMiLCJhcHAvdmVuZG9yL2xheW91dC9qcy9fc2tpbnMuanMiLCJhcHAvdmVuZG9yL2xheW91dC9qcy9tYWluLmpzIiwiYXBwL3ZlbmRvci9tZWRpYS9qcy9fcmVzcG9uc2l2ZS12aWRlb3MuanMiLCJhcHAvdmVuZG9yL21lZGlhL2pzL2Nhcm91c2VsL21haW4uanMiLCJhcHAvdmVuZG9yL21lZGlhL2pzL2Nhcm91c2VsL293bC9fZGVmYXVsdC5qcyIsImFwcC92ZW5kb3IvbWVkaWEvanMvY2Fyb3VzZWwvb3dsL19taXhlZC5qcyIsImFwcC92ZW5kb3IvbWVkaWEvanMvY2Fyb3VzZWwvb3dsL19wcmV2aWV3LmpzIiwiYXBwL3ZlbmRvci9tZWRpYS9qcy9jYXJvdXNlbC9vd2wvbWFpbi5qcyIsImFwcC92ZW5kb3IvbWVkaWEvanMvbWFpbi5qcyIsImFwcC92ZW5kb3IvbWVkaWEvanMvcGxheWVyL19wbGF5ZXIuanMiLCJhcHAvdmVuZG9yL21lZGlhL2pzL3BsYXllci9tYWluLmpzIiwiYXBwL3ZlbmRvci9uYXZiYXIvanMvX3N3aXRjaC5qcyIsImFwcC92ZW5kb3IvbmF2YmFyL2pzL21haW4uanMiLCJhcHAvdmVuZG9yL3NpZGViYXIvanMvX2JyZWFrcG9pbnRzLmpzIiwiYXBwL3ZlbmRvci9zaWRlYmFyL2pzL19jb2xsYXBzaWJsZS5qcyIsImFwcC92ZW5kb3Ivc2lkZWJhci9qcy9fZHJvcGRvd24uanMiLCJhcHAvdmVuZG9yL3NpZGViYXIvanMvX29wdGlvbnMuanMiLCJhcHAvdmVuZG9yL3NpZGViYXIvanMvX3NpZGViYXItbWVudS5qcyIsImFwcC92ZW5kb3Ivc2lkZWJhci9qcy9fc2lkZWJhci10b2dnbGUuanMiLCJhcHAvdmVuZG9yL3NpZGViYXIvanMvX3RyYW5zZm9ybV9jb2xsYXBzZS5qcyIsImFwcC92ZW5kb3Ivc2lkZWJhci9qcy9fdHJhbnNmb3JtX2Ryb3Bkb3duLmpzIiwiYXBwL3ZlbmRvci9zaWRlYmFyL2pzL21haW4uanMiLCJhcHAvdmVuZG9yL3NvY2lhbC9qcy9fY292ZXIuanMiLCJhcHAvdmVuZG9yL3VpL2pzL19zaG93LWhvdmVyLmpzIiwiYXBwL3ZlbmRvci91aS9qcy9fdGFicy5qcyIsImFwcC92ZW5kb3IvdWkvanMvX3RyZWUuanMiLCJhcHAvdmVuZG9yL3VpL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hFQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMVRBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdlJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekVBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBDT01NT05cbnJlcXVpcmUoJy4uLy4uL2NvbW1vbi9tYWluJyk7XG5cbi8vIEVzc2VudGlhbHNcbnJlcXVpcmUoJy4uLy4uLy4uL3ZlbmRvci91aS9qcy9tYWluJyk7XG5cbi8vIExheW91dFxucmVxdWlyZSgnLi4vLi4vLi4vdmVuZG9yL2xheW91dC9qcy9tYWluJyk7XG5cbi8vIFNpZGViYXJcbnJlcXVpcmUoJy4uLy4uLy4uL3ZlbmRvci9zaWRlYmFyL2pzL21haW4nKTtcblxuLy8gTmF2YmFyXG5yZXF1aXJlKCcuLi8uLi8uLi92ZW5kb3IvbmF2YmFyL2pzL21haW4nKTtcblxuLy8gQ2hhdFxucmVxdWlyZSgnLi4vLi4vLi4vdmVuZG9yL2NoYXQvanMvbWFpbicpO1xuXG4vLyBDYXJvdXNlbHNcbnJlcXVpcmUoJy4uLy4uLy4uL3ZlbmRvci9tZWRpYS9qcy9tYWluJyk7XG5cbi8vIE1lZGlhIFBsYXllcnNcbnJlcXVpcmUoJy4uLy4uLy4uL3ZlbmRvci9tZWRpYS9qcy9wbGF5ZXIvbWFpbicpO1xuXG4vLyBDb3ZlclxucmVxdWlyZSgnLi4vLi4vLi4vdmVuZG9yL3NvY2lhbC9qcy9fY292ZXInKTsiLCJyZXF1aXJlKCcuLi9jb21wb25lbnRzL2Zvcm1zL21haW4nKTtcbnJlcXVpcmUoJy4uL2NvbXBvbmVudHMvdGFibGVzL21haW4nKTtcbnJlcXVpcmUoJy4uL2NvbXBvbmVudHMvb3RoZXIvX3Rvb2x0aXAnKTtcbnJlcXVpcmUoJy4uL2NvbXBvbmVudHMvb3RoZXIvX29mZmNhbnZhcycpO1xucmVxdWlyZSgnLi4vY29tcG9uZW50cy9vdGhlci9fcmF0aW5ncycpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLy8gRGF0ZXBpY2tlciBJTklUXG4gICAgJCgnLmRhdGVwaWNrZXInKS5kYXRlcGlja2VyKCk7XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8vIE1pbmljb2xvcnMgSU5JVFxuICAgICQoJy5taW5pY29sb3JzJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykubWluaWNvbG9ycyh7XG4gICAgICAgICAgICBjb250cm9sOiAkKHRoaXMpLmF0dHIoJ2RhdGEtY29udHJvbCcpIHx8ICdodWUnLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiAkKHRoaXMpLmF0dHIoJ2RhdGEtZGVmYXVsdFZhbHVlJykgfHwgJycsXG4gICAgICAgICAgICBpbmxpbmU6ICQodGhpcykuYXR0cignZGF0YS1pbmxpbmUnKSA9PT0gJ3RydWUnLFxuICAgICAgICAgICAgbGV0dGVyQ2FzZTogJCh0aGlzKS5hdHRyKCdkYXRhLWxldHRlckNhc2UnKSB8fCAnbG93ZXJjYXNlJyxcbiAgICAgICAgICAgIG9wYWNpdHk6ICQodGhpcykuYXR0cignZGF0YS1vcGFjaXR5JyksXG4gICAgICAgICAgICBwb3NpdGlvbjogJCh0aGlzKS5hdHRyKCdkYXRhLXBvc2l0aW9uJykgfHwgJ2JvdHRvbSBsZWZ0JyxcbiAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24gKGhleCwgb3BhY2l0eSkge1xuICAgICAgICAgICAgICAgIGlmICghIGhleCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmIChvcGFjaXR5KSBoZXggKz0gJywgJyArIG9wYWNpdHk7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhoZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGVtZTogJ2Jvb3RzdHJhcCdcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcblxuICAgIC8vIFByb2dyZXNzIEJhciBBbmltYXRpb25cbiAgICAkKCcucHJvZ3Jlc3MtYmFyJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykud2lkdGgoJCh0aGlzKS5hdHRyKCdhcmlhLXZhbHVlbm93JykgKyAnJScpO1xuICAgIH0pO1xuXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgICQoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuc2VsZWN0cGlja2VyJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgJCh0aGlzKS5zZWxlY3RwaWNrZXIoe1xuICAgICAgICAgICAgICAgIHdpZHRoOiAkKHRoaXMpLmRhdGEoJ3dpZHRoJykgfHwgJzEwMCUnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICQoJ1tkYXRhLXNsaWRlcj1cImRlZmF1bHRcIl0nKS5zbGlkZXIoKTtcblxuICAgICQoJ1tkYXRhLXNsaWRlcj1cImZvcm1hdHRlclwiXScpLnNsaWRlcih7XG4gICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gJ0N1cnJlbnQgdmFsdWU6ICcgKyB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnW2RhdGEtb24tc2xpZGVdJykub24oXCJzbGlkZVwiLCBmdW5jdGlvbiAoc2xpZGVFdnQpIHtcbiAgICAgICAgJCgkKHRoaXMpLmF0dHIoJ2RhdGEtb24tc2xpZGUnKSkudGV4dChzbGlkZUV2dC52YWx1ZSk7XG4gICAgfSk7XG5cbiAgICAkKCcuc2xpZGVyLWhhbmRsZScpLmh0bWwoJzxpIGNsYXNzPVwiZmEgZmEtYmFycyBmYS1yb3RhdGUtOTBcIj48L2k+Jyk7XG5cbn0pKGpRdWVyeSk7IiwicmVxdWlyZSgnLi9fcHJvZ3Jlc3MtYmFycycpO1xucmVxdWlyZSgnLi9fc2xpZGVyJyk7XG5yZXF1aXJlKCcuL19zZWxlY3RwaWNrZXInKTtcbnJlcXVpcmUoJy4vX2RhdGVwaWNrZXInKTtcbnJlcXVpcmUoJy4vX21pbmljb2xvcnMnKTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8vIE9mZkNhbnZhc1xuICAgICQoJ1tkYXRhLXRvZ2dsZT1cIm9mZmNhbnZhc1wiXScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLnJvdy1vZmZjYW52YXMnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8vIFJhdGluZ3NcbiAgICAkKCcucmF0aW5nIHNwYW4uc3RhcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRvdGFsID0gJCh0aGlzKS5wYXJlbnQoKS5jaGlsZHJlbigpLmxlbmd0aDtcbiAgICAgICAgdmFyIGNsaWNrZWRJbmRleCA9ICQodGhpcykuaW5kZXgoKTtcbiAgICAgICAgJCgnLnJhdGluZyBzcGFuLnN0YXInKS5yZW1vdmVDbGFzcygnZmlsbGVkJyk7XG4gICAgICAgIGZvciAodmFyIGkgPSBjbGlja2VkSW5kZXg7IGkgPCB0b3RhbDsgaSArKykge1xuICAgICAgICAgICAgJCgnLnJhdGluZyBzcGFuLnN0YXInKS5lcShpKS5hZGRDbGFzcygnZmlsbGVkJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxufSkoalF1ZXJ5KTtcbiIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLy8gVG9vbHRpcFxuICAgICQoXCJib2R5XCIpLnRvb2x0aXAoe3NlbGVjdG9yOiAnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScsIGNvbnRhaW5lcjogXCJib2R5XCJ9KTtcblxufSkoalF1ZXJ5KTtcbiIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLy8gVGFibGUgQ2hlY2tib3ggQWxsXG4gICAgJCgnI2NoZWNrQWxsJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0YWJsZScpLmZpbmQoJ3RkIGlucHV0OmNoZWNrYm94JykucHJvcCgnY2hlY2tlZCcsIHRoaXMuY2hlY2tlZCk7XG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcblxuICAgIC8vIERhdGF0YWJsZXNcbiAgICAkKCcjZGF0YS10YWJsZScpLmRhdGFUYWJsZSgpO1xuXG59KShqUXVlcnkpOyIsInJlcXVpcmUoJy4vX2RhdGF0YWJsZXMnKTtcbnJlcXVpcmUoJy4vX2NoZWNrLWFsbCcpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgJCh3aW5kb3cpLmJpbmQoJ2VudGVyQnJlYWtwb2ludDQ4MCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmNoYXQtd2luZG93LWNvbnRhaW5lciAucGFuZWw6bm90KDpsYXN0KScpLnJlbW92ZSgpO1xuICAgICAgICAkKCcuY2hhdC13aW5kb3ctY29udGFpbmVyIC5wYW5lbCcpLmF0dHIoJ2lkJywgJ2NoYXQtMDAwMScpO1xuICAgIH0pO1xuXG4gICAgJCh3aW5kb3cpLmJpbmQoJ2VudGVyQnJlYWtwb2ludDc2OCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQoJy5jaGF0LXdpbmRvdy1jb250YWluZXIgLnBhbmVsJykubGVuZ3RoID09IDMpIHtcbiAgICAgICAgICAgICQoJy5jaGF0LXdpbmRvdy1jb250YWluZXIgLnBhbmVsOmZpcnN0JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAkKCcuY2hhdC13aW5kb3ctY29udGFpbmVyIC5wYW5lbDpmaXJzdCcpLmF0dHIoJ2lkJywgJ2NoYXQtMDAwMScpO1xuICAgICAgICAgICAgJCgnLmNoYXQtd2luZG93LWNvbnRhaW5lciAucGFuZWw6bGFzdCcpLmF0dHIoJ2lkJywgJ2NoYXQtMDAwMicpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgICAvLyBtYXRjaCBhbnl0aGluZ1xuICAgICQuZXhwclsgXCI6XCIgXS5jb250YWluc05vQ2FzZSA9IGZ1bmN0aW9uIChlbCwgaSwgbSkge1xuICAgICAgICB2YXIgc2VhcmNoID0gbVsgMyBdO1xuICAgICAgICBpZiAoISBzZWFyY2gpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoc2VhcmNoLCBcImlcIikudGVzdCgkKGVsKS50ZXh0KCkpO1xuICAgIH07XG5cbiAgICAvLyBTZWFyY2ggRmlsdGVyXG4gICAgZnVuY3Rpb24gc2VhcmNoRmlsdGVyQ2FsbEJhY2soJGRhdGEsICRvcHQpIHtcbiAgICAgICAgdmFyIHNlYXJjaCA9ICRkYXRhIGluc3RhbmNlb2YgalF1ZXJ5ID8gJGRhdGEudmFsKCkgOiAkKHRoaXMpLnZhbCgpLFxuICAgICAgICAgICAgb3B0ID0gdHlwZW9mICRvcHQgPT0gJ3VuZGVmaW5lZCcgPyAkZGF0YS5kYXRhLm9wdCA6ICRvcHQ7XG5cbiAgICAgICAgdmFyICR0YXJnZXQgPSAkKG9wdC50YXJnZXRTZWxlY3Rvcik7XG4gICAgICAgICR0YXJnZXQuc2hvdygpO1xuXG4gICAgICAgIGlmIChzZWFyY2ggJiYgc2VhcmNoLmxlbmd0aCA+PSBvcHQuY2hhckNvdW50KSB7XG4gICAgICAgICAgICAkdGFyZ2V0Lm5vdChcIjpjb250YWluc05vQ2FzZShcIiArIHNlYXJjaCArIFwiKVwiKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpbnB1dCBmaWx0ZXJcbiAgICAkLmZuLnNlYXJjaEZpbHRlciA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHZhciBvcHQgPSAkLmV4dGVuZCh7XG4gICAgICAgICAgICAvLyB0YXJnZXQgc2VsZWN0b3JcbiAgICAgICAgICAgIHRhcmdldFNlbGVjdG9yOiBcIlwiLFxuICAgICAgICAgICAgLy8gbnVtYmVyIG9mIGNoYXJhY3RlcnMgYmVmb3JlIHNlYXJjaCBpcyBhcHBsaWVkXG4gICAgICAgICAgICBjaGFyQ291bnQ6IDFcbiAgICAgICAgfSwgb3B0aW9ucyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgJGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgICRlbC5vZmYoXCJrZXl1cFwiLCBzZWFyY2hGaWx0ZXJDYWxsQmFjayk7XG4gICAgICAgICAgICAkZWwub24oXCJrZXl1cFwiLCBudWxsLCB7b3B0OiBvcHR9LCBzZWFyY2hGaWx0ZXJDYWxsQmFjayk7XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIC8vIEZpbHRlciBieSBBbGwvT25saW5lL09mZmxpbmVcbiAgICAkKFwiLmNoYXQtZmlsdGVyIGFcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQoJy5jaGF0LWNvbnRhY3RzIGxpJykuaGlkZSgpO1xuICAgICAgICAkKCcuY2hhdC1jb250YWN0cycpLmZpbmQoJCh0aGlzKS5kYXRhKCd0YXJnZXQnKSkuc2hvdygpO1xuXG4gICAgICAgICQoXCIuY2hhdC1maWx0ZXIgbGlcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICAkKFwiLmNoYXQtc2VhcmNoIGlucHV0XCIpLnNlYXJjaEZpbHRlcih7dGFyZ2V0U2VsZWN0b3I6IFwiLmNoYXQtY29udGFjdHMgXCIgKyAkKHRoaXMpLmRhdGEoJ3RhcmdldCcpfSk7XG5cbiAgICAgICAgLy8gRmlsdGVyIENvbnRhY3RzIGJ5IFNlYXJjaCBhbmQgVGFic1xuICAgICAgICBzZWFyY2hGaWx0ZXJDYWxsQmFjaygkKFwiLmNoYXQtc2VhcmNoIGlucHV0XCIpLCB7XG4gICAgICAgICAgICB0YXJnZXRTZWxlY3RvcjogXCIuY2hhdC1jb250YWN0cyBcIiArICQodGhpcykuZGF0YSgndGFyZ2V0JyksXG4gICAgICAgICAgICBjaGFyQ291bnQ6IDFcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBUcmlnZ2VyIFNlYXJjaCBGaWx0ZXJcbiAgICAkKFwiLmNoYXQtc2VhcmNoIGlucHV0XCIpLnNlYXJjaEZpbHRlcih7dGFyZ2V0U2VsZWN0b3I6IFwiLmNoYXQtY29udGFjdHMgbGlcIn0pO1xuXG59KShqUXVlcnkpO1xuIiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgICAkKCdbZGF0YS10b2dnbGU9XCJjaGF0LWJveFwiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIi5jaGF0LWNvbnRhY3RzIGxpOmZpcnN0XCIpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIGlmICgkKHRoaXMpLmRhdGEoJ2hpZGUnKSkgJCh0aGlzKS5oaWRlKCk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBjaGVja0NoYXQoKSB7XG4gICAgICAgIGlmICghICQoJ2h0bWwnKS5oYXNDbGFzcygnc2hvdy1jaGF0JykpIHtcbiAgICAgICAgICAgICQoJy5jaGF0LXdpbmRvdy1jb250YWluZXIgLnBhbmVsLWJvZHknKS5hZGRDbGFzcygnZGlzcGxheS1ub25lJyk7XG4gICAgICAgICAgICAkKCcuY2hhdC13aW5kb3ctY29udGFpbmVyIGlucHV0JykuYWRkQ2xhc3MoJ2Rpc3BsYXktbm9uZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnLmNoYXQtd2luZG93LWNvbnRhaW5lciAucGFuZWwtYm9keScpLnJlbW92ZUNsYXNzKCdkaXNwbGF5LW5vbmUnKTtcbiAgICAgICAgICAgICQoJy5jaGF0LXdpbmRvdy1jb250YWluZXIgaW5wdXQnKS5yZW1vdmVDbGFzcygnZGlzcGxheS1ub25lJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdG9nZ2xlQnRuID0gJCgnW2RhdGEtdG9nZ2xlPVwic2lkZWJhci1jaGF0XCJdJyk7XG5cbiAgICAgICAgLy8gSWYgTm8gU2lkZWJhciBFeGl0XG4gICAgICAgIGlmICghIHRvZ2dsZUJ0bi5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICB0b2dnbGVCdG4ub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAkKCdodG1sJykudG9nZ2xlQ2xhc3MoJ3Nob3ctY2hhdCcpO1xuXG4gICAgICAgICAgICBjaGVja0NoYXQoKTtcbiAgICAgICAgfSk7XG4gICAgfSkoKTtcblxuICAgIGNoZWNrQ2hhdCgpO1xufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIHZhciBjb250YWluZXIgPSAkKCcuY2hhdC13aW5kb3ctY29udGFpbmVyJyk7XG5cbiAgICAvLyBDbGljayBVc2VyXG4gICAgJChcIi5jaGF0LWNvbnRhY3RzIGxpXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoJCgnLmNoYXQtd2luZG93LWNvbnRhaW5lciBbZGF0YS11c2VyLWlkPVwiJyArICQodGhpcykuZGF0YSgndXNlcklkJykgKyAnXCJdJykubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgLy8gSWYgdXNlciBpcyBvZmZsaW5lIGRvIG5vdGhpbmdcbiAgICAgICAgaWYgKCQodGhpcykuYXR0cignY2xhc3MnKSA9PT0gJ29mZmxpbmUnKSByZXR1cm47XG5cbiAgICAgICAgdmFyIHNvdXJjZSA9ICQoXCIjY2hhdC13aW5kb3ctdGVtcGxhdGVcIikuaHRtbCgpO1xuICAgICAgICB2YXIgdGVtcGxhdGUgPSBIYW5kbGViYXJzLmNvbXBpbGUoc291cmNlKTtcblxuICAgICAgICB2YXIgY29udGV4dCA9IHt1c2VyX2ltYWdlOiAkKHRoaXMpLmZpbmQoJ2ltZycpLmF0dHIoJ3NyYycpLCB1c2VyOiAkKHRoaXMpLmZpbmQoJy5jb250YWN0LW5hbWUnKS50ZXh0KCl9O1xuICAgICAgICB2YXIgaHRtbCA9IHRlbXBsYXRlKGNvbnRleHQpO1xuXG4gICAgICAgIHZhciBjbG9uZSA9ICQoaHRtbCk7XG5cbiAgICAgICAgY2xvbmUuYXR0cihcImRhdGEtdXNlci1pZFwiLCAkKHRoaXMpLmRhdGEoXCJ1c2VySWRcIikpO1xuXG4gICAgICAgIGNvbnRhaW5lci5maW5kKCcucGFuZWw6bm90KFtpZF49XCJjaGF0XCJdKScpLnJlbW92ZSgpO1xuXG4gICAgICAgIHZhciBjb3VudCA9IGNvbnRhaW5lci5maW5kKCcucGFuZWwnKS5sZW5ndGg7XG5cbiAgICAgICAgY291bnQgKys7XG4gICAgICAgIHZhciBsaW1pdCA9ICQod2luZG93KS53aWR0aCgpID4gNzY4ID8gMyA6IDE7XG4gICAgICAgIGlmIChjb3VudCA+PSBsaW1pdCkge1xuICAgICAgICAgICAgY29udGFpbmVyLmZpbmQoJyNjaGF0LTAwMCcrIGxpbWl0KS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGNvdW50ID0gbGltaXQ7XG4gICAgICAgIH1cblxuICAgICAgICBjbG9uZS5hdHRyKCdpZCcsICdjaGF0LTAwMCcgKyBwYXJzZUludChjb3VudCkpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKGNsb25lKS5zaG93KCk7XG5cbiAgICAgICAgY2xvbmUuc2hvdygpO1xuICAgICAgICBjbG9uZS5maW5kKCc+IC5wYW5lbC1ib2R5JykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXktbm9uZScpO1xuICAgICAgICBjbG9uZS5maW5kKCc+IGlucHV0JykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXktbm9uZScpO1xuICAgIH0pO1xuXG4gICAgLy8gQ2hhbmdlIElEIGJ5IE5vLiBvZiBXaW5kb3dzXG4gICAgZnVuY3Rpb24gY2hhdExheW91dCgpIHtcbiAgICAgICAgY29udGFpbmVyLmZpbmQoJy5wYW5lbCcpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xuICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdpZCcsICdjaGF0LTAwMCcgKyBwYXJzZUludChpbmRleCArIDEpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlIHdpbmRvd1xuICAgICQoXCJib2R5XCIpLm9uKCdjbGljaycsIFwiLmNoYXQtd2luZG93LWNvbnRhaW5lciAuY2xvc2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLnJlbW92ZSgpO1xuICAgICAgICBjaGF0TGF5b3V0KCk7XG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDc2OCkgJCgnLmNoYXQtd2luZG93LWNvbnRhaW5lcicpLmhpZGUoKTtcbiAgICB9KTtcblxuICAgIC8vIENoYXQgaGVhZGluZyBjb2xsYXBzZSB3aW5kb3dcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5jaGF0LXdpbmRvdy1jb250YWluZXIgLnBhbmVsLWhlYWRpbmcnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQodGhpcykucGFyZW50KCkuZmluZCgnPiAucGFuZWwtYm9keScpLnRvZ2dsZUNsYXNzKCdkaXNwbGF5LW5vbmUnKTtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKCc+IGlucHV0JykudG9nZ2xlQ2xhc3MoJ2Rpc3BsYXktbm9uZScpO1xuICAgIH0pO1xuXG59KShqUXVlcnkpO1xuIiwicmVxdWlyZSgnLi9fYnJlYWtwb2ludHMnKTtcbnJlcXVpcmUoJy4vX3NlYXJjaCcpO1xucmVxdWlyZSgnLi9fd2luZG93cycpO1xucmVxdWlyZSgnLi9fdG9nZ2xlJyk7IiwiZnVuY3Rpb24gY29udGVudExvYWRlZCh3aW4sIGZuKSB7XG5cbiAgICB2YXIgZG9uZSA9IGZhbHNlLCB0b3AgPSB0cnVlLFxuXG4gICAgICAgIGRvYyA9IHdpbi5kb2N1bWVudCxcbiAgICAgICAgcm9vdCA9IGRvYy5kb2N1bWVudEVsZW1lbnQsXG4gICAgICAgIG1vZGVybiA9IGRvYy5hZGRFdmVudExpc3RlbmVyLFxuXG4gICAgICAgIGFkZCA9IG1vZGVybiA/ICdhZGRFdmVudExpc3RlbmVyJyA6ICdhdHRhY2hFdmVudCcsXG4gICAgICAgIHJlbSA9IG1vZGVybiA/ICdyZW1vdmVFdmVudExpc3RlbmVyJyA6ICdkZXRhY2hFdmVudCcsXG4gICAgICAgIHByZSA9IG1vZGVybiA/ICcnIDogJ29uJyxcblxuICAgICAgICBpbml0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChlLnR5cGUgPT0gJ3JlYWR5c3RhdGVjaGFuZ2UnICYmIGRvYy5yZWFkeVN0YXRlICE9ICdjb21wbGV0ZScpIHJldHVybjtcbiAgICAgICAgICAgIChlLnR5cGUgPT0gJ2xvYWQnID8gd2luIDogZG9jKVsgcmVtIF0ocHJlICsgZS50eXBlLCBpbml0LCBmYWxzZSk7XG4gICAgICAgICAgICBpZiAoISBkb25lICYmIChkb25lID0gdHJ1ZSkpIGZuLmNhbGwod2luLCBlLnR5cGUgfHwgZSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcG9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcm9vdC5kb1Njcm9sbCgnbGVmdCcpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQocG9sbCwgNTApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGluaXQoJ3BvbGwnKTtcbiAgICAgICAgfTtcblxuICAgIGlmIChkb2MucmVhZHlTdGF0ZSA9PSAnY29tcGxldGUnKSBmbi5jYWxsKHdpbiwgJ2xhenknKTtcbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKCEgbW9kZXJuICYmIHJvb3QuZG9TY3JvbGwpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdG9wID0gISB3aW4uZnJhbWVFbGVtZW50O1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRvcCkgcG9sbCgpO1xuICAgICAgICB9XG4gICAgICAgIGRvY1sgYWRkIF0ocHJlICsgJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0LCBmYWxzZSk7XG4gICAgICAgIGRvY1sgYWRkIF0ocHJlICsgJ3JlYWR5c3RhdGVjaGFuZ2UnLCBpbml0LCBmYWxzZSk7XG4gICAgICAgIHdpblsgYWRkIF0ocHJlICsgJ2xvYWQnLCBpbml0LCBmYWxzZSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVybHMsIGNhbGxiYWNrKSB7XG5cbiAgICB2YXIgYXN5bmNMb2FkZXIgPSBmdW5jdGlvbiAodXJscywgY2FsbGJhY2spIHtcblxuICAgICAgICB1cmxzLmZvcmVhY2goZnVuY3Rpb24gKGksIGZpbGUpIHtcbiAgICAgICAgICAgIGxvYWRDc3MoZmlsZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNoZWNraW5nIGZvciBhIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgLy8gY2FsbGluZyB0aGUgY2FsbGJhY2tcbiAgICAgICAgICAgIGNvbnRlbnRMb2FkZWQod2luZG93LCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGxvYWRDc3MgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICBsaW5rLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgICAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICAgICAgbGluay5ocmVmID0gdXJsO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWyAwIF0uYXBwZW5kQ2hpbGQobGluayk7XG4gICAgfTtcblxuICAgIC8vIHNpbXBsZSBmb3JlYWNoIGltcGxlbWVudGF0aW9uXG4gICAgQXJyYXkucHJvdG90eXBlLmZvcmVhY2ggPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgY2FsbGJhY2soaSwgdGhpc1sgaSBdKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBhc3luY0xvYWRlcih1cmxzLCBjYWxsYmFjayk7XG5cbn07IiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgICAkKHdpbmRvdykuc2V0QnJlYWtwb2ludHMoe1xuICAgICAgICBkaXN0aW5jdDogdHJ1ZSxcbiAgICAgICAgYnJlYWtwb2ludHM6IFsgMzIwLCA0ODAsIDc2OCwgMTAyNCBdXG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpe1xuXG4gICAgJCgnW2RhdGEtdG9nZ2xlKj1cImdyaWRhbGljaW91c1wiXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmdyaWRhbGljaW91cyh7XG4gICAgICAgICAgICBndXR0ZXI6ICQodGhpcykuZGF0YSgnZ3V0dGVyJykgfHwgMTUsXG4gICAgICAgICAgICB3aWR0aDogJCh0aGlzKS5kYXRhKCd3aWR0aCcpIHx8IDM3MCxcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnPiBkaXYnLFxuICAgICAgICAgICAgYW5pbWF0aW9uT3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcigncmVzaXplJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCQpIHtcblxuICAgIHZhciBza2luID0gcmVxdWlyZSgnLi9fc2tpbicpKCk7XG5cbiAgICAkKCdbZGF0YS1zY3JvbGxhYmxlXScpLm5pY2VTY3JvbGwoe1xuICAgICAgICBjdXJzb3Jib3JkZXI6IDAsXG4gICAgICAgIGN1cnNvcmNvbG9yOiBjb25maWcuc2tpbnNbIHNraW4gXVsgJ3ByaW1hcnktY29sb3InIF0sXG4gICAgICAgIGhvcml6cmFpbGVuYWJsZWQ6IGZhbHNlXG4gICAgfSk7XG5cbiAgICAkKCcuc3QtY29udGVudC1pbm5lcicpLm5pY2VTY3JvbGwoe1xuICAgICAgICBjdXJzb3Jib3JkZXI6IDAsXG4gICAgICAgIGN1cnNvcmNvbG9yOiBjb25maWcuc2tpbnNbIHNraW4gXVsgJ3ByaW1hcnktY29sb3InIF0sXG4gICAgICAgIGhvcml6cmFpbGVuYWJsZWQ6IGZhbHNlXG4gICAgfSk7XG5cbiAgICAkKCdbZGF0YS1zY3JvbGxhYmxlXScpLmdldE5pY2VTY3JvbGwoKS5yZXNpemUoKTtcblxufShqUXVlcnkpKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNraW4gPSAkLmNvb2tpZSgnc2tpbicpO1xuXG4gICAgaWYgKHR5cGVvZiBza2luID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNraW4gPSAnZGVmYXVsdCc7XG4gICAgfVxuICAgIHJldHVybiBza2luO1xufSk7IiwidmFyIGFzeW5jTG9hZGVyID0gcmVxdWlyZSgnLi9fYXN5bmMnKTtcblxuKGZ1bmN0aW9uICgkKSB7XG5cbiAgICB2YXIgY2hhbmdlU2tpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNraW4gPSAkLmNvb2tpZShcInNraW5cIik7XG4gICAgICAgIGlmICh0eXBlb2Ygc2tpbiAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgYXN5bmNMb2FkZXIoWyAnY3NzLycgKyBza2luICsgJy5taW4uY3NzJyBdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtc2tpbl0nKS5yZW1vdmVQcm9wKCdkaXNhYmxlZCcpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAkKCdbZGF0YS1za2luXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoJCh0aGlzKS5wcm9wKCdkaXNhYmxlZCcpKSByZXR1cm47XG5cbiAgICAgICAgJCgnW2RhdGEtc2tpbl0nKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuXG4gICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcblxuICAgICAgICAkLmNvb2tpZShcInNraW5cIiwgJCh0aGlzKS5kYXRhKCdza2luJykpO1xuXG4gICAgICAgIGNoYW5nZVNraW4oKTtcblxuICAgIH0pO1xuXG4gICAgdmFyIHNraW4gPSAkLmNvb2tpZShcInNraW5cIik7XG5cbiAgICBpZiAodHlwZW9mIHNraW4gIT0gJ3VuZGVmaW5lZCcgJiYgc2tpbiAhPSAnZGVmYXVsdCcpIHtcbiAgICAgICAgY2hhbmdlU2tpbigpO1xuICAgIH1cblxufSkoalF1ZXJ5KTsiLCJyZXF1aXJlKCcuL19icmVha3BvaW50cy5qcycpO1xucmVxdWlyZSgnLi9fZ3JpZGFsaWNpb3VzLmpzJyk7XG5yZXF1aXJlKCcuL19zY3JvbGxhYmxlLmpzJyk7XG5yZXF1aXJlKCcuL19za2lucycpOyIsIihmdW5jdGlvbiAoJCkge1xuXG4gICAgLy8gRmluZCBhbGwgWW91VHViZSB2aWRlb3NcbiAgICB2YXIgJGFsbFZpZGVvcyA9ICQoXCJpZnJhbWVbc3JjXj0naHR0cDovL3BsYXllci52aW1lby5jb20nXSwgaWZyYW1lW3NyY149J2h0dHA6Ly93d3cueW91dHViZS5jb20nXVwiKSxcblxuICAgIC8vIFRoZSBlbGVtZW50IHRoYXQgaXMgZmx1aWQgd2lkdGhcbiAgICAkZmx1aWRFbCA9ICQoXCJwYW5lbFwiKTtcblxuICAgIC8vIEZpZ3VyZSBvdXQgYW5kIHNhdmUgYXNwZWN0IHJhdGlvIGZvciBlYWNoIHZpZGVvXG4gICAgJGFsbFZpZGVvcy5lYWNoKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICQodGhpcylcbiAgICAgICAgICAgIC5kYXRhKCdhc3BlY3RSYXRpbycsIHRoaXMuaGVpZ2h0IC8gdGhpcy53aWR0aClcblxuICAgICAgICAgICAgLy8gYW5kIHJlbW92ZSB0aGUgaGFyZCBjb2RlZCB3aWR0aC9oZWlnaHRcbiAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdoZWlnaHQnKVxuICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ3dpZHRoJyk7XG5cbiAgICB9KTtcblxuICAgIC8vIFdoZW4gdGhlIHdpbmRvdyBpcyByZXNpemVkXG4gICAgJChcIi5nYWxsZXJ5LWdyaWQgLnBhbmVsXCIpLnJlc2l6ZShmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgbmV3V2lkdGggPSAkZmx1aWRFbC53aWR0aCgpO1xuXG4gICAgICAgIC8vIFJlc2l6ZSBhbGwgdmlkZW9zIGFjY29yZGluZyB0byB0aGVpciBvd24gYXNwZWN0IHJhdGlvXG4gICAgICAgICRhbGxWaWRlb3MuZWFjaChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgdmFyICRlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICAkZWxcbiAgICAgICAgICAgICAgICAud2lkdGgobmV3V2lkdGgpXG4gICAgICAgICAgICAgICAgLmhlaWdodChuZXdXaWR0aCAqICRlbC5kYXRhKCdhc3BlY3RSYXRpbycpKTtcblxuICAgICAgICB9KTtcblxuICAgIC8vIEtpY2sgb2ZmIG9uZSByZXNpemUgdG8gZml4IGFsbCB2aWRlb3Mgb24gcGFnZSBsb2FkXG4gICAgfSkucmVzaXplKCk7XG5cbn0pKGpRdWVyeSk7IiwicmVxdWlyZSgnLi9vd2wvbWFpbicpOyIsIihmdW5jdGlvbiAoJCkge1xuXG4gICAgJChcIi5vd2wtYmFzaWNcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjID0gJCh0aGlzKTtcbiAgICAgICAgJCh0aGlzKS5vd2xDYXJvdXNlbCh7XG4gICAgICAgICAgICBpdGVtczogYy5kYXRhKCdpdGVtcycpIHx8IDQsXG4gICAgICAgICAgICBpdGVtc0Rlc2t0b3A6IFsgMTE5OSwgYy5kYXRhKCdpdGVtc0Rlc2t0b3AnKSB8fCAzIF0sXG4gICAgICAgICAgICBpdGVtc0Rlc2t0b3BTbWFsbDogWyA5NzksIGMuZGF0YSgnaXRlbXNEZXNrdG9wU21hbGwnKSB8fCAzIF0sXG4gICAgICAgICAgICBhZnRlclVwZGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCdyZXNpemUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgICAkKFwiLm93bC1taXhlZFwiKS5vd2xDYXJvdXNlbCh7XG4gICAgICAgIGl0ZW1zOiAyLFxuICAgICAgICBwYWdpbmF0aW9uOiBmYWxzZSxcbiAgICAgICAgbmF2aWdhdGlvbjogdHJ1ZSxcbiAgICAgICAgbmF2aWdhdGlvblRleHQ6IFsgJzxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPicsICc8aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+JyBdLFxuICAgICAgICBpdGVtc0Rlc2t0b3A6IFsgMTE5OSwgMiBdLFxuICAgICAgICBpdGVtc0Rlc2t0b3BTbWFsbDogWyA5NzksIDEgXSxcbiAgICAgICAgaXRlbXNUYWJsZXQ6IFsgNzY4LCAxIF1cbiAgICB9KTtcblxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICB2YXIgcHJldmlldyA9ICQoXCIub3dsLXByZXZpZXdcIik7XG4gICAgdmFyIHRodW1iID0gJChcIi5vd2wtdGh1bWJcIik7XG5cbiAgICBwcmV2aWV3Lm93bENhcm91c2VsKHtcbiAgICAgICAgc2luZ2xlSXRlbTogdHJ1ZSxcbiAgICAgICAgc2xpZGVTcGVlZDogMTAwMCxcbiAgICAgICAgcGFnaW5hdGlvbjogZmFsc2UsXG4gICAgICAgIGFmdGVyQWN0aW9uOiBzeW5jUG9zaXRpb24sXG4gICAgICAgIHJlc3BvbnNpdmVSZWZyZXNoUmF0ZTogMjAwLFxuICAgICAgICBuYXZpZ2F0aW9uOiB0cnVlLFxuICAgICAgICBuYXZpZ2F0aW9uVGV4dDogWyc8aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tbGVmdFwiPjwvaT4nLCc8aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+J11cbiAgICB9KTtcblxuICAgIHRodW1iLm93bENhcm91c2VsKHtcbiAgICAgICAgaXRlbXM6IDUsXG4gICAgICAgIGl0ZW1zRGVza3RvcDogWyAxMTk5LCA1IF0sXG4gICAgICAgIGl0ZW1zRGVza3RvcFNtYWxsOiBbIDk3OSwgNCBdLFxuICAgICAgICBpdGVtc1RhYmxldDogWyA3NjgsIDQgXSxcbiAgICAgICAgaXRlbXNNb2JpbGU6IFsgNDc5LCAzIF0sXG4gICAgICAgIHBhZ2luYXRpb246IGZhbHNlLFxuICAgICAgICBuYXZpZ2F0aW9uOiB0cnVlLFxuICAgICAgICByZXNwb25zaXZlUmVmcmVzaFJhdGU6IDEwMCxcbiAgICAgICAgYWZ0ZXJJbml0OiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgIGVsLmZpbmQoXCIub3dsLWl0ZW1cIikuZXEoMCkuYWRkQ2xhc3MoXCJzeW5jZWRcIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHN5bmNQb3NpdGlvbihlbCkge1xuICAgICAgICB2YXIgY3VycmVudCA9IHRoaXMuY3VycmVudEl0ZW07XG4gICAgICAgICQoXCIub3dsLXRodW1iXCIpXG4gICAgICAgICAgICAuZmluZChcIi5vd2wtaXRlbVwiKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwic3luY2VkXCIpXG4gICAgICAgICAgICAuZXEoY3VycmVudClcbiAgICAgICAgICAgIC5hZGRDbGFzcyhcInN5bmNlZFwiKTtcbiAgICAgICAgaWYgKCQoXCIub3dsLXRodW1iXCIpLmRhdGEoXCJvd2xDYXJvdXNlbFwiKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjZW50ZXIoY3VycmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkKFwiLm93bC10aHVtYlwiKS5vbihcImNsaWNrXCIsIFwiLm93bC1pdGVtXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIG51bWJlciA9ICQodGhpcykuZGF0YShcIm93bEl0ZW1cIik7XG4gICAgICAgIHByZXZpZXcudHJpZ2dlcihcIm93bC5nb1RvXCIsIG51bWJlcik7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBjZW50ZXIobnVtYmVyKSB7XG4gICAgICAgIHZhciB0aHVtYnZpc2libGUgPSB0aHVtYi5kYXRhKFwib3dsQ2Fyb3VzZWxcIikub3dsLnZpc2libGVJdGVtcztcbiAgICAgICAgdmFyIG51bSA9IG51bWJlcjtcbiAgICAgICAgdmFyIGZvdW5kID0gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIGkgaW4gdGh1bWJ2aXNpYmxlKSB7XG4gICAgICAgICAgICBpZiAobnVtID09PSB0aHVtYnZpc2libGVbIGkgXSkge1xuICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmb3VuZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmIChudW0gPiB0aHVtYnZpc2libGVbIHRodW1idmlzaWJsZS5sZW5ndGggLSAxIF0pIHtcbiAgICAgICAgICAgICAgICB0aHVtYi50cmlnZ2VyKFwib3dsLmdvVG9cIiwgbnVtIC0gdGh1bWJ2aXNpYmxlLmxlbmd0aCArIDIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAobnVtIC0gMSA9PT0gLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIG51bSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRodW1iLnRyaWdnZXIoXCJvd2wuZ29Ub1wiLCBudW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG51bSA9PT0gdGh1bWJ2aXNpYmxlWyB0aHVtYnZpc2libGUubGVuZ3RoIC0gMSBdKSB7XG4gICAgICAgICAgICB0aHVtYi50cmlnZ2VyKFwib3dsLmdvVG9cIiwgdGh1bWJ2aXNpYmxlWyAxIF0pO1xuICAgICAgICB9IGVsc2UgaWYgKG51bSA9PT0gdGh1bWJ2aXNpYmxlWyAwIF0pIHtcbiAgICAgICAgICAgIHRodW1iLnRyaWdnZXIoXCJvd2wuZ29Ub1wiLCBudW0gLSAxKTtcbiAgICAgICAgfVxuICAgIH1cblxufSkoalF1ZXJ5KTsiLCJyZXF1aXJlKCcuL19kZWZhdWx0Jyk7XG5yZXF1aXJlKCcuL19taXhlZCcpO1xucmVxdWlyZSgnLi9fcHJldmlldycpOyIsIi8vIENhcm91c2Vsc1xucmVxdWlyZSgnLi9jYXJvdXNlbC9tYWluJyk7XG5cbi8vIFJlc3BvbnNpdmUgVmlkZW8gaUZyYW1lIEZpeFxucmVxdWlyZSgnLi9fcmVzcG9uc2l2ZS12aWRlb3MnKTsiLCIoZnVuY3Rpb24gKCQpIHtcblxuICAgICQoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHZhciBjc3NTZWxlY3Rvck9wdGlvbnMgPSB7XG4gICAgICAgICAgICB2aWRlb1BsYXkgOiBcIi52aWRlby1wbGF5XCIsXG4gICAgICAgICAgICBwbGF5IDogXCIucGxheVwiLFxuICAgICAgICAgICAgcGF1c2UgOiBcIi5wYXVzZVwiLFxuICAgICAgICAgICAgc3RvcCA6IFwiLnN0b3BcIixcbiAgICAgICAgICAgIHNlZWtCYXIgOiBcIi5zZWVrLWJhclwiLFxuICAgICAgICAgICAgcGxheUJhciA6IFwiLnBsYXktYmFyXCIsXG4gICAgICAgICAgICBtdXRlIDogXCIubXV0ZVwiLFxuICAgICAgICAgICAgdW5tdXRlIDogXCIudW5tdXRlXCIsXG4gICAgICAgICAgICB2b2x1bWVCYXIgOiBcIi52b2x1bWUtYmFyXCIsXG4gICAgICAgICAgICB2b2x1bWVCYXJWYWx1ZSA6IFwiLnZvbHVtZS1iYXItdmFsdWVcIixcbiAgICAgICAgICAgIHZvbHVtZU1heCA6IFwiLnZvbHVtZS1tYXhcIixcbiAgICAgICAgICAgIHBsYXliYWNrUmF0ZUJhciA6IFwiLnBsYXliYWNrLXJhdGUtYmFyXCIsXG4gICAgICAgICAgICBwbGF5YmFja1JhdGVCYXJWYWx1ZSA6IFwiLnBsYXliYWNrLXJhdGUtYmFyLXZhbHVlXCIsXG4gICAgICAgICAgICBjdXJyZW50VGltZSA6IFwiLmN1cnJlbnQtdGltZVwiLFxuICAgICAgICAgICAgZHVyYXRpb24gOiBcIi5kdXJhdGlvblwiLFxuICAgICAgICAgICAgdGl0bGUgOiBcIi50aXRsZVwiLFxuICAgICAgICAgICAgZnVsbFNjcmVlbiA6IFwiLmZ1bGwtc2NyZWVuXCIsXG4gICAgICAgICAgICByZXN0b3JlU2NyZWVuIDogXCIucmVzdG9yZS1zY3JlZW5cIixcbiAgICAgICAgICAgIHJlcGVhdCA6IFwiLnJlcGVhdFwiLFxuICAgICAgICAgICAgcmVwZWF0T2ZmIDogXCIucmVwZWF0LW9mZlwiLFxuICAgICAgICAgICAgZ3VpIDogXCIuZ3VpXCIsXG4gICAgICAgICAgICBub1NvbHV0aW9uIDogXCIubm8tc29sdXRpb25cIlxuICAgICAgICB9LFxuICAgICAgICBzdGF0ZUNsYXNzT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHBsYXlpbmcgOiBcInN0YXRlLXBsYXlpbmdcIixcbiAgICAgICAgICAgIHNlZWtpbmcgOiBcInN0YXRlLXNlZWtpbmdcIixcbiAgICAgICAgICAgIG11dGVkIDogXCJzdGF0ZS1tdXRlZFwiLFxuICAgICAgICAgICAgbG9vcGVkIDogXCJzdGF0ZS1sb29wZWRcIixcbiAgICAgICAgICAgIGZ1bGxTY3JlZW4gOiBcInN0YXRlLWZ1bGwtc2NyZWVuXCIsXG4gICAgICAgICAgICBub1ZvbHVtZSA6IFwic3RhdGUtbm8tdm9sdW1lXCJcbiAgICAgICAgfTtcblxuICAgICAgICAkKFwiI2pxdWVyeV9qcGxheWVyX2F1ZGlvXzFcIikualBsYXllcih7XG4gICAgICAgICAgICByZWFkeTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykualBsYXllcihcInNldE1lZGlhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiTWlhb3cgLSBCdWJibGVcIixcbiAgICAgICAgICAgICAgICAgICAgbTRhOiBcImh0dHA6Ly9qcGxheWVyLm9yZy9hdWRpby9tNGEvTWlhb3ctMDctQnViYmxlLm00YVwiLFxuICAgICAgICAgICAgICAgICAgICBvZ2E6IFwiaHR0cDovL2pwbGF5ZXIub3JnL2F1ZGlvL29nZy9NaWFvdy0wNy1CdWJibGUub2dnXCJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbGF5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5qUGxheWVyKFwicGF1c2VPdGhlcnNcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGltZUZvcm1hdDoge1xuICAgICAgICAgICAgICAgIHBhZE1pbjogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzd2ZQYXRoOiBcImpzL2pwbGF5ZXJcIixcbiAgICAgICAgICAgIHN1cHBsaWVkOiBcIm00YSxvZ2FcIixcbiAgICAgICAgICAgIGNzc1NlbGVjdG9yQW5jZXN0b3I6IFwiI2F1ZGlvXCIsXG4gICAgICAgICAgICB1c2VTdGF0ZUNsYXNzU2tpbjogdHJ1ZSxcbiAgICAgICAgICAgIGF1dG9CbHVyOiBmYWxzZSxcbiAgICAgICAgICAgIHNtb290aFBsYXlCYXI6IHRydWUsXG4gICAgICAgICAgICByZW1haW5pbmdEdXJhdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgIGtleUVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICBrZXlCaW5kaW5nczoge1xuICAgICAgICAgICAgICAgIGxvb3A6IG51bGwsXG4gICAgICAgICAgICAgICAgbXV0ZWQ6IG51bGwsXG4gICAgICAgICAgICAgICAgdm9sdW1lVXA6IG51bGwsXG4gICAgICAgICAgICAgICAgdm9sdW1lRG93bjogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdtb2RlOiBcIndpbmRvd1wiLFxuICAgICAgICAgICAgY3NzU2VsZWN0b3I6IGNzc1NlbGVjdG9yT3B0aW9ucyxcbiAgICAgICAgICAgIHN0YXRlQ2xhc3M6IHN0YXRlQ2xhc3NPcHRpb25zXG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoXCIjanF1ZXJ5X2pwbGF5ZXJfYXVkaW9fc29jaWFsX2NvdmVyXCIpLmpQbGF5ZXIoe1xuICAgICAgICAgICAgcmVhZHk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmpQbGF5ZXIoXCJzZXRNZWRpYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIk1pYW93IC0gQnViYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgIG00YTogXCJodHRwOi8vanBsYXllci5vcmcvYXVkaW8vbTRhL01pYW93LTA3LUJ1YmJsZS5tNGFcIixcbiAgICAgICAgICAgICAgICAgICAgb2dhOiBcImh0dHA6Ly9qcGxheWVyLm9yZy9hdWRpby9vZ2cvTWlhb3ctMDctQnViYmxlLm9nZ1wiXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGxheTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykualBsYXllcihcInBhdXNlT3RoZXJzXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpbWVGb3JtYXQ6IHtcbiAgICAgICAgICAgICAgICBwYWRNaW46IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3dmUGF0aDogXCJqcy9qcGxheWVyXCIsXG4gICAgICAgICAgICBzdXBwbGllZDogXCJtNGEsb2dhXCIsXG4gICAgICAgICAgICBjc3NTZWxlY3RvckFuY2VzdG9yOiBcIiNhdWRpb19zb2NpYWxfY292ZXJcIixcbiAgICAgICAgICAgIHVzZVN0YXRlQ2xhc3NTa2luOiB0cnVlLFxuICAgICAgICAgICAgYXV0b0JsdXI6IGZhbHNlLFxuICAgICAgICAgICAgc21vb3RoUGxheUJhcjogdHJ1ZSxcbiAgICAgICAgICAgIHJlbWFpbmluZ0R1cmF0aW9uOiB0cnVlLFxuICAgICAgICAgICAga2V5RW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIGtleUJpbmRpbmdzOiB7XG4gICAgICAgICAgICAgICAgbG9vcDogbnVsbCxcbiAgICAgICAgICAgICAgICBtdXRlZDogbnVsbCxcbiAgICAgICAgICAgICAgICB2b2x1bWVVcDogbnVsbCxcbiAgICAgICAgICAgICAgICB2b2x1bWVEb3duOiBudWxsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd21vZGU6IFwid2luZG93XCIsXG4gICAgICAgICAgICBjc3NTZWxlY3RvcjogY3NzU2VsZWN0b3JPcHRpb25zLFxuICAgICAgICAgICAgc3RhdGVDbGFzczogc3RhdGVDbGFzc09wdGlvbnNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChcIiNqcXVlcnlfanBsYXllcl92aWRlb18xXCIpLmpQbGF5ZXIoe1xuICAgICAgICAgICAgcmVhZHk6IGZ1bmN0aW9uIChiKSB7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSAkKHRoaXMpLmpQbGF5ZXIoXCJzZXRNZWRpYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkJpZyBCdWNrIEJ1bm55IFRyYWlsZXJcIixcbiAgICAgICAgICAgICAgICAgICAgbTR2OiBcImh0dHA6Ly9qcGxheWVyLm9yZy92aWRlby9tNHYvQmlnX0J1Y2tfQnVubnlfVHJhaWxlci5tNHZcIixcbiAgICAgICAgICAgICAgICAgICAgb2d2OiBcImh0dHA6Ly9qcGxheWVyLm9yZy92aWRlby9vZ3YvQmlnX0J1Y2tfQnVubnlfVHJhaWxlci5vZ3ZcIixcbiAgICAgICAgICAgICAgICAgICAgd2VibXY6IFwiaHR0cDovL2pwbGF5ZXIub3JnL3ZpZGVvL3dlYm0vQmlnX0J1Y2tfQnVubnlfVHJhaWxlci53ZWJtXCIsXG4gICAgICAgICAgICAgICAgICAgIHBvc3RlcjogXCJodHRwOi8vanBsYXllci5vcmcvdmlkZW8vcG9zdGVyL0JpZ19CdWNrX0J1bm55X1RyYWlsZXJfNDgweDI3MC5wbmdcIlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChiLmpQbGF5ZXIuc3RhdHVzLm5vRnVsbFdpbmRvdykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZCA9ICQoYy5qUGxheWVyKFwib3B0aW9uXCIsIFwid3JhcHBlclwiKSk7XG4gICAgICAgICAgICAgICAgICAgIGQuZmluZChcIi5zY3JlZW4tY29udHJvbFwiKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGQuZmluZChcIi5iYXJcIikuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBcIjBcIlxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhID0gYy5kYXRhKFwialBsYXllclwiKS5hbmNlc3RvckpxLndpZHRoKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBiID0gOSAqIGEgLyAxNjtcblxuICAgICAgICAgICAgICAgICAgICBjLmpQbGF5ZXIoXCJvcHRpb25cIiwgXCJzaXplXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhICsgXCJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBiICsgXCJweFwiXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB2YXIgZiA9ICQualBsYXllci5wbGF0Zm9ybTtcbiAgICAgICAgICAgICAgICBpZiAoZi5pcGFkIHx8IChmLmlwaG9uZSB8fCAoZi5pcG9kIHx8IGIualBsYXllci5mbGFzaC51c2VkKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh3aW5kb3cpLm9uKFwicmVzaXplXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aW1lRm9ybWF0OiB7XG4gICAgICAgICAgICAgICAgcGFkTWluOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN3ZlBhdGg6IFwianMvanBsYXllclwiLFxuICAgICAgICAgICAgc3VwcGxpZWQ6IFwid2VibXYsIG9ndiwgbTR2XCIsXG4gICAgICAgICAgICBjc3NTZWxlY3RvckFuY2VzdG9yOiBcIiN2aWRlb1wiLFxuICAgICAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgIGNzc0NsYXNzOiBcInZpZGVvLXJlc3BvbnNpdmVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNpemVGdWxsOiB7XG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6IFwidmlkZW8tZnVsbFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXV0b2hpZGU6IHtcbiAgICAgICAgICAgICAgICBmdWxsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICByZXN0b3JlZDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbGF5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy8kKHRoaXMpLmpQbGF5ZXIoXCJvcHRpb25cIiwgXCJhdXRvaGlkZVwiLCB7XG4gICAgICAgICAgICAgICAgLy8gICAgZnVsbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAvLyAgICByZXN0b3JlZDogdHJ1ZVxuICAgICAgICAgICAgICAgIC8vfSk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5qUGxheWVyKFwicGF1c2VPdGhlcnNcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGF1c2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyQodGhpcykualBsYXllcihcIm9wdGlvblwiLCBcImF1dG9oaWRlXCIsIHtcbiAgICAgICAgICAgICAgICAvLyAgICBmdWxsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAvLyAgICByZXN0b3JlZDogZmFsc2VcbiAgICAgICAgICAgICAgICAvL30pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoYikge1xuICAgICAgICAgICAgICAgICQodGhpcykualBsYXllcihiLmpQbGF5ZXIuc3RhdHVzLnBhdXNlZCA/IFwicGxheVwiIDogXCJwYXVzZVwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1c2VTdGF0ZUNsYXNzU2tpbjogdHJ1ZSxcbiAgICAgICAgICAgIGF1dG9CbHVyOiBmYWxzZSxcbiAgICAgICAgICAgIHNtb290aFBsYXlCYXI6ICEoJC5qUGxheWVyLmJyb3dzZXIubXNpZSAmJiAkLmpQbGF5ZXIuYnJvd3Nlci52ZXJzaW9uIDwgOSksXG4gICAgICAgICAgICByZW1haW5pbmdEdXJhdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgIGtleUVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICBjc3NTZWxlY3RvcjogY3NzU2VsZWN0b3JPcHRpb25zLFxuICAgICAgICAgICAgc3RhdGVDbGFzczogc3RhdGVDbGFzc09wdGlvbnNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbmV3IGpQbGF5ZXJQbGF5bGlzdCh7XG4gICAgICAgICAgICBqUGxheWVyOiBcIiNqcXVlcnlfcGxheWxpc3RfMV9wbGF5ZXJcIixcbiAgICAgICAgICAgIGNzc1NlbGVjdG9yQW5jZXN0b3I6IFwiI2pxdWVyeV9wbGF5bGlzdF8xXCJcbiAgICAgICAgfSwgW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOlwiQ3JvIE1hZ25vbiBNYW5cIixcbiAgICAgICAgICAgICAgICBhcnRpc3Q6XCJUaGUgU3RhcmsgUGFsYWNlXCIsXG4gICAgICAgICAgICAgICAgbXAzOlwiaHR0cDovL3d3dy5qcGxheWVyLm9yZy9hdWRpby9tcDMvVFNQLTAxLUNyb19tYWdub25fbWFuLm1wM1wiLFxuICAgICAgICAgICAgICAgIG9nYTpcImh0dHA6Ly93d3cuanBsYXllci5vcmcvYXVkaW8vb2dnL1RTUC0wMS1Dcm9fbWFnbm9uX21hbi5vZ2dcIixcbiAgICAgICAgICAgICAgICBwb3N0ZXI6IFwiaHR0cDovL3d3dy5qcGxheWVyLm9yZy9hdWRpby9wb3N0ZXIvVGhlX1N0YXJrX1BhbGFjZV82NDB4MzYwLnBuZ1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOlwiSW5jcmVkaWJsZXMgVGVhc2VyXCIsXG4gICAgICAgICAgICAgICAgYXJ0aXN0OlwiUGl4YXJcIixcbiAgICAgICAgICAgICAgICBtNHY6IFwiaHR0cDovL3d3dy5qcGxheWVyLm9yZy92aWRlby9tNHYvSW5jcmVkaWJsZXNfVGVhc2VyLm00dlwiLFxuICAgICAgICAgICAgICAgIG9ndjogXCJodHRwOi8vd3d3LmpwbGF5ZXIub3JnL3ZpZGVvL29ndi9JbmNyZWRpYmxlc19UZWFzZXIub2d2XCIsXG4gICAgICAgICAgICAgICAgd2VibXY6IFwiaHR0cDovL3d3dy5qcGxheWVyLm9yZy92aWRlby93ZWJtL0luY3JlZGlibGVzX1RlYXNlci53ZWJtXCIsXG4gICAgICAgICAgICAgICAgcG9zdGVyOiBcImh0dHA6Ly93d3cuanBsYXllci5vcmcvdmlkZW8vcG9zdGVyL0luY3JlZGlibGVzX1RlYXNlcl82NDB4MjcyLnBuZ1wiXG4gICAgICAgICAgICB9LHtcbiAgICAgICAgICAgICAgICB0aXRsZTpcIkZpbmRpbmcgTmVtbyBUZWFzZXJcIixcbiAgICAgICAgICAgICAgICBhcnRpc3Q6XCJQaXhhclwiLFxuICAgICAgICAgICAgICAgIG00djogXCJodHRwOi8vd3d3LmpwbGF5ZXIub3JnL3ZpZGVvL200di9GaW5kaW5nX05lbW9fVGVhc2VyLm00dlwiLFxuICAgICAgICAgICAgICAgIG9ndjogXCJodHRwOi8vd3d3LmpwbGF5ZXIub3JnL3ZpZGVvL29ndi9GaW5kaW5nX05lbW9fVGVhc2VyLm9ndlwiLFxuICAgICAgICAgICAgICAgIHdlYm12OiBcImh0dHA6Ly93d3cuanBsYXllci5vcmcvdmlkZW8vd2VibS9GaW5kaW5nX05lbW9fVGVhc2VyLndlYm1cIixcbiAgICAgICAgICAgICAgICBwb3N0ZXI6IFwiaHR0cDovL3d3dy5qcGxheWVyLm9yZy92aWRlby9wb3N0ZXIvRmluZGluZ19OZW1vX1RlYXNlcl82NDB4MzUyLnBuZ1wiXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sIHtcbiAgICAgICAgICAgIHBsYXlsaXN0T3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGVuYWJsZVJlbW92ZUNvbnRyb2xzOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN3ZlBhdGg6IFwianMvanBsYXllclwiLFxuICAgICAgICAgICAgc3VwcGxpZWQ6IFwid2VibXYsIG9ndiwgbTR2LCBvZ2EsIG1wM1wiLFxuICAgICAgICAgICAgdXNlU3RhdGVDbGFzc1NraW46IHRydWUsXG4gICAgICAgICAgICBhdXRvQmx1cjogZmFsc2UsXG4gICAgICAgICAgICBzbW9vdGhQbGF5QmFyOiB0cnVlLFxuICAgICAgICAgICAga2V5RW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIGF1ZGlvRnVsbFNjcmVlbjogdHJ1ZSxcbiAgICAgICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogXCJ2aWRlby1yZXNwb25zaXZlXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaXplRnVsbDoge1xuICAgICAgICAgICAgICAgIGNzc0NsYXNzOiBcInZpZGVvLWZ1bGxcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNzc1NlbGVjdG9yOiBjc3NTZWxlY3Rvck9wdGlvbnMsXG4gICAgICAgICAgICBzdGF0ZUNsYXNzOiBzdGF0ZUNsYXNzT3B0aW9uc1xuICAgICAgICB9KTtcblxuICAgICAgICBuZXcgalBsYXllclBsYXlsaXN0KHtcbiAgICAgICAgICAgIGpQbGF5ZXI6IFwiI2pxdWVyeV9wbGF5bGlzdF8yX3BsYXllclwiLFxuICAgICAgICAgICAgY3NzU2VsZWN0b3JBbmNlc3RvcjogXCIjanF1ZXJ5X3BsYXlsaXN0XzJcIlxuICAgICAgICB9LCBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6XCJDcm8gTWFnbm9uIE1hblwiLFxuICAgICAgICAgICAgICAgIG1wMzpcImh0dHA6Ly93d3cuanBsYXllci5vcmcvYXVkaW8vbXAzL1RTUC0wMS1Dcm9fbWFnbm9uX21hbi5tcDNcIixcbiAgICAgICAgICAgICAgICBvZ2E6XCJodHRwOi8vd3d3LmpwbGF5ZXIub3JnL2F1ZGlvL29nZy9UU1AtMDEtQ3JvX21hZ25vbl9tYW4ub2dnXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6XCJZb3VyIEZhY2VcIixcbiAgICAgICAgICAgICAgICBtcDM6XCJodHRwOi8vd3d3LmpwbGF5ZXIub3JnL2F1ZGlvL21wMy9UU1AtMDUtWW91cl9mYWNlLm1wM1wiLFxuICAgICAgICAgICAgICAgIG9nYTpcImh0dHA6Ly93d3cuanBsYXllci5vcmcvYXVkaW8vb2dnL1RTUC0wNS1Zb3VyX2ZhY2Uub2dnXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6XCJDeWJlciBTb25uZXRcIixcbiAgICAgICAgICAgICAgICBtcDM6XCJodHRwOi8vd3d3LmpwbGF5ZXIub3JnL2F1ZGlvL21wMy9UU1AtMDctQ3liZXJzb25uZXQubXAzXCIsXG4gICAgICAgICAgICAgICAgb2dhOlwiaHR0cDovL3d3dy5qcGxheWVyLm9yZy9hdWRpby9vZ2cvVFNQLTA3LUN5YmVyc29ubmV0Lm9nZ1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOlwiVGVtcGVyZWQgU29uZ1wiLFxuICAgICAgICAgICAgICAgIG1wMzpcImh0dHA6Ly93d3cuanBsYXllci5vcmcvYXVkaW8vbXAzL01pYW93LTAxLVRlbXBlcmVkLXNvbmcubXAzXCIsXG4gICAgICAgICAgICAgICAgb2dhOlwiaHR0cDovL3d3dy5qcGxheWVyLm9yZy9hdWRpby9vZ2cvTWlhb3ctMDEtVGVtcGVyZWQtc29uZy5vZ2dcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTpcIkhpZGRlblwiLFxuICAgICAgICAgICAgICAgIG1wMzpcImh0dHA6Ly93d3cuanBsYXllci5vcmcvYXVkaW8vbXAzL01pYW93LTAyLUhpZGRlbi5tcDNcIixcbiAgICAgICAgICAgICAgICBvZ2E6XCJodHRwOi8vd3d3LmpwbGF5ZXIub3JnL2F1ZGlvL29nZy9NaWFvdy0wMi1IaWRkZW4ub2dnXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6XCJMZW50ZW1lbnRcIixcbiAgICAgICAgICAgICAgICBtcDM6XCJodHRwOi8vd3d3LmpwbGF5ZXIub3JnL2F1ZGlvL21wMy9NaWFvdy0wMy1MZW50ZW1lbnQubXAzXCIsXG4gICAgICAgICAgICAgICAgb2dhOlwiaHR0cDovL3d3dy5qcGxheWVyLm9yZy9hdWRpby9vZ2cvTWlhb3ctMDMtTGVudGVtZW50Lm9nZ1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOlwiTGlzbW9yZVwiLFxuICAgICAgICAgICAgICAgIG1wMzpcImh0dHA6Ly93d3cuanBsYXllci5vcmcvYXVkaW8vbXAzL01pYW93LTA0LUxpc21vcmUubXAzXCIsXG4gICAgICAgICAgICAgICAgb2dhOlwiaHR0cDovL3d3dy5qcGxheWVyLm9yZy9hdWRpby9vZ2cvTWlhb3ctMDQtTGlzbW9yZS5vZ2dcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTpcIlRoZSBTZXBhcmF0aW9uXCIsXG4gICAgICAgICAgICAgICAgbXAzOlwiaHR0cDovL3d3dy5qcGxheWVyLm9yZy9hdWRpby9tcDMvTWlhb3ctMDUtVGhlLXNlcGFyYXRpb24ubXAzXCIsXG4gICAgICAgICAgICAgICAgb2dhOlwiaHR0cDovL3d3dy5qcGxheWVyLm9yZy9hdWRpby9vZ2cvTWlhb3ctMDUtVGhlLXNlcGFyYXRpb24ub2dnXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6XCJCZXNpZGUgTWVcIixcbiAgICAgICAgICAgICAgICBtcDM6XCJodHRwOi8vd3d3LmpwbGF5ZXIub3JnL2F1ZGlvL21wMy9NaWFvdy0wNi1CZXNpZGUtbWUubXAzXCIsXG4gICAgICAgICAgICAgICAgb2dhOlwiaHR0cDovL3d3dy5qcGxheWVyLm9yZy9hdWRpby9vZ2cvTWlhb3ctMDYtQmVzaWRlLW1lLm9nZ1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOlwiQnViYmxlXCIsXG4gICAgICAgICAgICAgICAgbXAzOlwiaHR0cDovL3d3dy5qcGxheWVyLm9yZy9hdWRpby9tcDMvTWlhb3ctMDctQnViYmxlLm1wM1wiLFxuICAgICAgICAgICAgICAgIG9nYTpcImh0dHA6Ly93d3cuanBsYXllci5vcmcvYXVkaW8vb2dnL01pYW93LTA3LUJ1YmJsZS5vZ2dcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTpcIlN0aXJyaW5nIG9mIGEgRm9vbFwiLFxuICAgICAgICAgICAgICAgIG1wMzpcImh0dHA6Ly93d3cuanBsYXllci5vcmcvYXVkaW8vbXAzL01pYW93LTA4LVN0aXJyaW5nLW9mLWEtZm9vbC5tcDNcIixcbiAgICAgICAgICAgICAgICBvZ2E6XCJodHRwOi8vd3d3LmpwbGF5ZXIub3JnL2F1ZGlvL29nZy9NaWFvdy0wOC1TdGlycmluZy1vZi1hLWZvb2wub2dnXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6XCJQYXJ0aXJcIixcbiAgICAgICAgICAgICAgICBtcDM6XCJodHRwOi8vd3d3LmpwbGF5ZXIub3JnL2F1ZGlvL21wMy9NaWFvdy0wOS1QYXJ0aXIubXAzXCIsXG4gICAgICAgICAgICAgICAgb2dhOlwiaHR0cDovL3d3dy5qcGxheWVyLm9yZy9hdWRpby9vZ2cvTWlhb3ctMDktUGFydGlyLm9nZ1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOlwiVGhpbiBJY2VcIixcbiAgICAgICAgICAgICAgICBtcDM6XCJodHRwOi8vd3d3LmpwbGF5ZXIub3JnL2F1ZGlvL21wMy9NaWFvdy0xMC1UaGluLWljZS5tcDNcIixcbiAgICAgICAgICAgICAgICBvZ2E6XCJodHRwOi8vd3d3LmpwbGF5ZXIub3JnL2F1ZGlvL29nZy9NaWFvdy0xMC1UaGluLWljZS5vZ2dcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdLCB7XG4gICAgICAgICAgICBwbGF5bGlzdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVSZW1vdmVDb250cm9sczogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzd2ZQYXRoOiBcImpzL2pwbGF5ZXJcIixcbiAgICAgICAgICAgIHN1cHBsaWVkOiBcIm9nYSwgbXAzXCIsXG4gICAgICAgICAgICB1c2VTdGF0ZUNsYXNzU2tpbjogdHJ1ZSxcbiAgICAgICAgICAgIGF1dG9CbHVyOiBmYWxzZSxcbiAgICAgICAgICAgIHNtb290aFBsYXlCYXI6IHRydWUsXG4gICAgICAgICAgICBrZXlFbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgY3NzU2VsZWN0b3I6IGNzc1NlbGVjdG9yT3B0aW9ucyxcbiAgICAgICAgICAgIHN0YXRlQ2xhc3M6IHN0YXRlQ2xhc3NPcHRpb25zXG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7IiwicmVxdWlyZSgnLi9fcGxheWVyJyk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgJChcIltuYW1lPSdzd2l0Y2gtY2hlY2tib3gnXVwiKS5ib290c3RyYXBTd2l0Y2goe1xuICAgICAgICBvZmZDb2xvcjogJ2RhbmdlcidcbiAgICB9KTtcbn0pKGpRdWVyeSk7IiwicmVxdWlyZSgnLi9fc3dpdGNoJyk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICB2YXIgcmVzdG9yZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoXCJodG1sXCIpLmFkZENsYXNzKCdzaG93LXNpZGViYXInKTtcbiAgICAgICAgICAgICQoJy5zaWRlYmFyLnNpZGViYXItdmlzaWJsZS1kZXNrdG9wJykubm90KCc6dmlzaWJsZScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0gc2lkZWJhci5vcHRpb25zKCQodGhpcykpO1xuICAgICAgICAgICAgICAgIHNpZGViYXIub3BlbigkKHRoaXMpLmF0dHIoJ2lkJyksIG9wdGlvbnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKFwiaHRtbFwiKS5yZW1vdmVDbGFzcygnc2hvdy1zaWRlYmFyJyk7XG4gICAgICAgICAgICAkKCcuc2lkZWJhcjp2aXNpYmxlJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2lkZWJhci5jbG9zZSgkKHRoaXMpLmF0dHIoJ2lkJykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAkKHdpbmRvdykuYmluZCgnZW50ZXJCcmVha3BvaW50NzY4JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoISAkKCcuc2lkZWJhcicpLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICBpZiAoJCgnLmhpZGUtc2lkZWJhcicpLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICByZXN0b3JlKCk7XG4gICAgfSk7XG5cbiAgICAkKHdpbmRvdykuYmluZCgnZW50ZXJCcmVha3BvaW50MTAyNCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCEgJCgnLnNpZGViYXInKS5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgaWYgKCQoJy5oaWRlLXNpZGViYXInKS5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgcmVzdG9yZSgpO1xuICAgIH0pO1xuXG4gICAgJCh3aW5kb3cpLmJpbmQoJ2VudGVyQnJlYWtwb2ludDQ4MCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCEgJCgnLnNpZGViYXInKS5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgaGlkZSgpO1xuICAgIH0pO1xuXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDQ4MCkge1xuICAgICAgICBpZiAoISAkKCcuc2lkZWJhcicpLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICBoaWRlKCk7XG4gICAgfVxuXG59KShqUXVlcnkpO1xuIiwiKGZ1bmN0aW9uKCQpe1xuXG4gICAgcmVxdWlyZSgnLi9fdHJhbnNmb3JtX2NvbGxhcHNlJykoKTtcblxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCQpIHtcblxuICAgIHZhciB0cmFuc2Zvcm1fZGQgPSByZXF1aXJlKCcuL190cmFuc2Zvcm1fZHJvcGRvd24nKSxcbiAgICAgICAgdHJhbnNmb3JtX2NvbGxhcHNlID0gcmVxdWlyZSgnLi9fdHJhbnNmb3JtX2NvbGxhcHNlJyk7XG5cbiAgICB0cmFuc2Zvcm1fZGQoKTtcblxuICAgICQod2luZG93KS5iaW5kKCdlbnRlckJyZWFrcG9pbnQ0ODAnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghICQoJy5zaWRlYmFyW2RhdGEtdHlwZT1cImRyb3Bkb3duXCJdJykubGVuZ3RoKSByZXR1cm47XG4gICAgICAgICQoJy5zaWRlYmFyW2RhdGEtdHlwZT1cImRyb3Bkb3duXCJdJykuYXR0cignZGF0YS10eXBlJywgJ2NvbGxhcHNlJykuYXR0cignZGF0YS10cmFuc2Zvcm1lZCcsIHRydWUpO1xuICAgICAgICB0cmFuc2Zvcm1fY29sbGFwc2UoKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIG1ha2VfZGQoKSB7XG4gICAgICAgIGlmICghICQoJy5zaWRlYmFyW2RhdGEtdHlwZT1cImNvbGxhcHNlXCJdW2RhdGEtdHJhbnNmb3JtZWRdJykubGVuZ3RoKSByZXR1cm47XG4gICAgICAgICQoJy5zaWRlYmFyW2RhdGEtdHlwZT1cImNvbGxhcHNlXCJdW2RhdGEtdHJhbnNmb3JtZWRdJykuYXR0cignZGF0YS10eXBlJywgJ2Ryb3Bkb3duJykuYXR0cignZGF0YS10cmFuc2Zvcm1lZCcsIHRydWUpO1xuICAgICAgICB0cmFuc2Zvcm1fZGQoKTtcbiAgICB9XG5cbiAgICAkKHdpbmRvdykuYmluZCgnZW50ZXJCcmVha3BvaW50NzY4JywgbWFrZV9kZCk7XG5cbiAgICAkKHdpbmRvdykuYmluZCgnZW50ZXJCcmVha3BvaW50MTAyNCcsIG1ha2VfZGQpO1xuXG59KShqUXVlcnkpOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNpZGViYXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBcInRyYW5zZm9ybS1idXR0b25cIjogc2lkZWJhci5kYXRhKCd0cmFuc2Zvcm1CdXR0b24nKSA9PT0gdHJ1ZSxcbiAgICAgICAgXCJ0cmFuc2Zvcm0tYnV0dG9uLWljb25cIjogc2lkZWJhci5kYXRhKCd0cmFuc2Zvcm1CdXR0b25JY29uJykgfHwgJ2ZhLWVsbGlwc2lzLWgnXG4gICAgfTtcbn07IiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgICB2YXIgc2lkZWJhcnMgPSAkKCcuc2lkZWJhcicpO1xuXG4gICAgc2lkZWJhcnMuZWFjaChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdmFyIHNpZGViYXIgPSAkKHRoaXMpO1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHJlcXVpcmUoJy4vX29wdGlvbnMnKShzaWRlYmFyKTtcblxuICAgICAgICBpZiAob3B0aW9uc1sgJ3RyYW5zZm9ybS1idXR0b24nIF0pIHtcbiAgICAgICAgICAgIHZhciBidXR0b24gPSAkKCc8YnV0dG9uIHR5cGU9XCJidXR0b25cIj48L2J1dHRvbj4nKTtcblxuICAgICAgICAgICAgYnV0dG9uXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtdG9nZ2xlJywgJ3NpZGViYXItdHJhbnNmb3JtJylcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2J0biBidG4tZGVmYXVsdCcpXG4gICAgICAgICAgICAgICAgLmh0bWwoJzxpIGNsYXNzPVwiZmEgJyArIG9wdGlvbnNbICd0cmFuc2Zvcm0tYnV0dG9uLWljb24nIF0gKyAnXCI+PC9pPicpO1xuXG4gICAgICAgICAgICBzaWRlYmFyLmZpbmQoJy5zaWRlYmFyLW1lbnUnKS5hcHBlbmQoYnV0dG9uKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG59KGpRdWVyeSkpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIC8qanNoaW50IGJyb3dzZXI6IHRydWUsIHN0cmljdDogZmFsc2UgKi9cblxuICAgICQoJyNzdWJuYXYnKS5jb2xsYXBzZSh7J3RvZ2dsZSc6IGZhbHNlfSk7XG5cbiAgICAkKCdbZGF0YS10b2dnbGU9XCJzaWRlYmFyLXRyYW5zZm9ybVwiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdzaWRlYmFyLW1pbmknKTtcbiAgICAgICAgaWYgKCQoJ2JvZHknKS5pcygnLnNpZGViYXItbWluaScpKSAkKCcuc2lkZWJhci1tZW51IC5jb2xsYXBzZScpLmNvbGxhcHNlKCdoaWRlJyk7XG4gICAgICAgICQoJyNkcm9wZG93bi10ZW1wJykuaGlkZSgpO1xuICAgICAgICAkKCcuc2lkZWJhci1tZW51IC5vcGVuJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICB9KTtcblxufSkoalF1ZXJ5KTtcblxuKGZ1bmN0aW9uICgkKSB7XG5cbiAgICBmdW5jdGlvbiBtb2JpbGVjaGVjaygpIHtcbiAgICAgICAgdmFyIGNoZWNrID0gZmFsc2U7XG4gICAgICAgIChmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgaWYgKC8oYW5kcm9pZHxpcGFkfHBsYXlib29rfHNpbGt8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyAoY2V8cGhvbmUpfHhkYXx4aWluby9pLnRlc3QoYSkgfHwgLzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kudGVzdChhLnN1YnN0cigwLCA0KSkpXG4gICAgICAgICAgICAgICAgY2hlY2sgPSB0cnVlO1xuICAgICAgICB9KShuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgd2luZG93Lm9wZXJhKTtcbiAgICAgICAgcmV0dXJuIGNoZWNrO1xuICAgIH1cblxuICAgIChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgICAgIGVmZmVjdDogJ3N0LWVmZmVjdC0xJyxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTUwLFxuICAgICAgICAgICAgICAgIG92ZXJsYXk6IGZhbHNlXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBjb250YWluZXIgPSAkKCcuc3QtY29udGFpbmVyJyksXG5cbiAgICAgICAgICAgIGV2ZW50dHlwZSA9IG1vYmlsZWNoZWNrKCkgPyAndG91Y2hzdGFydCcgOiAnY2xpY2snLFxuXG4gICAgICAgICAgICBnZXRMYXlvdXRDbGFzc2VzID0gZnVuY3Rpb24gKHNpZGViYXIsIGRpcmVjdGlvbikge1xuXG4gICAgICAgICAgICAgICAgdmFyIGxheW91dENsYXNzZXMgPSBzaWRlYmFyLmRhdGEoJ2xheW91dENsYXNzZXMnKTtcblxuICAgICAgICAgICAgICAgIGlmICghIGxheW91dENsYXNzZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvZ2dsZUxheW91dCA9IHNpZGViYXIuZGF0YSgndG9nZ2xlTGF5b3V0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdG9nZ2xlTGF5b3V0ID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXRDbGFzc2VzID0gdG9nZ2xlTGF5b3V0LnNwbGl0KFwiLFwiKS5qb2luKFwiIFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZGViYXIuZGF0YSgnbGF5b3V0Q2xhc3NlcycsIGxheW91dENsYXNzZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxheW91dENsYXNzZXM7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSBuZXcgUmVnRXhwKCdzaWRlYmFyLScgKyBkaXJlY3Rpb24gKyAnKFxcXFxTKyknLCAnaWcnKTtcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0Q2xhc3NlcyA9ICQoJ2h0bWwnKS5nZXQoMCkuY2xhc3NOYW1lLm1hdGNoKG1hdGNoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxheW91dENsYXNzZXMgIT09IG51bGwgJiYgbGF5b3V0Q2xhc3Nlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dENsYXNzZXMgPSBsYXlvdXRDbGFzc2VzLmpvaW4oXCIgXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2lkZWJhci5kYXRhKCdsYXlvdXRDbGFzc2VzJywgbGF5b3V0Q2xhc3Nlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbGF5b3V0Q2xhc3NlcztcblxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZ2V0U2lkZWJhckRhdGFPcHRpb25zID0gZnVuY3Rpb24oc2lkZWJhcil7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBlZmZlY3Q6IHNpZGViYXIuZGF0YSgnZWZmZWN0JyksXG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXk6IHNpZGViYXIuZGF0YSgnb3ZlcmxheScpXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgYW5pbWF0aW5nID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcygnYW5pbWF0aW5nJykpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnYW5pbWF0aW5nJyk7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdhbmltYXRpbmcnKTtcbiAgICAgICAgICAgICAgICB9LCBkZWZhdWx0cy5kdXJhdGlvbik7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHJlc2V0ID0gZnVuY3Rpb24gKGlkLCBvcHRpb25zKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gdHlwZW9mIGlkICE9PSAndW5kZWZpbmVkJyA/ICcjJyArIGlkIDogY29udGFpbmVyLmRhdGEoJ3N0TWVudVRhcmdldCcpLFxuICAgICAgICAgICAgICAgICAgICBzaWRlYmFyID0gJCh0YXJnZXQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCEgc2lkZWJhci5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoISBzaWRlYmFyLmlzKCc6dmlzaWJsZScpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHNpZGViYXIuaGFzQ2xhc3MoJ3NpZGViYXItY2xvc2VkJykpIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgICAgIHZhciBlZmZlY3QgPSB0eXBlb2Ygb3B0aW9ucyAhPT0gJ3VuZGVmaW5lZCcgJiYgb3B0aW9ucy5lZmZlY3QgPyBvcHRpb25zLmVmZmVjdCA6IGNvbnRhaW5lci5kYXRhKCdzdE1lbnVFZmZlY3QnKSxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gc2lkZWJhci5pcygnLmxlZnQnKSA/ICdsJyA6ICdyJyxcbiAgICAgICAgICAgICAgICAgICAgc2l6ZSA9IHNpZGViYXIuZ2V0KDApLmNsYXNzTmFtZS5tYXRjaCgvc2lkZWJhci1zaXplLShcXFMrKS8pLnBvcCgpLFxuICAgICAgICAgICAgICAgICAgICBodG1sQ2xhc3MgPSAnc3QtZWZmZWN0LScgKyBkaXJlY3Rpb24gKyBzaXplLFxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVMYXlvdXQgPSBzaWRlYmFyLmRhdGEoJ3RvZ2dsZUxheW91dCcpLFxuICAgICAgICAgICAgICAgICAgICBsYXlvdXRDbGFzc2VzID0gZ2V0TGF5b3V0Q2xhc3NlcyhzaWRlYmFyLCBkaXJlY3Rpb24pLFxuICAgICAgICAgICAgICAgICAgICBldmVudERhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWRlYmFyOiBzaWRlYmFyLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoJ3NpZGViYXIuaGlkZScsIGV2ZW50RGF0YSk7XG5cbiAgICAgICAgICAgICAgICAkKCdbZGF0YS10b2dnbGU9XCJzaWRlYmFyLW1lbnVcIl1baHJlZj1cIicgKyB0YXJnZXQgKyAnXCJdJylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuY2xvc2VzdCgnbGknKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgJCgnaHRtbCcpLmFkZENsYXNzKGh0bWxDbGFzcyk7XG4gICAgICAgICAgICAgICAgc2lkZWJhci5hZGRDbGFzcyhlZmZlY3QpO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hZGRDbGFzcyhlZmZlY3QpO1xuXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNsYXNzKCdzdC1tZW51LW9wZW4gc3QtcHVzaGVyLW92ZXJsYXknKTtcblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkKCdodG1sJykucmVtb3ZlQ2xhc3MoaHRtbENsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvZ2dsZUxheW91dCkgJCgnaHRtbCcpLnJlbW92ZUNsYXNzKGxheW91dENsYXNzZXMpO1xuICAgICAgICAgICAgICAgICAgICBzaWRlYmFyLnJlbW92ZUNsYXNzKGVmZmVjdCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5nZXQoMCkuY2xhc3NOYW1lID0gJ3N0LWNvbnRhaW5lcic7IC8vIGNsZWFyXG4gICAgICAgICAgICAgICAgICAgIHNpZGViYXIuYWRkQ2xhc3MoJ3NpZGViYXItY2xvc2VkJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS50cmlnZ2VyKCdzaWRlYmFyLmhpZGRlbicsIGV2ZW50RGF0YSk7XG4gICAgICAgICAgICAgICAgfSwgZGVmYXVsdHMuZHVyYXRpb24pO1xuXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBvcGVuID0gZnVuY3Rpb24gKHRhcmdldCwgb3B0aW9ucykge1xuXG4gICAgICAgICAgICAgICAgdmFyIHNpZGViYXIgPSAkKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgaWYgKCEgc2lkZWJhci5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgICAgIC8vIG9uIG1vYmlsZSwgYWxsb3cgb25seSBvbmUgc2lkZWJhciB0byBiZSBvcGVuIGF0IHRoZSBzYW1lIHRpbWVcbiAgICAgICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCA3NjggJiYgY29udGFpbmVyLmhhc0NsYXNzKCdzdC1tZW51LW9wZW4nKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzZXQoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkKCdbZGF0YS10b2dnbGU9XCJzaWRlYmFyLW1lbnVcIl1baHJlZj1cIicgKyB0YXJnZXQgKyAnXCJdJylcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuY2xvc2VzdCgnbGknKVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGVmZmVjdCA9IG9wdGlvbnMuZWZmZWN0LFxuICAgICAgICAgICAgICAgICAgICBvdmVybGF5ID0gb3B0aW9ucy5vdmVybGF5O1xuXG4gICAgICAgICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IHNpZGViYXIuaXMoJy5sZWZ0JykgPyAnbCcgOiAncicsXG4gICAgICAgICAgICAgICAgICAgIHNpemUgPSBzaWRlYmFyLmdldCgwKS5jbGFzc05hbWUubWF0Y2goL3NpZGViYXItc2l6ZS0oXFxTKykvKS5wb3AoKSxcbiAgICAgICAgICAgICAgICAgICAgaHRtbENsYXNzID0gJ3N0LWVmZmVjdC0nICsgZGlyZWN0aW9uICsgc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlTGF5b3V0ID0gc2lkZWJhci5kYXRhKCd0b2dnbGVMYXlvdXQnKSxcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0Q2xhc3NlcyA9IGdldExheW91dENsYXNzZXMoc2lkZWJhciwgZGlyZWN0aW9uKSxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnREYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2lkZWJhcjogc2lkZWJhcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS50cmlnZ2VyKCdzaWRlYmFyLnNob3cnLCBldmVudERhdGEpO1xuXG4gICAgICAgICAgICAgICAgJCgnaHRtbCcpLmFkZENsYXNzKGh0bWxDbGFzcyk7XG4gICAgICAgICAgICAgICAgc2lkZWJhci5zaG93KCkucmVtb3ZlQ2xhc3MoJ3NpZGViYXItY2xvc2VkJyk7XG5cbiAgICAgICAgICAgICAgICBjb250YWluZXIuZGF0YSgnc3RNZW51RWZmZWN0JywgZWZmZWN0KTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuZGF0YSgnc3RNZW51VGFyZ2V0JywgdGFyZ2V0KTtcblxuICAgICAgICAgICAgICAgIHNpZGViYXIuYWRkQ2xhc3MoZWZmZWN0KTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYWRkQ2xhc3MoZWZmZWN0KTtcbiAgICAgICAgICAgICAgICBpZiAob3ZlcmxheSkgY29udGFpbmVyLmFkZENsYXNzKCdzdC1wdXNoZXItb3ZlcmxheScpO1xuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hZGRDbGFzcygnc3QtbWVudS1vcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIHNpZGViYXIuZmluZCgnW2RhdGEtc2Nyb2xsYWJsZV0nKS5nZXROaWNlU2Nyb2xsKCkucmVzaXplKCk7XG4gICAgICAgICAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCdyZXNpemUnKTtcbiAgICAgICAgICAgICAgICB9LCAyNSk7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvZ2dsZUxheW91dCkgJCgnaHRtbCcpLmFkZENsYXNzKGxheW91dENsYXNzZXMpO1xuICAgICAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS50cmlnZ2VyKCdzaWRlYmFyLnNob3duJywgZXZlbnREYXRhKTtcbiAgICAgICAgICAgICAgICB9LCBkZWZhdWx0cy5kdXJhdGlvbik7XG5cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHRvZ2dsZSA9IGZ1bmN0aW9uIChlKSB7XG5cbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIHZhciBhID0gYW5pbWF0aW5nKCk7XG4gICAgICAgICAgICAgICAgaWYgKGEpIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgICAgIHZhciBidXR0b24gPSAkKHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSBidXR0b24uYXR0cignaHJlZicpLFxuICAgICAgICAgICAgICAgICAgICBzaWRlYmFyO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC5sZW5ndGggPiAzKSB7XG4gICAgICAgICAgICAgICAgICAgIHNpZGViYXIgPSAkKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghIHNpZGViYXIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50QWN0aXZlRWxlbWVudCA9ICQoJ1tkYXRhLXRvZ2dsZT1cInNpZGViYXItbWVudVwiXScpLm5vdCh0aGlzKS5jbG9zZXN0KCdsaScpLmxlbmd0aCA/ICQoJ1tkYXRhLXRvZ2dsZT1cInNpZGViYXItbWVudVwiXScpLm5vdCh0aGlzKS5jbG9zZXN0KCdsaScpIDogJCgnW2RhdGEtdG9nZ2xlPVwic2lkZWJhci1tZW51XCJdJykubm90KHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYWN0aXZlRWxlbWVudCA9ICQodGhpcykuY2xvc2VzdCgnbGknKS5sZW5ndGggPyAkKHRoaXMpLmNsb3Nlc3QoJ2xpJykgOiAkKHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBY3RpdmVFbGVtZW50LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlRWxlbWVudC5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoJ2h0bWwnKS5oYXNDbGFzcygnc2hvdy1zaWRlYmFyJykpIGFjdGl2ZUVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5yZW1vdmVDbGFzcygnc2hvdy1zaWRlYmFyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQuaGFzQ2xhc3MoJ2FjdGl2ZScpKSAkKCdodG1sJykuYWRkQ2xhc3MoJ3Nob3ctc2lkZWJhcicpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGRhdGFPcHRpb25zID0gZ2V0U2lkZWJhckRhdGFPcHRpb25zKHNpZGViYXIpLFxuICAgICAgICAgICAgICAgICAgICBidXR0b25PcHRpb25zID0ge307XG5cbiAgICAgICAgICAgICAgICBpZiAoYnV0dG9uLmRhdGEoJ2VmZmVjdCcpKSBidXR0b25PcHRpb25zLmVmZmVjdCA9IGJ1dHRvbi5kYXRhKCdlZmZlY3QnKTtcbiAgICAgICAgICAgICAgICBpZiAoYnV0dG9uLmRhdGEoJ292ZXJsYXknKSkgYnV0dG9uT3B0aW9ucy5vdmVybGF5ID0gYnV0dG9uLmRhdGEoJ292ZXJsYXknKTtcblxuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBkYXRhT3B0aW9ucywgYnV0dG9uT3B0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoISBzaWRlYmFyLmhhc0NsYXNzKCdzaWRlYmFyLWNsb3NlZCcpICYmIHNpZGViYXIuaXMoJzp2aXNpYmxlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzZXQoc2lkZWJhci5hdHRyKCdpZCcpLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG9wZW4odGFyZ2V0LCBvcHRpb25zKTtcblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAkKCdib2R5Jykub24oZXZlbnR0eXBlLCAnW2RhdGEtdG9nZ2xlPVwic2lkZWJhci1tZW51XCJdJywgdG9nZ2xlKTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbigna2V5ZG93bicsIG51bGwsICdlc2MnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoY29udGFpbmVyLmhhc0NsYXNzKCdzdC1tZW51LW9wZW4nKSkge1xuICAgICAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuc2lkZWJhcicpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciBzaWRlYmFyID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgLyogU2lkZWJhciBUb2dnbGUgQmFyICovXG4gICAgICAgICAgICBpZiAoc2lkZWJhci5kYXRhKCd0b2dnbGVCYXInKSkge1xuICAgICAgICAgICAgICAgIHZhciBiYXIgPSAkKCc8YT48L2E+Jyk7XG4gICAgICAgICAgICAgICAgYmFyLmF0dHIoJ2hyZWYnLCAnIycgKyBzaWRlYmFyLmF0dHIoJ2lkJykpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXRvZ2dsZScsICdzaWRlYmFyLW1lbnUnKVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NpZGViYXItdG9nZ2xlLWJhcicpO1xuXG4gICAgICAgICAgICAgICAgc2lkZWJhci5hcHBlbmQoYmFyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93LnNpZGViYXIgPSB7XG5cbiAgICAgICAgICAgIG9wZW46IGZ1bmN0aW9uIChpZCwgb3B0aW9ucykge1xuXG4gICAgICAgICAgICAgICAgdmFyIGEgPSBhbmltYXRpbmcoKTtcbiAgICAgICAgICAgICAgICBpZiAoYSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gb3BlbignIycgKyBpZCwgb3B0aW9ucyk7XG5cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbiAoaWQsIG9wdGlvbnMpIHtcblxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc2V0KGlkLCBvcHRpb25zKTtcblxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgb3B0aW9uczogZ2V0U2lkZWJhckRhdGFPcHRpb25zXG5cbiAgICAgICAgfTtcblxuICAgIH0pKCk7XG5cbn0pKGpRdWVyeSk7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRkID0gJCgnLnNpZGViYXJbZGF0YS10eXBlPVwiY29sbGFwc2VcIl0nKTtcblxuICAgIGlmIChkZC5sZW5ndGgpIHtcblxuICAgICAgICAkKCcuc2lkZWJhciAuc2lkZWJhci1tZW51ID4gbGkgPiBhJykub2ZmKCdtb3VzZWVudGVyJyk7XG4gICAgICAgICQoJy5zaWRlYmFyIC5zaWRlYmFyLW1lbnUgPiBsaS5kcm9wZG93biA+IGEnKS5vZmYoJ21vdXNlZW50ZXInKTtcbiAgICAgICAgJCgnLnNpZGViYXIgLnNpZGViYXItbWVudSA+IGxpID4gYScpLm9mZignbW91c2VlbnRlcicpO1xuICAgICAgICAkKCcuc2lkZWJhciAuc2lkZWJhci1tZW51ID4gbGkgPiBhJykub2ZmKCdjbGljaycpO1xuICAgICAgICAkKCcuc2lkZWJhcicpLm9mZignbW91c2VsZWF2ZScpO1xuICAgICAgICAkKCcuc2lkZWJhciAuZHJvcGRvd24nKS5vZmYoJ21vdXNlb3ZlcicpO1xuICAgICAgICAkKCcuc2lkZWJhciAuZHJvcGRvd24nKS5vZmYoJ21vdXNlb3V0Jyk7XG4gICAgICAgICQoJ2JvZHknKS5vZmYoJ21vdXNlb3V0JywgJyNkcm9wZG93bi10ZW1wIC5kcm9wZG93bicpO1xuXG4gICAgICAgICQoJy5zaWRlYmFyIHVsLmNvbGxhcHNlJykub2ZmKCdzaG93bi5icy5jb2xsYXBzZScpO1xuICAgICAgICAkKCcuc2lkZWJhciB1bC5jb2xsYXBzZScpLm9mZignc2hvdy5icy5jb2xsYXBzZScpO1xuICAgICAgICAkKCcuc2lkZWJhciB1bC5jb2xsYXBzZScpLm9mZignaGlkZS5icy5jb2xsYXBzZScpO1xuICAgICAgICAkKCcuc2lkZWJhciB1bC5jb2xsYXBzZScpLm9mZignaGlkZGVuLmJzLmNvbGxhcHNlJyk7XG5cbiAgICAgICAgZGQuZmluZCgnI2Ryb3Bkb3duLXRlbXAnKS5yZW1vdmUoKTtcblxuICAgICAgICBkZC5maW5kKCcuaGFzU3VibWVudScpLnJlbW92ZUNsYXNzKCdkcm9wZG93bicpXG4gICAgICAgICAgICAuZmluZCgnPiB1bCcpLmFkZENsYXNzKCdjb2xsYXBzZScpLnJlbW92ZUNsYXNzKCdkcm9wZG93bi1tZW51IHN1Ym1lbnUtaGlkZSBzdWJtZW51LXNob3cnKVxuICAgICAgICAgICAgLmVuZCgpXG4gICAgICAgICAgICAuZmluZCgnPiBhJykuYXR0cignZGF0YS10b2dnbGUnLCAnY29sbGFwc2UnKTtcblxuICAgICAgICBkZC5maW5kKCcuY29sbGFwc2UnKS5jb2xsYXBzZSh7ICd0b2dnbGUnOiBmYWxzZSB9KTtcblxuICAgICAgICAkKCcuc2lkZWJhciB1bC5jb2xsYXBzZScpLm9uKCdzaG93bi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAkKCcuc2lkZWJhciBbZGF0YS1zY3JvbGxhYmxlXScpLmdldE5pY2VTY3JvbGwoKS5yZXNpemUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ29sbGFwc2VcbiAgICAgICAgJCgnLnNpZGViYXIgdWwuY29sbGFwc2UnKS5vbignc2hvdy5icy5jb2xsYXBzZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdmFyIHBhcmVudHMgPSAkKHRoaXMpLnBhcmVudHMoJ3VsOmZpcnN0JykuZmluZCgnPiBsaS5vcGVuIFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdJyk7XG4gICAgICAgICAgICBpZiAocGFyZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRzLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKFwib3BlblwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLnNpZGViYXIgdWwuY29sbGFwc2UnKS5vbignaGlkZGVuLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwib3BlblwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZGQgPSAkKCcuc2lkZWJhcltkYXRhLXR5cGU9XCJkcm9wZG93blwiXScpO1xuXG4gICAgaWYgKGRkLmxlbmd0aCkge1xuXG4gICAgICAgICQoJy5zaWRlYmFyIHVsLmNvbGxhcHNlJylcbiAgICAgICAgICAgIC5vZmYoJ3Nob3duLmJzLmNvbGxhcHNlJylcbiAgICAgICAgICAgIC5vZmYoJ3Nob3cuYnMuY29sbGFwc2UnKVxuICAgICAgICAgICAgLm9mZignaGlkZGVuLmJzLmNvbGxhcHNlJyk7XG5cbiAgICAgICAgZGQuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2lkZWJhciA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgbmljZSA9IHNpZGViYXIuZmluZCgnW2RhdGEtc2Nyb2xsYWJsZV0nKS5nZXROaWNlU2Nyb2xsKClbIDAgXTtcblxuICAgICAgICAgICAgbmljZS5zY3JvbGxzdGFydChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEgc2lkZWJhci5pcygnW2RhdGEtdHlwZT1cImRyb3Bkb3duXCJdJykpIHJldHVybjtcbiAgICAgICAgICAgICAgICBzaWRlYmFyLmFkZENsYXNzKCdzY3JvbGxpbmcnKTtcbiAgICAgICAgICAgICAgICBzaWRlYmFyLmZpbmQoJyNkcm9wZG93bi10ZW1wID4gdWwgPiBsaScpLmVtcHR5KCk7XG4gICAgICAgICAgICAgICAgc2lkZWJhci5maW5kKCcjZHJvcGRvd24tdGVtcCcpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICBzaWRlYmFyLmZpbmQoJy5vcGVuJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBuaWNlLnNjcm9sbGVuZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEgc2lkZWJhci5pcygnW2RhdGEtdHlwZT1cImRyb3Bkb3duXCJdJykpIHJldHVybjtcbiAgICAgICAgICAgICAgICAkLmRhdGEodGhpcywgJ2xhc3RTY3JvbGxUb3AnLCBuaWNlLmdldFNjcm9sbFRvcCgpKTtcbiAgICAgICAgICAgICAgICBzaWRlYmFyLnJlbW92ZUNsYXNzKCdzY3JvbGxpbmcnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBkZC5maW5kKCcuaGFzU3VibWVudScpLmFkZENsYXNzKCdkcm9wZG93bicpLnJlbW92ZUNsYXNzKCdvcGVuJylcbiAgICAgICAgICAgIC5maW5kKCc+IHVsJykuYWRkQ2xhc3MoJ2Ryb3Bkb3duLW1lbnUnKS5yZW1vdmVDbGFzcygnY29sbGFwc2UgaW4nKS5yZW1vdmVBdHRyKCdzdHlsZScpXG4gICAgICAgICAgICAuZW5kKClcbiAgICAgICAgICAgIC5maW5kKCc+IGEnKS5yZW1vdmVDbGFzcygnY29sbGFwc2VkJylcbiAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLXRvZ2dsZScpO1xuXG4gICAgICAgICQoJy5zaWRlYmFyW2RhdGEtdHlwZT1cImRyb3Bkb3duXCJdIC5zaWRlYmFyLW1lbnUgPiBsaS5kcm9wZG93biA+IGEnKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghICQodGhpcykucGFyZW50KCcuZHJvcGRvd24nKS5pcygnLm9wZW4nKSAmJiAhICQodGhpcykuY2xvc2VzdCgnLnNpZGViYXInKS5pcygnLnNjcm9sbGluZycpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHAgPSAkKHRoaXMpLnBhcmVudCgnLmRyb3Bkb3duJyksXG4gICAgICAgICAgICAgICAgICAgIHQgPSBwLmZpbmQoJz4gLmRyb3Bkb3duLW1lbnUnKS5jbG9uZSgpLnJlbW92ZUNsYXNzKCdzdWJtZW51LWhpZGUnKSxcbiAgICAgICAgICAgICAgICAgICAgc2lkZWJhciA9ICQodGhpcykucGFyZW50cygnLnNpZGViYXI6Zmlyc3QnKSxcbiAgICAgICAgICAgICAgICAgICAgbSA9IHNpZGViYXIuZmluZCgnLnNpZGViYXItbWVudScpLFxuICAgICAgICAgICAgICAgICAgICBjID0gc2lkZWJhci5maW5kKCc+ICNkcm9wZG93bi10ZW1wJyk7XG5cbiAgICAgICAgICAgICAgICBtLmZpbmQoJy5vcGVuJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcblxuICAgICAgICAgICAgICAgIGlmICghIGMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGMgPSAkKCc8ZGl2Lz4nKS5hdHRyKCdpZCcsICdkcm9wZG93bi10ZW1wJykuYXBwZW5kVG8oc2lkZWJhcik7XG4gICAgICAgICAgICAgICAgICAgIGMuaHRtbCgnPHVsPjxsaT48L2xpPjwvdWw+Jyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYy5zaG93KCk7XG4gICAgICAgICAgICAgICAgYy5maW5kKCcuZHJvcGRvd24tbWVudScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGMgPSBjLmZpbmQoJz4gdWwgPiBsaScpLmNzcyh7b3ZlcmZsb3c6ICd2aXNpYmxlJ30pLmFkZENsYXNzKCdkcm9wZG93biBvcGVuJyk7XG5cbiAgICAgICAgICAgICAgICBwLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgdC5hcHBlbmRUbyhjKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICB0b3A6IHAub2Zmc2V0KCkudG9wIC0gYy5vZmZzZXQoKS50b3AsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6ICcxMDAlJ1xuICAgICAgICAgICAgICAgIH0pLnNob3coKTtcblxuICAgICAgICAgICAgICAgIGlmIChzaWRlYmFyLmlzKCcucmlnaHQnKSkge1xuICAgICAgICAgICAgICAgICAgICB0LmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogJzEwMCUnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLnNpZGViYXJbZGF0YS10eXBlPVwiZHJvcGRvd25cIl0gLnNpZGViYXItbWVudSA+IGxpID4gYScpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBpZiAoISAkKHRoaXMpLnBhcmVudCgpLmlzKCcuZHJvcGRvd24nKSkge1xuICAgICAgICAgICAgICAgIHZhciBzaWRlYmFyID0gJCh0aGlzKS5jbG9zZXN0KCcuc2lkZWJhcicpO1xuICAgICAgICAgICAgICAgIHNpZGViYXIuZmluZCgnLm9wZW4nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgICAgIHNpZGViYXIuZmluZCgnI2Ryb3Bkb3duLXRlbXAnKS5oaWRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLnNpZGViYXJbZGF0YS10eXBlPVwiZHJvcGRvd25cIl0gLnNpZGViYXItbWVudSA+IGxpID4gYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5wYXJlbnQoKS5pcygnLmRyb3Bkb3duJykpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLnNpZGViYXJbZGF0YS10eXBlPVwiZHJvcGRvd25cIl0nKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnI2Ryb3Bkb3duLXRlbXAnKS5oaWRlKCk7XG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5vcGVuJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLnNpZGViYXJbZGF0YS10eXBlPVwiZHJvcGRvd25cIl0gLmRyb3Bkb3duJykub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ29wZW4nKS5jaGlsZHJlbigndWwnKS5yZW1vdmVDbGFzcygnc3VibWVudS1oaWRlJykuYWRkQ2xhc3MoJ3N1Ym1lbnUtc2hvdycpO1xuICAgICAgICB9KS5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCd1bCcpLnJlbW92ZUNsYXNzKCcuc3VibWVudS1zaG93JykuYWRkQ2xhc3MoJ3N1Ym1lbnUtaGlkZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdib2R5Jykub24oJ21vdXNlb3V0JywgJyNkcm9wZG93bi10ZW1wIC5kcm9wZG93bicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoJy5zaWRlYmFyLW1lbnUgLm9wZW4nKS5yZW1vdmVDbGFzcygnLm9wZW4nKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTsiLCJyZXF1aXJlKCcuL19icmVha3BvaW50cycpO1xucmVxdWlyZSgnLi9fc2lkZWJhci1tZW51Jyk7XG5yZXF1aXJlKCcuL19jb2xsYXBzaWJsZScpO1xucmVxdWlyZSgnLi9fZHJvcGRvd24nKTtcbnJlcXVpcmUoJy4vX3NpZGViYXItdG9nZ2xlJyk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBmdW5jdGlvbiBoZWlnaHQoKSB7XG4gICAgICAgICQoJy5jb3Zlci5vdmVybGF5JykuZmlsdGVyKCc6dmlzaWJsZScpLm5vdCgnW2NsYXNzKj1cImhlaWdodFwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHQgPSAkKHRoaXMpLFxuICAgICAgICAgICAgICAgIGkgPSB0LmZpbmQoJ2ltZzpmaXJzdCcpO1xuXG4gICAgICAgICAgICB0LmhlaWdodChpLmhlaWdodCgpKTtcbiAgICAgICAgICAgICQoJy5vdmVybGF5LWZ1bGwnLCB0KS5pbm5lckhlaWdodChpLmhlaWdodCgpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgJChkb2N1bWVudCkucmVhZHkoaGVpZ2h0KTtcbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCBoZWlnaHQpO1xuXG4gICAgdmFyIHQ7XG4gICAgJCh3aW5kb3cpLm9uKFwiZGVib3VuY2VkcmVzaXplXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGNsZWFyVGltZW91dCh0KTtcbiAgICAgICAgdCA9IHNldFRpbWVvdXQoaGVpZ2h0LCAyMDApO1xuICAgIH0pO1xuXG59KShqUXVlcnkpO1xuIiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgICB2YXIgc2hvd0hvdmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCdbZGF0YS1zaG93LWhvdmVyXScpLmhpZGUoKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgICBwYXJlbnQgPSAkKHRoaXMpLmRhdGEoJ3Nob3dIb3ZlcicpO1xuXG4gICAgICAgICAgICBzZWxmLmNsb3Nlc3QocGFyZW50KS5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHNlbGYuc2hvdygpO1xuICAgICAgICAgICAgfSkub24oJ21vdXNlb3V0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuaGlkZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBzaG93SG92ZXIoKTtcblxuICAgIHdpbmRvdy5zaG93SG92ZXIgPSBzaG93SG92ZXI7XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgICB2YXIgc2tpbiA9IHJlcXVpcmUoJy4vX3NraW4nKSgpO1xuXG4gICAgJCgnLnRhYmJhYmxlIC5uYXYtdGFicycpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHRhYnMgPSAkKHRoaXMpLm5pY2VTY3JvbGwoe1xuICAgICAgICAgICAgY3Vyc29yYm9yZGVyOiAwLFxuICAgICAgICAgICAgY3Vyc29yY29sb3I6IGNvbmZpZy5za2luc1sgc2tpbiBdWyAncHJpbWFyeS1jb2xvcicgXSxcbiAgICAgICAgICAgIGhvcml6cmFpbGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICBvbmVheGlzbW91c2Vtb2RlOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBfc3VwZXIgPSB0YWJzLmdldENvbnRlbnRTaXplO1xuICAgICAgICB0YWJzLmdldENvbnRlbnRTaXplID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgcGFnZSA9IF9zdXBlci5jYWxsKHRhYnMpO1xuICAgICAgICAgICAgcGFnZS5oID0gdGFicy53aW4uaGVpZ2h0KCk7XG4gICAgICAgICAgICByZXR1cm4gcGFnZTtcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgICQoJ1tkYXRhLXNjcm9sbGFibGVdJykuZ2V0TmljZVNjcm9sbCgpLnJlc2l6ZSgpO1xuXG4gICAgJCgnLnRhYmJhYmxlIC5uYXYtdGFicyBhJykub24oJ3Nob3duLmJzLnRhYicsIGZ1bmN0aW9uKGUpe1xuICAgICAgICB2YXIgdGFiID0gJCh0aGlzKS5jbG9zZXN0KCcudGFiYmFibGUnKTtcbiAgICAgICAgdmFyIHRhcmdldCA9ICQoZS50YXJnZXQpLFxuICAgICAgICAgICAgdGFyZ2V0UGFuZSA9IHRhcmdldC5hdHRyKCdocmVmJykgfHwgdGFyZ2V0LmRhdGEoJ3RhcmdldCcpO1xuXG4gICAgICAgIC8vIHJlZnJlc2ggdGFicyB3aXRoIGhvcml6b250YWwgc2Nyb2xsXG4gICAgICAgIHRhYi5maW5kKCcubmF2LXRhYnMnKS5nZXROaWNlU2Nyb2xsKCkucmVzaXplKCk7XG5cbiAgICAgICAgLy8gcmVmcmVzaCBbZGF0YS1zY3JvbGxhYmxlXSB3aXRoaW4gdGhlIGFjdGl2YXRlZCB0YWIgcGFuZVxuICAgICAgICAkKHRhcmdldFBhbmUpLmZpbmQoJ1tkYXRhLXNjcm9sbGFibGVdJykuZ2V0TmljZVNjcm9sbCgpLnJlc2l6ZSgpO1xuICAgIH0pO1xuXG59KGpRdWVyeSkpOyIsIihmdW5jdGlvbiAoJCkge1xuXG4gICAgdmFyIHRyZWVfZ2x5cGhfb3B0aW9ucyA9IHtcbiAgICAgICAgbWFwOiB7XG4gICAgICAgICAgICBjaGVja2JveDogXCJmYSBmYS1zcXVhcmUtb1wiLFxuICAgICAgICAgICAgY2hlY2tib3hTZWxlY3RlZDogXCJmYSBmYS1jaGVjay1zcXVhcmVcIixcbiAgICAgICAgICAgIGNoZWNrYm94VW5rbm93bjogXCJmYSBmYS1jaGVjay1zcXVhcmUgZmEtbXV0ZWRcIixcbiAgICAgICAgICAgIGVycm9yOiBcImZhIGZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCIsXG4gICAgICAgICAgICBleHBhbmRlckNsb3NlZDogXCJmYSBmYS1jYXJldC1yaWdodFwiLFxuICAgICAgICAgICAgZXhwYW5kZXJMYXp5OiBcImZhIGZhLWFuZ2xlLXJpZ2h0XCIsXG4gICAgICAgICAgICBleHBhbmRlck9wZW46IFwiZmEgZmEtY2FyZXQtZG93blwiLFxuICAgICAgICAgICAgZG9jOiBcImZhIGZhLWZpbGUtb1wiLFxuICAgICAgICAgICAgbm9FeHBhbmRlcjogXCJcIixcbiAgICAgICAgICAgIGRvY09wZW46IFwiZmEgZmEtZmlsZVwiLFxuICAgICAgICAgICAgbG9hZGluZzogXCJmYSBmYS1yZWZyZXNoIGZhLXNwaW5cIixcbiAgICAgICAgICAgIGZvbGRlcjogXCJmYSBmYS1mb2xkZXJcIixcbiAgICAgICAgICAgIGZvbGRlck9wZW46IFwiZmEgZmEtZm9sZGVyLW9wZW5cIlxuICAgICAgICB9XG4gICAgfSxcbiAgICB0cmVlX2RuZF9vcHRpb25zID0ge1xuICAgICAgICBhdXRvRXhwYW5kTVM6IDQwMCxcbiAgICAgICAgICAgIGZvY3VzT25DbGljazogdHJ1ZSxcbiAgICAgICAgICAgIHByZXZlbnRWb2lkTW92ZXM6IHRydWUsIC8vIFByZXZlbnQgZHJvcHBpbmcgbm9kZXMgJ2JlZm9yZSBzZWxmJywgZXRjLlxuICAgICAgICAgICAgcHJldmVudFJlY3Vyc2l2ZU1vdmVzOiB0cnVlLCAvLyBQcmV2ZW50IGRyb3BwaW5nIG5vZGVzIG9uIG93biBkZXNjZW5kYW50c1xuICAgICAgICAgICAgZHJhZ1N0YXJ0OiBmdW5jdGlvbihub2RlLCBkYXRhKSB7XG4gICAgICAgICAgICAvKiogVGhpcyBmdW5jdGlvbiBNVVNUIGJlIGRlZmluZWQgdG8gZW5hYmxlIGRyYWdnaW5nIGZvciB0aGUgdHJlZS5cbiAgICAgICAgICAgICAqICBSZXR1cm4gZmFsc2UgdG8gY2FuY2VsIGRyYWdnaW5nIG9mIG5vZGUuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICBkcmFnRW50ZXI6IGZ1bmN0aW9uKG5vZGUsIGRhdGEpIHtcbiAgICAgICAgICAgIC8qKiBkYXRhLm90aGVyTm9kZSBtYXkgYmUgbnVsbCBmb3Igbm9uLWZhbmN5dHJlZSBkcm9wcGFibGVzLlxuICAgICAgICAgICAgICogIFJldHVybiBmYWxzZSB0byBkaXNhbGxvdyBkcm9wcGluZyBvbiBub2RlLiBJbiB0aGlzIGNhc2VcbiAgICAgICAgICAgICAqICBkcmFnT3ZlciBhbmQgZHJhZ0xlYXZlIGFyZSBub3QgY2FsbGVkLlxuICAgICAgICAgICAgICogIFJldHVybiAnb3ZlcicsICdiZWZvcmUsIG9yICdhZnRlcicgdG8gZm9yY2UgYSBoaXRNb2RlLlxuICAgICAgICAgICAgICogIFJldHVybiBbJ2JlZm9yZScsICdhZnRlciddIHRvIHJlc3RyaWN0IGF2YWlsYWJsZSBoaXRNb2Rlcy5cbiAgICAgICAgICAgICAqICBBbnkgb3RoZXIgcmV0dXJuIHZhbHVlIHdpbGwgY2FsYyB0aGUgaGl0TW9kZSBmcm9tIHRoZSBjdXJzb3IgcG9zaXRpb24uXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIC8vIFByZXZlbnQgZHJvcHBpbmcgYSBwYXJlbnQgYmVsb3cgYW5vdGhlciBwYXJlbnQgKG9ubHkgc29ydFxuICAgICAgICAgICAgLy8gbm9kZXMgdW5kZXIgdGhlIHNhbWUgcGFyZW50KVxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgIGlmKG5vZGUucGFyZW50ICE9PSBkYXRhLm90aGVyTm9kZS5wYXJlbnQpe1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERvbid0IGFsbG93IGRyb3BwaW5nICpvdmVyKiBhIG5vZGUgKHdvdWxkIGNyZWF0ZSBhIGNoaWxkKVxuICAgICAgICAgICAgcmV0dXJuIFtcImJlZm9yZVwiLCBcImFmdGVyXCJdO1xuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICBkcmFnRHJvcDogZnVuY3Rpb24obm9kZSwgZGF0YSkge1xuICAgICAgICAgICAgLyoqIFRoaXMgZnVuY3Rpb24gTVVTVCBiZSBkZWZpbmVkIHRvIGVuYWJsZSBkcm9wcGluZyBvZiBpdGVtcyBvblxuICAgICAgICAgICAgICogIHRoZSB0cmVlLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBkYXRhLm90aGVyTm9kZS5tb3ZlVG8obm9kZSwgZGF0YS5oaXRNb2RlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyB1c2luZyBkZWZhdWx0IG9wdGlvbnNcbiAgICAkKCdbZGF0YS10b2dnbGU9XCJ0cmVlXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBleHRlbnNpb25zID0gWyBcImdseXBoXCIgXTtcbiAgICAgICAgaWYgKHR5cGVvZiAkKHRoaXMpLmF0dHIoJ2RhdGEtdHJlZS1kbmQnKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgZXh0ZW5zaW9ucy5wdXNoKCBcImRuZFwiICk7XG4gICAgICAgIH1cbiAgICAgICAgJCh0aGlzKS5mYW5jeXRyZWUoe1xuICAgICAgICAgICAgZXh0ZW5zaW9uczogZXh0ZW5zaW9ucyxcbiAgICAgICAgICAgIGdseXBoOiB0cmVlX2dseXBoX29wdGlvbnMsXG4gICAgICAgICAgICBkbmQ6IHRyZWVfZG5kX29wdGlvbnMsXG4gICAgICAgICAgICBjbGlja0ZvbGRlck1vZGU6IDMsXG4gICAgICAgICAgICBjaGVja2JveDogdHlwZW9mICQodGhpcykuYXR0cignZGF0YS10cmVlLWNoZWNrYm94JykgIT09IFwidW5kZWZpbmVkXCIgfHwgZmFsc2UsXG4gICAgICAgICAgICBzZWxlY3RNb2RlOiB0eXBlb2YgJCh0aGlzKS5hdHRyKCdkYXRhLXRyZWUtc2VsZWN0JykgIT09IFwidW5kZWZpbmVkXCIgPyBwYXJzZUludCgkKHRoaXMpLmF0dHIoJ2RhdGEtdHJlZS1zZWxlY3QnKSkgOiAyXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG59KGpRdWVyeSkpOyIsInJlcXVpcmUoJy4vX3RhYnMnKTtcbnJlcXVpcmUoJy4vX3RyZWUnKTtcbnJlcXVpcmUoJy4vX3Nob3ctaG92ZXInKTsiXX0=

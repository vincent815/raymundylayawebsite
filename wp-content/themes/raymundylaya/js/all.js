/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);
	module.exports = __webpack_require__(5);


/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * File navigation.js.
	 *
	 * Handles toggling the navigation menu for small screens and enables TAB key
	 * navigation support for dropdown menus.
	 */
	( function() {
		var container, button, menu, links, subMenus, i, len;

		container = document.getElementById( 'site-navigation' );
		if ( ! container ) {
			return;
		}

		button = container.getElementsByTagName( 'button' )[0];
		if ( 'undefined' === typeof button ) {
			return;
		}

		menu = container.getElementsByTagName( 'ul' )[0];

		// Hide menu toggle button if menu is empty and return early.
		if ( 'undefined' === typeof menu ) {
			button.style.display = 'none';
			return;
		}

		menu.setAttribute( 'aria-expanded', 'false' );
		if ( -1 === menu.className.indexOf( 'nav-menu' ) ) {
			menu.className += ' nav-menu';
		}

		button.onclick = function() {
			if ( -1 !== container.className.indexOf( 'toggled' ) ) {
				container.className = container.className.replace( ' toggled', '' );
				button.setAttribute( 'aria-expanded', 'false' );
				menu.setAttribute( 'aria-expanded', 'false' );
			} else {
				container.className += ' toggled';
				button.setAttribute( 'aria-expanded', 'true' );
				menu.setAttribute( 'aria-expanded', 'true' );
			}
		};

		// Get all the link elements within the menu.
		links    = menu.getElementsByTagName( 'a' );
		subMenus = menu.getElementsByTagName( 'ul' );

		// Set menu items with submenus to aria-haspopup="true".
		for ( i = 0, len = subMenus.length; i < len; i++ ) {
			subMenus[i].parentNode.setAttribute( 'aria-haspopup', 'true' );
		}

		// Each time a menu link is focused or blurred, toggle focus.
		for ( i = 0, len = links.length; i < len; i++ ) {
			links[i].addEventListener( 'focus', toggleFocus, true );
			links[i].addEventListener( 'blur', toggleFocus, true );
		}

		/**
		 * Sets or removes .focus class on an element.
		 */
		function toggleFocus() {
			var self = this;

			// Move up through the ancestors of the current link until we hit .nav-menu.
			while ( -1 === self.className.indexOf( 'nav-menu' ) ) {

				// On li elements toggle the class .focus.
				if ( 'li' === self.tagName.toLowerCase() ) {
					if ( -1 !== self.className.indexOf( 'focus' ) ) {
						self.className = self.className.replace( ' focus', '' );
					} else {
						self.className += ' focus';
					}
				}

				self = self.parentElement;
			}
		}
	} )();


/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * File skip-link-focus-fix.js.
	 *
	 * Helps with accessibility for keyboard only users.
	 *
	 * Learn more: https://git.io/vWdr2
	 */
	( function() {
		var isWebkit = navigator.userAgent.toLowerCase().indexOf( 'webkit' ) > -1,
		    isOpera  = navigator.userAgent.toLowerCase().indexOf( 'opera' )  > -1,
		    isIe     = navigator.userAgent.toLowerCase().indexOf( 'msie' )   > -1;

		if ( ( isWebkit || isOpera || isIe ) && document.getElementById && window.addEventListener ) {
			window.addEventListener( 'hashchange', function() {
				var id = location.hash.substring( 1 ),
					element;

				if ( ! ( /^[A-z0-9_-]+$/.test( id ) ) ) {
					return;
				}

				element = document.getElementById( id );

				if ( element ) {
					if ( ! ( /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) ) ) {
						element.tabIndex = -1;
					}

					element.focus();
				}
			}, false );
		}
	})();


/***/ },
/* 3 */
/***/ function(module, exports) {

	//
	// SmoothScroll for websites v1.3.8 (Balazs Galambosi)
	// Licensed under the terms of the MIT license.
	//
	// You may use it in your theme if you credit me.
	// It is also free to use on any individual website.
	//
	// Exception:
	// The only restriction would be not to publish any
	// extension for browsers or native application
	// without getting a written permission first.
	//

	(function () {

	// Scroll Variables (tweakable)
	    var defaultOptions = {

	        // Scrolling Core
	        frameRate        : 150, // [Hz]
	        animationTime    : 400, // [px]
	        stepSize         : 120, // [px]

	        // Pulse (less tweakable)
	        // ratio of "tail" to "acceleration"
	        pulseAlgorithm   : true,
	        pulseScale       : 4,
	        pulseNormalize   : 1,

	        // Acceleration
	        accelerationDelta : 20,  // 20
	        accelerationMax   : 1,   // 1

	        // Keyboard Settings
	        keyboardSupport   : true,  // option
	        arrowScroll       : 50,     // [px]

	        // Other
	        touchpadSupport   : true,
	        fixedBackground   : true,
	        excluded          : ''
	    };

	    var options = defaultOptions;


	// Other Variables
	    var isExcluded = false;
	    var isFrame = false;
	    var direction = { x: 0, y: 0 };
	    var initDone  = false;
	    var root = document.documentElement;
	    var activeElement;
	    var observer;
	    var deltaBuffer = [];
	    var isMac = /^Mac/.test(navigator.platform);

	    var key = { left: 37, up: 38, right: 39, down: 40, spacebar: 32,
	        pageup: 33, pagedown: 34, end: 35, home: 36 };


	    /***********************************************
	     * SETTINGS
	     ***********************************************/

	    var options = defaultOptions;


	    /***********************************************
	     * INITIALIZE
	     ***********************************************/

	    /**
	     * Tests if smooth scrolling is allowed. Shuts down everything if not.
	     */
	    function initTest() {
	        if (options.keyboardSupport) {
	            addEvent('keydown', keydown);
	        }
	    }

	    /**
	     * Sets up scrolls array, determines if frames are involved.
	     */
	    function init() {

	        if (initDone || !document.body) return;

	        initDone = true;

	        var body = document.body;
	        var html = document.documentElement;
	        var windowHeight = window.innerHeight;
	        var scrollHeight = body.scrollHeight;

	        // check compat mode for root element
	        root = (document.compatMode.indexOf('CSS') >= 0) ? html : body;
	        activeElement = body;

	        initTest();

	        // Checks if this script is running in a frame
	        if (top != self) {
	            isFrame = true;
	        }

	        /**
	         * This fixes a bug where the areas left and right to
	         * the content does not trigger the onmousewheel event
	         * on some pages. e.g.: html, body { height: 100% }
	         */
	        else if (scrollHeight > windowHeight &&
	            (body.offsetHeight <= windowHeight ||
	            html.offsetHeight <= windowHeight)) {

	            var fullPageElem = document.createElement('div');
	            fullPageElem.style.cssText = 'position:absolute; z-index:-10000; ' +
	                'top:0; left:0; right:0; height:' +
	                root.scrollHeight + 'px';
	            document.body.appendChild(fullPageElem);

	            // DOM changed (throttled) to fix height
	            var pendingRefresh;
	            var refresh = function () {
	                if (pendingRefresh) return; // could also be: clearTimeout(pendingRefresh);
	                pendingRefresh = setTimeout(function () {
	                    if (isExcluded) return; // could be running after cleanup
	                    fullPageElem.style.height = '0';
	                    fullPageElem.style.height = root.scrollHeight + 'px';
	                    pendingRefresh = null;
	                }, 500); // act rarely to stay fast
	            };

	            setTimeout(refresh, 10);

	            // TODO: attributeFilter?
	            var config = {
	                attributes: true,
	                childList: true,
	                characterData: false
	                // subtree: true
	            };

	            observer = new MutationObserver(refresh);
	            observer.observe(body, config);

	            if (root.offsetHeight <= windowHeight) {
	                var clearfix = document.createElement('div');
	                clearfix.style.clear = 'both';
	                body.appendChild(clearfix);
	            }
	        }

	        // disable fixed background
	        if (!options.fixedBackground && !isExcluded) {
	            body.style.backgroundAttachment = 'scroll';
	            html.style.backgroundAttachment = 'scroll';
	        }
	    }

	    /**
	     * Removes event listeners and other traces left on the page.
	     */
	    function cleanup() {
	        observer && observer.disconnect();
	        removeEvent(wheelEvent, wheel);
	        removeEvent('mousedown', mousedown);
	        removeEvent('keydown', keydown);
	    }


	    /************************************************
	     * SCROLLING
	     ************************************************/

	    var que = [];
	    var pending = false;
	    var lastScroll = Date.now();

	    /**
	     * Pushes scroll actions to the scrolling queue.
	     */
	    function scrollArray(elem, left, top) {

	        directionCheck(left, top);

	        if (options.accelerationMax != 1) {
	            var now = Date.now();
	            var elapsed = now - lastScroll;
	            if (elapsed < options.accelerationDelta) {
	                var factor = (1 + (50 / elapsed)) / 2;
	                if (factor > 1) {
	                    factor = Math.min(factor, options.accelerationMax);
	                    left *= factor;
	                    top  *= factor;
	                }
	            }
	            lastScroll = Date.now();
	        }

	        // push a scroll command
	        que.push({
	            x: left,
	            y: top,
	            lastX: (left < 0) ? 0.99 : -0.99,
	            lastY: (top  < 0) ? 0.99 : -0.99,
	            start: Date.now()
	        });

	        // don't act if there's a pending queue
	        if (pending) {
	            return;
	        }

	        var scrollWindow = (elem === document.body);

	        var step = function (time) {

	            var now = Date.now();
	            var scrollX = 0;
	            var scrollY = 0;

	            for (var i = 0; i < que.length; i++) {

	                var item = que[i];
	                var elapsed  = now - item.start;
	                var finished = (elapsed >= options.animationTime);

	                // scroll position: [0, 1]
	                var position = (finished) ? 1 : elapsed / options.animationTime;

	                // easing [optional]
	                if (options.pulseAlgorithm) {
	                    position = pulse(position);
	                }

	                // only need the difference
	                var x = (item.x * position - item.lastX) >> 0;
	                var y = (item.y * position - item.lastY) >> 0;

	                // add this to the total scrolling
	                scrollX += x;
	                scrollY += y;

	                // update last values
	                item.lastX += x;
	                item.lastY += y;

	                // delete and step back if it's over
	                if (finished) {
	                    que.splice(i, 1); i--;
	                }
	            }

	            // scroll left and top
	            if (scrollWindow) {
	                window.scrollBy(scrollX, scrollY);
	            }
	            else {
	                if (scrollX) elem.scrollLeft += scrollX;
	                if (scrollY) elem.scrollTop  += scrollY;
	            }

	            // clean up if there's nothing left to do
	            if (!left && !top) {
	                que = [];
	            }

	            if (que.length) {
	                requestFrame(step, elem, (1000 / options.frameRate + 1));
	            } else {
	                pending = false;
	            }
	        };

	        // start a new queue of actions
	        requestFrame(step, elem, 0);
	        pending = true;
	    }


	    /***********************************************
	     * EVENTS
	     ***********************************************/

	    /**
	     * Mouse wheel handler.
	     * @param {Object} event
	     */
	    function wheel(event) {

	        if (!initDone) {
	            init();
	        }

	        var target = event.target;
	        var overflowing = overflowingAncestor(target);

	        // use default if there's no overflowing
	        // element or default action is prevented
	        // or it's a zooming event with CTRL
	        if (!overflowing || event.defaultPrevented || event.ctrlKey) {
	            return true;
	        }

	        // leave embedded content alone (flash & pdf)
	        if (isNodeName(activeElement, 'embed') ||
	            (isNodeName(target, 'embed') && /\.pdf/i.test(target.src)) ||
	            isNodeName(activeElement, 'object')) {
	            return true;
	        }

	        var deltaX = -event.wheelDeltaX || event.deltaX || 0;
	        var deltaY = -event.wheelDeltaY || event.deltaY || 0;

	        if (isMac) {
	            if (event.wheelDeltaX && isDivisible(event.wheelDeltaX, 120)) {
	                deltaX = -120 * (event.wheelDeltaX / Math.abs(event.wheelDeltaX));
	            }
	            if (event.wheelDeltaY && isDivisible(event.wheelDeltaY, 120)) {
	                deltaY = -120 * (event.wheelDeltaY / Math.abs(event.wheelDeltaY));
	            }
	        }

	        // use wheelDelta if deltaX/Y is not available
	        if (!deltaX && !deltaY) {
	            deltaY = -event.wheelDelta || 0;
	        }

	        // line based scrolling (Firefox mostly)
	        if (event.deltaMode === 1) {
	            deltaX *= 40;
	            deltaY *= 40;
	        }

	        // check if it's a touchpad scroll that should be ignored
	        if (!options.touchpadSupport && isTouchpad(deltaY)) {
	            return true;
	        }

	        // scale by step size
	        // delta is 120 most of the time
	        // synaptics seems to send 1 sometimes
	        if (Math.abs(deltaX) > 1.2) {
	            deltaX *= options.stepSize / 120;
	        }
	        if (Math.abs(deltaY) > 1.2) {
	            deltaY *= options.stepSize / 120;
	        }

	        scrollArray(overflowing, deltaX, deltaY);
	        event.preventDefault();
	        scheduleClearCache();
	    }

	    /**
	     * Keydown event handler.
	     * @param {Object} event
	     */
	    function keydown(event) {

	        var target   = event.target;
	        var modifier = event.ctrlKey || event.altKey || event.metaKey ||
	            (event.shiftKey && event.keyCode !== key.spacebar);

	        // our own tracked active element could've been removed from the DOM
	        if (!document.contains(activeElement)) {
	            activeElement = document.activeElement;
	        }

	        // do nothing if user is editing text
	        // or using a modifier key (except shift)
	        // or in a dropdown
	        // or inside interactive elements
	        var inputNodeNames = /^(textarea|select|embed|object)$/i;
	        var buttonTypes = /^(button|submit|radio|checkbox|file|color|image)$/i;
	        if ( inputNodeNames.test(target.nodeName) ||
	            isNodeName(target, 'input') && !buttonTypes.test(target.type) ||
	            isNodeName(activeElement, 'video') ||
	            isInsideYoutubeVideo(event) ||
	            target.isContentEditable ||
	            event.defaultPrevented   ||
	            modifier ) {
	            return true;
	        }

	        // spacebar should trigger button press
	        if ((isNodeName(target, 'button') ||
	            isNodeName(target, 'input') && buttonTypes.test(target.type)) &&
	            event.keyCode === key.spacebar) {
	            return true;
	        }

	        var shift, x = 0, y = 0;
	        var elem = overflowingAncestor(activeElement);
	        var clientHeight = elem.clientHeight;

	        if (elem == document.body) {
	            clientHeight = window.innerHeight;
	        }

	        switch (event.keyCode) {
	            case key.up:
	                y = -options.arrowScroll;
	                break;
	            case key.down:
	                y = options.arrowScroll;
	                break;
	            case key.spacebar: // (+ shift)
	                shift = event.shiftKey ? 1 : -1;
	                y = -shift * clientHeight * 0.9;
	                break;
	            case key.pageup:
	                y = -clientHeight * 0.9;
	                break;
	            case key.pagedown:
	                y = clientHeight * 0.9;
	                break;
	            case key.home:
	                y = -elem.scrollTop;
	                break;
	            case key.end:
	                var damt = elem.scrollHeight - elem.scrollTop - clientHeight;
	                y = (damt > 0) ? damt+10 : 0;
	                break;
	            case key.left:
	                x = -options.arrowScroll;
	                break;
	            case key.right:
	                x = options.arrowScroll;
	                break;
	            default:
	                return true; // a key we don't care about
	        }

	        scrollArray(elem, x, y);
	        event.preventDefault();
	        scheduleClearCache();
	    }

	    /**
	     * Mousedown event only for updating activeElement
	     */
	    function mousedown(event) {
	        activeElement = event.target;
	    }


	    /***********************************************
	     * OVERFLOW
	     ***********************************************/

	    var uniqueID = (function () {
	        var i = 0;
	        return function (el) {
	            return el.uniqueID || (el.uniqueID = i++);
	        };
	    })();

	    var cache = {}; // cleared out after a scrolling session
	    var clearCacheTimer;

	//setInterval(function () { cache = {}; }, 10 * 1000);

	    function scheduleClearCache() {
	        clearTimeout(clearCacheTimer);
	        clearCacheTimer = setInterval(function () { cache = {}; }, 1*1000);
	    }

	    function setCache(elems, overflowing) {
	        for (var i = elems.length; i--;)
	            cache[uniqueID(elems[i])] = overflowing;
	        return overflowing;
	    }

	//  (body)                (root)
	//         | hidden | visible | scroll |  auto  |
	// hidden  |   no   |    no   |   YES  |   YES  |
	// visible |   no   |   YES   |   YES  |   YES  |
	// scroll  |   no   |   YES   |   YES  |   YES  |
	// auto    |   no   |   YES   |   YES  |   YES  |

	    function overflowingAncestor(el) {
	        var elems = [];
	        var body = document.body;
	        var rootScrollHeight = root.scrollHeight;
	        do {
	            var cached = cache[uniqueID(el)];
	            if (cached) {
	                return setCache(elems, cached);
	            }
	            elems.push(el);
	            if (rootScrollHeight === el.scrollHeight) {
	                var topOverflowsNotHidden = overflowNotHidden(root) && overflowNotHidden(body);
	                var isOverflowCSS = topOverflowsNotHidden || overflowAutoOrScroll(root);
	                if (isFrame && isContentOverflowing(root) ||
	                    !isFrame && isOverflowCSS) {
	                    return setCache(elems, getScrollRoot());
	                }
	            } else if (isContentOverflowing(el) && overflowAutoOrScroll(el)) {
	                return setCache(elems, el);
	            }
	        } while (el = el.parentElement);
	    }

	    function isContentOverflowing(el) {
	        return (el.clientHeight + 10 < el.scrollHeight);
	    }

	// typically for <body> and <html>
	    function overflowNotHidden(el) {
	        var overflow = getComputedStyle(el, '').getPropertyValue('overflow-y');
	        return (overflow !== 'hidden');
	    }

	// for all other elements
	    function overflowAutoOrScroll(el) {
	        var overflow = getComputedStyle(el, '').getPropertyValue('overflow-y');
	        return (overflow === 'scroll' || overflow === 'auto');
	    }


	    /***********************************************
	     * HELPERS
	     ***********************************************/

	    function addEvent(type, fn) {
	        window.addEventListener(type, fn, false);
	    }

	    function removeEvent(type, fn) {
	        window.removeEventListener(type, fn, false);
	    }

	    function isNodeName(el, tag) {
	        return (el.nodeName||'').toLowerCase() === tag.toLowerCase();
	    }

	    function directionCheck(x, y) {
	        x = (x > 0) ? 1 : -1;
	        y = (y > 0) ? 1 : -1;
	        if (direction.x !== x || direction.y !== y) {
	            direction.x = x;
	            direction.y = y;
	            que = [];
	            lastScroll = 0;
	        }
	    }

	    var deltaBufferTimer;

	    if (window.localStorage && localStorage.SS_deltaBuffer) {
	        deltaBuffer = localStorage.SS_deltaBuffer.split(',');
	    }

	    function isTouchpad(deltaY) {
	        if (!deltaY) return;
	        if (!deltaBuffer.length) {
	            deltaBuffer = [deltaY, deltaY, deltaY];
	        }
	        deltaY = Math.abs(deltaY)
	        deltaBuffer.push(deltaY);
	        deltaBuffer.shift();
	        clearTimeout(deltaBufferTimer);
	        deltaBufferTimer = setTimeout(function () {
	            if (window.localStorage) {
	                localStorage.SS_deltaBuffer = deltaBuffer.join(',');
	            }
	        }, 1000);
	        return !allDeltasDivisableBy(120) && !allDeltasDivisableBy(100);
	    }

	    function isDivisible(n, divisor) {
	        return (Math.floor(n / divisor) == n / divisor);
	    }

	    function allDeltasDivisableBy(divisor) {
	        return (isDivisible(deltaBuffer[0], divisor) &&
	        isDivisible(deltaBuffer[1], divisor) &&
	        isDivisible(deltaBuffer[2], divisor));
	    }

	    function isInsideYoutubeVideo(event) {
	        var elem = event.target;
	        var isControl = false;
	        if (document.URL.indexOf ('www.youtube.com/watch') != -1) {
	            do {
	                isControl = (elem.classList &&
	                elem.classList.contains('html5-video-controls'));
	                if (isControl) break;
	            } while (elem = elem.parentNode);
	        }
	        return isControl;
	    }

	    var requestFrame = (function () {
	        return (window.requestAnimationFrame       ||
	        window.webkitRequestAnimationFrame ||
	        window.mozRequestAnimationFrame    ||
	        function (callback, element, delay) {
	            window.setTimeout(callback, delay || (1000/60));
	        });
	    })();

	    var MutationObserver = (window.MutationObserver ||
	    window.WebKitMutationObserver ||
	    window.MozMutationObserver);

	    var getScrollRoot = (function() {
	        var SCROLL_ROOT;
	        return function() {
	            if (!SCROLL_ROOT) {
	                var dummy = document.createElement('div');
	                dummy.style.cssText = 'height:10000px;width:1px;';
	                document.body.appendChild(dummy);
	                var bodyScrollTop  = document.body.scrollTop;
	                var docElScrollTop = document.documentElement.scrollTop;
	                window.scrollBy(0, 1);
	                if (document.body.scrollTop != bodyScrollTop)
	                    (SCROLL_ROOT = document.body);
	                else
	                    (SCROLL_ROOT = document.documentElement);
	                window.scrollBy(0, -1);
	                document.body.removeChild(dummy);
	            }
	            return SCROLL_ROOT;
	        };
	    })();


	    /***********************************************
	     * PULSE (by Michael Herf)
	     ***********************************************/

	    /**
	     * Viscous fluid with a pulse for part and decay for the rest.
	     * - Applies a fixed force over an interval (a damped acceleration), and
	     * - Lets the exponential bleed away the velocity over a longer interval
	     * - Michael Herf, http://stereopsis.com/stopping/
	     */
	    function pulse_(x) {
	        var val, start, expx;
	        // test
	        x = x * options.pulseScale;
	        if (x < 1) { // acceleartion
	            val = x - (1 - Math.exp(-x));
	        } else {     // tail
	            // the previous animation ended here:
	            start = Math.exp(-1);
	            // simple viscous drag
	            x -= 1;
	            expx = 1 - Math.exp(-x);
	            val = start + (expx * (1 - start));
	        }
	        return val * options.pulseNormalize;
	    }

	    function pulse(x) {
	        if (x >= 1) return 1;
	        if (x <= 0) return 0;

	        if (options.pulseNormalize == 1) {
	            options.pulseNormalize /= pulse_(1);
	        }
	        return pulse_(x);
	    }

	    var wheelEvent;
	    if ('onwheel' in document.createElement('div'))
	        wheelEvent = 'wheel';
	    else if ('onmousewheel' in document.createElement('div'))
	        wheelEvent = 'mousewheel';

	    if (wheelEvent) {
	        addEvent(wheelEvent, wheel);
	        addEvent('mousedown', mousedown);
	        addEvent('load', init);
	    }

	})();

/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * Created by Raymund on 3/29/2016.
	 */

	jQuery("#notify").on("click",function(){
	    if( !isValidEmailAddress( jQuery("#email-notify").val() ) ) {
	        return false;
	    }
	    return true;
	})
	function isValidEmailAddress(emailAddress) {
	    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
	    return pattern.test(emailAddress);
	};

	// 2. This code loads the IFrame Player API code asynchronously.
	var tag = document.createElement('script');

	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	// 3. This function creates an <iframe> (and YouTube player)
	//    after the API code downloads.
	var player;

	function onYouTubeIframeAPIReady() {
	    player = new YT.Player('player', {
	        height: '390',
	        width: '640',
	        controls:0,
	        videoId: 'dQw4w9WgXcQ',
	        playerVars : {
	            'controls': 0,
	            'rel' : 0,
	            'showinfo':0
	        },
	        events: {
	            'onReady': onPlayerReady,
	            'onStateChange': onPlayerStateChange
	        }
	    });
	}

	// 4. The API will call this function when the video player is ready.
	function onPlayerReady(event) {
	    jQuery('#myModal').on('shown.bs.modal', function (e) {
	        event.target.playVideo();
	    })

	    jQuery('#myModal').on('hidden.bs.modal', function (e) {
	        player.stopVideo();
	    })
	}

	// 5. The API calls this function when the player's state changes.
	//    The function indicates that when playing a video (state=1),
	//    the player should play for six seconds and then stop.
	var done = false;
	function onPlayerStateChange(event) {
	    if (event.data == YT.PlayerState.PLAYING && !done) {
	        //setTimeout(stopVideo, 6000);
	        done = true;
	    }
	}
	function stopVideo() {
	    player.stopVideo();
	}


	jQuery(document).ready(function($){
	    var _throttleTimer = null;
	    var _throttleDelay = 100;
	    var _addClassTimeout = null;
	    var $window = $(window);
	    var $document = $(document);
	    var isMobile = false;

	    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
	        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;


	    if(isMobile){
	        $("#banner").height('auto');
	        $("header#masthead").css({'background-color':'#34495e'});
	        $(".loop-container").css({
	            'width':'75%',
	            'height':'90px',
	            'border-bottom':'1px solid white'
	        });
	        $(".loop-container hr").css({'width':'100%'});
	    }
	    var imageUrl = $('[rvy-parallax-img]').attr('src')

	    $('[rvy-parallax-img]').attr('src',imageUrl).load(function() {
	        if(isMobile){
	            $(this).remove(); // prevent memory leaks
	            $('#banner').css('background-image', 'url('+imageUrl+')');
	        }
	        

	        if(!isMobile){
	            setTimeout(function(){
	                $(".loop-container").addClass('active');
	            },1000);
	            setTimeout(function(){
	                $('.loop-container').addClass('active-height').addClass('add-border-bottom');
	            },1800);
	        }

	        setTimeout(function(){
	            var el = $('.loop-container p'),
	                i = 0;
	            $(el[0]).show();
	            (function loopP(){
	                el.delay(2000).fadeOut(300).eq(++i%el.length).fadeIn(500, loopP);
	            }());
	        },2000);

	    });

	    //mouse scrolled
	    if(!isMobile){
	        $window
	            .off('scroll', ScrollHandler)
	            .on('scroll', ScrollHandler);

	        if($window.scrollTop() >= 50 ){
	            if(!$("header#masthead").hasClass('scrolled')){
	                $("header#masthead").addClass('onscroll');
	            }

	            _addClassTimeout  = setTimeout(function(){
	                $("header#masthead").removeClass('onscroll');
	                $("header#masthead").addClass('scrolled');
	            },200);
	        }
	    }
	    


	        function ScrollHandler(e) {

	            clearTimeout(_throttleTimer);
	            _throttleTimer = setTimeout(function () {
	                if($window.scrollTop() >= 50 ){

	                    if(!$("header#masthead").hasClass('scrolled')){
	                        $("header#masthead").addClass('onscroll');
	                    }

	                    _addClassTimeout = setTimeout(function(){
	                      $("header#masthead").removeClass('onscroll');
	                      $("header#masthead").addClass('scrolled');
	                    },200);
	                }else {
	                    //clearTimeout(_addClassTimeout);
	                    $("header#masthead").removeClass('onscroll');
	                    $("header#masthead").removeClass('scrolled');
	                }
	                
	                //do work
	                if ($window.scrollTop() + $window.height() > $document.height() - 100) {
	                    //alert("near bottom!");
	                }

	            }, _throttleDelay);
	        }

	    smoothScroll.init({
	        speed: 3500,
	        easing: 'easeInOutQuint',
	        offset: 50,
	        updateURL: false
	    });

	    // Cache selectors
	    var lastId,
	        topMenu = $("#myNavbar ul"),
	        topMenuHeight = topMenu.outerHeight()+50,
	    // All list items
	        menuItems = topMenu.find("a"),
	    // Anchors corresponding to menu items
	        scrollItems = menuItems.map(function(){
	            var item = $($(this).attr("href"));
	            if (item.length) { return item; }
	        });

	if($(window).scrollTop() + $(window).height() == $(document).height()) {
	    menuItems
	            .parent().removeClass("active")
	            .end().filter("[href=#contact]").parent().addClass("active");
	}
	// Bind to scroll
	    $(window).scroll(function(){
	       
	        
	        if($(window).scrollTop() + $(window).height() == $(document).height()) {
	            menuItems
	                    .parent().removeClass("active")
	                    .end().filter("[href=#contact]").parent().addClass("active");
	        }
	        else {
	             // Get container scroll position
	            var fromTop = $(this).scrollTop()+topMenuHeight;

	            // Get id of current scroll item
	            var cur = scrollItems.map(function(){
	                
	                if ($(this).offset().top < fromTop)
	                    return this;
	            });
	            // Get the id of the current element
	            cur = cur[cur.length-1];
	            var id = cur && cur.length ? cur[0].id : "";

	            if (lastId !== id) {
	                lastId = id;
	                // Set/remove active class
	                menuItems
	                    .parent().removeClass("active")
	                    .end().filter("[href=#"+id+"]").parent().addClass("active");
	            }
	        }
	    });

	});



/***/ },
/* 5 */
/***/ function(module, exports) {

	jQuery(document).ready(function($){
	    var isMobile = false;
	    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
	        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;


	    if(!isMobile){
	    var raf = requestAnimationFrame || mozRequestAnimationFrame ||
	          webkitRequestAnimationFrame || msRequestAnimationFrame;
	        
	        function parallaxLogic(parallaxImage){
	            $(parallaxImage).css({
	                'height':$(parallaxImage).attr('rvy-parallax-img')+'%',
	                'position': 'absolute',
	                'width': 'auto'
	            })
	            var windowPoint = $(window).scrollTop();
	            var windowHeight = $(window).height();
	            var parentHeight = $(parallaxImage).parent().outerHeight();
	            var parentTop = $(parallaxImage).parent().get(0).getBoundingClientRect().top;
	            var percent = 0;
	            var parallax = 0;
	            var imageHeight = $(parallaxImage).outerHeight()
	            if(parentTop >= windowHeight){
	                percent = 0;
	            }
	            else if (parentTop <= -parentHeight) {
	                percent = 1;
	            }
	            else {
	                percent = (parentTop + parentHeight) / (windowHeight  + parentHeight)
	            }
	            parallax = (percent+($(parallaxImage).attr('rvy-parallax-offset')/100)) * (imageHeight - parentHeight) * -1;
	            $(parallaxImage).css({
	                    'transform': 'translate3d(0,'+parallax+'px,0)'
	            })
	        }
	    
	        function animateNow(){
	            raf(animateNow)
	             $('[rvy-parallax-img]').each(function(index,image){
	                parallaxLogic(image)
	                //console.log(index,image)
	            })
	        }
	        animateNow()
	        

	    }
	})

/***/ }
/******/ ]);
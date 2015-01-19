/*
* Notify!
*/


////////////////////////////////////////////////////
// Usage example:
//
// Notify receives a custom event: 'notify'
// Simply create and dispatch the event, as below
//////////////////////////////////////////////////
//
//  var event = new CustomEvent('notify', {
//	    'detail': {
//		    notify_level: 'alert',//this param in currently not in use
//		    notifyClass: 'alert',//this is the class name that will be added to the notify element (use it for styles or ref..)
//		    message: "ALERT!"//this is the string that will be printed inside the notification
//	    }
//  });
//  document.dispatchEvent(event);//simply dispatch the event and notify will handle it
//

/*
* SHIMS !!
*/
//@TODO these shims need to test if they are required before running


/* Request Animation Frame SHIM */
// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame       ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame    ||
		function( callback ){
			window.setTimeout(callback, 1000 / 60);
		};
})();

/* Deal with animation event prefixes */
var pfx = ["webkit", "moz", "MS", "o", ""];
function PrefixedEvent(element, type, callback) {
	for (var p = 0; p < pfx.length; p++) {
		if (!pfx[p]) type = type.toLowerCase();
		element.addEventListener(pfx[p]+type, callback, false);
	}
}

/* Custom Event IE 9 /10 SHIM */
(function () {
	function CustomEvent ( event, params ) {
		params = params || {
			bubbles: false,
			cancelable: false,
			detail: undefined
		};

		var evt = document.createEvent('CustomEvent');
		evt.initCustomEvent(event,
			params.bubbles,
			params.cancelable,
			params.detail
		);
		return evt;

	};

	CustomEvent.prototype = window.Event.prototype;

	window.CustomEvent = CustomEvent;

})();

/*
	//EOF SHIMS
*/

(function(){

	var defaults = {
		notify_level: "notify"
	};
	var vars = {
		container: null
	}
	var notifications = [];

	var methods = {
		//create the div and ul to hold the notifications
		createContainer: function(){

			var existingList = document.querySelector('.notifyList');

			if (existingList) {
				return existingList;
			}

			var wrap = document.createElement('div');

			//@TODO some older browsers don't like when elements are created like this
			wrap.innerHTML = '<ul class="notifyList"></ul>';
			document.querySelector('body').appendChild(wrap);
			return document.querySelector('.notifyList');
		},
		createNotification: function(details){

			var elm = document.createElement('li');
			var div = document.createElement('div');
			var wrapperDiv = document.createElement('div');

			div.innerHTML = details.message;
			div.classList.add('message');
			div.classList.add(details.notifyClass);

			wrapperDiv.classList.add('wrapper');
			wrapperDiv.classList.add(details.notifyClass + 'Wrapper');
			wrapperDiv.appendChild(div);

			elm.appendChild(wrapperDiv);

			document.querySelector('.notifyList').appendChild(elm);

			PrefixedEvent(elm, "AnimationEnd", function(e){

				window.setTimeout(function(){

					e.target.classList.add('done');

					PrefixedEvent(elm, "AnimationEnd", function(e){

						document.querySelector('.notifyList').removeChild(elm);

					});
				}, 2000);
			});

		},
		addNotification: function(details){
			if (!vars.container) {
				vars.container = this.createContainer();
			}
			this.createNotification(details.detail);
		}

	};
	var notify = function(details){
		methods.addNotification(details);
	}

	// Listen for the event.
	document.addEventListener('notify', function (e) {
		notify(e);
	}, false);

})();
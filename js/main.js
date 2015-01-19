/** Copyright Robin Buckley. 2014 **/
//Main.js
$(function(){
	var $cs = $('.styled').customSelect();
});

/*
    iCheck, iRadio
*/
$(function(){
    $('input.icheck').iCheck({
        checkboxClass: 'icheckbox_square-grey',
        radioClass: 'iradio_square-grey',
        increaseArea: '20%' // optional
    });
});

//On page / element load:
//...if the number of elements is dynamic

// the width of the 'scroller' should be:
// the width of the elements * the number of elements
$(function(){
    var example_2_li_widths = $('#example_2 > .scroller > ul > li').outerWidth();
    var example_2_num_elements = $('#example_2 > .scroller > ul > li').length;
    $('#example_2 > .scroller').width( example_2_li_widths * example_2_num_elements );



});

/*
    iScroll
*/
$(function(){
    example_2 = new IScroll('#example_2', {
        scrollX: true,//Set to only horiziontal scroll
        scrollY: false,//turn of vertical scroll
        snap: false,//'li',//'snap' scrolling to element widths (values: false | true or element tagName)
        mouseWheel: true,//Enable disable mouse wheel
        scrollbars: false,//show hide scrollbars
        bounce: true,//enable 'bouce' animation
        preventDefault: true,//prevent default scroll events from triggering 
    });
});

/*
    Fancy Select
*/
$(function(){
    $('.fancySelect').fancySelect();
});

/*
    On Off toggle
*/
$(function(){
	console.log($('.jquery-onoff'));
	$('.jquery-onoff').onoff();
});

/*
    Time Functions
*/
$(function(){
    var inTime = moment.utc().add(3, 'hours').add(22, 'minutes');
    var endTime = moment(inTime).fromNow();
    var localTime = moment(inTime._d).format("HH:mm");
    $('#time_example_1 .time-until').html(endTime);
    $('#time_example_1 .time-local').html(localTime);

    var tom = moment().add(1, 'days');
    var betTime = moment(tom).format('h:mm L');////.format('L');
    $('#time_example_2').html(betTime);

});


/*
    Notifications
*/
$(function(){
    var event = new CustomEvent('notify', {
        'detail': {
            notify_level: 'alert',//this param in currently not in use
            notifyClass: 'alert',//this is the class name that will be added to the notify element (use it for styles or ref..)
            message: "ALERT!"//this is the string that will be printed inside the notification
        }
    });

    var notificationEventArray = [
        new CustomEvent('notify', {
            'detail': {
                notify_level: 'alert',//this param in currently not in use
                notifyClass: 'alert',//this is the class name that will be added to the notify element (use it for styles or ref..)
                message: "ALERT!"//this is the string that will be printed inside the notification
            }
        }),
        new CustomEvent('notify', {
        'detail': {
                notify_level: 'notify',//this param in currently not in use
                notifyClass: 'notify',//this is the class name that will be added to the notify element (use it for styles or ref..)
                message: "notify"//this is the string that will be printed inside the notification
            }
        }),
        new CustomEvent('notify', {
            'detail': {
                notify_level: 'warn',//this param in currently not in use
                notifyClass: 'warn',//this is the class name that will be added to the notify element (use it for styles or ref..)
                message: "Warning"//this is the string that will be printed inside the notification
            }
        })
    ];

    var notificationIndex = 0;

    document.dispatchEvent(notificationEventArray[0]);//simply dispatch the event and notify will handle it

    window.setInterval(function(){
        if (notificationIndex < 3) {
            notificationIndex++
            document.dispatchEvent(notificationEventArray[notificationIndex]);
        } else { 
            notificationIndex = 0;
            document.dispatchEvent(notificationEventArray[notificationIndex]);
            document.dispatchEvent(notificationEventArray[notificationIndex+1]);
        }

    }, 10000);

    $('.notifyTrigger').on('click', function(){
        var event = new CustomEvent('notify', {
            'detail': {
                notify_level: 'notify',//this param in currently not in use
                notifyClass: 'notify',//this is the class name that will be added to the notify element (use it for styles or ref..)
                message: "Notification From Button Click"//this is the string that will be printed inside the notification
            }
        });
        document.dispatchEvent(event);
    });

});

/* Modal */
$(function(){
    $('.modalTrigger').on('click', function(e){
        var spinner = new Spinner().spin();
        $('.modal').append(spinner.el);

        $('.modal').addClass('open').on('click', function(){
            $(spinner.el, this).remove();
            $(this).removeClass('open');
        });
    });
});

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
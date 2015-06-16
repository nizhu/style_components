/** Copyright Robin Buckley. 2014 **/
//Main.js
$(function(){
	var $cs = $('.styled').customSelect();
});

/* iCheck, iRadio */
$(function(){
    $('input.icheck').iCheck({
        checkboxClass: 'icheckbox_flat',
        radioClass: 'iradio_flat',
        increaseArea: '20%' // optional
    });
});

/* Input Stake */
$(function(){
	$('#stakeInput1').blur(function() {
		var stake = $('#stakeInput1').val();
		stake = parseFloat(stake) ? parseFloat(stake).toFixed(2) : 0;
		$('#stakeInput1').val(stake);
	})
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
        preventDefault: true//prevent default scroll events from triggering
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
    var notificationEventArray = [
        new CustomEvent('notify', {
            'detail': {
                notify_level: 'alert',//this param in currently not in use
                notifyClass: 'alert',//this is the class name that will be added to the notify element (use it for styles or ref..)
                message: "Alert!"//this is the string that will be printed inside the notification
            }
        }),
        new CustomEvent('notify', {
        'detail': {
                notify_level: 'notify',//this param in currently not in use
                notifyClass: 'notify',//this is the class name that will be added to the notify element (use it for styles or ref..)
                message: "Notify"//this is the string that will be printed inside the notification
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
    window.setInterval(function(){
        if (notificationIndex < 2) {
            notificationIndex++
            document.dispatchEvent(notificationEventArray[notificationIndex]);
        } else {
            notificationIndex = 0;
            document.dispatchEvent(notificationEventArray[notificationIndex]);
        }
    }, 2000);

	sampleIndex = 0;
    $('.notifyTrigger').on('click', function(){
        var event = sampleNotification[sampleIndex];
        document.dispatchEvent(event);
		sampleIndex++;
		sampleIndex = (sampleIndex >= 3) ? 0 : sampleIndex;
    });

	var sampleNotification = [
		new CustomEvent('notify', {
			'detail': {
				notify_level: 'notify',//this param in currently not in use
				notifyClass: 'notify',//this is the class name that will be added to the notify element (use it for styles or ref..)
				message: "<h3><span>&#x2713;</span> Account Verified</h3><p>Notification From Button Click.<br/>More information on IDV can be found below</p>"//this is the string that will be printed inside the notification
			}
		}),
		new CustomEvent('notify', {
			'detail': {
				notify_level: 'alert',
				notifyClass: 'alert',
				message: "<h3><span>&#x274c;</span> Account Unverified</h3><p>Alert user for an event.<br/>More information on IDV can be found below</p>"
			}
		}),
		new CustomEvent('notify', {
			'detail': {
				notify_level: 'warn',
				notifyClass: 'warn',
				message: "<h3>Warning</h3><p>This is only a drill, please remain calm.<br/>More information on IDV can be found below</p>"
			}
		})
	];
});

/* Modal */
$(function(){
    $('.modalTrigger').on('click', function(e){
        var spinner = new Spinner().spin();
        $('.modal').append(spinner.el);
		$('.modalParagraph').css('-webkit-filter', 'blur(3px)');

        $('.modal').addClass('open').on('click', function(){
            $(spinner.el, this).remove();
            $(this).removeClass('open');
			$('.modalParagraph').css('-webkit-filter', '');
        });
    });
});

/* Lefthand Navigation */
$(function(){
	$('.sitenav .mainNav').on('click' , function(e) {
		$('.sitenav .mainNav a').removeClass('active');
		$(e.target).addClass('active');
	})
});

/* Ticket */
$(function(){
	$('.ticketBodyExample .calc button').on('click' , function(e) {
		var stake = $('.ticketBodyExample #ember6594').val() ? parseFloat($('.ticketBodyExample #ember6594').val()) : 0;
		var adder = parseFloat(e.target.id)/100;
		if (adder) {
			$('.ticketBodyExample #ember6594').val(stake+adder);
		} else {
			$('.ticketBodyExample #ember6594').val(0);
		}
	})

	$('.ticketBodyExample .buttonClear').on('click' , function(e) {
		$('.ticketBodyExample #ember6594').val(0);
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
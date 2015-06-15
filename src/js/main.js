//Main.js
$(function(){
	var $cs = $('.styled').customSelect();
});

/*
    iCheck, iRadio
*/
$(function(){
    $('input.icheck').iCheck({
        checkboxClass: 'icheckbox_flat',
        radioClass: 'iradio_flat',
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
				message: "<h3><span>&#x274c;</span> Account Unverified <button class='alternative small'>Verify Now</button></h3><br/><p>More information on IDV can be found below</p>"
			}
		}),
		new CustomEvent('notify', {
			'detail': {
				notify_level: 'warn',
				notifyClass: 'warn',
				message: "<h3>Warning</h3><p>This is only a drill, please remain calm</p>"
			}
		})
	];
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
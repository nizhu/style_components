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
                message: "<h3><span>&#x2713;</span> Account Verified</h3><p>Notification From Button Click.<br/>More information on IDV can be found below</p>"//this is the string that will be printed inside the notification
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

//Main.js
$(function(){
	var $cs = $('.styled').customSelect();
});

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
    /*
    var example_1_li_widths = $('#example_1 > .scroller > ul > li').outerWidth();
    var example_1_num_elements = $('#example_1 > .scroller > ul > li').length;
    $('#example_1 > .scroller').width( example_1_li_widths * example_1_num_elements );
*/
    var example_2_li_widths = $('#example_2 > .scroller > ul > li').outerWidth();
    var example_2_num_elements = $('#example_2 > .scroller > ul > li').length;
    $('#example_2 > .scroller').width( example_2_li_widths * example_2_num_elements );



});

//
// create the scroller
$(function(){
    /*
    example_1 = new IScroll('#example_1', {
        scrollX: true,//Set to only horiziontal scroll
        scrollY: false,//turn of vertical scroll
        snap: false,//'li',//'snap' scrolling to element widths (values: false | true or element tagName)
        mouseWheel: true,//Enable disable mouse wheel
        scrollbars: false,//show hide scrollbars
        bounce: true,//enable 'bouce' animation
        preventDefault: true,//prevent default scroll events from triggering 
    });
*/
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

//Fancy Select
$(function(){
    $('.fancySelect').fancySelect();
});



$(function(){
	/*
	var elem = document.querySelector('.js-switch');
	var init = new Switchery(elem);
	*/
	console.log($('.jquery-onoff'));
	$('.jquery-onoff').onoff();
});



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
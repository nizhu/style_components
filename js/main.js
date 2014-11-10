/** Copyright Robin Buckley. 2014 **/
//Main.js
$(function(){
	var $cs = $('.styled').customSelect();
});

$(function(){
    $('input').iCheck({
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
    
    var example_1_li_widths = $('#example_1 > .scroller > ul > li').outerWidth();
    var example_1_num_elements = $('#example_1 > .scroller > ul > li').length;
    $('#example_1 > .scroller').width( example_1_li_widths * example_1_num_elements );

});

//
// create the scroller
$(function(){
    example_1 = new IScroll('#example_1', {
        scrollX: true,//Set to only horiziontal scroll
        scrollY: false,//turn of vertical scroll
        snap: false,//'li',//'snap' scrolling to element widths (values: false | true or element tagName)
        mouseWheel: true,//Enable disable mouse wheel
        scrollbars: false,//show hide scrollbars
        bounce: true,//enable 'bouce' animation
        preventDefault: true,//prevent default scroll events from triggering 
        
    });
});
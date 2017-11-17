function FIX_THIS_S___(){
    var contentHeight=$("nav").outerHeight()+$("section").outerHeight();
    if(contentHeight<window.innerHeight){
	var footerY=window.innerHeight-$("footer").outerHeight()
	$("footer").offset({top:footerY});
    }
}
$(window).on("resize", FIX_THIS_S___);
$("footer").ready(FIX_THIS_S___);

function fixFooter(){
    var contentHeight=$("nav").outerHeight()+$("section").outerHeight();
    if(contentHeight<window.innerHeight){
	var footerY=window.innerHeight-$("footer").outerHeight()
	$("footer").offset({top:footerY});
    }
}
$(window).on("resize", fixFooter);
$("footer").ready(fixFooter);

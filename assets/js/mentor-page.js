function findInfo(name, mentors){
  for(var j = 0; j<mentors.length; j++){
    if(mentors[j].fullName.toUpperCase() === name){
      return mentors[j];
    }
  }
}

function setContentTo(mentor){
    $('#picture').empty();
    $('#picture').append(`<img src="${mentor.pictureToRepresentYou}">`)
    $('.slidee').empty();
    $('.slidee').append(`
      <p class="subsection-header">What Are Your Goals Being a Mentor?</p>
      <p>${mentor.whatAreYourGoalsBeingAMentor}</p>
      <br>
      <p class="subsection-header">What are your tech Interests?</p>
      <p>${mentor.whatWouldYouLikeToFocusOnWithYourMentees}</p>
      <br>
      <p class="subsection-header">What have you worked on in the past?</p>
      <p>${mentor.whatHaveYouWorkedOnInThePastcurrently}</p>
      <br>
      <p class="subsection-header">What are some of your interests outside of tech?</p>
      <p>${mentor.whatAreSomeOfYourInterestsOutsideOfTech}</p>
      `);

}

$(function(){

  $.get('http://usacs.rutgers.edu/assets/mentors.json', function (mentors) {
    setContentTo(mentors[0]);

    for(var i = 0; i < mentors.length; i++){
      $(".clearfix").append(`<li>${mentors[i].fullName.toUpperCase()}</li>`);
    }

    $("li").click(function() {
      setContentTo(findInfo($(this).text(), mentors));
    });

    (function () {
      var $frame  = $('#basic');
      var $slidee = $frame.children('ul').eq(0);
      var $wrap   = $frame.parent();

      // Call Sly on frame
      $frame.sly({
        horizontal: 1,
        itemNav: 'basic',
        smart: 1,
        activateOn: 'click',
        mouseDragging: 1,
        touchDragging: 1,
        releaseSwing: 1,
        startAt: 0,
        scrollBar: $wrap.find('.scrollbarL'),
        scrollBy: 1,
        speed: 300,
        elasticBounds: 1,
        easing: 'easeOutExpo',
        dragHandle: 1,
        dynamicHandle: 1,
        clickBar: 1
      });

    }());

  });

});

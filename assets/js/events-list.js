$(function() {
    /**
     * Fills the parameter wrapper with calendar events from the start of the
     * week to (start of the week) + (days) days
     * @param  {integer} days    The number of days to get the events for as an
     * offset from the start of the week
     * @param  {element selector} wrapper A CSS selector (for example, '.events')
     */
    var getEvents = function(days, wrapper) {
        if ($(wrapper).length === 0) return;

        var start = moment().startOf('isoweek');
        var end = moment(start).add(days, 'days');
        var startDate = start.utc().format();
        var endDate = end.utc().format();

        $.ajax({
            url: 'https://www.googleapis.com/calendar/v3/calendars/rutgersusacs%40gmail.com/events',
            dataType: 'json',
            data: {
                'singleEvents': true,
                'orderBy': 'startTime',
                'timeMax': endDate,
                'timeMin': startDate,
                'key': 'AIzaSyDYNLmUM-EXwuHokTW50UqsP6q_NHxI6ZM'
            },
        })
        .done(function(data) {
            console.log(data.items);
            var event;
            var mEventStart, mEventEnd;
            var events = $(wrapper);
            for (var i = 0; i < data.items.length; i++) {
                event = data.items[i];
                mEventStart = moment(event.start.dateTime);
                mEventEnd = moment(event.end.dateTime);

                event.location = event.location || "TBD";
                event.description = event.description || "Ask us for details! <a href=\"/contacts.html\">Contact us!</a>";

                events.append('<div class="event-wrapper"><div class="event"><div class="event-date"><span class="day">' + mEventStart.format('D') + '</span><span class="month">' + mEventStart.format('MMM') + '</span></div><div class="event-description"><span class="title">' + event.summary + ' | ' + event.location + ' | ' + mEventStart.format('h[:]mm A') + '-' + mEventEnd.format('h[:]mm A') + '</span><span class="description">' + event.description + '</span></div></div></div>');
            }
        });
    };

    getEvents(6, '.events-upcoming');
    getEvents(14, '.events-full');
});

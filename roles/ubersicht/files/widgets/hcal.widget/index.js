command: "echo Hello World!",
// command: 'date -v1d +"%e"; date -v1d -v+1m -v-1d +"%d"; date +"%d%n%m%n%Y"',

dayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
offdayIndices: [6, 0], // Fr, Sa
 
refreshFrequency: 5000,
displayedDate: null,

render: function () {
  return "<div class=\"cal-container\">\
  <div class=\"title\"></div>\
  <table>\
  <tr class=\"weekday\"></tr>\
  <tr class=\"midline\"></tr>\
  <tr class=\"date\"></tr>\
  </table>\
  </div>";
},
 
style: "                              \n\
  bottom: 20px                        \n\
  left: 20px                          \n\
  right: 20px                          \n\
  font-family: Helvetica Neue         \n\
  font-size: 18px                     \n\
  font-weight: 500                    \n\
  color: #fff                         \n\
                                      \n\
  .cal-container                      \n\
    border-radius: 10px               \n\
    background: rgba(#000, 0.3)       \n\
    padding: 10px                     \n\
                                      \n\
  .title                              \n\
    color: rgba(#fff, .3)             \n\
    font-size: 18px                   \n\
    font-weight: 500                  \n\
    padding-bottom: 5px               \n\
    text-transform uppercase          \n\
                                      \n\
  table                               \n\
    border-collapse: collapse         \n\
    width: 100%         \n\
                                      \n\
  td                                  \n\
    padding-left: 4px                 \n\
    padding-right: 4px                \n\
    text-align: center                \n\
                                      \n\
  .weekday td                         \n\
    padding-top: 3px                  \n\
                                      \n\
  .date td                            \n\
    padding-bottom: 3px               \n\
                                      \n\
  .today, .off-today                  \n\
    background: rgba(#fff, 0.2)       \n\
                                      \n\
  .weekday .today,                    \n\
  .weekday .off-today                 \n\
    border-radius: 3px 3px 0 0        \n\
                                      \n\
  .date .today,                       \n\
  .date .off-today                    \n\
    border-radius: 0 0 3px 3px        \n\
                                      \n\
  .midline                            \n\
    height: 3px                       \n\
    background: rgba(#fff, .5)        \n\
                                      \n\
  .midline .today                     \n\
    background: rgba(#0bf, .8)        \n\
                                      \n\
  .midline .offday                    \n\
    background: rgba(#f77, .5)        \n\
                                      \n\
  .midline .off-today                 \n\
    background: rgba(#fc3, .8)        \n\
                                      \n\
  .offday, .off-today                 \n\
    color: rgba(#f77, 1)              \n\
",

update: function (output, domEl) {
  // var date = output.split("\n"), firstWeekDay = date[0], lastDate = date[1], today = date[2], m = date[3]-1, y = date[4];
  
  // // DON'T MANUPULATE DOM IF NOT NEEDED
  // if(this.displayedDate != null && this.displayedDate == output) return;
  // else this.displayedDate = output;

  var date = new Date(), y = date.getFullYear(), m = date.getMonth(), today = date.getDate();
  
  // DON'T MANUPULATE DOM IF NOT NEEDED
  var newDate = [today, m, y].join("/");
  if(this.displayedDate != null && this.displayedDate == newDate) return;
  else this.displayedDate = newDate;

  var firstWeekDay = new Date(y, m, 1).getDay();
  var lastDate = new Date(y, m + 1, 0).getDate();
  
  var weekdays = "", midlines = "", dates = "";

  for (var i = 1, w = firstWeekDay; i <= lastDate; i++, w++) {
    w %= 7;
    var isToday = (i == today), isOffday = (this.offdayIndices.indexOf(w) != -1);
    var className = "ordinary";
    if(isToday && isOffday) className = "off-today";
    else if(isToday) className = "today";
    else if(isOffday) className = "offday";

    weekdays += "<td class=\""+className+"\">" + this.dayNames[w] + "</td>";
    midlines += "<td class=\""+className+"\"></td>";
    dates += "<td class=\""+className+"\">" + i + "</td>";
  };

  $(domEl).find(".title").html(this.monthNames[m]+" "+y);
  $(domEl).find(".weekday").html(weekdays);
  $(domEl).find(".midline").html(midlines);
  $(domEl).find(".date").html(dates);
}
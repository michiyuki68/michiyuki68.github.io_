$(function() {
//  $.getJSON("data.json" , function(data) {
  $.getJSON("01.json" , function(data) {
    var
      ulObj = $("#demo"),
      appObj= $("<p>"),
      len = data.length;

//    for(var i = 0; i < len; i++) {

    for(var i = 0; i < 1; i++) {
        ulObj.append($("<p>").attr("class", "articleCategory").text(data[i].category));
        ulObj.append($("<p>").attr("class", "headline").text(data[i].HeadLine));
//        ulObj.append($("<p>").attr("class", "firstArticle overflow").text(data[i].FirstBody));
        ulObj.append($("<p>").attr("class", "firstArticle overflow").text(data[i].FirstBody));
        ulObj.append($("<p>").attr("class", "mainArticle overflow").text(data[i].BodyText));
    }
  });
});

$(function() {
  $.getJSON("data.json" , function(data) {
    var
      ulObj = $("#demo"),
      appObj= ulObj.append($("<p>"),
      len = data.length;

//    for(var i = 0; i < len; i++) {

    for(var i = 0; i < 1; i++) {
        appObj.attr("class", "articleCategory").text(data[i].category));
        appObj.attr("class", "headline").text(data[i].HeadLine));
//        ulObj.append($("<p>").attr("class", "firstArticle overflow").text(data[i].FirstBody));
        appObj.attr("class", "firstArticle").text(data[i].FirstBody));
    }
  });
});

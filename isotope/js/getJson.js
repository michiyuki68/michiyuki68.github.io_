$(function() {
  $.getJSON("data.json" , function(data) {
    var
      ulObj = $("#demo"),
      len = data.length;

//    for(var i = 0; i < len; i++) {

    for(var i = 0; i < 1; i++) {
//      ulObj.append($("<p>").attr({"id":data[i].seqNo}).text(data[i].name));
//      ulObj.append($("<p>").attr({"id":data[i].seqNo}, "headline").text(data[i].HeadLine));
        ulObj.append($("<p>").attr("class", "articleCategory").text(data[i].category));
        ulObj.append($("<p>").attr("class", "headline").text(data[i].HeadLine));
//        ulObj.append($("<p>").attr("class", "firstArticle overflow").text(data[i].FirstBody));
        ulObj.append($("<p>").attr("class", "firstArticle").text(data[i].FirstBody));
    }
  });
});

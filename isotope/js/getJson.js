$(function() {
  $.getJSON("data.json" , function(data) {
    var
      ulObj = $("#demo"),
      len = data.length;

    for(var i = 0; i < len; i++) {
//      ulObj.append($("<p>").attr({"id":data[i].seqNo}).text(data[i].name));
//      ulObj.append($("<p>").attr({"id":data[i].seqNo}, "headline").text(data[i].HeadLine));
        ulObj.append($("<p>").attr("class", "headline").text(data[i].HeadLine));
        ulObj.append($("<p>").attr({"id":data[i].seqNo}, "firstArticle overflow").text(data[i].FirstBody));
    }
  });
});

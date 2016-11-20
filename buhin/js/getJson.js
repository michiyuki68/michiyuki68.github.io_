$(function() {
  $.getJSON("../../20161115/data.json" , function(data) {
    var
      ulObj = $("#headlines"),
      len = data.length;

//    for(var i = 0; i < len; i++) {
      ulObj.append($("<p>").attr({"id":data[i].seqNo}).text(data[i].HeadLine));
//    }

//$('<h2 class="title title--preview">' + ulObj.append($("<p>").attr({"id":data[i].seqNo}).text(data[i].HeadLine)) + '</p></h2>';


  });
});
45tr
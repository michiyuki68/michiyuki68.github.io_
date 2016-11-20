$(function() {
  $.getJSON("data.json" , function(data) {
    var
      ulObj = $("#headlines"),
      len = data.length;

//    for(var i = 0; i < len; i++) {
    for(var i = 0; i < 1; i++) {
//      ulObj.append($("<p>").attr({"id":data[i].seqNo}).text(data[i].HeadLine));
$('<h2 class="title title--preview">' + ulObj.append($("<p>").attr({"id":data[i].seqNo}).text(data[i].HeadLine)) + '</p></h2>');
//	$('<div class="loader"></div>');
//	$('<span class="category">' + ulObj.append($("<p>").attr({"id":data[i].seqNo}).text(data[i].category)) + '</span>');
//	$('<div class="meta meta--preview">');
//		$('<img class="meta__avatar" src=' + ulObj.append($("<p>").attr({"id":data[i].seqNo}).text(data[i].img)) + ' alt="author02" />');
//		$('<span class="meta__date"><i class="fa fa-calendar-o"></i>' + ulObj.append($("<p>").attr({"id":data[i].seqNo}).text(data[i].date)) + '</span>');
//		$('<span class="meta__reading-time"><i class="fa fa-clock-o"></i>' + ulObj.append($("<p>").attr({"id":data[i].seqNo}).text(data[i].kijiLength)) + '</span>');
//	$('</div>');
	$('<div class="loader"></div>' + '<span class="category">' + ulObj.append($("<p>").attr({"id":data[i].seqNo}).text(data[i].category)) + '</span>' + '<div class="meta meta--preview">'+ '<img class="meta__avatar" src=' + ulObj.append($("<p>").attr({"id":data[i].seqNo}).text(data[i].img)) + ' alt="author02" />' + '<span class="meta__date"><i class="fa fa-calendar-o"></i>' + ulObj.append($("<p>").attr({"id":data[i].seqNo}).text(data[i].date)) + '</span>' + '<span class="meta__reading-time"><i class="fa fa-clock-o"></i>' + ulObj.append($("<p>").attr({"id":data[i].seqNo}).text(data[i].kijiLength)) + '</span>' + '</div>');


    }

//$('<h2 class="title title--preview">' + ulObj.append($("<p>").attr({"id":data[i].seqNo}).text(data[i].HeadLine)) + '</p></h2>';


  });
});

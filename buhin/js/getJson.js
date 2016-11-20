$(function() {
  $.getJSON("../../20161115/data.json" , function(data) {
    var
      ulObj = $("#headlines"),
      len = data.length;

//    for(var i = 0; i < len; i++) {
      ulObj.append($("<p>").attr({"id":data[i].seqNo}).text(data[i].HeadLine));
//    }

	<h2 class="title title--preview"><p id="headlines"></p></h2>
	<div class="loader"></div>
	<span class="category">ˆê–Ê</span>
	<div class="meta meta--preview">
	<img class="meta__avatar" src="../buhin/img/authors/2.jpg" alt="author02" /> 
	<span class="meta__date"><i class="fa fa-calendar-o"></i> 7 Apr</span>
	<span class="meta__reading-time"><i class="fa fa-clock-o"></i> •¶š”‚ğƒJƒEƒ“ƒg‚·‚é‚È‚Ç</span>
	</div>


  });
});

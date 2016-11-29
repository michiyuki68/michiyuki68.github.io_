$(function() {
  $.getJSON("data.json" , function(data) {
    var
      ulObj = $("#headlines"),
      len = data.length;

//    for(var i = 0; i < len; i++) {
    for(var i = 0; i < 1; i++) {

	$('<a class="grid__item transition" href="#" data-category="transition"><h2 class="title title--preview">' + data[i].HeadLine + '</h2><div class="loader"></div><span class="category">ˆê–Ê</span><div class="meta meta--preview"><span class="meta__date"><i class="fa fa-calendar-o"></i> 7 Apr</span><span class="meta__reading-time"><i class="fa fa-clock-o"></i> •¶š”‚ğƒJƒEƒ“ƒg‚·‚é‚È‚Ç</span></div></div></a>');



    }

  });
});

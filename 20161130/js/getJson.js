$(function() {
  $.getJSON("data.json" , function(data) {
    var
      ulObj = $("#michiyuki"),
      len = data.length;

    for(var i = 0; i < len; i++) {
//      ulObj.append($("<p>").attr({"id":data[i].seqNo}).text(data[i].name));
      ulObj.append($("<p>" + data[i].HeadLine + "</p>"));

//ulObj.after($('<a class="grid__item transition" href="#" data-category="transition"><h2 class="title title--preview">' + data[i].HeadLine + '</h2><div class="loader"></div><span class="category">' + data[i].category + '</span><div class="meta meta--preview"><img class="meta__avatar" src="img/authors/1.png" alt="author01"/><span class="meta__date"><i class="fa fa-calendar-o"></i> 9 Apr</span><span class="meta__reading-time"><i class="fa fa-clock-o"></i> 3 min read</span></div></a>'));

    }
  );
}});

$(function() {
  $.getJSON("data.json" , function(data) {
    var
      ulObj1 = $("#HeadLines"),
      ulObj2 = $("#Bodies"),
      len = data.length;

    for(var i = 0; i < len; i++) {
//      ulObj.append($("<p>").attr({"id":data[i].seqNo}).text(data[i].name));
//      ulObj.append($("<p>" + data[i].HeadLine + "</p>"));

        ulObj1.append($('<a class="grid__item transition" href="#" data-category="' + data[i].category + '"><h2 class="title title--preview">' + data[i].HeadLine + '</h2><div class="loader"></div><span class="category">' + data[i].category + '</span><div class="meta meta--preview"><img class="meta__avatar" src="img/authors/1.png" alt="author01"/><span class="meta__date"><i class="fa fa-calendar-o"></i>' + document.lastModified + '</span><span class="meta__reading-time"><i class="fa fa-clock-o"></i> 3 min read</span></div></a>')).trigger('create');

        ulObj2.append($('<article class="content__item"><span class="category category--full">Stories for humans</span><h2 class="title title--full">' + data[i].HeadLine + '</h2><div class="meta meta--full"><img alt="author01" class="meta__avatar" src="img/authors/1.png"><span class="meta__author">Matthew Walters</span><span class="meta__date"><i class="fa fa-calendar-o"></i> 9 Apr</span><span class="meta__reading-time"><i class="fa fa-clock-o"></i> 3 min read</span></div><p>' + data[i].FirstBody + '</p><p>' + data[i].BodyText + '<p>ここまで</p></article>')).trigger('create');

    }
  });
});

$(function() {
  $.getJSON("data.json" , function(data) {
    var
      ulObj = $("#demo"),
      len = data.length;

    for(var i = 0; i < 1; i++) {
//      ulObj.append($("<p>").attr({"id":data[i].seqNo}).text(data[i].name));
//      ulObj.append($("<p>" + data[i].HeadLine + "</p>")); //ok
//      ulObj.append($("<a>" + data[i].HeadLine + "</a>")); //ok
//ulObj.append("""<a class=""grid__item transition"" href=""#"" data-category=""transition""><h2 class=""title title--preview"">‡@On Humans &amp; other Beings</h2><div class=""loader""></div><span class=""category"">Stories for humans</span><div class=""meta meta--preview""><img class=""meta__avatar"" src=""img/authors/1.png"" alt=""author01"" /> <span class=""meta__date""><i class=""fa fa-calendar-o""></i> 9 Apr</span><span class=""meta__reading-time""><i class=""fa fa-clock-o""></i> 3 min read</span></div></a>""");
ulObj.append('<a class="grid__item transition" href="#" data-category="transition"><h2 class="title title--preview">‡@On Humans &amp; other Beings</h2></a>');
    }
    }
  });
});

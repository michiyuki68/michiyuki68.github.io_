$(function() {
  $.getJSON("data.json" , function(data) {
    var
      ulObj = $("#demo"),
      appObj= ulObj.append($("<div>"),
      len = data.length;

    for(var i = 0; i < len; i++) {

ulObj.wrap("""<div class=""element-item transition metal click"" data-category=""transition"" />""").text("""<p class=""articleSubCategory"">data[i].category</p><p class=""headline"">data[i].HeadLine</p><p class=""firstArticle overflow"">data[i].FirstBody</p>""");

    }
  });
});

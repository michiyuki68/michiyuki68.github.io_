$(function() {
  $.getJSON("data.json" , function(data) {
    var
      ulObj = $("#demo"),
      appObj= ulObj.append($("<p>"),
      len = data.length;
var yousotext, divtext;

    for(var i = 0; i < len; i++) {
divtext = """<div class=""element-item transition metal click"" data-category=""transition"" />""";
yousotext = """<p class=""articleSubCategory"">data[i].category</p><p class=""headline"">data[i].HeadLine</p><p class=""firstArticle overflow"">data[i].FirstBody</p>""";


ulObj.wrap(divtext).text(yousotext);

    }
  });
});

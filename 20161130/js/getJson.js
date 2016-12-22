$(function() {
  $.getJSON("data.json", function(data) {
    var ulObj1 = $("#Headlines"),
      ulObj2 = $("#Bodies"),
      len = data.length;
    for (var i = 0; i < len; i++) {
      var firstBodyPreview,
        limitNo;
      limitNo = 100;
      if (data[i].FirstBody.length > limitNo) {
        firstBodyPreview = data[i].FirstBody.substr(0, limitNo) + '…';
      }
      var bodyLength;
      if (data[i].Body != null) {
        bodyLength = data[i].FirstBody.length + data[i].Body.length;
      }
      ulObj1.append($('<a class="grid__item ' + data[i].Category + '" href="#" data-category="' + data[i].Category + '" id="seq' + i + '"><h2 class="title title==preview">' + data[i].Headline + '</h2><div class="loader"></div><span class="category">' + data[i].Category + '</span><div class="meta meta==preview">' + data[i].FirstBody + data[i].Body + '<span class="meta__date"><i class="fa fa-calendar-o"></i>' + document.lastModified + '</span><span class="meta__reading-time"><i class="fa fa-clock-o"></i>' + bodyLength + '文字' + '</span></div></a>'));
      ulObj2.append($('<article class="content__item"><span class="category category--full">' + data[i].Category + '</span><h2 class="title title--full">' + data[i].Headline + '</h2><div class="meta meta--full"><img alt="author01" class="meta__avatar" src="img/authors/1.png"><span class="meta__author">' + data[i].Category + '</span><span class="meta__date"><i class="fa fa-calendar-o"></i>' + document.lastModified + '</span><span class="meta__reading-time"><i class="fa fa-clock-o"></i>' + bodyLength + '文字' + '</span></div><p>' + data[i].FirstBody + '</p><p>' + data[i].Body + '</p><p>ここまで</p></article>'));
    }
    var ulObj3 = $("#filterButtons"),
      len = data.length,
      beforCategory;
    beforCategory = 'dummy';
    //すべて
    ulObj3.append($('<button class="button is-checked" data-filter="*">show all</button>'));
    for (var i = 0; i < len; i++) {
      if (data[i].Category != beforCategory) {
        ulObj3.append($('<button class="button" data-filter=".' + data[i].Category + '">' + data[i].Category + '</button>'));
        beforCategory = data[i].Category;
      }
    }
    //未分類
    //      ulObj3.append($('<button class="button" data-filter="other">未分類</button>'));
    var ulObj4 = $("#michi"),
      len = data.length;
    var HeadlinePreview;
    limitNo = 20;
    for (var i = 0; i < len; i++) {
      if (data[i].Headline.length > limitNo) {
        HeadlinePreview = data[i].Headline.substr(0, limitNo) + '…';
      }
      ulObj4.append($('<p><a href="#seq' + i +'">' + HeadlinePreview + '</a></p>'));
    }
  });
});
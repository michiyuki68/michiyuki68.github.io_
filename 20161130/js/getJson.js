$(function() {
  $.getJSON("data.json" , function(data) {
    var
      ulObj1 = $("#HeadLines"),
      ulObj2 = $("#Bodies"),
      len = data.length;

    for(var i = 0; i < len; i++) {

        ulObj1.append($('<a class="grid__item ' + data[i].Category + '" href="#" data-category="' + data[i].category + '"><h2 class="title title--preview">' + data[i].Headline + '</h2><div class="loader"></div><span class="category">' + data[i].Category + '</span><div class="meta meta--preview"><img class="meta__avatar" src="img/authors/1.png" alt="author01"/><span class="meta__date"><i class="fa fa-calendar-o"></i>' + document.lastModified + '</span><span class="meta__reading-time"><i class="fa fa-clock-o"></i> 3 min read</span></div></a>'));

//        ulObj1.append($('<a class="grid__item ' + 'itimen' + '" href="#" data-category="' + data[i].category + '"><h2 class="title title--preview">' + data[i].Headline + '</h2><div class="loader"></div><span class="category">' + 'itimen' + '</span><div class="meta meta--preview"><img class="meta__avatar" src="img/authors/1.png" alt="author01"/><span class="meta__date"><i class="fa fa-calendar-o"></i>' + document.lastModified + '</span><span class="meta__reading-time"><i class="fa fa-clock-o"></i> 3 min read</span></div></a>'));

console.log('１とおってるよ');

        ulObj2.append($('<article class="content__item"><span class="category category--full">Stories for humans</span><h2 class="title title--full">' + data[i].Headline + '</h2><div class="meta meta--full"><img alt="author01" class="meta__avatar" src="img/authors/1.png"><span class="meta__author">Matthew Walters</span><span class="meta__date"><i class="fa fa-calendar-o"></i> 9 Apr</span><span class="meta__reading-time"><i class="fa fa-clock-o"></i> 3 min read</span></div><p>' + data[i].FirstBody + '</p><p>' + data[i].Body +'<p>ここまで</p></article>'));

    }

console.log('２とおってるよ');

    var
      ulObj3 = $("#filterButtons"),
      len = 3;

//    for(var i = 0; i < len; i++) {
        ulObj3.append($('<button class="button" data-filter=".' + 'itimen' + '">' + '一面' + '</button>'));
        ulObj3.append($('<button class="button" data-filter=".' + 'sougou' + '">' + '総合' + '</button>'));
        ulObj3.append($('<button class="button" data-filter=".' + 'seiji'  + '">' + '政治' + '</button>'));
        ulObj3.append($('<button class="button" data-filter=".' + 'syakai' + '">' + '社会' + '</button>'));
        ulObj3.append($('<button class="button" data-filter=".' + 'kigyou' + '">' + '企業' + '</button>'));
//    }
  });

  $.getJSON("data2.json" , function(data) {
    var
      ulObj4 = $("#HeadLines"),
      ulObj5 = $("#Bodies"),
      len = data.length;

    for(var i = 0; i < len; i++) {

        ulObj4.append($('<a class="grid__item ' + data[i].Category + '" href="#" data-category="' + data[i].category + '"><h2 class="title title--preview">' + data[i].Headline + '</h2><div class="loader"></div><span class="category">' + data[i].Category + '</span><div class="meta meta--preview"><img class="meta__avatar" src="img/authors/1.png" alt="author01"/><span class="meta__date"><i class="fa fa-calendar-o"></i>' + document.lastModified + '</span><span class="meta__reading-time"><i class="fa fa-clock-o"></i> 3 min read</span></div></a>'));

//        ulObj1.append($('<a class="grid__item ' + 'itimen' + '" href="#" data-category="' + data[i].category + '"><h2 class="title title--preview">' + data[i].Headline + '</h2><div class="loader"></div><span class="category">' + 'itimen' + '</span><div class="meta meta--preview"><img class="meta__avatar" src="img/authors/1.png" alt="author01"/><span class="meta__date"><i class="fa fa-calendar-o"></i>' + document.lastModified + '</span><span class="meta__reading-time"><i class="fa fa-clock-o"></i> 3 min read</span></div></a>'));

console.log('１１とおってるよ');

        ulObj5.append($('<article class="content__item"><span class="category category--full">Stories for humans</span><h2 class="title title--full">' + data[i].Headline + '</h2><div class="meta meta--full"><img alt="author01" class="meta__avatar" src="img/authors/1.png"><span class="meta__author">Matthew Walters</span><span class="meta__date"><i class="fa fa-calendar-o"></i> 9 Apr</span><span class="meta__reading-time"><i class="fa fa-clock-o"></i> 3 min read</span></div><p>' + data[i].FirstBody + '</p><p>' + data[i].Body +'<p>ここまで</p></article>'));

    }

console.log('２２とおってるよ');

  });


});

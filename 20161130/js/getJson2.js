$(function() {
  $.getJSON("data2.json" , function(data) {
console.log('data2.jsonとおってるよ');
    var
      ulObj1 = $("#Headlines"),
      ulObj2 = $("#Bodies"),
      len = data.length;

    for(var i = 0; i < len; i++) {
console.log('data2.json０とおってるよ');
//        ulObj1.append($('<a class="grid__item ' + data[i].Category + '" href="#" data-category="' + data[i].category + '"><h2 class="title title--preview">' + data[i].Headline + '</h2><div class="loader"></div><span class="category">' + data[i].Category + '</span><div class="meta meta--preview"><img class="meta__avatar" src="img/authors/1.png" alt="author01"/><span class="meta__date"><i class="fa fa-calendar-o"></i>' + document.lastModified + '</span><span class="meta__reading-time"><i class="fa fa-clock-o"></i> 3 min read</span></div></a>'));

        ulObj1.append($('<a class="grid__item ' + data[i].Category + '" href="#" data-category="' + data[i].category + '"><h2 class="title title--preview">' + data[i].Headline + '</h2><div class="loader"></div>'));


//        ulObj1.append($('<a class="grid__item ' + 'itimen' + '" href="#" data-category="' + data[i].category + '"><h2 class="title title--preview">' + data[i].Headline + '</h2><div class="loader"></div><span class="category">' + 'itimen' + '</span><div class="meta meta--preview"><img class="meta__avatar" src="img/authors/1.png" alt="author01"/><span class="meta__date"><i class="fa fa-calendar-o"></i>' + document.lastModified + '</span><span class="meta__reading-time"><i class="fa fa-clock-o"></i> 3 min read</span></div></a>'));

console.log('<article class="content__item"><span class="category category--full">Stories for humans</span><h2 class="title title--full">' + data[i].Headline + '</h2><div class="meta meta--full"><img alt="author01" class="meta__avatar" src="img/authors/1.png"><span class="meta__author">' + data[i].Category + '</span><span class="meta__date"><i class="fa fa-calendar-o"></i> 9 Apr</span><span class="meta__reading-time"><i class="fa fa-clock-o"></i> 3 min read</span></div><p>' + data[i].FirstBody + '</p><p>' + data[i].Body +'<p>ここまで</p></article>');

        ulObj2.append($('<article class="content__item"><span class="category category--full">Stories for humans</span><h2 class="title title--full">' + data[i].Headline + '</h2><div class="meta meta--full"><img alt="author01" class="meta__avatar" src="img/authors/1.png"><span class="meta__author">' + data[i].Category + '</span><span class="meta__date"><i class="fa fa-calendar-o"></i> 9 Apr</span><span class="meta__reading-time"><i class="fa fa-clock-o"></i> 3 min read</span></div><p>' + data[i].FirstBody + '</p><div>' + data[i].Body +'</div><p>ここまで</p></article>'));
    }

console.log('data.json２とおってるよ');

    var
      ulObj3 = $("#filterButtons"),
      len = 3;

//    for(var i = 0; i < len; i++) {
        ulObj3.append($('<button class="button" data-filter=".' + '一面' + '">' + '一面' + '</button>'));
        ulObj3.append($('<button class="button" data-filter=".' + '夕刊総合' + '">' + '夕刊総合' + '</button>'));
        ulObj3.append($('<button class="button" data-filter=".' + '社会' + '">' + '社会' + '</button>'));
        ulObj3.append($('<button class="button" data-filter=".' + '生活社会' + '">' + '生活社会' + '</button>'));
        ulObj3.append($('<button class="button" data-filter=".' + 'スポーツ' + '">' + 'スポーツ' + '</button>'));
        ulObj3.append($('<button class="button" data-filter=".' + 'マーケット投資' + '">' + 'マーケット投資' + '</button>'));

//    }
  });

});

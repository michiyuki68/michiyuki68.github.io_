$(function(){
    var setArea = $('#loadarea'),
    loadNum = 5, // 読み込む個数
    loadTxt = 'Now Loading...', // Loading中の表示テキスト
    btnTxt = 'もっと見る', // ボタンテキスト
    fadeSpeed = 500; // フェードスピード
 
    setArea.after('<div id="btnMore">' + btnTxt + '</div>');
    var setMore = setArea.next('#btnMore');
 
    setMore.click(function(){
        $.ajax({
            url: 'json/data.json',
            dataType: 'json',
            success : function(data){
                var dataLengh = data.length,
                loadItemLength = setArea.find('.loadItem').length,
                setAdj = (dataLengh)-(loadItemLength),
                setBeg = (dataLengh)-(setAdj);
                if(!(dataLengh == loadItemLength)){
                    setArea.append('<div id="nowLoading">' + loadTxt + '</div>');
                    if(loadItemLength == 0){
                        if(dataLengh <= loadNum){
                            for (var i=0; i<dataLengh; i++) {
                                $('<div id="item' + data[i].itemNum + '" class="loadItem">' + data[i].itemSource + '</div>').appendTo(setArea).css({opacity:'0'}).animate({opacity:'1'},fadeSpeed);
                            }
                            setMore.remove();
                        } else {
                            for (var i=0; i<loadNum; i++) {
                                $('<div id="item' + data[i].itemNum + '" class="loadItem">' + data[i].itemSource + '</div>').appendTo(setArea).css({opacity:'0'}).animate({opacity:'1'},fadeSpeed);
                            }
                        }
                    } else if(loadItemLength > 0 && loadItemLength < dataLengh){
                        if(loadNum < setAdj){
                            for (var i=0; i<loadNum; i++) {
                                v = i+setBeg;
                                $('<div id="item' + data[v].itemNum + '" class="loadItem">' + data[v].itemSource + '</div>').appendTo(setArea).css({opacity:'0'}).animate({opacity:'1'},fadeSpeed);
                            }
                        } else if(loadNum >= setAdj){
                            for (var i=0; i<setAdj; i++) {
                                v = i+setBeg;
                                $('<div id="item' + data[v].itemNum + '" class="loadItem">' + data[v].itemSource + '</div>').appendTo(setArea).css({opacity:'0'}).animate({opacity:'1'},fadeSpeed);
                            }
                            setMore.remove();
                        }
                    } else if(loadItemLength == dataLengh){
                        return false;
                    }
                } else {
                    return false;
                }
            }, //success
            complete : function(){
                $('#nowLoading').each(function(){
                    $(this).remove();
                });
                return false;
            } //complete
        });
        return false;
    });
});
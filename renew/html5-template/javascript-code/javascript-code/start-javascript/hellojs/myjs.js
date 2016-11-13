
var name = prompt('名前何よ？', '名無しさん');
if (name == 'null') {
    document.writeln('キャンセルしてんじゃねぇよはげ');
    console.log('キャンセルしてんじゃねぇよはげ');
} else if (name) {
    document.writeln('「' + name + '」か...いい名前だな');
    console.log(name + 'か...いい名前だな');
} else {
    document.writeln('なんか入力しろよぼけ');
    console.log('なんか入力しろよぼけ');
}

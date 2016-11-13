//  
//  テキストファイル操作
//  
//  　テキストファイル内の全ての文字データを一度に読み込む。
//  

//  オープンモード
var FORREADING      = 1;    // 読み取り専用
var FORWRITING      = 2;    // 書き込み専用
var FORAPPENDING    = 8;    // 追加書き込み

//  開くファイルの形式
var TRISTATE_TRUE       = -1;   // Unicode
var TRISTATE_FALSE      =  0;   // ASCII
var TRISTATE_USEDEFAULT = -2;   // システムデフォルト

//  ファイル関連の操作を提供するオブジェクトを取得
var fs = new ActiveXObject( "Scripting.FileSystemObject" );

//  ファイルを読み取り専用で開く
var file = fs.OpenTextFile( "work2\\01_一面.txt", FORREADING, true, TRISTATE_FALSE );

//  ファイルの文字データを一行ずつ表示する
while( !file.AtEndOfStream )
{
    WScript.Echo( file.ReadLine() );

//titleなら


}

//  ファイルを閉じる
file.Close();

//  オブジェクトを解放
fs = null;

WScript.Echo( "終了" );
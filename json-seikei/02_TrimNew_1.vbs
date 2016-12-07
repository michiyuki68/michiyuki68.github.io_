Option Explicit
' On Error Resume Next

Dim objWShell
Dim objFileSys
Dim strScriptPath
Dim strLogFile, objWriteLogStream
dim intWaiteSeconds
dim intPopup

dim bTitle
dim pathWork
dim pathWork2
dim objNewTextStream
dim objReadSourceStream

rem ====================
rem  オブジェクト生成
rem ====================
Set objWShell = CreateObject("WScript.Shell")
Set objFileSys = CreateObject("Scripting.FileSystemObject")
strScriptPath = Replace(WScript.ScriptFullName,WScript.ScriptName,"")
pathWork = objFileSys.BuildPath(strScriptPath, "work")
pathWork2 = objFileSys.BuildPath(strScriptPath, "work2")

rem ====================
rem  ﾛｸﾞ出力開始
rem ====================
SetLogStream objWriteLogStream, True
SendLog WScript.ScriptName & "を開始しました"

rem ====================
rem  step1
rem ====================
rem workフォルダの作成
if (objFileSys.FolderExists(pathWork2))  Then
  objFileSys.DeleteFolder pathWork2, True
end if
objFileSys.CreateFolder(pathWork2)

rem フォルダのオブジェクトを取得
dim objFolder
Set objFolder = objFileSys.GetFolder(pathWork)
dim aaa
dim objFile

rem FolderオブジェクトのFilesプロパティからFileオブジェクトを取得
For Each objFile In objFolder.Files
  Set objNewTextStream = objFileSys.OpenTextFile(objFileSys.BuildPath(pathWork2, objFile.Name), 2, True)
  Set aaa = objFileSys.OpenTextFile(objFile.Path)

  Dim objRegExp       rem  正規表現オブジェクト
  Dim objMatches      rem  検索結果
  Dim objMatch        rem  検索結果
  Dim strMessage      rem  表示メッセージ

  Set objRegExp = New RegExp
'  objRegExp.Pattern = "<h2 class=""title"">.*</h2>|<div class=""col col10 artCSS_Highlight_on""><p>.*</p><!--/.col-->"
  objRegExp.Pattern = "<h2 class=""title"">.*</h2>|<div class=""col col10 artCSS_Highlight_on""><p>[^<br>]*(<br>|</p>)|<br>.*</p><!--/.col-->"
  objRegExp.IgnoreCase = True
  objRegExp.Global     = True

'          objNewTextStream.WriteLine "["

Dim bBodyAri
bBodyAri = True
  Do While aaa.AtEndOfStream <> True
      dim strRead
      strRead = aaa.ReadLine
      ' WScript.Echo strRead
      Set objMatches = objRegExp.Execute(strRead)
      bTitle = True

      For Each objMatch In objMatches
          ' strMessage = "　" & objMatch.FirstIndex + 1 & " 文字目に見つかりました。" & "一致した文字列は " & objMatch.Value & " です。"
           sendlog objMatch.Value
sendlog Left(objMatch.Value, 18)
if Left(objMatch.Value, 18) = "<h2 class=""title"">" then
          if bBodyAri = false then
            objNewTextStream.WriteLine "},"
          end if
          objNewTextStream.WriteLine "{"
          objNewTextStream.WriteLine """Category""" & ":" & """" & mid(objFile.Name, 4, len(objFile.Name) - 7) & """" & ","
          objNewTextStream.WriteLine """Headline""" & ":"
          objNewTextStream.WriteLine """" & objMatch.Value & """"
          bBodyAri = false
end if

if Left(objMatch.Value, 43) = "<div class=""col col10 artCSS_Highlight_on"">" then
          objNewTextStream.WriteLine ","
          objNewTextStream.WriteLine """FirstBody""" & ":"
          objNewTextStream.WriteLine """" & mid(objMatch.Value, 1, len(objMatch.Value) - 4) & """"
end if

if Right(objMatch.Value, 12) = "<!--/.col-->" then
          bBodyAri = true
          objNewTextStream.WriteLine ","
          objNewTextStream.WriteLine """Body""" & ":"
          objNewTextStream.WriteLine """" & mid(objMatch.Value, 5, len(objMatch.Value)) & """"
          objNewTextStream.WriteLine "},"
end if

      Next

  Loop

  aaa.Close
'          objNewTextStream.WriteLine "{" & """dummy"":""null""" & "}"
'          objNewTextStream.WriteLine "]"

  Set objMatches = Nothing
  Set objRegExp = Nothing
Next


rem ====================
rem  step2 
rem ====================
rem フォルダのオブジェクトを取得
dim objFolder2
dim objFile2
Set objFolder2 = objFileSys.GetFolder(pathWork2)

rem FolderオブジェクトのFilesプロパティからFileオブジェクトを取得
For Each objFile2 In objFolder2.Files
  SendLog "次のファイルの処理を開始：" & objFile2.Name
'     WScript.Echo objFile2.Path

  ReplaceRegPattern objFile2.Path, "<h2 class=""title"">|</h2>|<div class=""col col10 artCSS_Highlight_on""><p>|</p><!--/.col-->", ""

'  ReplaceRegPattern objFile2.Path, "<br>", vbCrLf
'  ReplaceRegPattern objFile2.Path, "<br>", ""
Next

rem ====================
rem  終了
rem ====================
intWaiteSeconds = 1
intPopup = objWShell.Popup(WScript.ScriptName & "が完了しました！" & vbCrLf & vbCrLf & _
                          intWaiteSeconds & "秒後にこのダイアログは消えます。", intWaiteSeconds, WScript.ScriptName, vbOKOnly + vbInformation + vbSystemModal)

SendLog "終了"

rem ====================
rem  ReplaceRegPattern
rem ====================
Sub ReplaceRegPattern (strDstTextPath, regPattern, regText)

  Dim objRegExp_Rep       rem  正規表現オブジェクト
  Dim objMatches_Rep      rem  検索結果

dim srcText
dim dstText
' dim regText

dim objSrcDstTextStream

  Set objRegExp_Rep = New RegExp
  objRegExp_Rep.IgnoreCase = True
  objRegExp_Rep.Global = True

  rem テキストデータ読込
  Set objSrcDstTextStream = objFileSys.OpenTextFile(strDstTextPath)
  srcText = objSrcDstTextStream.ReadAll

'SendLog srcText
  rem 置換対象文字列
  regText = regText
  objRegExp_Rep.Pattern = regPattern

Set objMatches_Rep = objRegExp_Rep.Execute(srcText)
SendLog objMatches_Rep.count & "個マッチしました。"

  rem テキスト変換
  dstText = objRegExp_Rep.replace(srcText, regText)
  objSrcDstTextStream.Close
  rem 書き込み
sendlog "次に書き込み：" & strDstTextPath
  Set objSrcDstTextStream = objFileSys.OpenTextFile(strDstTextPath, 2, True)
  objSrcDstTextStream.WriteLine dstText
  objSrcDstTextStream.Close

  Set objSrcDstTextStream = Nothing
  Set objMatches_Rep = Nothing
  Set objRegExp_Rep = Nothing
sendlog "aaaaaaaaaaaaaaaaaaaaaaa"
End Sub


rem ====================
rem  SendLog
rem ====================
Sub SendLog (strLogText)
  objWriteLogStream.WriteLine Now() & vbTab & strLogText
End Sub

rem --------------
rem  SetLogStream
rem --------------
Sub SetLogStream(objLogStream, bMakeFolder)
  Dim strScriptPath
  Dim strLogFilePath
  Dim strLogFolderPath

  strScriptPath = Replace(WScript.ScriptFullName, WScript.ScriptName, "")

  rem ログファイルのパスを決める
  if bMakeFolder = true then
    strLogFolderPath = objFileSys.BuildPath(strScriptPath, "log")
    MakeFolder strLogFolderPath, False
    strLogFilePath = objFileSys.BuildPath(strLogFolderPath, WScript.ScriptName & ".log")
  else
    strLogFilePath = objFileSys.BuildPath(strScriptPath, WScript.ScriptName + ".log")
  end if

  Set objLogStream = objFileSys.OpenTextFile(strLogFilePath, 2, True)

end sub

rem --------------
rem  MakeFolder 
rem --------------
Sub MakeFolder(strPath, bReName)
  On Error Resume Next
  Dim strTime
  strTime = Replace(Date, "/", "")
  strTime = Replace(strTime & "_" & Time, ":", "")

  objFileSys.CreateFolder(strPath)

  Select Case Err.Number
  Case 0
    'エラーが発生していない場合
    SendLog strPath & "を作成しました"
  Case 58
    If bReName = True Then
      '同名のフォルダがある場合はリネームして、新規作成
      Dim objFolder
      Set objFolder = objFileSys.GetFolder(strPath)
      objFolder.Name = objFolder.Name &  "_old"
      SendLog objFolder.Name & "は存在していたため、リネームしました"
      Set objFolder = Nothing
      objFileSys.CreateFolder(strPath)
      SendLog strPath & "を作成しました"
    Else
      SendLog objFolder.Name & "は存在しますが、リネームしていません"
    End If
  Case Else
    'そのほかのエラーの場合
    SendLog "エラー番号:" & Err.Number & vbCrLf & _
      "説明:" & Err.Description & vbCrLf & _
      "ソース:" & Err.Source & vbCrLf & _
      strPath
  End Select

  'エラー情報をクリアする
  Err.Clear
  On Error Goto 0
End Sub

rem ====================
rem  オブジェクト破棄
rem ====================
Set objFileSys = Nothing
Set objWriteLogStream = Nothing
set objWShell = Nothing
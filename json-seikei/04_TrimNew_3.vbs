Option Explicit
' On Error Resume Next

Dim objWShell
Dim objFileSys
Dim strScriptPath
Dim strLogFile, objWriteLogStream
dim intWaiteSeconds
dim intPopup

dim pathWork
dim pathWork2
dim objdstTextStream
dim objReadSourceStream

dim dstText

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
rem  メイン
rem ====================
dim objFolder
Set objFolder = objFileSys.GetFolder(pathWork2)
dim srcText
dim objFile


rem FolderオブジェクトのFilesプロパティからFileオブジェクトを取得
For Each objFile In objFolder.Files
  SendLog "次のファイルの処理を開始：" & objFile.Name
'     WScript.Echo objFile.Path
rem firstbody改行したいならココ
'  ReplaceRegPattern objFile.Path, "Body" & vbCrLf & "([^。]*。)", "Body" & vbCrLf & "$1" & vbCrLf

  ReplaceRegPattern objFile.Path, "Headline"  & vbCrLf & "", "{""seqNo"":1,""HeadLine"":"""
  ReplaceRegPattern objFile.Path, vbCrLf & "FirstBody"  & vbCrLf & "", """,""FirstBody"":"""
  ReplaceRegPattern objFile.Path, vbCrLf, """},"

Next



rem WScript.Echo dstText

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

  Dim objRegExp       rem  正規表現オブジェクト
  Dim objMatches      rem  検索結果

dim srcText
dim dstText
' dim regText

dim objSrcDstTextStream

  Set objRegExp = New RegExp
  objRegExp.IgnoreCase = True
  objRegExp.Global = True


  rem テキストデータ読込
  Set objSrcDstTextStream = objFileSys.OpenTextFile(strDstTextPath)
  srcText = objSrcDstTextStream.ReadAll
  rem 置換対象文字列
  regText = regText
  objRegExp.Pattern = regPattern

Set objMatches = objRegExp.Execute(srcText)
SendLog objMatches.count & "個マッチしました。"

  rem テキスト変換
  dstText = objRegExp.replace(srcText, regText)
  objSrcDstTextStream.Close
  rem 書き込み
  Set objSrcDstTextStream = objFileSys.OpenTextFile(strDstTextPath, 2, True)
  objSrcDstTextStream.WriteLine dstText
  objSrcDstTextStream.Close

  Set objSrcDstTextStream = Nothing
  Set objMatches = Nothing
  Set objRegExp = Nothing

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
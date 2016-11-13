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
rem  �I�u�W�F�N�g����
rem ====================
Set objWShell = CreateObject("WScript.Shell")
Set objFileSys = CreateObject("Scripting.FileSystemObject")
strScriptPath = Replace(WScript.ScriptFullName,WScript.ScriptName,"")
pathWork = objFileSys.BuildPath(strScriptPath, "work")
pathWork2 = objFileSys.BuildPath(strScriptPath, "work2")

rem ====================
rem  ۸ޏo�͊J�n
rem ====================
SetLogStream objWriteLogStream, True
SendLog WScript.ScriptName & "���J�n���܂���"

rem ====================
rem  ���C��
rem ====================
rem work�t�H���_�̍쐬
if (objFileSys.FolderExists(pathWork2))  Then
  objFileSys.DeleteFolder pathWork2, True
end if
objFileSys.CreateFolder(pathWork2)

rem c:\temp �t�H���_�̃I�u�W�F�N�g���擾
dim objFolder
Set objFolder = objFileSys.GetFolder(pathWork)
dim aaa
dim objFile


rem Folder�I�u�W�F�N�g��Files�v���p�e�B����File�I�u�W�F�N�g���擾
For Each objFile In objFolder.Files
  Set objNewTextStream = objFileSys.OpenTextFile(objFileSys.BuildPath(pathWork2, objFile.Name), 2, True)
  Set aaa = objFileSys.OpenTextFile(objFile.Path)

  Dim objRegExp       rem  ���K�\���I�u�W�F�N�g
  Dim objMatches      rem  ��������
  Dim objMatch        rem  ��������
  Dim strMessage      rem  �\�����b�Z�[�W

  Set objRegExp = New RegExp
  objRegExp.Pattern = "<h2 class=""title"">.*</h2>|<div class=""col col10 artCSS_Highlight_on""><p>.*</p><!--/.col-->"
  objRegExp.IgnoreCase = True
  objRegExp.Global = True

  Do While aaa.AtEndOfStream <> True
      dim strRead
      strRead = aaa.ReadLine
      ' WScript.Echo strRead
      Set objMatches = objRegExp.Execute(strRead)
      bTitle = True
      For Each objMatch In objMatches
          ' strMessage = "�@" & objMatch.FirstIndex + 1 & " �����ڂɌ�����܂����B" & "��v����������� " & objMatch.Value & " �ł��B"
          ' WScript.Echo objMatch.Value
          if bTitle then

             dim strBar
             dim iMidasiCnt
             dim strBunrui
             dim iBarCnt
             strBar = ""
             strBunrui = mid(objFileSys.getBaseName(objFile.Name), 4)
             iMidasiCnt = len(strBunrui)
             iBarCnt = 27 rem �����l
             dim i
             for i = 1 To iBarCnt - iMidasiCnt - 2
              strBar = strBar & "�\"
             next

             objNewTextStream.WriteLine "Headline"
          end if

          objNewTextStream.WriteLine objMatch.Value

          if bTitle then
            strBar = ""
            for i = 1 To iBarCnt
              strBar = strBar & "�\"
            next
            objNewTextStream.WriteLine "Body"
            bTitle = False
          end if
      Next
  Loop
  aaa.Close

  Set objMatches = Nothing
  Set objRegExp = Nothing
Next


rem ====================
rem  �I��
rem ====================
intWaiteSeconds = 1
intPopup = objWShell.Popup(WScript.ScriptName & "���������܂����I" & vbCrLf & vbCrLf & _
                          intWaiteSeconds & "�b��ɂ��̃_�C�A���O�͏����܂��B", intWaiteSeconds, WScript.ScriptName, vbOKOnly + vbInformation + vbSystemModal)

SendLog "�I��"

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

  rem ���O�t�@�C���̃p�X�����߂�
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
    '�G���[���������Ă��Ȃ��ꍇ
    SendLog strPath & "���쐬���܂���"
  Case 58
    If bReName = True Then
      '�����̃t�H���_������ꍇ�̓��l�[�����āA�V�K�쐬
      Dim objFolder
      Set objFolder = objFileSys.GetFolder(strPath)
      objFolder.Name = objFolder.Name &  "_old"
      SendLog objFolder.Name & "�͑��݂��Ă������߁A���l�[�����܂���"
      Set objFolder = Nothing
      objFileSys.CreateFolder(strPath)
      SendLog strPath & "���쐬���܂���"
    Else
      SendLog objFolder.Name & "�͑��݂��܂����A���l�[�����Ă��܂���"
    End If
  Case Else
    '���̂ق��̃G���[�̏ꍇ
    SendLog "�G���[�ԍ�:" & Err.Number & vbCrLf & _
      "����:" & Err.Description & vbCrLf & _
      "�\�[�X:" & Err.Source & vbCrLf & _
      strPath
  End Select

  '�G���[�����N���A����
  Err.Clear
  On Error Goto 0
End Sub

rem ====================
rem  �I�u�W�F�N�g�j��
rem ====================
Set objFileSys = Nothing
Set objWriteLogStream = Nothing
set objWShell = Nothing
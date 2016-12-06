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
dim objFolder
Set objFolder = objFileSys.GetFolder(pathWork2)
dim srcText
dim objFile


rem Folder�I�u�W�F�N�g��Files�v���p�e�B����File�I�u�W�F�N�g���擾
For Each objFile In objFolder.Files
  SendLog "���̃t�@�C���̏������J�n�F" & objFile.Name
'     WScript.Echo objFile.Path
rem firstbody���s�������Ȃ�R�R
'  ReplaceRegPattern objFile.Path, "Body" & vbCrLf & "([^�B]*�B)", "Body" & vbCrLf & "$1" & vbCrLf

  ReplaceRegPattern objFile.Path, "Headline"  & vbCrLf & "", "{""seqNo"":1,""HeadLine"":"""
  ReplaceRegPattern objFile.Path, vbCrLf & "FirstBody"  & vbCrLf & "", """,""FirstBody"":"""
  ReplaceRegPattern objFile.Path, vbCrLf, """},"

Next



rem WScript.Echo dstText

rem ====================
rem  �I��
rem ====================
intWaiteSeconds = 1
intPopup = objWShell.Popup(WScript.ScriptName & "���������܂����I" & vbCrLf & vbCrLf & _
                          intWaiteSeconds & "�b��ɂ��̃_�C�A���O�͏����܂��B", intWaiteSeconds, WScript.ScriptName, vbOKOnly + vbInformation + vbSystemModal)

SendLog "�I��"

rem ====================
rem  ReplaceRegPattern
rem ====================
Sub ReplaceRegPattern (strDstTextPath, regPattern, regText)

  Dim objRegExp       rem  ���K�\���I�u�W�F�N�g
  Dim objMatches      rem  ��������

dim srcText
dim dstText
' dim regText

dim objSrcDstTextStream

  Set objRegExp = New RegExp
  objRegExp.IgnoreCase = True
  objRegExp.Global = True


  rem �e�L�X�g�f�[�^�Ǎ�
  Set objSrcDstTextStream = objFileSys.OpenTextFile(strDstTextPath)
  srcText = objSrcDstTextStream.ReadAll
  rem �u���Ώە�����
  regText = regText
  objRegExp.Pattern = regPattern

Set objMatches = objRegExp.Execute(srcText)
SendLog objMatches.count & "�}�b�`���܂����B"

  rem �e�L�X�g�ϊ�
  dstText = objRegExp.replace(srcText, regText)
  objSrcDstTextStream.Close
  rem ��������
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
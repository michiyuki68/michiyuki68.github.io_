//  
//  �e�L�X�g�t�@�C������
//  
//  �@�e�L�X�g�t�@�C�����̑S�Ă̕����f�[�^����x�ɓǂݍ��ށB
//  

//  �I�[�v�����[�h
var FORREADING      = 1;    // �ǂݎ���p
var FORWRITING      = 2;    // �������ݐ�p
var FORAPPENDING    = 8;    // �ǉ���������

//  �J���t�@�C���̌`��
var TRISTATE_TRUE       = -1;   // Unicode
var TRISTATE_FALSE      =  0;   // ASCII
var TRISTATE_USEDEFAULT = -2;   // �V�X�e���f�t�H���g

//  �t�@�C���֘A�̑����񋟂���I�u�W�F�N�g���擾
var fs = new ActiveXObject( "Scripting.FileSystemObject" );

//  �t�@�C����ǂݎ���p�ŊJ��
var file = fs.OpenTextFile( "work2\\01_���.txt", FORREADING, true, TRISTATE_FALSE );

//  �t�@�C���̕����f�[�^����s���\������
while( !file.AtEndOfStream )
{
    WScript.Echo( file.ReadLine() );

//title�Ȃ�


}

//  �t�@�C�������
file.Close();

//  �I�u�W�F�N�g�����
fs = null;

WScript.Echo( "�I��" );
function moveCheckImage_Language_index(n)
{
	_moveFrameImageExe(3,n);
	switch( n )
	{
	case 0: 
		wii.language = 1; 
		location.href = "../../ENG/Language/Language_index.html";
		break;
	case 1: 
		wii.language = 3; 
		location.href = "../../FRA/Language/Language_index.html";
		break;
	case 2: 
		wii.language = 4; 
		location.href = "../../SPA/Language/Language_index.html";
		break;
	}
	wii.se = 5;
}

function setBackLang_Language_index()
{
	data = wii.languageSave;
	wii.language = data;
	switch( data )
	{
	case 1: location.href = "../../ENG/index03.html"; break;
	case 3: location.href = "../../FRA/index03.html"; break;
	case 4: location.href = "../../SPA/index03.html"; break;
	}
	wii.se = 4;
}
function init_Language_index(){
// 初期化、wiiから取得した値を反映
var data = wii.language;
switch( data )
{
case 1: _moveFrameImageExe(3,0); break;
case 3: _moveFrameImageExe(3,1); break;
case 4: _moveFrameImageExe(3,2); break;
}
}

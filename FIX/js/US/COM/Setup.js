
var year  = 0;
var month = 0;
var date  = 0;
var max_date = 0;
date_table = new Array(31,28,31,30,31,30,31,31,30,31,30,31);

function DrawDate_Day_set()
{
	document.all.draw_year.innerHTML = year+2000;
	if( month < 10 )
	{
		document.all.draw_month.innerHTML = "0"+month;
	}
	else
	{
		document.all.draw_month.innerHTML = month;
	}
	if( date < 10 )
	{
		document.all.draw_date.innerHTML = "0"+date;
	}
	else
	{
		document.all.draw_date.innerHTML = date;
	}
}

function ChangeDate_Day_set()
{
	//CコードのwiiSetterが呼ばれる
	//wii.year = year*10000+month*100+date;
	wii.se = 3;
	wii.date = date;
	wii.month = month;
	wii.year = year;

	wii.WriteBack();
}

function UpYear_Day_set()
{
	if( year < 35 )
	{
		year += 1;
		judgeDate_Day_set();
		DrawDate_Day_set();
		wii.excse = 5;
	}
	else
	{
		year = 0;
		judgeDate_Day_set();
		DrawDate_Day_set();
		wii.excse = 5;
	}
}
function DownYear_Day_set()
{
	if( year > 0 )
	{
		year -= 1;
		judgeDate_Day_set();
		DrawDate_Day_set();
		wii.excse = 5;
	}
	else
	{
		year = 35;
		judgeDate_Day_set();
		DrawDate_Day_set();
		wii.excse = 5;
	}
}
function UpMonth_Day_set()
{
	if( month < 12 )
	{
		month += 1;
		judgeDate_Day_set();
		DrawDate_Day_set();
	}
	else
	{
		month = 1;
		judgeDate_Day_set();
		DrawDate_Day_set();
	}
	wii.excse = 5;
}
function DownMonth_Day_set()
{
	if( month > 1 )
	{
		month -= 1;
		judgeDate_Day_set();
		DrawDate_Day_set();
	}
	else
	{
		month = 12;
		judgeDate_Day_set();
		DrawDate_Day_set();
	}
	wii.excse = 5;
}
function UpDate_Day_set()
{
	if( date < max_date )
	{
		date = date + 1;
		DrawDate_Day_set();
	}
	else
	{
		date = 1;
		DrawDate_Day_set();
	}

	wii.excse = 5;
}
function DownDate_Day_set()
{
	if( date > 1 )
	{
		date = date - 1;
		DrawDate_Day_set();
	}
	else
	{
		date = max_date;
		DrawDate_Day_set();
	}
	wii.excse = 5;
}

function judgeDate_Day_set()
{
	if( (( ( year % 4 ) == 0 ) && ( ( year % 100 ) != 0 ) || ( ( year % 400 ) == 0 )) && (month == 2) ){
		max_date = 29;
	}else{
		max_date = date_table[month-1];
	}

	if( date > max_date ){
		date = max_date;
	}
}

function init_Day_set(){
year  = wii.year;
month = wii.month;
date  = wii.date;
if( year > 35 )
{
	year  = 35;
	month = 12;
	date  = 31;
}
DrawDate_Day_set();
judgeDate_Day_set();
}

function setString_Nickname_set()
{
	_commonSetString(3,2);
	setTimeout("waitFuncResult_Nickname_set()",1000);
}

function waitFuncResult_Nickname_set()
{
	result = wii.funcResult;
	if( result == 3 )
	{
		wii.flush = 0;
		location.href = "../Country/US_Country_flame.html";
	}
	else if( result == 0 )
	{
		setTimeout("waitFuncResult_Nickname_set()",1000);
	}
}

function init_Nickname_set(){
document.all.Name.value=wii.nickname;
}

function moveCheckImage_Sensor_bar_position(n)
{
	wii.excse = 5;
	wii.sensorBar = Number(n);
	_moveFrameImageExe(2,n);
}
function init_Sensor_bar_position(){
// 初期化、wiiから取得した値を反映
var data = wii.sensorBar;
_moveFrameImageExe(2,data);
}

function waitFuncResult_startup_index1()
{
	result = wii.funcResult;
	if( result == 1 )
	{
		location.href = "Sensor_bar_position.html";
	}
	setTimeout("waitFuncResult_startup_index1()",1000);
}

function init_startup_index1(){
wii.pageID = 31;
setTimeout("waitFuncResult_startup_index1()",1000);
}

var hour   = 0;
var minute = 0;

function DrawTime_Time_set()
{
	if( hour < 10 )
	{
		document.all.draw_hour.innerHTML = "0"+hour;
	}
	else
	{
		document.all.draw_hour.innerHTML = hour;
	}
	if( minute < 10 )
	{
		document.all.draw_minute.innerHTML = "0"+minute;
	}
	else
	{
		document.all.draw_minute.innerHTML = minute;
	}
}

function ChangeTime_Time_set()
{
	wii.minute = minute;
	wii.hour = hour;
	_commonSetWriteBack(3);
}

function ChangeHour_Time_set(n)
{
	hour += Number(n);
	if( hour == 24 )
	{
		hour = 0;
	}
	else if( hour < 0 )
	{
		hour = 23;
	}
	wii.excse = 5;
	DrawTime_Time_set();
}
function ChangeMinute_Time_set(n)
{
	minute += Number(n);
	if( minute == 60 )
	{
		minute = 0;
	}
	else if( minute < 0 )
	{
		minute = 59;
	}
	wii.excse = 5;
	DrawTime_Time_set();
}

function init_Time_set(){
hour   = wii.hour;
minute = wii.minute;
DrawTime_Time_set();
}

function moveCheckImage_Wide_set(n)
{
	wii.excse = 5;
	_moveFrameImageExe(2,n);
	wii.dis_wide = Number(n^1);
}

function init_Wide_set(){
// 初期化、wiiから取得した値を反映
var data = wii.dis_wide;
_moveFrameImageExe(2,data^1);
wii.pageID = 2;
}


function moveCheckImage_Language_index(n)
{
	_moveFrameImageExe(3,n);
	var data0 = wii.language;
	var data1 = 1;
	switch( n )
	{
	case 0: data1 = 1; break;
	case 1: data1 = 3; break;
	case 2: data1 = 4; break;
	}

	if( data0 != data1 )
	{
		wii.language = data1;
  		wii.WriteBack();
	}
	wii.excse = 5;
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

function init_startup_index1US(){
wii.pageID = 31;
setTimeout("waitFuncResult_startup_index1US()",1000);
}

function waitFuncResult_startup_index1US()
{
	result = wii.funcResult;
	if( result == 1 )
	{
		wii.flush = 0;
		location.href = "startup_index2.html";
	}
	setTimeout("waitFuncResult_startup_index1US()",1000);
}

function waitFuncResult_startup_index2()
{
	location.href = "Language_index.html";
}

function init_startup_index2(){
setTimeout("waitFuncResult_startup_index2()",3000);
}

function jump_ScreenSave()
{
	type = wii.updateType;
	wii.se = 3;
	if( type == 2 )
	{
		location.href = "NetUpdate.html";
	}
	else if ( type == 1 )
	{
		location.href = "Parental_Notice.html";
	}
	else
	{
		wii.finish = 1;
	}
}

function setFinish_Parental_Notice()
{
	wii.finish = 1;
	wii.se = 3;
}

var keyRepeatState = 0;
var keyNumber = 0;
var keyRepeatTimerID;

function keyRepeatMouseOut_Calendar()
{
	keyRepeatState = 0;
	clearTimeout(keyRepeatTimerID);
}

function keyRepeatStart_Calendar(n)
{
	keyRepeatState = 2;
	keyNumber = n;

	switch(keyNumber)
	{
	case 1: UpYear_Day_set();    break;
	case 2: DownYear_Day_set();  break;
	case 3: UpMonth_Day_set();   break;
	case 4: DownMonth_Day_set(); break;
	case 5: UpDate_Day_set();    break;
	case 6: DownDate_Day_set();  break;
	case 7: ChangeHour_Time_set(1);     break;
	case 8: ChangeHour_Time_set(-1);    break;
	case 9: ChangeMinute_Time_set(1);   break;
	case 10: ChangeMinute_Time_set(-1); break;
	default: break;
	}
	
	keyRepeatTimerID = setTimeout("waitKeyRepeat_Calendar()",400);
}

function keyRepeatStop_Calendar()
{
	keyRepeatState--;
	if( keyRepeatState == 0 )
	{
		clearTimeout(keyRepeatTimerID);
	}
}

function waitKeyRepeat_Calendar()
{
	clearTimeout(keyRepeatTimerID);
	
	if( keyRepeatState == 1 )
	{
		switch(keyNumber)
		{
		case 1: UpYear_Day_set();    break;
		case 2: DownYear_Day_set();  break;
		case 3: UpMonth_Day_set();   break;
		case 4: DownMonth_Day_set(); break;
		case 5: UpDate_Day_set();    break;
		case 6: DownDate_Day_set();  break;
		case 7: ChangeHour_Time_set(1);     break;
		case 8: ChangeHour_Time_set(-1);    break;
		case 9: ChangeMinute_Time_set(1);   break;
		case 10: ChangeMinute_Time_set(-1); break;
		default: break;
		}
		
		setTimeout("waitKeyRepeat_Calendar()",150);
	}
}

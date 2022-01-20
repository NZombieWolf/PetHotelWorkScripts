#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.



IfWinExist, Kennel Connection 7.0: Ambers Luxury Pet Hotel
{
WinGet,WinState,MinMax,Kennel Connection 7.0: Ambers Luxury Pet Hotel
If WinState = -1
   WinMaximize
}
sleep,500
;Rec Reports
MouseClick, left, 276, 52
sleep,500
MouseClick, left, 113,122
sleep,500
MouseClick, left, 191,606
sleep,500
MouseClick, left, 131,53
sleep,500
MouseClick, left, 272,45
sleep,6000
Printing:
if WinExist("Printing")
{
Sleep, 1000
}else Goto, Done
Goto, Printing
Done:
;Sales Report
MouseClick, left, 113,122 ; revenue button
sleep,500
MouseClick, left, 154,726
sleep,500
MouseClick, left, 191,50
sleep,500
MouseClick, left, 83,78
sleep,500
MouseClick, left, 21,170
sleep,500
MouseClick, left, 338,51
; Tips Report
sleep, 6000
Printing2:
if WinExist("Printing")
{
Sleep, 1000
}else Goto, Done2
Goto, Printing2
Done2:
MouseClick, left, 113,122 ; revenue button
sleep,500
MouseClick, left, 199,798
sleep,500
MouseClick, left, 137,53
sleep,500
MouseClick, left, 260,47
sleep, 6000
Printing3:
if WinExist("Printing")
{
Sleep, 1000
}else Goto, Done3
Goto, Printing3
Done3:
;Com Report
MouseClick, left, 113,122 ; revenue button
sleep,500
MouseClick, left, 173,239
sleep,500
MouseClick, left, 134,56
sleep,500
MouseClick, left, 247,45
sleep, 6000
Printing4:
if WinExist("Printing")
{
Sleep, 1000
}else Goto, Done4
Goto, Printing4
Done4:

; Print Tomorrow's Feeding Report
MouseClick, left, 118,44
sleep,500
MouseClick, left, 389,97
sleep,500
MouseClick, left, 262,46
sleep,500
MouseClick, left, 47,97
sleep,500
MouseClick, left, 135,455
sleep,500
MouseClick, left, 112,50
sleep,500
MouseClick, left, 40,171
sleep,500
MouseClick, left, 28,225
sleep,500
MouseClick, left, 26,277
sleep,500
MouseClick, left, 217,47
sleep,3000
Printing5:
if WinExist("Printing")
{
Sleep, 1000
}else Goto, Done5
Goto, Printing5
Done5:
MouseClick, left, 51,99
sleep,500
MouseMove, 142,222
sleep,3000
Printing6:
if WinExist("Printing")
{
Sleep, 1000
}else Goto, Done6
Goto, Printing6
Done6:
MouseClick, left, 368,273
sleep,500
MouseClick, left, 121,54
sleep,500
MouseClick, left, 179,136
sleep, 500
MouseClick, left, 211,48
sleep, 5000


MsgBox , 1 , Insert label paper into printer
IfMsgBox, OK
{
sleep,500
MouseClick, left, 29 ,99
sleep,500
MouseClick, left, 114,454
sleep,500
MouseClick, left, 112,49
sleep,500
MouseClick, left, 22,224
sleep,500
MouseClick, left, 25,277
sleep,500
MouseClick, left, 189,155
sleep,500
MouseClick, left, 217,55 
}
exit

^+P::


   

/*	simple javascript string concatenation object*/outlets = 3;// set up inlets/outlets/assist stringssetinletassist(0,"join");setoutletassist(2,"no ext string (symbol)");setoutletassist(1,"ext string (symbol)");setoutletassist(0,"name string (symbol)");// global varables and codevar vRootNoteArray = new Array();var vBaseNoteArray = new Array();var vCode3Array = new Array();function init(){	vRootNoteArray =	new Array(		     "C"/*,"C#",		"Db","D","D#",		"Eb","E",		     "F","F#",		"Gb","G","G#",		"Ab","A",		"Bb","B"*/	);	vCode3Array =	new Array(		     "","m",		"aug","dim","sus4"," omit3","(b5)",		"M7","m7","7","m7b5","7sus4",		"dim7","mM7"	);	vBaseNoteArray =	new Array(		     "",                "/C","/C#",		"/Db","/D","/D#",		"/Eb","/E",		      "/F","/F#",		"/Gb","/G","/G#",		"/Ab","/A",		"/Bb","/B"	);}function anything(){	var RootNote = Math.floor(Math.random()*vRootNoteArray.length);	var ThirdNote = Math.floor(Math.random()*vCode3Array.length);	var onBaseNote = Math.floor(Math.random()*vBaseNoteArray.length);	outlet(0,		vRootNoteArray[RootNote] + 		vCode3Array[ThirdNote] +		vBaseNoteArray[onBaseNote]	);}function clear(){	vStrArray = new Array();	outlet(2,vStrArray.length);}function add(a){	if (arguments.length==0){			}	else 	{		var hit = 0;				for(var i = 0;i < vStrArray.length; i++){						if(vStrArray[i] == a){					hit = 1;				break;			}		}		if(hit == 0){					vStrArray.push(a);			outlet(2,vStrArray.length);		}			}}function randomGet(){	if(vStrArray.length > 0){		var i = Math.floor(Math.random()*vStrArray.length);		outlet(0,vStrArray[i]);		}	}function length(){	outlet(2,vStrArray.length);}function dump(){	for(var i = 0;i < vStrArray.length; i++){		outlet(1,vStrArray[i]);		}}
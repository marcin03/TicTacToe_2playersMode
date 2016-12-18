//alert("ok");
var currentSign="X";
var anybodyWin=false;
function change( el ){
	document.getElementById("p1").innerHTML =("Insert "+currentSign+" into empty field." )
	if (el.value==" "){
		if (currentSign==="X")
			currentSign="O";
		else 
			currentSign="X";
	}
    if ( el.value === " ")
        el.value = currentSign;
	checkWinning();
}
function btnPlayAgain() {
	if (anybodyWin){
		location.reload();
	}
	else {
		if(confirm('Are you sure you want to end current game and start again?')) {
		location.reload();
		} 
	}
}
	function checkWinning(){
	var v1=document.getElementById("b1").value, v2=document.getElementById("b2").value, v3=document.getElementById("b3").value,
	v4=document.getElementById("b4").value, v5=document.getElementById("b5").value, v6=document.getElementById("b6").value,
	v7=document.getElementById("b7").value, v8=document.getElementById("b8").value, v9=document.getElementById("b9").value;
	if (v1==v2 && v1==v3 && v1!=" "){
		alert("Winner: "+ v1);
		document.getElementById("p1").innerHTML =("The Winner is "+v1);
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		anybodyWin=true;
	}
	else if(v1==v4 && v1==v7 && v1!=" "){
		alert("Winner: "+ v1);
		document.getElementById("p1").innerHTML =("The Winner is "+v1);
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		anybodyWin=true;
	}
	else if(v9==v8 && v9==v7 && v9!=" "){
		alert("Winner: "+ v9);
		document.getElementById("p1").innerHTML =("The Winner is "+v9);
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		anybodyWin=true;		
	}
	else if(v9==v6 && v9==v3 && v9!=" "){
		alert("Winner: "+ v9);
		document.getElementById("p1").innerHTML =("The Winner is "+v9);
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;	
		anybodyWin=true;
	}
	else if(v5==v1 && v5==v9 && v5!=" "){
		alert("Winner: "+ v5);
		document.getElementById("p1").innerHTML =("The Winner is "+v5);
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;	
		anybodyWin=true;
	}
	else if(v5==v3 && v5==v7 && v5!=" "){
		alert("Winner: "+ v5);
		document.getElementById("p1").innerHTML =("The Winner is "+v5);
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;	
		anybodyWin=true;
	}
	else if(v5==v2 && v5==v8 && v5!=" "){
		alert("Winner: "+ v5);
		document.getElementById("p1").innerHTML =("The Winner is "+v5);
		document.getElementById("b1").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b9").disabled = true;	
		anybodyWin=true;
	}
	else if(v5==v4 && v5==v6 && v5!=" "){
		alert("Winner: "+ v5);
		document.getElementById("p1").innerHTML =("The Winner is "+v5);
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;	
		anybodyWin=true;
	}
	else if(v1!=" "&&v2!=" "&&v3!=" "&&v4!=" "&&v5!=" "&&v6!=" "&&v7!=" "&&v8!=" "&&v9!=" "){
		alert("Draw!");
		document.getElementById("p1").innerHTML =("The DRAW");
		anybodyWin=true;
	}
}

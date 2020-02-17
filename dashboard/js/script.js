
// model
// Get the modal
function osbd(){
	document.getElementById('myModal').style.display = "block";
}
function osbdoff(){
	document.getElementById('myModal').style.display = "none";
}
// model 2
function vbd(){
	document.getElementById('myModal1').style.display = "block";
}
function vbdoff(){
	document.getElementById('myModal1').style.display = "none";
}
// model 3
function nrv(){
	document.getElementById('myModal2').style.display = "block";
}
function nrvoff(){
	document.getElementById('myModal2').style.display = "none";
}
// model 4
function dvbd(){
	document.getElementById('myModal3').style.display = "block";
}
function dvbdoff(){
	document.getElementById('myModal3').style.display = "none";
}
// model 5
function dvbtod(){
	document.getElementById('myModal4').style.display = "block";
}
function dvbtodoff(){
	document.getElementById('myModal4').style.display = "none";
}
// model 6
function hvbd(){
	document.getElementById('myModal5').style.display = "block";
}
function hvbdoff(){
	document.getElementById('myModal5').style.display = "none";
}
// model 7
function dwv(){
	document.getElementById('myModal6').style.display = "block";
}
function dwvoff(){
	document.getElementById('myModal6').style.display = "none";
}
// model 7
function vbg(){
	document.getElementById('myModal7').style.display = "block";
}
function vbgoff(){
	document.getElementById('myModal7').style.display = "none";
}

function vbag(){
	document.getElementById('myModal8').style.display = "block";
}

function vbagoff(){
	document.getElementById('myModal8').style.display = "none";
}






// model end
// dynamic arrow values increased and decreased

// window.onload = function(){
// var a = 20;
		
// 	if(a > 10){
// 		document.getElementById('conditionals1').style.display = "block";
// 		document.getElementById('conditionals3').style.display = "block";
// 		document.getElementById('conditionals5').style.display = "block";
// 		document.getElementById('conditionals7').style.display = "block";
// 		document.getElementById('conditionals9').style.display = "block";
// 		document.getElementByClassName('growths').style.color = "green";
		

// 			}
// 	else{
// 		document.getElementById('conditionals').style.display = "block";
// 		document.getElementById('conditionals2').style.display = "block";
// 		document.getElementById('conditionals4').style.display = "block";
// 		document.getElementById('conditionals6').style.display = "block";
// 		document.getElementById('conditionals8').style.display = "block";
// 		document.getElementByClassName('decreases').style.color = "#B22222";
// 		}
	
// };



function optionsbd(){
	var startdate = $('#vstartdate').val();
	var enddate = $('#venddate').val();
	// load();
	window.location.href = './reports/osbd.html';
	
	return false;
	}
	function visitorbd(){
	var startdate = $('#vastartdate').val();
	var enddate = $('#vaenddate').val();
	// load();
	window.location.href = './reports/vbd.html';
	
	return false;
	}

function newandrv(){
	var startdate = $('#vbstartdate').val();
	var enddate = $('#vbenddate').val();
	// load();
	window.location.href = './reports/narv.html';
	
	return false;
	}
	function dailyvbd(){
	var startdate = $('#vcstartdate').val();
	var enddate = $('#vcenddate').val();
	// load();
	window.location.href = './reports/dvbd.html';
	
	return false;
	}

function dailyvbtod(){
	var startdate = $('#vdstartdate').val();
	var enddate = $('#vdenddate').val();
	// load();
	window.location.href = './reports/dvbtod.html';
	
	return false;
	}

function hourlyvbd(){
	var startdate = $('#vestartdate').val();
	var enddate = $('#veenddate').val();
	// load();
	window.location.href = './reports/hvbd.html';
	
	return false;
	}

	function daywv(){
	var startdate = $('#vfstartdate').val();
	var enddate = $('#vfenddate').val();
	// load();
	window.location.href = './reports/dwv.html';
	
	return false;
	}

	function visitorsbg(){
	var startdate = $('#vgstartdate').val();
	var enddate = $('#vgenddate').val();
	// load();
	window.location.href = './reports/vbg.html';
	
	return false;
	}

function visitorsbag(){
	var startdate = $('#vgstartdate').val();
	var enddate = $('#vgenddate').val();
	// load();
	window.location.href = './reports/vbag.html';
	
	return false;
}


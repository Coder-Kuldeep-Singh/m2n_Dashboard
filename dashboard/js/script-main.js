//jquery
$(document).click(function(){
	if($('.navbar-collapse').hasClass('in')){ 
	 $("button.navbar-toggle").click(); 
	}
});

$('.dropdown-toggle').click(function(){
	$(this).toggleClass('li-active');	
});


/*----------------Null-------------------*/
function blank(none)
{
	var non = $('#'+none).val();
	if(non == "")
	{
	$('#'+none).css("border", "solid 2px red");	 
	$('#'+none).parent().find('span').removeClass('hidden');
	return false;
	}
	else{
		$('#'+none).css("border", "solid 1px rgba(128, 128, 128, 0.65)");
	$('#'+none).parent().find('span').addClass('hidden');

		return true;}
}

/* cptcha*/
function checkcaptcha(){
	var recaptcha = $("#g-recaptcha-response").val();
   if (recaptcha === "") {
      alert("Please check the recaptcha");
		return false;}
	else{return true;}
} 

/*----------------comp name---------------*/
function company(nam)
{
	var nam = nam;
 var name = $('#'+nam).val();
 var regex = /^[a-zA-Z0-9]{1}[a-zA-Z0-9 ,.-]*$/;
 if(name == "")
	{
	$('#'+nam).css("border", "solid 2px red");	 
	$('#'+nam).parent().find('span').removeClass('hidden');
	return false;
	}
 if(!(name.indexOf('..') > -1) && !(name.indexOf('  ') > -1) && !(name.indexOf('--') > -1) && regex.test(name))
{
	$('#'+nam).css("border", "solid 1px rgba(128, 128, 128, 0.65)");
	$('#'+nam).parent().find('span').addClass('hidden');
	return true;
}
else{
	
	$('#'+nam).css("border", "solid 2px red");	
	$('#'+nam).parent().find('span').removeClass('hidden');
	return false;
	}
}
/*----------------Name-------------------*/
function fnname(evt1)
{
 var nam = evt1;
 var name = $('#'+nam).val();
 var leng = name.length;
 var regex = /^[a-zA-Z]{2}[a-zA-Z ,.-]*$/;
 var regex1=/^[a-zA-Z]*$/;
 if(leng<= 1 && regex1.test(name))
 {
	$('#'+nam).css("border", "solid 2px red");	 
	$('#'+nam).parent().find('span').removeClass('hidden');
	return false;
 }

 if(!(name.indexOf('..') > -1) && !(name.indexOf('  ') > -1) && !(name.indexOf('--') > -1) && regex.test(name))
{
	$('#'+nam).css("border", "solid 1px rgba(128, 128, 128, 0.65)");
	$('#'+nam).parent().find('span').addClass('hidden');
	return true;
}
else{
	
	$('#'+nam).css("border", "solid 2px red");	
	$('#'+nam).parent().find('span').removeClass('hidden');
	return false;
	}
}

/*------------ Mobile -------------*/
function validmobile(mob)
{   
	var mobile = mob;
	var number = $('#'+mobile).val();
	if(number == "")
	{
	$('#'+mobile).css("border", "solid 2px red");	 
	$('#'+mobile).parent().find('span').removeClass('hidden');
	return false;
	}
	if(! /^[+0-9]{1}[0-9]{7}[0-9]*$/.test(number))
	{
		$('#'+mobile).css("border", "solid 2px red");
		$('#'+mobile).parent().find('span').removeClass('hidden');
		return false;
	}
	else{
	$('#'+mobile).css("border", "solid 1px rgba(128, 128, 128, 0.65)");
	$('#'+mobile).parent().find('span').addClass('hidden');
	return true;}
}

/*-------------- Email -------------*/
function email(mail)
{
	var mail = mail;
	var emailid= $('#'+mail).val();
	if(emailid == "")
	{
		$('#'+mail).css("border", "solid 2px red");
		$('#'+mail).parent().find('span').removeClass('hidden');
				return false;
	}
	if(! /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(emailid))
	{
		$('#'+mail).css("border", "solid 2px red");
		$('#'+mail).parent().find('span').removeClass('hidden');
				return false;
	}
	else{
	$('#'+mail).css("border", "solid 1px rgba(128, 128, 128, 0.65)");
	$('#'+mail).parent().find('span').addClass('hidden');
	return true;}
}
/*-------------Form Dropdowns----------------*/
function drop(dropval)
{
var selectedText = $("#"+dropval+" option:selected").html();
	if(selectedText == "Select")
	{
		$('#'+dropval).css("border", "solid 2px red");
		$('#'+dropval).parent().find('span').removeClass('hidden');
		return false;
	}
	else{
	$('#'+dropval).css("border", "solid 1px rgba(128, 128, 128, 0.65)");
	$('#'+dropval).parent().find('span').addClass('hidden');
	return true;}
}

/* download csv function*/
// $('#download').on('click',function(){
//    $('.dataframe').table2csv({
//      file_name: 'Options Served by Device.csv',
//      header_body_space: 0
//    });
 // })
//  download csv
function downloadcsv(getid, fileName){

    $(getid).find('table').table2csv({
      file_name: fileName+".csv",
      header_body_space: 0
    });
}
//  download csv
// $('#download_critical').on('click',function(){
//    $('.dataframe').table2csv({
//      file_name: 'critical.csv',
//      header_body_space: 0
//    });
//  })

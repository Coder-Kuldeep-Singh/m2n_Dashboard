/*/*/*/*-----------Form Validation----------------------*/

/*----------- Blank---------------------------*/
function input_blank(inputid)
   {
	$(inputid).next().next('span').text('This field is required.');
	$(inputid).addClass('input-error');
	$(inputid).next().next().css({'color':'red','visibility':'visible'});
	return false;
   }
   
// function validchar(validid)
// {
// 	$(validid).next().next('span').text('Use valid characters');
// 	$(validid).addClass('input-error');
// 	$(validid).next('label').addClass('error-line');
// 	$(validid).next().next().css({'color':'red','visibility':'visible'});
// }


/*--------- normalstate ---------------------*/
// function normalstate(normalstateid)
// {
// 	$(normalstateid).next().next('span').text('');
// 	$(normalstateid).removeClass('input-error');
// 	$(normalstateid).next('label').removeClass('error-line');
// }   
 
// function normalstateall(formid)
// {
// 	$(formid).find('div').removeClass('is-dirty');
// 	$(formid).find('.mdl-chip').remove();
// 	$(formid).find('.mdl-checkbox').removeClass('is-checked');
// 	$(formid).find('#timepicker').find('input').prop('disabled', true);
// 	$(formid).find('.mdl-textfield__label').next('span').text('');
// 	$(formid).find('div').find('input').removeClass('input-error');
// 	$(formid).find('div').find('select').removeClass('input-error');
// 	$(formid).find('div').find('label').removeClass('error-line');
// } 
/*--------- input on focus -----------------*/
// $(document).ready(function (){
// $( "input" ).focus(function() {
// 	  	input_id = '#'+$(this).attr('id');
// 		input_val = $(this).val();
// 		if(!input_val){
// 			normalstate(input_id);
// 		}
// 		else{$(input_id).next().next('span').text('');}
// });
// });
/*--------- username -----------*/
function uname(userid)
{
	var userval = $(userid).val();
	var regex = /^[a-zA-Z]{1}[a-zA-Z0-9@_.]*$/; 
	if(!regex.test(userval))
	{validchar(userid); return false;}
	else{normalstate(userid);}
	if(userval == ''){normalstate(userid);}
}
/*--------- password ------------------------*/
function pass(passid)
{
	var passval = $(passid).val();
	var regex = /^[a-zA-Z0-9]{1}[a-zA-Z0-9_@#$%^&*-]*$/;
	if(!regex.test(passval))
	{validchar(passid);}
	else if(passval.length < 8)
	{validchar(passid);$(passid).next().next('span').text('Atleast 8 degits required'); return false;}
	else{normalstate(passid);}
	if(passval == ''){normalstate(passid);}
}
/*---------- name ----------------------*/
function namecheck(name_id)
{
	var nameval = $(name_id).val();
	var regex = /^[a-zA-Z]{1}[a-zA-Z ,.-]{2}[a-zA-Z ,.-]*$/;
	if(nameval==''){normalstate(name_id);
		alert('macthed');
	}
 if(!regex.test(nameval))
	{validchar(name_id); return false;}
	else{normalstate(name_id);}
}
/*---------------- places ----------------*/
function places(placeid)
{
	var placesval= $(placeid).val();
	var regex = /^[a-zA-Z]{1}[a-zA-Z0-9]*$/;
	if(! regex.test(placesval))
	{validchar(placeid); return false;}
	else{normalstate(placeid);}
	if(placesval == ''){normalstate(placeid);}
}

/*---------------- Email ----------------*/
function emailvalid(mail)
{
"use strict";
var emailid= $(mail).val();
var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
if(! regex.test(emailid))
{validchar(mail); return false;}
else{normalstate(mail);}
if(emailid == ''){normalstate(mail);}
}

/*---------------- Contact ----------------*/
function contact1(contactid)
{
	var contactval= $(contactid).val();
	var regex = /^[0-9]*$/;
	if(! regex.test(contactval))
	{validchar(contactid); $(contactid).next().next('span').text('Input only numbers'); return false;}
else{normalstate(contactid);}
if(contactval == ''){normalstate(contactid);}
}

/*---------------- Location ----------------*/
function location1(locationid)
{
	var locationval= $(locationid).val();
	var regex = /^[a-zA-Z0-9]{1}[a-zA-Z0-9 ,-.]*$/;
	if(! regex.test(locationval))
	{validchar(locationid); return false;}
	else{normalstate(locationid);}
	if(locationval == ''){normalstate(locationid);}
}


/*----------------Web Url-------------------*/
function linq(url1)
{
"use strict";
 var comp_url= $(url1).val();
if(! /^(http|https|ftp):\/\/|[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,3}(:[0-9]{1,5})?(\/.*)?$/.test(comp_url))
{validchar(url1); $(url1).next().next('span').text('Input valid url'); return false;}
else{normalstate(url1);}
if(comp_url == ''){normalstate(url1);}
}

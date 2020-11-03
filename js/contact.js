$(document).ready(function() {


$("#form").validate({


rules:
{

fname:"required",



Email {

required:true,
email:true, 

}
}



messages:{

firstname:"please enter your name",
Email{
required:"input email",

}


}




});








});
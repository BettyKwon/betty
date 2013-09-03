// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


// teachers/registrations/new
function teacher_signup()
{
	$("#teacher_email").val($("#email_1").val() + "@snu.ac.kr");
	$("#teacher_phone_number").val($("#phone_number_1").val() + $("#phone_number_2").val() + $("#phone_number_3").val());
}

// students/registrations/new
function student_signup()
{
	$("#student_phone_number").val($("#phone_number_1").val() + $("#phone_number_2").val() + $("#phone_number_3").val());
	$("#student_parents_phone").val($("#parents_phone_1").val() + $("#parents_phone_2").val() + $("#parents_phone_3").val());
}

// get params via javascript
var vars = [], hash;
    var q = document.URL.split('?')[1];
    if(q != undefined){
        q = q.split('&');
        for(var i = 0; i < q.length; i++){
            hash = q[i].split('=');
            vars.push(hash[1]);
            vars[hash[0]] = hash[1];
        }
}
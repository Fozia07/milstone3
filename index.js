var htmlForm = document.getElementById("resume-build");
var displayResume = document.getElementById("resume_display");
var dropArea = document.getElementById("drop-area");
var inputFile = document.getElementById("input-file");
var imageView = document.getElementById("image-view");
// /for submition 
htmlForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var Name = document.getElementById('name').value;
    var phone = document.getElementById('phoneNo').value;
    var Email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var skill = document.getElementById('skill').value;
    var experiance = document.getElementById('experiance').value;
    //gernated resume to fill by input
    var resumeHtml = "\n      <h2><b>Resume<b></h2>\n      <h3>Personal Information</h3>\n      <p><b>Name:</b>".concat(Name, "</p>\n      <p><b>phone:</b>").concat(phone, "</p>\n      <p><b>email:</b>").concat(Email, "</p>\n      \n      <h2>Education</h2>\n      <p>").concat(education, "</p>\n\n      <h3>Skill</h3>\n      <p>").concat(skill, "</p>\n\n      <h3>Experiance</h3>\n      <p>").concat(experiance, "</p>");
    //display resume
    if (displayResume) {
        displayResume.innerHTML = resumeHtml;
    }
    else {
        console.error('The resume display  requirement is missing');
    }
});

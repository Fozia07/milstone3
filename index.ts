//import html element

var htmlForm=document.getElementById("resume-build")as HTMLFormElement;
var displayResume=document.getElementById("resume_display")as HTMLDivElement;
const dropArea=document.getElementById("drop-area")
const inputFile=document.getElementById("input-file");
const imageView=document.getElementById("image-view");

// /for submition 
      htmlForm.addEventListener('submit', (event:Event)=>{
       event.preventDefault()
     
    
      
      const Name=(document.getElementById('name')as HTMLInputElement).value;
      const phone=(document.getElementById('phoneNo')as HTMLInputElement).value;
      const Email=(document.getElementById('email')as HTMLInputElement).value;
      const education=(document.getElementById('education')as HTMLInputElement).value;
      const skill=(document.getElementById('skill')as HTMLInputElement).value;
      const experiance=(document.getElementById('experiance')as HTMLInputElement).value;
      
      //gernated resume to fill by input
      const resumeHtml=`
      <h2><b>Resume<b></h2>
      <h3>Personal Information</h3>
      <p><b>Name:</b>${Name}</p>
      <p><b>phone:</b>${phone}</p>
      <p><b>email:</b>${Email}</p>
      
      <h2>Education</h2>
      <p>${education}</p>

      <h3>Skill</h3>
      <p>${skill}</p>

      <h3>Experiance</h3>
      <p>${experiance}</p>`;

      //display resume
      if(displayResume){
        displayResume.innerHTML=resumeHtml
      }
      else{
        console.error('The resume display  requirement is missing')
      }
})
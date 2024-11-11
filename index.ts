
     // Get input values
      const formPage=document.getElementById("formPage") as HTMLFormElement;
      const resumePage=document.getElementById("resumePage") as HTMLElement;
      const resumePhoto=document.getElementById("resumePhoto") as HTMLImageElement;
      const resumeName = document.getElementById("resumeName") as HTMLHeadingElement;
      const resumePhone =document.getElementById("resumePhone") as HTMLParagraphElement;
      const resumeEmail = document.getElementById("resumeEmail") as HTMLParagraphElement;
      const resumeEducation = document.getElementById("resumeEducation") as HTMLParagraphElement
      const resumeSkill = document.getElementById("resumeSkill") as HTMLParagraphElement;
      const resumeExperience = document.getElementById("resumeExperience") as HTMLParagraphElement;
      const backButton=document.getElementById("backButton") as HTMLButtonElement;
      const resumeContent=document.getElementById("resumeContent") as HTMLDivElement;
      
    formPage.addEventListener("submit",async (event:Event) => {
      event.preventDefault()  
     
      const name=(document.getElementById("name") as HTMLInputElement).value;
      const phoneNo=(document.getElementById("phoneNo") as HTMLInputElement).value;
      const email=(document.getElementById("email") as HTMLInputElement).value;
      const education=(document.getElementById("education") as HTMLTextAreaElement).value;
      const skill=(document.getElementById("skill") as HTMLTextAreaElement).value;
      const experience=(document.getElementById("experience") as HTMLTextAreaElement).value;
      const photoInput = document.getElementById("photo") as HTMLInputElement

      const photofile =photoInput.files? photoInput.files[0]:null;

      let photoBase64 =''
      if(photofile){
        photoBase64 =await fileToBase64(photofile);
        localStorage.setItem("resumePhoto" ,photoBase64)
        resumePhoto.src =photoBase64;


      }
      // Update resume content
    document.getElementById("resumeName")!.textContent = name;
    document.getElementById("resumePhone")!.textContent = `Phone: ${phoneNo}`;
    document.getElementById("resumeEmail")!.textContent = `Email: ${email}`;
    document.getElementById("resumeEducation")!.textContent = education;
    document.getElementById("resumeSkill")!.textContent = skill;
    document.getElementById("resumeExperience")!.textContent = experience;

    
     // Switch to resume page
     formPage.classList.add("hidden");
     resumePage.classList.remove("hidden");
    
   

    });

    function fileToBase64(file:File):Promise<string>{
         return new Promise((resolve,reject)=>{
           const reader= new FileReader();

           reader.onloadend=()=>resolve(
            reader.result as string
           )
           reader.onerror= reject;
           reader.readAsDataURL(file);

         })
    }


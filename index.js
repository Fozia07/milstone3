"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Get input values
const formPage = document.getElementById("formPage");
const resumePage = document.getElementById("resumePage");
const resumePhoto = document.getElementById("resumePhoto");
const resumeName = document.getElementById("resumeName");
const resumePhone = document.getElementById("resumePhone");
const resumeEmail = document.getElementById("resumeEmail");
const resumeEducation = document.getElementById("resumeEducation");
const resumeSkill = document.getElementById("resumeSkill");
const resumeExperience = document.getElementById("resumeExperience");
const backButton = document.getElementById("backButton");
const resumeContent = document.getElementById("resumeContent");
formPage.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const phoneNo = document.getElementById("phoneNo").value;
    const email = document.getElementById("email").value;
    const education = document.getElementById("education").value;
    const skill = document.getElementById("skill").value;
    const experience = document.getElementById("experience").value;
    const photoInput = document.getElementById("photo");
    const photofile = photoInput.files ? photoInput.files[0] : null;
    let photoBase64 = '';
    if (photofile) {
        photoBase64 = yield fileToBase64(photofile);
        localStorage.setItem("resumePhoto", photoBase64);
        resumePhoto.src = photoBase64;
    }
    // Update resume content
    document.getElementById("resumeName").textContent = name;
    document.getElementById("resumePhone").textContent = `Phone: ${phoneNo}`;
    document.getElementById("resumeEmail").textContent = `Email: ${email}`;
    document.getElementById("resumeEducation").textContent = education;
    document.getElementById("resumeSkill").textContent = skill;
    document.getElementById("resumeExperience").textContent = experience;
    // Switch to resume page
    // Switch to resume page
    formPage.classList.add("hidden");
    resumePage.classList.remove("hidden");
    // document.getElementById("container")?.classList.add("hidden");
    // resumePage.classList.remove("hidden");
}));
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

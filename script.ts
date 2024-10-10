
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeContent = document.getElementById("resume-content") as HTMLDivElement;
const resumePreview = document.getElementById("resume-preview") as HTMLDivElement;


form.addEventListener("submit", (event: SubmitEvent): void => {
  event.preventDefault();

  
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const education = (document.getElementById("education") as HTMLTextAreaElement).value;
  const work = (document.getElementById("work") as HTMLTextAreaElement).value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value;

 
  const resumeHTML = `
    <div class="glowing-box">
      <h3>${name}</h3>
      <p><strong>Email:</strong> ${email}</p>
    </div>
    <div class="glowing-box">
      <h3>Education</h3>
      <p>${education}</p>
    </div>
    <div class="glowing-box">
      <h3>Work Experience</h3>
      <p>${work}</p>
    </div>
    <div class="glowing-box">
      <h3>Skills</h3>
      <p>${skills}</p>
  `;

  
  resumeContent.innerHTML = resumeHTML;
  resumePreview.style.display = "block"; 
});
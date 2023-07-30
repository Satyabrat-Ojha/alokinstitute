const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector("#submit-btn");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

const publicKey = "ZQcQZNl6UbrsbvSn3";
const serviceId = "service_0ktohme";
const templateId = "template_rl3k6em";

emailjs.init(publicKey);

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  submitBtn.innerText = "Sending...";
  const inputFields = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };
});

emailjs.send(serviceId, templateId, inputFields).then(
  () => {
    submitBtn.innerText = "Sent Successfully";
    contactForm.reset();
  },
  (error) => {
    console.log(error);
    submitBtn.innerText("Something went wrong");
  }
);

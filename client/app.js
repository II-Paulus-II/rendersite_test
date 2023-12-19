console.log ("987asoca012");

// Call my api

const myApi = "https://testrenderserver.onrender.com/message";

async function getMessage() {
  const response = await fetch(myApi);

  const meMessage = await response.json();

  const p = document.getElementById("message");
  p.textContent = meMessage.message; //message is the value inside the object returned.
}

getMessage();

const messageForm = document.querySelector("#messageForm");

function handleSubmitMessageForm(event) {
  event.preventDefault();
  console.log("Form submitted!");
  // do something with the form data here
  const formData = new FormData(messageForm);
  const message = formData.get("message");

  const myFormResponse = await fetch(myApi, {
    method: "POST", // This is where we set the POST HTTP verb
    headers: {
      "Content-Type": "application/json", // This tells the server we're sending stringified JSON data
    },
    body: JSON.stringify({ message }),
  });
  console.log(myFormResponse);
}

messageForm.addEventListener("submit", handleSubmitMessageForm);

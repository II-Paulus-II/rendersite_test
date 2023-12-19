console.log ("987asoca012");

// Call my api

const myApi = "https://testrenderserver.onrender.com/message";

async function getMessage() {
  const response = await fetch(myApi);
  console.log(response);

  const meMessage = await response.json();
  console.log(meMessage);

  const p = document.getElementById("message");
  p.textContent = meMessage.message; //message is the value inside the object returned.
}

getMessage();

const messageForm = document.querySelector("#messageForm");

async function handleSubmitMessageForm(event) {
  event.preventDefault();
  console.log("Form submitted!");
  // do something with the form data here
  const formData = new FormData(messageForm);
  const message = formData.get("message");
  
  //response stuff
  const myFormResponse = await fetch(myApi, {
    method: "POST", // This is where we set the POST HTTP verb
    headers: {
      "Content-Type": "application/json", // This tells the server we're sending stringified JSON data
    },
    body: JSON.stringify({ message }),
  });

  const reply = await myFormResponse.json();

  console.log(reply.message);
}

messageForm.addEventListener("submit", handleSubmitMessageForm);

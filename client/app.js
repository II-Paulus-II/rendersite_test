console.log ("987asoca012");

// Call my api

const myApi = "http://localhost:8080/message";

async function getMessage() {
  const response = await fetch(myApi);

  const meMessage = await response.json();

  const p = document.getElementById("message");
  p.textContent = meMessage.message; //message is the value inside the object returned.
}

getMessage();
const reviewBtn = document.getElementById("reviewBtn");
const codeInput = document.getElementById("codeInput");
const output = document.getElementById("output");
const statusText = document.getElementById("status");

reviewBtn.addEventListener("click", async () => {
  const code = codeInput.value.trim();

  if (!code) {
    alert("Please enter some JavaScript code");
    return;
  }

  reviewBtn.disabled = true;
  statusText.textContent = "Reviewing...";
  output.textContent = "";

  try {
    const res = await fetch("http://localhost:3002/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ code })
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Request failed");
    }

    output.textContent = data.response;
    statusText.textContent = "Done";
  } catch (err) {
    statusText.textContent = "Error";
    output.textContent = err.message;
  } finally {
    reviewBtn.disabled = false;
  }
});

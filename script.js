
document.getElementById("myBtn").addEventListener("click", function (e) {
    e.preventDefault(); // prevent reload

    let emailInputEl = document.getElementById("email");
    let emailInput = emailInputEl.value.trim();
    let errorMsg = document.getElementById("error-message");

    // Simple regex for email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailPattern.test(emailInput) || emailInput === "") {
      // Show error if invalid
      errorMsg.classList.remove("hidden");
      emailInputEl.classList.add("border-red-700", "bg-red-100", "text-red-700");

      // Hide error after 3 seconds and clear input
      setTimeout(function() {
        errorMsg.classList.add("hidden");
        emailInputEl.classList.remove("border-red-700", "bg-red-100", "text-red-700");
        emailInputEl.value = ""; // Clear the input
      }, 3000);
    } else {
      // Hide error and go to success page
      errorMsg.classList.add("hidden");
      emailInputEl.classList.remove("border-red-700", "bg-red-100", "text-red-700");
      window.location.href = "./success.html";
    }
  });




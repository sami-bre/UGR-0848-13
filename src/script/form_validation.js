function main() {
  const email_field = document.querySelector("#email-field");
  const message_field = document.querySelector("#message-field");
  const error_div = document.querySelector("#error");
  const form = document.querySelector("#form");
  // email_field.value = "example@example.com"
  // console.log(email_field)
  // console.log(message_field)
  // console.log(error_div)
//   console.log(form)

  form.addEventListener("submit", (e) => {
    const error_messages = [];  

    const email = email_field.value;
    const message = message_field.value;

    // first, let's clear the error message division (in case it has something)
    error_div.innerHTML = "";

    if (email == "" || email == null) {
      error_messages.push("Email must not be empity");
    } else {
        // the following is a regex for falidating emails.
        const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if(!re.test(email)) {
            error_messages.push("Email must have a correct format")
        }
    }

    if(message == "" || message == null) {
        error_messages.push("Message must not be empity")
    }

    if (error_messages.length > 0) {
      e.preventDefault();
      for(const message of error_messages) {
        error_div.innerHTML += `<span class="error__message">${message}</span>`
      }
    }
  });
}

main();

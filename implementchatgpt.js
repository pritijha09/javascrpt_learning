//function to validate email with regex
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//write a function to validate USA mobile number
function validateUSAMobileNumber(number) {
    const regex = /^\+1\d{10}$/;
    return regex.test(number);
  }

  console.log(validateEmail('priti@gmail.com'))

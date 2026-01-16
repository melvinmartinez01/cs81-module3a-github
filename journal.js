//Greet user by name
function greet(name) {
  return "Hello, " + name + "!";
}

//Ask user how their day is by using if and then function
function howWasYourDay(response) {
  if (response === "good") {
    return "I'm glad you had a good day!";
  } else if (response === "okay") {
    return "Well, it could be worse. At least you're alive!";
  } else if (response === "bad") {
    return "Dang, I'm sorry man. Do me a favor? Go hug your daughter.";
  } else {
    return "You good bro? Okay? Or is it a bad day?";
  }
}

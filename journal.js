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


//Create a grocery reminder list
function groceryRemindList() {
  const groceries = [
    "milk",
    "beef",
    "chicken",
    "yogurt",
    "diapers",
    "q tips",
    "shampoo",
    "sparkling beverages"
  ];

  return "Grocery list: " + groceries.join(", ");
}

//Percentage score to letter grade function
function calculateGrade(score) {
  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80 && score < 90) {
    return "B";
  } else if (score >= 70 && score < 80) {
    return "C";
  } else if (score >= 60 && score < 70) {
    return "D";
  } else if (score >= 0 && score < 60) {
    return "F";
  } else {
    return "Invalid score. Please enter a number between 0 and 100.";
  }
}

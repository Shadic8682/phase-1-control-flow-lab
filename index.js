function scuberGreetingForFeet(greeting){
  if (greeting <= 400) {
    greeting = "This one is on me!"
    return greeting
  } else if (greeting <= 2000) {
    greeting = "That will be twenty bucks."
    return greeting
  } else if (greeting <= 2499) {
    greeting = "I will gladly take your thirty bucks."
    return greeting
  } else if (greeting >= 2500) {
    greeting = "No can do."
    return greeting
  }
}

function ternaryCheckCity(city){
  const response = city === "NYC" ? "Ok, sounds good." : "No go."
  return response
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case tip = "generous":
      var charm = "Thank you so much."
      return charm;
    case tip = "not as generous":
      var charm = "Thank you."
      return charm;

    default:
      var charm = "Bye."
      return charm;
      break;
  }
}
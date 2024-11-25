//Example 1
//fuction point to current context and window poin to glabal this

document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let para = document.getElementById("myParagraph");
    para.textContent = "The paragraph id changed";
  });

//Example 2  - Traverse the Dom

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citilist = document.getElementById("citiesList");
    citilist.firstElementChild.classList.add("highlight");
  });

//Example 3 Manipulating DOM element

document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeeType");
  coffeeType.textContent = "ECPRESSO";
  coffeeType.style.backgroundColor = "Red";
  coffeeType.style.padding = "5px";
});

//Example 4 -- adding content
document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";

  document.getElementById("shoppingList").appendChild(newItem);
});

//Example 5  - Removing DOM element

document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let tasklist = document.getElementById("taskList");
    tasklist.firstElementChild.remove();
  });

//Example 6  = Event Handling

document.getElementById("clickMeButton").addEventListener("click", function () {
  alert("chaicode");
});

//EXAMPLE 7 --Event Delegation if there is same classes

document.getElementById("teaList").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaItem")) {
    alert("You selected:" + event.target.textContent);
  }
});

//Example 8 = Submit Form Handling

document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById(
      "feedbackDisplay"
    ).textContent = `Feedback is ${feedback}`;
  });

// DOM Content Loaded

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "Dom Fully loaded";
});

// Example 10: CSS Classes Manipulation (toggle) - i used to apply remove highlight here 

document
  .getElementById("toggleHighlight")
  .addEventListener("click", function (event) {
    let description = document.getElementById("descriptionText");
    description.classList.toggle("highlight");
  });

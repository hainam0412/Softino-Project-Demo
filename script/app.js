//Get navigation element

const navBurger = document.querySelector(".nav__burger-button");
const navLinks = document.querySelector(".nav__links");

navBurger.addEventListener("click", showNav);

//Show navigation bar on click

function showNav() {
  if (!navLinks.classList.contains("nav__links-show")) {
    navLinks.classList.add("nav__links-show");
    navBurger.classList.add("nav__burger-button-clicked");
  } else {
    navLinks.classList.remove("nav__links-show");
    navBurger.classList.remove("nav__burger-button-clicked");
  }
}

if (window.innerWidth < 992) {
  const navLinksList = document.querySelectorAll(".nav__link");

  for (let i = 0; i < navLinksList.length; i++) {
    let link = navLinksList[i];

    link.classList.remove("nav__link-hover");
  }
}

const dropDownButtons = document.querySelectorAll(".dropdown-btn");

for (let i = 0; i < dropDownButtons.length; i++) {
  let button = dropDownButtons[i];

  button.addEventListener("click", showSubMenu);
}

function showSubMenu(e) {
  let button = e.target;

  let link = button.parentElement.parentElement;

  let subMenu = link.querySelector(".sub-menu");

  if (!subMenu.classList.contains("sub-menu-show")) {
    subMenu.classList.add("sub-menu-show");
    button.innerText = "-";
  } else {
    subMenu.classList.remove("sub-menu-show");
    button.innerText = "+";
  }
}

// Feed back section function

//Get height for feed back container

function getFeedBackHeight() {
  let feedbackWrapper = document.querySelector(".feedback__content-wrapper");

  let feedbackShow = document.querySelector(".feedback__item-show");

  let height = feedbackShow.clientHeight;

  feedbackWrapper.style.minHeight = `${height}px`;
  feedbackWrapper.style.maxHeight = `${height}px`;
}

getFeedBackHeight();

window.addEventListener("resize", getFeedBackHeight);

//check index to show feedback
function checkIndex(currentIndex) {
  const feedbackItems = document.querySelectorAll(".feedback__item");

  for (let i = 0; i < feedbackItems.length; i++) {
    if (currentIndex == i) {
      feedbackItems[i].classList.add("feedback__item-show");
    } else {
      feedbackItems[i].classList.remove("feedback__item-show");
    }
  }
}

const feedbackControls = document.getElementsByName("feedback");

for (i = 0; i < feedbackControls.length; i++) {
  let input = feedbackControls[i];

  input.addEventListener("click", changFeedbackItem);
}

function changFeedbackItem(e) {
  let input = e.target;

  let value = input.value;

  checkIndex(value);
  getFeedBackHeight();
}

function setFeedbackControl() {
  const feedbackItems = document.querySelectorAll(".feedback__item");

  for (let i = 0; i < feedbackItems.length; i++) {
    let item = feedbackItems[i];

    if (item.classList.contains("feedback__item-show")) {
      feedbackControls[i].checked = true;
    } else {
      feedbackControls[i].checked = false;
    }
  }
}

setFeedbackControl();

let counter = 0;

function slideFeedback() {
  const feedbackItems = document.querySelectorAll(".feedback__item");
  counter++;

  checkIndex(counter);
  setFeedbackControl();
  getFeedBackHeight();

  if (counter == feedbackItems.length - 1) {
    counter = -1;
  }
}

setInterval(slideFeedback, 3000);

//Set counter number from document load

function tickByFrame(selector, endpoint, index, time) {
  let element = document.getElementsByClassName(selector)[index];
  let start = 0;
  let frame = setInterval(counterNumber, time);

  function counterNumber() {
    if (start == endpoint) {
      clearInterval(frame);
    } else {
      start++;
      element.innerHTML = start;
    }
  }
}

tickByFrame("number", 2304, 0, 15);
tickByFrame("number", 3585, 1, 15);
tickByFrame("number", 1365, 2, 15);
tickByFrame("number", 4328, 3, 15);

const teamContainerItems = document.querySelectorAll(".team__container > div");

function runTeamSlider() {
  let teamCounter = -1;
  let teamFrame = setInterval(teamSlide, 3000);

  function teamSlide() {
    teamCounter++;

    teamContainerItems[teamCounter].style.order = `${teamCounter + 1}`;

    if (teamCounter == 3) {
      teamCounter = -1;

      for (item of teamContainerItems) {
        item.style.order = "";
      }
    }
  }
}

runTeamSlider();

const arrowTop = document.getElementById("toTopButton");

window.addEventListener("scroll", function () {
  arrowTop.classList.add("show-toTopButton");

  if (pageYOffset == 0) {
    arrowTop.classList.remove("show-toTopButton");
  }
});

arrowTop.addEventListener("click", () => {
  window.scrollTo(pageXOffset, 0);
  arrowTop.classList.remove("show-toTopButton");
});

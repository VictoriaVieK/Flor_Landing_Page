
// for-loop so when you press the links in the footer a message pops up.

// Henter elementene jeg trenger og lagrer de i variabler:
const sectionHeading = document.getElementsByClassName("section-heading");
const content = document.querySelector(".content");
const arrow = document.querySelector("#arrow");

//Legger til en EventListener i sectionHeading som gjør at 
//om .content er borte og man trykker, vil den vises - og motsatt.
//Om pilen peker ned og man trykker vil den gå opp og motsatt. 
for (let i = 0; i < sectionHeading.length; i++) {
  sectionHeading[i].addEventListener("click", () => {
    content.classList.toggle("show");
    arrow.classList.toggle("up");
  });
}


// Functions so when you click the links in the footer a message pops up.

function ClickMailLink(event) {
    event.preventDefault(); // Prevent default link behavior
    alert("Du trykket på link til mail!"); // Display the message
  }
  
  const mailLink = document.querySelector("#mail-link");
  mailLink.addEventListener("click", ClickMailLink);
  

  function ClickInstaLink(event) {
    event.preventDefault(); // Prevent default link behavior
    alert("Du trykket på link til Instagram!"); // Display the message
  }
  
  const instaLink = document.querySelector("#insta-link");
  instaLink.addEventListener("click", ClickInstaLink);


//Function so when you click the download-link, you can choose to go to Figma.

const downloadLink = document.querySelector("#download-link");

function handleDownloadLinkClick(event) {
  event.preventDefault();
  const confirmation = confirm("Denne linken fører til prototypen i Figma. Vil du åpne linken?");
  if (confirmation) {
    window.open(this.getAttribute("href"), "_blank");
  }
}

downloadLink.addEventListener("click", handleDownloadLinkClick);


//Making it possible to navigate using the keyboard.

const otherSectionHeadingElements = document.querySelectorAll('.other-section-heading');
const topptekstElements = document.querySelectorAll('.topptekst');
const sectionHeadingElements = document.querySelectorAll('.section-heading');
const contentElement = document.querySelector('.content');
const p1Element = document.querySelector('#p-1');
const p2Element = document.querySelector('#p-2');
const p3Element = document.querySelector('#p-3');
const h1Element = document.querySelector('h1');
const qrElement = document.querySelector('#qr');
const downloadLinkElement = document.querySelector('#download-link');
const instructionsElement = document.querySelector('#instructions');
const mailLinkElement = document.querySelector('#mail-link');
const instaLinkElement = document.querySelector('#insta-link');

otherSectionHeadingElements.forEach((element) => {
  element.setAttribute('tabindex', '0');
});

topptekstElements.forEach((element) => {
  element.setAttribute('tabindex', '0');
});

sectionHeadingElements.forEach((element) => {
  element.setAttribute('tabindex', '0');
});

contentElement.setAttribute('tabindex', '0');
p1Element.setAttribute('tabindex', '0');
p2Element.setAttribute('tabindex', '0');
p3Element.setAttribute('tabindex', '0');
h1Element.setAttribute('tabindex', '0');
qrElement.setAttribute('tabindex', '0');
downloadLinkElement.setAttribute('tabindex', '0');
instructionsElement.setAttribute('tabindex', '0');
mailLinkElement.setAttribute('tabindex', '0');
instaLinkElement.setAttribute('tabindex', '0');

document.addEventListener('keydown', (event) => {
  if (event.code === 'Tab') {
    handleTabKey(event);
  } else if (event.code === 'Space') {
    handleSpaceKey(event);
  }
});

function handleTabKey(event) {
  const focusableElements = Array.from(
    document.querySelectorAll(
      '.other-section-heading, .topptekst, .section-heading, .content, #p-1, #p-2, #p-3, h1, #qr, #download-link, #instructions, #mail-link, #insta-link'
    )
  );

  const currentIndex = focusableElements.indexOf(document.activeElement);
  let nextIndex;

  if (event.shiftKey) {
    // Shift + Tab
    nextIndex = currentIndex - 1;
    if (nextIndex < 0) {
      nextIndex = focusableElements.length - 1;
    }
  } else {
    // Tab
    nextIndex = currentIndex + 1;
    if (nextIndex >= focusableElements.length) {
      nextIndex = 0;
    }
  }

  const nextElement = focusableElements[nextIndex];
  nextElement.focus();
  event.preventDefault();
}

function handleSpaceKey(event) {
  const element = event.target;

  if (
    element.classList.contains('section-heading') ||
    element.classList.contains('other-section-heading') ||
    element.id === 'download-link' ||
    element.id === 'mail-link' ||
    element.id === 'insta-link'
  ) {
    element.click();
    event.preventDefault();
  }
}
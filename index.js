var i = 0;
var headerImagesURLs = [
  'url("images/mobile-image-hero-1.jpg")',
  'url("images/mobile-image-hero-2.jpg")',
  'url("images/mobile-image-hero-3.jpg")',
];

function leftClicked() {
  var intro = document.getElementById("intro");
  var manufactureSec = document.getElementById("manufactureSec");
  var aboutUs = document.getElementById("aboutUs");
  var sectionChange = [intro, manufactureSec, aboutUs];

  let headerImage = document.querySelector("#headerNav");
  i--;
  console.log(i);
  for (let j in sectionChange) {
    sectionChange[j].style.display = "none";
    console.log(j);
  }

  headerImage.style.backgroundImage = headerImagesURLs[i];
  //sectionChange[i+1].style.display = "block";

  if (i < 0) {
    i = 2;
    headerImage.style.backgroundImage = headerImagesURLs[i];
  }
  sectionChange[i].style.display = "block";
}
function rightClicked() {
  var intro = document.getElementById("intro");
  var manufactureSec = document.getElementById("manufactureSec");
  var aboutUs = document.getElementById("aboutUs");
  var sectionChange = [intro, manufactureSec, aboutUs];

  let headerImage = document.querySelector("#headerNav");
  i++;
  console.log(i);
  for (let j in sectionChange) {
    sectionChange[j].style.display = "none";
    console.log(j);
  }
  headerImage.style.backgroundImage = headerImagesURLs[i];

  if (i > 2) {
    i = 0;
    headerImage.style.backgroundImage = headerImagesURLs[i];
  }
  sectionChange[i].style.display = "block";
}

//navigation for mobile
function navigationAppears() {
  let nav = document.querySelector("nav");
  let header = document.querySelector(".svg");
  header.style.display = "none";
  nav.style.display = "flex";
}
function navigationDisAppears() {
  let nav = document.querySelector("nav");
  let header = document.querySelector(".svg");
  header.style.display = "flex";
  nav.style.display = "none";
}

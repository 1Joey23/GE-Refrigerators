// Make the webpage in dark mode
function DarkMode() {
    // Make the body background black
    var body = document.body;
    body.classList.toggle("darkMode");
    
    // Make the navagation bar in dark theme.
    var navBar = document.getElementById("darkMode");
    navBar.classList.toggle("darkModeNavBar");

    // Make the header button in dark theme.
    var headerButton = document.getElementById("darkModeHeaderButton");
    headerButton.classList.toggle("darkModeHeader");

    // Make about us box in dark theme.
    var aboutUs = document.getElementById("darkModeAbout");
    aboutUs.classList.toggle("darkModeAbout");

    // Make the Models Cards in dark theme.
    var models = document.getElementById("darkModeModels");
    models.classList.toggle("darkModeModel");

    // Toggle dark mode for the store finder container
    var container = document.getElementById("darkModeStoreFinder");
    container.classList.toggle("darkModeFinder");

    // Toggle dark mode for storeFinderContainer
    var storeContainer = document.querySelector(".storeFinderContainer");
    storeContainer.classList.toggle("darkModeFinderContainer");

    // Toggle dark mode for storeFinderTitle elements
    var storeFinderTitles = document.querySelectorAll(".storeFinderTitle");
    storeFinderTitles.forEach(function (title) {
        title.classList.toggle("darkModeFinderTitle");
    });

    // Toggle dark mode for storeFinderImage elements
    var storeFinderImages = document.querySelectorAll(".storeFinderImage");
    storeFinderImages.forEach(function (image) {
        image.classList.toggle("darkModeFinderImage");
    });

    // Toggle dark mode for storeFinderImage2 elements
    var storeFinderImages2 = document.querySelectorAll(".storeFinderImage2");
    storeFinderImages2.forEach(function (image) {
        image.classList.toggle("darkModeFinderImage2");
    });

    // Toggle dark mode for the iframe
    var iframe = document.querySelector(".storeFinderItems");
    iframe.classList.toggle("darkModeIframe");

    // Make the review boxes dark.
    var reviewContainerItem = document.querySelectorAll(".reviewsContainerItem");
    reviewContainerItem.forEach(function (image) {
        image.classList.toggle("darkModeReviews");
    });

    // Make the contact box dark.
    var contact = document.querySelectorAll(".contactGridItem");
    contact.forEach(function (image) {
        image.classList.toggle("darkModeContact");
    });

    // Toggle dark mode for the submit button
    var submitButton = document.querySelector(".contactContainer .form .submit");
    submitButton.classList.toggle("darkModeSubmit");
}

// Date when sale ends. Its gunna be a really long sale...
var countDownDate = new Date("Jan 30, 2025 15:37:25").getTime();
                        
// Update the count every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="stickySale"
  document.getElementById("stickySale").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("stickySale").innerHTML = "Sale Ended";
  }
}, 1000);
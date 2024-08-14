document.getElementById("getImageBtn").addEventListener("click", function () {
  var category = document.getElementById("category").value;
  var year = document.getElementById("year").value;
  var number = document.getElementById("number").value;

  // Pad the number with leading zeros if necessary //
  var paddedNumber = ("00" + number).slice(-3);

  var imageUrl =
    "https://www.brainwareuniversity.ac.in/univ_student/photo_upload/" +
    category +
    year +
    paddedNumber;

  // Check if the student code is within the allowed range (001 to 999) //
  if (number < 1 || number > 999 || isNaN(number)) {
    Swal.fire({
      icon: "error",
      title: "Invalid Input",
      text: "Please enter a valid Student Code between 001 and 999.",
    });
    return;
  }

  // Create an image element and set its src attribute //
  var image = document.createElement("img");
  image.src = imageUrl;

  // Clear previous image if any //
  var imageContainer = document.getElementById("imageContainer");
  imageContainer.innerHTML = "";

  // Append the image to the img container //
  imageContainer.appendChild(image);

  // Handle image loading error //
  image.onerror = function () {
    // Show a default image/icon and a message if image not found //
    image.src =
      "https://i.pinimg.com/564x/d9/7d/0d/d97d0d0ffe20f0af86ee40e270461250.jpg";
    image.alt = "Image Not Found";

    Swal.fire({
      icon: "error",
      title: "Image Not Found",
      text: "Invalid Student Details..!!",
    });
  };

  // Show a success message when the image is loaded successfully //
  image.onload = function () {
    Swal.fire({
      icon: "success",
      title: "Image Loaded",
      text: "Successfully",
      timer: 1500,
      showConfirmButton: false,
    });
  };
});

// Image slider functionality //
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");

function showSlide(n) {
  currentSlide = (n + slides.length) % slides.length;
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function changeSlide(n) {
  showSlide(currentSlide + n);
}

// Auto-advance slides every 5 seconds //
setInterval(() => changeSlide(1), 5000);

// Initialize the first slide //
showSlide(0);

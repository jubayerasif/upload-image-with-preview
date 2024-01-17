const selectImage = document.querySelector(".select-image");
const inputFile = document.querySelector("#file");
const imgArea = document.querySelector(".img-area");

// Trigger file input click when "Select Image" button is clicked
selectImage.addEventListener("click", function () {
  inputFile.click();
});

// Handle file selection
inputFile.addEventListener("change", function () {
  const image = this.files[0];

  if (image) {
    if (image.size < 2000000) {
      displayImagePreview(image);
    } else {
      alert("Image size exceeds 2MB");
    }
  }
});

// Display image preview in imgArea
function displayImagePreview(selectedImage) {
  const reader = new FileReader();

  reader.onload = () => {
    // Clear existing images in imgArea
    imgArea.innerHTML = "";

    // Create a new img element with the selected image
    const img = document.createElement("img");
    img.src = reader.result;

    // Append the img element to imgArea
    imgArea.appendChild(img);

    // Add 'active' class to imgArea for styling
    imgArea.classList.add("active");

    // Set data-img attribute with the image name
    imgArea.dataset.img = selectedImage.name;
  };

  // Read the selected image as a data URL
  reader.readAsDataURL(selectedImage);
}
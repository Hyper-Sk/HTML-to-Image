function pageReload() {
  location.reload(true);
  window.scrollTo(0, 0);
}
function showPopup() {
  const popup = document.querySelector(".popup");
  popup.style.opacity = 1;
  popup.style.visibility = "visible";
}
function closePopup() {
  const popup = document.querySelector(".popup");
  popup.style.opacity = 0;
  popup.style.visibility = "hidden";
}

function downloadImage() {
  const element = document.getElementById("capture");
  const scale = 3; //resolution
  const name = document.getElementsByName("popup_input")[0].value;
  const popup = document.querySelector(".popup");

  if (name) {
    document.querySelector(".popup p").style.display = "none";
    html2canvas(element, {
      scale: scale,
      useCORS: true,
    }).then((canvas) => {
      // Create an image element
      var img = canvas.toDataURL("image/png");
      // Create a link element
      var link = document.createElement("a");
      // Set the download attribute with a filename
      link.download = `${name}.png`;
      // Set the href attribute to the image URL
      link.href = img;
      // Append the link to the body (required for Firefox)
      document.body.appendChild(link);
      // Programmatically click the link to trigger the download
      link.click();
      // Remove the link from the document
      document.body.removeChild(link);
      popup.style.opacity = 0;
      popup.style.visibility = "hidden";
      name = ''
    });
  } else {
    document.querySelector(".popup p").style.display = "block";
  }
}

function selectOnlyThis1(checkbox) {
  let option1 = document.getElementsByName("option1");
  option1.forEach((item) => {
    if (item !== checkbox) item.checked = false;
  });
}

function selectOnlyThis2(checkbox) {
  let option2 = document.getElementsByName("option2");

  option2.forEach((item) => {
    if (item !== checkbox) item.checked = false;
  });
}

function readMore(name) {
    var contentStatus = document.querySelector(`.item[name="${name}"] .hiddenContent`);
    var buttonText = document.querySelector(`.item[name="${name}"] .button`);
    var spacing = document.querySelector(`.item[name="${name}"] .spacing`);
    var arrow = document.querySelector(`.item[name="${name}"] .arrow`);
    var buttonContainer = document.querySelector(`.item[name="${name}"] .buttonContainer`);
  
    if (contentStatus.style.display === "none" || contentStatus.style.display === "") {
      buttonText.innerHTML = "Collapse"; 
      contentStatus.style.display = "block";
      spacing.style.display = "inline";
    } else {
      buttonText.innerHTML = "More"; 
      arrow.innerHTML = "&#9656";
      contentStatus.style.display = "none";
      spacing.style.display = "none";
    }
  }
  
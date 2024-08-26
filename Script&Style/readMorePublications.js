function readMore(name) {
  var extraContentStatus = document.querySelector(
    `.item[name="${name}"] .hiddenContent`,
  );
  var buttonText = document.querySelector(`.item[name="${name}"] .button`);
  var spacing = document.querySelector(`.item[name="${name}"] .spacing`);
  var arrow = document.querySelector(`.item[name="${name}"] .arrow`);

  /*
    If extra content is hidden initially, it will be displayed after the function is called.
    If it is not hidden, it will be hidden after the function is called.
  */

  if (
    extraContentStatus.style.display === "none" ||
    extraContentStatus.style.display === ""
  ) {
    buttonText.innerHTML = "Collapse";
    extraContentStatus.style.display = "block";
    spacing.style.display = "inline";
  } else {
    buttonText.innerHTML = "More";
    arrow.innerHTML = "&#9656";
    extraContentStatus.style.display = "none";
    spacing.style.display = "none";
  }
}

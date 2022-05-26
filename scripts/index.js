const messageForm = document.querySelector(".form");
const formSubmitButton = document.querySelector(".form__button");
const getPopup = document.querySelector(".popup");
const popupCloseButton = document.querySelector(".popup__close-button");

function handleEscEvent(evt) {
  if (evt.key === "Escape") {
    const activePopup = document.querySelector(".popup_open");
    closePopup(activePopup);
  }
}

function closePopupOnRemoteClick(evt) {
  if (
    evt.target.classList.contains("popup") ||
    evt.target.classList.contains("popup__close-button")
  ) {
    const activePopup = document.querySelector(".popup_open");
    closePopup(activePopup);
  }
}

function closePopup(popupWindow) {
  popupWindow.classList.remove("popup_open");
  document.removeEventListener("keydown", handleEscEvent);
  document.removeEventListener("mousedown", closePopupOnRemoteClick);
}

function openPopup(popupWindow) {
  popupWindow.classList.add("popup_open");
  document.addEventListener("keydown", handleEscEvent);
  document.addEventListener("mousedown", closePopupOnRemoteClick);
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  messageForm.reset();
  openPopup(getPopup);
}

messageForm.addEventListener("submit", handleFormSubmit);

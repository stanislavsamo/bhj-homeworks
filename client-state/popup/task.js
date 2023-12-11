document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("subscribe-modal");
    const closeButton = document.querySelector(".modal__close_times");
  
    const isModalActive = modal.classList.contains("modal_active");
  
    if (isModalActive) {
      closeButton.addEventListener("click", function () {
        modal.classList.remove("modal_active");
  
        document.cookie = "modalClosed=true; expires=Sun, 1 Jan 2023 00:00:00 UTC; path=/";
      });
    }
  });
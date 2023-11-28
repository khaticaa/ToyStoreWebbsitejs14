document.addEventListener("click", () => {
  const modal = document.getElementById("myModal");
  const modalTriggerElements = document.querySelectorAll(".nav-r li");
  const closeModalButton = document.getElementById("closeModal");

  const openModal = () => {
    modal.style.display = "block";
  
  };

  const closeModal = () => {
    modal.style.display = "none";
  
  };

  modalTriggerElements.forEach((element) => {
    element.addEventListener("click", openModal);
  });

  closeModalButton.addEventListener("click", closeModal);

  document.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
});





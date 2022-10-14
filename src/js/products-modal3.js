(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-products-overlay-open3]"),
    closeModalBtn: document.querySelector("[products-overlay-close3]"),
    modal: document.querySelector("[data-products-overlay3]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("products__overlay--hidden3");
  }
})();
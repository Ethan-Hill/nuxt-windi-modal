export const closeModal = (modalEl) => {
  modalEl.classList.add("hidden");
  modalEl.setAttribute("aria-hidden", "true");
  document.getElementById("modal_overlay").classList.remove("active");
};

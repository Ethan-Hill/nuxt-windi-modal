export const openModal = (modalEl) => {
  modalEl.classList.remove("hidden");
  modalEl.setAttribute("aria-hidden", "false");
  document.getElementById("modal_overlay").classList.add("active");
};

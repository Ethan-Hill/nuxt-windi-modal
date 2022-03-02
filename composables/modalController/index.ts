import { closeModal } from "./closeModal";
import { focusModal } from "./focusModal";
import { openModal } from "./openModal";

export default (modalId: any, isHidden: boolean) => {
  const modalEl = document.getElementById(modalId);

  if (isHidden) {
    openModal(modalEl);
    focusModal(modalEl);

    return;
  }

  closeModal(modalEl);
};

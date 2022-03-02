<template>
  <teleport to="#modal_overlay">
    <div
      :id="modalId"
      ref="modal"
      :aria-labelledby="modalAriaLabel"
      aria-modal="true"
      class="modal hidden"
      role="dialog"
      tabindex="0"
    >
      <slot />
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  modalId: {
    type: String,
    required: true,
  },
  modalLabel: {
    type: String,
    required: true,
  },
});

const modalAriaLabel = computed(() => props.modalId + "_" + props.modalLabel);
const closeModal = () => modalController(props.modalId, false);

const modal = ref(null);
onClickOutside(modal, () => closeModal());
</script>

<style lang="scss">
#modal_overlay {
  display: none;
  position: fixed;
  overflow-y: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgb(0 0 0 / 30%);
  z-index: 999;

  &.active {
    display: block;
  }
}
</style>

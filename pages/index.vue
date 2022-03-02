<template>
  <div>
    <button class="btn" @click="toggleModal('introModal', true)">
      Click me
    </button>

    <Modal
      ref="introModal"
      modalId="introModal"
      modalLabel="Introduction-Modal"
    >
      <div class="relative w-full h-full">
        <h1>Modal title</h1>
        <p>Modal desc</p>
        <button
          class="btn absolute bottom-5 right-5"
          @click="toggleModal('introModal', false)"
        >
          Close
        </button>
      </div>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import Modal from "../components/Modal.vue";

definePageMeta({
  layout: "default",
  title: "Home",
});

const toggleModal = (id, isHidden) => {
  modalController(id, isHidden);
};
</script>

<style>
body,
#__nuxt {
  height: 100vh;
}
</style>

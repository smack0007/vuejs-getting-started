<script setup lang="ts">
import { computed, ref } from "vue";

const createdBy = "Zachary Snow";
const age = 38;
const capitalize = (value: string) => value.toUpperCase();
const toHex = (value: number) => `0x${value.toString(16)}`;

const runningTime = ref(0);
const runningTimeString = computed(() => `${runningTime.value} seconds`);

function updateRunningTime() {
  runningTime.value += 1;
  setTimeout(updateRunningTime, 1000);
}

setTimeout(updateRunningTime, 1000);
</script>

<template>
  <div class="about">
    <p>
      This page was created by {{ capitalize(createdBy) }}. He is
      {{ toHex(age) }} years old.
    </p>

    <p>This page has been running for {{ runningTimeString }}.</p>
  </div>
</template>

<style scoped lang="scss"></style>

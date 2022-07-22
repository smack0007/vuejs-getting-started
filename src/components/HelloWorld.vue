<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  firstName: string;
  lastName: string;
  age?: number;
}>();

const fullName = computed(() => {
  return props.firstName + " " + props.lastName;
});
</script>

<template>
  <h1 class="hello-world">Hello {{ fullName }}</h1>
</template>

<style scoped lang="scss">
.hello-world {
  color: red;
}
</style>

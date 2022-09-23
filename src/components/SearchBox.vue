<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits<{
  (e: "execute-search", value: string): void;
}>();

const search = ref("");
const lastSearch = ref("");

function clearSearch() {
  search.value = "";
  emitExecuteSearch();
}

function emitExecuteSearch() {
  emit("execute-search", search.value);
  lastSearch.value = search.value;
}

defineExpose({
  clearSearch,
});
</script>

<template>
  <div class="search-box">
    <div class="input-group">
      <input
        type="text"
        id="search"
        class="search-text form-control"
        v-model="search"
        @keyup.enter="emitExecuteSearch"
      />
      <button
        v-if="lastSearch.length > 0"
        class="btn btn-danger"
        type="button"
        @click="clearSearch"
      >
        Clear
      </button>
      <button
        class="search-button btn btn-secondary"
        type="button"
        @click="emitExecuteSearch"
      >
        Search
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.search-box {
  display: flex;
  align-content: center;
  justify-content: center;
}
</style>

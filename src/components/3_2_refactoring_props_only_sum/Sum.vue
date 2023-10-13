<script setup lang="ts">
import {ref, watchEffect} from "vue";

defineProps<{
  result: number
}>()

const emits = defineEmits<{
  (e: 'calculate', payload: { n1: number, n2: number }): void
}>()

const n1 = ref(0)
const n2 = ref(0)

watchEffect(() => {
  emits('calculate', {n1: n1.value, n2: n2.value})
})

</script>

<template>
  <section>
    <form>
      <p>
        <label>Number One <input v-model.number="n1"/></label>
        <label>Number Two <input v-model.number="n2"/></label>
      </p>
    </form>
    <p>{{ n1 }} + {{ n2 }} is {{ result }}.</p>
  </section>
</template>

<style scoped></style>
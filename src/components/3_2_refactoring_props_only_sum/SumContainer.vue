<script setup lang="ts">

import {ref} from "vue";
import {stall} from "@/utils/utils";
import Sum from "@/components/3_2_refactoring_props_only_sum/Sum.vue";

const result = ref(0)

async function fetchSum({n1, n2}: { n1: number, n2: number }) {

  result.value = n1 + n2;
  await stall()

}

</script>

<template>
  <Sum :result="result" @calculate="fetchSum"/>
</template>

<style scoped>

</style>
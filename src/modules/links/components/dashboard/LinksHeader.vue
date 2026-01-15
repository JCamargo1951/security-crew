<template>
  <tr>
    <th
      scope="col"
      class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
      v-for="header in headers"
    >
      <button class="flex items-center gap-x-3 focus:outline-none">
        <span>{{ header }}</span>
        <SorterIcon/>
      </button>
    </th>

    <th scope="col">
      <span class="sr-only">Edit</span>
    </th>
  </tr>
</template>

<script setup lang="ts">
import SorterIcon from '@/modules/common/icons/SorterIcon.vue';

const headers = ['Nombre', 'Visibilidad', 'Contraseña', 'Link'];
</script>

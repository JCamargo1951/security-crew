<template>
  <section class="container px-4 mx-auto m-15">
    <LinksHeader></LinksHeader>
    <LinksToolbar></LinksToolbar>
    <LinksTable :links="links"></LinksTable>
    <LinksPagination></LinksPagination>
  </section>
</template>

<script setup lang="ts">
import LinksHeader from '../components/dashboard/LinksToolbar.vue';
import LinksToolbar from '../components/dashboard/LinksFilters.vue';
import LinksTable from '../components/dashboard/LinksTable.vue';
import LinksPagination from '../components/dashboard/LinksPagination.vue';
import type { Link } from '../interfaces';
import { ref } from 'vue';

const links = ref<Link[]>([
  {
    id: 1,
    title: 'Twitter X',
    url: 'https://x.com/home?lang=es',
    shortener_url: 'http://127.0.0.1:5173/aDe34R',
    visibility: 'Publico',
    password: null,
    expires_at: null,
  },
  {
    id: 2,
    title: 'Facebook',
    url: 'https://www.facebook.com/?locale=es_LA',
    shortener_url: 'http://127.0.0.1:5173/aAe32R',
    visibility: 'Privada',
    password: 'c234ybhsdf534534bnsdvbdsh534534dfgdfg',
    expires_at: '2026-04-01 11:18:16',
  },
  {
    id: 3,
    title: 'Google',
    url: 'https://www.google.com/?hl=es_419&zx=1768448697231&no_sw_cr=1',
    shortener_url: 'http://127.0.0.1:5173/aDe34R',
    visibility: 'Publico',
    password: null,
    expires_at: null,
  },
  {
    id: 4,
    title: 'Mi Insta',
    url: 'https://www.instagram.com/camargo.v1/',
    shortener_url: 'http://127.0.0.1:5173/a645s4R',
    visibility: 'Privada',
    password: null,
    expires_at: null,
  },
  
]);
</script>

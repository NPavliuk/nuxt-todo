<template>
  <div class="flex flex-col w-full min-h-screen overflow-x-hidden bg-stone-100">
    <main-header />
    <main class="flex-auto px-4">
      <nuxt />
    </main>
    <main-footer />
  </div>
</template>

<script>
import mainFooter from "~/components/main/main-footer.vue"
import mainHeader from "~/components/main/main-header.vue"

export default {
  components: {
    mainFooter,
    mainHeader
  }
}
</script>

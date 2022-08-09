<template>
  <div class="container">
    <header>
      <router-link :to="{ name: 'Home' }"> <img src="@/assets/logo.png" alt="ToverSpreuken logo" /></router-link>
    </header>
    <TopMenu />
    <router-view />
    <FooterSection />
  </div>
</template>

<script setup>
import TopMenu from "@/components/TopMenu.vue"
import FooterSection from "@/components/FooterSection.vue"
</script>

<style scoped lang="scss">
header {
  background-color: var(--paars);
  padding: 1rem;
  border: 1px solid var(--donker-gijs);
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  display: flex;
  box-shadow: 0 0 30px 0px rgba(0, 0, 0, 0.5);

  img {
    width: 100%;
  }
}

@media (max-width: 600px) {
  header {
    justify-content: center;
  }
}
</style>

<template>
  <section class="hero">
    <img src="../assets/pot.png" alt="" />
    <div class="hero-text">
      <p>
        Toverspreuken was op de beursvloer een begrip. Na vele jaren met veel
        plezier beurzen gedaan te hebben, moet ik er helaas een einde aan maken.
      </p>
      <p>
        Daarom probeer ik via dit blog toch nog al mijn kennis te delen met de
        wereld.
      </p>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.hero img {
  margin-left: 2rem;
  margin-right: 1rem;
}

.hero-text {
  background-color: var(--paars);
  background-image: url(../assets/hero-bg.png);

  border-radius: 0.5rem;
  border: 1px solid var(--donker-gijs);
  padding: 1.5rem 2rem;
  box-shadow: 0 0 30px 0px rgba(0, 0, 0, 0.8);
}

p {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

@media (max-width: 600px) {
  .hero img {
    display: none;
  }
}
</style>

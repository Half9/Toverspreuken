<template>
  <nav class="menu">
    <ul>
      <li>
        <router-link :to="{ name: 'Home' }">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Blog' }"> Blog</router-link>
      </li>
    </ul>
  </nav>
</template >
      
<style scoped>
nav {
  background-color: var(--donker-gijs);
  border-radius: 0.5rem;
  margin: 2rem 0;
  padding: 0.5rem;
}

@media (max-width: 600px) {
  nav {
    margin: 1rem 0;
  }
}

nav ul {
  display: flex;
  gap: 1rem;
}

nav li {
  list-style: none;
  margin-left: 1rem;
}

nav li a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.2rem;
}

nav li a:hover {
  color: var(--paars);
}

.router-link-active {
  color: var(--paars);
}
</style>

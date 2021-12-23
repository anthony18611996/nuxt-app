<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
    <div class="container">
      <nuxt-link class="navbar-brand" to="/news"><h1>Nuxt-app</h1></nuxt-link>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <nuxt-link class="nav-link fs-4 active" aria-current="page" to="/news"
              >News</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link fs-4" to="/authors">Authors</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

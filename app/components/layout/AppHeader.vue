<template>
    <header class="header">
        <div class="fullwidth-container">
            <Navigation />
        </div>
    </header>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import Navigation from './Navigation.vue'

const handleScroll = () => {
  const header = document.querySelector('.header')

  if (!header) return

  if (window.scrollY > 100) {
    header.classList.add('fixed')
  } else {
    header.classList.remove('fixed')
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
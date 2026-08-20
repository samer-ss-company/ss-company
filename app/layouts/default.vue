<script setup lang="ts">
import AppFooter from '~/components/layout/AppFooter.vue';
import AppHeader from '~/components/layout/AppHeader.vue';


// import { onMounted, onUnmounted } from 'vue'

// onMounted(() => {
//     const cursor = document.getElementById('cursor') as HTMLDivElement | null
//     const ring = document.getElementById('cursorRing') as HTMLDivElement | null

//     if (!cursor || !ring) return

//     let mx = 0
//     let my = 0
//     let rx = 0
//     let ry = 0
//     let animationId = 0

//     // Mouse Move
//     const mouseMove = (e: MouseEvent) => {
//         mx = e.clientX
//         my = e.clientY

//         cursor.style.left = `${mx}px`
//         cursor.style.top = `${my}px`
//     }

//     document.addEventListener('mousemove', mouseMove)

//     // Animate Ring
//     const animateRing = () => {
//         rx += (mx - rx) * 0.12
//         ry += (my - ry) * 0.12

//         ring.style.left = `${rx}px`
//         ring.style.top = `${ry}px`

//         animationId = requestAnimationFrame(animateRing)
//     }

//     animateRing()

//     // Hover Effect
//     const hoverElements = document.querySelectorAll(
//         'button, a, .product-card'
//     )

//     const mouseEnter = () => {
//         cursor.style.transform = 'translate(-50%, -50%) scale(2)'
//         ring.style.width = '60px'
//         ring.style.height = '60px'
//     }

//     const mouseLeave = () => {
//         cursor.style.transform = 'translate(-50%, -50%) scale(1)'
//         ring.style.width = '36px'
//         ring.style.height = '36px'
//     }

//     hoverElements.forEach((el) => {
//         el.addEventListener('mouseenter', mouseEnter)
//         el.addEventListener('mouseleave', mouseLeave)
//     })

//     // Cleanup
//     onUnmounted(() => {
//         document.removeEventListener('mousemove', mouseMove)

//         hoverElements.forEach((el) => {
//             el.removeEventListener('mouseenter', mouseEnter)
//             el.removeEventListener('mouseleave', mouseLeave)
//         })

//         cancelAnimationFrame(animationId)
//     })
// })

</script>

<template>
    <div>
        <div class="cursor" id="cursor"></div>
        <div class="cursor-ring" id="cursorRing"></div>
        <main>
            <AppHeader />
            <slot />
        </main>

        <AppFooter />
    </div>
</template>
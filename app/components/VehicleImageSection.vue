<script setup>

const { vehicle } = defineProps({
    vehicle: {
        type: Object,
        required: true
    }
})

</script>

<template>
    <section class="image-section section-spacing-tb">
        <div class="fullwidth-container">
            <img :src="vehicle.herobanner.banner" width="1920" height="490" alt="">
        </div>
    </section>
</template>

<script setup>

const { vehicle } = defineProps({
    vehicle: {
        type: Object,
        required: true
    }
})

</script>

<template>
    <section class="video-section">
        <video autoplay muted loop playsinline class="video-gallery">
            <source :src="vehicle.vehicleVideo" type="video/mp4" />
        </video>
    </section>
</template>

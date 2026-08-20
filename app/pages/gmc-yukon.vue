
<script setup>
import { vehicles } from '~/data/vehicles.js'
import HeroBanner from '~/components/HeroBanner.vue'
import VehicleDetailTabbing from '~/components/VehicleDetailTabbing.vue'
// import VehicleVideo from '~/components/VehicleVideo.vue'

const vehicle = vehicles.gmcyukon
</script>


<template>
    <!-- Banner -->
    <HeroBanner :vehicle="vehicle" />

    <!-- Vehicle Detail Tabbing -->
    <VehicleDetailTabbing  :vehicle="vehicle" class="section-spacing-b" />

    <!-- Video Section -->
    <!-- <VehicleImageSection :vehicle="vehicle" /> -->
</template>
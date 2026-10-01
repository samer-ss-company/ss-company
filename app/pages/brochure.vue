<script setup lang="ts">
import { vehicles } from '~/data/vehicles.js'
import HeroBanner from '~/components/HeroBanner.vue'

const vehicle = vehicles.brochure
</script>


<template>

    <!-- Banner -->
    <HeroBanner :vehicle="vehicle" />


    <section class="brochure-section">
        <div class="brochure-wrapper">
            <iframe src="https://publuu.com/flip-book/1188517/2644381/page/1?embed" title="Double S Trading Brochure"
                class="publuu-flipbook" scrolling="no" frameborder="0" allow="clipboard-write; autoplay; fullscreen"
                allowfullscreen />
        </div>
    </section>
</template>
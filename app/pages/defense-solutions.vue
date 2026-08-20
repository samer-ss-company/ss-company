<script setup>
import { vehicles } from '~/data/vehicles.js'
import HeroBanner from '~/components/HeroBanner.vue'

const vehicle = vehicles.defenceSolutions

const scrollToSection = () => {
    const section = document.getElementById('overview-section')

    if (section) {
        const offset = 250
        const top =
            section.getBoundingClientRect().top + window.pageYOffset - offset

        window.scrollTo({
            top,
            behavior: 'smooth'
        })
    }
}
</script>


<template>
    <!-- Banner -->
    <HeroBanner :vehicle="vehicle" />

    <!-- Company Overview -->
    <section class="section-spacing-tb" id="overview-section">
        <div class="container">
            <div class="vehilce-card-list">
                <NuxtLink to="/apc-rockx" class="vehilce-card-list-items">
                    <div class="vehilce-card-list-image">
                        <img src="/images/apc-rockx/apc-rockx-menu.jpg" width="586" height="486" alt="APC Predator">
                    </div>
                    <div class="vehilce-card-list-body">
                        <h6 class="h6">APC Rockx</h6>
                    </div>
                </NuxtLink>
                <NuxtLink to="/apc-predator" class="vehilce-card-list-items">
                    <div class="vehilce-card-list-image">
                        <img src="/images/apc-predator-menu.jpg" width="586" height="486" alt="APC Predator">
                    </div>
                    <div class="vehilce-card-list-body">
                        <h6 class="h6">APC Predator</h6>
                    </div>
                </NuxtLink>
                <NuxtLink to="/apc-s-fighter-3" class="vehilce-card-list-items">
                    <div class="vehilce-card-list-image">
                        <img src="/images/apc-s-fighter-3-menu.jpg" width="586" height="486" alt="APC Predator">
                    </div>
                    <div class="vehilce-card-list-body">
                        <h6 class="h6">APC S-fighter 3</h6>
                    </div>
                </NuxtLink>
                <NuxtLink to="/apc-s-fighter-2" class="vehilce-card-list-items">
                    <div class="vehilce-card-list-image">
                        <img src="/images/apc-s-fighter-2-menu.jpg" width="586" height="486" alt="APC Predator">
                    </div>
                    <div class="vehilce-card-list-body">
                        <h6 class="h6">APC S-fighter 2</h6>
                    </div>
                </NuxtLink>
                <NuxtLink to="/batt-s" class="vehilce-card-list-items">
                    <div class="vehilce-card-list-image">
                        <img src="/images/batt-s-menu.jpg" width="586" height="486" alt="APC Predator">
                    </div>
                    <div class="vehilce-card-list-body">
                        <h6 class="h6">BATT S</h6>
                    </div>
                </NuxtLink>
                <NuxtLink to="/kuvasz" class="vehilce-card-list-items">
                    <div class="vehilce-card-list-image">
                        <img src="/images/kuvasz-menu.jpg" width="586" height="486" alt="APC Predator">
                    </div>
                    <div class="vehilce-card-list-body">
                        <h6 class="h6">Kuvasz</h6>
                    </div>
                </NuxtLink>
                <NuxtLink to="/batt-apex" class="vehilce-card-list-items">
                    <div class="vehilce-card-list-image">
                        <img src="/images/batt-apex-menu.jpg" width="586" height="486" alt="APC Predator">
                    </div>
                    <div class="vehilce-card-list-body">
                        <h6 class="h6">BATT APEX</h6>
                    </div>
                </NuxtLink>
                <NuxtLink to="/terrier-mlx" class="vehilce-card-list-items">
                    <div class="vehilce-card-list-image">
                        <img src="/images/terrier-mlx-menu.jpg" width="586" height="486" alt="APC Predator">
                    </div>
                    <div class="vehilce-card-list-body">
                        <h6 class="h6">Terrier MLX</h6>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>
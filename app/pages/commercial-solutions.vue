<script setup>
import { vehicles } from '~/data/vehicles.js'
import HeroBanner from '~/components/HeroBanner.vue'

const vehicle = vehicles.commercialSolutions

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
                <NuxtLink to="/tlc78-ambulance" class="vehilce-card-list-items">
                    <div class="vehilce-card-list-image">
                        <img src="/images/tlc78-ambulance-menu.jpg" width="586" height="486" alt="APC Predator">
                    </div>
                    <div class="vehilce-card-list-body">
                        <h6 class="h6">TLC78 Ambulance</h6>
                    </div>
                </NuxtLink>
                <NuxtLink to="/tlc-300" class="vehilce-card-list-items">
                    <div class="vehilce-card-list-image">
                        <img src="/images/tlc300-menu.jpg" width="586" height="486" alt="APC Predator">
                    </div>
                    <div class="vehilce-card-list-body">
                        <h6 class="h6">TLC 300 Black</h6>
                    </div>
                </NuxtLink>
                <NuxtLink to="/tahoe" class="vehilce-card-list-items">
                    <div class="vehilce-card-list-image">
                        <img src="/images/tahoe-menu.jpg" width="586" height="486" alt="APC Predator">
                    </div>
                    <div class="vehilce-card-list-body">
                        <h6 class="h6">TAHOE</h6>
                    </div>
                </NuxtLink>
                <NuxtLink to="/nissan-patrol" class="vehilce-card-list-items">
                    <div class="vehilce-card-list-image">
                        <img src="/images/nissan-patrol-menu.jpg" width="586" height="486" alt="APC Predator">
                    </div>
                    <div class="vehilce-card-list-body">
                        <h6 class="h6">Nissan Patrol</h6>
                    </div>
                </NuxtLink>
                <NuxtLink to="/lexus" class="vehilce-card-list-items">
                    <div class="vehilce-card-list-image">
                        <img src="/images/lexus-menu.jpg" width="586" height="486" alt="APC Predator">
                    </div>
                    <div class="vehilce-card-list-body">
                        <h6 class="h6">LEXUS</h6>
                    </div>
                </NuxtLink>
                <NuxtLink to="/gmc-yukon" class="vehilce-card-list-items">
                    <div class="vehilce-card-list-image">
                        <img src="/images/gmc-yukon-menu.jpg" width="586" height="486" alt="APC Predator">
                    </div>
                    <div class="vehilce-card-list-body">
                        <h6 class="h6">GMC YUKON</h6>
                    </div>
                </NuxtLink>
                <NuxtLink to="/coaster" class="vehilce-card-list-items">
                    <div class="vehilce-card-list-image">
                        <img src="/images/coaster-menu.jpg" width="586" height="486" alt="APC Predator">
                    </div>
                    <div class="vehilce-card-list-body">
                        <h6 class="h6">Coaster</h6>
                    </div>
                </NuxtLink>
                <NuxtLink to="/cadillac-escalade" class="vehilce-card-list-items">
                    <div class="vehilce-card-list-image">
                        <img src="/images/cadillac-menu.jpg" width="586" height="486" alt="APC Predator">
                    </div>
                    <div class="vehilce-card-list-body">
                        <h6 class="h6">Cadillac</h6>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>
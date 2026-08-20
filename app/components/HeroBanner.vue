<script setup>

const { vehicle } = defineProps({
    vehicle: {
        type: Object,
        required: true
    }
})

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
    <!-- <section class="banner inner-banner" :class="vehicle.herobanner.bannerClass" :style="{ backgroundImage: `url(${vehicle.herobanner.banner})` }"> -->
    <section class="banner inner-banner" :class="vehicle.herobanner.bannerClass" v-if="vehicle.vehicleVideo">
        <video :poster="vehicle.herobanner.banner" autoplay muted loop playsinline class="banner-video">
            <source :src="vehicle.vehicleVideo" type="video/mp4" />
        </video>
        <div class="fullwidth-container">
            <div class="banner-wrapper">
                <div class="banner-body">
                    <h1 class="h1">{{ vehicle.herobanner.title }}</h1>

                    <p>{{ vehicle.herobanner.description }}</p>

                    <div class="cta-wrapper" v-if="vehicle.herobanner.showButton">
                        <button class="cta cta-outline-light" @click="scrollToSection">
                            {{ vehicle.herobanner.bannertxt }}
                            <img src="/images/down-arrow-animate.gif" width="24" height="24" alt="Scroll Down">
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="banner inner-banner" :class="vehicle.herobanner.bannerClass" :style="{ backgroundImage: `url(${vehicle.herobanner.banner})` }" v-else>
        <div class="fullwidth-container">
            <div class="banner-wrapper">
                <div class="banner-body">
                    <h1 class="h1">{{ vehicle.herobanner.title }}</h1>

                    <p>{{ vehicle.herobanner.description }}</p>

                    <div class="cta-wrapper" v-if="vehicle.herobanner.showButton">
                        <button class="cta cta-outline-light" @click="scrollToSection">
                            {{ vehicle.herobanner.bannertxt }}
                            <img src="/images/down-arrow-animate.gif" width="24" height="24" alt="Scroll Down">
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import ImageGallery from '~/components/ImageGallery.vue'

const { vehicle } = defineProps({
    vehicle: {
        type: Object,
        required: true
    }
})

const activeTab = ref('overview')

const overviewSection = ref(null)
const specificationSection = ref(null)
const gallerySection = ref(null)

const scrollToSection = (section) => {
    activeTab.value = section

    const sections = {
        overview: overviewSection.value,
        specification: specificationSection.value,
        gallery: gallerySection.value
    }

    const element = sections[section]

    if (!element) return

    const headerOffset = 200

    const elementPosition =
        element.getBoundingClientRect().top + window.scrollY

    const offsetPosition = elementPosition - headerOffset

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    })
}

</script>

<template>
    <section class="scroll_tabbing" id="overview-section">
        <div class="tabbing-wrapper">
            <div class="fullwidth-container">
                <div class="tabbing-row">
                    <div class="tabbing-row-left">
                        <div class="tabbing-row-items" v-if="vehicle.showOverview"
                            :class="{ active: activeTab === 'overview' }" @click="scrollToSection('overview')">Overview
                        </div>
                        <div class="tabbing-row-items" v-if="vehicle.showSpecifications"
                            :class="{ active: activeTab === 'specification' }"
                            @click="scrollToSection('specification')">Specification</div>
                        <div class="tabbing-row-items" v-if="vehicle.showGallery"
                            :class="{ active: activeTab === 'gallery' }" @click="scrollToSection('gallery')">
                            Image Gallery</div>
                    </div>
                    <div class="tabbing-row-right">
                        <NuxtLink to="mailto: samer@ss-company.com" class="cta cta-outline-dark">Request a Catalog
                        </NuxtLink>
                        <NuxtLink to="/contact-us" class="cta cta-primary">Request More Information</NuxtLink>
                    </div>
                </div>
            </div>
        </div>

        <div class="tabbing-content">
            <div class="container" v-if="vehicle.showOverview">
                <div class="content-section" ref="overviewSection" id="overview-section ">
                    <div class="content-section-left reveal">
                        <div class="section-tag">{{ vehicle.overview.tag }}</div>
                        <h2 class="h2 section-title"> {{ vehicle.overview.title }}</h2>
                        <div class="description" v-html="vehicle.overview.description"></div>
                    </div>
                    <div class="content-section-image reveal">
                        <div class="content-section-image-wrap">
                            <img :src="vehicle.overview.image" width="586" height="486" :alt="vehicle.overview.title">
                        </div>
                    </div>
                </div>
            </div>

            <div class="fullwidth-container" v-if="vehicle.showSpecifications">
                <div class="specification" ref="specificationSection">
                    <h2 class="h2 section-title">Specification</h2>
                    <div class="icon-card-wrapper four-col">
                        <div class="icon-card" v-for="(spec, index) in vehicle.specifications" :key="index">
                            <div class="icon-card-image"> <span :class="spec.icon"></span></div>
                            <div class="icon-card-body">
                                <h5 v-if="spec.title" class="h5">
                                    {{ spec.title }}
                                </h5>
                                <span v-if="spec.value">{{ spec.value }}</span>
                            </div>
                        </div>

                        <div class="icon-card" v-if="vehicle.performanceImage"> 
                            <div class="icon-card-body">
                                <h5 class="h5">Superior Off-Road Performance</h5>
                                <div class="vehicle-performance">
                                    <img :src="vehicle.performanceImage" width="1920" height="490" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="fullwidth-container" v-if="vehicle.showGallery">
                <!-- Gallery -->
                <div class="image-gallery" ref="gallerySection">
                    <h2 class="h2 section-title">Gallery</h2>
                    <ImageGallery :images="vehicle.gallery" />
                </div>
            </div>
        </div>
    </section>
</template>
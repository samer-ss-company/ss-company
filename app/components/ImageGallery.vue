<template>
    <ClientOnly>
        <Swiper :modules="[Navigation, Pagination]" :space-between="20" :loop="true" :breakpoints="breakpoints"
            :navigation="true" :pagination="{
                el: '.gallery-pagination',
                clickable: true
            }" class="mySwiper">
            <SwiperSlide v-for="(image, index) in images" :key="index">
                <img :src="image" />
            </SwiperSlide>
        </Swiper>
        <div class="gallery-pagination"></div>
    </ClientOnly>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

defineProps({
    images: {
        type: Array,
        required: true
    }
})

const breakpoints = {
    0: {
        slidesPerView: 1,
        spaceBetween: 16
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 20
    },
    1024: {
        slidesPerView: 3,
        spaceBetween: 24
    }
}
</script>
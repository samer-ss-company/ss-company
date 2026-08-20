<script setup>
import { ref } from 'vue'

// 3. Centralized array containing text, icons, and video paths for each item
const cars = ref([
    {
        name: 'APC Rockx',
        videoPath: '/videos/apc-rockx-without-logo-music.mp4',
        lineIcon: '/images/apc-rockx-side-view.png',
        filledIcon: '/images/apc-rockx-side-view-filled.png',
        vehicleURL: '/apc-rockx'
    },
    {
        name: 'APC Predator',
        videoPath: '/videos/apc-predator.mp4', // Replace with your actual path
        lineIcon: '/images/apc-predator-side-view-outline.png',
        filledIcon: '/images/apc-predator-side-view-filled.png',
        vehicleURL: '/apc-predator'
    },
    {
        name: 'S Fighter 2',
        videoPath: '/videos/s-fighter-2.mp4', // Replace with your actual path
        lineIcon: '/images/s-fighter-2-outline.png',
        filledIcon: '/images/s-fighter-2-filled.png',
        vehicleURL: '/apc-s-fighter-2'
    },
    {
        name: 'S Fighter 3',
        videoPath: '/videos/s-fighter-2.mp4', // Replace with your actual path
        lineIcon: '/images/s-fighter-3-outline.png',
        filledIcon: '/images/s-fighter-3-filled.png',
        vehicleURL: '/apc-s-fighter-3'
    },
    {
        name: 'BATT S',
        videoPath: '/videos/s-fighter-2.mp4', // Replace with your actual path
        lineIcon: '/images/batt-s/batt-s-outline.png',
        filledIcon: '/images/batt-s/batt-s-filled.png',
        vehicleURL: '/batt-s'
    },
    {
        name: 'Kuvasz',
        videoPath: '/videos/s-fighter-2.mp4', // Replace with your actual path
        lineIcon: '/images/kuvasz/kuvasz-outline.png',
        filledIcon: '/images/kuvasz/kuvasz-filled.png',
        vehicleURL: '/kuvasz'
    },
    {
        name: 'BATT APEX',
        videoPath: '/videos/s-fighter-2.mp4', // Replace with your actual path
        lineIcon: '/images/s-fighter-3-outline.png',
        filledIcon: '/images/s-fighter-3-filled.png',
        vehicleURL: '/batt-apex'
    },
    {
        name: 'Terrier MLX',
        videoPath: '/videos/s-fighter-2.mp4', // Replace with your actual path
        lineIcon: '/images/s-fighter-3-outline.png',
        filledIcon: '/images/s-fighter-3-filled.png',
        vehicleURL: '/terrier-mlx'
    }
])
</script>


<template>
    <!-- Banner -->
    <section class="banner">
        <video poster="/images/herobanner-placeholder.jpg" autoplay muted loop playsinline class="banner-video">
            <source src="/videos/home-herobanner.mp4" type="video/mp4" />
        </video>
        <div class="fullwidth-container">
            <div class="banner-wrapper">
                <div class="banner-sidebar">
                    <ul class="banner-sidebar-car-list">
                        <li v-for="(car, index) in cars" :key="index" class="banner-sidebar-car-list-items">
                            <NuxtLink :to="car.vehicleURL">
                                <div class="car-icon">
                                    <img :src="car.lineIcon" class="line-icon">
                                    <img :src="car.filledIcon" class="filled-icon">
                                </div>
                                <span>{{ car.name }}</span>
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="banner-body">
                    <h1 class="h1">Defense. Security. Mobility.</h1>
                    <p>Double S Trading FZ-LLC is a UAE-based provider of defense, security, and specialized mobility
                        solutions, supporting government, law enforcement, and institutional customers through trusted
                        partnerships, compliance-focused execution, and international project delivery.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Marquee -->
    <section class="marquee-section">
        <div class="marquee-track">
            <div class="marquee-item"><span class="dot"></span> Ballistic Protection</div>
            <div class="marquee-item"><span class="dot"></span> Mine & IED Resistant</div>
            <div class="marquee-item"><span class="dot"></span> Protected Luxury Sedans</div>
            <div class="marquee-item"><span class="dot"></span> Tactical Command Vehicles</div>
            <div class="marquee-item"><span class="dot"></span> NATO STANAG Certified</div>
            <div class="marquee-item"><span class="dot"></span> Custom Armour Solutions</div>
            <div class="marquee-item"><span class="dot"></span> 24/7 Global Support</div>
            <div class="marquee-item"><span class="dot"></span> Ballistic Protection</div>
            <div class="marquee-item"><span class="dot"></span> Mine & IED Resistant</div>
            <div class="marquee-item"><span class="dot"></span> Protected Luxury Sedans</div>
            <div class="marquee-item"><span class="dot"></span> Tactical Command Vehicles</div>
            <div class="marquee-item"><span class="dot"></span> NATO STANAG Certified</div>
            <div class="marquee-item"><span class="dot"></span> Custom Armour Solutions</div>
            <div class="marquee-item"><span class="dot"></span> 24/7 Global Support</div>
        </div>
    </section>

    <!-- About Double S trading -->
    <section class="section-spacing-tb">
        <div class="container">
            <div class="content-section">
                <div class="content-section-left reveal">
                    <div class="section-tag">Who We Are</div>
                    <h2 class="h2 section-title">Delivering Defense, Security & Specialized Mobility Solutions.</h2>
                    <div class="description">
                        <p>Double S Trading FZ-LLC is a UAE-based defense and security solutions provider specializing
                            in
                            armored mobility, security technologies, and project delivery.</p>
                        <p>Through a trusted network of regional and international partners, we support government, law
                            enforcement, financial institutions, and critical infrastructure operators with integrated
                            solutions
                            tailored to operational requirements.</p>
                        <p>Since 2017, our focus has been on delivering reliable solutions backed by professional
                            project
                            management, regulatory compliance, and long-term customer support.</p>
                    </div>
                    <div class="content-section-features">
                        <div class="content-section-features-item reveal reveal-delay-1">
                            <h4 class="h4">Custom Builds</h4>
                            <p>Full bespoke engineering</p>
                        </div>
                        <div class="content-section-features-item reveal reveal-delay-2">
                            <h4 class="h4">Global Delivery</h4>
                            <p>International Project Delivery</p>
                        </div>
                        <div class="content-section-features-item reveal reveal-delay-1">
                            <h4 class="h4">Technical Support</h4>
                            <p>Independent ballistic testing</p>
                        </div>
                        <div class="content-section-features-item reveal reveal-delay-2">
                            <h4 class="h4">Aftermarket</h4>
                            <p>After-Sales Support</p>
                        </div>
                    </div>
                </div>
                <div class="content-section-image reveal">
                    <div class="content-section-image-wrap">
                        <img src="/images/home-about.webp" width="590" height="480" alt="APC Predator">
                        <!-- <div class="content-section-image-overlay"></div> -->
                        <div class="established-year-badge">
                            <p>2017</p>
                            <span>Established</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- PRODUCTS -->
    <section class="products">
        <div class="container">
            <div class="products-wrapper">
                <div class="products-header">
                    <div class="section-tag">Our Fleet</div>
                    <h2 class="h2 section-title">Combat-Proven. Mission-Ready.</h2>
                </div>
                <div class="products-grid">
                    <div class="product-card product-card-large">
                        <img src="/images/defence-vehicle.jpg" alt="Tactical APC">
                        <div class="product-card-content">
                            <div class="product-type">Defense Solutions</div>
                            <div class="product-name">Defense Platfrom</div>
                            <div class="product-desc">Armoured. Reliable. Ready for an mission</div>
                            <a class="product-link" href="/defense-solutions">View Specs</a>
                        </div>
                    </div>
                    <div class="product-card">
                        <img src="/images/commercial-vehicle.jpg" alt="Command Vehicle">
                        <div class="product-card-content">
                            <div class="product-type">Mission SUpport Solutions</div>
                            <div class="product-name">Mission Support Platform</div>
                            <div class="product-desc">Specialized vehicles for every critical mission.
                            </div>
                            <a class="product-link" href="/commercial-solutions">View Specs</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Why Choose Us -->
    <section class="section-spacing-tb">
        <div class="container">
            <h2 class="h2 section-title text-center">Why Double S Trading</h2>
            <div class="content-section">
                <div class="content-section-image reveal">
                    <div class="content-section-image-wrap">
                        <img src="/images/why-double-s.webp" width="590" height="480" alt="APC Predator">
                        <!-- <div class="content-section-image-overlay"></div> -->
                    </div>
                </div>
                <div class="content-section-left reveal">                    
                    <ul class="icon-list">
                        <li class="icon-list-items">
                            <div class="icon-list-items-image"><span class="ss-trusted"></span></div>
                            <div class="icon-list-items-body">
                                <h5 class="h5">Trusted International Partnerships</h5>
                                <p>Working with carefully selected regional and international manufacturers and technology providers to deliver integrated, mission-focused solutions.</p>
                            </div>
                        </li>
                        <li class="icon-list-items">
                            <div class="icon-list-items-image"><span class="ss-document-checklist"></span></div>
                            <div class="icon-list-items-body">
                                <h5 class="h5">Compliance-Focused Execution</h5>
                                <p>Supporting every project through structured regulatory compliance, export control procedures, documentation management, and end-user requirements.</p>
                            </div>
                        </li>
                        <li class="icon-list-items">
                            <div class="icon-list-items-image"><span class="ss-project-delivered"></span></div>
                            <div class="icon-list-items-body">
                                <h5 class="h5">End-to-End Project Delivery</h5>
                                <p>Managing every stage of the project lifecycle—from requirements analysis and solution development to procurement, logistics, delivery, and after-sales support.</p>
                            </div>
                        </li>
                        <li class="icon-list-items">
                            <div class="icon-list-items-image"><span class="ss-support"></span></div>
                            <div class="icon-list-items-body">
                                <h5 class="h5">Customer-Centric Approach</h5>
                                <p>Providing tailored solutions designed to meet each customer's operational, technical, and procurement requirements while building long-term partnerships based on trust and reliability.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
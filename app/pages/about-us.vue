<script setup>
import { vehicles } from '~/data/vehicles.js'

const vehicle = vehicles.about

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
    <section class="banner inner-banner about-hero" style="background-image: url('/images/about-hero.jpg');">
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

    <!-- Company Overview -->
    <section class="section-spacing-tb" id="overview-section">
        <div class="container">
            <div class="content-section">
                <div class="content-section-left reveal">
                    <div class="section-tag">Who We Are</div>
                    <h2 class="h2 section-title">Company Overview</h2>
                    <div class="description">
                        <p>Double S Trading FZ-LLC is a UAE-based defense and security solutions provider specializing
                            in armored mobility, security technologies, specialized commercial vehicles, and
                            international project execution.</p>
                        <p>Through a carefully selected network of regional and international partners, we support
                            government agencies, armed forces, law enforcement organizations, financial institutions,
                            and critical infrastructure operators with integrated solutions tailored to their
                            operational and procurement requirements.</p>
                        <p>Our capabilities extend beyond product supply to include solution development, procurement
                            coordination, regulatory compliance, logistics management, delivery, and long-term technical
                            support.</p>
                    </div>
                </div>
                <div class="content-section-image reveal">
                    <div class="content-section-image-wrap">
                        <img src="/images/company-overview.webp" width="590" height="480" alt="APC Predator">
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


    <!-- Mission and Vision -->
    <section>
        <div class="container">
            <div class="our-mission">
                <div class="our-mission-content">
                    <h3 class="h3">Our Mission</h3>
                    <p>To deliver reliable, compliant, and mission-focused defense, security, and specialized mobility
                        solutions that enable our customers to operate with confidence, efficiency, and operational
                        readiness.</p>

                    <h3 class="h3">Our Vision</h3>
                    <p>To be recognized as a trusted regional partner in defense, security, and specialized mobility by
                        delivering integrated solutions, professional project execution, and long-term customer value
                        across the Middle East, Africa, and Asia.</p>
                </div>
                <div class="our-mission-image">
                    <img src="/images/our-mission.jpg" width="1200" height="1200" alt="">
                </div>
            </div>
        </div>
    </section>

    <!-- Mission and VisiOur Values -->
    <section class="section-spacing-tb">
        <div class="container">
            <h2 class="h2 section-title">Our Values</h2>
            <div class="icon-card-wrapper light-grey-cards five-col">
                <div class="icon-card">
                    <div class="icon-card-image"> <span class="ss-Integrity"></span></div>
                    <div class="icon-card-body">
                        <h5 class="h5">Integrity</h5>
                        <span>Conducting business with transparency, professionalism, and accountability.</span>
                    </div>
                </div>
                <div class="icon-card">
                    <div class="icon-card-image"> <span class="ss-reliability"></span></div>
                    <div class="icon-card-body">
                        <h5 class="h5">Reliability</h5>
                        <span>Delivering solutions that meet operational requirements and customer expectations.</span>
                    </div>
                </div>
                <div class="icon-card">
                    <div class="icon-card-image"> <span class="ss-support"></span></div>
                    <div class="icon-card-body">
                        <h5 class="h5">Partnership</h5>
                        <span>Building long-term relationships with customers, manufacturers, and technology
                            providers.</span>
                    </div>
                </div>
                <div class="icon-card">
                    <div class="icon-card-image"> <span class="ss-document-checklist"></span></div>
                    <div class="icon-card-body">
                        <h5 class="h5">Compliance</h5>
                        <span>Maintaining strict adherence to applicable regulations, export controls, and contractual
                            obligations.</span>
                    </div>
                </div>
                <div class="icon-card">
                    <div class="icon-card-image"> <span class="ss-excellence"></span></div>
                    <div class="icon-card-body">
                        <h5 class="h5">Excellence</h5>
                        <span>Continuously improving our services, capabilities, and customer support.</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Why Choose Us -->
    <section class="section-spacing-b">
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
                                <p>Working with carefully selected regional and international manufacturers and
                                    technology providers to deliver integrated, mission-focused solutions.</p>
                            </div>
                        </li>
                        <li class="icon-list-items">
                            <div class="icon-list-items-image"><span class="ss-document-checklist"></span></div>
                            <div class="icon-list-items-body">
                                <h5 class="h5">Compliance-Focused Execution</h5>
                                <p>Supporting every project through structured regulatory compliance, export control
                                    procedures, documentation management, and end-user requirements.</p>
                            </div>
                        </li>
                        <li class="icon-list-items">
                            <div class="icon-list-items-image"><span class="ss-project-delivered"></span></div>
                            <div class="icon-list-items-body">
                                <h5 class="h5">End-to-End Project Delivery</h5>
                                <p>Managing every stage of the project lifecycle—from requirements analysis and solution
                                    development to procurement, logistics, delivery, and after-sales support.</p>
                            </div>
                        </li>
                        <li class="icon-list-items">
                            <div class="icon-list-items-image"><span class="ss-support"></span></div>
                            <div class="icon-list-items-body">
                                <h5 class="h5">Customer-Centric Approach</h5>
                                <p>Providing tailored solutions designed to meet each customer's operational, technical,
                                    and procurement requirements while building long-term partnerships based on trust
                                    and reliability.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Core Capabilities -->
    <section class="core-capabilities section-spacing-tb">
        <div class="container">
            <div class="core-capabilities-wrapper">
                <h2 class="h2 section-title text-center">Core Capabilities</h2>
                <ul class="core-capabilities-list">
                    <li>Defense Solutions</li>
                    <li>Armored Mobility</li>
                    <li>Security Technologies</li>
                    <li>Specialized Commercial Vehicles</li>
                    <li>International Procurement</li>
                    <li>Project Execution</li>
                    <li>Logistics Coordination</li>
                    <li>Technical Support</li>
                    <li>After-Sales Services</li>
                </ul>
            </div>
        </div>
    </section>
</template>
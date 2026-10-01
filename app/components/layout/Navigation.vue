<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from '#app'

const route = useRoute()

const isMenuOpen = ref(false)

const activeDropdown = ref<string | null>(null)

// Mobile menu
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

// Toggle dropdown
const toggleDropdown = (menu: string) => {
    activeDropdown.value =
        activeDropdown.value === menu ? null : menu
}

// Check if dropdown is active
const isDropdownOpen = (menu: string) => {
    return activeDropdown.value === menu
}

// Close everything
const closeMenu = () => {
    isMenuOpen.value = false
    activeDropdown.value = null
}

// Close on route change
watch(
    () => route.fullPath,
    () => {
        closeMenu()
    }
)

// Close on resize
const handleResize = () => {
    if (window.innerWidth > 991) {
        closeMenu()
    }
}

onMounted(() => {
    window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
})

// Popup
const isPopupOpen = ref(false)

const openPopup = () => {
    isPopupOpen.value = true
}

const closePopup = () => {
    isPopupOpen.value = false
}



const form = reactive({
    name: '',
    email: '',
    phone: '',
    message: '',
})

const loading = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const submitForm = async () => {
    loading.value = true
    successMessage.value = ''
    errorMessage.value = ''

    try {
        const response = await $fetch('/api/contact', {
            method: 'POST',
            body: {
                name: form.name,
                email: form.email,
                phone: form.phone,
                message: form.message,
            },
        })

        successMessage.value = 'Thank you! Your message has been sent successfully.'

        form.name = ''
        form.email = ''
        form.phone = ''
        form.message = ''
    } catch (error: any) {
        console.error(error)

        errorMessage.value =
            error?.data?.message ||
            'Something went wrong. Please try again.'
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <nav class="navbar">
        <div class="navbar-logo">
            <NuxtLink to="/"><img src="/images/logo.svg" width="196" height="56px" alt=""></NuxtLink>
        </div>
        <ul class="navbar-nav" :class="{ active: isMenuOpen }">
            <div class="close-menu"><span class="ss-clear" @click="closeMenu"></span></div>
            <li class="navbar-nav-item">
                <NuxtLink to="/about-us" class="navbar-nav-items" @click="closeMenu">About Us</NuxtLink>
            </li>
            <li class="navbar-nav-item dropdown">
                <div @click.prevent="toggleDropdown('defence')" class="navbar-nav-items">Defense Solutions <span
                        class="ss-angle-down"></span>
                </div>

                <div class="dropdown-menu" :class="{ active: isDropdownOpen('defence') }">
                    <span class="ss-clear close-dropdown" @click="closeMenu"></span>
                    <div class="dropdown-vehilce-list">
                        <NuxtLink to="/apc-rockx" class="dropdown-vehilce-items" @click="closeMenu">
                            <div class="dropdown-vehilce-image">
                                <img src="/images/apc-rockx/apc-rockx-menu.jpg" width="586" height="486"
                                    alt="APC Predator">
                            </div>
                            <div class="dropdown-vehilce-body">
                                <h6 class="h6">APC Rockx</h6>
                            </div>
                        </NuxtLink>
                        <NuxtLink to="/apc-predator" class="dropdown-vehilce-items" @click="closeMenu">
                            <div class="dropdown-vehilce-image">
                                <img src="/images/apc-predator-menu.jpg" width="586" height="486" alt="APC Predator">
                            </div>
                            <div class="dropdown-vehilce-body">
                                <h6 class="h6">APC Predator</h6>
                            </div>
                        </NuxtLink>
                        <NuxtLink to="/apc-s-fighter-3" class="dropdown-vehilce-items" @click="closeMenu">
                            <div class="dropdown-vehilce-image">
                                <img src="/images/apc-s-fighter-3-menu.jpg" width="586" height="486" alt="APC Predator">
                            </div>
                            <div class="dropdown-vehilce-body">
                                <h6 class="h6">APC S-fighter 3</h6>
                            </div>
                        </NuxtLink>
                        <NuxtLink to="/apc-s-fighter-2" class="dropdown-vehilce-items" @click="closeMenu">
                            <div class="dropdown-vehilce-image">
                                <img src="/images/apc-s-fighter-2-menu.jpg" width="586" height="486" alt="APC Predator">
                            </div>
                            <div class="dropdown-vehilce-body">
                                <h6 class="h6">APC S-fighter 2</h6>
                            </div>
                        </NuxtLink>
                        <NuxtLink to="/batt-s" class="dropdown-vehilce-items" @click="closeMenu">
                            <div class="dropdown-vehilce-image">
                                <img src="/images/batt-s-menu.jpg" width="586" height="486" alt="APC Predator">
                            </div>
                            <div class="dropdown-vehilce-body">
                                <h6 class="h6">BATT S</h6>
                            </div>
                        </NuxtLink>
                        <NuxtLink to="/kuvasz" class="dropdown-vehilce-items" @click="closeMenu">
                            <div class="dropdown-vehilce-image">
                                <img src="/images/kuvasz-menu.jpg" width="586" height="486" alt="APC Predator">
                            </div>
                            <div class="dropdown-vehilce-body">
                                <h6 class="h6">Kuvasz</h6>
                            </div>
                        </NuxtLink>
                        <NuxtLink to="/batt-apex" class="dropdown-vehilce-items" @click="closeMenu">
                            <div class="dropdown-vehilce-image">
                                <img src="/images/batt-apex-menu.jpg" width="586" height="486" alt="APC Predator">
                            </div>
                            <div class="dropdown-vehilce-body">
                                <h6 class="h6">BATT APEX</h6>
                            </div>
                        </NuxtLink>
                        <NuxtLink to="/terrier-mlx" class="dropdown-vehilce-items" @click="closeMenu">
                            <div class="dropdown-vehilce-image">
                                <img src="/images/terrier-mlx-menu.jpg" width="586" height="486" alt="APC Predator">
                            </div>
                            <div class="dropdown-vehilce-body">
                                <h6 class="h6">Terrier MLX</h6>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </li>

            <li class="navbar-nav-item dropdown">
                <div @click.prevent="toggleDropdown('commercial')" class="navbar-nav-items">Commercial Solutions <span
                        class="ss-angle-down"></span>
                </div>

                <div class="dropdown-menu" :class="{ active: isDropdownOpen('commercial') }">
                    <span class="ss-clear close-dropdown" @click="closeMenu"></span>
                    <div class="dropdown-vehilce-list">
                        <NuxtLink to="/tlc78-ambulance" class="dropdown-vehilce-items" @click="closeMenu">
                            <div class="dropdown-vehilce-image">
                                <img src="/images/tlc78-ambulance-menu.jpg" width="586" height="486" alt="APC Predator">
                            </div>
                            <div class="dropdown-vehilce-body">
                                <h6 class="h6">TLC78 Ambulance</h6>
                            </div>
                        </NuxtLink>
                        <NuxtLink to="/tlc-300" class="dropdown-vehilce-items" @click="closeMenu">
                            <div class="dropdown-vehilce-image">
                                <img src="/images/tlc300-menu.jpg" width="586" height="486" alt="APC Predator">
                            </div>
                            <div class="dropdown-vehilce-body">
                                <h6 class="h6">TLC 300 Black</h6>
                            </div>
                        </NuxtLink>
                        <NuxtLink to="/tahoe" class="dropdown-vehilce-items" @click="closeMenu">
                            <div class="dropdown-vehilce-image">
                                <img src="/images/tahoe-menu.jpg" width="586" height="486" alt="APC Predator">
                            </div>
                            <div class="dropdown-vehilce-body">
                                <h6 class="h6">TAHOE</h6>
                            </div>
                        </NuxtLink>
                        <NuxtLink to="/nissan-patrol" class="dropdown-vehilce-items" @click="closeMenu">
                            <div class="dropdown-vehilce-image">
                                <img src="/images/nissan-patrol-menu.jpg" width="586" height="486" alt="APC Predator">
                            </div>
                            <div class="dropdown-vehilce-body">
                                <h6 class="h6">Nissan Patrol</h6>
                            </div>
                        </NuxtLink>
                        <NuxtLink to="/lexus" class="dropdown-vehilce-items" @click="closeMenu">
                            <div class="dropdown-vehilce-image">
                                <img src="/images/lexus-menu.jpg" width="586" height="486" alt="APC Predator">
                            </div>
                            <div class="dropdown-vehilce-body">
                                <h6 class="h6">LEXUS</h6>
                            </div>
                        </NuxtLink>
                        <NuxtLink to="/gmc-yukon" class="dropdown-vehilce-items" @click="closeMenu">
                            <div class="dropdown-vehilce-image">
                                <img src="/images/gmc-yukon-menu.jpg" width="586" height="486" alt="APC Predator">
                            </div>
                            <div class="dropdown-vehilce-body">
                                <h6 class="h6">GMC YUKON</h6>
                            </div>
                        </NuxtLink>
                        <NuxtLink to="/coaster" class="dropdown-vehilce-items" @click="closeMenu">
                            <div class="dropdown-vehilce-image">
                                <img src="/images/coaster-menu.jpg" width="586" height="486" alt="APC Predator">
                            </div>
                            <div class="dropdown-vehilce-body">
                                <h6 class="h6">Coaster</h6>
                            </div>
                        </NuxtLink>
                        <NuxtLink to="/cadillac-escalade" class="dropdown-vehilce-items" @click="closeMenu">
                            <div class="dropdown-vehilce-image">
                                <img src="/images/cadillac-menu.jpg" width="586" height="486" alt="APC Predator">
                            </div>
                            <div class="dropdown-vehilce-body">
                                <h6 class="h6">Cadillac</h6>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </li>
            <!-- <li class="navbar-nav-item">
                <NuxtLink to="/" class="navbar-nav-items">Commercial Solutions</NuxtLink>
            </li> -->
            <li class="navbar-nav-item">
                <NuxtLink to="/brochure" class="navbar-nav-items">Brochure</NuxtLink>
            </li>
            <li class="navbar-nav-item">
                <NuxtLink to="/contact-us" class="navbar-nav-items" @click="closeMenu">Contact Us</NuxtLink>
            </li>
        </ul>
        <div class="menu-toggle" :class="{ active: isMenuOpen }" @click="toggleMenu"><span class="ss-menu"></span></div>
        <div class="">
            <button @click="openPopup" class="cta cta-primary"><span class="ss-contact"></span> <span
                    class="cta-text">Contact our team</span></button>
        </div>
    </nav>

    <!-- Popup -->
    <div v-if="isPopupOpen" class="popup-overlay" @click.self="closePopup">
        <div class="popup-content">
            <button class="popup-close" @click="closePopup">
                ✕
            </button>
            <div class="popup-header">
                <h4 class="h4">Get in Touch</h4>
            </div>
            <div class="popup-body">
                <form class="form-wrapper" @submit.prevent="submitForm">
                    <div class="form-group">
                        <label for="name" class="form-label">Full Name</label>

                        <input id="name" v-model.trim="form.name" class="form-control" type="text" name="name"
                            autocomplete="name" required />
                    </div>

                    <div class="form-group">
                        <label for="email" class="form-label">Email Address</label>

                        <input id="email" v-model.trim="form.email" class="form-control" type="email" name="email"
                            autocomplete="email" required />
                    </div>

                    <div class="form-group">
                        <label for="phone" class="form-label">Phone Number</label>

                        <input id="phone" v-model.trim="form.phone" class="form-control" type="tel" name="phone"
                            autocomplete="tel" />
                    </div>

                    <div class="form-group">
                        <label for="message" class="form-label">Message</label>

                        <textarea id="message" v-model.trim="form.message" class="form-control" name="message" rows="5"
                            required></textarea>
                    </div>

                    <div class="form-group">
                        <button type="submit" :disabled="loading" class="cta cta-primary">
                            {{ loading ? 'Sending...' : 'Send Message' }}
                        </button>

                        <p v-if="successMessage" class="form-success">
                            {{ successMessage }}
                        </p>

                        <p v-if="errorMessage" class="form-error">
                            {{ errorMessage }}
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
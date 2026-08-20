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
                                <img src="/images/apc-rockx/apc-rockx-menu.jpg" width="586" height="486" alt="APC Predator">
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
            <!-- <li class="navbar-nav-item">
                <NuxtLink to="/" class="navbar-nav-items">Projects</NuxtLink>
            </li> -->
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
            <div class="popup-header"><h4 class="h4">Get in Touch</h4></div>
            <div class="popup-body">
                <form action="" class="form-wrapper">
                    <div class="form-group">
                        <label for="" class="form-label">Name</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="" class="form-label">Phone</label>
                        <input type="number" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="" class="form-label">Email</label>
                        <input type="email" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="" class="form-label">Message</label>
                        <textarea name="" class="form-control" id=""></textarea>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="cta cta-primary"> Submit</button>
                    </div>                    
                </form>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from '#app'

const route = useRoute()

const isMenuOpen = ref(false)
const activeDropdown = ref(null)

// Mobile menu
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

// Toggle dropdown
const toggleDropdown = (menu) => {
    activeDropdown.value =
        activeDropdown.value === menu ? null : menu
}

// Check if dropdown is active
const isDropdownOpen = (menu) => {
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
</script>
<script setup lang="ts">
import { vehicles } from '~/data/vehicles.js'
import HeroBanner from '~/components/HeroBanner.vue'

const vehicle = vehicles.contact

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

    <!-- Banner -->
    <HeroBanner :vehicle="vehicle" />


    <section class="section-spacing-tb">
        <div class="container">
            <div class="contact">
                <div class="contact-left">
                    <div class="h2">Contact details</div>
                    <p>Let’s Make Your Car Buying Experience Seamless – Contact Us Today!</p>

                    <div class="contact-details">
                        <ul class="address-list">
                            <li>
                                <NuxtLink to="https://maps.app.goo.gl/v6qkpnAwLMmWqSEr6" target="_blank"><span
                                        class="ss-map-pin"></span> 57pr+gr8 - P7 floor - Business Bay -
                                    Dubai - United Arab Emirates</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="mailto:sales@ss-company.com"><span class="ss-email"></span>
                                    sales@ss-company.com</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="tel:+971 55 419 6611"><span class="ss-phone"></span> +971 55 419 6611
                                </NuxtLink>
                            </li>
                        </ul>

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28884.01006537048!2d55.292063!3d25.186313!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef6714ec02ef167%3A0x3d59b1f401e881cb!2sDouble%20S%20Trading!5e0!3m2!1sen!2sus!4v1783693178957!5m2!1sen!2sus"
                            width="100%" height="350" style="border:0;" allowfullscreen loading="lazy"
                            referrerpolicy="strict-origin-when-cross-origin"></iframe>
                    </div>
                </div>
                <div class="contact-right">
                    <div class="contact-form-heading">
                        <h4 class="h4"> Get in Touch</h4>
                        <p>Have a question? Looking for a specific vehicle or service? We’re here to help! Reach out to
                            our team for expert assistance, personalised recommendations, and seamless support.</p>
                        <form class="form-wrapper" @submit.prevent="submitForm">
                            <div class="form-group">
                                <label for="name" class="form-label">Full Name</label>

                                <input id="name" v-model.trim="form.name" class="form-control" type="text" name="name"
                                    autocomplete="name" required />
                            </div>

                            <div class="form-group">
                                <label for="email" class="form-label">Email Address</label>

                                <input id="email" v-model.trim="form.email" class="form-control" type="email"
                                    name="email" autocomplete="email" required />
                            </div>

                            <div class="form-group">
                                <label for="phone" class="form-label">Phone Number</label>

                                <input id="phone" v-model.trim="form.phone" class="form-control" type="tel" name="phone"
                                    autocomplete="tel" />
                            </div>

                            <div class="form-group">
                                <label for="message" class="form-label">Message</label>

                                <textarea id="message" v-model.trim="form.message" class="form-control" name="message"
                                    rows="5" required></textarea>
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
        </div>
    </section>
</template>
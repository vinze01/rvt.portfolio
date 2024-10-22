<template>
  <a-layout>
    <a-layout-content class="contact-card" data-aos="fade-up">
      <h1 class="contact-header" data-aos="fade-right">Contact Me</h1>
      <p class="contact-instruction" data-aos="fade-left">
        I'd love to hear from you! Please fill out the form below.
      </p>
      <a-form @submit.prevent="sendEmail" layout="vertical" data-aos="zoom-in">
        <a-form-item label="Name" required>
          <a-input
            v-model="form.name"
            placeholder="Your Name"
            class="contact-input"
            data-aos="fade-up"
            data-aos-delay="100"
          />
        </a-form-item>
        <a-form-item label="Email" required>
          <a-input
            v-model="form.email"
            placeholder="Your Email"
            class="contact-input"
            data-aos="fade-up"
            data-aos-delay="200"
          />
        </a-form-item>
        <a-form-item label="Message" required>
          <a-textarea
            v-model="form.message"
            rows="4"
            placeholder="Your Message"
            class="contact-textarea"
            data-aos="fade-up"
            data-aos-delay="300"
          />
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            html-type="submit"
            class="submit-button"
            data-aos="fade-up"
            data-aos-delay="400"
            >Send Email</a-button
          >
        </a-form-item>
      </a-form>
    </a-layout-content>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

export default defineComponent({
  name: "Contact",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    sendEmail() {
      const subject = `Contact from ${this.form.name}`;
      const body = `Name: ${this.form.name}\nEmail: ${this.form.email}\nMessage: ${this.form.message}`;
      const mailtoLink = `mailto:youremail@example.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
    },
  },
  mounted() {
    AOS.init();
  },
});
</script>

<style scoped>
.contact-card {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  background: #ffffff;
}

.contact-header {
  text-align: center;
  margin-bottom: 16px;
  font-size: 2em;
  color: #4a4a4a;
}

.contact-instruction {
  text-align: center;
  margin-bottom: 24px;
  font-size: 1.1em;
  color: #757575;
}

.contact-input,
.contact-textarea {
  border-radius: 5px;
}

.submit-button {
  width: 100%;
  font-weight: bold;
}
</style>

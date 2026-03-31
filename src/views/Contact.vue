<template>
  <div class="contact-page">
    <section class="contact-hero">
      <div class="container">
        <h1 class="page-title">Get In Touch</h1>
        <p class="page-subtitle">Have a project in mind? Let's work together!</p>
      </div>
    </section>

    <section class="contact-content">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <h2>Let's Connect</h2>
            <p class="info-description">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out through any of the following channels.
            </p>
            
            <div class="contact-methods">
              <div class="contact-method">
                <div class="method-icon">
                  <MailOutlined />
                </div>
                <div class="method-details">
                  <span class="method-label">Email</span>
                  <a href="mailto:robin.vince01@gmail.com" class="method-value">
                    robin.vince01@gmail.com
                  </a>
                </div>
              </div>
              
              <div class="contact-method">
                <div class="method-icon">
                  <EnvironmentOutlined />
                </div>
                <div class="method-details">
                  <span class="method-label">Location</span>
                  <span class="method-value">Las Piñas City, Philippines</span>
                </div>
              </div>
              
              <div class="contact-method">
                <div class="method-icon">
                  <ClockCircleOutlined />
                </div>
                <div class="method-details">
                  <span class="method-label">Availability</span>
                  <span class="method-value available">Open for opportunities</span>
                </div>
              </div>
            </div>

            <div class="social-section">
              <h3>Find Me On</h3>
              <div class="social-links">
                <a href="https://github.com/vinze01" target="_blank" rel="noopener noreferrer" class="social-link" title="GitHub">
                  <GithubOutlined />
                </a>
                <a href="https://www.linkedin.com/in/rvt-dev/" target="_blank" rel="noopener noreferrer" class="social-link" title="LinkedIn">
                  <LinkedinOutlined />
                </a>
                <a href="https://www.facebook.com/veeenss/" target="_blank" rel="noopener noreferrer" class="social-link" title="Instagram">
                  <FacebookOutlined />
                </a>
              </div>
            </div>
          </div>

          <div class="contact-form-wrapper">
            <form @submit.prevent="sendEmail" class="contact-form">
              <h2>Send a Message</h2>
              
              <div class="form-group">
                <label for="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div class="form-group">
                <label for="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div class="form-group">
                <label for="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  v-model="form.subject" 
                  placeholder="What's this about?"
                  required
                />
              </div>
              
              <div class="form-group">
                <label for="message">Message</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  placeholder="Tell me about your project..."
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" class="submit-btn">
                <SendOutlined />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <a-modal
      v-model:visible="showSuccessModal"
      title="Message Sent!"
      :footer="null"
      @ok="showSuccessModal = false"
      class="success-modal"
    >
      <div class="success-content">
        <CheckCircleOutlined class="success-icon" />
        <p>Thank you for reaching out! I'll get back to you as soon as possible.</p>
      </div>
    </a-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { 
  MailOutlined, 
  EnvironmentOutlined, 
  ClockCircleOutlined,
  GithubOutlined,
  LinkedinOutlined,
  FacebookOutlined,
  SendOutlined,
  CheckCircleOutlined
} from "@ant-design/icons-vue";

export default defineComponent({
  name: "Contact",
  components: {
    MailOutlined,
    EnvironmentOutlined,
    ClockCircleOutlined,
    GithubOutlined,
    LinkedinOutlined,
    FacebookOutlined,
    SendOutlined,
    CheckCircleOutlined
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        message: ""
      },
      showSuccessModal: false
    };
  },
  methods: {
    sendEmail() {
      const subject = encodeURIComponent(this.form.subject);
      const body = `Name: ${this.form.name}\nEmail: ${this.form.email}\n\nMessage:\n${this.form.message}`;
      const mailtoLink = `mailto:robinvincetupil@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
      this.showSuccessModal = true;
      this.form = { name: "", email: "", subject: "", message: "" };
    },
  },
});
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.contact-hero {
  padding: 4rem 0 3rem;
  text-align: center;
  background: linear-gradient(180deg, var(--color-bg-secondary) 0%, var(--color-bg) 100%);
}

.page-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-subtitle {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
}

.contact-content {
  padding: 4rem 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: start;
}

.contact-info h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.info-description {
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: 2rem;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.method-icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-primary);
  border-radius: 14px;
  font-size: 1.25rem;
  color: white;
}

.method-details {
  display: flex;
  flex-direction: column;
}

.method-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-secondary);
  margin-bottom: 0.25rem;
}

.method-value {
  font-weight: 600;
  color: var(--color-text);
  text-decoration: none;
}

.method-value.available {
  color: #22c55e;
}

.social-section h3 {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.social-links {
  display: flex;
  gap: 0.75rem;
}

.social-link {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  font-size: 1.25rem;
  color: var(--color-text);
  text-decoration: none;
  transition: all 0.2s ease;
}

.social-link:hover {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: white;
  transform: translateY(-3px);
}

.contact-form-wrapper {
  background: var(--color-bg-card);
  padding: 2.5rem;
  border-radius: 24px;
  box-shadow: var(--shadow-lg);
}

.contact-form h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.25rem;
}

.form-group label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.875rem 1rem;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  font-size: 1rem;
  color: var(--color-text);
  transition: all 0.2s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--color-text-secondary);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  background: var(--gradient-primary);
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.4);
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5);
}

.success-content {
  text-align: center;
  padding: 1rem 0;
}

.success-icon {
  font-size: 4rem;
  color: #22c55e;
  margin-bottom: 1rem;
}

.success-content p {
  color: var(--color-text-secondary);
  font-size: 1.125rem;
}

@media (max-width: 968px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .contact-form-wrapper {
    padding: 1.5rem;
  }
}
</style>

<style>
.success-modal .ant-modal-content {
  background: var(--color-bg-card);
}

.success-modal .ant-modal-title {
  color: var(--color-text);
  font-weight: 700;
}
</style>

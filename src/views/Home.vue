<template>
  <div class="home">
    <section class="hero">
      <div class="hero-bg">
        <div class="hero-gradient"></div>
        <div class="hero-pattern"></div>
      </div>
      
      <div class="hero-content">
        <div class="hero-text">
          <div class="greeting">
            <span class="wave">👋</span>
            <span>Hello, I'm</span>
          </div>
          
          <h1 class="hero-name">
            Robin Vince Tupil
          </h1>
          
          <div class="typing-container">
            <span class="typing-text">{{ currentText }}</span>
            <span class="typing-cursor">|</span>
          </div>
          
          <p class="hero-description">
            A passionate Full Stack Developer specializing in building exceptional digital experiences. 
            I love creating elegant solutions to complex problems using modern technologies.
          </p>
          
          <div class="hero-cta">
            <router-link to="/projects" class="btn btn-primary">
              <ProjectOutlined />
              View My Work
            </router-link>
            <router-link to="/contact" class="btn btn-outline">
              <MailOutlined />
              Get In Touch
            </router-link>
          </div>
          
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-number">4+</span>
              <span class="stat-label">Projects</span>
            </div>
            <div class="stat">
              <span class="stat-number">3+</span>
              <span class="stat-label">Years Experience</span>
            </div>
            <div class="stat">
              <span class="stat-number">10+</span>
              <span class="stat-label">Technologies</span>
            </div>
          </div>
        </div>
        
        <div class="hero-visual">
          <div class="profile-wrapper">
            <div class="profile-ring"></div>
            <div class="profile-ring delay-1"></div>
            <div class="profile-ring delay-2"></div>
            <img src="@/assets/profile.jpg" alt="Profile Picture" class="profile-image" />
          </div>
          
          <div class="floating-badge badge-1">
            <VueLogo />
            <span>Vue.js</span>
          </div>
          <div class="floating-badge badge-2">
            <NodeJsIcon />
            <span>Node.js</span>
          </div>
          <div class="floating-badge badge-3">
            <TypescriptIcon />
            <span>TypeScript</span>
          </div>
        </div>
      </div>
      
      <div class="scroll-indicator">
        <ArrowDownOutlined />
        <span>Scroll to explore</span>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import { ProjectOutlined, MailOutlined, ArrowDownOutlined } from "@ant-design/icons-vue";

const roles = [
  "Full Stack Developer",
  "Vue.js Specialist",
  "Node.js Developer",
  "Problem Solver"
];

export default defineComponent({
  name: "Home",
  components: {
    ProjectOutlined,
    MailOutlined,
    ArrowDownOutlined,
    VueLogo: {
      template: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M2 3.252l9.384-1.728L12 3.257l.616 1.767L22 3.252l-1.662 9.015L12 21.983 3.662 12.267 2 3.252zm14.68 1.92l-1.494 7.757-7.757-1.494 1.494-7.757 7.757 1.494zM12 6.984l-.954 4.858L6.468 13.35l4.532.876L12 18.63l1.001-4.404 4.532-.876-4.578-1.508L12 6.984z"/></svg>`
    },
    NodeJsIcon: {
      template: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5c-.08-.04-.12-.1-.12-.17V6.88c0-.09.05-.16.13-.21l7.44-4.29c.08-.05.16-.05.22 0l7.44 4.29c.08.05.13.12.13.21v8.6c0 .07-.04.13-.12.17l-7.44 4.29c-.47.2-.78.72-.78 1.28v.15c0 .85.76 1.54 1.71 1.54 1.4 0 2.21-.85 2.21-2.33V7.08c0-.56-.3-1.08-.78-1.36l-1.95-1.12c-.95-.46-1.27-.47-1.71-.47-.95 0-1.54.34-1.54.92 0 .3.16.57.42.73l7.08 4.09c.25.14.54.14.78 0l7.08-4.09c.26-.15.42-.42.42-.73 0-1.4-.81-2.21-2.21-2.21-.44 0-1.02.05-2.08.55l-1.95 1.12z"/></svg>`
    },
    TypescriptIcon: {
      template: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.495.074-1.089l.003.002zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.133-.095-.14l-1.378.845c.231.459.532.879.994 1.137.615.32 1.474.268 1.942-.062.522-.364.762-.949.762-1.892-.002-2.813-.006-5.625-.006-8.437h1.686c0 2.931-.007 5.864-.007 8.797 0 .912.025 1.684-.093 2.017-.167.512-.77.451-1.113.378-.271-.105-.435-.266-.638-.528-.066-.088-.116-.145-.132-.158l-1.379.846c.228.409.489.729.909.965.713.293 1.652.213 2.031-.249.255-.348.307-.828.307-1.545.003-2.906.006-5.81.006-8.716l.001.001z"/></svg>`
    }
  },
  setup() {
    const currentText = ref('');
    const currentIndex = ref(0);
    const charIndex = ref(0);
    const isDeleting = ref(false);
    let interval: number | null = null;

    const typeEffect = () => {
      const currentRole = roles[currentIndex.value];
      
      if (isDeleting.value) {
        currentText.value = currentRole.substring(0, charIndex.value - 1);
        charIndex.value--;
      } else {
        currentText.value = currentRole.substring(0, charIndex.value + 1);
        charIndex.value++;
      }

      let typeSpeed = isDeleting.value ? 50 : 100;

      if (!isDeleting.value && charIndex.value === currentRole.length) {
        typeSpeed = 2000;
        isDeleting.value = true;
      } else if (isDeleting.value && charIndex.value === 0) {
        isDeleting.value = false;
        currentIndex.value = (currentIndex.value + 1) % roles.length;
        typeSpeed = 500;
      }

      interval = window.setTimeout(typeEffect, typeSpeed);
    };

    onMounted(() => {
      typeEffect();
    });

    onUnmounted(() => {
      if (interval) {
        clearTimeout(interval);
      }
    });

    return {
      currentText
    };
  },
});
</script>

<style scoped>
.home {
  min-height: calc(100vh - 80px);
}

.hero {
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 2rem;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-gradient {
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(ellipse 80% 50% at 20% 40%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse 60% 40% at 80% 60%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
}

.hero-pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(var(--color-border) 1px, transparent 1px);
  background-size: 24px 24px;
  opacity: 0.5;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-text {
  animation: slideUp 0.8s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.greeting {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.125rem;
  color: var(--color-primary);
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.wave {
  animation: wave 2s infinite;
}

@keyframes wave {
  0%, 100% { transform: rotate(0deg); }
  10%, 30% { transform: rotate(-10deg); }
  20%, 40% { transform: rotate(10deg); }
  50% { transform: rotate(0deg); }
}

.hero-name {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, var(--color-text) 0%, var(--color-primary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.typing-container {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
  min-height: 2rem;
}

.typing-text {
  display: inline;
}

.typing-cursor {
  display: inline-block;
  animation: blink 1s infinite;
  color: var(--color-primary);
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.hero-description {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 500px;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-primary {
  background: var(--gradient-primary);
  color: white;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.4);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5);
}

.btn-outline {
  background: transparent;
  color: var(--color-text);
  border: 2px solid var(--color-border);
}

.btn-outline:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
  transform: translateY(-2px);
}

.hero-stats {
  display: flex;
  gap: 2.5rem;
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-primary);
}

.stat-label {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
}

.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
  animation: slideLeft 0.8s ease-out 0.2s both;
}

@keyframes slideLeft {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.profile-wrapper {
  position: relative;
  width: 320px;
  height: 320px;
}

.profile-ring {
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  border: 2px solid var(--color-primary);
  opacity: 0.3;
  animation: pulse 3s infinite;
}

.profile-ring.delay-1 {
  animation-delay: 1s;
}

.profile-ring.delay-2 {
  animation-delay: 2s;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.1;
  }
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: var(--shadow-xl);
}

.floating-badge {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  background: var(--color-bg-card);
  border-radius: 12px;
  box-shadow: var(--shadow-lg);
  font-weight: 600;
  font-size: 0.875rem;
  animation: float 3s ease-in-out infinite;
}

.floating-badge span {
  color: var(--color-text);
}

.badge-1 {
  top: 20%;
  left: -20%;
  animation-delay: 0s;
}

.badge-2 {
  top: 50%;
  right: -25%;
  animation-delay: 1s;
}

.badge-3 {
  bottom: 10%;
  left: -10%;
  animation-delay: 2s;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text-secondary);
  font-size: 0.875rem;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(10px); }
}

@media (max-width: 968px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }

  .hero-name {
    font-size: 2.5rem;
  }

  .hero-description {
    margin: 0 auto 2rem;
  }

  .hero-cta {
    justify-content: center;
  }

  .hero-stats {
    justify-content: center;
  }

  .hero-visual {
    order: -1;
  }

  .profile-wrapper {
    width: 240px;
    height: 240px;
  }

  .floating-badge {
    display: none;
  }

  .scroll-indicator {
    display: none;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 1rem;
  }

  .hero-name {
    font-size: 2rem;
  }

  .typing-container {
    font-size: 1.25rem;
  }

  .hero-cta {
    flex-direction: column;
  }

  .btn {
    justify-content: center;
  }

  .hero-stats {
    gap: 1.5rem;
  }

  .stat-number {
    font-size: 1.5rem;
  }
}
</style>

<template>
  <div class="about-page">
    <section class="about-hero">
      <div class="container">
        <h1 class="page-title">About Me</h1>
        <p class="page-subtitle">Get to know the developer behind the code</p>
      </div>
    </section>

    <section class="about-content">
      <div class="container">
        <div class="content-grid">
          <div class="about-text">
            <h2>Who I Am</h2>
            <p>
              I'm a dedicated software developer with a passion for building innovative solutions. 
              With expertise in modern web technologies, I specialize in creating responsive, 
              user-friendly applications that solve real-world problems.
            </p>
            <p>
              Throughout my career, I've had the opportunity to work on diverse projects including 
              HRIS, LMS, DMS, and various web applications. I pride myself on writing 
              production-ready code, designing efficient APIs, and creating seamless 
              integrations between front-end and back-end systems.
            </p>
            <p>
              I also actively explore AI and emerging technologies, 
              continuously learning and integrating new tools and approaches into my development workflow.
            </p>

            <div class="highlights">
              <div class="highlight-item">
                <CheckCircleOutlined />
                <span>Production-ready code</span>
              </div>
              <div class="highlight-item">
                <CheckCircleOutlined />
                <span>API Design & Integration</span>
              </div>
              <div class="highlight-item">
                <CheckCircleOutlined />
                <span>Version Control</span>
              </div>
              <div class="highlight-item">
                <CheckCircleOutlined />
                <span>AI & Emerging Technologies</span>
              </div>
            </div>
          </div>

          <div class="about-image">
            <div class="image-wrapper">
              <img src="@/assets/profile2.jpg" alt="About Me" />
              <div class="image-decoration"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="experience-section">
      <div class="container">
        <h2 class="section-title">Work Experience</h2>
        <div class="experience-list">
          <div 
            class="experience-item" 
            v-for="(exp, index) in experiences" 
            :key="index"
            :class="{ active: expandedIndex === index }"
            @click="toggleExpand(index)"
          >
            <div class="experience-header">
              <div class="experience-header-left">
                <span class="timeline-date">{{ exp.period }}</span>
                <h3 class="timeline-title">{{ exp.title }}</h3>
                <p class="timeline-company">{{ exp.company }}</p>
              </div>
              <div class="expand-icon">
                <DownOutlined />
              </div>
            </div>
            <div class="experience-body" v-show="expandedIndex === index">
              <ul class="timeline-points">
                <li v-for="(point, idx) in exp.points" :key="idx">{{ point }}</li>
              </ul>
              <div class="timeline-tags">
                <span v-for="tag in exp.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="skills-section">
      <div class="container">
        <h2 class="section-title">Skills & Technologies</h2>
        
        <div class="skills-showcase">
          <div class="skills-floating">
            <div 
              class="skill-float" 
              v-for="skill in allSkills" 
              :key="skill.name"
            >
              <img :src="skill.logo" :alt="skill.name" />
              <span class="skill-tooltip">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="education-section">
      <div class="container">
        <h2 class="section-title">Education</h2>
        <div class="education-grid">
          <div class="education-card" v-for="edu in education" :key="edu.school">
            <div class="edu-icon">
              <BankOutlined />
            </div>
            <div class="edu-content">
              <h3>{{ edu.school }}</h3>
              <p class="edu-degree">{{ edu.degree }}</p>
              <p class="edu-period">{{ edu.period }}</p>
              <p class="edu-location">{{ edu.location }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CheckCircleOutlined, BankOutlined, DownOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  name: "About",
  components: {
    CheckCircleOutlined,
    BankOutlined,
    DownOutlined
  },
  data() {
    return {
      expandedIndex: 0,
      experiences: [
        {
          title: "Software Engineer",
          company: "TLSContact - Makati, Philippines",
          period: "April 2025 - Present",
          points: [
            "Developed and migrated UI from legacy codebase to modern portal, improving maintainability and user experience",
            "Built scalable and reusable UI components using modern technologies",
            "Integrated RESTful APIs to connect frontend applications with backend services",
            "Collaborated with cross-functional teams to deliver features and resolve issues in production",
            "Participated in code reviews and followed best practices for clean, maintainable code"
          ],
          tags: ["UI Development", "REST APIs", "Code Review", "Best Practices"]
        },
        {
          title: "Full Stack Developer",
          company: "Centralized Cloud Computing International - Makati, Philippines",
          period: "Aug 2022 - March 2025",
          points: [
            "Wrote production-ready code with fluency in modern front-end and back-end frameworks",
            "Worked with back-end developers to design APIs",
            "Contributed and collaborated on multiple projects including HRIS, LMS, DMS, Media Sharing Application, Chat Bot App, and Gaming Website",
            "Developed and integrated REST APIs bridging front-end and back-end components",
            "Handled a group of interns and taught frameworks",
            "Managed version control and deployment of projects ensuring smooth integration and continuous delivery",
            "As assistant team lead, coordinated tasks, supported junior developers, and ensured project milestones were met"
          ],
          tags: ["Full Stack", "API Design", "Team Leadership", "Version Control", "Deployment"]
        },
        {
          title: "Full Stack Developer Intern",
          company: "Centralized Cloud Computing International - Makati, Philippines",
          period: "Feb 2022 - May 2022",
          points: [
            "Learned new emerging technologies and took initiative to offer technical direction and creative solutions",
            "Assisted with creating cross-platform UI web components and built responsive applications using frontend frameworks",
            "Integrated APIs in front-end",
            "Reviewed and debugged codes while working on improving the efficiency and functionality of the software system"
          ],
          tags: ["Frontend", "Responsive Design", "API Integration", "Debugging"]
        }
      ],
      allSkills: [
        { name: "Vue.js", logo: "https://vuejs.org/images/logo.png" },
        { name: "Nuxt.js", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/NuxtJS_Logo.png" },
        { name: "TypeScript", logo: "https://imgs.search.brave.com/n1OO9whK_AT0eLAtByiStpy0ioE1JUic6Ndocs9OfmU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi80LzRjL1R5/cGVzY3JpcHRfbG9n/b18yMDIwLnN2Zy8y/NTBweC1UeXBlc2Ny/aXB0X2xvZ29fMjAy/MC5zdmcucG5n" },
        { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg" },
        { name: "HTML/CSS", logo: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png" },
        { name: "Node.js", logo: "https://imgs.search.brave.com/ag8c9p62o2Uw_YrOnOQfWKRM4Ma_DxgQtf5v-0oirtQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL25vZGUt/anM2MzA0LmxvZ293/aWsuY29tLndlYnA" },
        { name: "Express.js", logo: "https://imgs.search.brave.com/-0WoIV7oC4qypdwev_0UzmOGsHOyIKvkc81UbWhB5zk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL2V4cHJl/c3MtanMxNzIwODk1/NDk3LmxvZ293aWsu/Y29tLndlYnA" },
        { name: "npm", logo: "https://imgs.search.brave.com/lkeWb6DaOjeUPFyKK32QfHoks8wH7PW-sq7bGvplIuI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/aWNvbnM4LmNvbS9l/eHRlcm5hbC10YWwt/cmV2aXZvLWNvbG9y/LXRhbC1yZXZpdm8v/MTIwMC9leHRlcm5h/bC1ucG0tYS1wYWNr/YWdlLW1hbmFnZXIt/Zm9yLXRoZS1qYXZh/c2NyaXB0LXByb2dy/YW1taW5nLWxhbmd1/YWdlLWxvZ28tY29s/b3ItdGFsLXJldml2/by5qcGc" },
        { name: "PHP", logo: "https://www.svgrepo.com/show/303656/php-logo.svg" },
        { name: "Python", logo: "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png" },
        { name: "MySQL", logo: "https://cdn.iconscout.com/icon/free/png-256/free-mysql-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-3030165.png?f=webp&w=256" },
        { name: "Sequelize", logo: "https://imgs.search.brave.com/5ckjGePkG0jfg8Gj_qo6Wb5UYDzdOZjFbqdXxryQNJE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9naXRo/dWIuY29tL3NlcXVl/bGl6ZS9zZXF1ZWxp/emUvcmF3L21haW4v/bG9nby5zdmc" },
        { name: "MongoDB", logo: "https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175140.png?f=webp&w=256" },
        { name: "SQLite", logo: "https://cdn.icon-icons.com/icons2/2699/PNG/512/sqlite_logo_icon_169724.png" },
        { name: "Docker", logo: "https://i0.wp.com/www.kitamur.com/wp-content/uploads/2020/12/docker.png?fit=512%2C512&ssl=1" },
        { name: "Git", logo: "https://imgs.search.brave.com/fPJ_EkZNry8fLAQ89QVfurbx4NPTL6k7KdxAF8ofakU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZGxvZ29zLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMS8x/MS9naXQtbG9nby01/MTJ4NTEyLnBuZw" },
        { name: "Tailwind", logo: "https://imgs.search.brave.com/wSOnOOg2EUrenyo8NcJ86dls3hdoXLz1xMblxCg4gs4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy90YWlsd2luZGNz/cy5zdmc" },
        { name: "Flutter", logo: "https://logosandtypes.com/wp-content/uploads/2021/04/Flutter.png" }
      ],
      education: [
        {
          school: "Adamson University",
          degree: "Bachelor's Degree in Information Technology",
          period: "2018 - 2022",
          location: "Manila, Philippines"
        },
        {
          school: "STI College",
          degree: "Technical-Vocational-Livelihood Track",
          period: "2016 - 2018",
          location: "Las Piñas City, Philippines"
        },
        {
          school: "Las Pinas East National High School",
          degree: "High School Diploma",
          period: "2012 - 2016",
          location: "Las Piñas City, Philippines"
        }
      ]
    };
  },
  methods: {
    toggleExpand(index: number) {
      this.expandedIndex = this.expandedIndex === index ? -1 : index;
    }
  }
});
</script>

<style scoped>
.about-page {
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.about-hero {
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

.about-content {
  padding: 4rem 0;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.about-text p {
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: 1rem;
}

.highlights {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 2rem;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-text);
  font-weight: 500;
}

.highlight-item :deep(.anticon) {
  color: var(--color-primary);
  font-size: 1.25rem;
}

.about-image {
  display: flex;
  justify-content: center;
}

.image-wrapper {
  position: relative;
  width: 350px;
  height: 400px;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
  position: relative;
  z-index: 1;
}

.image-decoration {
  position: absolute;
  inset: 25px -25px -25px 25px;
  background: var(--gradient-primary);
  border-radius: 24px;
  opacity: 0.3;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
}

.section-subtitle {
  text-align: center;
  color: var(--color-text-secondary);
  margin-bottom: 3rem;
}

.experience-section,
.skills-section,
.education-section {
  padding: 5rem 0;
}

.experience-section {
  background: var(--color-bg-secondary);
}

.experience-list {
  max-width: 800px;
  margin: 0 auto;
}

.experience-item {
  background: var(--color-bg-card);
  border-radius: 16px;
  margin-bottom: 1rem;
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
}

.experience-item:hover {
  box-shadow: var(--shadow-md);
}

.experience-item.active {
  box-shadow: var(--shadow-md);
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
}

.experience-header-left {
  flex: 1;
}

.expand-icon {
  color: var(--color-primary);
  font-size: 1rem;
  transition: transform 0.3s ease;
}

.experience-item.active .expand-icon {
  transform: rotate(180deg);
}

.experience-body {
  padding: 0 1.5rem 1.5rem;
  border-top: 1px solid var(--color-border);
}

.timeline-date {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: rgba(99, 102, 241, 0.1);
  color: var(--color-primary);
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.timeline-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.timeline-company {
  color: var(--color-text-secondary);
  font-weight: 500;
  font-size: 0.875rem;
  margin-bottom: 0;
}

.timeline-description {
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.timeline-points {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
}

.timeline-points li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
}

.timeline-points li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5rem;
  width: 6px;
  height: 6px;
  background: var(--color-primary);
  border-radius: 50%;
}

.timeline-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  padding: 0.25rem 0.75rem;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  font-size: 0.75rem;
  color: var(--color-text-secondary);
}

.skills-showcase {
  display: flex;
  justify-content: center;
}

.skills-floating {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  max-width: 700px;
}

.skill-float {
  position: relative;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg-card);
  border-radius: 16px;
  box-shadow: var(--shadow-md);
  cursor: pointer;
  transition: all 0.3s ease;
}

.skill-float:hover {
  transform: translateY(-8px) scale(1.1);
  box-shadow: 0 20px 40px rgba(99, 102, 241, 0.3);
}

.skill-float:hover .skill-tooltip {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

.skill-float img {
  width: 36px;
  height: 36px;
  object-fit: contain;
}

.skill-tooltip {
  position: absolute;
  bottom: -32px;
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  background: var(--color-bg-card);
  color: var(--color-text);
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-md);
  pointer-events: none;
}

.skill-float {
  position: relative;
}

.education-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.education-card {
  background: var(--color-bg-card);
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: var(--shadow-sm);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.education-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.edu-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-primary);
  border-radius: 16px;
  font-size: 1.5rem;
  color: white;
}

.edu-content h3 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.edu-degree {
  color: var(--color-primary);
  font-weight: 500;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
}

.edu-period {
  color: var(--color-text-secondary);
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
}

.edu-location {
  color: var(--color-text-secondary);
  font-size: 0.75rem;
}

@media (max-width: 968px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .about-image {
    order: -1;
  }

  .image-wrapper {
    width: 280px;
    height: 320px;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .education-grid {
    grid-template-columns: 1fr;
  }

  .highlights {
    grid-template-columns: 1fr;
  }
}
</style>

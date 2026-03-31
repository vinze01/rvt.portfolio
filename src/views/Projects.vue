<template>
  <div class="projects-page">
    <section class="projects-hero">
      <div class="container">
        <h1 class="page-title">My Projects</h1>
        <p class="page-subtitle">Showcasing my work and technical journey</p>
      </div>
    </section>

    <section class="projects-content">
      <div class="container">
        <div class="projects-grid">
          <article 
            class="project-card" 
            v-for="project in projects" 
            :key="project.id"
            @click="showProjectDetails(project)"
          >
            <div class="card-image">
              <img :src="project.image" :alt="project.title" />
              <div class="card-overlay">
                <EyeOutlined />
                <span>View Details</span>
              </div>
            </div>
            <div class="card-content">
              <div class="card-header">
                <h3 class="card-title">{{ project.title }}</h3>
                <span v-if="project.ongoing" class="ongoing-badge">Ongoing</span>
              </div>
              <p class="card-description">{{ project.description }}</p>
              <div class="card-tech">
                <span 
                  v-for="tech in project.technologies.slice(0, 3)" 
                  :key="tech" 
                  class="tech-tag"
                >
                  {{ tech }}
                </span>
                <span v-if="project.technologies.length > 3" class="tech-more">
                  +{{ project.technologies.length - 3 }}
                </span>
              </div>
              <div class="card-links">
                <a 
                  v-if="project.github && project.github[0] !== 'Unavailable'" 
                  :href="project.github[0]" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="link-btn"
                  @click.stop
                >
                  <GithubOutlined />
                  Code
                </a>
                <a 
                  v-if="project.website" 
                  :href="project.website[0]" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="link-btn"
                  @click.stop
                >
                  <GlobalOutlined />
                  Demo
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <a-modal
      v-model:visible="isModalVisible"
      :title="selectedProject?.title"
      :width="800"
      :footer="null"
      @cancel="closeModal"
      class="project-modal"
    >
      <div v-if="selectedProject" class="modal-content">
        <div class="modal-image">
          <img :src="selectedProject.image" :alt="selectedProject.title" />
        </div>
        
        <div class="modal-body">
          <p class="modal-description">{{ selectedProject.longDescription }}</p>
          
          <div class="modal-section">
            <h4><StarOutlined /> Key Features</h4>
            <ul>
              <li v-for="feature in selectedProject.features" :key="feature">{{ feature }}</li>
            </ul>
          </div>
          
          <div class="modal-section">
            <h4><ToolOutlined /> Technologies Used</h4>
            <div class="tech-list">
              <span v-for="tech in selectedProject.technologies" :key="tech" class="tech-item">
                {{ tech }}
              </span>
            </div>
          </div>
          
          <div class="modal-links">
            <a 
              v-if="selectedProject.github && selectedProject.github[0] !== 'Unavailable'" 
              :href="selectedProject.github[0]" 
              target="_blank" 
              rel="noopener noreferrer"
              class="modal-link-btn primary"
            >
              <GithubOutlined />
              View Source Code
            </a>
            <a 
              v-if="selectedProject.website" 
              :href="selectedProject.website[0]" 
              target="_blank" 
              rel="noopener noreferrer"
              class="modal-link-btn"
            >
              <GlobalOutlined />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { EyeOutlined, GithubOutlined, GlobalOutlined, StarOutlined, ToolOutlined } from "@ant-design/icons-vue";

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  longDescription: string;
  features: string[];
  technologies: string[];
  github: string[];
  website: string[];
  ongoing?: boolean;
}

export default defineComponent({
  name: "Projects",
  components: {
    EyeOutlined,
    GithubOutlined,
    GlobalOutlined,
    StarOutlined,
    ToolOutlined
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Padyak Tayo",
          image: require("@/assets/bike-rental.png"),
          description: "A modern bike rental and sharing service connecting bike owners with renters across the Philippines.",
          longDescription: "Padyak Tayo (Capstone Project) is a platform that connects bike owners with people all over the Philippines who are looking to rent or borrow bikes. It simplifies the process by allowing lenders to list their bikes, while renters can easily search for available bikes in their desired location. The platform aims to promote sustainable transportation and make bike-sharing accessible to more people.",
          features: [
            "User Signup and Login",
            "Browse Available Bikes",
            "Rental Confirmation and Payment Integration",
            "User Reviews and Ratings",
            "Geolocation Services for Nearby Bikes",
          ],
          technologies: ["HTML", "CSS", "PHP", "MySQL", "Paypal"],
          github: ['Unavailable']
        },
        {
          id: 2,
          title: "Dental Clinic Management",
          image: require("@/assets/dental-services.png"),
          description: "A comprehensive solution for dental clinics to automate appointment management and patient records.",
          longDescription: "The Dental Clinic Management System is a comprehensive solution designed for dental clinics to automate and streamline the process of managing patient appointments, user accounts, and clinic operations. The system allows both patients and doctors to perform essential tasks such as scheduling, canceling, and viewing appointments. Additionally, it supports user profile management and provides automated email notifications for key actions, enhancing the clinic's efficiency.",
          features: [
            "User Signup and Login: Separate flows for patients and doctors",
            "Manage Appointments: Schedule, edit, view, and cancel appointments",
            "Profile Management: Update personal information and delete accounts",
            "Email Notifications: Automated confirmations for signup and appointments",
            "Role-based Access: Customizes features based on the user's role",
          ],
          technologies: ["React", "Ant Design", "Node.js", "Express.js", "Sequelize", "MySQL", "Nodemailer"],
          github: ['https://github.com/vinze01/dental-client', 'https://github.com/vinze01/dental-service']
        },
        {
          id: 3,
          title: "Personal Finance Tracker",
          image: require("@/assets/ft-dashboard.png"),
          description: "An application to help users manage their finances, track expenses, and set savings goals.",
          longDescription: "The Personal Finance Tracker is a tool that helps users manage their income, expenses, and savings. It provides features for tracking daily transactions, setting budgets, and viewing financial reports. The application includes visual dashboards that show spending trends, helping users understand their financial health and make informed decisions.",
          features: [
            "Track Income and Expenses: Record daily financial transactions",
            "Budget Planning: Set monthly or annual budgets",
            "Financial Reports: Generate reports with visual charts",
            "Goal Setting: Set and monitor savings goals",
          ],
          technologies: ["Vue.js", "Ant Design", "TypeScript", "Node.js", "Express.js", "Sequelize", "SQLite", "Apexchart"],
          github: ['https://github.com/vinze01/ft-client', 'https://github.com/vinze01/ft-server'],
          ongoing: true
        },
        {
          id: 4,
          title: "Task Management System",
          image: require("@/assets/task-management.png"),
          description: "A todo list application with local storage persistence and user authentication.",
          longDescription: "This app allows users to view, add, and manage tasks with persistence via localStorage. The app also includes a login page, task completion, deletion features, and a custom modal for user login notifications.",
          features: [
            "Task Management: View, add, and complete tasks",
            "Persistence: Tasks and user data are stored using localStorage",
            "Login Page: Includes form validation; users can log in and view a personalized greeting",
            "Logout Functionality: Users can log out, clear tasks, and their session is cleared",
          ],
          technologies: ["Vue 3", "Pinia", "Vue Router", "TypeScript"],
          website: ['https://rvt-task-management.netlify.app/'],
          github: ['https://github.com/vinze01/task-management']
        },
      ] as Project[],
      isModalVisible: false,
      selectedProject: null as Project | null,
    };
  },
  methods: {
    showProjectDetails(project: Project) {
      this.selectedProject = project;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
      this.selectedProject = null;
    },
  },
});
</script>

<style scoped>
.projects-page {
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.projects-hero {
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

.projects-content {
  padding: 4rem 0;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.project-card {
  background: var(--color-bg-card);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.card-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.project-card:hover .card-image img {
  transform: scale(1.1);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
  gap: 0.5rem;
}

.project-card:hover .card-overlay {
  opacity: 1;
}

.card-overlay :deep(.anticon) {
  font-size: 2rem;
}

.card-content {
  padding: 1.5rem;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
}

.ongoing-badge {
  padding: 0.25rem 0.75rem;
  background: rgba(99, 102, 241, 0.1);
  color: var(--color-primary);
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
}

.card-description {
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  padding: 0.25rem 0.625rem;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  font-size: 0.75rem;
  color: var(--color-text-secondary);
}

.tech-more {
  padding: 0.25rem 0.625rem;
  font-size: 0.75rem;
  color: var(--color-primary);
  font-weight: 500;
}

.card-links {
  display: flex;
  gap: 0.75rem;
}

.link-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 1rem;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  color: var(--color-text);
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
}

.link-btn:hover {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: white;
}

.modal-content {
  padding: 0;
}

.modal-image {
  margin: -24px -24px 0;
  height: 300px;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
}

.modal-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-body {
  padding-top: 1.5rem;
}

.modal-description {
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.modal-section {
  margin-bottom: 1.5rem;
}

.modal-section h4 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--color-text);
}

.modal-section ul {
  list-style: none;
  padding: 0;
}

.modal-section li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-text-secondary);
}

.modal-section li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--color-primary);
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-item {
  padding: 0.375rem 0.875rem;
  background: rgba(99, 102, 241, 0.1);
  color: var(--color-primary);
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
}

.modal-links {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
}

.modal-link-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  color: var(--color-text);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
}

.modal-link-btn:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.modal-link-btn.primary {
  background: var(--gradient-primary);
  border: none;
  color: white;
}

.modal-link-btn.primary:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .card-image {
    height: 180px;
  }

  .modal-image {
    height: 200px;
  }

  .modal-links {
    flex-direction: column;
  }
}
</style>

<style>
.project-modal .ant-modal-content {
  background: var(--color-bg-card);
}

.project-modal .ant-modal-header {
  background: var(--color-bg-card);
  border-bottom: 1px solid var(--color-border);
}

.project-modal .ant-modal-title {
  color: var(--color-text);
  font-weight: 700;
  font-size: 1.5rem;
}

.project-modal .ant-modal-close {
  color: var(--color-text-secondary);
}

.project-modal .ant-modal-close:hover {
  color: var(--color-text);
}

.project-modal .ant-modal-body {
  color: var(--color-text);
}
</style>

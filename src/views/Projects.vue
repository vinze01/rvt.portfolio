<template>
  <a-layout>
    <a-layout-content style="padding: 24px">
      <h1 style="text-align: center; margin-bottom: 24px; font-size: 36px;" data-aos="fade-up">
        My Projects
      </h1>
      <a-row gutter="16">
        <a-col span="8" v-for="project in projects" :key="project.id">
          <a-card
            :title="project.title"
            hoverable
            class="project-card"
            data-aos="fade-up"
            data-aos-delay="100"
            @click="showProjectDetails(project)"
          >
            <template #extra>
              <a href="#" @click.prevent="showProjectDetails(project)">more</a>
            </template>
            <img :src="project.image" alt="Project Image" class="project-image" />
            <p class="project-description">{{ project.description }}</p>
          </a-card>
        </a-col>
      </a-row>
      
      <a-modal
        v-model:visible="isModalVisible"
        :title="selectedProject?.title"
        @cancel="closeModal"
        width="800px"
      >
        <img :src="selectedProject?.image" alt="Project Image" class="project-image" style="margin-bottom: 16px;" />
        <div v-if="selectedProject">
          <p>{{ selectedProject.longDescription }}</p>
          <h3>Key Features:</h3>
          <ul>
            <li v-for="feature in selectedProject.features" :key="feature">{{ feature }}</li>
          </ul>
          <h3>Technologies Used:</h3>
          <ul>
            <li v-for="tech in selectedProject.technologies" :key="tech">{{ tech }}</li>
          </ul>
          <h3>Github:</h3>
          <ul>
            <li v-for="git in selectedProject.github" :key="git"><a>{{ git }}</a></li>
          </ul>
        </div>
      </a-modal>
    </a-layout-content>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  longDescription: string;
  features: string[];
  technologies: string[];
  github: string[]
}

export default defineComponent({
  name: "Projects",
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Padyak Tayo",
          image: require("@/assets/bike-rental.png"),
          description: "A modern bike rental and sharing service...",
          longDescription: "Padyak Tayo (Capstone Project) is a platform that connects bike owners with people all over the Philippines who are looking to rent or borrow bikes. It simplifies the process by allowing lenders to list their bikes, while renters can easily search for available bikes in their desired location. The platform aims to promote sustainable transportation and make bike-sharing accessible to more people.",
          features: [
            "User Signup and Login",
            "Browse Available Bikes",
            "Rental Confirmation and Payment Integration",
            "User Reviews and Ratings",
            "Geolocation Services for Nearby Bikes",
          ],
          technologies: [
            "Frontend: HTML, CSS", 
            "Backend: PHP", 
            "Database: MySQL", 
            "Payment Integration: Paypal"
          ],
          github: [
            'Unavailable'
          ]
        },
        {
          id: 2,
          title: "Dental Clinic Management System",
          image: require("@/assets/dental-services.png"),
          description: "A platform to streamline dental appointment management...",
          longDescription: "The Dental Clinic Management System is a comprehensive solution designed for dental clinics to automate and streamline the process of managing patient appointments, user accounts, and clinic operations. The system allows both patients and doctors to perform essential tasks such as scheduling, canceling, and viewing appointments. Additionally, it supports user profile management and provides automated email notifications for key actions, enhancing the clinic's efficiency.",
          features: [
            "User Signup and Login: Separate flows for patients and doctors",
            "Manage Appointments: Schedule, edit, view, and cancel appointments",
            "Profile Management: Update personal information and delete accounts",
            "Email Notifications: Automated confirmations for signup and appointments",
            "Role-based Access: Customizes features based on the user's role (patient or doctor)",
          ],
          technologies: [
            "Frontend: React, Ant Design",
            "Backend: Node.js, Express.js",
            "Database: Sequelize ORM with MySQL",
            "Email Service: Nodemailer with SendGrid",
          ],
          github: [
            'https://github.com/vinze01/dental-client',
            'https://github.com/vinze01/dental-service',
          ],
        },
        {
          id: 3,
          title: "Personal Finance Tracker (Ongoing)",
          image: require("@/assets/ft-dashboard.png"),
          description: "An application to help users manage their finances...",
          longDescription: "The Personal Finance Tracker is a tool that helps users manage their income, expenses, and savings. It provides features for tracking daily transactions, setting budgets, and viewing financial reports. The application includes visual dashboards that show spending trends, helping users understand their financial health and make informed decisions.",
          features: [
            "Track Income and Expenses: Record daily financial transactions",
            "Budget Planning: Set monthly or annual budgets",
            "Financial Reports: Generate reports with visual charts",
            "Goal Setting: Set and monitor savings goals",
          ],
          technologies: [
            "Frontend: Vue.js, Ant Design, Typescript", 
            "Backend: Node.js, Express.js", 
            "Database: Sequelize ORM with SQLite",
            "Data Visualization: Apexchart"
          ],
          github: [
            'https://github.com/vinze01/ft-client',
            'https://github.com/vinze01/ft-service',
          ],
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
  mounted() {
    AOS.init();
  },
});
</script>

<style scoped>
.project-card {
  transition: box-shadow 0.3s ease;
  border-radius: 10px;
}

.project-card:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

.project-description {
  margin-top: 12px;
  text-align: justify;
}
</style>

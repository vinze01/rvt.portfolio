<template>
  <a-layout>
    <a-layout-content style="padding: 24px; background: linear-gradient(135deg, #f0f2f5, #e6f7ff)">
      <a-row justify="center" style="text-align: center; padding-top: 50px">
        <a-col>
          <div class="profile-container" data-aos="fade-up">
            <img src="@/assets/profile.jpg" alt="Profile Picture" class="profile-image" />
          </div>
          <a-typography-title
            level="1"
            style="margin-top: 20px; color: #1890ff; font-weight: bold; font-size: 2.5em;"
            data-aos="fade-up"
          >
            Hi, I'm Robin Vince Tupil
          </a-typography-title>
          <a-typography-paragraph
            style="font-size: 18px; max-width: 600px; margin: 0 auto; color: #555; line-height: 1.6;"
            data-aos="fade-up"
          >
            I'm a Full Stack Developer who enjoys building dynamic web applications. I
            have experience in both front-end and back-end technologies, including Vue.js,
            Nuxt.js, Node.js, Express.js, and more. I love solving problems and creating
            user-friendly solutions. I’m always eager to learn and improve my skills to
            keep up with the latest trends.
          </a-typography-paragraph>
          <router-link to="/about">
            <a-button
              type="primary"
              style="margin-top: 20px; font-size: 16px; border-radius: 5px"
              data-aos="fade-up"
            >
              Learn More About Me
            </a-button>
          </router-link>
        </a-col>
      </a-row>
    </a-layout-content>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

export default defineComponent({
  name: "Home",
  mounted() {
    AOS.init();
  },
});
</script>

<style scoped>
.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.profile-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.05);
}

a-typography-title {
  font-weight: bold;
}

a-typography-paragraph {
  margin-top: 16px;
  line-height: 1.6;
}

a-button {
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

a-button:hover {
  background-color: #40a9ff;
}
</style>

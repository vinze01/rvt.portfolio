<template>
  <a-layout>
    <a-layout-content style="padding: 40px; background-color: #f0f2f5">
      <a-typography-title
        level="1"
        style="text-align: center; margin-bottom: 30px"
        data-aos="fade-up"
      >
        About Me
      </a-typography-title>

      <a-typography-paragraph style="font-size: 20px; line-height: 1.6; text-align: left">
        I’m a dedicated software developer with expertise in HTML, CSS, JavaScript,
        TypeScript, Vue.js, Nuxt, and Node.js. I've worked on diverse projects, including
        a Human Resources Information System (HRIS), Learning Management System (LMS),
        Document Management System (DMS), Media Sharing App and a Gaming Website. I
        specialize in writing production-ready code, designing APIs, and integrating REST
        APIs to connect front-end and back-end systems. I’ve had the opportunity to mentor
        interns and support junior developers as an assistant team lead, fostering a
        collaborative team environment.
      </a-typography-paragraph>

      <div class="skills-carousel" data-aos="fade-up">
        <div class="skills-container">
          <div class="skills-content">
            <div class="skills">

              <div class="skill" v-for="skill in skills" :key="skill.name">
                <img :src="skill.logo" :alt="skill.name" />
                <span>{{ skill.name }}</span>
              </div>

              <div class="skill" v-for="skill in skills" :key="skill.name + '-duplicate'">
                <img :src="skill.logo" :alt="skill.name" />
                <span>{{ skill.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a-divider style="margin: 50px 0" />

      <a-typography-title
        level="2"
        style="text-align: center; margin-bottom: 30px"
        data-aos="fade-up"
      >
        Education
      </a-typography-title>

      <a-timeline
        mode="alternate"
        style="text-align: center; max-width: 600px; margin: 0 auto"
      >
        <a-timeline-item data-aos="fade-up">
          <h4 class="timeline-title">Adamson University - Manila, Philippines</h4>
          <p>Bachelor’s Degree in Information Technology</p>
          <p>2018 to 2022</p>
        </a-timeline-item>
        <a-timeline-item data-aos="fade-up">
          <h4 class="timeline-title">STI College – Las Piñas City, Philippines</h4>
          <p>Technical-Vocational-Livelihood Track</p>
          <p>2016 to 2018</p>
        </a-timeline-item>
        <a-timeline-item data-aos="fade-up">
          <h4 class="timeline-title">Las Pinas East National High School</h4>
          <p>High School Diploma</p>
          <p>2012 to 2016</p>
        </a-timeline-item>
        <a-timeline-item data-aos="fade-up">
          <h4 class="timeline-title">Pamplona Elementary School Central</h4>
          <p>Elementary School</p>
          <p>2006 to 2012</p>
        </a-timeline-item>
      </a-timeline>
    </a-layout-content>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

export default defineComponent({
  name: "About",
  data() {
    return {
      skills: [
        {
          name: "JavaScript",
          logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        },
        {
          name: "TypeScript",
          logo:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/800px-Typescript_logo_2020.svg.png",
        },
        { name: "Vue.js", logo: "https://vuejs.org/images/logo.png" },
        {
          name: "Nuxt.js",
          logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/NuxtJS_Logo.png",
        },
        { name: "Node.js", logo: "https://www.svgrepo.com/show/303360/nodejs-logo.svg" },
        {
          name: "Docker",
          logo:
            "https://i0.wp.com/www.kitamur.com/wp-content/uploads/2020/12/docker.png?fit=512%2C512&ssl=1",
        },
        {
          name: "Tailwind",
          logo:
            "https://yt3.googleusercontent.com/ikv41jMTr1uHGdILrJhvbfVJcDt4oqhwApKX37TjAleF_cRPbF2W-waj7uMnS5JySvnlvAlTCg=s900-c-k-c0x00ffffff-no-rj",
        },
        {
          name: "Ant Design",
          logo: "https://images.opencollective.com/ant-design-vue/2ec179b/logo/256.png",
        },
        {
          name: "Sequelize",
          logo: "https://logowik.com/content/uploads/images/sequelize.jpg",
        },
        {
          name: "MySQL",
          logo:
            "https://cdn.iconscout.com/icon/free/png-256/free-mysql-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-3030165.png?f=webp&w=256",
        },
        {
          name: "SQLite",
          logo:
            "https://cdn.icon-icons.com/icons2/2699/PNG/512/sqlite_logo_icon_169724.png",
        },
        {
          name: "MongoDB",
          logo:
            "https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175140.png?f=webp",
        },
        { name: "PHP", logo: "https://www.svgrepo.com/show/303656/php-logo.svg" },
        {
          name: "Flutter",
          logo: "https://logosandtypes.com/wp-content/uploads/2021/04/Flutter.png",
        },
        {
          name: "HTML",
          logo: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png",
        },
        {
          name: "CSS",
          logo: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
        },
      ],
    };
  },
  mounted() {
    AOS.init();
  },
});
</script>

<style scoped>
.skills-carousel {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100px;
}

.skills-container {
  display: flex;
  animation: scroll 20s linear infinite;
}

.skills-content {
  display: flex;
}

.skills {
  display: flex;
  gap: 40px;
}

.skill {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.skill img {
  width: 50px;
  height: 50px;
  margin-bottom: 5px;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.skills-container {
  display: flex;
  width: calc(200% + 40px);
}

.skills {
  display: flex;
  flex-wrap: nowrap;
}

.timeline-title {
  font-weight: bold;
  transition: color 0.3s;
}

.timeline-item:hover .timeline-title {
  color: #1890ff;
}

.timeline-item {
  padding: 15px;
  transition: background-color 0.3s;
}

.timeline-item:hover {
  background-color: rgba(24, 144, 255, 0.1);
}
</style>

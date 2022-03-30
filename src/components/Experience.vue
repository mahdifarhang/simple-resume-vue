<template>
  <Title :text="experienceLabel" />
  <section class="experience-section" v-for="(experience, index) in experiences" :key="index">
    <SubTitle :text="experience.workPosition"/>
    <Paragraph :text="experience.workPeriod"/>

    <Headline :text="experience.companyName"/>
  </section>
</template>

<script>
import Title from "@/components/Title.vue";
import SubTitle from "@/components/SubTitle.vue";
import Headline from "@/components/Headline.vue";
import Paragraph from "@/components/Paragraph";

export default {
  Name: "Experience",

  components: {Paragraph, Title, SubTitle, Headline},

  computed: {
    currentLanguage() {
      return this.$store.state.currentLanguage;
    },

    experienceLabel() {
      return this.currentLanguage.resumeLabels.experience;
    },

    experiences() {
      return this.currentLanguage.data.experience;
    },
  },
};
</script>

<style scoped>
.experience-section {
  margin-bottom: 2em;
}

/* .experience-section:last-child {
  margin-bottom: 0;
} */

.work-position-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>

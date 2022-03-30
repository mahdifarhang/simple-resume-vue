<template>
  <Title :text="skillsLabel"/>


  <div v-for="(category, index) in categories" :key="index">
    <SubTitle :text="category.name"/>

    <div v-for="(skill, i) in category.skills" :key="i" class="skill-line">
      <img class="circle" src="@/assets/circle.svg"/>
      <Paragraph :text="skill.name" class="contact"/>
      <div style="width: 80%; background-color: #e4e4e6; border-color: #522e13; margin: 1px 0 1px 25px;">
        <div :style="`width: ${ skill.level }%; height: 30px; background-color: #dacfcb;`"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import SubTitle from "@/components/SubTitle.vue";
import Paragraph from "@/components/Paragraph.vue";

export default {
  Name: "Skills",

  components: { Title, SubTitle, Paragraph },

  computed: {
    currentLanguage() {
      return this.$store.state.currentLanguage;
    },

    resumeLabels() {
      return this.currentLanguage.resumeLabels;
    },

    skillsLabel() {
      return this.resumeLabels.skills;
    },

    categories() {
      return this.currentLanguage.data.categories;
    }
  }
};
</script>

<style scoped>
.circle {
  width: 8px;
  margin-left: 8px;
}

.material-icons {
  display: inline-flex;
  align-items: center;
}

.skill-line {
  display: flex;
}

.contact {
  padding-left: calc(1em + 8px);
  margin: 0.25em;
}
</style>

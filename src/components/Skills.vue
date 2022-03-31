<template>
  <Title :text="skillsLabel"/>


  <div v-for="(category, index) in categories" id="main" :key="index">
    <hr>
    <SubTitle :text="category.name" style="margin: 15px 0 5px 0;"/>

    <div v-for="(skill, i) in category.skills" :key="i" class="skill-line">
      <img class="circle" src="@/assets/circle.svg"/>
      <Paragraph :text="skill.name" class="contact" style="min-width: 100px;"/>
      <div
          v-if="skill.level"
          style="width: 80%; background-color: #e4e4e6; border-color: #522e13; margin: 1px 0 1px 25px; border-style: solid; border-width: 1px"
      >
        <div
            :id="`progress_bar_${index}_${i}`"
            :style="`width: ${ skill.level }%; height: 30px; background-color: #dacfcb;`"
        ></div>
      </div>
    </div>

    <div class="skill-line" style="margin: 10px 0; flex-wrap: wrap;">
      <div v-for="(skill, i) in category.others" :key="i">
        <div
            style="border-style: solid; border-radius: 10px; border-width: 1px; border-color: #522e13; padding: 1px 7px; margin: 2px 3px; max-width: 1000px;">
          <Paragraph :text="skill"/>
        </div>
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

<template>
  <Title :text="contactsLabel" />
  <div v-if="phoneNumber" class="contact-line">
    <img src="@/assets/phone.svg" />
    <a class="nav-link nav-social" style="text-decoration: none;" :href="'tel:+' + phoneNumber" title="Phone Number">
      <Paragraph class="contact" :text="'+' + phoneNumber" />
    </a>
  </div>
  <div v-if="email" class="contact-line">
    <img src="@/assets/email.svg" />
    <a class="nav-link nav-social" style="text-decoration: none;" :href="'mailto:' + email" title="Email">
      <Paragraph class="contact" :text="email" />
    </a>
  </div>
  <div class="contact-line">
    <!--  Keep in mind that the size of SVGs should be 24 * 24  -->
    <a v-if="linkedIn" class="nav-link nav-social" style="text-decoration: none; margin: 4px;" :href="linkedIn" title="Linked In"><img src="@/assets/linkedin.svg"/></a>
    <a v-if="telegram" class="nav-link nav-social" style="text-decoration: none; margin: 4px;" :href="telegram" title="Telegram"><img src="@/assets/telegram.svg"/></a>
    <a v-if="gitlab" class="nav-link nav-social" style="text-decoration: none; margin: 4px;" :href="gitlab" title="Gitlab"><img src="@/assets/gitlab.svg"/></a>
    <a v-if="github" class="nav-link nav-social" style="text-decoration: none; margin: 4px;" :href="github" title="Github"><img src="@/assets/github.svg"/></a>
    <a v-if="twitter" class="nav-link nav-social" style="text-decoration: none; margin: 4px;" :href="twitter" title="Twitter"><img src="@/assets/twitter.svg"/></a>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import Paragraph from "@/components/Paragraph.vue";

export default {
  name: "Contacts",

  components: { Title, Paragraph },

  computed: {
    currentLanguage() {
      return this.$store.state.currentLanguage;
    },

    contactsLabel() {
      return this.currentLanguage.resumeLabels.contacts;
    },

    contacts() {
      return this.currentLanguage.data.contacts;
    },

    phoneNumber() {
      return this.contacts.phone;
    },

    email() {
      return this.contacts.email;
    },

    linkedIn() {
      return this.contacts.linkedIn;
    },

    telegram() {
      return this.contacts.telegram;
    },

    github() {
      return this.contacts.github;
    },

    gitlab() {
      return this.contacts.gitlab;
    },

    twitter() {
      return this.contacts.twitter;
    },
  },
};
</script>

<style scoped>
.contact-line {
  display: flex;
  margin: 0 auto;
  align-items: center;
}

.contact {
  padding-left: 1em;
  margin: 0.25em;
}
</style>

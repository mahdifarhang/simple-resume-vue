import enData from "../../resume/en-data.yaml";
// import faData from "../../resume/fa-data.yaml";

export const languages = [
  {
    name: "English",
    code: "en",
    data: enData,
    resumeLabels: {
      contacts: "Contacts",
      profile: "Profile",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
    },
  },
  // {
  //   name: "فارسی",
  //   code: "fa",
  //   data: faData,
  //   resumeLabels: {
  //     contacts: "اطلاعات تماس",
  //     profile: "اطلاعات کلی",
  //     skills: "توانایی ها",
  //     experience: "تجربه ها",
  //     professional: "حرفه ای", // TODO
  //     education: "تحصیلات",
  //   },
  // },
];

export function getCurrentLanguage() {
  return languages[0];
}

export function getLanguages() {
  return languages;
}

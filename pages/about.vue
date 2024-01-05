<script setup lang="ts">
definePageMeta({
  layout: "default",
  title: "About",
  navOrder: 2,
  description: `Experienced Marriage and Family Therapist with a MA from Seattle University, offering expertise in communication,
    connection, and conflict management, trained at The Gottman Institute.`,
});

const pageData = {
  aboutMe: {
    section: "About Me",
    title: "I consider it an honor to connect with you",
    paragraphs: [
      {
        text: "Hi! I’m Erin Dierickx, a licensed marriage and family therapist and Gottman Level III Trained Couples Therapist.",
      },
      {
        text: "I love working with individuals who are either considering a career change, beginning new careers, or are looking to further their education.",
      },
    ],
  },
  background: {
    section: "background",
    title: "Finding My Career",
    paragraphs: [
      {
        text: "Before I became a therapist, I taught elementary and middle school. I loved working with youth and had the privilege of educating many unique and unforgettable personalities. Eventually, I realized being an educator was not going to be sustainable. I found myself overworked and exhausted. This fatigue led me to feel guilty that I was not performing as the teacher I envisioned.",
      },
      { text: "I knew I needed to do something else." },
      {
        text: "Before I was able to make that decision, I had to grapple with guilt for leaving the profession I believed I was meant for. It took several years to permit myself the freedom to consider other careers. Leaping into a new career and leaving a profession so closely tied to my identity was unthinkable.",
      },
      {
        styleType: "font-bold italic text-xl",
        text: "I struggled immensely.",
      },
      {
        text: "But with help, guidance, patience, and support, I decided to focus on my dream of becoming a therapist. And that decision has been one of the best I’ve ever made.",
      },
      {
        styleType: "font-bold ",
        text: "I hope to be a support for you as you navigate this exciting and daunting chapter.",
      },
    ],
  },
  qualifications: {
    section: "Qualifications",
    title: "Education and Experience",
    paragraphs: [
      {
        text: "Before starting my practice, I was a therapist at Twin Lakes Counseling in Federal Way. I am currently a researcher at The Gottman Institute in Seattle where I review the current literature to uncover opportunities for future research as well as monitor current research studies on the science of relationships.",
      },
    ],
    qualifications: [
      {
        title: "Education",
        text: "I earned my MA in Couples and Family Therapy from Seattle University and my BA in Psychology from Western Washington University. ",
        icon: "fa-solid fa-university",
      },
      {
        title: "License",
        text: "I am a Washington State licensed Marriage and Family Therapist: MG61143094",
        icon: "fa-regular fa-id-badge",
      },
      {
        title: "Training",
        text: "I have completed all 3 levels of the Gottman Training, which has prepared me to assist couples with communication, connection, and conflict management. ",
        icon: "fa-solid fa-certificate",
      },
    ],
  },
  homeAndHobbies: {
    section: "Home & Hobbies",
    title: "Life Outside My Practice",
    paragraphs: [
      {
        text: "I share my current residence in Seattle, WA with my husband and my favorite therapist: a soul-reading, sun-soaking, smiling Shiba Inu named Kota. ",
      },
      {
        text: "In my free time, I enjoy cooking, baking, and eating (while jamming to some blues, oldies, and Dolly Parton) as well as being outdoors and taking in the splendor of the Pacific Northwest. I am a yogi at heart and enjoy playing virtually any sport that involves a ball. ",
      },
      {
        text: "I am eager to help driven, smart, talented individuals embrace their strengths and start a career and life they aspire to.",
      },
    ],
  },
};
</script>

<template>
  <Hero
    headline="About"
    hero-image="/images/banner/about.webp"
    overlayClass="bg-complementary_accent"
  />
  <div class="flex flex-col">
    <AboutMePageIntro :data="pageData.aboutMe" />
    <div class="bg-lime-100 bg-opacity-10">
      <AboutMePageSection :data="pageData.background" />
    </div>
    <div>
      <AboutMePageSection :data="pageData.qualifications" />
      <div class="flex flex-col md:flex-row md:justify-around">
        <div
          v-for="(qualification, index) in pageData.qualifications
            .qualifications"
          :key="index"
          class="block mb-7 text-text_primary bg-clip-text font-sans text-base leading-relaxed antialiased"
        >
          <AboutMePageQualification :data="qualification" />
        </div>
      </div>
    </div>
    <div class="bg-lime-100 bg-opacity-10">
      <AboutMePageSection :data="pageData.homeAndHobbies" />
    </div>
  </div>

  <Cta></Cta>
</template>




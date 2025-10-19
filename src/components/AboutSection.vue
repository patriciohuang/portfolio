<template>
  <section class="section max-w-4xl mx-auto pt-16">
    <h2 class="text-3xl font-bold text-gray-800 mb-10 text-center">About Me</h2>

    <div class="space-y-6 text-lg text-gray-700 leading-relaxed">
      <p>
        I grew up in Argentina and moved to the Netherlands to pursue my Bachelor in <b>Information Technology</b> at
        InHolland University of Applied Sciences. I successfully completed my propedeuse in the first year, solidifying
        my commitment to software development.
      </p>
      <p>
        Before transitioning to my IT studies, I worked at <b>Wabi Inc.</b> as an Operations Analyst, a role that was
        heavily focused on technology. I helped restaurants go digital by managing <b>Salesforce</b> configuring
        <b>GraphQL</b> integrations, and building <b>automation tools</b> This experience taught me how to bridge the
        gap between technical systems and efficient <b>real-world processes</b>
      </p>

      <p>
        I'm currently expanding my stack in <b>web development, security, and data management</b> actively combining
        theory from university with hands-on projects (like the <b>Chapeau Restaurant System</b> and <b>Someren
          Logistics</b>) that demand critical and creative problem-solving.
      </p>
      <p>
        Outside of coding, I enjoy going to the gym, cycling around Amsterdam, and traveling, because continuous
        discovery, whether on a bike or through a new framework, is what keeps me motivated.
      </p>
    </div>

    <div class="my-12 grid sm:grid-cols-2 gap-6">
      <div class="bg-white rounded-lg p-5 border-t-4 border-[--accent] shadow-lg">
        <h3 class="font-bold text-lg text-gray-800 mb-1">Current Focus</h3>
        <p class="text-md text-gray-600">
          Bachelor in IT — InHolland University (2024–Present)
        </p>
        <p class="text-sm text-gray-500 mt-2">
          Software development, security, data & AI, and advanced web application architecture.
        </p>
      </div>
      <div class="bg-white rounded-lg p-5 border-t-4 border-[--accent] shadow-lg">
        <h3 class="font-bold text-lg text-gray-800 mb-1">Experience Highlight</h3>
        <p class="text-md text-gray-600">
          Operations Analyst at Wabi Inc.
        </p>
        <p class="text-sm text-gray-500 mt-2">
          Managed the web admin platform, GraphQL APIs, and automated onboarding workflows for the restaurant network.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default { name: 'AboutSection' }
</script>
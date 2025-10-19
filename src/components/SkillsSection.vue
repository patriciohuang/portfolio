<template>
  <section class="section max-w-5xl mx-auto pt-16">
    <h2 class="text-3xl font-bold text-gray-800 mb-10 text-center">Skills & Tech Stack</h2>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div
        class="bg-white rounded-lg shadow-md p-6 border border-gray-100 transform hover:scale-105 transition-transform duration-300">
        <h4 class="text-xl font-semibold text-[--primary] mb-4 flex items-center">
          <img src="/src/assets/frontend.png" alt="Frontend Icon" class="w-7 h-7 mr-3" />
          Front-end & UI/UX
        </h4>
        <ul class="text-sm text-gray-600 space-y-2">
          <li class="flex items-center gap-2">
            <img src="/src/assets/html-5.png" alt="HTML Icon" class="w-5 h-5" />
            <span>HTML, CSS (responsive), Tailwind CSS, Bootstrap</span>
          </li>
          <li class="flex items-center gap-2">
            <img src="/src/assets/js.png" alt="JavaScript Icon" class="w-5 h-5" />
            <span>JavaScript, jQuery</span>
          </li>
          <li class="flex items-center gap-2">
            <img src="/src/assets/vue.png" alt="Vue.js Icon" class="w-5 h-5" />
            <span>Vue.js (3)</span>
          </li>
          <li class="flex items-center gap-2">
            <img src="/src/assets/react.png" alt="React Icon" class="w-5 h-5" />
            <span>React, Next.js</span>
          </li>
          <li class="flex items-center gap-2">
            <img src="/src/assets/figma.png" alt="Figma Icon" class="w-5 h-5" />
            <span>Figma, Illustrator, Photoshop</span>
          </li>
        </ul>
      </div>

      <div
        class="bg-white rounded-lg shadow-md p-6 border border-gray-100 transform hover:scale-105 transition-transform duration-300">
        <h4 class="text-xl font-semibold text-[--primary] mb-4 flex items-center">
          <img src="/src/assets/backend.png" alt="Backend Icon" class="w-7 h-7 mr-3" />
          Back-end & Database
        </h4>
        <ul class="text-sm text-gray-600 space-y-2">
          <li class="flex items-center gap-2">
            <img src="/src/assets/c-sharp.png" alt="C# Icon" class="w-5 h-5" />
            <span>C#, ASP.NET MVC, ASP.NET Core</span>
          </li>
          <li class="flex items-center gap-2">
            <img src="/src/assets/node.png" alt="Node.js Icon" class="w-5 h-5" />
            <span>Node.js (Express)</span>
          </li>
          <li class="flex items-center gap-2">
            <img src="/src/assets/python.png" alt="Python Icon" class="w-5 h-5" />
            <span>Python (Flask, Jinja)</span>
          </li>
          <li class="flex items-center gap-2">
            <img src="/src/assets/java.png" alt="Java Icon" class="w-5 h-5" />
            <span>Java, C, PHP (Laravel)</span>
          </li>
          <li class="flex items-center gap-2">
            <img src="/src/assets/mysql.png" alt="MySql Icon" class="w-5 h-5" />
            <span>SQL Server, MySQL, SQLite</span>
          </li>
        </ul>
      </div>

      <div
        class="bg-white rounded-lg shadow-md p-6 border border-gray-100 transform hover:scale-105 transition-transform duration-300">
        <h4 class="text-xl font-semibold text-[--primary] mb-4 flex items-center">
          <img src="/src/assets/tools.png" alt="Tools Icon" class="w-7 h-7 mr-3" />
          Tools, DevOps & Others
        </h4>
        <ul class="text-sm text-gray-600 space-y-2">
          <li class="flex items-center gap-2">
            <img src="/src/assets/github.png" alt="GitHub Icon" class="w-5 h-5" />
            <span>Git, GitHub</span>
          </li>
          <li class="flex items-center gap-2">
            <img src="/src/assets/vscode.png" alt="VS Code Icon" class="w-5 h-5" />
            <span>VS Code, Postman</span>
          </li>
          <li class="flex items-center gap-2">
            <img src="/src/assets/salesforce.png" alt="Salesforce Icon" class="w-5 h-5" />
            <span>Salesforce, GraphQL</span>
          </li>
          <li class="flex items-center gap-2">
            <img src="/src/assets/wordpress.png" alt="WordPress Icon" class="w-5 h-5" />
            <span>WordPress, AutoCAD</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default { name: 'SkillsSection' }
</script>
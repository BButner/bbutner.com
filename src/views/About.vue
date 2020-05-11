<template>
  <div class="about mt-48 w-5/6 lg:w-3/5 m-auto lg:text-left">
    <p class="text-6xl title">About Me</p>
    <p class="text-5xl text-gray-800 mt-8">Hello, I'm Beau Butner!</p><br>
    <p class="text-2xl mb-10">I am currently a full time student and a full time employee, working as a <span class="span-special">Systems Analyst</span> for almost 3 years now. Out of anything that I do, I highly value the quality of my work. My work directly reflects who I am as a person,
      and I don't want to put anything out there into the wild or the hands of a client that I am not happy with. This is why in my current job I strive to provide the highest level of quality support, with quick turnaround times,
      and excellent and performant designs.
    </p>
    <br>
    <p class="text-2xl mb-10">Out of everything, I have the most fun when I am learning new technologies. Recently I have taken an affinity to <span class="span-special">Full Stack Web Development</span>. Learning technologies like NodeJS,
    React/VueJS, Express, and more has been incredibly entertaining and useful. I'm able to use TypeScript in order to maintain my love of Object Oriented Programming in order to keep not only my codebase running
    efficiencly, but also more accessible and easier to maintain. At work I have taken it upon myself to claim responsibilities and upgrade our in-house products so that in the event of an unexpected departure,
    whoever is after me can pick it up and easily understand what is going on. I do this with documentation, and a clean and maintainable codebase so that in the event something does need to be refactored,
    it can be done in an efficient and reliable manner.</p>
    <br>
    <p class="text-2xl">In my work, I take pride in the following attributes:</p>
    <div class="text-xl text-left pl-4 mb-10">
      <div class="flex inline-block items-center pt-4 mt-4"><div class="w-12 h-12 rounded-full bg-primary-500 text-white flex mr-4"><i class="fas fa-stopwatch m-auto"></i></div>Quick and Efficient</div>
      <div class="flex inline-block items-center pt-4"><div class="w-12 h-12 rounded-full bg-primary-500 text-white flex mr-4"><i class="fas fa-fire m-auto"></i></div>Performant</div>
      <div class="flex inline-block items-center pt-4"><div class="w-12 h-12 rounded-full bg-primary-500 text-white flex mr-4"><i class="fas fa-pencil-alt m-auto"></i></div>Technical Writing</div>
      <div class="flex inline-block items-center pt-4"><div class="w-12 h-12 rounded-full bg-primary-500 text-white flex mr-4"><i class="fas fa-search m-auto"></i></div>Attention to Detail</div>
      <div class="flex inline-block items-center pt-4"><div class="w-12 h-12 rounded-full bg-primary-500 text-white flex mr-4"><i class="fas fa-users m-auto"></i></div>Team Collaboration</div>
      <div class="flex inline-block items-center pt-4"><div class="w-12 h-12 rounded-full bg-primary-500 text-white flex mr-4"><i class="fas fa-bullhorn m-auto"></i></div>Oral and Written Communications</div>
      <div class="flex inline-block items-center pt-4"><div class="w-12 h-12 rounded-full bg-primary-500 text-white flex mr-4"><i class="fas fa-brain m-auto"></i></div>Critical Thinking and Analysis</div>
    </div>
    <br>
    <p class="text-2xl">My education is as follows:</p>
    <div class="pl-6 hidden lg:block mb-10">
      <div class="flex inline-block items-center pt-4 text-xl"><div class="flex mr-4"><i class="fas fa-check-circle text-2xl text-green-500"></i></div>Danville Area Community College<span class="text-primary-500 text-2xl">|</span>Associates in Applied Sciences<span class="text-primary-500 text-2xl">|</span>2016-2018</div>
      <div class="flex inline-block items-center pt-4 text-xl"><div class="flex mr-4"><i class="fas fa-dot-circle text-2xl text-yellow-500 in-progress"></i></div>Southern Illinois University<span class="text-primary-500 text-2xl">|</span>Bachelors in Information Systems Technologies<span class="text-primary-500 text-2xl">|</span>2018-2020</div>
    </div>
    <div class="lg:hidden text-xl mb-10">
      <div class="pt-6">
        <i class="fas fa-check-circle text-4xl text-green-500 pb-4"></i>
        <div>
          <p>Danville Area Community College</p>
          <p class="text-gray-800">Associates in Applied Sciences</p>
          <p class="italic text-gray-700">2016-2018</p>
        </div>
      </div>
      <div class="pt-6">
        <i class="fas fa-dot-circle text-4xl text-yellow-500 pb-4 in-progress"></i>
        <div>
          <p>Southern Illinois University</p>
          <p class="text-gray-800">Bachelors in Information Systems Technologies</p>
          <p class="text-gray-700 italic">2018-2020</p>
        </div>
      </div>
    </div>
    <p class="text-2xl">Here are the technologies that I am familiar with:</p>
    <div class="pt-4 pl-6 text-xl technologies mb-10">
      <div><img src="../../public/images/vue.png" alt="">VueJS/VueCLI</div>
      <div><img src="../../public/images/react.png" alt="">React</div>
      <div><img src="../../public/images/node.png" alt="">NodeJS</div>
      <div><img src="../../public/images/typescript.png" alt="">TypeScript</div>
      <div><img src="../../public/images/mongodb.png" alt="">MongoDB</div>
      <div><img src="../../public/images/mssql.png" alt="">MSSQL</div>
      <div><img src="../../public/images/vercel.png" alt="">Next.JS</div>
      <div><img src="../../public/images/java.png" alt="">Java</div>
      <div><img src="../../public/images/csharp.png" alt="">C#</div>
      <div><img src="../../public/images/python.png" alt="">Python</div>
      <div><img src="../../public/images/jira.png" alt="">JIRA</div>
    </div>
    <p class="text-2xl">And here is what I use when coding!</p>
    <div class="pt-4 pl-6 text-xl coding mb-10 technologies">
      <div><img src="../../public/images/intellij.png" alt="">IntelliJ IDEA</div>
      <div><img src="../../public/images/webstorm.png" alt="">WebStorm</div>
      <div><img src="../../public/images/vscode.png" alt="">Visual Studio Code</div>
      <div><img src="../../public/images/visualstudio.png" alt="">Visual Studio</div>
    </div>
    <p class="text-3xl mt-32" id="contact">Want to get in touch with me? Feel free to contact me at <span class="text-primary-500 hover:text-primary-900 animated"><a href="mailto:beau@bbutner.com">beau@bbutner.com</a></span>!</p>
  </div>
</template>

<style scoped>
  .title {
    border-bottom: 2px solid;
    @apply border-primary-500;
  }

  .span-special {
    @apply text-primary-500;
    border-bottom: 2px solid;
    @apply border-gray-900;
  }

  div span {
    @apply ml-1;
    @apply mr-1;
  }

  .technologies > div {
    @apply flex;
    @apply pt-2;
  }

  .technologies img {
    @apply pr-4;
  }

  .in-progress {
    animation-name: in-progress;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }

  @keyframes in-progress {
    0% { opacity: 1 }
    50% { opacity: 0 }
    100% { opacity: 1 }
  }
</style>

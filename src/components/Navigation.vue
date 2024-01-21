<template>
  <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-indigo-500 mb-3">
  <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
    <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
      <a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#pablo">
        TODO APP in Vue
      </a>
      <button @click="toggleMenu" class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
        <span class="block relative w-6 h-px rounded-sm bg-white"></span>
        <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
        <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
      </button>
    </div>
    <div :class="{ 'hidden': !isMenuVisible, 'lg:flex': isMenuVisible }" class="lg:flex flex-grow items-center" id="example-navbar-warning">
      <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <router-link :to="{ name: 'Home' }" class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'AddTodo'}" class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
              Add Todo
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'ListTodo'}" class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
              Todo List
            </router-link>
          </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';


export default {
  setup() {
    const isMenuVisible = ref(window.innerWidth >= 1024); // Megváltoztattam az alapértelmezett értéket
    const isHamburgerVisible = ref(window.innerWidth < 1024);

    const toggleMenu = () => {
      isMenuVisible.value = !isMenuVisible.value;
    };

    const handleResize = () => {
      isHamburgerVisible.value = window.innerWidth < 1024;
      // Ha az oldal szélessége nagyobb, mint 1024, akkor mindig megjelenítjük a menüt
      if (window.innerWidth >= 1024) {
        isMenuVisible.value = true;
      } else {
        // Hide the menu when resizing
        isMenuVisible.value = false;
      }
    };

    onMounted(() => {
      // Add resize event listener when component is mounted
      window.addEventListener('resize', handleResize);
    });

    onUnmounted(() => {
      // Remove resize event listener when component is unmounted
      window.removeEventListener('resize', handleResize);
    });

    return {
      isMenuVisible,
      isHamburgerVisible,
      toggleMenu,
    };
  },
};
</script>

<style>

</style>
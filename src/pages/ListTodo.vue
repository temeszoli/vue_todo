<template>
    <div class="flex flex-col gap-4 p-6 justify-center text-lg font-serif">
        <h1>TODO LIST</h1>
        <p class="text-sm">Prio: Magas - vörös, Közepes - sárga, Alacsony - zöld</p>
          <ul>
            <HighTodo :todos="todos"/>
            <MediumTodo :todos="todos" />
            <LowTodo :todos="todos"/>
          </ul>
    </div> 
</template>

<script>
import LowTodo from '../components/LowTodo.vue'
import MediumTodo from '../components/MediumTodo.vue'
import HighTodo from '../components/HighTodo.vue'
import services from '../components/Service';

export default {
  components: {
    LowTodo,
    MediumTodo,
    HighTodo
  },
  setup() {

    const { todos, fetchData } = services();

    fetchData()

    return {
      todos
    };
  },
};
</script>
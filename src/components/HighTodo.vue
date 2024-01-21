<template>
    <li class="my-2" v-for="todo in todos" :key="todo.id">
        <div v-if="todo.priority === 'High'" class="flex">
            <p class="bg-gray-300 flex-grow text-black border-l-16 border-red-500 rounded-md px-3 py-2 mr-5 w-full md:w-5/12 lg:w-3/12">{{ todo.task }}</p>
            <button @click="confirmDelete(todo.id)" class="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:translate-x-3 hover:shadow-lg">
                Kész
            </button>
        </div>
    </li>
</template>

<script>
import services from './Service';

export default {
    props: ['todos'],
    setup(){
        const {confirmDelete} = services();

        return{
            confirmDelete
        }
    }
    
}
</script>
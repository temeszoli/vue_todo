<template>
<form @submit.prevent="submitRequest" class="mb-4 my-10 px-2 w-2/6 flex flex-col mx-auto">
  <label class="block mb-1 text-md font-bold" for="input1">Task:</label>
  <input v-model="requestBody.task" name="newTask" id="input1" class="w-full border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none text-black" type="text" autofocus placeholder="Task..." />

  <label class="block mb-1 my-3 text-md font-bold" for="select-item">Priority:</label>
    <div class="relative">
    <select v-model="requestBody.priority" class="w-full text-black font-bold border px-4 pr-8 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none appearance-none" id="select-item">
      <option>Low</option>
      <option>Medium</option>
      <option>High</option>
    </select>

    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    </div>
  </div>
  <div>
    <button type="submit" class="font-bold my-3 px-4 py-2 w-7/12 justify-self-center text-md rounded text-white bg-indigo-500 focus:outline-none hover:bg-indigo-400">Add Task</button>
  </div>
</form>

</template>

<script>
import services from '../components/Service';

export default {
  setup(){

    const {requestBody, submitRequest} = services();

    return{
      requestBody,
      submitRequest,
    };
  }
}
</script>
import { ref } from "vue";
import axios from "axios";

const services = () => {
  const todos = ref([]);
  const requestBody = ref({
    task: "",
    priority: "",
  });

  const fetchData = async () => {
    try {
      // Axios hívás:
      const response = await axios.get(import.meta.env.VITE_BASE_URL);
      if (response.status >= 200 && response.status < 300) {
        todos.value = response.data;
        console.log("Adatok lekérése sikeres", response.data);
      }
      // A válaszban található adatokat beállítjuk a todos ref-be
    } catch (error) {
      console.error("Hiba történt a lekérés során:", error);
    }
  };

  const confirmDelete = async (id) => {
    const userConfirmed = window.confirm("Biztosan elvégezte ezt a feladatot?");

    if (userConfirmed) {
      try {
        const response = await axios.delete(
          import.meta.env.VITE_BASE_URL + "/" + id
        );
        if (response.status >= 200 && response.status < 300) {
          console.log("Törlés sikeres!");
          todos.value = todos.value.filter((todo) => todo.id !== id);
        }
      } catch (error) {
        console.log("Hiba a törlés során:", error);
      }
    }
  };

  const submitRequest = async () => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_BASE_URL,
        requestBody.value
      );
      if (response.status >= 200 && response.status < 300) {
        alert("Task added succesfully");
        console.log("Sikeres POST", response.data);
      }
    } catch (error) {
      console.log("Hiba történt a POST kérés során: ", error);
    }
  };

  return {
    todos,
    requestBody,
    fetchData,
    confirmDelete,
    submitRequest,
  };
};

export default services;

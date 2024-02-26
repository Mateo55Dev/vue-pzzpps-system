<script setup>
import { ref } from 'vue';
import axios from 'axios';

const formData = ref({
  data: '',
  wydarzenie: '',
  uczestnicy: ''
});

const addInstitution = async () => {
  try {
    const response = await axios.post('http://localhost/pzzpps-api/addEvent.php', formData.value);
    console.log(response.data);
    // Tutaj możesz dodać obsługę odpowiedzi, na przykład wyświetlanie komunikatu o sukcesie
  } catch (error) {
    console.error('Error while adding institution:', error.message);
  }
};
</script>

<template>
  <div>
    <form @submit.prevent="addInstitution" class="add-institution-form">
      <h2>Dodaj nowe wydarzenie:</h2>
      
      <label for="event-date">Data dołączenia:</label>
      <input v-model="formData.data" type="date" name="data" required>
      
      <label for="wydarzenie">Nazwa:</label>
      <input v-model="formData.wydarzenie" type="text" name="wydarzenie" required>

      <label for="participants">Uczestnicy:</label>
      <input v-model="formData.uczestnicy" type="text" name="uczestnicy" required>

      <button type="submit">Dodaj</button>
    </form>
  </div>
  <p class="warn"><br/>UWAGA! BRAK KOMUNIKATÓW <br/> PROSZĘ SKONTROLOWAĆ W ZAKŁADCE "KALENDARZ WYDARZEŃ" CZY WYDARZENIE ZOSTAŁO DODANE</p>
</template>


<style scoped>
.add-institution-form {
  margin-top: 20px;
  max-width: 600px;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  box-sizing: border-box;
  margin: 0 auto;
}

.add-institution-form input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
}

.add-institution-form button {
  background-color: #275DB9;
  color: #ffffff;
  cursor: pointer;
  border: none;
  padding: 8px 12px;
}

.add-institution-form button:hover {
  background-color: #1A478D;
}

h2 {
  font-weight: bold;
  color: #275DB9;
  text-align: center;
}
</style>

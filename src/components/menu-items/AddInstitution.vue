<script setup>
import { ref } from 'vue';
import axios from 'axios';

const formData = ref({
  nazwa: '',
  data_dolaczenia: '',
  ulica: '',
  kod_pocztowy: '',
  miejscowosc: ''
});

const addInstitution = async () => {
  try {
    const response = await axios.post('http://localhost/pzzpps-api/addInstitution.php', formData.value);
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
      <h2>Dodaj nowy ośrodek:</h2>
      <label for="nazwa">Nazwa:</label>
      <input v-model="formData.nazwa" type="text" name="nazwa" required>

      <label for="data_dolaczenia">Data dołączenia:</label>
      <input v-model="formData.data_dolaczenia" type="date" name="data_dolaczenia" required>

      <label for="ulica">Ulica:</label>
      <input v-model="formData.ulica" type="text" name="ulica" required>

      <label for="kod_pocztowy">Kod pocztowy:</label>
      <input v-model="formData.kod_pocztowy" type="text" name="kod_pocztowy" required>

      <label for="miejscowosc">Miejscowość:</label>
      <input v-model="formData.miejscowosc" type="text" name="miejscowosc" required>

      <button type="submit">Dodaj</button>
    </form>
  </div>
  <p class="warn"><br/>UWAGA! BRAK KOMUNIKATÓW <br/> PROSZĘ SKONTROLOWAĆ W ZAKŁADCE "OŚRODKI" CZY OŚRODEK ZOSTAŁ DODANY</p>
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

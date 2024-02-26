<script setup>
import { ref } from 'vue';
import axios from 'axios';

const formData = ref({
  id_czlonka: '',
  tytul: '',
  kwota: '',
  data: ''
});

const addPayment = async () => {
  try {
    const response = await axios.post('http://localhost/pzzpps-api/addPayment.php', formData.value);
    console.log(response.data);
    // Tutaj możesz dodać obsługę odpowiedzi, na przykład wyświetlanie komunikatu o sukcesie
  } catch (error) {
    console.error('Error while adding payment:', error.message);
  }
};
</script>

<template>
  <div>
    <form @submit.prevent="addPayment" class="add-payment-form">
      <h2>Dodaj nową płatność:</h2>

      <label for="id_czlonka">ID członka:</label>
      <input v-model="formData.id_czlonka" type="text" name="id_czlonka" required>

      <label for="tytul">Tytuł:</label>
      <input v-model="formData.tytul" type="text" name="tytul" required>

      <label for="kwota">Kwota:</label>
      <input v-model="formData.kwota" type="number" step="0.01" name="kwota" required>

      <label for="data">Data:</label>
      <input v-model="formData.data" type="date" name="data" required>

      <button type="submit">Dodaj</button>
    </form>
  </div>
  <p class="warn"><br/>UWAGA! BRAK KOMUNIKATÓW <br/> PROSZĘ SKONTROLOWAĆ W ZAKŁADCE "PŁATNOŚCI" CZY PŁATNOŚĆ ZOSTAŁA DODANA</p>
</template>

<style scoped>
.add-payment-form {
  margin-top: 20px;
  max-width: 600px;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  box-sizing: border-box;
  margin: 0 auto;
}

.add-payment-form input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
}

.add-payment-form button {
  background-color: #275DB9;
  color: #ffffff;
  cursor: pointer;
  border: none;
  padding: 8px 12px;
}

.add-payment-form button:hover {
  background-color: #1A478D;
}

h2 {
  font-weight: bold;
  color: #275DB9;
  text-align: center;
}
</style>

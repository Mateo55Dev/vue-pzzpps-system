<script setup>
import { ref } from 'vue';
import axios from 'axios';

const formData = ref({
  imie: '',
  nazwisko: '',
  data_urodzenia: '',
  telefon: '',
  email: '',
  data_dolaczenia: '',
  osrodek: ''
});

const addMember = async () => {
  try {
    const response = await axios.post('http://localhost/pzzpps-api/addMember.php', formData.value);
    console.log(response.data);
    // Tutaj możesz dodać obsługę odpowiedzi, na przykład wyświetlanie komunikatu o sukcesie
  } catch (error) {
    console.error('Error while adding member:', error.message);
  }
};

const osrodki = ref([]);

axios.get('http://localhost/pzzpps-api/institutions.php')
  .then(response => {
    osrodki.value = response.data;
  })
  .catch(error => {
    console.error('Error while fetching centers:', error.message);
  });
</script>

<template>
  <div>
   
    <form @submit.prevent="addMember" class="add-member-form">
      <h2>Dodaj nowego członka:</h2>
      <label for="imie">Imię:</label>
      <input v-model="formData.imie" type="text" name="imie" required>

      <label for="nazwisko">Nazwisko:</label>
      <input v-model="formData.nazwisko" type="text" name="nazwisko" required>

      <label for="data_urodzenia">Data urodzenia:</label>
      <input v-model="formData.data_urodzenia" type="date" name="data_urodzenia" required>

      <label for="telefon">Telefon:</label>
      <input v-model="formData.telefon" type="text" name="telefon" required>

      <label for="email">Email:</label>
      <input v-model="formData.email" type="email" name="email" required>

      <label for="data_dolaczenia">Data dołączenia:</label>
      <input v-model="formData.data_dolaczenia" type="date" name="data_dolaczenia" required>

      <label for="osrodek">Ośrodek:</label>
      <select v-model="formData.osrodek" name="osrodek" required>
        <option v-for="osrodek in osrodki" :value="osrodek.nazwa" :key="osrodek.id_osrodka">{{ osrodek.nazwa }}</option>
      </select>

      <button type="submit">Dodaj</button>
    </form>
  </div>
  <p class="warn"><br/>UWAGA! BRAK KOMUNIKATÓW <br/> PROSZĘ SKONTROLOWAĆ W ZAKŁADCE "CZŁONKOWIE" CZY CZŁONEK ZOSTAŁ DODANY</p>
</template>

<style scoped>
.add-member-form {
  margin-top: 20px;
  max-width: 600px;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  box-sizing: border-box;
  margin: 0 auto;
}

.add-member-form input,
.add-member-form select {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
}

.add-member-form button {
  background-color: #275DB9;
  color: #ffffff;
  cursor: pointer;
  border: none;
  padding: 8px 12px;
}

.add-member-form button:hover {
  background-color: #1A478D;
}

h2 {
  font-weight: bold;
  color: #275DB9;
  text-align: center;
}
</style>

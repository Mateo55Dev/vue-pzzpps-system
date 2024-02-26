  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  
  const selectedInstitutionId = ref('');
  const selectedInstitution = ref(null);
  const formData = ref({
    nazwa: '',
    data_dolaczenia: '',
    ulica: '',
    kod_pocztowy: '',
    miejscowosc: ''
  });
  
  const institutions = ref([]);
  
  const fetchInstitutions = async () => {
    try {
      const response = await axios.get('http://localhost/pzzpps-api/institutions.php');
      institutions.value = response.data;
    } catch (error) {
      console.error('Error while fetching institutions:', error.message);
    }
  };
  
  const loadInstitutionData = async () => {
    if (!selectedInstitutionId.value) return;
    try {
      const response = await axios.get(`http://localhost/pzzpps-api/getInstitution.php?id=${selectedInstitutionId.value}`);
      selectedInstitution.value = response.data;
      // Przypisanie wartości pól formularza na podstawie danych pobranych z serwera
      formData.value.nazwa = selectedInstitution.value.nazwa;
      formData.value.data_dolaczenia = selectedInstitution.value.data_dolaczenia;
      formData.value.ulica = selectedInstitution.value.ulica;
      formData.value.kod_pocztowy = selectedInstitution.value.kod_pocztowy;
      formData.value.miejscowosc = selectedInstitution.value.miejscowosc;
    } catch (error) {
      console.error('Error while fetching institution data:', error.message);
    }
  };
  
  const editInstitution = async () => {
    try {
      const response = await axios.put('http://localhost/pzzpps-api/editInstitution.php', formData.value);
      console.log(response.data);
      // Tutaj możesz dodać obsługę odpowiedzi, na przykład wyświetlanie komunikatu o sukcesie
    } catch (error) {
      console.error('Error while editing institution:', error.message);
    }
  };
  
  fetchInstitutions();
  </script>
  
  <template>
    <!-- <div>
      <form @submit.prevent="editInstitution" class="edit-institution-form">
        <h2>Edytuj ośrodek:</h2>
        <label for="selectedInstitution">Wybierz ośrodek:</label>
        <select v-model="selectedInstitutionId" @change="loadInstitutionData" required>
          <option value="">Wybierz...</option>
          <option v-for="institution in institutions" :key="institution.id" :value="institution.id">{{ institution.nazwa }}</option>
        </select>
  
        <template v-if="selectedInstitution">
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
  
          <button type="submit">Zapisz zmiany</button>
        </template>
      </form>
    </div>
    <p class="warn">FUNKCJA NIE DZIAŁA!!!</p> -->  
      <h3 class="warn">Funkcja, nad którą pracujemy, jest obecnie w trakcie realizacji i będzie dostępna wkrótce</h3>
  </template>
  

  
  <style scoped>
  .edit-institution-form {
    margin-top: 20px;
    max-width: 600px;
    background-color: #ffffff;
    border: 1px solid #cccccc;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    box-sizing: border-box;
    margin: 0 auto;
  }
  
  .edit-institution-form input,
  .edit-institution-form select {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    box-sizing: border-box;
  }
  
  .edit-institution-form button {
    background-color: #275DB9;
    color: #ffffff;
    cursor: pointer;
    border: none;
    padding: 8px 12px;
  }
  
  .edit-institution-form button:hover {
    background-color: #1A478D;
  }
  
  h2 {
    font-weight: bold;
    color: #275DB9;
    text-align: center;
  }
  </style>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  
  const formData = ref({
    nazwa: '',
    data_dolaczenia: '',
    kod_pocztowy: ''
  });
  
  const message = ref('');
  const confirmationPromptVisible = ref(false);
  
  const confirmDelete = () => {
    confirmationPromptVisible.value = true;
  };
  
  const deleteInstitution = async () => {
    try {
      const response = await axios.post('http://localhost/pzzpps-api/deleteInstitution.php', formData.value);
      message.value = response.data.message;
      console.log(response.data);
    } catch (error) {
      console.error('Error while deleting center:', error.message);
      message.value = 'Błąd podczas usuwania ośrodka.';
    }
  };
  
  const cancelDelete = () => {
    confirmationPromptVisible.value = false;
    message.value = 'Anulowano usuwanie ośrodka';
  };
  </script>
  
  <template>
    <div>
      <form @submit.prevent="confirmDelete" class="delete-institution-form">
        <h2>Usuń ośrodek:</h2>
  
        <label for="nazwa">Nazwa:</label>
        <input v-model="formData.nazwa" type="text" name="nazwa" required>
  
        <label for="data_dolaczenia">Data dołączenia:</label>
        <input v-model="formData.data_dolaczenia" type="date" name="data_dolaczenia" required>
  
        <label for="kod_pocztowy">Kod pocztowy:</label>
        <input v-model="formData.kod_pocztowy" type="text" name="kod_pocztowy" required>
  
        <button type="submit">Usuń</button>
  
        <div v-if="confirmationPromptVisible" class="confirmation-prompt">
          <p>Czy na pewno chcesz usunąć ośrodek?</p>
          <button @click="deleteInstitution">Tak</button>
          <button @click="cancelDelete">Cofnij</button>
        </div>
        <p v-if="message">{{ message }}</p>
      </form>
    </div>
    <p class="warn"><br/>UWAGA! NIE ZAWSZE KOMUNIKATY SĄ POPRAWNE <br/> PROSZĘ SKONTROLOWAĆ W ZAKŁADCE "OŚRODKI" CZY NA PEWNO OŚRODEK ZOSTAŁ USUNIĘTY</p>
  </template>
  
<style scoped>
.delete-institution-form {
  margin-top: 20px;
  max-width: 600px;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  box-sizing: border-box;
  margin: 0 auto;
}

.delete-institution-form input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
}

.delete-institution-form button {
  background-color: #275DB9;
  color: #ffffff;
  cursor: pointer;
  border: none;
  padding: 8px 12px;
}

.delete-institution-form button:hover {
  background-color: #1A478D;
}

.confirmation-prompt {
  margin-top: 20px;
}

.confirmation-prompt button {
  margin-right: 10px;
}
</style>
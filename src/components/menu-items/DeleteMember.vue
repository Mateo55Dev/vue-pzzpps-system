<template>
    <div>
      <form @submit.prevent="confirmDelete" class="delete-member-form">
        <h2>Usuń członka:</h2>
        <label for="id">ID:</label>
        <input v-model.number="formData.id" type="number" name="id" min="1" required>

        <label for="imie">Imię:</label>
        <input v-model="formData.imie" type="text" name="imie" required>
  
        <label for="nazwisko">Nazwisko:</label>
        <input v-model="formData.nazwisko" type="text" name="nazwisko" required>
  
        <button type="submit">Usuń</button>
        
        <div v-if="confirmationPromptVisible" class="confirmation-prompt">
        <p>Czy na pewno chcesz usunąć członka?</p>
        <button @click="deleteMember">Tak</button>
        <button @click="cancelDelete">Cofnij</button>
      </div>
      <p v-if="message">{{ message }}</p>
      </form>
    </div>
    <p class="warn"><br/>UWAGA! NIE ZAWSZE KOMUNIKATY SĄ POPRAWNE <br/> PROSZĘ SKONTROLOWAĆ W ZAKŁADCE "CZŁONKOWIE" CZY NA PEWNO CZŁONEK ZOSTAŁ USUNIĘTY</p>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  
  const formData = ref({
    id: '',
    imie: '',
    nazwisko: ''
  });
  
  const message = ref('');
  const confirmationPromptVisible = ref(false);
  
  const confirmDelete = () => {
    confirmationPromptVisible.value = true;
  };
  
  const deleteMember = async () => {
    try {
      const response = await axios.post('http://localhost/pzzpps-api/deleteMember.php', formData.value);
      message.value = response.data.message;
      console.log(response.data);
    } catch (error) {
      console.error('Error while deleting member:', error.message);
      message.value = 'Błąd podczas usuwania członka.';
    }
  };
  
  const cancelDelete = () => {
    confirmationPromptVisible.value = false;
    message.value = 'Anulowano usuwanie członka';
  };
  </script>
  
  <style scoped>
  .delete-member-form {
    margin-top: 20px;
    max-width: 600px;
    background-color: #ffffff;
    border: 1px solid #cccccc;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    box-sizing: border-box;
    margin: 0 auto;
  }
  
  .delete-member-form input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    box-sizing: border-box;
  }
  
  .delete-member-form button {
    background-color: #275DB9;
    color: #ffffff;
    cursor: pointer;
    border: none;
    padding: 8px 12px;
  }
  
  .delete-member-form button:hover {
    background-color: #1A478D;
  }
  
  .confirmation-prompt {
    margin-top: 20px;
  }
  
  .confirmation-prompt button {
    margin-right: 10px;
  }
  </style>
  
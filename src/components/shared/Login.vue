<script setup>
  import { onMounted, ref } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  import state from '../../router/state'

  
  const username = ref('');
  const password = ref('');
  const router = useRouter();
  let errorMessage = ref('');
  
  
  onMounted(() => {
  // Sprawdź, czy użytkownik jest już zalogowany po odświeżeniu strony
  if (localStorage.getItem('authToken')) {
    state.isAuthenticated.value = true;
    state.username = localStorage.getItem('username');
    router.push('/home');
  }
});

  const login = async () => {
    try {
      const response = await axios.post('http://localhost/pzzpps-api/login.php', {
        username: username.value,
        password: password.value
      });
  
      console.log(response.data);
  
      if (response.data.success) {
        state.isAuthenticated.value = true;
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('username', username.value);
        errorMessage = response.data.message;
        router.push('/home');
      }
      else {
        errorMessage = 'Nieprawidłowy login lub hasło. Spróbuj ponownie lub skontaktuj się z administratorem';
      }
      
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };
  </script>

  <template>
    <div class="login-container">
      <form @submit.prevent="login" class="login-form">
        <label for="username">Login:</label>
        <input v-model="username" type="text" id="username" required class="input-field">
  
        <label for="password">Hasło:</label>
        <input v-model="password" type="password" id="password" required class="input-field">
  
        <button type="submit" class="submit-button">Login</button>

        <p class="warn">{{ errorMessage }}</p>
      </form>
    </div>
</template>

  <style scoped>
.login-container {
    background-color: #f8f8f8;
    color: #333333;
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 0px auto;
    padding: 30px;
}

.login-form {
  background-color: #ffffff;
  border: 1px solid #cccccc;
  padding: 50px 20px;
  width: 400px;
  margin: 0 auto;
  border-radius: 8px;
}

.input-field {
  width: 80%;
  padding: 10px;
  margin: 10px 30px;
  box-sizing: border-box;
  border: 1px solid #555555;
  border-radius: 8px;
}

.submit-button {
  background-color: #275DB9;
  color: #ffffff;
  padding: 8px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 30px;
  width: 50%;
  font-size: 15px;
}

.submit-button:hover {
  filter: brightness(85%);
}
  </style>
  
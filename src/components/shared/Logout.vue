<script setup>
import { useRouter, RouterLink } from 'vue-router';
import state from '@/router/state';
import UserIcon from '../icons/UserIcon.vue'
import { ref } from 'vue';

const router = useRouter();

const logout = async () => {
  try {
    // Wywołaj skrypt PHP do wylogowywania
    const response = await fetch('http://localhost/pzzpps-api/logout.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (data.success) {
      // Pomyślne wylogowanie - przekieruj użytkownika na stronę logowania
      state.isAuthenticated.value = false;
      localStorage.removeItem('authToken');
      localStorage.removeItem('username');
      router.push('/');
    } else {
      console.error('Logout failed:', data.message);
    }
  } catch (error) {
    console.error('Error during logout:', error.message);
  }
};
</script>

<template>
    <div class="header">
        <div class="login">
            <RouterLink to="/" @click="logout">
                <UserIcon class="login-img"/>
                <!-- <p>{{ username }}</p> -->
                <p>Wyloguj się</p>
             </RouterLink>
        </div>
    </div>
</template>

<style scoped>
.header {
    background-color: #275DB9;
    color: #ffffff;
    padding:  0 10px;;
    display: flex;
    justify-content: space-between;

    /* Small devices such as large phones (640px and up)
    @media only screen and (min-width: 40em) {...}

    /* Medium devices such as tablets (768px and up) */
    /* @media only screen and (min-width: 48em) {...} */

    /* Large devices such as laptops (1024px and up) */
    /* @media only screen and (min-width: 64em) {...} */

    @media screen and (min-width: 640px) {
        font-size: 0.5rem;
    }
    @media (min-width: 768px) {
        font-size: 0.7rem;
    }
    @media (min-width: 1024px) {
        font-size: 1rem;
    }

    .login {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #ffffff;
        font-size: 1rem;
        text-align: center;

        a {
            color: white;
            text-decoration: none;
            p {
                margin: 0;
            }
        }
    }
}
 
</style>

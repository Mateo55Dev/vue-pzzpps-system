<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const items = ref([]);

const fetchData = () => {
  fetch('https://localhost/pzzpps-api/displayInstitutions.php')
    .then((response) => response.json())
    .then((data) => {
      items.value = data;
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      alert("Błąd wczytywania danych");
    });
};

const goToInstitutionDetails = (id) => {
  router.push(`/institutionDetails/${id}`);
};

onMounted(() => {
  fetchData();
});
</script>

<template>
  <div class="grid-container">
    <div v-for="item in items" :key="item.id_osrodka" class="grid-item" @click="() => goToInstitutionDetails(item.id_osrodka)">
      <div class="item-name"><p>{{ item.nazwa }}</p></div>
      <div class="info">
        <div class="item-date"><p><b>Data dołączenia:</b><br/>{{ item.data_dolaczenia }}</p></div>
        <div class="item-address"><b>Adres:</b> {{ item.ulica }}, {{ item.kod_pocztowy }}<br/>{{ item.miejscowosc }}</div>
      </div>
    </div>
  </div>
</template>

  
<style scoped>
  .grid-container {
    display: grid; /* Dodano display: grid */
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
    gap: 10px;
    .grid-item {
        text-decoration: none;
        background-color: #f2f2f2;
        padding: 20px;
        text-align: center;
        text-decoration: none;
        color: #333333;
        display: block;
        border-radius: 5px;
        border: 1px solid #e7e7e7;
        cursor: pointer;
        .info {
            display: grid;
            grid-template-columns: 1fr 1fr;
            justify-content: center;
            align-items: center;
        }
        .item-name {
            font-size: 1.2rem;
            font-weight: bold;
            background-color: #275DB9;
            color: white;
            border-radius: 5px;
            margin: 0;
            padding: 10px;
        }
    }
}

</style>
  
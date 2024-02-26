<script setup>
import { ref, onMounted, computed } from 'vue';

const items = ref([]);
const filterValue = ref('');

const fetchData = () => {
  fetch('https://localhost/pzzpps-api/displayMembers.php')
    .then((response) => response.json())
    .then((data) => {
      items.value = data;
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      alert("Błąd wczytywania danych");
    });
};

onMounted(() => {
  fetchData();
});

const filteredItems = computed(() => {
  return items.value.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(filterValue.value.toLowerCase())
    )
  );
});

const highlight = (value) => {
  if (!filterValue.value) return value; // Jeśli nie ma wartości filtra, zwracamy wartość bez zmian
  return value.toString().replace(new RegExp(filterValue.value, 'gi'), match => `<span class="highlight">${match}</span>`);
};
</script>

<template>
  <div class="display">
    <input v-model="filterValue" placeholder="Wprowadź kryterium filtrowania" class="filter-input"/>
    
    <table border="1">
      <tr>
        <th>Lp</th>
        <th>Nazwisko i imię</th>
        <th>Data urodzenia</th>
        <th>Telefon</th>
        <th>Email</th>
        <th>Data dołączenia</th>
        <th>Ośrodek</th>
      </tr>
      <tr v-for="(item, index) in filteredItems" :key="index">
        <td v-html="highlight(index + 1)"></td>
        <td v-html="highlight(item.nazwa_czl)"></td>
        <td v-html="highlight(item.data_ur)"></td>
        <!-- <td>+48 {{ item.telefon }}</td> -->
        <td v-html="highlight('+48 '+item.telefon)"></td>
        <td v-html="highlight(item.email)"></td>
        <td v-html="highlight(item.data_dol)"></td>
        <td><RouterLink to="/displayInstitutions">{{ item.nazwa }}</RouterLink></td>
      </tr>
    </table>
  </div>
</template>

<style>
table {
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto;
}

table, th, td {
  border: 1px solid #cccccc;
}

th, td {
  padding: 8px;
  text-align: left;
}

th {
  background-color: #275DB9;
  color: #ffffff;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #e0e0e0;
}

table a {
  color: black;
}

.display{
  text-align: center;
  margin: 0 auto;
}

.filter-input {
  padding: 6px;
  border: 2px solid #cccccc;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 95%;
}

.highlight {
  background-color: yellow;
}
</style>

<script setup>
import { ref, onMounted } from 'vue';

const items = ref([]);

const fetchData = () => {
  fetch('https://localhost/api-vue/displayMenagement.php')
    .then((response) => response.json())
    .then((data) => {
      items.value = data;
      //console.log(data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
};

onMounted(() => {
  fetchData();
});
</script>

<template>
    <div class="display">
      <!-- <h1>Wyświetlanie wszystkich członków</h1> -->

      <table border="1">
        <tr>
          <th>Lp</th>
          <th>Nazwisko i imię</th>
          <th>Telefon</th>
          <th>Email</th>
          <th>Stanowisko</th>
          <th>Ośrodek</th>
        </tr>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.id_osoby_zarzad }}</td>
          <td>{{ item.nazwa }}</td>
          <td>+48 {{ item.telefon }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.stanowisko }}</td>
          <td><RouterLink to="/displayInstitutions">{{ item.nazwa_osr }}</RouterLink></td>

        </tr>
      </table>
    </div>
  </template>
  
  <style>
  table {
		width: 100%;
		border-collapse: collapse;
		/* margin-top: 20px; */
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
  </style>
  
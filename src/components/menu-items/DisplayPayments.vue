<script setup>
    import { ref, onMounted, computed } from 'vue';
    import axios from 'axios';
  
    const payments = ref([]);
    const filterValue = ref('');
  
    onMounted(async () => {
      try {
        const response = await axios.get('http://localhost/pzzpps-api/displayPayments.php');
        payments.value = response.data;
      } catch (error) {
        console.error('Error while fetching payments:', error.message);
      }
    });

const filteredItems = computed(() => {
  return payments.value.filter((payment) =>
    Object.values(payment).some((value) =>
      String(value).toLowerCase().includes(filterValue.value.toLowerCase())
    )
  );
});
  </script>
  
  <template>
    <div class="container">
      <input v-model="filterValue" placeholder="Wprowadź kryterium filtrowania" class="filter-input"/>

      <table>
        <thead>
          <tr>
            <th>ID płatności</th>
            <th>ID członka</th>
            <th>Nazwa</th>
            <th>Ośrodek</th>
            <th>Tytuł</th>
            <th>Kwota</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="payment in filteredItems" :key="payment.id_platnosci">
            <td>{{ payment.id_platnosci }}</td>
            <td>{{ payment.id_czlonka }}</td>
            <td>{{ payment.nazwa }}</td>
            <td>{{ payment.nazwa_osr }}</td>
            <td>{{ payment.tytul }}</td>
            <td>{{ payment.kwota }} zł</td>
            <td>{{ payment.data }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  
  
  <style scoped>
  .container {
    box-sizing: border-box;
    background-color: #ffffff;
    margin: 0 auto;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
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
  .filter-input {
  padding: 6px;
  border: 2px solid #cccccc;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 95%;
}
  </style>
  
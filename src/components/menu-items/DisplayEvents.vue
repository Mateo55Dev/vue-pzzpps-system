<script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const events = ref([]);
  const pastEvents = ref([]);
  const allEvents = ref([]);
  
  onMounted(async () => {
    try {
      const response = await axios.get('http://localhost/pzzpps-api/displayEvents.php');
      allEvents.value = response.data;
  
      events.value = allEvents.value.filter(event => new Date(event.data) > new Date());
      pastEvents.value = allEvents.value.filter(event => new Date(event.data) < new Date());
    } catch (error) {
      console.error('Error while fetching events:', error.message);
    }
  });
</script>

  
  <template>
    <div class="container">
      <h2>Nadchodzące wydarzenia</h2>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Wydarzenie</th>
            <th>Uczestnicy</th>
            <th>Pozostało <p class="warn" style="display: inline-flex;">(nie działa!)</p></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="event in events" :key="event.id">
            <td>{{ event.data }}</td>
            <td>{{ event.wydarzenie }}</td>
            <td>{{ event.uczestnicy }}</td>
            <td>{{ event.pozostalo + ' dni' }}</td>
          </tr>
        </tbody>
      </table>
  
      <br>
  
      <h2>Zakończone wydarzenia</h2>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Wydarzenie</th>
            <th>Uczestnicy</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="event in pastEvents" :key="event.id">
            <td>{{ event.data }}</td>
            <td>{{ event.wydarzenie }}</td>
            <td>{{ event.uczestnicy }}</td>
          </tr>
        </tbody>
      </table>
      <br/><br/>January - Styczeń | February - Luty | March - Marzec | April - Kwiecień | May - Maj | June - Czerwiec | July - Lipiec | August - Sierpień | September - Wrzesień | October- Październik | November - Listopad | December - Grudzień
    </div>
  </template>
  

  
<style scoped>
  .container {
    box-sizing: border-box;
    background-color: #ffffff;
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
  </style>
  
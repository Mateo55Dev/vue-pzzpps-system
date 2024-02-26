<script setup>
import FederationIcon from '@/components/icons/FederationIcon.vue';
import FacebookIcon from '@/components/icons/FacebookIcon.vue';
import IsapIcon from '@/components/icons/IsapIcon.vue';
import DisplayManagements from '../misc/DisplayManagements.vue';
</script>

<template>
  <div class="container" >
  <h1>"NIC O NAS BEZ NAS"</h1>

  <div class="links">
    <div class="link">
              <FederationIcon/>
        <a href="https://federacja-socjalnych.pl/" target="_blank">Polska Federacja Pracowników Socjalnych i Pomocy Społecznej</a>
    </div>
    
    <div class="link">
      <FacebookIcon/>
        <a href="https://www.facebook.com/PZZPPS?locale=pl_PL" target="_blank">Podkarpacki Związek Zawodowy Pracowników Pomocy Społecznej</a>
    </div>

    <div class="link">
              <IsapIcon/>
        <a href="https://isap.sejm.gov.pl/isap.nsf/search.xsp?status=O&title=zwi%C4%85zki+zawodowe" target="_blank">Internetowy System Aktów Prawnych - Związki Zawodowe</a>
    </div>
  </div>
  
  <img src="../../assets/images/background.jpg" alt="photo">

      <DisplayManagements class="menagement"/>
  </div>
</template>

<style scoped>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h1 {
            background-color: #cccccc;
            margin-bottom: 20px;
        }
        .links {
            display: grid;
            grid-template-columns: repeat(3,1fr);
            margin-bottom: 20px;
            .link {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                padding: 10px;
                border: 1px solid #cccccc;
                text-align: center;
            
                a {
                    padding: 10px;
                    font-size: 1.16rem;
                    text-decoration: none;
                }
            }
        }
        img {
            width: 960px;
            height: auto;
            box-shadow: 0 5px 10px 0 #797979;
        }
        .menagement {
            width: 90%;
            margin-top: 20px;
        }
    }
</style>
<script setup>
import state from '@/router/state';
import { ref } from 'vue';
const username = ref(localStorage.getItem('username'));
</script>

<template>
    <div v-if="username=='admin'">
        <div class="container">
        <div class="layout">
            <h1 class="warn">UWAGA!!! Pliki są nieaktualne!!!</h1><br/>
            <a href="../home">Powrót do strony głównej</a><br/><hr>
            
            <h2>Layouty w plikach</h2>
            

            ../index.php<br/>
            <img src="./docs-images/index.php.svg" alt="index"><br/>
            ../panel.php<br/>
            <img src="" alt="Error: Brak schematu"><br/>

            <hr>
            
            ../menu/displayInstitutions.php<br/>
            <img src="" alt="Error: Brak schematu"><br/>
            ../menu/addInstitutions.php <p class="warn">[Brak]</p><br/>
            <img src="" alt=""><br/>
            ../menu/editInstitutions.php <p class="warn">[Brak]</p><br/>
            <img src="" alt=""><br/>
            ../menu/deleteInstitutions.php <p class="warn">[Brak]</p><br/>
            <img src="" alt=""><br/>

            <hr>
            ../menu/displayMembers.php<br/>
            <img src="" alt="Error: Brak schematu"><br/>
            ../menu/addMember.php<br/>
            <img src="" alt="Error: Brak schematu"><br/>
            ../menu/editMember.php <p class="warn">[Brak]</p><br/>
            <img src="" alt=""><br/>
            ../menu/deleteMember.php <p class="warn">[Brak]</p><br/>
            <img src="" alt=""><br/>

            <hr>
            ../menu/displayPayments.php<br/>
            <img src="" alt="Error: Brak schematu"><br/>
            ../menu/addPayments.php <p class="warn">[Brak]</p><br/>
            <img src="" alt=""><br/>
            ../menu/editPayments.php <p class="warn">[Brak]</p><br/>
            <img src="" alt=""><br/>

            <hr>
            ../menu/displayEvents.php <p class="warn">[Brak]</p><br/>
            <img src="" alt=""><br/>
            ../menu/addEvent.php <p class="warn">[Brak]</p><br/>
            <img src="" alt=""><br/>
            ../menu/editEvent.php <p class="warn">[Brak]</p><br/>
            <img src="" alt=""><br/>

            <hr>
            ../menu/createBackup.php <p class="warn">[Brak]</p><br/>
            <img src="" alt=""><br/>
            ../menu/importBackup.php <p class="warn">[Brak]</p><br/>
            <img src="" alt=""><br/>
        </div>
        

        <div class="path">
            <br/><hr>
            <h2>Ścieżka plików</h2>

            <ul>
                <li class="folder">IMG
                    <ul>
                        <li>background.jpg</li>
                        <li>logo.ico</li>
                        <li>user-img.png</li>
                    </ul>
                </li>
                <li class="folder">MENU
                    <ul>
                        <li>displayInstitutions.php</li>
                        <li>addInstitution.php <p class="warn">[Brak pliku]</p></li>
                        <li>editInstitution.php <p class="warn">[Brak pliku]</p></li>
                        <li>deleteInstitution.php <p class="warn">[Brak pliku]</p></li>
                        <br/>
                        <li>displayMembers.php</li>
                        <li>addMember.php</li>
                        <li>editMember.php <p class="warn">[Brak pliku]</p></li>
                        <li>deleteMember.php <p class="warn">[Brak pliku]</p></li>
                        <br/>
                        <li>displayPayments.php</li>
                        <li>addPayment.php <p class="warn">[Brak pliku]</p></li>
                        <li>editPayments.php <p class="warn">[Brak pliku]</p></li>
                        <br/>
                        <li>displayEvents.php</li>
                        <li>addEvent.php <p class="warn">[Brak pliku]</p></li>
                        <li>editEvent.php <p class="warn">[Brak pliku]</p></li>
                        <br/>
                        <li>createBackup.php</li>
                        <li>importBackup.php <p class="warn">[Brak pliku]</p></li>
                    </ul>
                </li>

                <li class="folder">PHP
                    <ul>
                        <li>connect.php</li>
                        <li>header.js</li>
                        <li>login.php</li>
                        <li>logout.php</li>
                        <li>menu.js</li>
                    </ul>
                </li>
                <li>index.php</li>
                <li>panel.php</li>
                <li>reset.css</li>
            </ul>
        </div>
    </div>
        
</div>


    <h3 v-else class="warn">Dokumentacja jest niedostępna dla uzytkowników bez uprawnień administratora.</h3>
</template>

<style scoped>
body {
    margin: 0;
    font-family: Arial, sans-serif;
}

.container {
    display: flex;
}

.layout {
    background-color: lightblue;
    float: left;
    width: 65%;
    padding: 20px;
}

a {
    color: #000;
}

a:hover {
    color: #ff0000;
}

.path {
    background-color: lightcoral;
    margin: 0;
    padding: 20px;
    float: left;
    width: 35%;
}

.path .folder {
    list-style-image: url(../dokumentacja/folder.png);
}

.path ul li {
    list-style: none;
    margin-left: 20px;
    padding: 5px;
}

.path ul li:before {
    content: "> ";
}

.warn {
    display: inline-flex;
}
</style>
<script setup>
import { RouterLink } from 'vue-router';
import ListIcon from '../icons/ListIcon.vue';
import InfoIcon from '../icons/InfoIcon.vue';
import AddIcon from '../icons/AddIcon.vue';
import EditIcon from '../icons/EditIcon.vue';
</script>

<template>
		<ul>
				<li><RouterLink to="/home">Strona główna</RouterLink></li> 
				<hr>
				<li><RouterLink to="/displayInstitutions">Ośrodki <ListIcon class="icon"/></RouterLink>
					<ul class="inner-ul">
						<li><RouterLink to="/addInstitution">Dodaj ośrodek <AddIcon class="icon"/></RouterLink></li>
						<li><RouterLink to="/editInstitution">Edytuj ośrodek <EditIcon class="icon"/><span class="warn">!!!</span></RouterLink></li>
						<li><RouterLink to="/deleteInstitution">Usuń ośrodek</RouterLink></li>
					</ul>
				</li>
				<hr>
				<li><RouterLink to="/displayMembers">Członkowie <ListIcon class="icon"/></RouterLink>
					<ul class="inner-ul">
						<li><RouterLink to="/addMember">Dodaj członka <AddIcon class="icon"/></RouterLink></li>
						<li><RouterLink to="/editMember">Edytuj członka <EditIcon class="icon"/><span class="warn">!!!</span></RouterLink></li>
						<li><RouterLink to="/deleteMember">Usuń członka</RouterLink></li>
					</ul>
                </li>
				<hr>
				<li><RouterLink to="/displayPayments">Dziennik płatności <ListIcon class="icon"/></RouterLink>
					<ul class="inner-ul">
						<li><RouterLink to="/addPayment">Dodaj płatność <AddIcon class="icon"/></RouterLink></li>
						<li><RouterLink to="/editPayment">Edytuj płatność <EditIcon class="icon"/><span class="warn">!!!</span></RouterLink></li>
					</ul>
				</li>
				<hr>
				<li><RouterLink to="/displayEvents">Kalendarz wydarzeń <ListIcon class="icon"/></RouterLink>
					<ul class="inner-ul">
						<li><RouterLink to="/addEvent">Dodaj wydarzenie <AddIcon class="icon"/></RouterLink></li>
						<li><RouterLink to="/editEvent">Edytuj wydarzenie <EditIcon class="icon"/><!--<span class="warn">!!!</span>--></RouterLink></li>
					 </ul> 
				</li>
				<hr>
				<li>Baza danych
					<ul class="inner-ul">
						<li><RouterLink to="/createBackup">Zapisz stan bazy <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(51,51,51,1)"><path d="M5 12.5C5 12.8134 5.46101 13.3584 6.53047 13.8931C7.91405 14.5849 9.87677 15 12 15C14.1232 15 16.0859 14.5849 17.4695 13.8931C18.539 13.3584 19 12.8134 19 12.5V10.3287C17.35 11.3482 14.8273 12 12 12C9.17273 12 6.64996 11.3482 5 10.3287V12.5ZM19 15.3287C17.35 16.3482 14.8273 17 12 17C9.17273 17 6.64996 16.3482 5 15.3287V17.5C5 17.8134 5.46101 18.3584 6.53047 18.8931C7.91405 19.5849 9.87677 20 12 20C14.1232 20 16.0859 19.5849 17.4695 18.8931C18.539 18.3584 19 17.8134 19 17.5V15.3287ZM3 17.5V7.5C3 5.01472 7.02944 3 12 3C16.9706 3 21 5.01472 21 7.5V17.5C21 19.9853 16.9706 22 12 22C7.02944 22 3 19.9853 3 17.5ZM12 10C14.1232 10 16.0859 9.58492 17.4695 8.89313C18.539 8.3584 19 7.81342 19 7.5C19 7.18658 18.539 6.6416 17.4695 6.10687C16.0859 5.41508 14.1232 5 12 5C9.87677 5 7.91405 5.41508 6.53047 6.10687C5.46101 6.6416 5 7.18658 5 7.5C5 7.81342 5.46101 8.3584 6.53047 8.89313C7.91405 9.58492 9.87677 10 12 10Z"></path></svg></RouterLink></li>
                		<li><RouterLink to="/importBackup">Przywróć stan bazy <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(51,51,51,1)"><path d="M18 19H19V6.82843L17.1716 5H16V9H7V5H5V19H6V12H18V19ZM4 3H18L20.7071 5.70711C20.8946 5.89464 21 6.149 21 6.41421V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM8 14V19H16V14H8Z"></path></svg></RouterLink></li>
						<li><RouterLink to="/docs">Dokumentacja</RouterLink></li>
                        <li><RouterLink to="/info">Informacje o aplikacji</RouterLink></li>
                        
					</ul>
				</li>
		</ul>
</template>

<style>
    ul, ol {
        list-style: none;
        padding: 0;
        margin: 0;
    }
            
    .aside {
        background-color: #f8f8f8;
        color: #333333;
        width: 230px;
        padding: 15px;
        box-sizing: border-box;
        border-right: 1px solid #cccccc;
        position: fixed;
        height: 100%;
        float: left;    
        
        @media(max-width: 640px){
            display: none !important;
        }
        
            
        ul {
            padding: 0;
        }
                
        li {
            padding: 5px;
        }
                
        a {
            color: #333333;
            text-decoration: none;
            height: 50px;
            .icon{
                height: 18px;
                display: inline-flexx;
                align-items: center;
            }
        }
                
         a:hover {
            text-decoration: underline;
        }
        
        a.router-link-active {
            /* border-bottom: 2px solid #275db9; */
            text-decoration: underline;
            text-decoration-color: #275db9;
            text-decoration-thickness: 2px;
        }
                
        .inner-ul {
            padding-left: 20px;
        }
                
        li:hover .inner-ul {
            display: block;
        }
                
        hr {
            border: none;
            border-top: 1px solid #cccccc;
            margin: 5px 0;
        }
                
        .inner-ul li {
            padding: 8px 0;
        }
    }
        </style>
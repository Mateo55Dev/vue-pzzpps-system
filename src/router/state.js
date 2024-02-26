// state.js
import { ref } from 'vue';

const state = {
  isAuthenticated: ref(false),
  username: ref(''),
  password: ref(''),
};

export default state;
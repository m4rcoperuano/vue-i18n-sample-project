<script src="main.js"></script>

<template>
  <div id="app">
    <!-- NAVIGATION -->
    <Menu :selectedMenuItem="selectedMenuItem" @menu-item-changed="menuItemChanged"/>

    <!-- CONTENT -->
    <div id='content'>
      <div v-if="selectedMenuItem === 'home'">
        <Home />
      </div>
      <div v-else-if="selectedMenuItem === 'login'">
        <Login />
      </div>
      <div v-else-if="selectedMenuItem === 'contact'">
        <Contact />
      </div>
    </div>

  </div>
</template>

<script>
    import Menu from './components/navigation/Menu.vue'
    import Home from './components/content/Home.vue'
    import Login from './components/content/Login.vue'
    import Contact from './components/content/Contact.vue'

    export default {
        name: 'app',
        components: {
            Menu,
            Home,
            Login,
            Contact
        },
        data() {
          return {
            selectedMenuItem: 'home'
          };
        },
        methods: {
          menuItemChanged(menuItem) {
            this.selectedMenuItem = menuItem;
          }
        }    
    }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  #content {
    border:3px solid #333;
    border-radius:15px;
    max-width:600px;
    margin:auto;
    min-height:300px;
    padding:10px;
    padding-bottom:20px;
  }

  label {
    display:inline-block;
    min-width:150px;
    text-align:left;
  }

  button {
    border:0;
    padding:10px 20px;
    background-color:#41b883;
    color:white;
    font-size:18px;
    cursor:pointer;
  }

  button:hover {
    background-color:#37976c;
  }

  input[type='text'], input[type='password'] {
    margin-bottom:5px;
    padding:10px 10px;
    border:1px solid #CCC;
    border-radius:5px;
    font-size:15px;
    background-color:white;
    width:49%;
  }

  .error {
    color:red;
  }
</style>

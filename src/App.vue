<template>
  <div>
    <app-header :title="title" v-on:changeTitle="updateTitle($event)"></app-header>

    <keep-alive>
      <component :is="currentForm"></component>
    </keep-alive>

    <button v-on:click="currentForm = 'form-one'">Show Form One</button>
    <button v-on:click="currentForm = 'form-two'">Show Form Two</button>

    <!-- <form-one></form-one>
    <form-two></form-two> -->

    <form-helper>
      <div slot="form-header">
        <h3>This is the title of the form</h3>
        <p>Information about the form</p>
      </div>

      <div slot="form-fields">
          <input type="text" placeholder="name" required />
          <input type="password" placeholder="password" required />
      </div>

      <div slot="form-controls">
        <button v-on:click="handleSubmit">Submit</button>
      </div>
    </form-helper>

    <app-ninjas :ninjas="ninjas"></app-ninjas>
    <app-footer :title="title"></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Ninjas from './components/Ninjas.vue';
import formHelper from './components/formHelper.vue';
import formOne from './components/formOne.vue';
import formTwo from './components/formTwo.vue';

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-ninjas': Ninjas,
    'form-helper': formHelper,
    'form-one': formOne,
    'form-two': formTwo
  },
  data () {
    return {
      ninjas: [
        {name: 'Ryu', speciality: 'Vue Components', show: false},
        {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
        {name: 'Hitoshi', speciality: 'Click Events', show: false},
        {name: 'Tango', speciality: 'Conditionals', show: false},
        {name: 'Kami', speciality: 'Webpack', show: false},
        {name: 'Yoshi', speciality: 'Data Diggin', show: false}
      ],
      title: 'Vue Ninjas',
      currentForm: 'form-one'
    }
  },
  methods: {
    updateTitle: function(updatedTitle) {
      this.title = updatedTitle;
    },
    handleSubmit: function(){
        alert('submit');
    }
  }
}
</script>

<style>

</style>

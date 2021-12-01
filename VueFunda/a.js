import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js';
   
const a = Vue.component('don' , {
    props:['values'],
    template : '<h1>{{values}}</h1>'
})
console.log({a});
console.log('i am from a component');
export {a};

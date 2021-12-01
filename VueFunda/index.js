// console.log("idex");

    import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js';
   
    // const aa = new Vue()
    // console.log(aa);
    // import a from 'C:\/Users\/ankur.chovatiya\/Desktop\/Vue\/VueFunda\/a.js'
    import {a} from './a.js'
    Vue.component('todo-item' ,{
        data : {
            myData : "myData ha ha "
        },
        props:['ha'],
        components: {
            a
        },
        template : '<div><li>this is component{{ha}} </li><li>hello</li><don v-bind:values="myData"></don></div>'
    })
console.log(' i am from app component');
   

    
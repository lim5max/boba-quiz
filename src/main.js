import App from './App.vue'
import router from './router'
// import store from './store/index'
import PrimeVue from 'primevue/config';

import './index.css'
import 'primevue/resources/themes/tailwind-light/theme.css'  //theme
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css';   
import Divider from 'primevue/divider';
import 'mosha-vue-toastify/dist/style.css';
import { createApp } from 'vue'


import { createPinia } from 'pinia'
const pinia = createPinia()

const app = createApp(App)

// "build": "vite build --base=/boba-quiz/",
app.component('Divider', Divider);
app.use(router)
app.use(pinia)
// app.use(store)
app.use(PrimeVue);

// import DomHandler from '../utils/DomHandler';
// app.directive('ripple', {
//     mounted(element, binding) {
//         element.addEventListener('click', (e)=> {
//             let offset = DomHandler.getOffset(e.currentTarget);
//             // let position = element.getBoundingClientRect()
//             let width = e.target.offsetWidth;
//             let height = e.target.offsetHeight;
//             // width >= height ? (height = width) : (width = height);

//             let X = e.pageX - offset.left + document.body.scrollTop - DomHandler.getWidth(e.currentTarget) / 2;
//             let Y = e.pageY - offset.top + document.body.scrollLeft - DomHandler.getHeight(e.currentTarget) / 2;
//             // console.log(e.target.getBoundingClientRect())
            

//             console.log(e)
//             console.log(X, Y)
//             console.log(element.getBoundingClientRect())
//             // console.log(e.currentTarget.offsetTop)
//             const ripple = document.createElement('span');
//             ripple.style.left = X + 'px';
//             ripple.style.top  = Y + 'px';
//             ripple.classList.add('ripple');
//             ripple.setAttribute("style","top:"+Y+"px; left:"+X+"px;");
//             e.target.appendChild(ripple);
//             setTimeout(function(){
//                 ripple.parentNode.removeChild(ripple);
//             }, 500);
//         })
//     }
// })


app.mount('#app')

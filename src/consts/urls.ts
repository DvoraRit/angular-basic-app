import { routes } from './../app/pages/pages-routing.module';
export const urls = {
    baseUrl:"https://localhost:44380/api",
    firebase:"https://ng-first-app-8e94b-default-rtdb.firebaseio.com/",
    routes:{
        home:"",
        login:"/login",
        cards:"/cards",
    },
    cards_json:"/cards.json",
    auth:{
        login:"/auth/login",
    },
}
import { routes } from './../app/pages/pages-routing.module';
import { environment } from './../environments/environment';
export const urls = {
    baseUrl:"https://localhost:44380/api",
    firebase:environment.firebaseConfig.databaseURL,
    routes:{
        home:"",
        login:"/login",
        cards:"/cards",
    },
    cards_json:"/cards.json",
    add_card:"/message_list.json",
    auth:{
        login:"/auth/login",
    },
}
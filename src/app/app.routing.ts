import { RouterModule, Routes} from '@angular/router'; 
import { RestaurantsListComponent } from "./restaurants-list.component";
import { RestaurantComponent } from "./restaurant.component";
import { HomeComponent } from "./home.component";
import { FiltersComponent } from "./filters.component";

const routes:Routes = [
    
    { path:'', component: HomeComponent },
    { path:'list', component: RestaurantsListComponent }, 
    { path:'filtry', component: FiltersComponent },
    { path:'restaurant', component: RestaurantComponent }
    
    
     

    ]
    export const Routing = RouterModule.forRoot(routes)
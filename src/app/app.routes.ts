import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user/user-profile.component'

const ROUTES: Routes = [
    { path: 'sign-up', component: SignUpComponent}, 
    { path: 'user', component: UserProfileComponent},
    { path: '', component: UserProfileComponent}, // par défaut
];

export {ROUTES};
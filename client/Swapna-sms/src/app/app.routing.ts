import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './Swapna/landing/landing.component';
import { LoginComponent } from './Swapna/login/login.component';
import { ProfileComponent } from './Swapna/profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import {SignUpComponent} from './Swapna/auth/sign-up/sign-up.component';
import {SignInComponent} from './Swapna/auth/sign-in/sign-in.component';

const routes: Routes =[
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index',                component: ComponentsComponent },
    { path: 'nucleoicons',          component: NucleoiconsComponent },
    { path: 'Swapna/landing',     component: LandingComponent },
    { path: 'Swapna/login',       component: LoginComponent },
    { path: 'Swapna/profile',     component: ProfileComponent },
    { path: 'Swapna/signUp',     component: SignUpComponent },
    { path: 'Swapna/signIn',     component: SignInComponent }


];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }

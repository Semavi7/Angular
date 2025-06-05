import { Route, Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Layout } from './layout/layout';
import { Login } from './login/login';

export const homeRoute: Route = {
    path: "",
    component: Home
}

export const routes: Routes = [
    {
        path: "login",
        component: Login
    },
    {
        path: "",
        component: Layout,
        children: [
            homeRoute
            ,
            {
                path: "home",
                component: Home
            },
            {
                path: "about",
                component: About
            },
            {
                path: "contact",
                component: Contact
            },
            {
                path: "contact/:params",
                component: Contact
            }
        ]
    }
];

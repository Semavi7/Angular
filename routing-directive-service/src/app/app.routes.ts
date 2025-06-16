import { Route, Routes } from '@angular/router';
import  Home  from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Layout } from './layout/layout';
import { Login } from './login/login';
import { authGuard } from './auth-guard';
import { checkGuard } from './check-guard';

export const homeRoute: Route = {
    path: "",
    component: Home
}

export const routes: Routes = [
    {
        path: "login",
        loadComponent: () => import("./login/login").then(c => c.Login)
    },
    {
        path: "",
        canActivate: [authGuard],
        loadComponent: () => import("./layout/layout").then(c => c.Layout),
        children: [
            homeRoute
            ,
            {
                path: "home",
                canDeactivate: [checkGuard],
                loadComponent: () => import("./home/home")
            },
            {
                path: "about",
                loadComponent: () => import("./about/about").then(c => c.About)
            },
            {
                path: "contact",
                loadComponent: () => import("./contact/contact").then(c => c.Contact)
            },
            {
                path: "contact/:params",
                loadComponent: () => import("./contact/contact").then(c => c.Contact)
            }
        ]
    },
    {
        path: "**",
        loadComponent: () => import("./notfount/notfount").then(c => c.Notfount)
    }
];

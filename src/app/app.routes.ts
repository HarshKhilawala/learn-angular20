import { Routes } from '@angular/router';
import { Admin } from '../components/admin/admin';
import { User } from '../components/user/user';
import { ControlFlow } from '../components/control-flow/control-flow';
import { Databinding } from '../components/databinding/databinding';
import { Directives } from '../components/directives/directives';
import { Pipes } from '../components/pipes/pipes';
import { Getapi } from '../components/getapi/getapi';
import { Postapi } from '../components/postapi/postapi';
import { Putdeleteapi } from '../components/putdeleteapi/putdeleteapi';
import { Forms } from '../components/forms/forms';

export const routes: Routes = [
    {
        path: "admin",
        component: Admin
    },
    {
        path: "user",
        component: User
    },
    {
        path: "control-flow",
        component: ControlFlow
    },
    {
        path: "databinding",
        component: Databinding
    },
    {
        path: "directives",
        component: Directives
    },
    {
        path: "pipes",
        component: Pipes
    },
    {
        path: "getapi",
        component: Getapi
    },
    {
        path: "postapi",
        component: Postapi
    },
    {
        path: "putdeleteapi",
        component: Putdeleteapi
    },
    {
        path: "forms",
        component: Forms
    }

];

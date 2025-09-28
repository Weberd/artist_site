import { Routes } from '@angular/router';
import { Main as Main } from './main/main';
import { About } from './about/about';
import { Contacts } from './contacts/contacts';
import { Gallery } from './gallery/gallery';

export const routes: Routes = [
    {
        path: 'about',
        component: About
    },
    {
        path: 'contacts',
        component: Contacts
    },
    {
        path: 'gallery/:id',
        component: Gallery,
        data: { showFooter: false }
    },
    {
       path: '**',
       component: Main
    },
];

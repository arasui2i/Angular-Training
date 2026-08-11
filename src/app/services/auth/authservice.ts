import { Injectable, Service } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class Authservice {
    isAuthenticated() {
        if (localStorage.getItem('emptoken'))
            return true;
        else
            return false;
    }
}

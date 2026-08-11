import { Injectable, Service } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Loginservice {
    login(email: string, password: string): boolean {
        const userdetails = [
            {
                email: "admin@test.com",
                password: "Admin@123"
            },
            {
                email: "manager@test.com",
                password: "Manager@123"
            }
        ];
        const user = userdetails.find(
            user => user.email === email && user.password === password
        );
        if (user) {
            return true;
        }
        else {
            return false;
        }
    }
}

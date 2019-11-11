
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';

@Injectable({
    providedIn: 'root'
}
)
export class HomeGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }
    canActivate() {
        if(!this.authService.isLoggedIn()) {
            this.router.navigate(['/receipts/login']);
        }
        return this.authService.isLoggedIn();
    }
}
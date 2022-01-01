import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CanNavigateToAdminGuard implements CanActivate {

  accessGranted = false;

  canActivate(): boolean {
    if(!this.accessGranted) {
      this.accessGranted =  window.confirm('Mit grosser Macht kommt grosse Verantwortung. Möchten Sie den Admin-Bereich wirklich betreten?');
    }
    return this.accessGranted;
  }
}
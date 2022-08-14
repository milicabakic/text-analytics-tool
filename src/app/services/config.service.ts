import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private configComponentVisits: number;

  private username: string;
  private token: string;

  constructor() {
    this.configComponentVisits = 0;
    this.username = '';
    this.token = '';
  }

  incrementConfigComponentVisits(): void {
    this.configComponentVisits++;
  }

  setUsername(username: string): void {
    this.username = username;
  }

  getUsername(): string {
    return this.username;
  }

  setToken(token: string): void {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

}

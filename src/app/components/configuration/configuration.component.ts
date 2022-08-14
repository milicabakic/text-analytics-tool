import { Component, OnInit } from '@angular/core';
import {ConfigService} from "../../services/config.service";

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  username: string;
  token: string;

  constructor(private configService: ConfigService) {
    this.username = this.configService.getUsername();
    this.token = this.configService.getToken();
  }

  ngOnInit(): void {
    this.configService.incrementConfigComponentVisits();
  }

  setConfiguration() {
    if(this.token == "" || this.username == ""){
      alert('All fields are required!');
      return;
    }

    this.configService.setToken(this.token);
    this.configService.setUsername(this.username);

    localStorage.setItem("token", this.token);

  }

  clearConfiguration() {
    localStorage.removeItem("token");
  }

}

import { Component, OnInit } from '@angular/core';
import {DandelionService} from "../../services/dandelion.service";
import {LanguageDetectionResponse} from "../../model";

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.css']
})
export class LanguageDetectionComponent implements OnInit {

  text: String='';
  response: LanguageDetectionResponse = {
    detectedLangs: [],
    time: 0,
    timestamp: ''
  };

  constructor(private dandelionService: DandelionService) { }

  ngOnInit(): void {
  }

  startLanguageDetection(){
    if(this.text != '') {
      if (localStorage.getItem('token')) {
        if ((<HTMLInputElement>document.getElementById("checkboxClean")).checked) {
          this.dandelionService.detectLanguage(this.text, true, <string>localStorage.getItem('token')).subscribe(res => {
            this.response = res;
          });
        } else {
          this.dandelionService.detectLanguage(this.text, false, <string>localStorage.getItem('token')).subscribe(res => {
            this.response = res;
          });
        }
      } else {
        alert('Token required!')
      }
    }
    else{
      alert('Text field is required!')
    }
  }


}

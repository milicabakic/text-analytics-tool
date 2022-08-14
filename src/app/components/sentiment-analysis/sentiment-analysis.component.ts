import { Component, OnInit } from '@angular/core';
import {DandelionService} from "../../services/dandelion.service";
import {SentimentAnalysisResponse} from "../../model";

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {

  text: string;
  selectedLanguage: string;
  response: SentimentAnalysisResponse;
  generatedColor: number[];
  colorR: number;
  colorG: number;
  colorB: number;

  constructor(private dandelionService: DandelionService) {
    this.text = '';
    this.selectedLanguage = 'auto';
    this.response = {
      time: 0,
      timestamp: '',
      lang: '',
      sentiment: {
        type: '',
        score: 0
      }
    };
    this.generatedColor = [];
    this.colorR = 0;
    this.colorG = 0;
    this.colorB = 0;
  }

  ngOnInit(): void {
  }

  doSentimentAnalysis() {
    if(this.text != ''){
      if(localStorage.getItem('token')){
        this.dandelionService.sentimentAnalysis(this.text,this.selectedLanguage,<string>localStorage.getItem('token')).subscribe(resp=> {
          this.response = resp;
          console.log(this.response);
          this.calculateRGB(this.response.sentiment.score);
          //"rgb(" + r + "," + g + "," + b + ")"
          (<HTMLInputElement>document.getElementById("sentimentDiv")).style.color = "rgb("+this.colorR+","+this.colorG+","+this.colorB+")";
        });
      }
      else
        alert('Token required!')
    }
    else
      alert('Text field is required!')
  }

  calculateRGB(parameter: number): void {
  //  [c = a + (b - a)*t\]
  //  new_value = ( (old_value - old_min) / (old_max - old_min) ) * (new_max - new_min) + new_min
    this.generatedColor = [];
    let t = ((parameter + 1) / (1 + 1)) * (1 - 0) + 0;
    this.generatedColor.push(Math.round(255 + (0 - 255) * t));
    this.generatedColor.push(Math.round(0 + (255 - 0) * t));
    this.generatedColor.push(0);
    this.colorR = Math.round(255 + (0 - 255) * t);
    this.colorG = Math.round(0 + (255 - 0) * t);
    this.colorB = 0;
    console.log(this.generatedColor)
  }

}

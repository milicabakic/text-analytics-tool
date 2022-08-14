import { Component, OnInit } from '@angular/core';
import {templateJitUrl} from "@angular/compiler";
import {SimilarityResponse} from "../../model";
import {DandelionService} from "../../services/dandelion.service";

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent implements OnInit {

  text1: String = "";
  text2: String = "";
  response: SimilarityResponse = {
    langConfidence: 0,
    similarity: 0,
    time: 0,
    lang: '',
    timestamp: ''
  };

  constructor(private textSimilarityService: DandelionService) { }

  ngOnInit(): void {
  }

  submitText1Text2() {
    if(this.text1 != '' || this.text2 != '') {
      if (localStorage.getItem('token')) {
        this.textSimilarityService.findTextSimilarity(this.text1, this.text2, <string>localStorage.getItem('token')).subscribe(resp => {
            this.response = resp;
          }
        );
        console.log(this.response)
      } else {
        alert("Token required")
      }
    }
    else{
      alert("Both text fields are required!")
    }
  }
}

import { Component, OnInit } from '@angular/core';
import {DandelionService} from "../../services/dandelion.service";
import {Annotation, EntityExtractionResponse} from "../../model";

@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css']
})
export class EntityExtractionComponent implements OnInit {

  sliderValue: number = 0;
  text: string;
  image: boolean;
  category: boolean;
  abstractt: boolean;
  response: EntityExtractionResponse;

  constructor(private dandelionService: DandelionService) {
    this.text = '';
    this.image = false;
    this.category = false;
    this.abstractt = false;
    this.response = {
      time: 0,
      timestamp: '',
      lang: '',
      annotations: []
    }
  }

  ngOnInit(): void {
  }

  doEntityExtraction(){
    if(this.text != '') {

      if ((<HTMLInputElement>document.getElementById("image")).checked)
        this.image = true;
      else
        this.image = false;
      if ((<HTMLInputElement>document.getElementById("category")).checked)
        this.category = true;
      else
        this.category = false;
      if ((<HTMLInputElement>document.getElementById("abstract")).checked)
        this.abstractt = true;
      else
        this.abstractt = false;

      this.sliderValue = parseInt((<HTMLInputElement>document.getElementById("mySlider")).value);

      if (localStorage.getItem('token')) {
        this.dandelionService.extractEntities(this.text, this.sliderValue / 10, this.category,
          this.abstractt, this.image, <string>localStorage.getItem('token')).subscribe(response => {
            this.response = response;
          }
        );
      } else {
        alert('Token required!');
      }
    }
    else
      alert('Enter your text!')
  }

}

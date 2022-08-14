import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ConfigurationComponent } from './components/configuration/configuration.component';
import {AppComponent} from "./components/app/app.component";
import { TextSimilarityComponent } from './components/text-similarity/text-similarity.component';
import { EntityExtractionComponent } from './components/entity-extraction/entity-extraction.component';
import { LanguageDetectionComponent } from './components/language-detection/language-detection.component';
import { SentimentAnalysisComponent } from './components/sentiment-analysis/sentiment-analysis.component';
import { HistoryComponent } from './components/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigurationComponent,
    TextSimilarityComponent,
    EntityExtractionComponent,
    LanguageDetectionComponent,
    SentimentAnalysisComponent,
    HistoryComponent,
  ],

    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

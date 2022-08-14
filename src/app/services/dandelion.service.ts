import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {
  EntityExtractionResponse,
  LanguageDetectionResponse,
  SentimentAnalysisResponse,
  SimilarityResponse
} from "../model";
import {Observable} from "rxjs";
import {HistoryService} from "./history.service";

@Injectable({
  providedIn: 'root'
})
export class DandelionService {

  private readonly apiUrl = environment.dandelionApi;

  constructor(private httpClient:HttpClient, private historyService:HistoryService) { }

  findTextSimilarity(text1:String, text2:String, token:String): Observable<SimilarityResponse>{
    if(text1.startsWith("http") && text2.startsWith("http")){
      this.historyService.addHistoryItem(new Date(),"GET",this.apiUrl.toString()+"/datatxt/sim/v1/?url1="+text1+
      "&url2="+ text2+ "&token=" + token);
      return this.httpClient.get<SimilarityResponse>(`${this.apiUrl}/datatxt/sim/v1/?url1=${text1}&url2=${text2}&token=${token}`);
    }
    this.historyService.addHistoryItem(new Date(),"GET",this.apiUrl.toString()+"/datatxt/sim/v1/?text1="+text1+
      "&text2="+ text2+ "&token=" + token);
    return this.httpClient.get<SimilarityResponse>(`${this.apiUrl}/datatxt/sim/v1/?text1=${text1}&text2=${text2}&token=${token}`);
  }

  detectLanguage(text:String, clean:boolean, token:String): Observable<LanguageDetectionResponse> {
    if(clean) {
      this.historyService.addHistoryItem(new Date(),"GET",this.apiUrl.toString()+"/datatxt/li/v1/?text="+text+
        "&token=" + token + "&clean");
      return this.httpClient.get<LanguageDetectionResponse>(`${this.apiUrl}/datatxt/li/v1/?text=${text}&token=${token}&clean`);
    }
    this.historyService.addHistoryItem(new Date(),"GET",this.apiUrl.toString()+"/datatxt/li/v1/?text="+text+
      "&token=" + token);
    return this.httpClient.get<LanguageDetectionResponse>(`${this.apiUrl}/datatxt/li/v1/?text=${text}&token=${token}`);
  }

  sentimentAnalysis(text:String, lang:String, token:String): Observable<SentimentAnalysisResponse>{
    this.historyService.addHistoryItem(new Date(),"GET",this.apiUrl.toString()+"/datatxt/sent/v1/?text="+text+
      "&lang="+ lang +"&token=" + token);
    return this.httpClient.get<SentimentAnalysisResponse>(`${this.apiUrl}/datatxt/sent/v1/?text=${text}&lang=${lang}&token=${token}`);
  }

  extractEntities(text:String, min_confidence: number, category:boolean, abstractt:boolean, image:boolean, token:string): Observable<EntityExtractionResponse>{
    this.historyService.addHistoryItem(new Date(),"GET",this.apiUrl.toString()+"/datatxt/nex/v1/?text="+text+
      "&min_confidence="+min_confidence+"&include=abstract,image,categories"+"&token=" + token);
    return this.httpClient.get<EntityExtractionResponse>(`${this.apiUrl}/datatxt/nex/v1/?text=${text}&min_confidence=${min_confidence}&include=abstract,image,categories&token=${token}`);
  }


}

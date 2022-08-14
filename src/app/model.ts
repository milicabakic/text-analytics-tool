export interface SimilarityResponse {
  time: number,
  similarity: number,
  lang: string,
  langConfidence: number,
  timestamp: string
}

export interface LanguageDetectionResponse {
  time: number,
  timestamp: string,
  detectedLangs: Language[]
}

interface Language {
  lang: string,
  confidence: number
}

export interface SentimentAnalysisResponse {
  time: number,
  timestamp: string,
  lang: string,
  sentiment: Sentiment
}

interface Sentiment {
  type: string,
  score: number
}

export interface EntityExtractionResponse {
  time: number,
  timestamp: string,
  lang: string,
  annotations: Annotation[]
}

//Entity
export interface Annotation {
  start: number,
  end: number,
  spot: string,
  confidence: number,
  title: string,
  uri: string,
  abstract: string,
  label: string,
  categories: string[],
  image: Image
}

interface Image {
  full: string,
  thumbnail: string
}

export interface HistoryItem {
  time: Date,
  method: string,
  endpoint: string
}

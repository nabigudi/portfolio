export interface Portfolio {
  cover: string;
  title: string;
  date: string;
  description: string;
  longDescription: string;
  images?: PortfolioImage[];
  type?: string;
  url: string;
  company?: string;
}

export interface PortfolioImage {
  src: string;
  description: string;
  
}
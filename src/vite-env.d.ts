/// <reference types="vite/client" />

type Etudiant = {
  id: number;
  email: string; 
  name: string;
  fromWhen?: string;
  myGoal?: string;
  myMethod?: string;
};

type Photo = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};

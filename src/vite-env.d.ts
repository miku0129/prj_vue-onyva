/// <reference types="vite/client" />

type Student = {
  id: number;
  email: string; 
  name: string;
  fromWhen: string;
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

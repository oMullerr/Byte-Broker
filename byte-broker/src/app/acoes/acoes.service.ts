import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AcoesService {

  constructor(
    private HttpClient: HttpClient) { }

  getAcoes() {
    return this.HttpClient.get<any>('http://localhost:3000/acoes')
  }


}

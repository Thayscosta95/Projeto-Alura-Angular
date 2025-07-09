
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {
  private readonly API = 'http://localhost:3000/pensamentos';


  constructor(private readonly http: HttpClient) { }

    listar(): Observable<Pensamento[]> {
      return this.http.get<Pensamento[]>(this.API)
}

    criar(pensamento: Pensamento): Observable<Pensamento> {
      return this.http.post<Pensamento>(this.API, pensamento)
    } 

    editar(id: string): Observable<Pensamento> {
      const url = `${this.API}/${id}`;
      return this.http.get<Pensamento>(url);
     }
     
    excluir(id: string): Observable<void> {
      const url = `${this.API}/${id}`;
      return this.http.delete<void>(url);
    }

    buscarPorId(id: string): Observable<Pensamento> {
      const url = `${this.API}/${id}`;
      return this.http.get<Pensamento>(url);
    }


}
import { Ims } from 'src/app/shared/interface/ims.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(
    private http:HttpClient) { }


  getall():Observable<Ims[]>{
    return this.http.get<Ims[]>(`${window.location.href}im-day`)
  }

}





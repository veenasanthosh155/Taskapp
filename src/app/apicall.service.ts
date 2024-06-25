import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(public http:HttpClient) { }
  gettasks()
  {
    return this.http.get<any>(`http://127.0.0.1:8000/notcompletedtask/`)
  }
  posttasks(data:any)
  {
    return this.http.post<any>(`http://127.0.0.1:8000/alltask/`,data) 
  }
  gettaskbyid(id:any)
  {
    return this.http.get<any>(`http://127.0.0.1:8000/notcompletedtask/${id}`)
  }
  updatetaskbyid(id:any,data1:any)
  {
    return this.http.put<any>(`http://127.0.0.1:8000/notcompletedtask/${id}/`,data1)
  }
  deletetaskbyid(id:any)
  {
    return this.http.delete(`http://127.0.1:8000/alltask/${id}/`)
  }
}

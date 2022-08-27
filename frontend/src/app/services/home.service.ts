import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { About } from '../models/about';
import { AddPostRequest } from '../models/add-post.model';
import { Home } from '../models/home';
import { Link } from '../models/link';
import { Post } from '../models/post.model';
import { Repo } from '../models/repo';
import { UpdatePostRequest } from '../models/update-post.model';
import { Url } from '../models/url';

@Injectable({
  providedIn: 'root'
})
export class HomeService {


//apiUrl:"http://localhost:5128/api"
  constructor(private http:HttpClient) { }

//home
  HomeGet(): Observable<Home[]>{
    return this.http.get<Home[]>(`http://localhost:5128/api/Contact/GetAll`);
  }





//about
  AboutGet(): Observable<About[]>{
    return this.http.get<About[]>(`http://localhost:5128/api/About/GetAll`);
  }




  //repo
  RepoGet(): Observable<Repo[]>{
    return this.http.get<Repo[]>(`http://localhost:5128/api/Repo/GetAll`);
  }




 //link
   LinkGet(): Observable<Link[]>{
     return this.http.get<Link[]>(`http://localhost:5128/api/Link/GetAll`);
   }





//url
   UrlGet(): Observable<Url[]>{
  return this.http.get<Url[]>(`http://localhost:5128/api/Home/GetAll`);
}






}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddPostRequest } from '../models/add-post.model';
import { Post } from '../models/post.model';
import { UpdatePostRequest } from '../models/update-post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }


  getAllPosts(): Observable<Post[]>{
    return this.http.get<Post[]>('http://localhost:5128/api/Posts');
  }


  getAllPostById(id:string): Observable<Post>{
    return this.http.get<Post>('http://localhost:5128/api/Posts/' + id); //id olmayabilir
  }


  updatedPost(id:string | undefined, updatePostRequest:UpdatePostRequest): Observable<Post>{
    return this.http.put<Post>('http://localhost:5128/api/Posts/' + id, updatePostRequest); //id olmayabilir
  }



  addPost(addPostRequest:AddPostRequest): Observable<Post>{
    return this.http.post<Post>('http://localhost:5128/api/Posts', addPostRequest);
  }


  deletePost(id:string | undefined): Observable<Post>{
    return this.http.delete<Post>('http://localhost:5128/api/Posts/' + id );
  }
  }

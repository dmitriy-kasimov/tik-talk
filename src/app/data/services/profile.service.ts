import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IProfile} from '../inerfaces/profile.interface';
import {IPagination} from '../inerfaces/pagination.service';
import {map, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  http = inject(HttpClient)
  baseApiUrl = 'https://icherniakov.ru/yt-course/'

  me =  signal<IProfile | null>(null)

  getTestAccounts(){
    return this.http.get<IProfile[]>(`${this.baseApiUrl}account/test_accounts`);
  }

  getMe(){
    return this.http.get<IProfile>(`${this.baseApiUrl}account/me`)
      .pipe(
        tap(res =>  this.me.set(res))
      )
  }

  getAccount(id: string){
    return this.http.get<IProfile>(`${this.baseApiUrl}account/account/${id}`);
  }

  getSubscribersShortList(slicedCount = 3){
    return this.http.get<IPagination<IProfile>>(`${this.baseApiUrl}account/subscribers/`).pipe(
      map(res => res.items.slice(0,slicedCount)),
    )
  }
}

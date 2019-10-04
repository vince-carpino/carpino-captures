import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContactFormEmailService {
  url = 'http://localhost:3000/send';

  constructor(private http: HttpClient, private db: AngularFirestore) {}

  sendMessage(messageContent: any) {
    return this.http.post(this.url, JSON.stringify(messageContent), {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text'
    });
  }
}

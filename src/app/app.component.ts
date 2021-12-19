import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newsApp';
  category: any; 
  listeArticles: [] = [];

  constructor( private http : HttpClient){}

  onSubmit(){
    console.log(this.category)

    // appel
    // api key e743931a18e81262cac54dfe5af6daab
    this.http
        .get<any>(`http://api.mediastack.com/v1/news?access_key=e743931a18e81262cac54dfe5af6daab&countries=fr&categories=${this.category}`)
        .subscribe(res =>{
          this.listeArticles = res.data;
          console.log(this.listeArticles)
        })

  }

}

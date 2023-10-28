import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  
  constructor(private http: HttpClient) { }

  url = 'http://127.0.0.1:3000/projet/';


  create(dep: any){

    return this.http.post( this.url + 'ajout' , dep );

  }

  getall(){

    return this.http.get( this.url + 'all'  );

  }

  getbyid(id: any){

    return this.http.get( this.url + 'getbyid/' + id  );

  }
  getbydep(id: any){

    return this.http.get( this.url + 'getbydep/' + id  );

  }
  getbyclient(id: any){

    return this.http.get( this.url + 'getbyclient/' + id  );

  }


  supprimer(id: any){

    return this.http.delete( this.url + 'supprimer/' + id  );

  }

  update(id: any , dep: any){

    return this.http.put( this.url + 'update/' + id  , dep );

  }
}

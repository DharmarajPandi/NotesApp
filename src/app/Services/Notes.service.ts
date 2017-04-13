import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class NotesService{


    constructor(private http:Http)
    {

console.log('running');
    }
 getNotes(){
         return this.http.get('https://api.mlab.com/api/1/databases/mynotes1304/collections/mynotes?apiKey=K8dtp2HIGkSCqvJDjjr2PHplf8TFqZRC').map(result=>result.json())
     }
    
}
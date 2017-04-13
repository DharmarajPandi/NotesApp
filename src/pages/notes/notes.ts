import { Component ,OnInit} from '@angular/core';
import { NavController ,NavParams} from 'ionic-angular';
import { NotesService } from '../../app/Services/Notes.service';
import {NotesDetailsPage} from '../notesdetail/notesdetail';
@Component({
  selector: 'page-home',
  templateUrl: 'notes.html'
})
export class NotesPage  implements OnInit {

  Items:any;

  constructor(public navCtrl: NavController,private navparam:NavParams,private _notesService:NotesService) {

  }

ngOnInit(){
      this._notesService.getNotes().subscribe(resp=>this.Items=resp);
      console.log(JSON.stringify(this.Items));
 }
EventClicked(item){
  console.log('called'+item);
  this.navCtrl.push(NotesDetailsPage,{note:item})
}
}

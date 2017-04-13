import { Component ,OnInit} from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { NotesService } from '../../app/Services/Notes.service';

@Component({
  selector: 'page-notesdetail',
  templateUrl: 'notesdetail.html'
})
export class NotesDetailsPage  implements OnInit {

  Items:any;
  navparam:any;
  constructor(public navCtrl: NavController,private _NavParams:NavParams,private _notesService:NotesService) {
this._NavParams=_NavParams;
  }

ngOnInit(){
     console.log(this._NavParams);
 }

}

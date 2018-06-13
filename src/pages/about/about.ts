import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import 'rxjs/add/operator/map';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  private url:string = "http://localhost:3000/musica";
  public dados:Array<{}>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,public toastCtrl:ToastController) {
    this.http.get(this.url)
    .map( res => res.json() )
    .subscribe( data => {
      this.dados = data;});
  }
  Delete(id:number){
    this.http.delete(`http://localhost:3000/musica/${id}`)
    .map( res => res.json() )
    .subscribe( data => {
      let toast = this.toastCtrl.create({
        message: 'Música Excluida com Sucesso!!!',
        showCloseButton: true,
        closeButtonText: 'OK'
      });
      toast.present();
      this.navCtrl.push(AboutPage);
    });
  }

}

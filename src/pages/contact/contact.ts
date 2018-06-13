import { Http, RequestOptions, Headers } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  private url:string = "http://localhost:3000/musica";

    public evento = {
      "nome": "",
      "artista": "",
      "tipo": "",
      "trechoum": "",
      "trechodois": "",
      "trechotres": "",
      "trechoquatro": "",
      "trechocinco": "",
      "trechoseis": "",
      "trechosete": "",
      "trechooito": "",
      "trechonove": "",
      "trechodez": ""
    }
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: Http,
              public toastCtrl: ToastController) {

  }
  CadMusica(evento){
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.url, evento, options)
    .map( res => res.json() )
    .subscribe( data => { 
      let toast = this.toastCtrl.create({
        message: 'Música Cadastrada com Sucesso!!!',
        showCloseButton: true,
        closeButtonText: 'OK'
      });
      toast.present();
      this.navCtrl.push(AboutPage);
    });

    evento.nome = "";
    evento.artista = "";
    evento.tipo = "";
    evento.trechoum = "";
    evento.trechodois = "";
    evento.trechotres = "";
    evento.trechoquatro = "";
    evento.trechocinco = "";
    evento.trechoseis = "";
    evento.trechosete = "";
    evento.trechooito = "";
    evento.trechonove = "";
    evento.trechodez = "";
  }
}

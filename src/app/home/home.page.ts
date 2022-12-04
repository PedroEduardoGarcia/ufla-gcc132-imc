import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  weight: number = 0
  height: number = 0
  imc: number = 0
  classificacao: string = ''

  constructor(private toastCtrl: ToastController) {}

  onCalculate() {
    if (this.height <= 0 || this.weight <= 0) {
      return
    }
    
    this.imc = this.weight / (this.height * this.height)
    if(this.imc < 18.5)
      this.classificacao = 'Magreza'
    else if(this.imc < 24.9)
      this.classificacao = 'Normal'
    else if(this.imc < 29.9)
      this.classificacao = 'Sobrepeso'
    else if(this.imc < 39.9)
      this.classificacao = 'Obesidade'
    else
      this.classificacao = 'Obesidade Grave'
    this.showIMC()
  }

  async showIMC() {
    const toast = await this.toastCtrl.create({
      message: `IMC = ${this.imc.toFixed(2)}, Classificação: ${this.classificacao}`,
      duration: 3000,
      color: 'secondary'
    })
    
    toast.present()

  }


}

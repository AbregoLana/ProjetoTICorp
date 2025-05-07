import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toastAtivo = false;
  toastMensagem = '';
  toastImagem = '';

  constructor() { }

  exibirToast(mensagem: string, imagem: string) {
    this.toastMensagem = mensagem;
    this.toastImagem = imagem;
    this.toastAtivo = true;

    // Fecha o Toast após 3 segundos
    setTimeout(() => {
      this.toastAtivo = false;
    }, 3000);
  }
}
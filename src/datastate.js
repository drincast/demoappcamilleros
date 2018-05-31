import { extendObservable } from 'mobx';

class DataState {
  constructor() {
    extendObservable(
      this,
      {
        codes: [
          {"code":"1234567890", "state":0},
          {"code":"abcdefghijk", "state":0},
          {"code":"123abc456def789", "state":0},
        ],
        ok:1,
        readcode: '',
      }
    );
  }

  VerifyCode(code){
    let correct = false;
    this.codes.forEach((value, index) => {
      // if(this.readcode !== ''){
      //
      // }
      // else{
      //   alert("no hay código escaneado");
      // }

      if(code === value.code){
        value.state = 1;
        correct = true;
        //this.platillos[index].cantidad = cantidadPlatillo
      }
    });

    if(correct){
      this.ok = 0;
    }
    else{
      this.ok = 1;
    }
  }

  SetReadCode(code){
    this.readcode = code;
  }

  PrintValues(code){
    let uno = '';
    this.codes.forEach((value, index) => {
      uno = uno + ' ' + value.code;
    });
    alert(uno);
  }
}

var dataState = new DataState();

export default dataState;

import { extendObservable } from 'mobx';

class DataState {
  constructor() {
    extendObservable(
      this,
      {
        codes: [
          {"code":"0101800725909", "state":0},
          {"code":"abcdefghijk", "state":0},
          {"code":"123abc456def789", "state":0},
        ],
        ok:0,
        readcode: '',
        colorInfo: '#00FF00',
        log: [{
                date: 'test',
                device: "device uno",
                state: 0
              },
              {
                date: 'test',
                device: "device uno",
                state: 1
              },
            ],
      }
    );
  }

  VerifyCode(code){
    let correctReading = 0;

    this.codes.forEach((value, index) => {
      if(code === value.code){
        value.state = 1;
        correctReading = 1;
      }
    });

    this.ok = 1;
    this.codes.forEach((value, index) => {
      if(value.state === 0){
        this.ok = 0;
      }
    });

    this.AddLog(correctReading);
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

  ChangeColorInfo(){
    //alert(this.colorInfo + " to #FF0000");
    this.colorInfo = '#FF0000';
  }

  AddLog(correct){
    let date = new Date()
    this.log.push({
      date: date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate(),
      device: "device uno",
      state: correct
    })
  }


}

var dataState = new DataState();

export default dataState;

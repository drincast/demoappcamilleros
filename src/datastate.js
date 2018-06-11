import { extendObservable } from 'mobx';

class DataState {
  constructor() {
    extendObservable(
      this,
      {
        codes: [
          {"code":"0101800725909", "state":0},
          {"code":"1018007022504", "state":0},
          {"code":"0079400052919", "state":0},
        ],
        ok:0,
        readcode: '',
        colorInfo: '#F5FCFF',
        log: [{
                id: 0,
                date: 'test',
                device: "device uno",
                state: 0
              },
              {
                id: 1,
                date: 'test',
                device: "device uno",
                state: 1
              },
            ],
      }
    );
  }

  VerifyColor(correctReading){
    if(1 === correctReading && 1 === this.ok){
      this.colorInfo = '#00FF00';
      return;
    }

    if(1 === correctReading && 0 === this.ok){
      this.colorInfo = '#F5FCFF';
      return;
    }

    else{
      this.colorInfo = '#FF0000';
    }
  }

  VerifyCode(code){
    let correctReading = 0;
    alert(code);
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
    this.VerifyColor(correctReading);
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
    if('#FF0000' === this.colorInfo){
      this.colorInfo = '#00FF00';
    }
    else {
      this.colorInfo = '#FF0000';
    }

  }

  AddLog(correct){
    let date = new Date()
    this.log.push({
      id: this.log.length,
      date: date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate(),
      device: "device uno",
      state: correct
    })
  }


}

var dataState = new DataState();

export default dataState;

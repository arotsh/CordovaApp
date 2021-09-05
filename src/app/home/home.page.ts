import { Component } from '@angular/core';
declare var Tone: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  itemPlay1 = false;
  itemPlay2 = false;
  itemPlay3 = false;
  itemPlay4 = false;
  itemPlay5 = false;
  itemPlay6 = false;
  sounds = [
    "./mp3/s1.mp3",
    "./mp3/s2.mp3",
    "./mp3/s3.mp3",
    "./mp3/s4.mp3",
    "./mp3/s5.mp3",
    "./mp3/s6.mp3",
    

  ]


 hihat1 = new Tone.Player(this.sounds[Math.floor(Math.random() * this.sounds.length)]).toMaster();
 hihat2 = new Tone.Player(this.sounds[Math.floor(Math.random() * this.sounds.length)]).toMaster();
 hihat3 = new Tone.Player(this.sounds[Math.floor(Math.random() * this.sounds.length)]).toMaster();
 hihat4 = new Tone.Player(this.sounds[Math.floor(Math.random() * this.sounds.length)]).toMaster();
 hihat5 = new Tone.Player(this.sounds[Math.floor(Math.random() * this.sounds.length)]).toMaster();
 hihat6 = new Tone.Player(this.sounds[Math.floor(Math.random() * this.sounds.length)]).toMaster();
 

  play1() {
    Tone.context.resume().then(() => {
      this.hihat1.start();
    })
  }
  play2() {
    Tone.context.resume().then(() => {
      this.hihat2.start();
    })
  }

  play3() {
    Tone.context.resume().then(() => {
      this.hihat3.start();
    })
  }

  play4() {
    Tone.context.resume().then(() => {
      this.hihat4.start();
    })
  }

  play5() {
    Tone.context.resume().then(() => {
      this.hihat5.start();
    })
  }

  play6() {
    Tone.context.resume().then(() => {
      this.hihat6.start();
    })
  }









  playStart1() {
    //  console.log(data.target)
    this.itemPlay1 = true
    this.play1();
  }
  playEnd1() {
    //  console.log(data.target)
    this.itemPlay1 = false
  }

  playStart2() {
    //  console.log(data.target)
    this.itemPlay2 = true
    this.play2()
  }
  playEnd2() {
    //  console.log(data.target)
    this.itemPlay2 = false
  }

  playStart3() {
    //  console.log(data.target)
    this.itemPlay3 = true
    this.play3()

  }
  playEnd3() {
    //  console.log(data.target)
    this.itemPlay3 = false
  }

  playStart4() {
    //  console.log(data.target)
    this.itemPlay4 = true
    this.play4()

  }
  playEnd4() {
    //  console.log(data.target)
    this.itemPlay4 = false
  }
  playStart5() {
    //  console.log(data.target)
    this.itemPlay5 = true
    this.play5()

  }
  playEnd5() {
    //  console.log(data.target)
    this.itemPlay5 = false
  }
  playStart6() {
    //  console.log(data.target)
    this.itemPlay6 = true
    this.play6()

  }
  playEnd6() {
    //  console.log(data.target)
    this.itemPlay6 = false
  }



}



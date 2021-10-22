import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ScoreModel } from 'src/app/models/scoreModel';

@Component({
  selector: 'app-proef3',
  templateUrl: './proef3.component.html',
  styleUrls: ['./proef3.component.css']
})
export class Proef3Component implements OnInit {

  public threeBFrom = new FormGroup({
      OneHP: new FormControl(''),
      OneHalfP: new FormControl(''),
      OneCorr: new FormControl(''),
      OneNotes: new FormControl(''),
      TwoHP: new FormControl(''),
      TwoHalfP: new FormControl(''),
      TwoCorr: new FormControl(''),
      TwoNotes: new FormControl(''),
      ThreeHP: new FormControl(''),
      ThreeHalfP: new FormControl(''),
      ThreeCorr: new FormControl(''),
      ThreeNotes: new FormControl(''),
      FourHP: new FormControl(''),
      FourHalfP: new FormControl(''),
      FourCorr: new FormControl(''),
      FourNotes: new FormControl(''),
      FiveHP: new FormControl(''),
      FiveHalfP: new FormControl(''),
      FiveCorr: new FormControl(''),
      FiveNotes: new FormControl('')
  });

  currentScore = new ScoreModel();

  constructor() { }

  ngOnInit(): void {
  }

  SaveScoreForm(){
    console.log(this.threeBFrom.getRawValue());

    this.GetInputForm();

    console.log(this.currentScore.oneHP);
  }

  GetInputForm(){
    this.currentScore.oneHP = this.threeBFrom.value.OneHP;
    this.currentScore.oneHalfP = this.threeBFrom.value.OneHalfP;
    this.currentScore.oneCorr = this.threeBFrom.value.OneCorr;
    this.currentScore.oneNotes = this.threeBFrom.value.OneNotes;
    this.currentScore.twoHP = this.threeBFrom.value.TwoHP;
    this.currentScore.twoHalfP = this.threeBFrom.value.TwoHalfP;
    this.currentScore.twoCorr = this.threeBFrom.value.TwoCorr;
    this.currentScore.twoNotes = this.threeBFrom.value.TwoNotes;
    this.currentScore.threeHP = this.threeBFrom.value.ThreeHP;
    this.currentScore.threeHalfP = this.threeBFrom.value.ThreeHalfP;
    this.currentScore.threeCorr = this.threeBFrom.value.ThreeCorr;
    this.currentScore.threeNotes = this.threeBFrom.value.ThreeNotes;
    this.currentScore.fourHP = this.threeBFrom.value.FourHP;
    this.currentScore.fourHalfP = this.threeBFrom.value.FourHalfP;
    this.currentScore.fourCorr = this.threeBFrom.value.FourCorr;
    this.currentScore.fourNotes = this.threeBFrom.value.FourNotes;
    this.currentScore.fiveHP = this.threeBFrom.value.FiveHP;
    this.currentScore.fiveHalfP = this.threeBFrom.value.FiveHalfP;
    this.currentScore.fiveCorr = this.threeBFrom.value.FiveCorr;
    this.currentScore.fiveNotes = this.threeBFrom.value.FiveNotes;
  }

}

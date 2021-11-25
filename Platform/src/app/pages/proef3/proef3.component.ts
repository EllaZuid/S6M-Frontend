import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ScoreModel } from 'src/app/models/scoreModel';
import { ProefService } from 'src/app/services/proef.service';

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
      FiveNotes: new FormControl(''),
      SixHP: new FormControl(''),
      SixHalfP: new FormControl(''),
      SixCorr: new FormControl(''),
      SixNotes: new FormControl(''),
      SevenHP: new FormControl(''),
      SevenHalfP: new FormControl(''),
      SevenCorr: new FormControl(''),
      SevenNotes: new FormControl(''),
      EightHP: new FormControl(''),
      EightHalfP: new FormControl(''),
      EightCorr: new FormControl(''),
      EightNotes: new FormControl(''),
      NineHP: new FormControl(''),
      NineHalfP: new FormControl(''),
      NineCorr: new FormControl(''),
      NineNotes: new FormControl(''),
      TenHP: new FormControl(''),
      TenHalfP: new FormControl(''),
      TenCorr: new FormControl(''),
      TenNotes: new FormControl(''),
      ElevenHP: new FormControl(''),
      ElevenHalfP: new FormControl(''),
      ElevenCorr: new FormControl(''),
      ElevenNotes: new FormControl(''),
      TwelveHP: new FormControl(''),
      TwelveHalfP: new FormControl(''),
      TwelveCorr: new FormControl(''),
      TwelveNotes: new FormControl(''),
      ThirteenHP: new FormControl(''),
      ThirteenHalfP: new FormControl(''),
      ThirteenCorr: new FormControl(''),
      ThirteenNotes: new FormControl(''),
      FourteenHP: new FormControl(''),
      FourteenHalfP: new FormControl(''),
      FourteenCorr: new FormControl(''),
      FourteenNotes: new FormControl(''),
      FifteenHP: new FormControl(''),
      FifteenHalfP: new FormControl(''),
      FifteenCorr: new FormControl(''),
      FifteenNotes: new FormControl(''),
      SixteenHP: new FormControl(''),
      SixteenHalfP: new FormControl(''),
      SixteenCorr: new FormControl(''),
      SixteenNotes: new FormControl(''),
      SeventeenHP: new FormControl(''),
      SeventeenHalfP: new FormControl(''),
      SeventeenCorr: new FormControl(''),
      SeventeenNotes: new FormControl(''),
      EighteenHP: new FormControl(''),
      EighteenHalfP: new FormControl(''),
      EighteenCorr: new FormControl(''),
      EighteenNotes: new FormControl(''),
      NineteenHP: new FormControl(''),
      NineteenHalfP: new FormControl(''),
      NineteenCorr: new FormControl(''),
      NineteenNotes: new FormControl(''),
      TwentyHP: new FormControl(''),
      TwentyHalfP: new FormControl(''),
      TwentyCorr: new FormControl(''),
      TwentyNotes: new FormControl(''),
      TwentyoneHP: new FormControl(''),
      TwentyoneHalfP: new FormControl(''),
      TwentyoneCorr: new FormControl(''),
      TentyoneNotes: new FormControl(''),
      TwentyonehalfHP: new FormControl(''),
      TwentyonehalfHalfP: new FormControl(''),
      TwentyonehalfCorr: new FormControl(''),
      TwentyonehalfNotes: new FormControl(''),
      TwentytwoHP: new FormControl(''),
      TwentytwoHalfP: new FormControl(''),
      TwentytwoCorr: new FormControl(''),
      TwentytwoNotes: new FormControl(''),
      TwentythreeHP: new FormControl(''),
      TwentythreeHalfP: new FormControl(''),
      TwentythreeCorr: new FormControl(''),
      TwentythreeNotes: new FormControl(''),
      TwentyfourHP: new FormControl(''),
      TwentyfourHalfP: new FormControl(''),
      TwentyfourCorr: new FormControl(''),
      TwentyfourNotes: new FormControl(''),
      TwentyfiveHP: new FormControl(''),
      TwentyfiveHalfP: new FormControl(''),
      TwentyfiveCorr: new FormControl(''),
      TwentyfiveNotes: new FormControl(''),
      TwentysixHP: new FormControl(''),
      TwentysixHalfP: new FormControl(''),
      TwentysixCorr: new FormControl(''),
      TwentysixNotes: new FormControl(''),
      TwentysevenHP: new FormControl(''),
      TwentysevenHalfP: new FormControl(''),
      TwentysevenCorr: new FormControl(''),
      TwentysevenNotes: new FormControl(''),
      TwentyeightHP: new FormControl(''),
      TwentyeightHalfP: new FormControl(''),
      TwentyeightCorr: new FormControl(''),
      TwentyeightNotes: new FormControl(''),
      TwentynineHP: new FormControl(''),
      TwentynineHalfP: new FormControl(''),
      TwentynineCorr: new FormControl(''),
      TwentynineNotes: new FormControl(''),
      ThirtyHP: new FormControl(''),
      ThirtyHalfP: new FormControl(''),
      ThirtyCorr: new FormControl(''),
      ThirtyNotes: new FormControl(''),
      SubtotaalHelePunten: new FormControl(''),
      SubtotaalHalvePunten: new FormControl(''),
      SubtotaalCorr: new FormControl(''),
      Strafpunten: new FormControl(''),
      Eindtotaal: new FormControl('')
  });

  currentScore = new ScoreModel();

  constructor(private proefService: ProefService, private router: Router) { }

  ngOnInit(): void {
  }

  SaveScoreForm(){
    console.log(this.threeBFrom.getRawValue());

    this.GetInputForm();

    this.proefService.sendScore(this.currentScore).subscribe((result: any) => {
      console.log(result);
      this.router.navigate(['home']);

    }, (error) => {
      console.log('Scorecomponent zegt error');
      console.log(error);
    });
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

    this.currentScore.sixHP = this.threeBFrom.value.SixHP;
    this.currentScore.sixHalfP = this.threeBFrom.value.SixHalfP;
    this.currentScore.sixCorr = this.threeBFrom.value.SixCorr;
    this.currentScore.sixNotes = this.threeBFrom.value.SixNotes;

    this.currentScore.sevenHP = this.threeBFrom.value.SevenHP;
    this.currentScore.sevenHalfP = this.threeBFrom.value.SevenHalfP;
    this.currentScore.sevenCorr = this.threeBFrom.value.SevenCorr;
    this.currentScore.sevenNotes = this.threeBFrom.value.SevenNotes;

    this.currentScore.eightHP = this.threeBFrom.value.EightHP;
    this.currentScore.eightHalfP = this.threeBFrom.value.EightHalfP;
    this.currentScore.eightCorr = this.threeBFrom.value.EightCorr;
    this.currentScore.eightNotes = this.threeBFrom.value.EightNotes;

    this.currentScore.nineHP = this.threeBFrom.value.NineHP;
    this.currentScore.nineHalfP = this.threeBFrom.value.NineHalfP;
    this.currentScore.nineCorr = this.threeBFrom.value.NineCorr;
    this.currentScore.nineNotes = this.threeBFrom.value.NineNotes;

    this.currentScore.tenHP = this.threeBFrom.value.TenHP;
    this.currentScore.tenHalfP = this.threeBFrom.value.TenHalfP;
    this.currentScore.tenCorr = this.threeBFrom.value.TenCorr;
    this.currentScore.tenNotes = this.threeBFrom.value.TenNotes;

    this.currentScore.elevenHP = this.threeBFrom.value.ElevenHP;
    this.currentScore.elevenHalfP = this.threeBFrom.value.ElevenHalfP;
    this.currentScore.elevenCorr = this.threeBFrom.value.ElevenCorr;
    this.currentScore.elevenNotes = this.threeBFrom.value.ElevenNotes;

    this.currentScore.twelveHP = this.threeBFrom.value.TwelveHP;
    this.currentScore.twelveHalfP = this.threeBFrom.value.TwelveHalfP;
    this.currentScore.twelveCorr = this.threeBFrom.value.TwelveCorr;
    this.currentScore.twelveNotes = this.threeBFrom.value.TwelveNotes;

    this.currentScore.thirteenHP = this.threeBFrom.value.ThirteenHP;
    this.currentScore.thirteenHalfP = this.threeBFrom.value.ThirteenHalfP;
    this.currentScore.thirteenCorr = this.threeBFrom.value.ThirteenCorr;
    this.currentScore.thirteenNotes = this.threeBFrom.value.ThirteenNotes;

    this.currentScore.fourteenHP = this.threeBFrom.value.FourteenHP;
    this.currentScore.fourteenHalfP = this.threeBFrom.value.FourteenHalfP;
    this.currentScore.fourteenCorr = this.threeBFrom.value.FourteenCorr;
    this.currentScore.fourteenNotes = this.threeBFrom.value.FourteenNotes;

    this.currentScore.fifteenHP = this.threeBFrom.value.FifteenHP;
    this.currentScore.fifteenHalfP = this.threeBFrom.value.FifteenHalfP;
    this.currentScore.fifteenCorr = this.threeBFrom.value.FifteenCorr;
    this.currentScore.fifteenNotes = this.threeBFrom.value.FifteenNotes;

    this.currentScore.sixteenHP = this.threeBFrom.value.SixteenHP;
    this.currentScore.sixteenHalfP = this.threeBFrom.value.SixteenHalfP;
    this.currentScore.sixteenCorr = this.threeBFrom.value.SixteenCorr;
    this.currentScore.sixteenNotes = this.threeBFrom.value.SixteenNotes;

    this.currentScore.seventeenHP = this.threeBFrom.value.SeventeenHP;
    this.currentScore.seventeenHalfP = this.threeBFrom.value.SeventeenHalfP;
    this.currentScore.seventeenCorr = this.threeBFrom.value.SeventeenCorr;
    this.currentScore.seventeenNotes = this.threeBFrom.value.SeventeenNotes;

    this.currentScore.eighteenHP = this.threeBFrom.value.EighteenHP;
    this.currentScore.eighteenHalfP = this.threeBFrom.value.EighteenHalfP;
    this.currentScore.eighteenCorr = this.threeBFrom.value.EighteenCorr;
    this.currentScore.eighteenNotes = this.threeBFrom.value.EighteenNotes;

    this.currentScore.nineteenHP = this.threeBFrom.value.NineteenHP;
    this.currentScore.nineteenHalfP = this.threeBFrom.value.NineteenHalfP;
    this.currentScore.nineteenCorr = this.threeBFrom.value.NineteenCorr;
    this.currentScore.nineteenNotes = this.threeBFrom.value.NineteenNotes;

    this.currentScore.twentyHP = this.threeBFrom.value.TwentyHP;
    this.currentScore.twentyHalfP = this.threeBFrom.value.TwentyHalfP;
    this.currentScore.twentyCorr = this.threeBFrom.value.TwentyCorr;
    this.currentScore.twentyNotes = this.threeBFrom.value.TwentyNotes;

    this.currentScore.twentyoneHP = this.threeBFrom.value.TwentyoneHP;
    this.currentScore.twentyoneHalfP = this.threeBFrom.value.TwentyoneHalfP;
    this.currentScore.twentyoneCorr = this.threeBFrom.value.TwentyoneCorr;
    this.currentScore.twentyoneNotes = this.threeBFrom.value.TentyoneNotes;

    this.currentScore.twentyonehalfHP = this.threeBFrom.value.TwentyonehalfHP;
    this.currentScore.twentyonehalfHalfP = this.threeBFrom.value.TwentyonehalfHalfP;
    this.currentScore.twentyonehalfCorr = this.threeBFrom.value.TwentyonehalfCorr;
    this.currentScore.twentyonehalfNotes = this.threeBFrom.value.TwentyonehalfNotes;

    this.currentScore.twentytwoHP = this.threeBFrom.value.TwentytwoHP;
    this.currentScore.twentytwoHalfP = this.threeBFrom.value.TwentytwoHalfP;
    this.currentScore.twentytwoCorr = this.threeBFrom.value.TwentytwoCorr;
    this.currentScore.twentytwoNotes = this.threeBFrom.value.TwentytwoNotes;

    this.currentScore.twentythreeHP = this.threeBFrom.value.TwentythreeHP;
    this.currentScore.twentythreeHalfP = this.threeBFrom.value.TwentythreeHalfP;
    this.currentScore.twentythreeCorr = this.threeBFrom.value.TwentythreeCorr;
    this.currentScore.twentythreeNotes = this.threeBFrom.value.TwentythreeNotes;

    this.currentScore.twentyfourHP = this.threeBFrom.value.TwentyfourHP;
    this.currentScore.twentyfourHalfP = this.threeBFrom.value.TwentyfourHalfP;
    this.currentScore.twentyfourCorr = this.threeBFrom.value.TwentyfourCorr;
    this.currentScore.twentyfourNotes = this.threeBFrom.value.TwentyfourNotes;

    this.currentScore.twentyfiveHP = this.threeBFrom.value.TwentyfiveHP;
    this.currentScore.twentyfiveHalfP = this.threeBFrom.value.TwentyfiveHalfP;
    this.currentScore.twentyfiveCorr = this.threeBFrom.value.TwentyfiveCorr;
    this.currentScore.twentyfiveNotes = this.threeBFrom.value.TwentyfiveNotes;

    this.currentScore.twentysixHP = this.threeBFrom.value.TwentysixHP;
    this.currentScore.twentysixHalfP = this.threeBFrom.value.TwentysixHalfP;
    this.currentScore.twentysixCorr = this.threeBFrom.value.TwentysixCorr;
    this.currentScore.twentysixNotes = this.threeBFrom.value.TwentysixNotes;

    this.currentScore.twentysevenHP = this.threeBFrom.value.TwentysevenHP;
    this.currentScore.twentysevenHalfP = this.threeBFrom.value.TwentysevenHalfP;
    this.currentScore.twentysevenCorr = this.threeBFrom.value.TwentysevenCorr;
    this.currentScore.twentysevenNotes = this.threeBFrom.value.TwentysevenNotes;
    
    this.currentScore.twentyeightHP = this.threeBFrom.value.TwentyeightHP;
    this.currentScore.twentyeightHalfP = this.threeBFrom.value.TwentyeightHalfP;
    this.currentScore.twentyeightCorr = this.threeBFrom.value.TwentyeightCorr;
    this.currentScore.twentyeightNotes = this.threeBFrom.value.TwentyeightNotes;

    this.currentScore.twentynineHP = this.threeBFrom.value.TwentynineHP;
    this.currentScore.twentynineHalfP = this.threeBFrom.value.TwentynineHalfP;
    this.currentScore.twentynineCorr = this.threeBFrom.value.TwentynineCorr;
    this.currentScore.twentynineNotes = this.threeBFrom.value.TwentynineNotes;

    this.currentScore.thirtyHP = this.threeBFrom.value.ThirtyHP;
    this.currentScore.thirtyHalfP = this.threeBFrom.value.ThirtyHalfP;
    this.currentScore.thirtyCorr = this.threeBFrom.value.ThirtyCorr;
    this.currentScore.thirtyNotes = this.threeBFrom.value.ThirtyNotes;

    this.currentScore.subtotaalHelePunten = this.threeBFrom.value.SubtotaalHelePunten;
    this.currentScore.subtotaalHalvePunten = this.threeBFrom.value.SubtotaalHalvePunten;
    this.currentScore.subtotaalCorr = this.threeBFrom.value.SubtotaalCorr;

    this.currentScore.strafpunten = this.threeBFrom.value.Strafpunten;
    this.currentScore.eindtotaal = this.threeBFrom.value.Eindtotaal;
  }

}
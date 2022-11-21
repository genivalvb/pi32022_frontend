import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fii } from '../model/fii';
import { FiiService } from '../fii.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-fii-list',
  templateUrl: './fii-list.component.html',
  styleUrls: ['./fii-list.component.css']
})
export class FiiListComponent implements OnInit {

  fiis: Fii[];

  constructor(private fiiService: FiiService,
    private route: ActivatedRoute,
    private router: Router ) {
    this.fiis = [];

   }

  ngOnInit(): void {
    this.getFiis();
  }

  private getFiis(){
    this.fiiService.getFiisList().subscribe(data => {
      this.fiis = data;
    });
  }

  fiiDetails(id: number){
    this.router.navigate(['fii-details/um/', id]);
  }

}

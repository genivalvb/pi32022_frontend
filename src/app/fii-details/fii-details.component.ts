import { Component, OnInit } from '@angular/core';
import { Fii } from '../model/fii';
import { ActivatedRoute } from '@angular/router';
import { FiiService } from '../fii.service';

@Component({
  selector: 'app-fii-details',
  templateUrl: './fii-details.component.html',
  styleUrls: ['./fii-details.component.css']
})
export class FiiDetailsComponent implements OnInit {

  id: number;
  fii: Fii;
  constructor(private route: ActivatedRoute, private fiiService: FiiService ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.fii = new Fii();
    this.fiiService.getFiiById(this.id).subscribe( data => {
      this.fii = data;
    });
  }

}

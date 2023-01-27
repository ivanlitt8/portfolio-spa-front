import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-idiom',
  templateUrl: './idiom.component.html',
  styleUrls: ['./idiom.component.css']
})
export class IdiomComponent implements OnInit {

  idiom:any;

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data:any)=>{
      this.idiom=data.idiom;
    })
  }

}
import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
// import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  
  persona: persona = new persona("","","");

  //miPortfolio:any;

  // constructor(private datosPortfolio:PortfolioService) { }
  constructor(public personaService: PersonaService) { }


  ngOnInit(): void {
    // this.datosPortfolio.obtenerDatos().subscribe((data:any)=>{
    //     this.miPortfolio = data;
    // });

      this.personaService.getPersona().subscribe(data => {
        this.persona = data
      })
  }

}

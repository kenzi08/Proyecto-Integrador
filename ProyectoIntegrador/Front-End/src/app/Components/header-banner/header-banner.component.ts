import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/Model/Persona.model';
import { PersonaService } from 'src/app/Services/persona.service';

@Component({
  selector: 'app-header-banner',
  templateUrl: './header-banner.component.html',
  styleUrls: ['./header-banner.component.css']
})
export class HeaderBannerComponent implements OnInit {
  
  persona: persona = new persona("","","");

  constructor(public personaService: PersonaService){
    
  }
  
  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
    }
}

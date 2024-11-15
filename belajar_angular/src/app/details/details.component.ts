import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  template: `
    <p>
      details works! {{ housingLocationId }}
    </p>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route : ActivatedRoute = inject(ActivatedRoute);
  housingLocationId = 0;
  housingService : HousingService = inject(HousingService);
  housingLocation : HousingLocation | undefined

  constructor(){
    this.housingLocationId = Number(this.route.snapshot.params['id'])
    this.housingLocation = this.housingService.getHousingLocationById(this.housingLocationId)
    console.table(this.housingLocation)
  }
}

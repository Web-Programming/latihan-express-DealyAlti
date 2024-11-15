import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  protected housingLocationList : HousingLocation[]= [
    {
    id : 0,
      name : "Citra Grand City",
      city : "Palembang",
      state : "indonesia",
      photo : "https://static-id.lamudi.com/static/media/bm9uZS9ub25l/1000x620/8d2d212e30667b.jpg",
      availableUnits : 12,
      wifi : true,
      laundry : true,
    },
    {
      id : 1,
      name : "Citra Land",
      city : "Palembang",
      state : "indonesia",
      photo : "https://incomerealty.id/wp-content/uploads/2023/12/DIJUAL-RUMAH-TROPICAL-VALLEY-CGC-PALEMBANG-1.jpg",
      availableUnits : 14,
      wifi : true,
      laundry : true,
    }
  ]
  constructor() { }
  getAllHousingLocations() : HousingLocation[]{
    return this.housingLocationList;
  }
  getHousingLocationById(id: Number) : HousingLocation |  undefined{
    return this.housingLocationList.find(housingLocation => housingLocation.id == id);
  }
}

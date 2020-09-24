import { Component, OnInit } from '@angular/core';
import { CityService } from '../service/city.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cityDetails = [];

  constructor(private cityService : CityService) { }

  ngOnInit(): void {
    this.cityService.getCity().subscribe((city) => {
      this.cityDetails = Object.entries(city);
    })
  }

}

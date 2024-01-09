import { Component, Input, OnInit } from '@angular/core';
import { RoomDetails } from '../rooms';

@Component({
  selector: 'app-rooms-catalog',
  templateUrl: './rooms-catalog.component.html',
  styleUrl: './rooms-catalog.component.scss'
})
export class RoomsCatalogComponent implements OnInit{
  @Input() roomsCatalog: RoomDetails[]=[];
  constructor(){}
  ngOnInit(): void {}
}

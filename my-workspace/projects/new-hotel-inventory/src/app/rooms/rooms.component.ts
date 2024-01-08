import { Component, OnInit } from '@angular/core';
import { RoomCount, RoomDetails } from './rooms';
import { RoomsCatalogComponent } from './rooms-catalog/rooms-catalog.component';


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit{
//[x: string]: any;
   roomsList: RoomDetails[]=[];
   constructor(){}
   ngOnInit() : void {
    this.roomsList=[{
      roomType : 'Suite',
      roomNumbers : 14,
      amenities : "Bedroom, Washroom with heated shower, wifi",
      price : 500,
      photos : 'test',
      checkinTime : new Date('11/10/1998'),
      checkoutTime : new Date('11/10/1998'),
     },
     {
      roomType : 'Deluxe',
      roomNumbers : 4,
      amenities : "Bedroom, Washroom with heated shower bathtub, wifi",
      price : 1000,
      photos : 'test',
      checkinTime : new Date('11/10/1998'),
      checkoutTime : new Date('11/10/1998'),
     },
     {
      roomType : 'Personal Suite',
      roomNumbers : 4,
      amenities : "Bedroom, Washroom with heated shower, jaccuzzi, wifi, massage",
      price : 1500,
      photos : 'test',
      checkinTime : new Date('11/10/1998'),
      checkoutTime : new Date('11/10/1998'),
     },
     {
      roomType : 'VIP',
      roomNumbers : 4,
      amenities : "Bedroom, Washroom with heated shower, jaccuzzi, massage, pool, wifi",
      price : 2100,
      photos : 'test',
      checkinTime : new Date('11/10/1998'),
      checkoutTime : new Date('11/10/1998'),
     }
     ];
   }
   hotelName : string = 'Divyajyoti hotel';
   numberOfRooms : number=10;
   hideRooms : boolean =false;
   toggle(){
    this.hideRooms=!this.hideRooms;
   };
   roomsCount : RoomCount ={
     availableRooms: 10,
     bookedRooms: 5,
     totalRooms: 20
   };   
}


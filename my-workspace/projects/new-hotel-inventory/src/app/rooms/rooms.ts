export interface RoomCount{
    totalRooms : number;
    availableRooms : number;
    bookedRooms : number;
}

export interface RoomDetails {
    roomType : string;
    roomNumbers : number;
    amenities : string;
    price : number;
    photos : string;
    checkinTime : Date;
    checkoutTime : Date
}
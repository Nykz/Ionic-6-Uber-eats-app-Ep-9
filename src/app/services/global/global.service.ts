import { Injectable } from '@angular/core';
import { LocationAccuracy } from '@awesome-cordova-plugins/location-accuracy/ngx';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(
    private locationAccuracy: LocationAccuracy
  ) { }

  async enableLocation() {
    try {
      const canRequest: boolean = await this.locationAccuracy.canRequest();
      console.log('canrequest: ', canRequest);
      if(canRequest) {
        await this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY);
        console.log('Request successful');
        return true;
      }
      return false;
    } catch(e) {
      console.log(e);
      throw(e);
    }
  }

  getCurrentLocation() {
    return Geolocation.getCurrentPosition()
    .then(coordinates => {
      return coordinates;
    })
    .catch(e => {
      throw(e);
    });
  }

  requestLocationPermission() {
    return Geolocation.requestPermissions()
    .then(status => {
      return status;
    })
    .catch(e => {
      throw(e);
    });
  }

}

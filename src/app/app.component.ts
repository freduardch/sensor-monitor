import { Component, OnInit, OnDestroy } from '@angular/core';
import { DeviceService } from './device.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  value1 = 50;
  value2 = 33;
  value3 = 5;
  value4 = 88;

  subscriptions: Subscription[] = [];

  constructor(private deviceService: DeviceService) {

  }

  ngOnInit() {
    // this.subscriptions.push(this.deviceService.getDeviceById('0e2270FEA1g0NEv2bZzT')
    // .subscribe((datos) => {
    //   console.log(datos);
    // }));
  }

  ngOnDestroy() {
    // if (this.subscriptions.length > 0) {
    //   this.subscriptions.forEach(element => {
    //     element.unsubscribe();
    //   });
    // }
  }
}

// https://firestore.googleapis.com/v1beta1/projects/sensor-monitor-5e35f/databases/(default)/documents/datos/0e2270FEA1g0NEv2bZzT


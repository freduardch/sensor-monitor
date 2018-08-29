import { Component, OnInit, OnDestroy } from '@angular/core';
import { DeviceService } from '../../device.service';
import { Subscription } from 'rxjs';
import { Device } from '../../device.model';

@Component({
  selector: 'app-device-monitor',
  templateUrl: './device-monitor.component.html',
  styleUrls: ['./device-monitor.component.scss']
})
export class DeviceMonitorComponent implements OnInit, OnDestroy {
  isLoaded = false;
  subscriptions: Subscription[] = [];
  allDevices: Device[] = [];

  constructor(private deviceService: DeviceService) { }

  ngOnInit() {
    this.subscriptions.push(this.deviceService.getAllMonitoredDevices()
    .subscribe((devices: Device[]) => {
      this.allDevices = devices;
      this.isLoaded = true;
    }));
  }

  ngOnDestroy() {
    if (this.subscriptions.length > 0) {
      this.subscriptions.forEach((subscription: Subscription) => {
        subscription.unsubscribe();
      });
    }
  }

}

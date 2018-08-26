import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { DeviceService } from '../../device.service';
import { Subscription } from 'rxjs';
import { Device } from '../../device.model';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit, OnDestroy {
  dataSource = new MatTableDataSource();

  displayedColumns = ['name', 'location', 'status', 'temperature', 'humidity'];
  subscriptions: Subscription[] = [];

  constructor(private deviceService: DeviceService) { }

  ngOnInit() {
    this.subscriptions.push(this.deviceService.getAllDevices()
      .subscribe((devices: Device[]) => {
        this.dataSource = new MatTableDataSource(devices);
        console.log(this.dataSource);
      }));
  }

  ngOnDestroy() {
    if (this.subscriptions.length > 0) {
      this.subscriptions.forEach((subscription) => {
        subscription.unsubscribe();
      });
    }
  }

}

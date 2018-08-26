import { Component, OnInit, OnDestroy } from '@angular/core';
import { Device } from '../../device.model';
import { Subscription } from 'rxjs';
import { DeviceService } from '../../device.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-device-edit',
  templateUrl: './device-edit.component.html',
  styleUrls: ['./device-edit.component.scss']
})
export class DeviceEditComponent implements OnInit, OnDestroy {
  currentDevice: Device;
  currentDeviceId: string;

  subscriptions: Subscription[] = [];

  constructor(private deviceService: DeviceService,
    private activatedRoute: ActivatedRoute) {
    this.subscriptions.push(
    this.activatedRoute.params.subscribe((param) => {
    this.currentDeviceId = param['id'];
      })
    );
               }

  ngOnInit() {
    this.subscriptions.push(this.deviceService.getDeviceById(this.currentDeviceId)
    .subscribe((device: Device) => {
      this.currentDevice = device;
    }));
  }

  ngOnDestroy() {
  }

  onEditDevice() {

  }

}

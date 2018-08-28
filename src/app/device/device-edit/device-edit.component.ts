import { Component, OnInit, OnDestroy } from '@angular/core';
import { Device } from '../../device.model';
import { Subscription } from 'rxjs';
import { DeviceService } from '../../device.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device-edit',
  templateUrl: './device-edit.component.html',
  styleUrls: ['./device-edit.component.scss']
})
export class DeviceEditComponent implements OnInit, OnDestroy {
  isLoaded = false;
  currentDevice: Device;
  currentDeviceId: string;

  subscriptions: Subscription[] = [];

  constructor(private deviceService: DeviceService,
    private snackbar: MatSnackBar,
    private router: Router,
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

  onEditDevice(form: NgForm) {
    const device: Device = {
      name: form.value.name,
      location: form.value.location,
      isMonitorized: form.value.isMonitorized,
      status: form.value.status,
    };

    // this.deviceService.updateDevice(this.currentDeviceId, device);

    this.snackbar.open('Dispositivo editado exitosamente...', null, {
      duration: 3000
    });

    this.router.navigate(['/device-list']);
  }

}

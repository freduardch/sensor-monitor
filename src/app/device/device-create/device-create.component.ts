import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../../device.service';
import { NgForm } from '@angular/forms';
import { Device } from '../../device.model';
import * as moment from 'moment';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-device-create',
  templateUrl: './device-create.component.html',
  styleUrls: ['./device-create.component.scss']
})
export class DeviceCreateComponent implements OnInit {
  newId: string;
  wasCreated = false;

  constructor(private deviceService: DeviceService,
  public snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  onCreateDevice(form: NgForm) {
    const device: Device = {
      name: form.value.name,
      location: form.value.location,
      status: form.value.status,
      isMonitorized: form.value.isMonitorized,
      creator: 'Freddy Chan',
      dateCreated: moment (Date.now()).valueOf(),
    };

    console.log(device);
    // this.id = this.deviceService.createDevice(device);
    this.newId = '12345678';
    this.wasCreated = true;

    this.snackbar.open('Dispositivo creado...', null, {
      duration: 3000
    });
  }

}

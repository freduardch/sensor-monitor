import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../../device.service';
import { NgForm } from '@angular/forms';
import { Device } from '../../device.model';
import * as moment from 'moment';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device-create',
  templateUrl: './device-create.component.html',
  styleUrls: ['./device-create.component.scss']
})
export class DeviceCreateComponent implements OnInit {
  newId: string;
  wasCreated = false;

  constructor(private deviceService: DeviceService,
  private snackbar: MatSnackBar,
  private router: Router) { }

  ngOnInit() {
  }

  onCreateDevice(form: NgForm) {
    const device: Device = {
      name: form.value.name,
      location: form.value.location,
      status: true,
      isMonitorized: form.value.isMonitorized,
      creator: 'Freddy Chan',
      dateCreated: moment (Date.now()).valueOf(),
      temperatureUnits: form.value.temperatureUnits,
      temperatureLimit: form.value.temperatureLimit,
      humidityLimit: form.value.humidityLimit
    };

    // console.log(device);
    this.newId = this.deviceService.createDevice(device);
    this.wasCreated = true;

    this.snackbar.open('Dispositivo creado exitosamente', null, {
      duration: 3000
    });

    this.router.navigate(['/']);
  }

}

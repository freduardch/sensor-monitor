import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Device } from './device.model';


@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  constructor(private database: AngularFirestore) {}

  /**
   *
   * @param device
   */
  createDevice(device: Device): string {
    const id = this.database.createId();
    this.database.doc<Device>(`devices/${id}`).set({...device});

    return id;
  }

  /**
   *
   * @param device
   */
  updateDevice(id: string, device: Device): string {
    this.database.doc<Device>(`devices/${id}`).update({...device});

    return id;
  }

  /**
   *
   * @param device
   */
  deleteDevice(id: string): string {
    this.database.doc<Device>(`devices/${id}`).delete();

    return id;
  }

  /**
   *
   * @param id
   */
  getDeviceById(id: string): Observable<Device> {
    return this.database.doc<Device>(`devices/${id}`)
    .snapshotChanges()
    .pipe(
      map((document) => {
        return {
          id: document.payload.id,
          name: document.payload.data().name,
          location: document.payload.data().location,
          status: document.payload.data().status,
          temperature: document.payload.data().temperature,
          humidity: document.payload.data().humidity,
          isMonitorized: document.payload.data().isMonitorized,
          dateCreated: document.payload.data().dateCreated,
          creator: document.payload.data().creator,
          temperatureLimit: document.payload.data().temperatureLimit,
          temperatureUnits: document.payload.data().temperatureUnits,
          humidityLimit: document.payload.data().humidityLimit,
          humidityUnits: document.payload.data().humidityUnits,
        };
      }));
  }

  getAllMonitoredDevices(): Observable<Device[]> {
    return this.database.collection<Device>(`devices`,
      ref => ref.where('isMonitorized', '==', true))
      .snapshotChanges()
      .pipe(
        map((docArray) => {
          return docArray.map((document) => {
            return {
              id: document.payload.doc.id,
              name: document.payload.doc.data().name,
              location: document.payload.doc.data().location,
              status: document.payload.doc.data().status,
              temperature: document.payload.doc.data().temperature,
              humidity: document.payload.doc.data().humidity,
              isMonitorized: document.payload.doc.data().isMonitorized,
              dateCreated: document.payload.doc.data().dateCreated,
              creator: document.payload.doc.data().creator,
              temperatureLimit: document.payload.doc.data().temperatureLimit,
              temperatureUnits: document.payload.doc.data().temperatureUnits,
              humidityLimit: document.payload.doc.data().humidityLimit,
              humidityUnits: document.payload.doc.data().humidityUnits,
            };
          });
        }));
  }

  getAllDevices(): Observable<Device[]> {
    return this.database.collection<Device>(`devices`)
      .snapshotChanges()
      .pipe(
        map((docArray) => {
          return docArray.map((document) => {
            return {
              id: document.payload.doc.id,
              name: document.payload.doc.data().name,
              location: document.payload.doc.data().location,
              status: document.payload.doc.data().status,
              temperature: document.payload.doc.data().temperature,
              humidity: document.payload.doc.data().humidity,
              isMonitorized: document.payload.doc.data().isMonitorized,
              dateCreated: document.payload.doc.data().dateCreated,
              creator: document.payload.doc.data().creator,
              temperatureLimit: document.payload.doc.data().temperatureLimit,
              temperatureUnits: document.payload.doc.data().temperatureUnits,
              humidityLimit: document.payload.doc.data().humidityLimit,
              humidityUnits: document.payload.doc.data().humidityUnits,
            };
          });
        }));
  }
}

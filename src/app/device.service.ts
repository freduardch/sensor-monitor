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
   * @param id
   */
  getDeviceById(id: string): Observable<Device> {
    return this.database.doc<Device>(`datos/${id}`)
    .snapshotChanges()
    .pipe(
      map((document) => {
        return {
          info: document.payload.data().info,
        };
      }));
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatDatepickerModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatSlideToggleModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatStepperModule,
  MatTabsModule,
  MatSnackBarModule,
  MatTableModule,
  MatRadioModule,
  MatSortModule,
  MatPaginatorModule,
  MatNativeDateModule,
  MatTooltipModule,
  MatExpansionModule,
  MatSelectModule,
  MatSliderModule,
  MatProgressBarModule,
  MatAutocompleteModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatBadgeModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { AppComponent } from './app.component';
import { DeviceService } from './device.service';
import { ContainerComponent } from './navigation/container/container.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DeviceListComponent } from './device/device-list/device-list.component';
import { DeviceHistoryComponent } from './device/device-history/device-history.component';
import { DeviceConfigComponent } from './device/device-config/device-config.component';
import { DeviceCreateComponent } from './device/device-create/device-create.component';
import { DeviceEditComponent } from './device/device-edit/device-edit.component';
import { DeviceMonitorComponent } from './device/device-monitor/device-monitor.component';

const routes: Routes = [
  { path: '', component: DeviceListComponent },
  // { path: '', component: LoginComponent },
  // { path: 'device-list', component: DeviceListComponent },
  { path: 'device-create', component: DeviceCreateComponent },
  { path: 'device/:id', component: DeviceEditComponent },
  { path: 'device-monitor', component: DeviceMonitorComponent },


];

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    SidenavListComponent,
    LoginComponent,
    DeviceListComponent,
    DeviceHistoryComponent,
    DeviceConfigComponent,
    DeviceCreateComponent,
    DeviceEditComponent,
    DeviceMonitorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatSnackBarModule,
    MatTableModule,
    MatRadioModule,
    MatSortModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatExpansionModule,
    MatSelectModule,
    MatSliderModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatBadgeModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    DeviceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();
  isEmployee: Observable<Boolean>;
  displayName: string;

  constructor() { }

  ngOnInit() {

  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
}

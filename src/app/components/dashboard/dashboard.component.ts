import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  navItems = [{
    icon: 'person',
    label: 'Dashboard',
    path: '/dashboard'
  },
  {
    icon: 'person',
    label: 'Profile',
    path: '/dashboard'
  },
  {
    icon: 'person',
    label: 'Inventory',
    path: '/inventory'
  },
  {
    icon: 'person',
    label: 'Reports',
    path: '/reports'
  }

  ];
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  navItems = [{
    icon: 'person',
    label: 'Dashboard',
    path: '/'
  },
  {
    icon: 'person',
    label: 'Profile',
    path: '/profile'
  },
  {
    icon: 'person',
    label: 'Inventory',
    path: '/viewProduct'
  },
  {
    icon: 'person',
    label: 'Add Product',
    path: '/addProduct'
  },
  
  {
    icon: 'person',
    label: 'Reports',
    path: '/reports'
  }

  ];
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  navigate(path) {

    this.router.navigate([this.route.snapshot.url + '/' + path]);
  }
}

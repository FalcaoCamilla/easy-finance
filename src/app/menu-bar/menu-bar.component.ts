import { Component, OnInit } from '@angular/core';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {MegaMenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  menu: MenuItem[];

  constructor() {
    this.menu = [];
  }

    ngOnInit() {
        this.menu = [
          {
            items: [
              {label: 'Dashboard', icon: 'pi pi-th-large', routerLink: 'dashboard'}
            ]
          },
          {
            label: 'Lançamentos',
            items: [
                {label: 'Receitas', icon: 'pi pi-dollar', routerLink: 'revenue'},
                {label: 'Despesas', icon: 'pi pi-arrow-circle-down', routerLink: 'expense'}
            ]
          },
          {
            label: 'Transação',
            items: [
                {label: 'Lançamentos', icon: 'pi pi-wallet', routerLink: 'account'},
            ]
          }
        ];
    }

}

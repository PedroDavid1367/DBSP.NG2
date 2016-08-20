import { Component, Inject, OnInit, ElementRef }  from "@angular/core";


@Component({
  selector: "dbsp-list",
  template: `
  <dbsp-item *ngFor="let p of persons" 
             [name]="p.name"
             [lastName]="p.lastName">
  </dbsp-item>
  `
})
export class DbspListComponent implements OnInit {

  persons = [
    {
      name: "Pedro",
      lastName: "Fuentes"
    },
    {
      name: "David",
      lastName: "Antezana"
    }
  ];

  ngOnInit() {
  }

}

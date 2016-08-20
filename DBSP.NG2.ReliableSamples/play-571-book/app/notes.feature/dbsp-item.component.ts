import { Component, Inject, OnInit, ElementRef, Input }  from "@angular/core";


@Component({
  selector: "dbsp-item",
  template: `
  <p>{{ name + " " + lastName }}</p>
  `
})
export class DbspItemComponent implements OnInit {

  @Input() name: string;
  @Input() lastName: string;

  ngOnInit() {
  }

}

import { Component, Inject, OnInit, ElementRef, Input }  from "@angular/core";

@Component({
  selector: "dbsp-note-category",
  template: `
  <div class="collapsible-header">
    <i class="material-icons">info_outline</i>{{ title }}
    <span></span>
  </div>
  <div class="collapsible-body"><p>{{ content }}</p></div>
  `
})
export class DbspNoteCategoryComponent implements OnInit {

  @Input() private title: string;
  @Input() private content: string;

  constructor( @Inject("$") private $: any,
    private _elRef: ElementRef) { }

  ngOnInit() {
    this.$(this._elRef.nativeElement)
      .find(".collapsible")
      .collapsible();
  }
}


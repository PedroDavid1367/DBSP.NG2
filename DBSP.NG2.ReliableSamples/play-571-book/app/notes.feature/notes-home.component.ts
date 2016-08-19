import { Component }                from '@angular/core';

@Component({
  selector: "notes-home",
  template: `
  <dbsp-note-category-list></dbsp-note-category-list>
  <hero-list></hero-list>
  `
})
export class NotesHomeComponent {
  
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p4',
  templateUrl: './p4.component.html',
  styleUrls: ['./p4.component.css'],
})
export class P4Component implements OnInit {
  searchText: string = '';

  constructor() {}

  ngOnInit(): void {}

  handleChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement; // Cast to HTMLInputElement to access value
    if (inputElement) {
      this.searchText = inputElement.value;
      if(this.searchText.length > 0){
        console.log(this.searchText);

      }
    }
  }

  onSearch(): void {
    // Implement your search logic here.
    console.log('Searching for:', this.searchText);
  }
}

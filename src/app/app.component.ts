import {Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {ToggleComponent} from "./toggle/toggle.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title="100-day-angular";
  user = {
    name: "Tiep Phan",
    age: 10,
  };

  authors = [
    {
      id: 1,
      firstName: "Flora",
      lastName: "Twell",
      email: "ftwell0@phoca.cz",
      gender: "Female",
      ipAddress: "99.180.237.33",
    },
    {
      id: 2,
      firstName: "Priscella",
      lastName: "Signe",
      email: "psigne1@berkeley.edu",
      gender: "Female",
      ipAddress: "183.243.228.65",
    },
    {
      id: 1,
      firstName: "Flora",
      lastName: "Twell",
      email: "ftwell0@phoca.cz",
      gender: "Female",
      ipAddress: "99.180.237.33",
    },
    {
      id: 1,
      firstName: "Flora",
      lastName: "Twell",
      email: "ftwell0@phoca.cz",
      gender: "Female",
      ipAddress: "99.180.237.33",
    }
    // more data
  ];
// two-way binding
  name = 'Tiep Phan';
  checked = true;
  @ViewChild('chartContainer') container: ElementRef<HTMLDivElement>;
  @ViewChild('toggleComp') toggleComp: ToggleComponent;

  @ViewChildren(ToggleComponent) toggleList: QueryList<ToggleComponent>;
  constructor() { }


  showInfo() {
    alert("Inside Angular Component method");
  }
  ngOnInit(): void {
    console.log(this.container)
  }
  ngAfterViewInit() {
    console.log(this.container, this.toggleList)
  }
  toggleInside() {
    this.toggleComp.toggle();
  }
}

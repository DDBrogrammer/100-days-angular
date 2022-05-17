import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.css']
})
export class NameFormComponent implements OnInit {
  model = {
    name: 'Tiep Phan'
  };

  @ViewChild('nameForm', {
    read: ElementRef,
    static: true
  }) form: ElementRef<HTMLFormElement>;
  constructor() {

  }

  ngOnInit() {
    console.log(this.form)
  }

}

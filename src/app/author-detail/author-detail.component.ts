import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Author} from "../authors";


@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {
  @Input() author : Author | undefined;
  @Output() deleteAuthor = new EventEmitter<Author>();// evenEmitter dùng để  bắn dữ liệu từ component con ra component cha thông qua biến @Output
  handleDelete() {
    this.deleteAuthor.emit(this.author);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

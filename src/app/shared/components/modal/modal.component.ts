import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() user: User = {} as User;
  @Output() toDeleteUser = new EventEmitter<boolean>();
  @Output() toCloseModal = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  closeModal() {
    this.toCloseModal.emit(true);
  }

  deleteUser(): void {
    this.toDeleteUser.emit(true);
  }
}

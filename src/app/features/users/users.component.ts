import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';
import { User } from 'src/app/models/user.model';
import { BroadcastChannelService } from 'src/app/services/broadcast-channel.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  @ViewChild('tableUsers') tableUsers!: ElementRef;
  users: User[] = [];
  showModal = false;
  userSelected: User = {} as User;
  constructor(
    private router: Router,
    private usersService: UsersService,
    private broadcastChannelService: BroadcastChannelService
  ) {
    this.broadcastChannelService.addListener(
      'send-idUser',
      this.handleMessage.bind(this)
    );
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.usersService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  toUserAdd(): void {
    this.router.navigate(['users/add']);
  }

  toEditUser(user: User): void {
    const { id } = user;
    const message = { idUser: id };
    this.broadcastChannelService.sendMessage('send-idUser', { message });
    this.router.navigate(['/users', id]);
  }

  toDeleteUser(user: User): void {
    this.showModal = !this.showModal;
    this.userSelected = user;
  }

  deleteUser(event: boolean): void {
    const { id } = this.userSelected;
    this.usersService.deleteUser(id).subscribe((data) => {
      this.getUsers();
      this.showModal = !this.showModal;
    });
  }

  captureScreenshot(): void {
    html2canvas(this.tableUsers.nativeElement).then((canvas) => {
      const screenshotUrl = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = screenshotUrl;
      a.download = 'listado-usuarios.png';
      a.click();
    });
  }

  private handleMessage(data: any): void {
    const userId = data.message;
    console.log('messages-angular', userId);
  }
}

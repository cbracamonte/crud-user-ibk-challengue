import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  idUser: string | null = '';
  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.idUser = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {}

  getSafeUrl(): SafeResourceUrl {
    const url = `http://localhost:3333/edit?id=${this.idUser}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

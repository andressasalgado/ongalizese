import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule]
})

export class HeaderComponent {
  constructor(private router: Router) {}

  redirectToNovoUsuario(): void {
    this.router.navigate(['/novo-usuario']);
  }

  redirectToHome(): void {
    this.router.navigate(['/home']);
  }

  redirectToListarProjetos(): void {
    this.router.navigate(['/listar-projetos']);
  }
}

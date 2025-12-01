import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { JwtRequestDTO } from '../../models/jwtRequestDTO';
import { LoginService } from '../../services/login-service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Usuarioservice } from '../../services/usuarioservice';

@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, FormsModule, MatInputModule, MatSnackBarModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  
  username: string = '';
  password: string = '';
  mensaje: string = '';

  constructor(
    private loginService: LoginService,
    private usuarioService: Usuarioservice,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  iniciarSesion() {
    let request = new JwtRequestDTO();
    request.username = this.username;
    request.password = this.password;

    this.loginService.login(request).subscribe({
      next: (data: any) => {
        const token = data.jwttoken;
        sessionStorage.setItem('token', token);

        // Leer username del token
        const loggedInUsername = this.loginService.getUsernameFromToken(token);

        if (!loggedInUsername) {
          this.snackBar.open("No se pudo leer el usuario del token", "OK", { duration: 2000 });
          return;
        }

        sessionStorage.setItem("username", loggedInUsername);

        // 🔥 CARGAR USUARIO COMPLETO DESDE BACKEND
        this.usuarioService.list().subscribe(usuarios => {
          const encontrado = usuarios.find(u => u.username === loggedInUsername);

          if (!encontrado) {
            this.snackBar.open("Usuario no encontrado en BD", "OK", { duration: 2000 });
            return;
          }

          // Guardar en sessionStorage el usuario COMPLETO
          sessionStorage.setItem("usuarioSesion", JSON.stringify(encontrado));

          // Ir al dashboard
          this.router.navigate(['miconsumo']);
        });
      },

      error: () => {
        this.mensaje = 'Credenciales incorrectas!!!';
        this.snackBar.open(this.mensaje, 'Aviso', { duration: 2000 });
      }
    });
  }
}

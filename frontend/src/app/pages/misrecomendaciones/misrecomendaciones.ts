import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

import { IAService } from '../../services/IAservice';
import { Recomendacionservice } from '../../services/recomendacionservice';

@Component({
  selector: 'app-misrecomendaciones',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './misrecomendaciones.html',
  styleUrls: ['./misrecomendaciones.css'],
})
export class Misrecomendaciones {

  mensajeUsuario = "";
  cargandoIA = false;

  mensajes: { de: "user" | "ia"; texto: string }[] = [];
  listaRecomendaciones: any[] = [];

  mostrarFormulario = false;
  titulo = "";
  descripcion = "";
  categoria = "";

  constructor(
    private iaService: IAService,
    private rS: Recomendacionservice,
    private router: Router
  ) { }

  ngOnInit() {
    this.cargarRecomendaciones();
  }

  cargarRecomendaciones() {
    this.rS.list().subscribe(data => {
      this.listaRecomendaciones = data;
    });
  }

  toggleFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

  guardarRecomendacion() {
    const nueva: any = {
      idRecomendacion: 0,
      titulo: this.titulo,
      descripcion: this.descripcion,
      categoria: this.categoria,
      meta: null,
      fechapublicacion: new Date(),
      fuente: "EcoGasto IA"
    };

    this.rS.insert(nueva).subscribe(() => {
      this.titulo = "";
      this.descripcion = "";
      this.categoria = "";
      this.mostrarFormulario = false;
      this.cargarRecomendaciones();
    });
  }

  eliminar(id: number) {
    this.rS.delete(id).subscribe(() => {
      this.cargarRecomendaciones();
    });
  }

  // FIX DEFINITIVO AL ERROR (handleEnter)
  handleEnter(event: any) {
    const e = event as KeyboardEvent;

    if (e.shiftKey) return;
    e.preventDefault();
    this.enviarMensaje();
  }

  async enviarMensaje() {
    const msg = this.mensajeUsuario.trim();
    if (!msg) return;

    this.mensajes.push({ de: "user", texto: msg });
    this.mensajeUsuario = "";
    this.cargandoIA = true;

    const respuesta = await this.iaService.generarRecomendacion(msg);

    this.mensajes.push({ de: "ia", texto: respuesta });
    this.cargandoIA = false;
  }
}

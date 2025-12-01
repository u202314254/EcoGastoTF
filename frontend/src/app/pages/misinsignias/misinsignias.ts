import { Component } from '@angular/core';
import { Insigniaservice } from '../../services/insigniaservice';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-misinsignias',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './misinsignias.html',
  styleUrl: './misinsignias.css',
})
export class Misinsignias {

  insignias: any[] = [];

  constructor(private iS: Insigniaservice) { }

  ngOnInit(): void {
    this.iS.list().subscribe((data) => {
      this.insignias = data;
    });
  }

  /** Retorna icono según recurso */
  getIcono(recurso: string) {
    if (!recurso) return 'help';

    recurso = recurso.toLowerCase();

    if (recurso.includes('agua')) return 'water_drop';
    if (recurso.includes('gas')) return 'local_fire_department';
    if (recurso.includes('luz') || recurso.includes('electricidad')) return 'bolt';
    if (recurso.includes('internet')) return 'wifi';
    if (recurso.includes('residuos')) return 'recycling';
    if (recurso.includes('seguridad')) return 'shield';
    if (recurso.includes('alimentacion')) return 'restaurant';

    return 'eco'; // fallback
  }
  getColorIcono(recurso: string) {
    if (!recurso) return '#00a7ff';

    recurso = recurso.toLowerCase();

    if (recurso.includes('agua')) return '#00a7ff';        // celeste
    if (recurso.includes('gas')) return '#e53935';         // rojo 🔥
    if (recurso.includes('luz') || recurso.includes('electricidad'))
      return '#fbc02d';                                    // amarillo ⚡
    if (recurso.includes('internet')) return '#1976d2';
    if (recurso.includes('residuos')) return '#4caf50';
    if (recurso.includes('alimentacion')) return '#ff9800';

    return '#00a7ff';
  }

}

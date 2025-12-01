import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Notificacionservice } from '../../services/notificacionservice';
import { RouterLink } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { NotificacionNoLeidaDTO } from '../../models/NotificacionNoLeidaDTO';

@Component({
  selector: 'app-notificacionnoleida',
  imports: [MatTableModule,CommonModule,MatIconModule,RouterLink],
  templateUrl: './notificacionnoleida.html',
  styleUrl: './notificacionnoleida.css',
})
export class Notificacionnoleida implements OnInit {
  dataSource: MatTableDataSource<NotificacionNoLeidaDTO> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4','c5'];

  constructor(private nS: Notificacionservice) {}

  ngOnInit(): void {
    this.nS.getNotificacionesNoLeidas().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }
}
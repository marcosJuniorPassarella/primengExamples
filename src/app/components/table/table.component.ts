import { CarService } from './../../services/car/car.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { interval } from 'rxjs';
export interface TableDatas {
  color: string;
  id: number;
  name: string;
  pantone_value: string;
  year: number;
}

@UntilDestroy()
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  tableDatas: TableDatas[] = [];
  constructor(private carService: CarService) {}

  ngOnInit(): void {
    interval(1000).pipe(untilDestroyed(this)).subscribe();
    this.getTableDatas();
  }

  getTableDatas() {
    this.carService.getCars().subscribe({
      next: (res) => {
        this.tableDatas.push(res.data);
        console.log(this.tableDatas);
      },
      error: (err) => console.log(err),
    });
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Ims } from '../shared/interface/ims.interface';
import { ListService } from './list.service';

const listMock: Ims[] = [
  {
    dia: 'Ontem',
    data: 1610418975803,
    nome: 'Fernando'
  },
  {
    dia: 'Domingo',
    data: 1430418215803,
    nome: 'Fernando'
  },
  {
    dia: 'Quarta',
    data: 1630418915803,
    nome: 'Fernando'
  }
]

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit, OnDestroy {

  constructor(private listService: ListService) { }

  private ngUnsubscribe: Subject<any> = new Subject();
  public listIms: Ims[] = []

  ngOnInit(): void {

    this.listService.getall()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (data) => this.listIms = data,
        (err) => {
          alert("Algo deu errado")
          console.log(err);
        }
      );
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}


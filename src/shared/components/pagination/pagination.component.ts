import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass']
})
export class PaginationComponent implements OnInit {

  @Input() totalPages : number[] = []
  @Output() readonly currentPage: EventEmitter<void> = new EventEmitter<void>();
  @Output() page: number = 1;
  public actualPage = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {};

  ngOnInit(): void {};

  eventPageClick(current: any):void {
    current = current + 1;
    this.actualPage = current;
    this.currentPage.emit(current);
  }
}

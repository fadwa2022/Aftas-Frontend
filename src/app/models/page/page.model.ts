import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



export interface Page<T> {
  content: T[];
  pageable: {
    pageNumber: number;
    pageSize: number;
  };
  totalElements: number;
}

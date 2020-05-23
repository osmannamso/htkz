import {Component, Input, OnInit} from '@angular/core';
import {Tour} from '../../../interfaces/tour';

@Component({
  selector: 'app-tour-object',
  templateUrl: './tour-object.component.html',
  styleUrls: ['./tour-object.component.scss']
})
export class TourObjectComponent implements OnInit {
  @Input() tours: Array<Tour>;

  constructor() { }

  ngOnInit(): void {
  }

}

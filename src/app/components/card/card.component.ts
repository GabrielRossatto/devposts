import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  
  @Input()
  cardTitle: string = ""
  @Input()
  descriptionNotice: string = ""
  @Input()
  noticeImage: string = ""
  @Input()
  Id: string = "0"


  constructor() { }


  ngOnInit(): void {
  }

}

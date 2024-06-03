import { Component, OnInit } from '@angular/core';
import { DataManagementService } from 'src/services/data-management/data-management.service';
import { DynamicFormModel } from 'src/types-and-interfaces/interfaces';

@Component({
  selector: 'app-represent-data',
  templateUrl: './represent-data.component.html',
  styleUrls: ['./represent-data.component.scss'],
})
export class RepresentDataComponent implements OnInit {
  dynamicControlData!: DynamicFormModel;
  constructor(private dataManagementService: DataManagementService) {}
  ngOnInit(): void {
    this.dataManagementService.getJSON().subscribe((data: DynamicFormModel) => {
      this.dynamicControlData = data;
      debugger;
    });
  }
}

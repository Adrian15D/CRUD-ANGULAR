import { Component } from '@angular/core';
import {Employee} from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  EmployeeArray: Employee[] = [
    {id: 1, name: "Adrian", country: "MEX"},
    {id: 2, name: "Ximena", country: "EUA"},
    {id: 3, name: "Abdul", country: "IND"}
  ];

  selectedEmployee: Employee = {id:0, name: '', country: ''};

  addOrEdit(){
    if(this.selectedEmployee.id === 0){
    this.selectedEmployee.id = this.EmployeeArray.length + 1;
    this.EmployeeArray.push(this.selectedEmployee);
    }



    this.selectedEmployee = new Employee(0,'','');

  }

  openForEdit(employee: Employee){
    this.selectedEmployee = employee;


  } 

  delete(){

    if(confirm('Estas seguro de querer eliminar este dato?')){
    this.EmployeeArray = this.EmployeeArray.filter(x => x != this.selectedEmployee);
    this.selectedEmployee = new Employee(0,'','');
    }
  }

}

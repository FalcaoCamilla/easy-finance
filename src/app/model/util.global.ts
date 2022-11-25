import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class GlobalUtil {

  public getCurrentYear(): number {
    var currentDate = new Date();
    return currentDate.getFullYear();
  }

  public getCurrentMonth(): number {
    var currentDate = new Date();
    return currentDate.getMonth();
  }

  public currentYearMonth(): string{
    var currentDate = new Date();
    var mm = String(currentDate.getMonth() + 1).padStart(2, '0');
    var yyyy = currentDate.getFullYear();
    var currentYearMonth = yyyy + '-' + mm;
    return currentYearMonth;
  }

  public getCurrentDate(): string {
    var currentDate = new Date();
    var dd = String(currentDate.getDate()).padStart(2, '0');
    var mm = String(currentDate.getMonth() + 1).padStart(2, '0');
    var yyyy = currentDate.getFullYear();
    var formatCurrentDate = dd + '/' + mm + '/' + yyyy;
    return formatCurrentDate;
  }

  public getFirstDayMonth(): string {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth();
    var d1 = new Date(currentYear, currentMonth, 1);
    var firstDay = String(d1.getDate() + '/' + (d1.getMonth() + 1) + '/' + d1.getFullYear());
    return firstDay
  }

  public getLastDayMonth(): string {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth();
    var d2 = new Date(currentYear, currentMonth + 1, 0);
    var lastDay = String(d2.getDate() + '/' + (d2.getMonth() + 1) + "/" + d2.getFullYear());
    return lastDay

  }
}

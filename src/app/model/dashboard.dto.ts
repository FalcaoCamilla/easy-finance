import { TotalizersByDay } from "./totalizers.day";
import { TotalizersByMonth } from "./totalizers.month";

export class DashboardDto{
  "totalizersByMonth": TotalizersByMonth;
  "totalizersByDay": TotalizersByDay;
}

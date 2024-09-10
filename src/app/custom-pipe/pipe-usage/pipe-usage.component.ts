import { Component } from '@angular/core';
import { BalancePipe } from '../balance.pipe';

@Component({
  selector: 'app-pipe-usage',
  standalone: true,
  imports: [BalancePipe],
  templateUrl: './pipe-usage.component.html',
})
export class PipeUsageComponent {
  accounts = [
    {
      balance: 155,
      currency: 'PLN',
    },
    {
      balance: 12345,
      currency: 'EUR',
    },
  ];
}

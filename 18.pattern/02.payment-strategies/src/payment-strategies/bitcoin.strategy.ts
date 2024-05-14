import { PaymentStrategy } from './payment-strategy.interface';

export class BitcoinStrategy implements PaymentStrategy {
  async pay(amount: number): Promise<string> {
    // 실제 결제 로직
    console.log(`Paid ${amount} using Bitcoin.`);
    return `Paid ${amount} using Bitcoin.`;
  }
}

import { PaymentStrategy } from './payment-strategy.interface';

export class PaypalStrategy implements PaymentStrategy {
  async pay(amount: number): Promise<string> {
    // 실제 결제 로직
    console.log(`Paid ${amount} using PayPal.`);
    return `Paid ${amount} using PayPal.`;
  }
}

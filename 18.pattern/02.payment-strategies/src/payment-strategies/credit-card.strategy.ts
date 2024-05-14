import { PaymentStrategy } from './payment-strategy.interface';

export class CreditCardStrategy implements PaymentStrategy {
  async pay(amount: number): Promise<string> {
    // 실제 결제 로직
    console.log(`Paid ${amount} using Credit Card.`);
    return `Paid ${amount} using Credit Card.`;
  }
}

import { Injectable } from '@nestjs/common';
import { PaymentStrategy } from './payment-strategies/payment-strategy.interface';
import { CreditCardStrategy } from './payment-strategies/credit-card.strategy';
import { PaypalStrategy } from './payment-strategies/paypal.strategy';
import { BitcoinStrategy } from './payment-strategies/bitcoin.strategy';

@Injectable()
export class PaymentService {
  private strategy: PaymentStrategy;

  resolveStrategy(method: string): PaymentStrategy {
    switch (method) {
      case 'creditCard':
        return new CreditCardStrategy();
      case 'paypal':
        return new PaypalStrategy();
      case 'bitcoin':
        return new BitcoinStrategy();
      default:
        throw new Error('Invalid payment method');
    }
  }

  setStrategy(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  async pay(amount: number): Promise<string> {
    return this.strategy.pay(amount);
  }
}

export class CreatePaymentDto {
  readonly amount: number;
  readonly method: 'creditCard' | 'paypal' | 'bitcoin';
}

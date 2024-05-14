import { Controller, Post, Body } from '@nestjs/common';
import { CreatePaymentDto } from './dto/payment.dto';
import { PaymentService } from './app.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  async pay(@Body() createPaymentDto: CreatePaymentDto): Promise<string> {
    const { amount, method } = createPaymentDto;
    const strategy = this.paymentService.resolveStrategy(method);
    this.paymentService.setStrategy(strategy);
    return this.paymentService.pay(amount);
  }
}

import { Test, TestingModule } from '@nestjs/testing';
import { PaymentController } from './app.controller';
import { PaymentService } from './app.service';

describe('AppController', () => {
  let appController: PaymentController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PaymentController],
      providers: [PaymentService],
    }).compile();

    appController = app.get<PaymentController>(PaymentController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      // expect(appController.pay(null)).toBe('Hello World!');
    });
  });
});

/*
The "pure fabrication" GRASP principle states that in some cases, it may be necessary to create an object to fulfill a responsibility that has no natural home. This can be useful when you need to abstract away a complex piece of functionality or when you want to decouple different parts of your system.
*/
class PaymentService {
  constructor(paymentGateway) {
    this.paymentGateway = paymentGateway;
  }

  async pay(amount, paymentMethod) {
    // Check if the payment method is supported by the payment gateway
    if (!this.paymentGateway.supportsPaymentMethod(paymentMethod)) {
      throw new Error(`Unsupported payment method: ${paymentMethod}`);
    }

    // Use the payment gateway to process the payment
    return this.paymentGateway.processPayment(amount, paymentMethod);
  }
}

class PaymentGateway {
  constructor() {
    this.supportedPaymentMethods = ['credit card', 'debit card'];
  }

  supportsPaymentMethod(paymentMethod) {
    return this.supportedPaymentMethods.includes(paymentMethod);
  }

  async processPayment(amount, paymentMethod) {
    // Implement payment processing logic here
  }
}

const paymentGateway = new PaymentGateway();
const paymentService = new PaymentService(paymentGateway);

// Use the payment service to process a payment
paymentService.pay(100, 'credit card')
  .then(() => console.log('Payment successful'))
  .catch((error) => console.error(error));

/*
PaymentService class is a pure fabrication that serves as an intermediary between the user of the service and the PaymentGateway class, which handles the actual payment processing. The PaymentService class uses the PaymentGateway class to check if the payment method is supported and to process the payment, but it is decoupled from the implementation details of the payment gateway. This allows the payment service to be more flexible and easier to maintain
*/

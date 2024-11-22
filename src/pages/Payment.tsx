import React, { useState } from 'react';
import { CreditCard, Smartphone, Lock, ChevronRight } from 'lucide-react';

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [upiId, setUpiId] = useState('');
  const [processing, setProcessing] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault();
    setProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      window.location.href = '/payment-success';
    }, 2000);
  };

  const paymentMethods = [
    {
      id: 'upi',
      name: 'UPI',
      description: 'Pay using UPI apps',
      icon: Smartphone,
      apps: [
        { id: 'gpay', name: 'Google Pay', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Google_Pay_Logo.svg' },
        { id: 'phonepe', name: 'PhonePe', logo: 'https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png' },
        { id: 'paytm', name: 'Paytm', logo: 'https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png' },
      ],
    },
    {
      id: 'card',
      name: 'Credit/Debit Card',
      description: 'All major cards accepted',
      icon: CreditCard,
    },
    {
      id: 'netbanking',
      name: 'Net Banking',
      description: 'All Indian banks',
      icon: Lock,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Payment</h3>
          <p className="text-sm text-gray-500 mt-1">Amount to pay: ₹1,500.00</p>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className={`border rounded-lg p-4 cursor-pointer transition-all ${
                  paymentMethod === method.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-200'
                }`}
                onClick={() => setPaymentMethod(method.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        paymentMethod === method.id ? 'bg-blue-100' : 'bg-gray-100'
                      }`}
                    >
                      <method.icon
                        className={`w-5 h-5 ${
                          paymentMethod === method.id ? 'text-blue-600' : 'text-gray-600'
                        }`}
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{method.name}</h4>
                      <p className="text-sm text-gray-500">{method.description}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>

                {paymentMethod === method.id && method.id === 'upi' && (
                  <div className="mt-4 space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {method.apps.map((app) => (
                        <button
                          key={app.id}
                          className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50"
                          onClick={() => window.open(`${app.id}://pay`, '_blank')}
                        >
                          <img src={app.logo} alt={app.name} className="h-8 w-auto mb-2" />
                          <span className="text-sm text-gray-600">{app.name}</span>
                        </button>
                      ))}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Or enter UPI ID
                      </label>
                      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                        <input
                          type="text"
                          value={upiId}
                          onChange={(e) => setUpiId(e.target.value)}
                          placeholder="username@upi"
                          className="flex-1 border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <button
                          onClick={handlePayment}
                          disabled={!upiId || processing}
                          className={`px-4 py-2 rounded-md text-white ${
                            processing || !upiId
                              ? 'bg-gray-400 cursor-not-allowed'
                              : 'bg-blue-600 hover:bg-blue-700'
                          }`}
                        >
                          {processing ? 'Processing...' : 'Verify & Pay'}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Other Payment Method Inputs */}
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-gray-200 pt-4">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Lock className="w-4 h-4" />
              <span>Payments are secure and encrypted</span>
            </div>
          </div>
        </div>
      </div>

      {processing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <div className="flex items-center space-x-3">
              <div className="animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent"></div>
              <span className="text-lg">Processing your payment...</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Payment;

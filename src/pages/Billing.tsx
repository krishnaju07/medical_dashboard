import React from 'react';
import { DollarSign, FileText, Calendar, CheckCircle } from 'lucide-react';

function Billing() {
  const invoices = [
    {
      id: 1,
      patient: 'John Doe',
      date: '2024-03-01',
      amount: 150.0,
      status: 'Paid',
      description: 'General Consultation',
    },
    {
      id: 2,
      patient: 'Jane Smith',
      date: '2024-03-05',
      amount: 250.0,
      status: 'Pending',
      description: 'Laboratory Tests',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 rounded-full flex items-center justify-center">
              <DollarSign className="text-blue-600" size={24} />
            </div>
            <div className="ml-3 md:ml-4">
              <p className="text-sm md:text-base font-medium text-gray-600">Total Revenue</p>
              <p className="text-lg md:text-2xl font-semibold text-gray-900">$12,345</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-green-50 rounded-full flex items-center justify-center">
              <CheckCircle className="text-green-600" size={24} />
            </div>
            <div className="ml-3 md:ml-4">
              <p className="text-sm md:text-base font-medium text-gray-600">Paid Invoices</p>
              <p className="text-lg md:text-2xl font-semibold text-gray-900">45</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-50 rounded-full flex items-center justify-center">
              <FileText className="text-yellow-600" size={24} />
            </div>
            <div className="ml-3 md:ml-4">
              <p className="text-sm md:text-base font-medium text-gray-600">Pending Invoices</p>
              <p className="text-lg md:text-2xl font-semibold text-gray-900">12</p>
            </div>
          </div>
        </div>
      </div>

      {/* Invoices Table */}
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="px-4 py-3 md:px-6 md:py-4 border-b border-gray-200">
          <h3 className="text-base md:text-lg font-medium text-gray-900">Recent Invoices</h3>
        </div>
        <div className="overflow-x-auto">
          <div className="min-w-full divide-y divide-gray-200">
            <div className="bg-gray-50 px-4 py-3 md:px-6">
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                <div className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Invoice ID
                </div>
                <div className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Patient
                </div>
                <div className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </div>
                <div className="hidden md:block text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </div>
                <div className="hidden md:block text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </div>
                <div className="hidden md:block text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </div>
              </div>
            </div>
            <div className="bg-white divide-y divide-gray-200">
              {invoices.map((invoice) => (
                <div key={invoice.id} className="px-4 py-3 md:px-6">
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                    <div className="text-sm font-medium text-blue-600">#{invoice.id}</div>
                    <div className="text-sm text-gray-900">{invoice.patient}</div>
                    <div className="text-sm text-gray-500">{invoice.date}</div>
                    <div className="hidden md:block text-sm text-gray-500">{invoice.description}</div>
                    <div className="hidden md:block text-sm font-medium text-gray-900">
                      ${invoice.amount.toFixed(2)}
                    </div>
                    <div className="hidden md:block">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          invoice.status === 'Paid'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {invoice.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billing;

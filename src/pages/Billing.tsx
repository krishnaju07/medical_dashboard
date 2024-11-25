import React from 'react';
import { DollarSign, FileText, Calendar, CheckCircle } from 'lucide-react';

function Billing() {
  const invoices = [
    {
      id: 1,
      patient: 'John Doe',
      date: '2024-03-01',
      amount: 150.00,
      status: 'Paid',
      description: 'General Consultation',
    },
    {
      id: 2,
      patient: 'Jane Smith',
      date: '2024-03-05',
      amount: 250.00,
      status: 'Pending',
      description: 'Laboratory Tests',
    },
    // Add more invoices as needed
  ];

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
              <DollarSign className="text-blue-600" size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-2xl font-semibold text-gray-900">$12,345</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
              <CheckCircle className="text-green-600" size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Paid Invoices</p>
              <p className="text-2xl font-semibold text-gray-900">45</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center">
              <FileText className="text-yellow-600" size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pending Invoices</p>
              <p className="text-2xl font-semibold text-gray-900">12</p>
            </div>
          </div>
        </div>
      </div>

      {/* Invoices Table */}
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Recent Invoices</h3>
        </div>
        <div className="min-w-full divide-y divide-gray-200">
          <div className="bg-gray-50 px-6 py-3">
            <div className="grid grid-cols-6 gap-4">
              <div className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Invoice ID
              </div>
              <div className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Patient
              </div>
              <div className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </div>
              <div className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </div>
              <div className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </div>
              <div className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </div>
            </div>
          </div>
          <div className="bg-white divide-y divide-gray-200">
            {invoices.map((invoice) => (
              <div key={invoice.id} className="px-6 py-4">
                <div className="grid grid-cols-6 gap-4">
                  <div className="text-sm font-medium text-blue-600">#{invoice.id}</div>
                  <div className="text-sm text-gray-900">{invoice.patient}</div>
                  <div className="text-sm text-gray-500">{invoice.date}</div>
                  <div className="text-sm text-gray-500">{invoice.description}</div>
                  <div className="text-sm font-medium text-gray-900">
                    ${invoice.amount.toFixed(2)}
                  </div>
                  <div>
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
  );
}

export default Billing;
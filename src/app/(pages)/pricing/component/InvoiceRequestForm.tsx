'use client';

import React, { useState } from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';

interface InvoiceRequestFormData {
  name: string;
  email: string;
  organization: string;
  plan: string;
  billingCycle: string;
  numberOfMembers: number;
  numberOfPrimaryCooperatives: number;
  numberOfSTACooperatives: number;
  message?: string;
}

const InvoiceRequestForm = () => {
  const [formData, setFormData] = useState<InvoiceRequestFormData>({
    name: '',
    email: '',
    organization: '',
    plan: '',
    billingCycle: 'annual',
    numberOfMembers: 100,
    numberOfPrimaryCooperatives: 5,
    numberOfSTACooperatives: 2,
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/invoice-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        alert('Invoice request submitted successfully! You will receive a confirmation email shortly.');
        setFormData({
          name: '',
          email: '',
          organization: '',
          plan: '',
          billingCycle: 'annual',
          numberOfMembers: 100,
          numberOfPrimaryCooperatives: 5,
          numberOfSTACooperatives: 2,
          message: '',
        });
      } else {
        setSubmitStatus('error');
        alert('There was an error submitting your request. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      alert('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const numericFields = ['numberOfMembers', 'numberOfPrimaryCooperatives', 'numberOfSTACooperatives'];
    setFormData((prev) => ({
      ...prev,
      [name]: numericFields.includes(name) ? parseInt(value, 10) || 0 : value,
    }));
  };

  return (
    <div className="bg-white rounded-2xl p-8">
      <h3 className="text-2xl font-bold mb-6">Request an Invoice</h3>
      
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
          <div className="flex items-center gap-2">
            <IconifyIconClient icon="tabler:check-circle" className="size-5" />
            <span>Invoice request submitted successfully! You will receive a confirmation email shortly.</span>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
          <div className="flex items-center gap-2">
            <IconifyIconClient icon="tabler:alert-circle" className="size-5" />
            <span>There was an error submitting your request. Please try again.</span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="organization" className="block text-sm font-medium mb-2">
            Organization Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            required
            value={formData.organization}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="plan" className="block text-sm font-medium mb-2">
              Plan <span className="text-red-500">*</span>
            </label>
            <select
              id="plan"
              name="plan"
              required
              value={formData.plan}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">Select a plan</option>
              <option value="PRI">Primary Plan</option>
              <option value="STA">STA Plan</option>
              <option value="PARTNER">Partners Plan</option>
            </select>
          </div>

          <div>
            <label htmlFor="billingCycle" className="block text-sm font-medium mb-2">
              Billing Cycle <span className="text-red-500">*</span>
            </label>
            <select
              id="billingCycle"
              name="billingCycle"
              required
              value={formData.billingCycle}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="annual">Annual</option>
              <option value="two-year">2-Year</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="numberOfMembers" className="block text-sm font-medium mb-2">
            Number of Members <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="numberOfMembers"
            name="numberOfMembers"
            required
            min="1"
            value={formData.numberOfMembers}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="numberOfPrimaryCooperatives" className="block text-sm font-medium mb-2">
            Number of Primary Cooperatives <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="numberOfPrimaryCooperatives"
            name="numberOfPrimaryCooperatives"
            required
            min="0"
            value={formData.numberOfPrimaryCooperatives}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="numberOfSTACooperatives" className="block text-sm font-medium mb-2">
            Number of STA Cooperatives <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="numberOfSTACooperatives"
            name="numberOfSTACooperatives"
            required
            min="0"
            value={formData.numberOfSTACooperatives}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Additional Message (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 bg-primary text-dark font-medium rounded-lg transition-all duration-300 hover:bg-dark hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Request Invoice'}
        </button>
      </form>
    </div>
  );
};

export default InvoiceRequestForm;


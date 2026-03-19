'use client';

import { useState, FormEvent } from 'react';
import { X } from 'lucide-react';
import { submitContactForm } from '../lib/supabase';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const inputClass = (hasError: boolean) =>
  `w-full px-3 py-2.5 rounded-md bg-navy-800 border text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-gold font-sans text-sm transition-colors duration-150 ${
    hasError ? 'border-red-500' : 'border-white/[0.10] focus:border-gold/40'
  }`;

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business_type: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^[\d\s\(\)\+\-]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.business_type.trim()) newErrors.business_type = 'Business type is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      await submitContactForm(formData);
      setSubmitSuccess(true);
      setTimeout(() => {
        onClose();
        setSubmitSuccess(false);
        setFormData({ name: '', email: '', phone: '', business_type: '', message: '' });
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ submit: 'Failed to submit form. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
      setErrors({});
      setSubmitSuccess(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 animate-fade-in"
        onClick={handleClose}
      />
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <div
            className="relative w-full max-w-md bg-navy-900 border border-white/[0.08] rounded-xl shadow-2xl shadow-black/60 animate-modal-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.07]">
              <h2 className="text-lg font-bold text-white font-heading tracking-tight">
                Book Your Reality Check Call
              </h2>
              <button
                onClick={handleClose}
                disabled={isSubmitting}
                className="text-slate-500 hover:text-white transition-colors disabled:opacity-50 p-1 rounded-md hover:bg-white/[0.05]"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {submitSuccess ? (
              <div className="px-6 py-10 text-center">
                <div className="w-14 h-14 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-white mb-2 font-heading">Thanks for reaching out!</h3>
                <p className="text-sm text-slate-400 font-sans">I&apos;ll be in touch soon to schedule your call.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5 font-sans">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputClass(!!errors.name)}
                    disabled={isSubmitting}
                    placeholder="John Smith"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-400 font-sans">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5 font-sans">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClass(!!errors.email)}
                    disabled={isSubmitting}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-400 font-sans">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5 font-sans">
                    Phone <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={inputClass(!!errors.phone)}
                    disabled={isSubmitting}
                    placeholder="0400 000 000"
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-400 font-sans">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="business_type" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5 font-sans">
                    Business Type <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="business_type"
                    value={formData.business_type}
                    onChange={(e) => setFormData({ ...formData, business_type: e.target.value })}
                    className={inputClass(!!errors.business_type)}
                    disabled={isSubmitting}
                  >
                    <option value="">Select your business type</option>
                    <option value="tradie">Tradie</option>
                    <option value="service_business">Service Business</option>
                    <option value="retail">Retail</option>
                    <option value="hospitality">Hospitality</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.business_type && <p className="mt-1 text-xs text-red-400 font-sans">{errors.business_type}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5 font-sans">
                    Message <span className="text-slate-600">(Optional)</span>
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-md bg-navy-800 border border-white/[0.10] text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold/40 font-sans text-sm transition-colors duration-150 resize-none"
                    disabled={isSubmitting}
                    placeholder="Tell me a bit about your business..."
                  />
                </div>

                {errors.submit && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-md">
                    <p className="text-sm text-red-400 font-sans">{errors.submit}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gold-flat-btn py-3 text-sm font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

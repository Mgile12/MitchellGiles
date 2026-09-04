'use client';

import { useEffect, useState, FormEvent } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { X } from 'lucide-react';
import { submitContactForm } from '../lib/supabase';

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const inputClass = (hasError: boolean) =>
  `w-full px-3 py-2.5 rounded-md bg-navy-800 border text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-gold font-sans text-sm transition-colors duration-150 ${
    hasError ? 'border-red-500' : 'border-white/[0.10] focus:border-gold/40'
  }`;

const EMPTY = { name: '', email: '', phone: '', business_type: '', message: '' };

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState(EMPTY);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const reduce = useReducedMotion();

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
        setFormData(EMPTY);
      }, 2400);
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ submit: 'Failed to submit form. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (isSubmitting) return;
    onClose();
    setErrors({});
    setSubmitSuccess(false);
  };

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !isSubmitting) {
        onClose();
        setErrors({});
        setSubmitSuccess(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, isSubmitting, onClose]);

  const panelHidden = { opacity: 0, transform: reduce ? 'scale(1)' : 'scale(0.97)' };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="contact-modal"
          className="fixed inset-0 z-50 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.15, ease: EASE_OUT } }}
          transition={{ duration: 0.2, ease: EASE_OUT }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={handleClose} aria-hidden="true" />

          <div className="relative flex min-h-full items-center justify-center p-4 pointer-events-none">
            <motion.div
              className="pointer-events-auto relative w-full max-w-md bg-navy-900 border border-white/[0.08] rounded-xl shadow-2xl shadow-black/60"
              initial={panelHidden}
              animate={{ opacity: 1, transform: 'scale(1)' }}
              exit={{ ...panelHidden, transition: { duration: 0.15, ease: EASE_OUT } }}
              transition={{ duration: 0.2, ease: EASE_OUT }}
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.07]">
                <h2 id="contact-modal-title" className="text-lg font-bold text-white font-heading tracking-tight">
                  Book a 15-minute call
                </h2>
                <button
                  onClick={handleClose}
                  disabled={isSubmitting}
                  className="press text-slate-500 hover:text-white disabled:opacity-50 p-1 rounded-md hover:bg-white/[0.05]"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>

              <AnimatePresence mode="wait" initial={false}>
                {submitSuccess ? (
                  <motion.div
                    key="thanks"
                    className="px-6 py-10 min-h-[360px] flex flex-col items-center justify-center text-center"
                    initial={{ opacity: 0, transform: reduce ? 'scale(1)' : 'scale(0.96)' }}
                    animate={{ opacity: 1, transform: 'scale(1)' }}
                    exit={{ opacity: 0, transition: { duration: 0.12, ease: EASE_OUT } }}
                    transition={{ duration: 0.3, ease: EASE_OUT }}
                    role="status"
                  >
                    <div className="tick-ring w-14 h-14 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          className="tick-draw"
                          pathLength={1}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-base font-bold text-white mb-2 font-heading">Thanks. That&apos;s through.</h3>
                    <p className="text-sm text-slate-400 font-sans">I&apos;ll be in touch to lock in a time.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="px-6 py-6 space-y-4"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.12, ease: EASE_OUT } }}
                  >
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
                      aria-busy={isSubmitting}
                      className="relative w-full gold-flat-btn py-3 text-sm font-semibold rounded-lg disabled:cursor-not-allowed"
                    >
                      <span className={`btn-label ${isSubmitting ? 'is-busy' : ''}`}>Send</span>
                      <span className={`btn-spinner ${isSubmitting ? 'is-busy' : ''}`} aria-hidden="true" />
                      {isSubmitting && <span className="sr-only">Sending</span>}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

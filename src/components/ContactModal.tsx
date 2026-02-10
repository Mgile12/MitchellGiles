import { useState, FormEvent } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { submitContactForm } from '../lib/supabase';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

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

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

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

    if (!formData.business_type.trim()) {
      newErrors.business_type = 'Business type is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await submitContactForm(formData);
      setSubmitSuccess(true);
      setTimeout(() => {
        onClose();
        setSubmitSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          business_type: '',
          message: '',
        });
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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 z-40"
            onClick={handleClose}
          />
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="relative w-full max-w-md bg-white rounded-lg shadow-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
                  <h2 className="text-xl font-semibold text-slate-900">
                    Book Your Reality Check Call
                  </h2>
                  <button
                    onClick={handleClose}
                    disabled={isSubmitting}
                    className="text-slate-400 hover:text-slate-600 transition-colors disabled:opacity-50"
                    aria-label="Close modal"
                  >
                    <X size={24} />
                  </button>
                </div>

                {submitSuccess ? (
                  <div className="px-6 py-8 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      Thanks for reaching out!
                    </h3>
                    <p className="text-slate-600">
                      I'll be in touch soon to schedule your call.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700 mb-1"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gold ${
                          errors.name
                            ? 'border-red-500'
                            : 'border-slate-300'
                        }`}
                        disabled={isSubmitting}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-700 mb-1"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gold ${
                          errors.email
                            ? 'border-red-500'
                            : 'border-slate-300'
                        }`}
                        disabled={isSubmitting}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-slate-700 mb-1"
                      >
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gold ${
                          errors.phone
                            ? 'border-red-500'
                            : 'border-slate-300'
                        }`}
                        disabled={isSubmitting}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="business_type"
                        className="block text-sm font-medium text-slate-700 mb-1"
                      >
                        Business Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="business_type"
                        value={formData.business_type}
                        onChange={(e) =>
                          setFormData({ ...formData, business_type: e.target.value })
                        }
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gold ${
                          errors.business_type
                            ? 'border-red-500'
                            : 'border-slate-300'
                        }`}
                        disabled={isSubmitting}
                      >
                        <option value="">Select your business type</option>
                        <option value="tradie">Tradie</option>
                        <option value="service_business">Service Business</option>
                        <option value="retail">Retail</option>
                        <option value="hospitality">Hospitality</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.business_type && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.business_type}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-slate-700 mb-1"
                      >
                        Message (Optional)
                      </label>
                      <textarea
                        id="message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                        disabled={isSubmitting}
                        placeholder="Tell me a bit about your business..."
                      />
                    </div>

                    {errors.submit && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                        <p className="text-sm text-red-700">{errors.submit}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-5 py-2.5 text-sm font-semibold bg-gold text-navy-950 rounded-lg hover:bg-gold-dark hover:shadow-lg transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

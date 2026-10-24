import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MessageSquare,
  Send,
  Check,
  Copy,
  ExternalLink,
  AlertCircle,
  Briefcase,
  Shield,
  Clock,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO, SERVICES } from '../data/portfolioData';
import { ContactFormData, ContactFormErrors } from '../types';
import { supabase } from '../lib/supabase';

interface ContactProps {
  preSelectedService: string;
}

export const Contact: React.FC<ContactProps> = ({ preSelectedService }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    service: preSelectedService || 'Offensive Security & Penetration Testing',
    projectDetails: '',
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submissionError, setSubmissionError] = useState('');

  useEffect(() => {
    if (preSelectedService) {
      setFormData((prev) => ({ ...prev, service: preSelectedService }));
    }
  }, [preSelectedService]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phoneDisplay);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const validate = (): boolean => {
    const newErrors: ContactFormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.service) {
      newErrors.service = 'Please choose a service of interest.';
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Please provide a brief summary of your project or requirements.';
    } else if (formData.projectDetails.trim().length < 10) {
      newErrors.projectDetails = 'Please enter at least 10 characters to outline your project.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionError('');

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_inquiries')
        .insert({
          full_name: formData.fullName.trim(),
          email: formData.email.trim().toLowerCase(),
          service: formData.service,
          project_details: formData.projectDetails.trim(),
        });

      if (error) {
        throw error;
      }

      // Only show confirmation after Supabase successfully saves.
      setIsSubmitted(true);
    } catch (error) {
      console.error('Failed to save contact inquiry:', error);

      setSubmissionError(
        'We could not save your inquiry. Please try again or contact us directly by email or WhatsApp.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };


const handleReset = () => {
  setIsSubmitted(false);
  setSubmissionError('');

  setFormData({
    fullName: '',
    email: '',
    service:
      preSelectedService ||
      'Offensive Security & Penetration Testing',
    projectDetails: '',
  });

  setErrors({});
};
  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-white via-[#F5F8FC]/50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-18">
          <div className="text-xs font-bold tracking-wider text-blue-600 uppercase mb-2">
            GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
            Let's Build Something Secure and Exceptional.
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Have a website to build, a security concern to investigate, or a technical challenge to solve? Let's discuss your requirements and explore the right solution.
          </p>
        </div>

        {/* Contact Layout: Info Column + Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Left Column: Direct Channels & Verified Credentials */}
          <div className="lg:col-span-5 space-y-5">

            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-300 transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors p-1.5"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-teal-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Direct Email
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-base sm:text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors block mt-1 break-all"
              >
                {PERSONAL_INFO.email}
              </a>
              <p className="text-xs text-slate-500 mt-2">
                Click to open your primary mail client with pre-filled headers.
              </p>
            </div>

            {/* WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-teal-300 transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors p-1.5"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-teal-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Phone / WhatsApp
              </div>
              <a
                href={PERSONAL_INFO.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-bold text-slate-900 hover:text-teal-600 transition-colors inline-flex items-center gap-2 mt-1"
              >
                <span>{PERSONAL_INFO.phoneDisplay}</span>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </a>
              <p className="text-xs text-slate-500 mt-2">
                Direct chat via WhatsApp without saving contacts first.
              </p>
            </div>

            {/* Role & Services Summary Card */}
            <div className="p-6 rounded-2xl bg-slate-900 text-white shadow-md">
              <div className="flex items-center gap-2 text-xs font-mono text-teal-400 mb-3">
                <Briefcase className="w-4 h-4" />
                <span>{PERSONAL_INFO.companyRole}</span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Scope of Specialized Engagements
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {PERSONAL_INFO.servicesSummary}
              </p>
              <div className="mt-4 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400 font-mono">
                <Shield className="w-3.5 h-3.5 text-blue-400" />
                <span>Authorized Security & Engineering</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-9 shadow-sm">
            {isSubmitted ? (
              /* Submission Confirmation State */
              <div className="py-8 text-center space-y-5">
                <div className="w-16 h-16 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-950">
                    Inquiry Saved Successfully
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                    Your project inquiry has been saved successfully. You can also contact us
                    directly by email or WhatsApp if you would like to discuss your requirements.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-left text-xs space-y-2 max-w-md mx-auto font-mono">
                  <div><span className="text-slate-400">Client:</span> {formData.fullName} ({formData.email})</div>
                  <div><span className="text-slate-400">Service:</span> {formData.service}</div>
                  <div className="truncate"><span className="text-slate-400">Brief:</span> {formData.projectDetails}</div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
                      `Project Inquiry: ${formData.service} - ${formData.fullName}`
                    )}&body=${encodeURIComponent(
                      `Name: ${formData.fullName}\nEmail: ${formData.email}\nService: ${formData.service}\n\nProject Details:\n${formData.projectDetails}`
                    )}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Open in Email App</span>
                  </a>

                  <a
                    href={`https://wa.me/${PERSONAL_INFO.phoneRaw}?text=${encodeURIComponent(
                      `Hello Adil, my name is ${formData.fullName} (${formData.email}). I am interested in "${formData.service}". Brief: ${formData.projectDetails}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              /* Contact Form Input State */
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-slate-950">
                    Project Inquiry Form
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Please provide project details to receive a targeted technical proposal.
                  </p>
                </div>

                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                    }}
                    placeholder="e.g. Adil Aslam"
                    className={`w-full px-4 py-2.5 text-sm rounded-xl border bg-white text-slate-900 transition-colors focus:outline-none ${errors.fullName
                      ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                      : 'border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600'
                      }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="adil@company.com"
                    className={`w-full px-4 py-2.5 text-sm rounded-xl border bg-white text-slate-900 transition-colors focus:outline-none ${errors.email
                      ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                      : 'border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600'
                      }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Service Interested In */}
                <div>
                  <label htmlFor="service" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Service Interested In <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={(e) => {
                      setFormData({ ...formData, service: e.target.value });
                      if (errors.service) setErrors({ ...errors, service: undefined });
                    }}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-900 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    {formData.service && !SERVICES.some((s) => s.title === formData.service) && (
                      <option value={formData.service}>{formData.service}</option>
                    )}
                    <option value="General Technical Consultation">General Technical Consultation</option>
                    <option value="SecStackHQ Business Partnership">SecStackHQ Business Partnership</option>
                  </select>
                </div>

                {/* Project Details */}
                <div>
                  <label htmlFor="projectDetails" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Project Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    rows={4}
                    value={formData.projectDetails}
                    onChange={(e) => {
                      setFormData({ ...formData, projectDetails: e.target.value });
                      if (errors.projectDetails) setErrors({ ...errors, projectDetails: undefined });
                    }}
                    placeholder="Outline your application stack, timeline, objectives, or security scope..."
                    className={`w-full px-4 py-2.5 text-sm rounded-xl border bg-white text-slate-900 transition-colors focus:outline-none resize-y ${errors.projectDetails
                      ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                      : 'border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600'
                      }`}
                  />
                  {errors.projectDetails && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.projectDetails}</span>
                    </p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-xs hover:shadow-md transition-all disabled:opacity-60 focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Saving Inquiry...</span>                      </>
                    ) : (
                      <>
                        <span>Send Project Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-slate-600 text-center mt-2.5">
                    Direct confidential dispatch. No promotional spam or data harvesting.
                  </p>
                </div>

                {submissionError && (
                  <div
                    role="alert"
                    className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
                  >
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    <p>{submissionError}</p>
                  </div>
                )}

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

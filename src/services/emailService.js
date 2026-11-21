/**
 * Secure Email Service for Syed Aman Mirzanullah's Portfolio
 * Handles email delivery via client-side email dispatch (Web3Forms / Formspree / EmailJS)
 * without exposing SMTP credentials or private server secrets.
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validates the contact form fields.
 * Returns an errors object where empty means valid.
 */
export function validateContactForm({ name, email, message }) {
  const errors = {};

  const trimmedName = (name || '').trim();
  if (!trimmedName) {
    errors.name = 'Please enter your name.';
  } else if (trimmedName.length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  const trimmedEmail = (email || '').trim();
  if (!trimmedEmail) {
    errors.email = 'Please enter your email address.';
  } else if (!EMAIL_REGEX.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address (e.g. name@example.com).';
  }

  const trimmedMessage = (message || '').trim();
  if (!trimmedMessage) {
    errors.message = 'Please enter your message.';
  } else if (trimmedMessage.length < 10) {
    errors.message = 'Message must be at least 10 characters long.';
  }

  return errors;
}

/**
 * Sends the contact form submission.
 * Uses Web3Forms if valid key is set, or graceful mock delivery.
 */
export async function sendContactEmail({ name, email, subject, message, botcheck }) {
  // Anti-spam honeypot detection
  if (botcheck) {
    return {
      success: true,
      message: 'Message delivered successfully.'
    };
  }

  const trimmedName = (name || '').trim();
  const trimmedEmail = (email || '').trim();
  const trimmedMessage = (message || '').trim();
  const emailSubject = (subject || '').trim() || `Portfolio Contact Inquiry from ${trimmedName}`;

  // Environment variables
  const web3FormsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  const formspreeId = import.meta.env.VITE_FORMSPREE_ID;

  // 1. Web3Forms Integration
  if (web3FormsKey && web3FormsKey !== 'your_web3forms_access_key') {
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: web3FormsKey,
          name: trimmedName,
          email: trimmedEmail,
          subject: emailSubject,
          message: trimmedMessage,
          from_name: `${trimmedName} (Portfolio Contact)`,
          botcheck: false
        })
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        return {
          success: true,
          message: 'Thank you! Your message has been sent directly to Syed Aman Mirzanullah. You will receive a response shortly.'
        };
      }

      throw new Error(data.message || 'Unable to deliver message through Web3Forms.');
    } catch (err) {
      throw new Error(err.message || 'Network error while sending message. Please try again or use direct email.');
    }
  }

  // 2. Formspree Integration
  if (formspreeId && formspreeId !== 'your_formspree_form_id') {
    try {
      const endpoint = formspreeId.startsWith('http')
        ? formspreeId
        : `https://formspree.io/f/${formspreeId}`;

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          _subject: emailSubject,
          message: trimmedMessage
        })
      });

      if (response.ok) {
        return {
          success: true,
          message: 'Thank you! Your inquiry has been sent to Syed Aman Mirzanullah.'
        };
      }

      throw new Error('Formspree dispatch failed.');
    } catch (err) {
      throw new Error(err.message || 'Could not send message via Formspree.');
    }
  }

  // Fallback: If no provider is configured, guide user to direct mailto
  return {
    success: true,
    message: 'Thank you! Your inquiry details are ready. Click the Direct Email link to send via your mail client.',
    fallbackToMailto: true,
    mailtoUrl: `mailto:syedamanmirzanulla@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(`From: ${trimmedName} (${trimmedEmail})\n\n${trimmedMessage}`)}`
  };
}

/**
 * Secure Email Service for Syed Aman's Portfolio
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
    errors.email = 'Please enter a valid email address (e.g. alex@example.com).';
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
 * Sends the contact form submission to Syed Aman's inbox.
 * Prioritizes Web3Forms, followed by Formspree and EmailJS REST endpoints.
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
  const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

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
          message: 'Thank you! Your message has been sent directly to Syed Aman. You will receive a response shortly.'
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
          message: 'Thank you! Your message has been sent directly to Syed Aman. You will receive a response shortly.'
        };
      }

      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.error || 'Formspree submission failed. Please try direct email.');
    } catch (err) {
      throw new Error(err.message || 'Network error while communicating with Formspree.');
    }
  }

  // 3. EmailJS REST API Integration
  if (
    emailJsServiceId &&
    emailJsTemplateId &&
    emailJsPublicKey &&
    emailJsServiceId !== 'your_service_id'
  ) {
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          service_id: emailJsServiceId,
          template_id: emailJsTemplateId,
          user_id: emailJsPublicKey,
          template_params: {
            from_name: trimmedName,
            from_email: trimmedEmail,
            reply_to: trimmedEmail,
            subject: emailSubject,
            message: trimmedMessage,
            to_email: 'syedamanmirzanulla@gmail.com'
          }
        })
      });

      if (response.ok) {
        return {
          success: true,
          message: 'Thank you! Your message has been sent directly to Syed Aman. You will receive a response shortly.'
        };
      }

      const errText = await response.text().catch(() => '');
      throw new Error(errText || 'EmailJS delivery failed. Please try direct email.');
    } catch (err) {
      throw new Error(err.message || 'Network error while contacting EmailJS service.');
    }
  }

  // If no environment variable is configured in the environment
  throw new Error(
    'Email service access key is not yet configured in environment variables (VITE_WEB3FORMS_ACCESS_KEY). Please add your key to .env, or click the direct "Email Me" button below.'
  );
}

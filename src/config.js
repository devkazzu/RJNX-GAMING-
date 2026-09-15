/**
 * ─────────────────────────────────────────────────────────────
 *  RJNX — Site Configuration
 *  Edit the values below to update links and contact details
 *  across the entire website. No other file needs changing.
 * ─────────────────────────────────────────────────────────────
 */

export const siteConfig = {
  // Brand
  brandName: 'RJNX',
  ownerName: 'Raju Mahato',
  tagline: 'Gaming • Creativity • Technology',
  location: 'Assam, India',

  // Links
  links: {
    youtube: 'https://www.youtube.com/@rjnxgaming',
    github: 'https://github.com/devkazzu',
    // Instagram is only shown in the footer when a real URL is provided.
    // Example: instagram: 'https://www.instagram.com/your_handle'
    instagram: '',
  },

  // Contact
  // Replace 'YOUR_EMAIL_HERE' with a real address (e.g. 'hello@example.com')
  // to enable the contact form's send button (it opens the visitor's
  // email app pre-filled with their message).
  contactEmail: 'YOUR_EMAIL_HERE',

  // YouTube channel handle shown around the site
  youtubeHandle: 'rjnxgaming',
}

export const isEmailConfigured = () =>
  Boolean(siteConfig.contactEmail) &&
  siteConfig.contactEmail !== 'YOUR_EMAIL_HERE' &&
  siteConfig.contactEmail.includes('@')

'use client';

import { Phone, MapPin, Clock, CheckCircle, Star, Zap, Shield, Leaf } from 'lucide-react';

export default function CleaningPro() {
  return (
    <div style={{ background: '#f8f9fa' }}>
      {/* Navigation */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem 2rem',
        background: 'white',
        borderBottom: '1px solid #e0e0e0',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1b5e20' }}>Cleaning Pro</h1>
        <a href="tel:6085551234" style={{
          background: '#1b5e20',
          color: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: '0.5rem',
          fontWeight: 600,
          fontSize: '0.95rem'
        }}>Call Now</a>
      </nav>

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%)',
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, marginBottom: '1rem' }}>
          Professional Cleaning That Transforms Spaces
        </h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.95, maxWidth: '600px', margin: '0 auto 2rem' }}>
          Residential & commercial cleaning with eco-friendly products. Licensed, insured, and guaranteed satisfaction.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="tel:6085551234" style={{
            background: '#fff',
            color: '#1b5e20',
            padding: '1rem 2rem',
            borderRadius: '0.5rem',
            fontWeight: 700,
            textDecoration: 'none',
            fontSize: '1rem'
          }}>Get Free Estimate</a>
          <a href="#services" style={{
            border: '2px solid white',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '0.5rem',
            fontWeight: 700,
            textDecoration: 'none',
            fontSize: '1rem'
          }}>See Services</a>
        </div>
      </section>

      {/* Trust Badges */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1.5rem',
        padding: '2rem',
        background: 'white',
        borderBottom: '1px solid #e0e0e0'
      }}>
        <div style={{ textAlign: 'center' }}>
          <Shield style={{ width: '2.5rem', height: '2.5rem', color: '#1b5e20', margin: '0 auto 0.5rem' }} />
          <h3 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Fully Insured</h3>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>Licensed & bonded</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Leaf style={{ width: '2.5rem', height: '2.5rem', color: '#1b5e20', margin: '0 auto 0.5rem' }} />
          <h3 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Eco-Friendly</h3>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>Safe for pets & kids</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <CheckCircle style={{ width: '2.5rem', height: '2.5rem', color: '#1b5e20', margin: '0 auto 0.5rem' }} />
          <h3 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Satisfaction Guaranteed</h3>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>100% guarantee</p>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ padding: '3rem 2rem' }}>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, textAlign: 'center', marginBottom: '3rem' }}>
          Our Services
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {[
            { title: 'Residential Cleaning', desc: 'Weekly, bi-weekly, or monthly service. Kitchen, bathrooms, bedrooms, living spaces.' },
            { title: 'Deep Clean', desc: 'Complete top-to-bottom cleaning. Baseboards, windows, inside appliances, carpets.' },
            { title: 'Commercial Office', desc: 'Professional office cleaning. Daily or weekly. Disinfection included.' },
            { title: 'Move-In/Out Cleaning', desc: 'Prepare your new space or leave your old one spotless.' },
            { title: 'Carpet & Upholstery', desc: 'Professional steam cleaning. Stain removal. Pet-friendly treatments.' },
            { title: 'Post-Construction', desc: 'Dust, debris, windows. We prepare spaces after renovation.' }
          ].map((service, i) => (
            <div key={i} style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              border: '1px solid #e0e0e0'
            }}>
              <Zap style={{ width: '1.5rem', height: '1.5rem', color: '#1b5e20', marginBottom: '0.5rem' }} />
              <h3 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>{service.title}</h3>
              <p style={{ color: '#666', fontSize: '0.95rem' }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: '3rem 2rem', background: 'white', borderTop: '1px solid #e0e0e0', borderBottom: '1px solid #e0e0e0' }}>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, textAlign: 'center', marginBottom: '3rem' }}>
          Simple, Transparent Pricing
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {[
            { name: '2-Bedroom Home', price: '$89', time: '2 hours' },
            { name: '3-Bedroom Home', price: '$129', time: '3 hours' },
            { name: '4+ Bedroom Home', price: '$179', time: '4 hours' },
            { name: 'Deep Clean (2BR)', price: '$159', time: '4 hours' },
            { name: 'Office (500 sq ft)', price: '$199', time: '3 hours' },
            { name: 'Move-Out Clean', price: '$299+', time: 'varies' }
          ].map((pkg, i) => (
            <div key={i} style={{
              background: '#f8f9fa',
              padding: '2rem',
              borderRadius: '0.5rem',
              border: '1px solid #e0e0e0',
              textAlign: 'center'
            }}>
              <h3 style={{ fontWeight: 600, marginBottom: '1rem' }}>{pkg.name}</h3>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: '#1b5e20', marginBottom: '0.5rem' }}>{pkg.price}</div>
              <p style={{ color: '#666', marginBottom: '1rem' }}>{pkg.time}</p>
              <button style={{
                background: '#1b5e20',
                color: 'white',
                padding: '0.75rem 1.5rem',
                border: 'none',
                borderRadius: '0.5rem',
                fontWeight: 600,
                cursor: 'pointer',
                width: '100%'
              }}>Request Quote</button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '3rem 2rem' }}>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, textAlign: 'center', marginBottom: '3rem' }}>
          What Clients Say
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {[
            { name: 'Sarah M.', text: 'Best cleaning service in Madison! They\'re reliable, thorough, and the team is so friendly. Highly recommend.' },
            { name: 'James K.', text: 'Professional, punctual, and detailed. My office looks amazing every single week. Worth every penny.' },
            { name: 'Maria L.', text: 'I was skeptical about eco-friendly cleaning but they proved it works just as well. Very satisfied.' }
          ].map((testimonial, i) => (
            <div key={i} style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '0.5rem',
              border: '1px solid #e0e0e0'
            }}>
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                {[...Array(5)].map((_, j) => (
                  <Star key={j} style={{ width: '1rem', height: '1rem', fill: '#ffd700', color: '#ffd700' }} />
                ))}
              </div>
              <p style={{ marginBottom: '1rem', color: '#333' }}>"{testimonial.text}"</p>
              <p style={{ fontWeight: 600, color: '#1b5e20' }}>— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%)',
        color: 'white',
        padding: '3rem 2rem',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>
          Ready for a Cleaner Space?
        </h2>
        <p style={{ fontSize: '1.05rem', marginBottom: '2rem', opacity: 0.95 }}>
          Free estimates. Same-day availability. Licensed, insured, eco-friendly.
        </p>
        <a href="tel:6085551234" style={{
          background: 'white',
          color: '#1b5e20',
          padding: '1rem 2rem',
          borderRadius: '0.5rem',
          fontWeight: 700,
          textDecoration: 'none',
          fontSize: '1.05rem',
          display: 'inline-block'
        }}>Call (608) 555-1234 Today</a>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#1a1c1b',
        color: 'white',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem',
          maxWidth: '900px',
          margin: '0 auto 2rem'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', justifyContent: 'center' }}>
              <Phone style={{ width: '1.2rem', height: '1.2rem' }} />
              <span style={{ fontWeight: 600 }}>(608) 555-1234</span>
            </div>
            <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Monday–Sunday, 8 AM–8 PM</p>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', justifyContent: 'center' }}>
              <MapPin style={{ width: '1.2rem', height: '1.2rem' }} />
              <span style={{ fontWeight: 600 }}>Madison, WI</span>
            </div>
            <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Service area: 15-mile radius</p>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', justifyContent: 'center' }}>
              <CheckCircle style={{ width: '1.2rem', height: '1.2rem' }} />
              <span style={{ fontWeight: 600 }}>Licensed & Insured</span>
            </div>
            <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Eco-friendly products</p>
          </div>
        </div>
        <p style={{ borderTop: '1px solid #333', paddingTop: '2rem', fontSize: '0.9rem', opacity: 0.7 }}>
          © 2026 Cleaning Pro. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

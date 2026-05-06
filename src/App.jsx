import { useState, useEffect } from 'react'
import { 
  Menu, X, GraduationCap, BookOpen, Users, Award, 
  Clock, MapPin, Phone, Mail, ArrowRight, Star, Calendar,
  School, Heart, Globe, Music, Palette, Trophy, Play
} from 'lucide-react'
import './App.css'
import schoolImage from './assets/mainImage.jpeg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home', active: true },
    { name: 'About Us', href: '#about' },
    { name: 'Academics', href: '#programs' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Campus Life', href: '#campus' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'News & Events', href: '#news' },
    { name: 'Contact', href: '#contact' },
  ]

  const programs = [
    {
      icon: <School size={40} />,
      title: 'Early Childhood',
      description: 'Nurturing young minds ages 3-5 with play-based learning and foundational skills.',
      color: '#FF6B6B'
    },
    {
      icon: <BookOpen size={40} />,
      title: 'Primary Education',
      description: 'Building strong academic foundations for students in grades 1-5.',
      color: '#4ECDC4'
    },
    {
      icon: <GraduationCap size={40} />,
      title: 'Secondary School',
      description: 'Comprehensive curriculum preparing students for higher education and life.',
      color: '#45B7D1'
    },
    {
      icon: <Globe size={40} />,
      title: 'International Program',
      description: 'Global curriculum with multicultural perspective and language immersion.',
      color: '#96CEB4'
    }
  ]

  const facilities = [
    { icon: <School size={32} />, title: 'Modern Classrooms', desc: 'Smart boards & AC equipped' },
    { icon: <Trophy size={32} />, title: 'Sports Complex', desc: 'Olympic-size facilities' },
    { icon: <Music size={32} />, title: 'Music & Arts', desc: 'Creative expression studios' },
    { icon: <BookOpen size={32} />, title: 'Library', desc: '50,000+ digital resources' },
    { icon: <Globe size={32} />, title: 'Science Labs', desc: 'State-of-art laboratories' },
    { icon: <Heart size={32} />, title: 'Health Center', desc: '24/7 medical care' },
  ]

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Parent of Grade 4 Student',
      text: 'Holy Family has transformed my childs love for learning. The teachers are exceptional and truly care about each student.',
      rating: 5
    },
    {
      name: 'Dr. James Chen',
      role: 'Parent of Grade 8 Student',
      text: 'The academic excellence and holistic development approach here is remarkable. My daughter has flourished beyond expectations.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Alumni, Class of 2020',
      text: 'The foundation I received at Holy Family prepared me for university success. The values instilled here stay with you forever.',
      rating: 5
    }
  ]

  const stats = [
    { number: '25+', label: 'Years of Excellence' },
    { number: '3,500+', label: 'Students Enrolled' },
    { number: '98%', label: 'University Acceptance' },
    { number: '150+', label: 'Expert Faculty' },
  ]

  return (
    <div className="app">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="top-bar-left">
            <a href="tel:+1234567890" className="top-bar-link">
              <Phone size={14} />
              <span>+1 (234) 567-890</span>
            </a>
            <a href="mailto:info@brighthorizon.edu" className="top-bar-link">
              <Mail size={14} />
              <span>info@brighthorizon.edu</span>
            </a>
          </div>
          <div className="top-bar-right">
            <a href="#contact" className="top-bar-link">Apply Now</a>
            <a href="#" className="top-bar-link">Parent Portal</a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">
            <div className="logo-icon-wrapper">
              <GraduationCap size={32} className="logo-icon" />
            </div>
            <div className="logo-text">
              <span className="logo-main">Holy Family</span>
              <span className="logo-sub"> School</span>
            </div>
          </div>

          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className={link.active ? 'active' : ''}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn-enroll">
            Enroll Now
          </a>

          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-badge">
              <Award size={16} />
              <span>Ranked #1 in Academic Excellence</span>
            </div>
            <h1 className="hero-title">
              Where Young Minds<br />
              <span className="highlight">Discover Their</span><br />
              Potential
            </h1>
            <p className="hero-subtitle">
              At Holy Family  School, we nurture curiosity,
              inspire creativity, and build the foundations for lifelong success
              through world-class education.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn-orange btn-large">
                Start Your Journey <ArrowRight size={18} />
              </a>
              <a href="#about" className="btn-outline-white btn-large">
                <Play size={16} fill="currentColor" /> Watch Our Story
              </a>
            </div>
          </div>
          <div className="hero-right">
            <img src={schoolImage} alt="Holy Family  School Campus" className="hero-image" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">About Us</span>
            <h2 className="section-title">Shaping Tomorrow&apos;s Leaders Today</h2>
            <p className="section-subtitle">
              Founded in 1999, Holy Family  School has been at the forefront 
              of educational innovation, combining traditional values with modern teaching methodologies.
            </p>
          </div>
          
          <div className="about-grid">
            <div className="about-card">
              <div className="about-icon" style={{ background: '#FFF5F5', color: '#FF6B6B' }}>
                <Heart size={32} />
              </div>
              <h3>Our Mission</h3>
              <p>To provide a nurturing environment where every student discovers their unique potential and develops a lifelong love for learning.</p>
            </div>
            <div className="about-card">
              <div className="about-icon" style={{ background: '#F0FFF4', color: '#48BB78' }}>
                <Globe size={32} />
              </div>
              <h3>Global Vision</h3>
              <p>Preparing students to thrive in an interconnected world through cultural awareness, language skills, and global citizenship.</p>
            </div>
            <div className="about-card">
              <div className="about-icon" style={{ background: '#FFFAF0', color: '#ED8936' }}>
                <Palette size={32} />
              </div>
              <h3>Holistic Approach</h3>
              <p>Balancing academic rigor with arts, sports, and character development to create well-rounded individuals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="programs">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Our Programs</span>
            <h2 className="section-title">Educational Pathways</h2>
            <p className="section-subtitle">
              Comprehensive programs designed to meet the unique needs of every learner at every stage.
            </p>
          </div>
          
          <div className="programs-grid">
            {programs.map((program, index) => (
              <div key={index} className="program-card">
                <div className="program-icon" style={{ color: program.color }}>
                  {program.icon}
                </div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <a href="#contact" className="program-link">
                  Learn More <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="facilities">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Campus</span>
            <h2 className="section-title">World-Class Facilities</h2>
            <p className="section-subtitle">
              Our 50-acre campus features state-of-the-art facilities designed to inspire learning and growth.
            </p>
          </div>
          
          <div className="facilities-grid">
            {facilities.map((facility, index) => (
              <div key={index} className="facility-card">
                <div className="facility-icon">{facility.icon}</div>
                <h4>{facility.title}</h4>
                <p>{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Testimonials</span>
            <h2 className="section-title">What Families Say</h2>
            <p className="section-subtitle">
              Hear from parents and alumni about their experience at Holy Family.
            </p>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#FFD700" stroke="#FFD700" />
                  ))}
                </div>
                <p className="testimonial-text">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="author-info">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-container">
          <div className="cta-content">
            <h2>Begin Your Child&apos;s Journey Today</h2>
            <p>Schedule a campus tour and discover why Holy Family is the perfect place for your child to grow, learn, and excel.</p>
            <div className="cta-buttons">
              <a href="#contact" className="btn-white">
                <Calendar size={20} />
                Schedule a Tour
              </a>
              <a href="tel:+1234567890" className="btn-outline-white">
                <Phone size={20} />
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="section-container">
          <div className="contact-grid">
            <div className="contact-info">
              <span className="section-tag">Get in Touch</span>
              <h2 className="section-title">Contact Us</h2>
              <p className="section-subtitle">
                Have questions about admissions or our programs? We&apos;re here to help.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <MapPin size={24} />
                  <div>
                    <strong>Address</strong>
                    <span>VQFC+8QG, Banjhikend, Jharkhand 816101</span>
                  </div>
                </div>
                <div className="contact-item">
                  <Phone size={24} />
                  <div>
                    <strong>Phone</strong>
                    <span>+1 (234) 567-8900</span>
                  </div>
                </div>
                <div className="contact-item">
                  <Mail size={24} />
                  <div>
                    <strong>Email</strong>
                    <span>admissions@brighthorizon.edu</span>
                  </div>
                </div>
                <div className="contact-item">
                  <Clock size={24} />
                  <div>
                    <strong>Office Hours</strong>
                    <span>Mon - Fri: 8:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <form className="contact-form">
                <h3>Request Information</h3>
                <div className="form-row">
                  <input type="text" placeholder="First Name" required />
                  <input type="text" placeholder="Last Name" required />
                </div>
                <input type="email" placeholder="Email Address" required />
                <input type="tel" placeholder="Phone Number" />
                <select required>
                  <option value="">Select Program of Interest</option>
                  <option value="early">Early Childhood</option>
                  <option value="primary">Primary Education</option>
                  <option value="secondary">Secondary School</option>
                  <option value="international">International Program</option>
                </select>
                <textarea placeholder="Your Message" rows={4}></textarea>
                <button type="submit" className="btn-primary btn-full">
                  Send Message <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo">
                <GraduationCap size={36} className="logo-icon" />
                <div className="logo-text">
                  <span className="logo-main">Holy Family</span>
                  <span className="logo-sub"> School</span>
                </div>
              </div>
              <p>Nurturing excellence and inspiring futures since 1999. Join us in creating tomorrow&apos;s leaders.</p>
              <div className="social-links">
                <a href="#" aria-label="Facebook">f</a>
                <a href="#" aria-label="Twitter">t</a>
                <a href="#" aria-label="Instagram">📷</a>
                <a href="#" aria-label="YouTube">▶</a>
              </div>
            </div>
            
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#programs">Programs</a></li>
                <li><a href="#facilities">Facilities</a></li>
                <li><a href="#contact">Admissions</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Student Portal</a></li>
                <li><a href="#">Parent Portal</a></li>
                <li><a href="#">Academic Calendar</a></li>
                <li><a href="#">Career Opportunities</a></li>
              </ul>
            </div>
            
            <div className="footer-newsletter">
              <h4>Newsletter</h4>
              <p>Subscribe for school news and updates.</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Enter your email" />
                <button type="submit"><ArrowRight size={18} /></button>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Holy Family  School. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

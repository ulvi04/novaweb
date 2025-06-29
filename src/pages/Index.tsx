import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AnimatedBackground from '@/components/AnimatedBackground';
import ServiceCard from '@/components/ServiceCard';
import TestimonialSlider from '@/components/TestimonialSlider';
import FloatingCTA from '@/components/FloatingCTA';
import { ChevronRight, Sparkles, Zap, Rocket, Globe, Code, Palette, Brain, Phone, MessageCircle } from 'lucide-react';

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Web Development",
      description: "Cutting-edge web solutions with modern frameworks and technologies",
      features: ["React/Next.js", "TypeScript", "API Integration"]
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Immersive user experiences with futuristic design principles",
      features: ["Figma Design", "Prototyping", "User Research"]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Integration",
      description: "Intelligent solutions powered by artificial intelligence",
      features: ["Machine Learning", "Automation", "Chatbots"]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Digital Strategy",
      description: "Comprehensive digital transformation and consulting",
      features: ["SEO/SEM", "Analytics", "Optimization"]
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Performance",
      description: "Lightning-fast solutions optimized for speed and scale",
      features: ["Core Web Vitals", "CDN Setup", "Caching"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovation",
      description: "Pioneering technologies and experimental solutions",
      features: ["Web3", "AR/VR", "IoT"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechVision",
      content: "NovaWeb transformed our digital presence with their innovative approach. The results exceeded all expectations.",
      rating: 5,
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO, InnovateLab",
      content: "Their futuristic design and technical expertise helped us launch a product that truly stands out in the market.",
      rating: 5,
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "Elena Vasquez",
      role: "Founder, CreativeSpace",
      content: "The team's attention to detail and cutting-edge solutions made our vision come to life perfectly.",
      rating: 5,
      avatar: "/api/placeholder/60/60"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <AnimatedBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                NovaWeb
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Services', 'Portfolio', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:glow-text"
                >
                  {item}
                </a>
              ))}
            </div>
            
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 glow-button"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className={`text-center space-y-8 max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Logo with Glow */}
          <div className="relative mb-12">
            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-8 glow-logo animate-pulse-glow">
              <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  NW
                </span>
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              NovaWeb
            </h1>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Crafting the
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Future </span>
            of Digital
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            We're a visionary digital agency pushing the boundaries of technology, 
            design, and innovation to create extraordinary digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-10 py-5 text-xl font-bold glow-button-enhanced animate-bounce-slow hover:animate-pulse-fast hover:scale-105 transition-all duration-300"
              onClick={() => {
                // Scroll to contact section for project initiation
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Sparkles className="mr-3 w-6 h-6" />
              Start Your Journey
              <ChevronRight className="ml-3 w-6 h-6" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-blue-500/50 hover:border-blue-400 hover:bg-blue-500/20 px-10 py-5 text-xl glass-button-enhanced backdrop-blur-xl hover:backdrop-blur-2xl transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Palette className="mr-3 w-6 h-6" />
              View Our Work
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {['Web3 Ready', 'AI Powered', 'Mobile First', 'Performance Optimized'].map((badge) => (
              <Badge key={badge} variant="outline" className="px-4 py-2 text-sm border-blue-500/30 text-blue-300 hover:border-blue-400 hover:text-blue-200 transition-colors">
                {badge}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Work
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our portfolio of cutting-edge digital solutions and transformative projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                description: "Modern online store with AI-powered recommendations",
                tech: ["React", "Node.js", "AI/ML"],
                image: "🛍️"
              },
              {
                title: "Digital Banking App",
                description: "Secure fintech solution with real-time analytics",
                tech: ["React Native", "Blockchain", "API"],
                image: "💳"
              },
              {
                title: "Healthcare Platform",
                description: "Telemedicine platform with IoT integration",
                tech: ["Vue.js", "IoT", "WebRTC"],
                image: "🏥"
              },
              {
                title: "Smart City Dashboard",
                description: "IoT-powered urban management system",
                tech: ["Angular", "IoT", "Data Viz"],
                image: "🌆"
              },
              {
                title: "AR/VR Experience",
                description: "Immersive virtual reality training platform",
                tech: ["WebXR", "Three.js", "AR/VR"],
                image: "🥽"
              },
              {
                title: "AI Chatbot Platform",
                description: "Intelligent customer service automation",
                tech: ["Python", "AI/ML", "NLP"],
                image: "🤖"
              }
            ].map((project, index) => (
              <Card key={index} className="group cursor-pointer transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 glass-card border-white/10 hover:border-purple-500/50 glow-card-subtle">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs border-purple-500/30 text-purple-300 hover:border-purple-400 hover:text-purple-200 transition-all duration-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className={`w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform origin-left transition-transform duration-500 group-hover:scale-x-100 scale-x-0`} />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital solutions designed to propel your business into the future
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-300">
              What our clients say about their transformation journey
            </p>
          </div>
          
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300">
              Ready to start your digital transformation? Let's connect and discuss your vision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4 p-6 glass-card rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Phone</h3>
                  <a href="tel:+994992241288" className="text-blue-400 hover:text-blue-300 transition-colors">
                    +994 99 224 12 88
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-6 glass-card rounded-xl border border-white/10 hover:border-pink-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Instagram</h3>
                  <a href="https://instagram.com/novaweb_az" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors">
                    @novaweb_az
                  </a>
                </div>
              </div>
              
              <div className="p-6 glass-card rounded-xl border border-white/10">
                <h3 className="text-white font-semibold mb-4">Why Choose NovaWeb?</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Cutting-edge technology solutions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Innovative design approach</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span>24/7 dedicated support</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Quick Contact Form */}
            <div className="glass-card p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for your message! We will contact you soon via phone or Instagram.');
              }}>
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    required
                    className="w-full p-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    required
                    className="w-full p-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Tell us about your project" 
                    rows={4}
                    required
                    className="w-full p-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 glow-button">
                  Send Message
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="max-w-4xl mx-auto text-center px-6">
          <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-xl border-blue-500/20 p-12 glass-card">
            <CardContent className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-xl text-gray-300">
                Let's create something extraordinary together. Join the future of digital innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg glow-button"
                  onClick={() => {
                    // Open contact form or modal
                    alert('Project inquiry form would open here. Contact us at +994 99 224 12 88 or @novaweb_az on Instagram!');
                  }}
                >
                  Start Your Project
                  <Rocket className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-purple-500/50 hover:border-purple-400 hover:bg-purple-500/10 px-8 py-4 text-lg glass-button"
                  onClick={() => {
                    // Open consultation booking
                    alert('Consultation booking would open here. Contact us directly at +994 99 224 12 88 for immediate assistance!');
                  }}
                >
                  Schedule Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/40 backdrop-blur-xl py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center glow-logo-small">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  NovaWeb
                </span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Pioneering the future of digital experiences through innovation and creativity.
              </p>
              
              {/* Contact Information */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    📞
                  </div>
                  <a href="tel:+994992241288" className="text-lg font-medium hover:glow-text">
                    +994 99 224 12 88
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-pink-400 transition-colors">
                  <div className="w-8 h-8 bg-pink-500/20 rounded-lg flex items-center justify-center">
                    📷
                  </div>
                  <a href="https://instagram.com/novaweb_az" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:glow-text">
                    @novaweb_az
                  </a>
                </div>
              </div>
            </div>
            
            {/* Services Column */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white border-b border-blue-500/30 pb-2">Services</h3>
              <div className="space-y-3">
                {['Web Development', 'UI/UX Design', 'AI Integration', 'Digital Strategy'].map((service) => (
                  <a key={service} href="#services" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-2 transform">
                    {service}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Company Column */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white border-b border-purple-500/30 pb-2">Company</h3>
              <div className="space-y-3">
                {['About Us', 'Our Team', 'Careers', 'Contact'].map((item) => (
                  <a key={item} href="#" className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-2 transform">
                    {item}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Resources Column */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white border-b border-pink-500/30 pb-2">Resources</h3>
              <div className="space-y-3">
                {['Blog', 'Case Studies', 'Documentation', 'Support'].map((resource) => (
                  <a key={resource} href="#" className="block text-gray-300 hover:text-pink-400 transition-colors duration-300 hover:translate-x-2 transform">
                    {resource}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-lg">© 2024 NovaWeb. All rights reserved.</p>
            <div className="flex space-x-8">
              {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item) => (
                <a key={item} href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:glow-text">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <FloatingCTA />
    </div>
  );
}
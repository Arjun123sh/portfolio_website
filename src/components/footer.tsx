"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  ArrowUp,
  FileText,
  Shield,
  Scale,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const footerLinks = {
  services: [
    { name: "Web Development" },
    { name: "Mobile Development" },
    { name: "Data Analytics" },
  ],
  resources: [
    { 
      name: "Documentation", 
      href: "/docs", 
      icon: FileText,
      description: "API docs & guides"
    },
    { 
      name: "Privacy Policy", 
      href: "/privacy-policy", 
      icon: Shield,
      description: "How we protect your data"
    },
    { 
      name: "Terms of Service", 
      href: "/terms-of-service", 
      icon: Scale,
      description: "Legal terms & conditions"
    },
  ],
};

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/5fox/",
    label: "LinkedIn",
    color: "hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-950/30",
  },
  { 
    icon: Github, 
    href: "https://github.com/5FoxDevelopers", 
    label: "GitHub",
    color: "hover:bg-gray-50 hover:text-gray-900 dark:hover:bg-gray-900/30",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/5fox.developers/",
    label: "Instagram",
    color: "hover:bg-pink-50 hover:text-pink-600 dark:hover:bg-pink-950/30",
  },
];

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1 space-y-6"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center overflow-hidden shadow-lg">
                  <img
                    src="/5Fox.jpg"
                    alt="5fox logo"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <span className="text-2xl font-bold text-foreground">5fox</span>
              </div>

              <p className="text-muted-foreground leading-relaxed text-sm">
                Transforming businesses through innovative IT solutions. We're
                your trusted partner in digital transformation and technology
                excellence.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3 text-sm text-muted-foreground group">
                  <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <a 
                    href="mailto:5foxdevelopers@gmail.com"
                    className="hover:text-primary transition-colors duration-300 break-all"
                  >
                    5foxdevelopers@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <a 
                    href="tel:+918437516789"
                    className="hover:text-primary transition-colors duration-300"
                  >
                    +91 84375-16789
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Amritsar, Punjab, India</span>
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold text-foreground">
                Services
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.05, duration: 0.6 }}
                  >
                    <div
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 inline-flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Resources & Social */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold text-foreground">
                Resources
              </h3>
              
              {/* Resources Links */}
              <ul className="space-y-4">
                {footerLinks.resources.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.05, duration: 0.6 }}
                  >
                    <Link
                      href={link.href}
                      className="group flex items-start space-x-3 p-2 -m-2 rounded-lg hover:bg-muted/50 transition-colors duration-300"
                    >
                      <link.icon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                          {link.name}
                        </div>
                        <div className="text-xs text-muted-foreground mt-0.5">
                          {link.description}
                        </div>
                      </div>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Social Links */}
              <div className="pt-4 border-t border-border/50">
                <h4 className="text-sm font-medium text-foreground mb-4">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground transition-all duration-300 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="py-8 border-t border-border/50"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} 5fox IT Services. All rights reserved.
            </div>

            {/* Legal Links & Back to Top */}
            <div className="flex items-center space-x-6">
              {/* Quick Legal Links */}
              <div className="hidden sm:flex items-center space-x-4 text-xs">
                <Link
                  href="/privacy-policy"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Privacy
                </Link>
                <span className="text-border">•</span>
                <Link
                  href="/terms-of-service"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Terms
                </Link>
                <span className="text-border">•</span>
                <Link
                  href="/docs"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Docs
                </Link>
              </div>

              {/* Back to Top Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToTop}
                className="h-9 w-9 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="Back to top"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Mobile Legal Links */}
          <div className="flex sm:hidden items-center justify-center space-x-4 text-xs mt-4 pt-4 border-t border-border/30">
            <Link
              href="/privacy-policy"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <span className="text-border">•</span>
            <Link
              href="/terms-of-service"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <span className="text-border">•</span>
            <Link
              href="/docs"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Documentation
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

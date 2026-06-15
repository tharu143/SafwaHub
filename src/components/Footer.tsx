import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/logo.png" 
                alt="Safwa Learning Hub Logo" 
                width={40} 
                height={40} 
                className="h-10 w-auto object-contain"
                unoptimized
              />
              <span className="text-xl font-bold tracking-tight text-primary">Safwa Learning <span className="text-secondary">Hub</span></span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Seek &bull; Achieve &bull; Focus &bull; Win
            </p>
            <p className="text-sm text-muted-foreground font-medium italic">
              "Together We Build Better Futures."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Programs Offered
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Top Programs</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Academic Education</li>
              <li className="text-sm text-muted-foreground">Islamic Education</li>
              <li className="text-sm text-muted-foreground">Language Courses</li>
              <li className="text-sm text-muted-foreground">Spoken Languages</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <span>+91 97459 59290</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <span>safwalearninghub@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <span>Safwa Learning Hub</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Safwa Learning Hub. All Rights Reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Powered by <Link href="https://tmcybertech.in" target="_blank" className="font-medium text-primary hover:underline">TM Cyber Tech</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

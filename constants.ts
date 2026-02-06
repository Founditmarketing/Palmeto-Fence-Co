import { ShieldCheck, Ruler, Trees, Warehouse } from 'lucide-react';
import { Service, Testimonial, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '/#home' },
  { name: 'About Us', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Reviews', href: '/#reviews' },
  { name: 'Contact', href: '/#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'residential',
    title: 'Residential Privacy',
    description: 'Transform your backyard into a private sanctuary. We specialize in wood shadowbox, vinyl privacy, and decorative aluminum fencing.',
    icon: Trees,
    image: 'https://picsum.photos/id/122/800/600',
    href: '/services/wood',
  },
  {
    id: 'commercial',
    title: 'Commercial Security',
    description: 'Secure your business assets with durable chain link, security gates, and industrial-grade aluminum solutions.',
    icon: Warehouse,
    image: 'https://picsum.photos/id/184/800/600',
    href: '/#contact',
  },
  {
    id: 'custom',
    title: 'Custom Woodwork',
    description: 'Hand-crafted wood fences designed to match your home’s architecture. From picket to post-and-rail.',
    icon: Ruler,
    image: 'https://picsum.photos/id/204/800/600',
    href: '/services/wood',
  },
  {
    id: 'vinyl',
    title: 'Low-Maintenance Vinyl',
    description: 'Premium vinyl fencing that withstands the Georgia heat without fading, cracking, or warping. Lifetime warranty options.',
    icon: ShieldCheck,
    image: 'https://picsum.photos/id/250/800/600',
    href: '/services/vinyl',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    location: "Waycross, GA",
    text: "Being a woman-owned business myself, I loved supporting Palmetto Fence. Their attention to detail was unmatched. They didn't just build a fence; they framed my garden perfectly.",
    rating: 5,
  },
  {
    id: 2,
    name: "Mark T.",
    location: "Blackshear, GA",
    text: "Best quote in town, but the quality is what surprised me. The crew was polite, cleaned up every nail, and the green vinyl looks amazing against the pine trees.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily & David",
    location: "Waycross, GA",
    text: "We needed a safe area for our dogs. The team suggested a specific aluminum style that keeps them in but doesn't block our view of the marsh. Highly recommend!",
    rating: 5,
  },
];

export const AI_SYSTEM_INSTRUCTION = `
You are "Palmetto", the virtual fencing consultant for Palmetto Fence Co. based in Waycross, Georgia.
You are representing a woman-owned business that prides itself on elegance, durability, and Southern hospitality.
Your tone should be warm, professional, and knowledgeable.
The main brand color is a deep, trustworthy green.
You can answer questions about:
- Wood fences (Pressure treated pine, Cedar)
- Vinyl fences (White, Tan, Green, Wood-grain)
- Aluminum/Metal fences
- Chain link (Galvanized, Black coated)
- Estimated process (Consultation -> Measurement -> Install)
- Local context: Mention Waycross soil conditions or weather (humidity) if relevant.

Do not give specific dollar pricing estimates. Instead, explain that pricing depends on linear footage, material choice, and number of gates, and encourage them to book a free onsite consultation using the contact form.
Keep responses concise and helpful.
`;

"use client"
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function ContactUsSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const headlineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, { opacity: 0, y: 50, duration: 1 });
      gsap.from(headlineRef.current, { opacity: 0, scale: 0.8, duration: 1, delay: 0.2 });
      gsap.from(formRef.current, { opacity: 0, y: 60, duration: 1, delay: 0.4 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    alert('Message Sent');
    // Add actual submission logic here
  };

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen bg-gradient-to-br from-white to-white/30 text-black px-4 py-20 flex flex-col items-center justify-center"
    >
      <div className="text-center mb-10">
        <h2 ref={titleRef} className="text-4xl md:text-6xl font-extrabold">
          Our Impact <span className="text-blue-500">Your Success</span>
        </h2>
      </div>

      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-16">
        <div ref={headlineRef} className="text-left md:w-1/2 w-full">
          <h1 className="text-[6rem] md:text-[8rem] leading-none font-extrabold">
            <span className="text-black z-10 text-[200px] block">Let<span className="text-black">'s</span></span>
            <span className="text-blue-600 -translate-y-14 block z-20 text-[200px] -mt-4">Talk!</span>
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          ref={formRef}
          className="w-full md:w-[42%] space-y-5"
        >
          <Input
            type="text"
            placeholder="Name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="h-14 text-white placeholder-gray-400 border border-neutral-700"
          />
          <Input
            type="email"
            placeholder="Email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="h-14 text-white placeholder-gray-400 border border-neutral-700"
          />
          <Input
            type="text"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="h-14 text-white placeholder-gray-400 border border-neutral-700"
          />
          <Textarea
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="h-3 text-white placeholder-gray-400 border border-neutral-700"
          />

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full transition-colors"
          >
            Send Request
          </Button>
        </form>
      </div>
    </section>
  );
}
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/common/Button";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?auto=format&fit=crop&q=80"
          alt="Premium Linen Fabric"
          fill
          className="object-cover brightness-[0.9]"
          priority
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="block uppercase tracking-[0.5em] text-[10px] text-vian-text mb-6"
        >
          Established MMXXIV
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="text-5xl md:text-8xl font-serif text-vian-text mb-10 leading-tight"
        >
          Organic Linen, <br /> 
          <span className="italic">Timeless Soul.</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <Button>Shop New Arrivals</Button>
          <Button variant="outline">The Heritage</Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest opacity-50"
      >
        Scroll
      </motion.div>
    </section>
  );
}
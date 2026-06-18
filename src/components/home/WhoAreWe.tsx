"use client";

import React from "react";
import { Container } from "../common/Container";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function WhoAreWe() {
  return (
    <section
      id="about-section"
      className="
        relative
        overflow-hidden
        bg-[#F5F5F3]
        py-16
        sm:py-20
        lg:py-24
      "
    >
      <Container>
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-12
            lg:gap-16
            xl:gap-24
            items-center
            mx-auto
            max-w-[1200px]
          "
        >
          {/* LEFT CONTENT - TITLE */}
          <div className="lg:col-span-5 relative z-10 flex flex-col justify-center">
            {/* LABEL */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="
                mb-5
                text-[11px]
                uppercase
                tracking-[0.25em]
                font-sans
                font-semibold
                text-[#7A7A7A]
              "
            >
              WHO WE ARE?
            </motion.p>

            {/* HEADING */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="
                font-sans
                font-bold
                tracking-[-0.03em]
                text-[#1A1A1A]
                leading-[0.88]
                text-[52px]
                sm:text-[68px]
                md:text-[80px]
                lg:text-[84px]
                xl:text-[96px]
              "
            >
              Weaving
              <br />
              Elegance
              <br />
              into
              <br />
              Everyday
            </motion.h2>
          </div>

          {/* RIGHT CONTENT - GLASS CARD OVER SHIRT SKETCH */}
          <div
            className="
              lg:col-span-7
              relative
              flex
              items-center
              justify-center
              min-h-[460px]
              sm:min-h-[520px]
              w-full
              py-6
              lg:py-0
            "
          >
            {/* SHIRT SKETCH BACKGROUND */}
            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                pointer-events-none
                z-0
              "
            >
              <img
                src="/images/whobg.svg"
                alt="shirt illustration"
                className="
                  w-[480px]
                  sm:w-[560px]
                  md:w-[620px]
                  lg:w-[680px]
                  xl:w-[740px]
                  max-w-none
                  opacity-[0.45]
                  select-none
                  object-contain
                "
              />
              {/* Fade gradient overlay for smooth blend at the bottom */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#F5F5F3] to-transparent pointer-events-none" />
            </div>

            {/* FLOATING GLASS CARD */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="
                relative
                z-10
                w-full
                max-w-[420px]
                rounded-[28px]
                border
                border-white/20
                bg-[#2E2E2E]/50
                backdrop-blur-xl
                p-8
                sm:p-10
                shadow-[0_25px_80px_rgba(0,0,0,0.18)]
              "
            >
              <p
                className="
                  mb-8
                  text-sm
                  sm:text-base
                  leading-[1.8]
                  font-light
                  text-white/95
                "
              >
                At VL Global, we create thoughtfully crafted linen shirts
                designed for comfort, simplicity, and everyday living.
                From carefully selected fabrics to refined tailoring details,
                every piece is made to feel natural, breathable, and timeless.
              </p>

              {/* BUTTON */}
              <a href="#heritage" className="inline-block">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-[14px]
                    bg-[#E5C56D]
                    px-6
                    py-4
                    text-sm
                    font-semibold
                    text-[#1A1A1A]
                    shadow-lg
                    shadow-black/10
                    hover:bg-[#D4B45C]
                    transition-all
                  "
                >
                  Discover Our Story
                  <ArrowUpRight className="h-4 w-4 stroke-[2.5px]" />
                </motion.button>
              </a>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
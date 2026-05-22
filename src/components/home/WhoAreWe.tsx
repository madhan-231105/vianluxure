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
        lg:py-20
      "
    >

      {/* BACKGROUND SHIRT */}
      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          pointer-events-none
        "
      >
        <img
          src="/images/whobg.svg"
          alt="shirt illustration"
          className="
            w-[620px]
            lg:w-[760px]
            opacity-[0.42]
            select-none
          "
        />
      </div>

      <Container>

        {/* MAIN WRAPPER */}
        <div
          className="
            relative
            z-20
            mx-auto
            flex
            min-h-[420px]
            lg:min-h-[520px]
            max-w-[1200px]
            items-start
            justify-center
            pt-10
          "
        >

          {/* LEFT CONTENT */}
          <div
            className="
              relative
              z-30
              flex-1
            "
          >

            {/* LABEL */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="
                mb-5
                text-[11px]
                uppercase
                tracking-[0.22em]
                text-[#7A7A7A]
              "
            >
              WHO WE ARE?
            </motion.p>

            {/* HEADING */}
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="
                font-serif
                font-medium
                tracking-[-0.05em]
                text-[#222222]

                leading-[0.88]

                text-[64px]
                sm:text-[82px]
                lg:text-[92px]

                max-w-[480px]
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

          {/* RIGHT CONTENT */}
          <div
            className="
              relative
              z-30
              flex
              flex-1
              justify-center
              pt-20
            "
          >

            {/* GLASS CARD */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="
                w-[360px]
                lg:w-[400px]

                rounded-[28px]

                border
                border-white/20

                bg-[#7A7A7A]/60
                backdrop-blur-[18px]

                p-8
                lg:p-10

                shadow-[0_25px_80px_rgba(0,0,0,0.14)]
              "
            >
              <p
                className="
                  mb-8
                  text-[14px]
                  lg:text-[15px]

                  leading-[1.9]
                  font-light

                  text-white/90
                "
              >
                At VL Global, we create thoughtfully crafted linen shirts
                designed for comfort, simplicity, and everyday living.
                From carefully selected fabrics to refined tailoring details,
                every piece is made to feel natural, breathable, and timeless.
              </p>

              {/* BUTTON */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="
                  inline-flex
                  items-center
                  gap-4

                  rounded-[14px]

                  bg-[#E5C56D]

                  px-6
                  py-4

                  text-[14px]
                  font-medium
                  text-[#1A1A1A]

                  transition-all
                "
              >
                Discover Our Story

                <ArrowUpRight className="h-4 w-4" />
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* MOBILE DESIGN */}
        <div className="relative z-30 block lg:hidden">

          {/* LABEL */}
          <p
            className="
              mb-5
              text-[11px]
              uppercase
              tracking-[0.22em]
              text-[#7A7A7A]
            "
          >
            WHO WE ARE?
          </p>

          {/* MOBILE HEADING */}
          <h2
            className="
              font-serif
              text-[56px]
              leading-[0.92]
              tracking-[-0.04em]
              text-[#222222]
            "
          >
            Weaving
            <br />
            Elegance
            <br />
            into
            <br />
            Everyday
          </h2>

          {/* MOBILE CARD */}
          <div
            className="
              mt-10

              rounded-[24px]

              border
              border-white/20

              bg-[#7A7A7A]/60
              backdrop-blur-xl

              p-7

              shadow-2xl
            "
          >
            <p
              className="
                mb-6
                text-[15px]
                leading-[1.9]
                text-white/90
              "
            >
              At VL Global, we create thoughtfully crafted linen shirts
              designed for comfort, simplicity, and everyday living.
            </p>

            <button
              className="
                inline-flex
                items-center
                gap-3

                rounded-xl
                bg-[#E5C56D]

                px-5
                py-3

                text-sm
                font-medium
                text-[#1A1A1A]
              "
            >
              Discover Our Story

              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
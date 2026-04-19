import React from 'react';
import { motion } from 'framer-motion';

// Landscape Marketing Materials
import mkt1 from '../assets/marketing_materials/marketing_1.png';
import mkt2 from '../assets/marketing_materials/marketing_2.png';

// UI Shots
import shot1 from '../assets/marketing_materials/phone_ui_shots/1.png';
import shot2 from '../assets/marketing_materials/phone_ui_shots/2.png';
import shot3 from '../assets/marketing_materials/phone_ui_shots/3.png';
import shot4 from '../assets/marketing_materials/phone_ui_shots/4.png';
import shot5 from '../assets/marketing_materials/phone_ui_shots/5.png';
import shot6 from '../assets/marketing_materials/phone_ui_shots/6.png';
import shot7 from '../assets/marketing_materials/phone_ui_shots/7.png';
import shot8 from '../assets/marketing_materials/phone_ui_shots/8.png';
import shot9 from '../assets/marketing_materials/phone_ui_shots/9.png';
import shot10 from '../assets/marketing_materials/phone_ui_shots/10.png';

const row1 = [shot1, shot2, shot3, shot4, shot5];
const row2 = [shot6, shot7, shot8, shot9, shot10];

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  return (
    <div className="w-full relative overflow-hidden text-star-dark">
      {/* Decorative gradient background behind Hero */}
      <div className="absolute top-[-20%] left-1/2 min-w-[800px] aspect-square rounded-full bg-gradient-to-br from-[#FFD94C] to-[#FFB219] opacity-20 blur-3xl -translate-x-1/2 pointer-events-none" />

      {/* HERO SECTION */}
      <motion.section
        className="relative pt-32 pb-24 px-6 flex flex-col items-center text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6 flex justify-center">
          {/* Glowing Star Icon Placeholder */}
          <div className="w-16 h-16 rounded-2xl bg-star-gold shadow-[0px_4px_24px_rgba(255,209,0,0.4)] flex items-center justify-center text-3xl font-black text-white">
            ★
          </div>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black tracking-tighter mb-6 max-w-4xl mx-auto">
          Unlock Full Power.
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-star-secondary font-medium mb-10 max-w-2xl mx-auto">
          Join thousands reaching their goals with Star Task. The ultimate interface designed to naturally pull your focus.
        </motion.p>

        <motion.div variants={itemVariants}>
          {/* Placeholder App Store Button */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center px-8 py-4 bg-star-dark text-white rounded-[16px] font-semibold text-lg"
          >
            Download on the App Store
          </motion.a>
        </motion.div>

        {/* Floating iPhone Mockup Space */}
        <motion.div
          variants={itemVariants}
          className="mt-20 mx-auto w-full max-w-[300px] md:max-w-[340px] aspect-[1/2.16] rounded-[3rem] bg-white flex items-center justify-center border-[8px] border-white/40 overflow-hidden relative shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)]"
        >
          <img src={shot1} alt="Star Task App Mockup" className="w-full h-full object-cover" />
        </motion.div>
      </motion.section>

      {/* FEATURES SHOWCASE */}
      <section className="py-32 px-6 relative z-10 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto space-y-32">
          {/* Feature 1 */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}
            className="flex flex-col md:flex-row items-center gap-12 lg:gap-24"
          >
            <div className="flex-1 space-y-6">
              <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-black tracking-tight">The North Star System</motion.h3>
              <motion.p variants={itemVariants} className="text-xl text-star-secondary leading-relaxed font-medium">
                Find your North Star and focus entirely on your ONE primary goal. Star Task explicitly strips away the noise and administration.
              </motion.p>
            </div>
            <motion.div variants={itemVariants} className="flex-1 w-full flex justify-center relative">
              <motion.img
                whileHover={{ scale: 1.03, y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                src={shot2}
                alt="Dashboard UI"
                className="max-w-[300px] w-full rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border-8 border-gray-50 bg-white z-10"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-star-gold/20 blur-3xl rounded-full z-0" />
            </motion.div>
          </motion.div>

          {/* Feature 2 (Reversed) */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}
            className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24"
          >
            <div className="flex-1 space-y-6">
              <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-black tracking-tight">Neuro-Flow Interface</motion.h3>
              <motion.p variants={itemVariants} className="text-xl text-star-secondary leading-relaxed font-medium">
                An environment intentionally designed with heavy contrast and specific coloring to naturally grab and hold your focus where it belongs.
              </motion.p>
            </div>
            <motion.div variants={itemVariants} className="flex-1 w-full flex justify-center relative">
              <motion.img
                whileHover={{ scale: 1.03, y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                src={shot6}
                alt="Interface Flow"
                className="max-w-[300px] w-full rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border-8 border-gray-50 bg-white z-10"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/10 blur-3xl rounded-full z-0" />
            </motion.div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}
            className="flex flex-col md:flex-row items-center gap-12 lg:gap-24"
          >
            <div className="flex-1 space-y-6">
              <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-black tracking-tight">Advanced AI Planning</motion.h3>
              <motion.p variants={itemVariants} className="text-xl text-star-secondary leading-relaxed font-medium">
                Let intelligent models break down large, overwhelming tasks into bite-sized actionable steps, ensuring absolutely nothing is ever missed.
              </motion.p>
            </div>
            <motion.div variants={itemVariants} className="flex-1 w-full flex justify-center relative">
              <motion.img
                whileHover={{ scale: 1.03, y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                src={shot5}
                alt="AI Planning UI"
                className="max-w-[300px] w-full rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border-8 border-gray-50 bg-white z-10"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-500/10 blur-3xl rounded-full z-0" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SCROLLING GALLERY SECTION */}
      <section className="py-32 bg-star-dark overflow-hidden flex flex-col gap-10 relative rounded-t-[4rem] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <div className="text-center mb-6 px-6 relative z-20">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: "spring" }} className="text-4xl md:text-6xl text-white font-black tracking-tight">
            Beautifully Engineered
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: "spring", delay: 0.1 }} className="text-star-secondary mt-6 text-xl max-w-2xl mx-auto font-medium">
            Every view, button, and interaction was designed to minimize friction and maximize momentum.
          </motion.p>
        </div>

        {/* Row 1 */}
        <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused] mt-8 group">
          {[...row1, ...row1, ...row1, ...row1].map((img, idx) => (
            <img key={`r1-${idx}`} src={img} alt={`App Screenshot`} className="h-[360px] md:h-[450px] w-auto rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/10 group-hover:opacity-80 hover:!opacity-100 transition-opacity" />
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex gap-6 w-max animate-marquee-reverse hover:[animation-play-state:paused] group">
          {[...row2, ...row2, ...row2, ...row2].map((img, idx) => (
            <img key={`r2-${idx}`} src={img} alt={`App Screenshot`} className="h-[360px] md:h-[450px] w-auto rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/10 group-hover:opacity-80 hover:!opacity-100 transition-opacity" />
          ))}
        </div>

        {/* Gradient fades for edge smoothing */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-star-dark to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-star-dark to-transparent z-10" />
      </section>

      {/* MARKETING MATERIALS (Edge to Edge, Clean & Borderless) */}
      <section className="w-full flex flex-col bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
          }}
          className="w-full"
        >
          <img src={mkt1} alt="Star Task Ecosystem" className="w-full h-auto block" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
          }}
          className="w-full"
        >
          <img src={mkt2} alt="Star Task Landscape Overview" className="w-full h-auto block" />
        </motion.div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-6">
        <motion.div
          className="max-w-4xl mx-auto glass-block p-12 md:p-20 text-center rounded-[2rem]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">Ready to Focus?</h2>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-10 py-5 bg-star-gold text-star-dark rounded-2xl font-black text-xl shadow-[0_4px_24px_rgba(255,209,0,0.5)]"
          >
            Get Star Task Today
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}

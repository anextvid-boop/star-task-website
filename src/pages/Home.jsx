import React from 'react';
import { motion } from 'framer-motion';

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
          className="mt-20 mx-auto w-full max-w-[320px] aspect-[1/2] rounded-[3rem] glass-block flex items-center justify-center border-4 border-white/40 overflow-hidden relative shadow-2xl"
        >
          <p className="text-sm font-bold text-center px-8 text-star-dark/40">
            [Transparent iPhone Mockup Placeholder. Swap with real .png asset]
          </p>
        </motion.div>
      </motion.section>

      {/* FEATURES SECTION (The "North Star" System) */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black mb-4 tracking-tight">The North Star System</motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-star-secondary font-medium">A framework designed for action, not administration.</motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {[
              { title: "Find Your North Star", text: "Focus entirely on your ONE primary goal. Star Task strips away the noise." },
              { title: "Neuro-Flow Interface", text: "An environment intentionally designed with heavy contrast to naturally grab your focus." },
              { title: "Advanced AI Planning", text: "Intelligent breakdowns of large tasks ensuring absolutely nothing is missed." },
              { title: "Cross-device Syncing", text: "Standardized seamless workflow everywhere your Apple devices go." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.01 }}
                className="glass-block p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-star-gold text-white flex items-center justify-center font-bold mb-6">
                  {idx + 1}
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-star-dark/70 font-medium leading-relaxed">{feature.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
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

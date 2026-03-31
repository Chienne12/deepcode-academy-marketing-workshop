import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_DATA } from '../constants';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 md:py-48 bg-surface-container-lowest relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.3em] text-primary mb-6">
              GIẢI ĐÁP THẮC MẮC
            </span>
            <h2 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-8 text-on-surface">
              Những câu hỏi <br /> thường gặp
            </h2>
            <p className="text-xl text-on-surface-variant font-light leading-relaxed max-w-2xl mx-auto">
              Mọi thắc mắc của bạn về lộ trình, phương pháp và kết quả sau khóa học đều được giải đáp tại đây.
            </p>
          </motion.div>
        </div>

        <div className="space-y-6">
          {FAQ_DATA.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`
                group rounded-[2rem] border transition-all duration-500
                ${openIndex === index 
                  ? 'bg-surface-container-low border-primary/20 shadow-xl shadow-primary/5' 
                  : 'bg-surface-container-lowest border-outline-variant/20 hover:border-primary/30'}
              `}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-8 md:p-10 flex justify-between items-center text-left"
              >
                <div className="flex items-center gap-6">
                  <div className={`
                    w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-500
                    ${openIndex === index ? 'bg-primary text-on-surface' : 'bg-surface-container-low text-primary/60 group-hover:text-primary'}
                  `}>
                    <HelpCircle size={20} strokeWidth={1.5} />
                  </div>
                  <span className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-500 ${openIndex === index ? 'text-on-surface' : 'text-on-surface-variant group-hover:text-on-surface'}`}>
                    {item.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className={`${openIndex === index ? 'text-primary' : 'text-on-surface-variant'}`}
                >
                  <ChevronDown size={24} strokeWidth={1.5} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 md:px-10 pb-10 pt-2 border-t border-outline-variant/10">
                      <p className="text-lg text-on-surface-variant font-light leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

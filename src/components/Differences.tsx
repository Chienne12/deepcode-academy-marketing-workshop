import { motion } from 'motion/react';
import { DIFFERENCES_DATA } from '../constants';
import { Star } from 'lucide-react';

export default function Differences() {
  return (
    <section id="differences" className="py-32 md:py-48 bg-surface-container-low relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start mb-24">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.3em] text-primary mb-6">
                ĐIỂM KHÁC BIỆT
              </span>
              <h2 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-8 text-on-surface">
                Tại sao chọn <br /> DeepCode Academy?
              </h2>
            </motion.div>
          </div>
          <div className="lg:col-span-6 lg:pt-12">
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-on-surface-variant font-light leading-relaxed max-w-xl"
            >
              Chúng tôi không chỉ dạy lý thuyết. Chúng tôi cung cấp một hệ thống thực chiến hoàn chỉnh, giúp bạn làm chủ cuộc chơi Marketing thay vì chỉ đi thuê ngoài.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DIFFERENCES_DATA.map((item, index) => {
            const isFeatured = index === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`
                  group relative p-10 rounded-[2.5rem] border border-outline-variant/20 transition-all duration-500
                  ${isFeatured 
                    ? 'lg:col-span-2 bg-on-surface text-background' 
                    : 'bg-surface-container-lowest text-on-surface hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5'}
                `}
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className={`
                      w-14 h-14 rounded-2xl flex items-center justify-center mb-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3
                      ${isFeatured ? 'bg-primary text-on-surface' : 'bg-surface-container-low text-primary'}
                    `}>
                      <Star size={28} strokeWidth={1.5} />
                    </div>
                    
                    <div className="flex items-baseline gap-4 mb-6">
                      <span className={`
                        text-5xl font-headline font-black transition-all duration-500 group-hover:scale-110
                        ${index === 0 ? 'text-[#FF6B00] drop-shadow-[0_0_15px_rgba(255,107,0,0.5)]' : 
                          index === 1 ? 'text-[#00E5FF] drop-shadow-[0_0_10px_rgba(0,229,255,0.3)]' :
                          index === 2 ? 'text-[#FF00E5] drop-shadow-[0_0_10px_rgba(255,0,229,0.3)]' :
                          index === 3 ? 'text-[#00FF66] drop-shadow-[0_0_10px_rgba(0,255,102,0.3)]' :
                          'text-[#FFB800] drop-shadow-[0_0_10px_rgba(255,184,0,0.3)]'}
                      `}>
                        {item.id}
                      </span>
                      <h3 className={`text-2xl md:text-3xl font-bold tracking-tight ${isFeatured ? 'text-background' : 'text-on-surface'}`}>
                        {item.title}
                      </h3>
                    </div>
                    
                    <p className={`
                      text-lg font-light leading-relaxed
                      ${isFeatured ? 'text-background/70' : 'text-on-surface-variant'}
                    `}>
                      {item.description}
                    </p>
                  </div>
                  
                  {isFeatured && (
                    <div className="mt-12 pt-8 border-t border-background/10 flex items-center gap-4">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="w-8 h-8 rounded-full border-2 border-on-surface overflow-hidden">
                            <img src={`https://picsum.photos/seed/diff${i}/50/50`} alt="User" referrerPolicy="no-referrer" />
                          </div>
                        ))}
                      </div>
                      <span className="text-xs font-medium tracking-widest uppercase text-background/50">Lợi thế cạnh tranh tuyệt đối</span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

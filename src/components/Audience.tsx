import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { AUDIENCE_DATA } from '../constants';

export default function Audience() {
  return (
    <section id="for-whom" className="py-32 md:py-48 bg-background relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-surface-container-low/50 -skew-x-12 translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Sticky Header Content */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] text-secondary mb-6">
                Target Audience
              </span>
              <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-8 text-on-surface">
                Hệ thống này <br /> dành cho ai?
              </h2>
              <p className="text-lg text-on-surface-variant font-light leading-relaxed mb-10">
                Chúng tôi không tìm kiếm số đông. Chúng tôi tìm kiếm những người khao khát làm chủ cuộc chơi Marketing thay vì chỉ đi thuê ngoài.
              </p>
              <div className="flex items-center gap-4 py-6 border-t border-outline-variant/20">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Icons.CheckCircle size={24} />
                </div>
                <p className="text-sm font-medium text-on-surface">Cam kết thực chiến 100% tại lớp</p>
              </div>
            </motion.div>
          </div>

          {/* Staggered Grid of Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {AUDIENCE_DATA.map((item, index) => {
              const IconComponent = (Icons as any)[item.icon];
              // Apply different vertical offsets for a staggered look on desktop
              const isEven = index % 2 === 1;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className={`
                    bg-surface-container-lowest p-10 rounded-[2.5rem] border border-outline-variant/10 
                    hover:border-secondary/20 transition-all duration-500 group relative overflow-hidden
                    ${isEven && 'md:mt-12'}
                  `}
                >
                  {/* Subtle Background Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-surface-container-low rounded-2xl flex items-center justify-center mb-10 group-hover:bg-secondary group-hover:text-on-secondary transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      {IconComponent && <IconComponent size={32} strokeWidth={1.5} />}
                    </div>
                    <h3 className="text-2xl font-bold mb-5 tracking-tight text-on-surface group-hover:text-secondary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-on-surface-variant text-base font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Decorative Corner Element */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-surface-container-low/30 rounded-full blur-2xl group-hover:bg-secondary/10 transition-colors" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

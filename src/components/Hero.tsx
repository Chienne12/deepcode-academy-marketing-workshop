import { motion } from 'motion/react';
import { ArrowRight, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-20 md:pt-32 md:pb-32 bg-background">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[30%] h-[30%] bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 py-1.5 px-4 bg-surface-container-high text-on-surface-variant text-[11px] font-bold tracking-[0.15em] uppercase rounded-full mb-10 border border-outline-variant/20"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              Marketing Workshop Series 2026
            </motion.div>

            {/* Headline */}
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-extrabold text-on-surface leading-[1.15] tracking-tight mb-10">
              Marketing Thực Chiến 
              <span className="block mt-2">
                <span className="relative inline-block px-4 py-1 mr-3 bg-primary-container text-on-primary-container rounded-lg -rotate-1">
                  1 Ngày
                </span>
                <span className="italic font-light text-on-surface-variant">Từ Tạo Kênh</span>
              </span>
              <span className="block mt-2">Đến Ra Tiền</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-xl mb-12 font-light">
              Chuyển đổi từ ý tưởng sang doanh thu với hệ thống khép kín. Tự tạo kênh, nội dung, thiết kế offer và tối ưu số liệu chỉ trong một ngày làm việc thực tế.
            </p>
            
            {/* CTA Area */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <motion.a
                whileHover={{ scale: 1.02, backgroundColor: 'var(--color-primary)' }}
                whileTap={{ scale: 0.98 }}
                href="#cta"
                className="bg-on-surface text-background px-10 py-5 rounded-full font-bold text-lg text-center shadow-2xl shadow-on-surface/10 flex items-center justify-center gap-3 transition-colors group"
              >
                Đăng ký ngay
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden bg-surface-container-high">
                      <img 
                        src={`https://picsum.photos/seed/user${i}/100/100`} 
                        alt="User" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-[10px] font-bold text-on-secondary">
                    +500
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-on-surface">500+ Học viên</span>
                  <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-medium">Đã tham gia & thành công</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] aspect-[4/5]">
              <img 
                src="https://picsum.photos/seed/workshop-premium/1000/1250" 
                alt="Marketing Workshop" 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 z-20 bg-background/90 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-outline-variant/10 max-w-[220px]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <Users size={20} />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Phương pháp</p>
              </div>
              <p className="font-headline text-2xl font-bold text-on-surface leading-tight">Cầm tay chỉ việc 100%</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

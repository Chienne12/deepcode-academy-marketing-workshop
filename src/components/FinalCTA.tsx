import { motion } from 'motion/react';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="cta" className="py-32 md:py-48 bg-surface-container-low relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform origin-top-right" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="bg-surface-container-lowest p-12 md:p-24 rounded-[3.5rem] border border-outline-variant/30 shadow-2xl shadow-primary/5 text-center relative overflow-hidden"
        >
          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-radial-gradient from-primary/5 to-transparent opacity-50 pointer-events-none" />

          <div className="relative z-10">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.4em] text-primary mb-8">
              BẮT ĐẦU HÀNH TRÌNH CỦA BẠN
            </span>
            
            <h2 className="font-headline text-4xl md:text-7xl font-extrabold tracking-tight mb-10 leading-[1.1] text-on-surface">
              Đến lớp với một ý tưởng, <br /> ra về với một hệ thống.
            </h2>
            
            <p className="text-xl md:text-2xl text-on-surface-variant font-light max-w-3xl mx-auto mb-16 leading-relaxed">
              Chỉ sau 01 ngày thực chiến, bạn sẽ sở hữu toàn bộ quy trình vận hành Marketing tự động hóa bằng AI. Đừng để lỡ cơ hội làm chủ cuộc chơi.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="group bg-on-surface text-background px-12 py-6 rounded-full font-bold text-lg shadow-xl hover:shadow-primary/20 transition-all flex items-center gap-3"
              >
                Đăng ký ngay
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(var(--color-primary-rgb), 0.05)' }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="border border-outline-variant text-on-surface px-12 py-6 rounded-full font-bold text-lg transition-all flex items-center gap-3"
              >
                <MessageSquare size={20} />
                Nhận tư vấn lộ trình
              </motion.a>
            </div>
            
            <div className="mt-16 pt-12 border-t border-outline-variant/10">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-on-surface-variant">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-medium tracking-wide">Ưu đãi 20% cho nhóm từ 3 người</span>
                </div>
                <div className="hidden md:block w-1 h-1 rounded-full bg-outline-variant" />
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium tracking-wide">Cam kết hỗ trợ 1:1 sau khóa học</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { CURRICULUM_AM, CURRICULUM_PM } from '../constants';
import { Sun, Moon } from 'lucide-react';

export default function Curriculum() {
  return (
    <section id="curriculum" className="py-32 md:py-48 bg-surface-container-lowest relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.3em] text-primary mb-6">
              LỘ TRÌNH THỰC CHIẾN
            </span>
            <h2 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-8 text-on-surface">
              Lịch trình chi tiết <br /> trong 01 ngày duy nhất
            </h2>
            <p className="text-xl text-on-surface-variant font-light leading-relaxed max-w-2xl">
              Từng phút giây đều được tối ưu hóa để bạn không chỉ học, mà còn kiến tạo ra sản phẩm thực tế ngay tại lớp.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Morning Session */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-surface-container-low p-10 md:p-14 rounded-[3rem] border border-outline-variant/30 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
          >
            <div className="flex items-center gap-6 mb-12">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                <Sun size={32} strokeWidth={1.5} />
              </div>
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-primary/60 block mb-1">BUỔI SÁNG</span>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-on-surface">Xây Móng & Lập Kênh</h3>
              </div>
            </div>

            <div className="space-y-10 relative border-l border-outline-variant/50 pl-10 ml-8">
              {CURRICULUM_AM.map((item, index) => (
                <div key={index} className="relative group">
                  <div className={`absolute -left-[49px] top-1.5 w-4 h-4 rounded-full border-4 border-surface-container-low transition-transform duration-300 group-hover:scale-125 ${index === 0 ? 'bg-primary' : 'bg-outline-variant'}`} />
                  <span className="text-sm font-bold text-primary tracking-wider block mb-2">{item.time}</span>
                  <h4 className="text-xl font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="text-on-surface-variant font-light leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Afternoon Session */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-on-surface p-10 md:p-14 rounded-[3rem] border border-on-surface shadow-2xl"
          >
            <div className="flex items-center gap-6 mb-12">
              <div className="w-16 h-16 bg-background/10 text-background rounded-2xl flex items-center justify-center">
                <Moon size={32} strokeWidth={1.5} />
              </div>
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-background/40 block mb-1">BUỔI CHIỀU</span>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-background">Ra Quân & Ra Tiền</h3>
              </div>
            </div>

            <div className="space-y-10 relative border-l border-background/20 pl-10 ml-8">
              {CURRICULUM_PM.map((item, index) => (
                <div key={index} className="relative group">
                  <div className={`absolute -left-[49px] top-1.5 w-4 h-4 rounded-full border-4 border-on-surface transition-transform duration-300 group-hover:scale-125 ${index === 0 ? 'bg-primary' : 'bg-background/30'}`} />
                  <span className="text-sm font-bold text-primary tracking-wider block mb-2">{item.time}</span>
                  <h4 className="text-xl font-bold text-background mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="text-background/60 font-light leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Play, Bot, Palette, Search, Video, Sparkles } from 'lucide-react';

export default function Methods() {
  return (
    <section className="py-32 md:py-48 bg-surface-container-lowest overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Sparkles size={20} />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary">
                  PHƯƠNG PHÁP ĐÀO TẠO
                </span>
              </div>
              
              <h2 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-8 text-on-surface">
                Học qua trải nghiệm <br /> "Cầm Tay Chỉ Việc"
              </h2>
              
              <p className="text-xl text-on-surface-variant font-light leading-relaxed mb-12 max-w-xl">
                Chúng tôi loại bỏ hoàn toàn lý thuyết suông. Bạn sẽ được trực tiếp sử dụng bộ công cụ AI tối tân nhất để giải quyết bài toán Marketing thực tế ngay tại chỗ.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { name: "ChatGPT Plus", icon: Bot, desc: "Tư duy chiến lược AI" },
                  { name: "Canva Pro AI", icon: Palette, desc: "Thiết kế hình ảnh chuyên nghiệp" },
                  { name: "Perplexity", icon: Search, desc: "Nghiên cứu thị trường thần tốc" },
                  { name: "TikTok/CapCut", icon: Video, desc: "Sản xuất video viral" },
                ].map((tool, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="p-6 bg-surface-container-low rounded-3xl border border-outline-variant/20 hover:border-primary/30 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-background flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                      <tool.icon size={24} className="text-primary" />
                    </div>
                    <h4 className="font-bold text-on-surface mb-1">{tool.name}</h4>
                    <p className="text-xs text-on-surface-variant">{tool.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-surface-container-low">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" 
                  alt="Marketing Workshop Session" 
                  className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-0 bg-on-surface/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-24 h-24 bg-primary text-on-surface rounded-full flex items-center justify-center shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-500">
                    <Play size={40} fill="currentColor" className="ml-2" />
                  </div>
                </div>
                
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-background/80 backdrop-blur-xl rounded-2xl border border-white/20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-sm font-medium text-on-surface italic">
                    "Học thật, làm thật, kết quả thật - Đó là cam kết của DeepCode Academy."
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

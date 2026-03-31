import { motion } from 'motion/react';
import { GROUPED_OUTCOMES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

export default function Outcomes() {
  return (
    <section id="outcomes" className="py-32 md:py-48 bg-background relative overflow-hidden border-t border-outline-variant/10">
      {/* Decorative background element */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-start">
          
          {/* Left Column: Title & Featured Card */}
          <div className="lg:w-[40%] lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.3em] text-primary mb-6">
                KẾT QUẢ NHẬN ĐƯỢC
              </span>
              <h2 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-10 text-on-surface">
                Sau khóa học, <br /> bạn sẽ làm được gì?
              </h2>
              <p className="text-lg text-on-surface-variant font-light leading-relaxed mb-12 max-w-md">
                Chúng tôi không chỉ dạy lý thuyết. Chúng tôi trang bị cho bạn bộ kỹ năng thực chiến để chuyển đổi ý tưởng thành dòng tiền ngay lập tức.
              </p>
              
              {/* Featured Card: Cam kết đầu ra */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/5 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative p-10 bg-surface-container-lowest rounded-3xl border border-outline-variant/30 shadow-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                      <CheckCircle2 size={24} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">Cam kết đầu ra</span>
                  </div>
                  <p className="text-xl font-headline font-bold text-on-surface leading-snug mb-4">
                    Hoàn thiện ít nhất 01 kênh Marketing & 01 chiến dịch nội dung.
                  </p>
                  <p className="text-sm text-on-surface-variant leading-relaxed font-light">
                    Bạn sẽ không rời khỏi lớp nếu chưa có sản phẩm thực tế có thể vận hành ngay. Đây là lời hứa về chất lượng đào tạo của chúng tôi.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Grouped Outcomes */}
          <div className="lg:w-[60%] space-y-20">
            {GROUPED_OUTCOMES.map((group, groupIndex) => (
              <motion.div
                key={group.groupTitle}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: groupIndex * 0.2, duration: 0.8 }}
                className="relative"
              >
                {/* Group Header */}
                <div className="flex items-center gap-6 mb-12">
                  <span className="text-5xl font-headline font-black text-on-surface/30 tracking-tighter">0{groupIndex + 1}</span>
                  <h3 className="text-2xl font-bold tracking-tight text-on-surface uppercase tracking-[0.1em]">
                    {group.groupTitle}
                  </h3>
                  <div className="h-[1px] flex-grow bg-outline-variant/20" />
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {group.items.map((item) => (
                    <div key={item.id} className="group">
                      <div className="flex gap-5">
                        <span className="text-xs font-bold text-primary mt-1.5 font-mono tracking-tighter">
                          {item.id}
                        </span>
                        <div>
                          <h4 className="font-bold text-lg mb-2 text-on-surface group-hover:text-primary transition-colors duration-300">
                            {item.title}
                          </h4>
                          <p className="text-sm text-on-surface-variant font-light leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

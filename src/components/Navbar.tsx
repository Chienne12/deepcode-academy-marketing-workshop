import { motion } from 'motion/react';
import { ShoppingCart } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-black tracking-tighter flex items-center gap-2">
          <span className="text-on-surface">DEEP</span>
          <span className="text-primary">CODE</span>
          <span className="text-[10px] font-bold tracking-[0.2em] text-on-surface-variant ml-1">ACADEMY</span>
        </div>
        
        <div className="hidden md:flex gap-10 items-center">
          {[
            { label: 'Trang chủ', id: 'hero' },
            { label: 'Đối tượng', id: 'for-whom' },
            { label: 'Nội dung', id: 'curriculum' },
            { label: 'Hỏi đáp', id: 'faq' }
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="font-medium text-[11px] uppercase tracking-[0.15em] text-on-surface-variant hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <motion.a
          whileHover={{ scale: 1.02, backgroundColor: 'var(--color-on-surface)', color: 'var(--color-background)' }}
          whileTap={{ scale: 0.98 }}
          href="#cta"
          className="bg-surface-container-high text-on-surface px-6 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-widest border border-outline-variant/30 transition-colors"
        >
          Đăng ký ngay
        </motion.a>
      </div>
    </nav>
  );
}

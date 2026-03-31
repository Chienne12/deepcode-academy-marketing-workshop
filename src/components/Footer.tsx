export default function Footer() {
  return (
    <footer className="bg-surface-container-low py-16 border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-black tracking-tighter flex items-center gap-2">
          <span className="text-on-surface">DEEP</span>
          <span className="text-primary">CODE</span>
          <span className="text-[10px] font-bold tracking-[0.2em] text-on-surface-variant ml-1">ACADEMY</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {['Instagram', 'LinkedIn', 'YouTube', 'Contact', 'Privacy Policy'].map((item) => (
            <a
              key={item}
              href="#"
              className="font-body text-xs font-medium tracking-widest uppercase text-on-surface-variant hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        
        <div className="font-body text-[10px] font-medium tracking-widest uppercase text-on-surface-variant">
          © 2026 DEEPCODE ACADEMY. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}

import { CheckCircle } from 'lucide-react';
import { DELIVERABLES_DATA } from '../constants';

export default function Deliverables() {
  return (
    <section className="py-24 bg-surface-container-high">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-surface-container-lowest p-12 rounded-2xl shadow-2xl border border-outline-variant/10">
          <h2 className="font-headline text-3xl font-extrabold mb-12 uppercase text-center">
            Bạn sẽ nhận được gì sau workshop?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12">
            {DELIVERABLES_DATA.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <CheckCircle className="text-secondary fill-secondary/20" size={24} />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

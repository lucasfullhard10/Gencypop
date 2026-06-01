import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="relative p-6 md:p-8 rounded-3xl bg-[#0f1319]/50 border border-white/5 flex flex-col justify-between hover:bg-[#0f1319]/80 transition-all duration-300 shadow-lg glow-card group h-full"
    >
      {/* Absolute Decorative Quote Icon */}
      <div className="absolute top-6 right-6 text-white/5 group-hover:text-white/10 transition-colors">
        <Quote size={40} className="stroke-[1.5]" />
      </div>

      <div>
        {/* Five Star rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={15}
              className={`${
                i < testimonial.rating
                  ? 'text-amber-400 fill-amber-400'
                  : 'text-gray-600'
              }`}
            />
          ))}
        </div>

        {/* Written Review */}
        <p className="text-[#e2e8f0] text-sm md:text-base leading-relaxed italic mb-6">
          "{testimonial.content}"
        </p>
      </div>

      {/* User Details */}
      <div className="flex items-center gap-4 border-t border-white/5 pt-4 mt-auto">
        <div className="w-12 h-12 rounded-full overflow-hidden border border-[#00befc]/20 bg-brand-primary flex-shrink-0">
          <img
            src={testimonial.avatarUrl}
            alt={testimonial.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h5 className="text-sm font-bold text-white group-hover:text-[#00befc] transition-colors">
            {testimonial.name}
          </h5>
          <p className="text-xs text-gray-400">
            {testimonial.role} na <span className="text-gray-300 font-semibold">{testimonial.company}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

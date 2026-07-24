"use client";

import { motion, type Variants } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Hero() {
  return (
    <motion.section
      id="top"
      className="relative overflow-hidden bg-[#F8FBFD] text-slate-900"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-gradient-to-br from-[#F8FBFD] via-[#EEF9FF] to-[#DFF4FF]"
        />

        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-sky-300/20 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut",
          }}
          className="absolute -left-40 bottom-10 h-[450px] w-[450px] rounded-full bg-cyan-200/20 blur-[120px]"
        />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #94A3B8 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            variants={fadeLeft}
            whileHover={{
              scale: 1.02,
              y: -5,
            }}
            className="flex w-[min(88%,720px)] flex-col items-center gap-3 rounded-2xl border border-dashed border-slate-300/70 bg-white/70 px-8 py-14 text-center shadow-xl backdrop-blur-md"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white">
              <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                <path d="M1 1L15 9L1 17V1Z" fill="#0EA5E9" />
              </svg>
            </span>

            <p className="eyebrow text-slate-600">Заглушка відео-фону</p>

            <p className="max-w-md text-sm leading-relaxed text-slate-500">
              Тут буде розміщено відео-тур клінікою: кабінети, обладнання та
              команда лікарів у роботі — до 30 секунд, автовідтворення без
              звуку, цикл у режимі loop. Файл буде додано після завершення
              розробки.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-6 py-28 lg:px-10">
        <motion.span
          variants={fadeUp}
          className="eyebrow mb-6 text-sky-600"
        >
          Стоматологія · Івано-Франківськ
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="max-w-3xl font-display text-[2.75rem] font-medium leading-[1.08] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl"
        >
          Догляд за посмішкою,
          <br />
          <span className="italic text-sky-600">точний як емаль.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-8 max-w-lg text-lg leading-relaxed text-slate-600"
        >
          Сучасна стоматологія повного циклу: діагностика, лікування,
          естетика та імплантація — в одному просторі, створеному для
          комфорту кожного пацієнта.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <motion.a
            href="#contacts"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-sky-500 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-sky-600"
          >
            Записатись на консультацію
          </motion.a>

          <motion.a
            href="#services"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full border border-slate-300 bg-white/80 px-7 py-3.5 text-sm font-semibold text-slate-900 backdrop-blur"
          >
            Переглянути послуги
          </motion.a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-16 grid max-w-xl grid-cols-3 gap-8 border-t border-slate-300 pt-8"
        >
          <motion.div whileHover={{ y: -6, scale: 1.04 }}>
            <p className="font-display text-3xl font-semibold text-slate-900">
              12+
            </p>
            <p className="mt-1 text-xs text-slate-500">
              років практики
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -6, scale: 1.04 }}>
            <p className="font-display text-3xl font-semibold text-slate-900">
              8 400
            </p>
            <p className="mt-1 text-xs text-slate-500">
              пацієнтів
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -6, scale: 1.04 }}>
            <p className="font-display text-3xl font-semibold text-slate-900">
              4.9
            </p>
            <p className="mt-1 text-xs text-slate-500">
              середня оцінка
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
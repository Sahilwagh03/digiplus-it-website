"use client";
import { HomeConstant } from "@/constant/homeConstant";
import { easeOut, motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

const OurWorkingModels = () => {
  const { title, description, features } = HomeConstant.OurWorkingModelSection;

  return (
    <section
      className="bg-white py-20 px-6 md:px-20 w-full relative overflow-hidden"
      id="telecom-expertise"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center font-primary mb-16 max-w-3xl mx-auto"
        >
          <h2 className="font-primary text-3xl md:text-4xl lg:text-5xl font-bold flex justify-center flex-wrap gap-x-2">
            {title.map((part, index) => (
              <span
                key={index}
                className={`${part.highlight ? "text-primary-green" : ""}`}
              >
                {part.text}
              </span>
            ))}
          </h2>
          <p className="font-third text-gray-500 mt-3 text-base md:text-lg">
            {description}
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isLastSingleCard = features.length === 4 && index === 3;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className={`bg-white border border-gray-100 rounded-xl p-6 shadow-sm group transition-shadow duration-300 ease-in-out
                ${isLastSingleCard ? "lg:col-start-2" : ""}
              `}
              >
                <div className="mb-2 flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full transition-colors duration-300 group-hover:bg-primary/20">
                  <Icon className="text-4xl text-primary group-hover:text-primary-blue transition-colors duration-300" />
                </div>
                <h3 className="font-primary text-xl font-semibold group-hover:text-primary-blue text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default OurWorkingModels;

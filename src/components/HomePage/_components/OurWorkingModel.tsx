import { HomeConstant } from "@/constant/homeConstant";

const OurWorkingModels = () => {
  const { title, description, features } = HomeConstant.OurWorkingModelSection;

  return (
    <section
      className="bg-white py-20 px-6 md:px-20 w-full relative overflow-hidden"
      id="telecom-expertise"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center font-primary mb-16 max-w-3xl mx-auto">
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
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isLastSingleCard = features.length === 4 && index === 3;

            return (
              <div
                key={index}
                className={`bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-xl transform hover:-translate-y-2 transition duration-300 ease-in-out group
                ${isLastSingleCard ? "lg:col-start-2" : ""}
              `}
              >
                <div className="mb-2 flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full transition-colors duration-300 group-hover:bg-primary/20">
                  <Icon className="text-4xl text-primary group-hover:text-primary-blue transition-colors duration-300" />
                </div>
                <h3 className="font-primary text-xl font-semibold group-hover:text-primary-blue text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurWorkingModels;

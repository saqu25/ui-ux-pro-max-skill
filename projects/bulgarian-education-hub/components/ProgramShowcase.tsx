interface ProgramShowcaseProps {
  title: string;
  icon: string;
  description: string;
  programs: string[];
  color: string;
}

export default function ProgramShowcase({
  title,
  icon,
  description,
  programs,
  color,
}: ProgramShowcaseProps) {
  return (
    <div className="card group hover:shadow-2xl transition-all">
      <div className={`${color} w-16 h-16 rounded-lg flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>

      <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h3>

      <p className="text-gray-600 dark:text-gray-400 mb-6">{description}</p>

      <div className="space-y-2">
        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Popular Programs:</p>
        <ul className="space-y-2">
          {programs.map((prog, i) => (
            <li key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
              <span className="text-primary-600">✓</span>
              {prog}
            </li>
          ))}
        </ul>
      </div>

      <button className="mt-6 w-full btn-secondary text-center">
        Learn More
      </button>
    </div>
  );
}

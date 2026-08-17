import Link from "next/link";
import { University } from "@/data/universities";

export default function UniversityCard({ university }: { university: University }) {
  return (
    <Link href={`/universities/${university.id}`}>
      <div className="card cursor-pointer group">
        <div className="mb-4">
          <div className="w-full h-48 bg-gradient-to-br from-primary-400 to-blue-500 rounded-lg flex items-center justify-center text-5xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
            {university.name.substring(0, 2)}
          </div>
        </div>

        <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
          {university.name}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
          {university.description}
        </p>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-gray-500 dark:text-gray-500">📍</span>
          <span className="text-sm text-gray-600 dark:text-gray-400">{university.location}</span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-gray-500 dark:text-gray-500">💰</span>
          <span className="text-sm text-gray-600 dark:text-gray-400">{university.tuitionEstimate}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {university.categories.slice(0, 2).map((cat) => (
            <span
              key={cat}
              className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs font-semibold rounded-full"
            >
              {cat}
            </span>
          ))}
          {university.categories.length > 2 && (
            <span className="inline-block px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-full">
              +{university.categories.length - 2}
            </span>
          )}
        </div>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {university.programs.length} Programs Available
          </p>
          <div className="mt-3 flex gap-2">
            <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              Founded {university.founded}
            </span>
          </div>
        </div>

        <div className="mt-4">
          <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm group-hover:gap-2 inline-flex items-center">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
}

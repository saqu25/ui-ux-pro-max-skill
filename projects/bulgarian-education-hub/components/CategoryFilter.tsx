"use client";

import { useState } from "react";

interface CategoryFilterProps {
  categories: string[];
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <button
        onClick={() => setActive(null)}
        className={`px-6 py-2 rounded-full font-semibold transition-all ${
          active === null
            ? "bg-primary-600 text-white shadow-lg"
            : "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700"
        }`}
      >
        All Programs
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(active === cat ? null : cat)}
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            active === cat
              ? "bg-primary-600 text-white shadow-lg"
              : "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

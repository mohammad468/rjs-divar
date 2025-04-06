import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const Combo = ({ title, name, value, onChange, isLoading }) => {
  const [query, setQuery] = useState(value || "");
  const [isOpen, setIsOpen] = useState(false);

  const fetchSearchResults = async (searchTerm) => {
    if (!searchTerm || searchTerm.length < 3) return [];

    const response = await new Promise((resolve) =>
      setTimeout(() => {
        const mockData = [
          "React",
          "JavaScript",
          "Tailwind CSS",
          "Node.js",
          "Next.js",
          "Vue.js",
          "Angular",
          "TypeScript",
          "Redux",
          "GraphQL",
        ];
        const filteredData = mockData.filter((item) =>
          item.toLowerCase().includes(searchTerm.toLowerCase())
        );
        resolve(filteredData);
      }, 500)
    );

    return response;
  };

  const { data: searchResults, isLoading: isFetching } = useQuery(
    ["search", query],
    () => fetchSearchResults(query),
    {
      enabled: query.length >= 3,
      keepPreviousData: true,
    }
  );

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
    setIsOpen(true);
    onChange && onChange(name, inputValue);
  };

  const handleSelectItem = (item) => {
    setQuery(item);
    setIsOpen(false);
    onChange && onChange(name, item);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {title && <h2 className="text-lg font-semibold mb-2">{title}</h2>}

      <input
        type="text"
        name={name}
        value={query}
        onChange={handleInputChange}
        onFocus={() => setIsOpen(true)}
        placeholder="حداقل 3 کاراکتر وارد کنید..."
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {isOpen && query.length >= 3 && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {isFetching ? (
            <li className="p-3 text-gray-500">در حال جستجو...</li>
          ) : searchResults?.length > 0 ? (
            searchResults.map((item, index) => (
              <li
                key={index}
                onClick={() => handleSelectItem(item)}
                className="p-3 cursor-pointer hover:bg-gray-100"
              >
                {item}
              </li>
            ))
          ) : (
            <li className="p-3 text-gray-500">نتیجه‌ای پیدا نشد.</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Combo;

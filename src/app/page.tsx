"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import SearchForm from "@/components/SearchForm";
import DocumentView from "@/components/DocumentView";
import { type Document } from "./types/document";
import { sanitizeString } from "@/lib/utils";

interface SearchResult {
  metadata: Document["metadata"];
  content: string;
}

const runBootstrapProcedure = async () => {
  const response = await fetch("/api/bootstrap", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const body = await response.json();
    console.log(body);
    throw new Error(`API request failed with status ${response.status}`);
  }
};

const checkAndBootstrapIndex = async (
  setIsBootstrapping: (isBootstrapping: boolean) => void,
  setIsIndexReady: (isIndexReady: boolean) => void
) => {
  setIsBootstrapping(true);
  await runBootstrapProcedure();
  setIsBootstrapping(false);
  setIsIndexReady(true);
};

const handleSearch = async (
  query: string,
  setResults: (results: SearchResult[]) => void,
  setIsSearching: (isSearching: boolean) => void
) => {
  setIsSearching(true);
  const response = await fetch("/api/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    const body = await response.json();
    console.log(body);
    throw new Error(`API request failed with status ${response.status}`);
  }

  const { results } = await response.json();
  setResults(results);
  setIsSearching(false);
};

const suggestedSearches = [
  "Landmark judgments by the Indian Supreme Court",
  "Cases related to the Fundamental Rights in India",
  "How does Article 21 protect personal liberties in India?",
  "Important Indian cases about religious freedom",
  "Cases involving the Indian Penal Code and constitutional rights",
  "What are the constitutional limitations of free speech in India?",
  "Indian cases involving the right to privacy",
  "Influential judgments in Indian constitutional law",
  "Cases of judicial review in India",
  "How does the Indian judiciary protect human rights?",
  "What are the key human rights issues in Indian courts?",
  "Landmark Indian cases related to women’s rights",
  "Important Indian cases on equality and discrimination",
  "Indian cases that shaped the protection of labor rights",
  "Famous cases that impacted the right to property in India",
  "How does the Indian legal system handle cases of communal violence?",
  "What cases involved the interpretation of secularism in India?",
  "Cases about personal freedoms being violated",
  "Cases involving a US President",
  "Cases involving guns",
  "Cases where Nixon was the defendant",
  "How much power does the commerce clause give Congress?",
  "Cases about personal rights or congressional overreach?",
  "Cases involving the ability to pay for an attorney",
  "Cases about the right to remain silent",
  "Landmark cases that shaped freedom of speech laws",
  "Cases where defendant was found with a gun",
  "What cases involved personal rights or congressional overreach?",
  "Cases where the judge expressed grave concern",
];


export default function Home() {
  const [isBootstrapping, setIsBootstrapping] = useState(false);
  const [isIndexReady, setIsIndexReady] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<SearchResult | null>(
    null
  );

  useEffect(() => {
    checkAndBootstrapIndex(setIsBootstrapping, setIsIndexReady);
  }, []);

  const clearResults = () => {
    setQuery("");
    setResults([]);
  };

  if (selectedDocument) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
        <DocumentView
          document={selectedDocument}
          quote={selectedDocument.metadata.pageContent}
          onBack={() => setSelectedDocument(null)}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Transparent Navbar with Subtle Purple Hint */}
      <div className="fixed top-0 left-0 w-full z-50 bg-opacity-40 backdrop-blur-lg bg-gradient-to-r from-purple-400 via-transparent to-purple-400 px-6 py-5 shadow-lg rounded-lg">
        <nav className="flex justify-between items-center">
          <div className="text-purple font-bold text-2xl">Artemis</div>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16 pt-32">
        {/* Main Content */}
        <div className="flex flex-col items-center w-full mb-8 space-y-8">
          {isBootstrapping && (
            <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
              <p className="text-gray-600">Processing legal documents...</p>
              <div className="spinner border-4 border-t-transparent border-indigo-600 rounded-full w-5 h-5 animate-spin"></div>
            </div>
          )}
        </div>

        {isIndexReady && !isBootstrapping && (
          <div className="w-full">
            <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-6">
              Your Legal Docs Explorer Buddy
            </h1>
            <p className="text-center text-gray-400 text-lg mb-12">
             
            Leverage natural language to navigate and analyze legal documents and precedents.
            </p>

            <div className="max-w-3xl mx-auto mb-12">
              <SearchForm
                suggestedSearches={suggestedSearches}
                onSearch={(query: string) => {
                  handleSearch(query, setResults, setIsSearching);
                  setQuery(query);
                }}
              />
            </div>

            {isSearching && (
              <div className="flex justify-center mb-8">
                <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                  <p className="text-gray-600">Searching documents...</p>
                  <div className="spinner border-3 border-t-transparent border-indigo-600 rounded-full w-4 h-4 animate-spin"></div>
                </div>
              </div>
            )}

            {results.length > 0 && query && (
              <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-lg shadow-sm">
                <p className="text-gray-700">
                  Found {results.length} result{results.length > 1 ? "s" : ""}{" "}
                  for{" "}
                  <span className="font-semibold text-indigo-600">
                    "{query}"
                  </span>
                </p>
                <button
                  onClick={clearResults}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Clear results"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {results.map((result, index) => (
                <Card
                  key={index}
                  className="bg-gray-800 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => setSelectedDocument(result)}
                >
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-3 text-white">
                      {result.metadata.title}
                    </h2>
                    <blockquote className="relative p-4 mb-4 bg-gray-700 rounded-lg">
                      <p className="text-gray-300 line-clamp-4 italic">
                        {sanitizeString(result.metadata.pageContent)}
                      </p>
                    </blockquote>
                    <div className="space-y-2 text-sm text-gray-500">
                      <div className="flex items-center">
                        <span className="font-medium text-gray-400 w-20">
                          Topic:
                        </span>
                        <span className="truncate">
                          {result.metadata.topic}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium text-gray-400 w-20">
                          Verdict:
                        </span>
                        <span className="truncate">
                          {result.metadata.outcome}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium text-gray-400 w-20">
                          Date:
                        </span>
                        <span className="text-gray-400">
                          {new Date(result.metadata.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

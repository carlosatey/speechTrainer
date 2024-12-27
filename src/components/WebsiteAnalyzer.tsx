import React, { useState } from 'react';
import { Search, Globe } from 'lucide-react';

interface WebsiteAnalyzerProps {
  onAnalysisComplete: (keyPoints: string[]) => void;
}

export function WebsiteAnalyzer({ onAnalysisComplete }: WebsiteAnalyzerProps) {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      const mockKeyPoints = [
        "Product increases productivity by 50%",
        "Available in 3 different pricing tiers",
        "24/7 customer support",
        "Integration with popular tools",
      ];
      onAnalysisComplete(mockKeyPoints);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-center mb-8">
        <Globe size={48} className="text-indigo-600" />
      </div>
      <h2 className="text-xl font-semibold text-center mb-6 text-indigo-900">
        Select the Training URL
      </h2>
      <form onSubmit={handleAnalyze} className="space-y-4">
        <div className="relative">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            className="w-full px-4 py-3 rounded-xl border border-indigo-100 focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-300"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-2 rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Search size={20} />
          </button>
        </div>
      </form>
      
      {loading && (
        <div className="mt-8 text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-indigo-500 border-t-transparent"></div>
          <p className="mt-4 text-indigo-900">Analyzing website content...</p>
        </div>
      )}
    </div>
  );
}
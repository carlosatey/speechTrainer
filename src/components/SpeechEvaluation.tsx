import React from 'react';
import { CheckCircle, XCircle, Award } from 'lucide-react';

interface SpeechEvaluationProps {
  keyPoints: string[];
  score: number;
  matchedPoints: string[];
}

export function SpeechEvaluation({ keyPoints, score, matchedPoints }: SpeechEvaluationProps) {
  return (
    <div className="w-full space-y-8">
      <div className="text-center">
        <Award size={48} className="mx-auto text-indigo-600 mb-4" />
        <h2 className="text-2xl font-bold text-indigo-900 mb-2">Speech Evaluation</h2>
        <p className="text-gray-600">Here's how well you covered the key points</p>
      </div>
      
      <div className="relative pt-1">
        <div className="flex items-center justify-between mb-2">
          <span className="text-lg font-semibold text-indigo-900">Overall Score</span>
          <span className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {score}%
          </span>
        </div>
        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000"
            style={{ width: `${score}%` }}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-indigo-900">Key Points Coverage:</h3>
        {keyPoints.map((point, index) => {
          const isMatched = matchedPoints.includes(point);
          return (
            <div
              key={index}
              className={`flex items-start space-x-3 p-4 rounded-xl transition-all duration-300 ${
                isMatched ? 'bg-green-50' : 'bg-red-50'
              }`}
            >
              {isMatched ? (
                <CheckCircle className="flex-shrink-0 text-green-500 mt-0.5" size={20} />
              ) : (
                <XCircle className="flex-shrink-0 text-red-500 mt-0.5" size={20} />
              )}
              <span className={isMatched ? 'text-green-700' : 'text-red-700'}>
                {point}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
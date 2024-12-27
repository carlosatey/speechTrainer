export type KeyPoint = string;

export interface EvaluationResult {
  score: number;
  matchedPoints: KeyPoint[];
}
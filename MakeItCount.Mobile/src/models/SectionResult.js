/**
 * Represents the result for a section of exercises.
 */
export default class SectionResult {
  constructor(workoutId, workoutItemId) {
    this.workoutId = workoutId || null;
    this.nbSets = 3;
    this.exerciseResults = new Map(); // change this back to an array
  }
}

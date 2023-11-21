export default class WorkoutResults {
  /**
   *
   * @param {number} workoutId
   * @param {string} userId
   */
  constructor() {
    this.workoutId;
    this.userId;
    this.date;
    this.notes;
    this.nbSets = 3;
    this.exerciseResults = [];
  }
}

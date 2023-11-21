/**
 * Represents the result for a single exercise.
 */
export default class ExerciseResult {
  constructor(
    exerciseId,
    name,
    setNumber,
    rep,
    weight,
    calories,
    distance,
    time
  ) {
    this.workoutItemId = null;
    this.name = name || null;
    this.exerciseId = exerciseId || null;
    this.setNumber = setNumber || null;
    this.reps = rep || null;
    this.weight = weight || null;
    this.calories = calories || null;
    this.distance = distance || null;
    this.time = time || null;
  }
}

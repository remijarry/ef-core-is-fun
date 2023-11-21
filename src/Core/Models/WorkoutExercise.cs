using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Models;

public class WorkoutExercise
{
    public int ExerciseId { get; set; }
    public int WorkoutId { get; set; }

    public virtual Exercise? Exercise { get; set; }
    public virtual Workout? Workout { get; set; }
}

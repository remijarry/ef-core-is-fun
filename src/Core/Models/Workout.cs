using System.Text.Json.Serialization;

namespace Core.Models
{
    public class Workout
    {
        public int WorkoutId { get; set; }
        public string ShortDescription { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string WarmupDescription { get; set; } = string.Empty;
        public string CooldownDescription { get; set; } = string.Empty;
        public int Order { get; set; }
        public string TrackName { get; set; } = string.Empty;
        public int Week { get; set; }
        public List<WorkoutItem> WorkoutItems { get; set; } = new();
        public List<Exercise> WarmupExercises { get; set; } = new();
        public List<Exercise> CooldownExercises { get; set; } = new();
    }
}

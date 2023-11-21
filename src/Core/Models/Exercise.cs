using System.Text.Json.Serialization;

namespace Core.Models
{
    public class Exercise
    {
        [JsonPropertyName("id")]
        public int ExerciseId { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; } = string.Empty;

        [JsonPropertyName("videoId")]
        public string VideoId { get; set; } = string.Empty;

        public virtual List<Workout> Workouts { get; set; } = new();
        public virtual List<WorkoutItem> WorkoutItems { get; set; } = new();

    }
}
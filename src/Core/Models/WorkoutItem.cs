using System.Text.Json.Serialization;

namespace Core.Models
{
    public class WorkoutItem
    {
        [JsonPropertyName("id")]
        public int WorkoutItemId { get; set; }
        public int WorkoutId { get; set; }
        [JsonPropertyName("selectedExercises")]
        public List<Exercise> SelectedExercises { get; set; } = new();
    }
}
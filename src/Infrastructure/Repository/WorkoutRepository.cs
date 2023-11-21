using Core.Models;

namespace Infrastructure.Repository
{
    public class WorkoutRepository
    {
        private readonly DataContext _context;

        public WorkoutRepository(DataContext context) 
        {
            _context = context;
        }

        //public List<Workout> GetWorkouts()
        //{
        //    var workouts = _context.Workouts.ToList();
        //    return workouts;
        //}
    }
}

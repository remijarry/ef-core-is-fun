using Core.Models;
using Infrastructure;
using Infrastructure.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers
{
    public class WorkoutController : BaseApiController
    {
        private readonly ILogger<WorkoutController> _logger;
        private readonly DataContext _context;

        public WorkoutController(ILogger<WorkoutController> logger, DataContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet(Name = "GetWorkouts")]
        public async Task<IEnumerable<Workout>> GetWorkouts()
        {
            //var result =  await _context.Workouts.ToListAsync();
            //return result;
            return null!;
        }

        [HttpPost("addworkouts")]
        public IActionResult AddWorkouts(List<Workout> workouts)
        {
            foreach (var workout in workouts)
            {
                workout.WarmupExercises.ForEach(exercise => _context.Entry(exercise).State = EntityState.Detached);
                workout.CooldownExercises.ForEach(exercise => _context.Entry(exercise).State = EntityState.Detached);

                _context.Workouts.Add(workout);
            }

            _context.SaveChanges();
            return Ok();
        }

        [HttpPost("addworkoutitems")]
        public async Task<IActionResult> AddWorkoutItem(WorkoutItem workoutsItems)
        {
            //foreach (var exercise in workoutsItems.SelectedExercises)
            //{
            //    _context.Entry(exercise).State = EntityState.Unchanged;
            //}
            //await _context.WorkoutItems.AddRangeAsync(workoutsItems);
            //await _context.SaveChangesAsync();
            return Ok();
        }
    }
}

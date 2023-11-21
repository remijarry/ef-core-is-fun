using Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.Reflection;
using System.Xml.Linq;

namespace Infrastructure
{
    public class DataContext : DbContext
    {
        //public DbSet<Workout> Workouts { get; set; } = null!;
        public DbSet<Exercise> Exercises { get; set; } = null!;

        //public DbSet<WorkoutItem> WorkoutItems { get; set; } = null!;

        public DbSet<Workout> Workouts { get; set; }

        public DataContext()
        {
            
        }

        public DataContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.HasDefaultSchema("dbo");
            //modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());


            modelBuilder.Entity<Workout>().HasMany(Workout => Workout.CooldownExercises).WithMany(e => e.Workouts).UsingEntity("WorkoutCooldownExercises");
            modelBuilder.Entity<Workout>().HasMany(Workout => Workout.WarmupExercises).WithMany(e => e.Workouts).UsingEntity("WorkoutWarmupExercises");
            modelBuilder.Entity<WorkoutItem>().HasMany(wi => wi.SelectedExercises).WithMany(e => e.WorkoutItems).UsingEntity("WorkoutItemExercises");

            //modelBuilder.Entity<Workout>().HasData(
            //    new Workout
            //    {
            //        WorkoutId = 225415905,
            //        TrackName = "minimalist",
            //        Order = 1,
            //        Week = 1,
            //        Title = "Minimalist - Week 1 Day 1",
            //        ShortDescription = @"A) Coach's Notes<br/>B) PreFatigue - Scaps & Core<br/>C) Strength Giant Set - Vertical Push and Pull<br/>D) Upper Body Muscle Endurance Part 1<br/>E) Upper Body Muscle Endurance Part 2<br/>\n",
            //        WarmupDescription = @"FBB Overhead Prep 2.0\n\n2-3 Rounds\n100' Bear Crawl Slow and Steady or cardio of choice x 60 sec \n10 Prone Trap 3 Raises \n*Lift the shoulders and feet away from the surface you are laying on. Try to minimize the shoulder blades shrugging up toward your ears. \n10/arm DB External Rotations, Elbow on Knee (BW - Prone Snow Angels - 10 reps SLOW and Control)\n*Keep the weight light and do not allow the shoulder blade to move as you rotate the shoulder. ",
            //        CooldownDescription = @"FBB Shoulder Cooldown\n\nOn all stretches. FOCUS, breathe deep, exhale slowly and sink into the stretch. I am sure the 30-60 sec of the stretch will require some fidgeting, but once you find a good spot relax deeply. \n\n1. Passive Hang x 1 minute \n*Support the feet to take load off of the shoulders. You may also use lifting straps to make it easier on your grip and you can fully relax into the stretch. \n\n2. Supianted Passive Hang x 1 minute\n*Support the feet to take load off of the shoulders. You may also use lifting straps to make it easier on your grip and you can fully relax into the stretch. \n\n3. Seated Shoulder Extension with Barbell OR Shoulder Extension on Floor x 2 minutes\n*Find a comfortable positions for the shoulders. Keep your shoulders down and back during the stretch. \n\n4. Prayer Stretch x 2 min or 1 min/side\n*Perform on the bench as demonstrated, or put one elbow against the wall and lean into it. ",
            //        WarmupExercises = new List<Exercise> { new Exercise { ExerciseId = 2356927 } }
            //    });

            //modelBuilder.Entity<Workout>()
            //    .HasMany(w => w.WarmUpExercises)
            //    .WithMany(e => e.Workouts)
            //    .UsingEntity<WorkoutExercise>(
            //        j => j.HasOne<Exercise>().WithMany().HasForeignKey("ExerciseId"),
            //        j => j.HasOne<Workout>().WithMany().HasForeignKey("WorkoutId")
            //    );

            //modelBuilder.Entity<Workout>()
            //    .HasMany(w => w.CoolDownExercises)
            //    .WithMany(e => e.Workouts)
            //    .UsingEntity<WorkoutExercise>(
            //        j => j.HasOne<Exercise>().WithMany().HasForeignKey("ExerciseId"),
            //        j => j.HasOne<Workout>().WithMany().HasForeignKey("WorkoutId")
            //    );


            //modelBuilder.Entity<Exercise>()
            //    .HasMany(e => e.WorkoutItems)
            //    .WithMany(w => w.SelectedExercises)
            //    .UsingEntity<WorkoutItemExercise>();
        }
    }
}
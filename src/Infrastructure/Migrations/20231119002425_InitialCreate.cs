using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Exercises",
                columns: table => new
                {
                    ExerciseId = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: false),
                    VideoId = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Exercises", x => x.ExerciseId);
                });

            migrationBuilder.CreateTable(
                name: "Workouts",
                columns: table => new
                {
                    WorkoutId = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    ShortDescription = table.Column<string>(type: "text", nullable: false),
                    Title = table.Column<string>(type: "text", nullable: false),
                    WarmupDescription = table.Column<string>(type: "text", nullable: false),
                    CooldownDescription = table.Column<string>(type: "text", nullable: false),
                    Order = table.Column<int>(type: "integer", nullable: false),
                    TrackName = table.Column<string>(type: "text", nullable: false),
                    Week = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Workouts", x => x.WorkoutId);
                });

            migrationBuilder.CreateTable(
                name: "WorkoutCooldownExercises",
                columns: table => new
                {
                    WarmupExercisesExerciseId = table.Column<int>(type: "integer", nullable: false),
                    WorkoutsWorkoutId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkoutCooldownExercises", x => new { x.WarmupExercisesExerciseId, x.WorkoutsWorkoutId });
                    table.ForeignKey(
                        name: "FK_WorkoutCooldownExercises_Exercises_WarmupExercisesExerciseId",
                        column: x => x.WarmupExercisesExerciseId,
                        principalTable: "Exercises",
                        principalColumn: "ExerciseId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_WorkoutCooldownExercises_Workouts_WorkoutsWorkoutId",
                        column: x => x.WorkoutsWorkoutId,
                        principalTable: "Workouts",
                        principalColumn: "WorkoutId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "WorkoutItem",
                columns: table => new
                {
                    WorkoutItemId = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    WorkoutId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkoutItem", x => x.WorkoutItemId);
                    table.ForeignKey(
                        name: "FK_WorkoutItem_Workouts_WorkoutId",
                        column: x => x.WorkoutId,
                        principalTable: "Workouts",
                        principalColumn: "WorkoutId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "WorkoutWarmupExercises",
                columns: table => new
                {
                    WarmupExercisesExerciseId = table.Column<int>(type: "integer", nullable: false),
                    WorkoutsWorkoutId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkoutWarmupExercises", x => new { x.WarmupExercisesExerciseId, x.WorkoutsWorkoutId });
                    table.ForeignKey(
                        name: "FK_WorkoutWarmupExercises_Exercises_WarmupExercisesExerciseId",
                        column: x => x.WarmupExercisesExerciseId,
                        principalTable: "Exercises",
                        principalColumn: "ExerciseId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_WorkoutWarmupExercises_Workouts_WorkoutsWorkoutId",
                        column: x => x.WorkoutsWorkoutId,
                        principalTable: "Workouts",
                        principalColumn: "WorkoutId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "WorkoutItemExercises",
                columns: table => new
                {
                    SelectedExercisesExerciseId = table.Column<int>(type: "integer", nullable: false),
                    WorkoutItemsWorkoutItemId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkoutItemExercises", x => new { x.SelectedExercisesExerciseId, x.WorkoutItemsWorkoutItemId });
                    table.ForeignKey(
                        name: "FK_WorkoutItemExercises_Exercises_SelectedExercisesExerciseId",
                        column: x => x.SelectedExercisesExerciseId,
                        principalTable: "Exercises",
                        principalColumn: "ExerciseId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_WorkoutItemExercises_WorkoutItem_WorkoutItemsWorkoutItemId",
                        column: x => x.WorkoutItemsWorkoutItemId,
                        principalTable: "WorkoutItem",
                        principalColumn: "WorkoutItemId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_WorkoutCooldownExercises_WorkoutsWorkoutId",
                table: "WorkoutCooldownExercises",
                column: "WorkoutsWorkoutId");

            migrationBuilder.CreateIndex(
                name: "IX_WorkoutItem_WorkoutId",
                table: "WorkoutItem",
                column: "WorkoutId");

            migrationBuilder.CreateIndex(
                name: "IX_WorkoutItemExercises_WorkoutItemsWorkoutItemId",
                table: "WorkoutItemExercises",
                column: "WorkoutItemsWorkoutItemId");

            migrationBuilder.CreateIndex(
                name: "IX_WorkoutWarmupExercises_WorkoutsWorkoutId",
                table: "WorkoutWarmupExercises",
                column: "WorkoutsWorkoutId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "WorkoutCooldownExercises");

            migrationBuilder.DropTable(
                name: "WorkoutItemExercises");

            migrationBuilder.DropTable(
                name: "WorkoutWarmupExercises");

            migrationBuilder.DropTable(
                name: "WorkoutItem");

            migrationBuilder.DropTable(
                name: "Exercises");

            migrationBuilder.DropTable(
                name: "Workouts");
        }
    }
}

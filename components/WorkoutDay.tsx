import { WorkoutDayType } from '../data/workoutPlan';

interface WorkoutDayProps {
  day: WorkoutDayType;
}

export default function WorkoutDay({ day }: WorkoutDayProps) {
  return (
    <div className="p-4 border rounded-lg shadow bg-white">
      <h2 className="text-2xl font-semibold text-gray-800">Day {day.day}: {day.title}</h2>
      {day.exercises ? (
        <ul className="list-disc ml-5 mt-2 space-y-1">
          {day.exercises.map((exercise, index) => (
            <li key={index} className="text-gray-700">
              {exercise.name}
              {exercise.sets && ` - ${exercise.sets} sets`}
              {exercise.reps && ` of ${exercise.reps} reps`}
              {exercise.duration && ` for ${exercise.duration}`}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-2 text-gray-600">No exercises today.</p>
      )}
      {day.notes && <p className="mt-2 text-gray-600 italic">{day.notes}</p>}
    </div>
  );
}
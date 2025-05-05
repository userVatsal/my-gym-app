import { workoutPlan } from '../data/workoutPlan';
import WorkoutDay from './WorkoutDay';

export default function WorkoutPlan() {
  return (
    <div>
      <div className="my-4 p-4 bg-gray-100 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">General Guidelines</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li>Warm up before each workout with 5-10 minutes of light cardio and dynamic stretches.</li>
          <li>Cool down after each workout with static stretches.</li>
          <li>Adjust weights to ensure you can complete the sets with good form.</li>
          <li>Stay hydrated and maintain a balanced diet.</li>
          <li>As a vegetarian, ensure adequate protein intake through sources like lentils, beans, tofu, paneer, and dairy.</li>
        </ul>
      </div>
      <div className="space-y-4">
        {workoutPlan.map((day) => (
          <WorkoutDay key={day.day} day={day} />
        ))}
      </div>
    </div>
  );
}
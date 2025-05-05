export interface Exercise {
    name: string;
    sets?: number;
    reps?: string;
    duration?: string;
  }
  
  export interface WorkoutDayType {
    day: number;
    title: string;
    exercises?: Exercise[];
    notes?: string;
  }
  
  export const workoutPlan: WorkoutDayType[] = [
    {
      day: 1,
      title: 'Upper Body Strength',
      exercises: [
        { name: 'Bench Press', sets: 3, reps: '8-12' },
        { name: 'Overhead Press', sets: 3, reps: '8-12' },
        { name: 'Pull-ups', sets: 3, reps: '8-12' },
        { name: 'Dumbbell Rows', sets: 3, reps: '8-12' },
        { name: 'Bicep Curls', sets: 2, reps: '12-15' },
        { name: 'Tricep Extensions', sets: 2, reps: '12-15' },
      ],
    },
    {
      day: 2,
      title: 'Lower Body and Cardio',
      exercises: [
        { name: 'Squats', sets: 3, reps: '15-20' },
        { name: 'Lunges', sets: 3, reps: '15-20 per leg' },
        { name: 'Leg Press', sets: 3, reps: '15-20' },
        { name: 'Calf Raises', sets: 3, reps: '20' },
        { name: 'Cardio', duration: '20-30 minutes' },
      ],
      notes: 'Use lighter weights for higher reps to focus on endurance and fat loss.',
    },
    {
      day: 3,
      title: 'Rest or Light Activity',
      notes: 'Engage in light activities like walking or yoga.',
    },
    {
      day: 4,
      title: 'Upper Body Strength',
      exercises: [
        { name: 'Incline Bench Press', sets: 3, reps: '8-12' },
        { name: 'Arnold Press', sets: 3, reps: '8-12' },
        { name: 'Chin-ups', sets: 3, reps: '8-12' },
        { name: 'Face Pulls', sets: 3, reps: '12-15' },
        { name: 'Hammer Curls', sets: 2, reps: '12-15' },
        { name: 'Skull Crushers', sets: 2, reps: '12-15' },
      ],
    },
    {
      day: 5,
      title: 'Full Body Circuit',
      exercises: [
        { name: 'Circuit: 3 rounds' },
        { name: 'Push-ups', reps: '15' },
        { name: 'Bodyweight Squats', reps: '20' },
        { name: 'Dumbbell Rows', reps: '15 per arm' },
        { name: 'Plank', duration: '30-60 seconds' },
        { name: 'Jumping Jacks', duration: '30 seconds' },
        { name: 'Rest 1-2 minutes between rounds' },
      ],
    },
    {
      day: 6,
      title: 'Rest or Light Cardio',
      notes: 'Optional light cardio like 20 minutes of brisk walking.',
    },
    {
      day: 7,
      title: 'Rest',
      notes: 'Complete rest day.',
    },
  ];
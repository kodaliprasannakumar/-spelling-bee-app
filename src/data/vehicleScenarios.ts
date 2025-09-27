// Autonomous Vehicle Lab - Static Data

import { DrivingScenario, TrafficScenario, DataTrainingTask, CodeBlock } from '../types/vehicle';

// Code blocks for drag-and-drop coding
export const codeBlocks: CodeBlock[] = [
  // Sensor blocks
  { id: 'sensor-light-red', type: 'condition', text: 'IF light is red', color: 'bg-red-500', category: 'sensors' },
  { id: 'sensor-light-green', type: 'condition', text: 'IF light is green', color: 'bg-green-500', category: 'sensors' },
  { id: 'sensor-obstacle', type: 'condition', text: 'IF obstacle ahead', color: 'bg-yellow-500', category: 'sensors' },
  { id: 'sensor-pedestrian', type: 'condition', text: 'IF pedestrian crossing', color: 'bg-orange-500', category: 'sensors' },
  { id: 'sensor-parking', type: 'condition', text: 'IF parking space found', color: 'bg-blue-500', category: 'sensors' },
  
  // Action blocks
  { id: 'action-stop', type: 'action', text: 'THEN stop', color: 'bg-red-600', category: 'actions' },
  { id: 'action-go', type: 'action', text: 'THEN go', color: 'bg-green-600', category: 'actions' },
  { id: 'action-turn-left', type: 'action', text: 'THEN turn left', color: 'bg-yellow-600', category: 'actions' },
  { id: 'action-turn-right', type: 'action', text: 'THEN turn right', color: 'bg-yellow-600', category: 'actions' },
  { id: 'action-slow-down', type: 'action', text: 'THEN slow down', color: 'bg-orange-600', category: 'actions' },
  { id: 'action-park', type: 'action', text: 'THEN park', color: 'bg-blue-600', category: 'actions' },
  
  // Logic blocks
  { id: 'logic-and', type: 'if', text: 'AND', color: 'bg-purple-500', category: 'logic' },
  { id: 'logic-or', type: 'if', text: 'OR', color: 'bg-purple-600', category: 'logic' },
  { id: 'logic-else', type: 'else', text: 'ELSE', color: 'bg-gray-500', category: 'logic' },
];

// Driving scenarios for coding challenges
export const drivingScenarios: DrivingScenario[] = [
  {
    id: 'traffic-light-basics',
    title: 'Stop at Red, Go on Green! 🚦',
    description: 'Teach your car to recognize and respond to traffic lights safely',
    ageRange: { min: 6, max: 12 },
    difficulty: 'easy',
    duration: 15,
    safetyLevel: 'green',
    materials: ['Code blocks', 'Traffic light images', 'Decision tree', 'Safety checklist'],
    steps: [
      {
        id: 1,
        instruction: 'Look at the traffic light',
        visualCue: '🚦',
        expectedAction: 'Identify light color',
        codeBlocks: [
          { id: 'sensor-light-red', type: 'condition', text: 'IF light is red', color: 'bg-red-500', category: 'sensors' },
          { id: 'sensor-light-green', type: 'condition', text: 'IF light is green', color: 'bg-green-500', category: 'sensors' }
        ],
        explanation: 'First, we need to see what color the light is. Red means stop, green means go!',
        safety: 'Always look both ways before proceeding, even on green!'
      },
      {
        id: 2,
        instruction: 'Program the red light response',
        visualCue: '🔴',
        expectedAction: 'Stop when light is red',
        codeBlocks: [
          { id: 'sensor-light-red', type: 'condition', text: 'IF light is red', color: 'bg-red-500', category: 'sensors' },
          { id: 'action-stop', type: 'action', text: 'THEN stop', color: 'bg-red-600', category: 'actions' }
        ],
        explanation: 'When the light is red, your car must stop completely. This keeps everyone safe!',
        safety: 'Stop means STOP! Never try to rush through a red light.'
      },
      {
        id: 3,
        instruction: 'Program the green light response',
        visualCue: '🟢',
        expectedAction: 'Go when light is green',
        codeBlocks: [
          { id: 'sensor-light-green', type: 'condition', text: 'IF light is green', color: 'bg-green-500', category: 'sensors' },
          { id: 'action-go', type: 'action', text: 'THEN go', color: 'bg-green-600', category: 'actions' }
        ],
        explanation: 'When the light is green, your car can go, but always check for pedestrians first!',
        safety: 'Look left, right, and left again before going, even on green!'
      },
      {
        id: 4,
        instruction: 'Test your code',
        visualCue: '🧪',
        expectedAction: 'Run simulation to test',
        codeBlocks: [],
        explanation: 'Now let\'s test your code! Watch how your car responds to different light colors.',
        safety: 'In real life, always have an adult nearby when testing!'
      },
      {
        id: 5,
        instruction: 'Add safety checks',
        visualCue: '🛡️',
        expectedAction: 'Add pedestrian detection',
        codeBlocks: [
          { id: 'sensor-pedestrian', type: 'condition', text: 'IF pedestrian crossing', color: 'bg-orange-500', category: 'sensors' },
          { id: 'action-stop', type: 'action', text: 'THEN stop', color: 'bg-red-600', category: 'actions' }
        ],
        explanation: 'Great! Now your car will also stop for pedestrians, making it even safer!',
        safety: 'Pedestrians always have the right of way. Safety first!'
      },
      {
        id: 6,
        instruction: 'Celebrate your success!',
        visualCue: '🎉',
        expectedAction: 'Complete the challenge',
        codeBlocks: [],
        explanation: 'Amazing work! You\'ve programmed a smart car that follows traffic rules and keeps everyone safe!',
        safety: 'Remember: Real driving requires a license and lots of practice!'
      }
    ],
    safetyWarnings: [
      'This is a simulation - real cars need drivers with licenses',
      'Always have adult supervision when learning about traffic',
      'Never try to program real cars without proper training',
      'Traffic lights are there to keep everyone safe'
    ],
    learningObjectives: [
      'Understand basic traffic light logic',
      'Learn conditional programming (if/then)',
      'Practice safety-first thinking',
      'Develop problem-solving skills'
    ],
    howItWorks: 'Traffic lights use sensors and timers to control when cars can go. Your code teaches the car to "see" the light color and respond appropriately. Red means stop (safety), green means go (when safe), and yellow means slow down and prepare to stop. The car also checks for pedestrians and other obstacles before moving.',
    image: '/images/traffic-light.jpg'
  },
  {
    id: 'obstacle-avoidance',
    title: 'Avoid Obstacles Like a Pro! 🚧',
    description: 'Program your car to detect and avoid obstacles on the road',
    ageRange: { min: 7, max: 12 },
    difficulty: 'medium',
    duration: 20,
    safetyLevel: 'green',
    materials: ['Code blocks', 'Obstacle images', 'Sensor data', 'Safety guidelines'],
    steps: [
      {
        id: 1,
        instruction: 'Detect obstacles ahead',
        visualCue: '👁️',
        expectedAction: 'Use sensors to see obstacles',
        codeBlocks: [
          { id: 'sensor-obstacle', type: 'condition', text: 'IF obstacle ahead', color: 'bg-yellow-500', category: 'sensors' }
        ],
        explanation: 'Cars use cameras and sensors to "see" obstacles like cones, debris, or other cars.',
        safety: 'Always pay attention to the road ahead when driving!'
      },
      {
        id: 2,
        instruction: 'Decide which way to turn',
        visualCue: '🤔',
        expectedAction: 'Choose left or right to avoid obstacle',
        codeBlocks: [
          { id: 'sensor-obstacle', type: 'condition', text: 'IF obstacle ahead', color: 'bg-yellow-500', category: 'sensors' },
          { id: 'action-turn-left', type: 'action', text: 'THEN turn left', color: 'bg-yellow-600', category: 'actions' }
        ],
        explanation: 'When you see an obstacle, you need to decide which side is safer to go around.',
        safety: 'Look both ways before changing lanes!'
      },
      {
        id: 3,
        instruction: 'Add alternative path',
        visualCue: '🔄',
        expectedAction: 'Program backup plan if left turn blocked',
        codeBlocks: [
          { id: 'sensor-obstacle', type: 'condition', text: 'IF obstacle ahead', color: 'bg-yellow-500', category: 'sensors' },
          { id: 'action-turn-left', type: 'action', text: 'THEN turn left', color: 'bg-yellow-600', category: 'actions' },
          { id: 'logic-else', type: 'else', text: 'ELSE', color: 'bg-gray-500', category: 'logic' },
          { id: 'action-turn-right', type: 'action', text: 'THEN turn right', color: 'bg-yellow-600', category: 'actions' }
        ],
        explanation: 'Smart cars have backup plans! If the left side is blocked, try the right side.',
        safety: 'Always have a plan B for safety!'
      },
      {
        id: 4,
        instruction: 'Test obstacle detection',
        visualCue: '🧪',
        expectedAction: 'Run simulation with different obstacles',
        codeBlocks: [],
        explanation: 'Let\'s test your code with different types of obstacles to make sure it works!',
        safety: 'In real life, obstacles can be dangerous - always be careful!'
      },
      {
        id: 5,
        instruction: 'Add speed control',
        visualCue: '🐌',
        expectedAction: 'Slow down when approaching obstacles',
        codeBlocks: [
          { id: 'sensor-obstacle', type: 'condition', text: 'IF obstacle ahead', color: 'bg-yellow-500', category: 'sensors' },
          { id: 'action-slow-down', type: 'action', text: 'THEN slow down', color: 'bg-orange-600', category: 'actions' }
        ],
        explanation: 'It\'s safer to slow down when you see an obstacle, giving you more time to react!',
        safety: 'Speed limits exist for safety - slower is often safer!'
      },
      {
        id: 6,
        instruction: 'Master obstacle avoidance!',
        visualCue: '🏆',
        expectedAction: 'Complete the challenge',
        codeBlocks: [],
        explanation: 'Fantastic! You\'ve created a smart car that can detect and avoid obstacles safely!',
        safety: 'Real drivers need years of practice to master obstacle avoidance!'
      }
    ],
    safetyWarnings: [
      'Real obstacles can be dangerous - always be alert',
      'Practice obstacle avoidance in safe, controlled environments',
      'Never try to avoid obstacles by driving off the road',
      'Always check your mirrors before changing direction'
    ],
    learningObjectives: [
      'Understand sensor-based obstacle detection',
      'Learn decision-making algorithms',
      'Practice spatial reasoning',
      'Develop safety-first programming'
    ],
    howItWorks: 'Obstacle avoidance uses multiple sensors (cameras, radar, lidar) to create a 360-degree view around the car. The AI processes this data to identify obstacles and calculate the safest path around them. It considers factors like obstacle size, speed, and available space to make split-second decisions.',
    image: '/images/obstacle-avoidance.jpg'
  },
  {
    id: 'smart-parking',
    title: 'Master Smart Parking! 🅿️',
    description: 'Program your car to find and park in available spaces automatically',
    ageRange: { min: 8, max: 12 },
    difficulty: 'hard',
    duration: 25,
    safetyLevel: 'green',
    materials: ['Code blocks', 'Parking lot images', 'Space detection sensors', 'Safety protocols'],
    steps: [
      {
        id: 1,
        instruction: 'Scan for parking spaces',
        visualCue: '🔍',
        expectedAction: 'Look for empty parking spots',
        codeBlocks: [
          { id: 'sensor-parking', type: 'condition', text: 'IF parking space found', color: 'bg-blue-500', category: 'sensors' }
        ],
        explanation: 'Cars use cameras to scan for empty parking spaces between other cars or in designated areas.',
        safety: 'Always check for pedestrians and other cars when looking for parking!'
      },
      {
        id: 2,
        instruction: 'Check if space is big enough',
        visualCue: '📏',
        expectedAction: 'Measure if the space fits your car',
        codeBlocks: [
          { id: 'sensor-parking', type: 'condition', text: 'IF parking space found', color: 'bg-blue-500', category: 'sensors' },
          { id: 'action-park', type: 'action', text: 'THEN park', color: 'bg-blue-600', category: 'actions' }
        ],
        explanation: 'The car needs to check if the space is big enough for it to fit safely.',
        safety: 'Never try to park in a space that\'s too small - you might hit other cars!'
      },
      {
        id: 3,
        instruction: 'Position the car correctly',
        visualCue: '🎯',
        expectedAction: 'Align car with the parking space',
        codeBlocks: [
          { id: 'sensor-parking', type: 'condition', text: 'IF parking space found', color: 'bg-blue-500', category: 'sensors' },
          { id: 'action-slow-down', type: 'action', text: 'THEN slow down', color: 'bg-orange-600', category: 'actions' },
          { id: 'action-park', type: 'action', text: 'THEN park', color: 'bg-blue-600', category: 'actions' }
        ],
        explanation: 'The car needs to slow down and position itself perfectly in the center of the space.',
        safety: 'Take your time when parking - rushing can cause accidents!'
      },
      {
        id: 4,
        instruction: 'Test parking accuracy',
        visualCue: '🧪',
        expectedAction: 'Run simulation to test parking',
        codeBlocks: [],
        explanation: 'Let\'s test your parking code with different sized spaces and positions!',
        safety: 'Practice parking in empty lots before trying busy areas!'
      },
      {
        id: 5,
        instruction: 'Add safety checks',
        visualCue: '🛡️',
        expectedAction: 'Check for pedestrians and obstacles',
        codeBlocks: [
          { id: 'sensor-pedestrian', type: 'condition', text: 'IF pedestrian crossing', color: 'bg-orange-500', category: 'sensors' },
          { id: 'action-stop', type: 'action', text: 'THEN stop', color: 'bg-red-600', category: 'actions' },
          { id: 'logic-else', type: 'else', text: 'ELSE', color: 'bg-gray-500', category: 'logic' },
          { id: 'action-park', type: 'action', text: 'THEN park', color: 'bg-blue-600', category: 'actions' }
        ],
        explanation: 'Always check for pedestrians and obstacles before parking!',
        safety: 'Pedestrians have the right of way - always wait for them to pass!'
      },
      {
        id: 6,
        instruction: 'Become a parking master!',
        visualCue: '🎉',
        expectedAction: 'Complete the challenge',
        codeBlocks: [],
        explanation: 'Incredible! You\'ve programmed a car that can find and park in spaces like a professional!',
        safety: 'Real parking takes years of practice - keep learning and stay safe!'
      }
    ],
    safetyWarnings: [
      'Always check for pedestrians before parking',
      'Make sure the parking space is legal and safe',
      'Never park in disabled spaces without a permit',
      'Practice parking in safe, empty areas first'
    ],
    learningObjectives: [
      'Understand spatial reasoning and measurement',
      'Learn complex decision-making algorithms',
      'Practice precision and accuracy',
      'Develop advanced programming skills'
    ],
    howItWorks: 'Smart parking uses multiple sensors to create a 3D map of the surrounding area. The AI analyzes this data to identify suitable parking spaces, calculate the optimal approach path, and execute precise parking maneuvers. It considers factors like space size, surrounding obstacles, and traffic conditions.',
    image: '/images/smart-parking.jpg'
  }
];

// Traffic scenarios for ethical decision-making
export const trafficScenarios: TrafficScenario[] = [
  {
    id: 'pedestrian-crossing',
    title: 'Pedestrian at Crosswalk',
    description: 'A pedestrian is crossing the road at a marked crosswalk',
    situation: 'You\'re approaching a crosswalk and see a pedestrian stepping into the road. The light is green for cars, but the pedestrian has the right of way.',
    question: 'What should your autonomous car do?',
    options: [
      'Stop immediately and wait for the pedestrian to cross',
      'Slow down but continue if the pedestrian is far enough away',
      'Continue at normal speed since the light is green',
      'Honk to warn the pedestrian and continue'
    ],
    correctAnswer: 0,
    explanation: 'Pedestrians always have the right of way at crosswalks, regardless of traffic light color. Safety is the top priority.',
    ethicalConsiderations: [
      'Human safety is more important than traffic flow',
      'Pedestrians are vulnerable road users',
      'Following traffic laws and social norms',
      'Being predictable to other road users'
    ],
    safetyLevel: 'green'
  },
  {
    id: 'dog-in-road',
    title: 'Dog in the Road',
    description: 'A dog runs into the road unexpectedly',
    situation: 'A dog suddenly runs into the road in front of your car. There\'s a car behind you, and swerving could cause an accident.',
    question: 'What should your autonomous car do?',
    options: [
      'Stop immediately, even if it means being rear-ended',
      'Swerve to avoid the dog, risking a collision with the car behind',
      'Continue straight and hope the dog moves',
      'Brake hard and swerve if safe to do so'
    ],
    correctAnswer: 3,
    explanation: 'The car should brake hard to minimize impact and only swerve if it can do so safely without causing a more serious accident.',
    ethicalConsiderations: [
      'Minimizing harm to all parties',
      'Protecting human life over animal life',
      'Avoiding creating additional dangerous situations',
      'Making split-second decisions under pressure'
    ],
    safetyLevel: 'yellow'
  },
  {
    id: 'emergency-vehicle',
    title: 'Emergency Vehicle Approaching',
    description: 'An ambulance with flashing lights is approaching from behind',
    situation: 'You\'re in heavy traffic when an ambulance with flashing lights approaches from behind. There\'s no clear space to pull over immediately.',
    question: 'What should your autonomous car do?',
    options: [
      'Stop immediately in the current lane',
      'Move to the right lane as soon as possible',
      'Continue driving until you find a safe place to pull over',
      'Speed up to get out of the way faster'
    ],
    correctAnswer: 1,
    explanation: 'Emergency vehicles need clear passage. Move to the right lane as soon as it\'s safe to do so, but don\'t stop in the middle of traffic.',
    ethicalConsiderations: [
      'Prioritizing emergency response',
      'Following traffic laws for emergency vehicles',
      'Not creating additional traffic hazards',
      'Being considerate of others in emergency situations'
    ],
    safetyLevel: 'green'
  }
];

// Data training tasks for image labeling
export const dataTrainingTasks: DataTrainingTask[] = [
  {
    id: 'traffic-light-1',
    imageUrl: '/images/training/traffic-light-red.jpg',
    category: 'traffic-lights',
    labels: ['red light', 'stop', 'traffic signal', 'crosswalk'],
    correctLabels: ['red light', 'stop', 'traffic signal'],
    difficulty: 1,
    explanation: 'This is a red traffic light, which means cars must stop. The crosswalk is also visible, which is important for pedestrian safety.'
  },
  {
    id: 'stop-sign-1',
    imageUrl: '/images/training/stop-sign.jpg',
    category: 'stop-signs',
    labels: ['stop sign', 'octagon', 'red', 'intersection'],
    correctLabels: ['stop sign', 'octagon', 'red'],
    difficulty: 1,
    explanation: 'This is a stop sign - an octagonal red sign that means cars must come to a complete stop.'
  },
  {
    id: 'pedestrian-1',
    imageUrl: '/images/training/pedestrian-crossing.jpg',
    category: 'pedestrians',
    labels: ['pedestrian', 'person', 'crosswalk', 'walking'],
    correctLabels: ['pedestrian', 'person', 'crosswalk'],
    difficulty: 2,
    explanation: 'This shows a pedestrian using a crosswalk. Cars must yield to pedestrians in crosswalks.'
  },
  {
    id: 'road-sign-1',
    imageUrl: '/images/training/speed-limit.jpg',
    category: 'road-signs',
    labels: ['speed limit', '25 mph', 'white circle', 'black text'],
    correctLabels: ['speed limit', '25 mph'],
    difficulty: 2,
    explanation: 'This is a speed limit sign showing 25 mph. Cars must not exceed this speed in this area.'
  }
];

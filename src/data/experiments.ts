import { Experiment } from '@/types/science';

export const experiments: Experiment[] = [
  {
    id: 'volcano-eruption',
    title: 'Amazing Volcano Eruption! 🌋',
    description: 'Create a safe chemical reaction with baking soda and vinegar!',
    ageRange: { min: 6, max: 11 },
    difficulty: 'easy',
    duration: 15,
    safetyLevel: 'green',
    materials: [
      'Baking soda (1 tablespoon)',
      'White vinegar (1/2 cup)',
      'Food coloring (red, optional)',
      'Small plastic bottle',
      'Tray or plate',
      'Spoon for mixing'
    ],
    steps: [
      {
        step: 1,
        title: 'Set Up Your Volcano Base 🏔️',
        description: 'Place your small plastic bottle on a tray or plate. This will be your volcano base! Make sure it\'s stable and won\'t tip over. You can even build a mountain around it with playdough or clay to make it look more like a real volcano!',
        safety: 'Make sure the bottle is stable and won\'t tip over easily. Have an adult help you set this up!',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Wb2xjYW5vIFN0ZXAgMTwvdGV4dD4KPC9zdmc+'
      },
      {
        step: 2,
        title: 'Add the Lava Powder (Baking Soda) ⚪',
        description: 'Carefully add 1 tablespoon of baking soda to the bottle. This is your "lava powder"! Baking soda is a base (the opposite of an acid). When we mix it with vinegar (which is an acid), they will react and create bubbles!',
        safety: 'Be careful not to spill the baking soda. It\'s safe but can be messy. Use a spoon to help pour it in!',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Wb2xjYW5vIFN0ZXAgMjwvdGV4dD4KPC9zdmc+'
      },
      {
        step: 3,
        title: 'Make It Look Like Real Lava 🔴',
        description: 'Add a few drops of red food coloring to make your lava look realistic! You can also add a drop of yellow to make it more orange, just like real lava! The food coloring will mix with the vinegar and create colorful bubbles.',
        safety: 'Food coloring can stain clothes, so be careful! Have paper towels ready just in case.',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Wb2xjYW5vIFN0ZXAgMzwvdGV4dD4KPC9zdmc+'
      },
      {
        step: 4,
        title: 'Add a Drop of Dish Soap (Optional) 🧼',
        description: 'Add just one drop of dish soap to make the eruption even more foamy and exciting! The soap helps create more bubbles and makes the lava look thicker and more dramatic.',
        safety: 'Just one drop is enough! Too much soap will make it too bubbly.',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Wb2xjYW5vIFN0ZXAgNDwvdGV4dD4KPC9zdmc+'
      },
      {
        step: 5,
        title: 'The Big Eruption! 🌋💥',
        description: 'Now for the exciting part! Slowly pour the vinegar into the bottle and watch the magic happen! The vinegar (acid) reacts with the baking soda (base) to create carbon dioxide gas bubbles. This is called a chemical reaction!',
        safety: 'Pour slowly and step back after pouring. The reaction happens quickly! Don\'t lean over the volcano.',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Wb2xjYW5vIFN0ZXAgNTwvdGV4dD4KPC9zdmc+'
      },
      {
        step: 6,
        title: 'Observe and Learn! 🔬',
        description: 'Watch as your volcano erupts with foamy lava! Notice how the bubbles form and the liquid overflows. This is exactly how real volcanoes work, but with hot molten rock instead of vinegar and baking soda! The carbon dioxide gas creates the bubbles you see.',
        safety: 'Don\'t touch the foam right away. Let it settle first, then you can clean it up!',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Wb2xjYW5vIFN0ZXAgNjwvdGV4dD4KPC9zdmc+'
      }
    ],
    safetyWarnings: [
      'Always have an adult nearby',
      'Do this experiment in a well-ventilated area',
      'Wear old clothes that can get stained',
      'Never mix this with other chemicals',
      'Clean up spills immediately'
    ],
    learningObjectives: [
      'Understand chemical reactions',
      'Learn about acids and bases',
      'Observe cause and effect',
      'Practice following instructions',
      'Develop scientific observation skills'
    ],
    howItWorks: 'When you mix baking soda (a base) with vinegar (an acid), they react to create carbon dioxide gas! This is called a chemical reaction. The gas bubbles up through the liquid, creating the foamy "lava" effect. This is similar to how real volcanoes work, but instead of hot molten rock, we use safe household ingredients!',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Wb2xjYW5vIEV4cGVyaW1lbnQ8L3RleHQ+Cjwvc3ZnPg=='
  },
  {
    id: 'rainbow-milk',
    title: 'Rainbow Milk Magic! 🌈',
    description: 'Create beautiful swirling colors in milk using soap and food coloring!',
    ageRange: { min: 4, max: 10 },
    difficulty: 'easy',
    duration: 10,
    safetyLevel: 'green',
    materials: [
      'Whole milk (1 cup)',
      'Food coloring (4 different colors)',
      'Dish soap (1 teaspoon)',
      'Cotton swabs (2-3)',
      'Shallow dish or plate',
      'Paper towels for cleanup'
    ],
    steps: [
      {
        step: 1,
        title: 'Prepare Your Magic Milk Canvas 🥛',
        description: 'Pour the milk into a shallow dish or plate. Make sure it covers the bottom completely - about 1/4 inch deep. Whole milk works best because it has more fat, which makes the magic happen! The fat in the milk is what creates the beautiful patterns.',
        safety: 'Be careful not to spill the milk. It can be slippery! Have paper towels ready just in case.',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5SYWluYm93IFN0ZXAgMTwvdGV4dD4KPC9zdmc+'
      },
      {
        step: 2,
        title: 'Create Your Colorful Dots 🎨',
        description: 'Add 2-3 drops of each color food coloring to different spots in the milk. Space them out like you\'re making a colorful polka dot pattern! Try using red, blue, yellow, and green. Don\'t mix them together yet - just place them around the milk.',
        safety: 'Food coloring can stain, so be careful with your clothes! Have paper towels ready just in case.',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5SYWluYm93IFN0ZXAgMjwvdGV4dD4KPC9zdmc+'
      },
      {
        step: 3,
        title: 'The Magic Touch! ✨',
        description: 'Dip a cotton swab in dish soap, then gently touch it to the center of the milk. Watch the magic happen! The soap breaks the surface tension of the milk and causes the colors to swirl and dance around. This is called surface tension!',
        safety: 'Don\'t stir too hard - just a gentle touch works best! The magic happens with just a light touch.',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5SYWluYm93IFN0ZXAgMzwvdGV4dD4KPC9zdmc+'
      },
      {
        step: 4,
        title: 'Keep the Magic Going! 🌈',
        description: 'Try touching different spots with the soapy cotton swab! Each time you touch it, you\'ll see new patterns and colors swirling around. The soap continues to break the surface tension, creating more beautiful designs. Try making circles, lines, or any pattern you want!',
        safety: 'Be gentle and don\'t splash the milk around. The magic works best with gentle touches!',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5SYWluYm93IFN0ZXAgNDwvdGV4dD4KPC9zdmc+'
      },
      {
        step: 5,
        title: 'Observe the Science! 🔬',
        description: 'Watch how the colors keep moving and changing! This happens because the soap molecules are trying to surround the fat molecules in the milk. It\'s like a tiny battle between the soap and the fat, and the colors show us this battle happening right before our eyes!',
        safety: 'Don\'t drink the milk after the experiment - it has soap in it now!',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5SYWluYm93IFN0ZXAgNTwvdGV4dD4KPC9zdmc+'
      }
    ],
    safetyWarnings: [
      'Use whole milk for best results',
      'Food coloring can stain clothes',
      'Have paper towels ready for cleanup',
      'Don\'t drink the milk after the experiment'
    ],
    learningObjectives: [
      'Learn about surface tension',
      'Understand how soap affects liquids',
      'Observe color mixing and movement',
      'Practice scientific observation'
    ],
    howItWorks: 'Milk contains fat molecules that normally stay separate from water. When you add soap, it breaks the surface tension of the milk and causes the fat molecules to move around! The food coloring helps us see this movement as beautiful swirling patterns. It\'s like watching a tiny dance between soap and fat molecules!',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5SYWluYm93IE1pbGs8L3RleHQ+Cjwvc3ZnPg=='
  },
  {
    id: 'static-electricity',
    title: 'Static Electricity Fun! ⚡',
    description: 'Make objects move without touching them using static electricity!',
    ageRange: { min: 7, max: 12 },
    difficulty: 'medium',
    duration: 20,
    safetyLevel: 'green',
    materials: [
      'Balloon (1-2)',
      'Small pieces of paper',
      'Hair or wool fabric',
      'Plastic ruler',
      'Salt and pepper mixture',
      'Empty soda can'
    ],
    steps: [
      {
        step: 1,
        title: 'Prepare Your Balloon 🎈',
        description: 'Blow up the balloon and tie it securely. Make sure it\'s nice and round! You can also try different sizes - bigger balloons sometimes work better for static electricity. The balloon will become your "magic wand" for this experiment!',
        safety: 'Be careful not to overinflate the balloon - it might pop! Have an adult help if you need it.',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5TdGF0aWMgU3RlcCAxPC90ZXh0Pgo8L3N2Zz4='
      },
      {
        step: 2,
        title: 'Create Static Electricity! ⚡',
        description: 'Rub the balloon against your hair or a wool sweater for about 30 seconds. This creates static electricity! When you rub the balloon, tiny particles called electrons move from your hair to the balloon, giving the balloon a negative charge. This is what makes the magic happen!',
        safety: 'Don\'t rub too hard - gentle rubbing works best! Your hair might get a little messy, but that\'s okay!',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5TdGF0aWMgU3RlcCAyPC90ZXh0Pgo8L3N2Zz4='
      },
      {
        step: 3,
        title: 'Test the Magic with Paper! 📄',
        description: 'Hold the balloon near small pieces of paper. Watch them move toward the balloon! The negatively charged balloon attracts the neutral paper pieces. This is called static attraction - opposites attract! Try different sizes of paper pieces to see which ones work best.',
        safety: 'Be gentle with the paper - don\'t tear it! The paper should move toward the balloon without you touching it.',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5TdGF0aWMgU3RlcCAzPC90ZXh0Pgo8L3N2Zz4='
      },
      {
        step: 4,
        title: 'Make Your Hair Stand Up! 💇‍♀️',
        description: 'Hold the charged balloon near your hair (but don\'t touch it!). Watch your hair reach out toward the balloon! This happens because your hair is attracted to the negatively charged balloon. The closer you get, the more your hair will stand up!',
        safety: 'Don\'t get too close to your eyes! Keep the balloon at a safe distance from your face.',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5TdGF0aWMgU3RlcCA0PC90ZXh0Pgo8L3N2Zz4='
      },
      {
        step: 5,
        title: 'Try Different Objects! 🧪',
        description: 'Test your charged balloon on different objects! Try aluminum foil, plastic wrap, or even a stream of water from the faucet. Watch how the water bends toward the balloon! This is because water molecules are also attracted to the static charge.',
        safety: 'Be careful with water - don\'t get the balloon wet or it will lose its charge!',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5TdGF0aWMgU3RlcCA1PC90ZXh0Pgo8L3N2Zz4='
      },
      {
        step: 6,
        title: 'Learn the Science! 🔬',
        description: 'Static electricity happens when electrons move from one object to another! When you rub the balloon on your hair, electrons move from your hair to the balloon, giving the balloon a negative charge. This is the same kind of electricity that makes lightning in the sky!',
        safety: 'Remember, static electricity is safe at this level, but real lightning is very dangerous!',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5TdGF0aWMgU3RlcCA2PC90ZXh0Pgo8L3N2Zz4='
      }
    ],
    safetyWarnings: [
      'Don\'t rub too hard on hair',
      'Be careful with pepper - it can make you sneeze',
      'Don\'t touch electrical outlets',
      'Have an adult nearby'
    ],
    learningObjectives: [
      'Understand static electricity',
      'Learn about positive and negative charges',
      'Observe electrical attraction',
      'Practice scientific experimentation'
    ],
    howItWorks: 'When you rub the balloon on your hair, tiny particles called electrons move from your hair to the balloon! This gives the balloon a negative charge. Objects with opposite charges attract each other, so the negatively charged balloon attracts neutral objects like paper. This is the same principle that makes lightning in the sky!',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5TdGF0aWMgRWxlY3RyaWNpdHk8L3RleHQ+Cjwvc3ZnPg=='
  },
  {
    id: 'slime-making',
    title: 'Super Stretchy Slime! 🧪',
    description: 'Create your own colorful, stretchy slime using safe household ingredients!',
    ageRange: { min: 6, max: 12 },
    difficulty: 'easy',
    duration: 25,
    safetyLevel: 'green',
    materials: [
      'White school glue (1/2 cup)',
      'Water (1/2 cup)',
      'Food coloring (any color)',
      'Contact lens solution (2 tablespoons)',
      'Baking soda (1 teaspoon)',
      'Mixing bowl and spoon',
      'Measuring cups'
    ],
    steps: [
      {
        step: 1,
        title: 'Mix the Glue Base 🧴',
        description: 'Pour 1/2 cup of white school glue into a mixing bowl. Add 1/2 cup of water and mix them together until they\'re completely combined. This creates our slime base! The glue contains special molecules that will help make our slime stretchy.',
        safety: 'Be careful not to spill the glue - it can be sticky! Have paper towels ready for cleanup.',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5TbGltZSBTdGVwIDE8L3RleHQ+Cjwvc3ZnPg=='
      },
      {
        step: 2,
        title: 'Add Your Favorite Color! 🎨',
        description: 'Add a few drops of food coloring to your glue mixture and stir it in! Choose any color you like - red, blue, green, purple, or even mix colors to make your own special shade! The food coloring will make your slime look amazing.',
        safety: 'Food coloring can stain clothes, so be careful! Wear old clothes or an apron.',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5TbGltZSBTdGVwIDI8L3RleHQ+Cjwvc3ZnPg=='
      },
      {
        step: 3,
        title: 'Add the Magic Activator! ✨',
        description: 'Mix 1 teaspoon of baking soda into your colored glue mixture. This is the first part of our slime activator! The baking soda helps prepare the glue molecules to become slime. Stir it in completely until you can\'t see any white powder.',
        safety: 'Make sure the baking soda is completely mixed in - lumps can make the slime lumpy!',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5TbGltZSBTdGVwIDM8L3RleHQ+Cjwvc3ZnPg=='
      },
      {
        step: 4,
        title: 'The Big Transformation! 🎭',
        description: 'Now add 2 tablespoons of contact lens solution to your mixture and start stirring! This is the magic ingredient that turns your glue into slime! You\'ll see it start to come together and become less sticky. Keep stirring until it forms a ball.',
        safety: 'Don\'t add too much contact lens solution at once - add it slowly and stir!',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5TbGltZSBTdGVwIDQ8L3RleHQ+Cjwvc3ZnPg=='
      },
      {
        step: 5,
        title: 'Knead Your Slime! 🤲',
        description: 'Once your slime forms a ball, take it out of the bowl and start kneading it with your hands! This helps make it smooth and stretchy. If it\'s too sticky, add a tiny bit more contact lens solution. If it\'s too hard, add a tiny bit of water.',
        safety: 'Wash your hands before and after playing with slime! Don\'t eat it - it\'s not food!',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5TbGltZSBTdGVwIDU8L3RleHQ+Cjwvc3ZnPg=='
      },
      {
        step: 6,
        title: 'Play and Experiment! 🎪',
        description: 'Now you can play with your slime! Try stretching it, bouncing it, rolling it into a ball, or even making it into different shapes! You can also try adding glitter, beads, or other decorations to make it even more fun. Store it in a sealed container when you\'re done!',
        safety: 'Keep your slime away from pets and younger siblings who might try to eat it!',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5TbGltZSBTdGVwIDY8L3RleHQ+Cjwvc3ZnPg=='
      }
    ],
    safetyWarnings: [
      'Don\'t eat the slime - it\'s not food!',
      'Wash hands before and after playing',
      'Keep away from pets and small children',
      'Store in a sealed container',
      'Don\'t put on furniture or carpet'
    ],
    learningObjectives: [
      'Learn about polymer chemistry',
      'Understand how molecules can form chains',
      'Practice following precise measurements',
      'Develop fine motor skills through kneading'
    ],
    howItWorks: 'Slime is made of long chains of molecules called polymers! The glue contains polyvinyl acetate (PVA) molecules that are like long strings. When you add the contact lens solution (which contains borate ions), it acts like a cross-linker that connects these long strings together, creating a stretchy, bouncy material!',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5TbGltZSBNYWtpbmc8L3RleHQ+Cjwvc3ZnPg=='
  },
  {
    id: 'invisible-ink',
    title: 'Secret Invisible Ink! 🕵️‍♀️',
    description: 'Write secret messages that only appear when heated - like a real spy!',
    ageRange: { min: 7, max: 12 },
    difficulty: 'easy',
    duration: 15,
    safetyLevel: 'yellow',
    materials: [
      'Lemon (1/2 lemon)',
      'Cotton swabs or small paintbrush',
      'White paper',
      'Hair dryer or iron (with adult help)',
      'Small bowl',
      'Water (1 tablespoon)'
    ],
    steps: [
      {
        step: 1,
        title: 'Squeeze the Lemon Juice! 🍋',
        description: 'Cut a lemon in half and squeeze the juice into a small bowl. You need about 1 tablespoon of lemon juice. This will be our invisible ink! Lemon juice is acidic, which is what makes our secret writing work.',
        safety: 'Be careful with the knife when cutting the lemon - ask an adult for help!',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbnZpc2libGUgU3RlcCAxPC90ZXh0Pgo8L3N2Zz4='
      },
      {
        step: 2,
        title: 'Write Your Secret Message! ✍️',
        description: 'Dip a cotton swab or small paintbrush into the lemon juice and write your secret message on white paper! Write clearly and make sure the paper is completely dry before moving to the next step. The lemon juice will be invisible when it dries.',
        safety: 'Don\'t press too hard - you might tear the paper! Write gently.',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbnZpc2libGUgU3RlcCAyPC90ZXh0Pgo8L3N2Zz4='
      },
      {
        step: 3,
        title: 'Let It Dry Completely! ⏰',
        description: 'Wait for your secret message to dry completely. This might take 5-10 minutes. The lemon juice will become completely invisible once it\'s dry! You can even show your paper to someone and they won\'t see anything - it\'s like magic!',
        safety: 'Be patient and don\'t rush this step - the message needs to be completely dry!',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbnZpc2libGUgU3RlcCAzPC90ZXh0Pgo8L3N2Zz4='
      },
      {
        step: 4,
        title: 'Reveal the Secret! 🔥',
        description: 'Now for the magic! Ask an adult to help you use a hair dryer on low heat or an iron (on low setting) to gently heat the paper. Move the heat source slowly over the paper and watch your secret message appear! The heat makes the lemon juice turn brown and become visible.',
        safety: 'ALWAYS have an adult help with this step! Heat can be dangerous. Don\'t get too close to the heat source.',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbnZpc2libGUgU3RlcCA0PC90ZXh0Pgo8L3N2Zz4='
      },
      {
        step: 5,
        title: 'Try Different Messages! 🕵️',
        description: 'Now try writing different secret messages! You can write your name, draw pictures, or even write a secret code! Each message will be invisible until you heat it up. Try writing with different amounts of lemon juice to see what works best.',
        safety: 'Remember to always have an adult help when heating the paper!',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbnZpc2libGUgU3RlcCA1PC90ZXh0Pgo8L3N2Zz4='
      }
    ],
    safetyWarnings: [
      'ALWAYS have an adult help with heating',
      'Don\'t touch hot surfaces',
      'Use low heat settings only',
      'Keep heat source moving',
      'Don\'t leave heat source unattended'
    ],
    learningObjectives: [
      'Learn about acids and chemical reactions',
      'Understand how heat affects substances',
      'Practice writing and following instructions',
      'Develop observation skills'
    ],
    howItWorks: 'Lemon juice is acidic and contains carbon compounds! When you write with lemon juice and it dries, the acid remains on the paper. When you heat the paper, the acid burns faster than the paper, turning brown and making your message visible. This is the same principle used by real spies throughout history!',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbnZpc2libGUgSW5rPC90ZXh0Pgo8L3N2Zz4='
  },
  {
    id: 'water-walking',
    title: 'Water Walking Experiment! 🕷️',
    description: 'Make objects walk on water using the power of surface tension!',
    ageRange: { min: 5, max: 10 },
    difficulty: 'easy',
    duration: 15,
    safetyLevel: 'green',
    materials: [
      'Small paper clips (5-10)',
      'Tissue paper (1 square)',
      'Shallow bowl or plate',
      'Water',
      'Dish soap (1 drop)',
      'Tweezers or small spoon'
    ],
    steps: [
      {
        step: 1,
        title: 'Fill Your Water Bowl! 💧',
        description: 'Fill a shallow bowl or plate with water until it\'s about 1 inch deep. Make sure the water is clean and at room temperature. This will be our "water stage" where we\'ll make objects walk!',
        safety: 'Be careful not to spill the water! Have paper towels ready just in case.',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5XYXRlciBTdGVwIDE8L3RleHQ+Cjwvc3ZnPg=='
      },
      {
        step: 2,
        title: 'Prepare Your Water Walker! 🕷️',
        description: 'Take a small square of tissue paper and place a paper clip on top of it. The tissue paper acts like a "boat" that helps the paper clip float on the water\'s surface. This is how we\'ll make the paper clip walk on water!',
        safety: 'Be gentle with the paper clip - it has sharp edges!',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5XYXRlciBTdGVwIDI8L3RleHQ+Cjwvc3ZnPg=='
      },
      {
        step: 3,
        title: 'Gently Place It on Water! 🌊',
        description: 'Very carefully place the tissue paper with the paper clip on top of the water. Use tweezers or a small spoon to help you place it gently. The tissue paper should float on the water, and the paper clip should stay on top!',
        safety: 'Be very gentle - if you drop it too hard, it will sink!',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5XYXRlciBTdGVwIDM8L3RleHQ+Cjwvc3ZnPg=='
      },
      {
        step: 4,
        title: 'Remove the Tissue Paper! 🧻',
        description: 'Now carefully remove the tissue paper from under the paper clip. You can use tweezers to gently pull it away. The paper clip should still be floating on the water! This is because of surface tension - the water molecules are holding together tightly enough to support the paper clip.',
        safety: 'Be very careful not to touch the paper clip while removing the tissue!',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5XYXRlciBTdGVwIDQ8L3RleHQ+Cjwvc3ZnPg=='
      },
      {
        step: 5,
        title: 'Make It Walk! 🚶‍♀️',
        description: 'Now you can make your paper clip "walk" on the water! Gently blow on it or use a clean finger to create small waves. The paper clip will move around on the water\'s surface like it\'s walking! Try making it move in different directions.',
        safety: 'Don\'t push too hard or the paper clip will sink!',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5XYXRlciBTdGVwIDU8L3RleHQ+Cjwvc3ZnPg=='
      },
      {
        step: 6,
        title: 'Break the Magic! ✨',
        description: 'Now add just one drop of dish soap to the water. Watch what happens to your paper clip! It will sink immediately! This is because soap breaks the surface tension of the water. The water molecules can no longer hold together tightly enough to support the paper clip.',
        safety: 'Just one drop of soap is enough - don\'t add too much!',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5XYXRlciBTdGVwIDY8L3RleHQ+Cjwvc3ZnPg=='
      }
    ],
    safetyWarnings: [
      'Be careful with paper clips - they have sharp edges',
      'Don\'t push too hard on the water',
      'Have paper towels ready for cleanup',
      'Don\'t drink the water after adding soap'
    ],
    learningObjectives: [
      'Learn about surface tension',
      'Understand how water molecules work together',
      'Observe cause and effect relationships',
      'Practice gentle handling of materials'
    ],
    howItWorks: 'Water molecules stick together very tightly at the surface, creating something called surface tension! This creates a thin "skin" on the water that can support light objects like paper clips. When you add soap, it breaks this surface tension by getting between the water molecules, so they can\'t hold together anymore!',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5XYXRlciBXYWxraW5nPC90ZXh0Pgo8L3N2Zz4='
  },
  {
    id: 'dancing-raisins',
    title: 'Dancing Raisins! 💃',
    description: 'Make raisins dance up and down in a glass of soda!',
    ageRange: { min: 4, max: 10 },
    difficulty: 'easy',
    duration: 10,
    safetyLevel: 'green',
    materials: [
      'Clear glass or jar',
      'Clear soda (like Sprite or 7-Up)',
      'Raisins (10-15)',
      'Spoon for stirring'
    ],
    steps: [
      {
        step: 1,
        title: 'Fill Your Glass! 🥤',
        description: 'Fill a clear glass or jar about 3/4 full with clear soda. Sprite or 7-Up work best because they\'re clear and have lots of bubbles! The bubbles in the soda are what will make our raisins dance.',
        safety: 'Be careful not to spill the soda - it can be sticky!',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5SYWlzaW4gU3RlcCAxPC90ZXh0Pgo8L3N2Zz4='
      },
      {
        step: 2,
        title: 'Add Your Dancing Raisins! 🍇',
        description: 'Drop 10-15 raisins into the soda one by one. Watch them sink to the bottom! The raisins are heavier than the soda, so they sink down. But don\'t worry - they\'ll start dancing soon!',
        safety: 'Don\'t drop them all at once - drop them one by one to see what happens!',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5SYWlzaW4gU3RlcCAyPC90ZXh0Pgo8L3N2Zz4='
      },
      {
        step: 3,
        title: 'Watch the Magic Begin! ✨',
        description: 'Now watch carefully! You\'ll see tiny bubbles start to stick to the raisins. These are carbon dioxide bubbles from the soda! As more and more bubbles stick to each raisin, they become lighter and start to float up to the top!',
        safety: 'Be patient - the dancing might take a minute to start!',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5SYWlzaW4gU3RlcCAzPC90ZXh0Pgo8L3N2Zz4='
      },
      {
        step: 4,
        title: 'The Dance Continues! 💃',
        description: 'Watch as the raisins dance up and down! When they reach the top, the bubbles pop and the raisins sink back down. Then new bubbles stick to them and they float up again! This creates a continuous dance that can last for several minutes!',
        safety: 'Don\'t shake the glass - let the raisins dance naturally!',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5SYWlzaW4gU3RlcCA0PC90ZXh0Pgo8L3N2Zz4='
      },
      {
        step: 5,
        title: 'Try Different Objects! 🧪',
        description: 'Try the same experiment with other small objects! Try small pieces of pasta, beans, or even small candies. See which ones dance and which ones don\'t! Some objects will work better than others depending on their size and weight.',
        safety: 'Make sure the objects are small enough to fit in the glass!',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5SYWlzaW4gU3RlcCA1PC90ZXh0Pgo8L3N2Zz4='
      }
    ],
    safetyWarnings: [
      'Don\'t drink the soda after the experiment',
      'Be careful not to spill the soda',
      'Use clear soda for best visibility',
      'Don\'t shake the glass during the experiment'
    ],
    learningObjectives: [
      'Learn about density and buoyancy',
      'Understand how bubbles affect floating',
      'Observe cause and effect relationships',
      'Practice scientific observation'
    ],
    howItWorks: 'The raisins are denser (heavier) than the soda, so they sink! But carbon dioxide bubbles from the soda stick to the rough surface of the raisins. These bubbles make the raisins less dense, so they float up! When the bubbles pop at the surface, the raisins sink again, and the cycle repeats!',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5EYW5jaW5nIFJhaXNpbnM8L3RleHQ+Cjwvc3ZnPg=='
  },
  {
    id: 'magic-color-changing',
    title: 'Magic Color Changing Water! 🌈',
    description: 'Watch water change colors like magic using red cabbage!',
    ageRange: { min: 6, max: 12 },
    difficulty: 'medium',
    duration: 30,
    safetyLevel: 'green',
    materials: [
      'Red cabbage (1/4 head)',
      'Hot water (2 cups)',
      'White vinegar (1/4 cup)',
      'Baking soda (2 tablespoons)',
      'Clear glasses or jars (4-6)',
      'Strainer or coffee filter',
      'Spoon for stirring'
    ],
    steps: [
      {
        step: 1,
        title: 'Make Your Magic Potion! 🥬',
        description: 'Chop up 1/4 of a red cabbage into small pieces. Put the pieces in a bowl and pour 2 cups of hot water over them. Let it sit for 10 minutes, then strain the liquid into a clean container. This purple liquid is your magic potion - it\'s a natural pH indicator!',
        safety: 'Be careful with the hot water - ask an adult for help! The water should be hot but not boiling.',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Db2xvciBTdGVwIDE8L3RleHQ+Cjwvc3ZnPg=='
      },
      {
        step: 2,
        title: 'Pour Your Magic Water! 💜',
        description: 'Pour your purple cabbage water into 4-6 clear glasses, filling each about halfway. This purple color is your starting point! Now we\'re going to add different things to each glass to see how the color changes.',
        safety: 'Be careful not to spill the purple water - it can stain clothes!',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Db2xvciBTdGVwIDI8L3RleHQ+Cjwvc3ZnPg=='
      },
      {
        step: 3,
        title: 'Add Acid - Watch It Turn Pink! 🌸',
        description: 'Add 1 tablespoon of white vinegar to the first glass and stir. Watch the magic happen! The purple water will turn pink or red! This is because vinegar is an acid, and acids make the cabbage indicator turn pink. The more acid you add, the more pink it becomes!',
        safety: 'Don\'t drink the water after adding vinegar - it\'s not safe to drink!',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Db2xvciBTdGVwIDM8L3RleHQ+Cjwvc3ZnPg=='
      },
      {
        step: 4,
        title: 'Add Base - Watch It Turn Blue! 💙',
        description: 'Add 1 tablespoon of baking soda to the second glass and stir. Watch another color change! The purple water will turn blue or green! This is because baking soda is a base (the opposite of an acid), and bases make the cabbage indicator turn blue or green.',
        safety: 'Don\'t drink the water after adding baking soda either!',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Db2xvciBTdGVwIDQ8L3RleHQ+Cjwvc3ZnPg=='
      },
      {
        step: 5,
        title: 'Test Other Substances! 🧪',
        description: 'Now test other things! Try adding lemon juice (acid), soap (base), or even different amounts of vinegar and baking soda to see what colors you can make! You can create a whole rainbow of colors by mixing different amounts of acids and bases.',
        safety: 'Only test safe household items - don\'t test anything dangerous!',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Db2xvciBTdGVwIDU8L3RleHQ+Cjwvc3ZnPg=='
      },
      {
        step: 6,
        title: 'Mix and Create! 🎨',
        description: 'Try mixing different amounts of acid and base in the same glass! You can create purple, green, yellow, and even orange colors! The color tells you whether something is acidic (pink/red) or basic (blue/green). This is how scientists test if things are acids or bases!',
        safety: 'Don\'t drink any of the colored water - it\'s just for the experiment!',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Db2xvciBTdGVwIDY8L3RleHQ+Cjwvc3ZnPg=='
      }
    ],
    safetyWarnings: [
      'Don\'t drink any of the colored water',
      'Be careful with hot water',
      'Red cabbage can stain clothes',
      'Only test safe household items',
      'Have paper towels ready for cleanup'
    ],
    learningObjectives: [
      'Learn about acids and bases (pH)',
      'Understand chemical indicators',
      'Practice scientific observation',
      'Learn about natural chemistry'
    ],
    howItWorks: 'Red cabbage contains special molecules called anthocyanins that change color when they meet acids or bases! Acids (like vinegar) make them turn pink or red, while bases (like baking soda) make them turn blue or green. This is exactly how pH indicators work - they change color to tell us if something is acidic or basic!',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Db2xvciBDaGFuZ2luZzwvdGV4dD4KPC9zdmc+'
  },
  {
    id: 'diy-lava-lamp',
    title: 'DIY Lava Lamp! 🌋',
    description: 'Create your own mesmerizing lava lamp using oil, water, and fizz!',
    ageRange: { min: 6, max: 12 },
    difficulty: 'medium',
    duration: 20,
    safetyLevel: 'green',
    materials: [
      'Clear plastic bottle (16-20 oz)',
      'Vegetable oil (1/2 cup)',
      'Water (1/4 cup)',
      'Food coloring (any color)',
      'Alka-Seltzer tablets (2-3)',
      'Funnel (optional)',
      'Flashlight (optional)'
    ],
    steps: [
      {
        step: 1,
        title: 'Prepare Your Bottle! 🍼',
        description: 'Make sure your clear plastic bottle is clean and dry. Remove any labels so you can see through it clearly. This will be your lava lamp container! The clearer the bottle, the better you\'ll be able to see the lava lamp effect.',
        safety: 'Make sure the bottle is completely dry before adding ingredients!',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5MYXZhIFN0ZXAgMTwvdGV4dD4KPC9zdmc+'
      },
      {
        step: 2,
        title: 'Add the Oil! 🛢️',
        description: 'Pour vegetable oil into the bottle until it\'s about 3/4 full. You can use a funnel to make this easier. The oil will float on top because it\'s lighter than water. This creates the "lava" part of your lava lamp!',
        safety: 'Pour slowly to avoid spills! Have paper towels ready just in case.',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5MYXZhIFN0ZXAgMjwvdGV4dD4KPC9zdmc+'
      },
      {
        step: 3,
        title: 'Add Colored Water! 💧',
        description: 'Mix a few drops of food coloring with 1/4 cup of water. Then carefully pour this colored water into the bottle. The water will sink to the bottom because it\'s heavier than oil. This creates the colorful "lava" that will move around!',
        safety: 'Be careful not to spill the colored water - it can stain!',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5MYXZhIFN0ZXAgMzwvdGV4dD4KPC9zdmc+'
      },
      {
        step: 4,
        title: 'Wait for the Layers! ⏰',
        description: 'Let the bottle sit for a few minutes so the oil and water can separate completely. You should see two distinct layers - oil on top and colored water on the bottom. This separation is important for the lava lamp effect to work!',
        safety: 'Don\'t shake the bottle yet - wait for the layers to separate!',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5MYXZhIFN0ZXAgNDwvdGV4dD4KPC9zdmc+'
      },
      {
        step: 5,
        title: 'Add the Magic Fizz! ✨',
        description: 'Break an Alka-Seltzer tablet into 4 pieces. Drop one piece into the bottle and watch the magic happen! The tablet will fizz and create bubbles that carry the colored water up through the oil, creating a lava lamp effect!',
        safety: 'Don\'t eat the Alka-Seltzer tablets - they\'re just for the experiment!',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5MYXZhIFN0ZXAgNTwvdGV4dD4KPC9zdmc+'
      },
      {
        step: 6,
        title: 'Keep the Show Going! 🎪',
        description: 'When the fizzing stops, add another piece of tablet to keep the lava lamp going! You can also try shining a flashlight behind the bottle to make it glow even more! The bubbles from the Alka-Seltzer carry the colored water up, and when they pop, the water sinks back down, creating the continuous lava effect!',
        safety: 'Don\'t drink the contents of the bottle - it\'s not safe to drink!',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5MYXZhIFN0ZXAgNjwvdGV4dD4KPC9zdmc+'
      }
    ],
    safetyWarnings: [
      'Don\'t drink the contents of the bottle',
      'Don\'t eat the Alka-Seltzer tablets',
      'Be careful not to spill oil or water',
      'Keep away from heat sources',
      'Don\'t shake the bottle too hard'
    ],
    learningObjectives: [
      'Learn about density and buoyancy',
      'Understand how bubbles affect floating',
      'Observe chemical reactions',
      'Practice following step-by-step instructions'
    ],
    howItWorks: 'Oil and water don\'t mix because they have different densities! Oil is lighter and floats on top of water. When you add Alka-Seltzer, it creates carbon dioxide bubbles that stick to the colored water droplets. These bubbles make the water less dense, so it floats up through the oil! When the bubbles pop, the water sinks back down, creating the lava lamp effect!',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5MYXZhIExhbXA8L3RleHQ+Cjwvc3ZnPg=='
  },
  {
    id: 'paper-airplane-aerodynamics',
    title: 'Paper Airplane Aerodynamics! ✈️',
    description: 'Learn about flight by testing different paper airplane designs!',
    ageRange: { min: 8, max: 14 },
    difficulty: 'medium',
    duration: 45,
    safetyLevel: 'green',
    materials: [
      'Paper (8-10 sheets)',
      'Tape measure or ruler',
      'Stopwatch or timer',
      'Pencil and paper for notes',
      'Open space (indoor or outdoor)',
      'Different weights (coins, paper clips)',
      'Scissors'
    ],
    steps: [
      {
        step: 1,
        title: 'Make Your First Airplane! 📄',
        description: 'Fold a piece of paper into a basic paper airplane. Start with the classic dart design - fold the paper in half lengthwise, then fold the top corners down to meet the center line, and fold the sides in to create the wings. This will be your control airplane!',
        safety: 'Be careful with the paper edges - they can be sharp!',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5QbGFuZSBTdGVwIDE8L3RleHQ+Cjwvc3ZnPg=='
      },
      {
        step: 2,
        title: 'Test Your Control Airplane! 🎯',
        description: 'Find an open space and test your first airplane! Throw it gently and measure how far it flies. Use a tape measure to record the distance. Also time how long it stays in the air. Write down these results - this is your baseline for comparison!',
        safety: 'Make sure you have plenty of space and no one is in the way!',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5QbGFuZSBTdGVwIDI8L3RleHQ+Cjwvc3ZnPg=='
      },
      {
        step: 3,
        title: 'Make a Different Design! 🛩️',
        description: 'Now make a different style of paper airplane! Try a glider design with wider wings, or a dart with a different nose shape. The key is to change one thing at a time so you can see what makes a difference. Make sure to fold it carefully!',
        safety: 'Take your time with the folding - neat folds work better!',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5QbGFuZSBTdGVwIDM8L3RleHQ+Cjwvc3ZnPg=='
      },
      {
        step: 4,
        title: 'Test and Compare! 📊',
        description: 'Test your new airplane the same way you tested the first one. Throw it from the same spot with the same force, and measure the distance and flight time. Compare the results! Which one flew farther? Which one stayed in the air longer?',
        safety: 'Make sure to test from the same starting point each time!',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5QbGFuZSBTdGVwIDQ8L3RleHQ+Cjwvc3ZnPg=='
      },
      {
        step: 5,
        title: 'Test with Weight! ⚖️',
        description: 'Now try adding weight to your best airplane! Tape a coin or paper clip to different parts of the airplane - the nose, the wings, or the tail. Test how the weight affects the flight. Does it fly farther with weight, or does it make it worse?',
        safety: 'Don\'t add too much weight - it might make the airplane too heavy to fly!',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5QbGFuZSBTdGVwIDU8L3RleHQ+Cjwvc3ZnPg=='
      },
      {
        step: 6,
        title: 'Test Different Throwing Angles! 📐',
        description: 'Try throwing your airplane at different angles! Throw it straight, up at an angle, and down at an angle. See which angle makes it fly the farthest! Also try throwing it with different amounts of force - gentle throws vs. hard throws. Record all your results!',
        safety: 'Make sure you have enough space for all the different throws!',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5QbGFuZSBTdGVwIDY8L3RleHQ+Cjwvc3ZnPg=='
      }
    ],
    safetyWarnings: [
      'Make sure you have plenty of space',
      'Don\'t throw airplanes at people or animals',
      'Be careful with paper edges',
      'Don\'t add too much weight',
      'Test in a safe, open area'
    ],
    learningObjectives: [
      'Learn about aerodynamics and flight',
      'Understand how design affects performance',
      'Practice scientific method and data collection',
      'Learn about forces and motion'
    ],
    howItWorks: 'Paper airplanes fly because of the same principles that make real airplanes fly! The shape of the wings creates lift, the nose helps it cut through the air, and the weight affects how it balances. Different designs work better for different purposes - some are fast, some glide well, and some are stable. This is exactly how real aircraft engineers test new designs!',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5QYXBlciBQbGFuZXM8L3RleHQ+Cjwvc3ZnPg=='
  }
];

export const getExperimentById = (id: string): Experiment | undefined => {
  return experiments.find(exp => exp.id === id);
};

var migraineTriggers = angular.module('migraineTriggers', [])

migraineTriggers.controller('triggersController', ['$scope', function($scope){

  $scope.triggers = [
    {
      name: "Aged Cheeses",
      notes: "Including: Cheddar, Emmentaler, Stilton, Brie, and Camembert"
    },
    {
      name: "Alcohol",
      notes: "Including all forms. Red wine seems especially more likely to trigger migraines than other forms of alcohol - particularly in women."
    },
    {
      name: "Artificial sweeteners",
      notes: "Including aspartame"
    },
    {
      name: "Marinated, pickled, or fermented food"
    },
    {
      name: "Caffeine (too much or withdrawal from)",
      notes: "Incuding caffeine from: coffee, tea, soft drinks, and energy drinks."
    },
    {
      name: "Chocolate"
    },
    {
      name: "Citrus fruits"
    },
    {
      name: "Cured meats"
    },
    {
      name: "Dehydration"
    },
    {
      name: "Depression"
    },
    {
      name: "Dried Fish"
    },
    {
      name: "Exercise (too much)",
      notes: "Patients with exercise-induced migraines often report that their headaches begin with neck pain."
    },
    {
      name: "Eyestrain or other visual triggers"
    },
    {
      name: "Extreme fatigue"
    },
    {
      name: "Food additives (nitrates, nitrites, MSG)",
      notes: "Common in bacon, hotdogs, cured meats, soy sauce, meat tenderizers, seasoned salt"
    },
    {
      name: "Lights (bright or flickering; sunlight, particularly glare)",
      notes: "Including: a movie screen in a darkened theater, sunshine flashing through trees while driving"
    },
    {
      name: "Lunch meats (cured with nitrites or MSG)"
    },
    {
      name: "Menstrual periods",
      notes: "Usually occur a few days before or during a period, sometimes at ovulation. This is thought to be linked to the drop in estrogen."
    },
    {
      name: "Menopause",
      notes: "Fluctuating estrogen levels during menopause may trigger an increase in migraines"
    },
    {
      name: "Medications",
      notes: "Many medications can cause headaches and migraines. Some are: medicines that contain hormones (such as birth control pills or medicines for menopause), some heart and blood pressure medicines, and vitamins. Check the labels of your medicines to see if it is a recorded side effect."
    },
    {
      name: "Noise (too much)"
    },
    {
      name: "Nuts"
    },
    {
      name: "Odors, smells",
      notes: "Strong perfume is the most commonly cited odor. During attacks about half of patients report intolerance for smells - including cigarette smoke, food smells, and scents."
    },
    {
      name: "Onions"
    },
    {
      name: "Salty foods"
    },
    {
      name: "Sleep (too much, too little, changes in habits)"
    },
    {
      name: "Skipped meals, not eating"
    },
    {
      name: "Strong emotions (stress, anxiety, worry, shock, sadness, depression)",
      notes: "Certain emotions can release brain chemecals that can trigger migrains."
    },
    {
      name: "Watching TV or movies",
      notes: "The eyestrain associated with watching tv, movies, computers, or staring at other electronic devices."
    },
    {
      name: "Weather (changing conditions)",
      notes: "Including: bright sunlight, high humidity, hot temperatures, and barometric pressure changes. "
    },
    {
      name: "Tyramine",
      notes: "A naturally occurring compound  produced when the amino acid tyrosine breaks down. This occurs in foods that are preserved, fermented, or aged for a long time. Common examples include: aged cheese (blue, brick, cheddar), red wine, soy products, fava beans, fermented cabbage (sauerkraut or kimchi) hard sausages, and smoked fish. Can also be caused by improper storage and/or spoiled foods."
    },
    {
      name: "Medication Overuse",
      notes: "The overuse of analgesics or drugs in the opioid class are linked to the development of chronic migraines. "
    }


  ]

}]);

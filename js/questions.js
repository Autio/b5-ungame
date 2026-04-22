/**
 * The Babylon Project - Question Database
 *
 * Categories:
 * - green: Green Sector (Light & Fun) - Easy conversation starters
 * - blue: Blue Sector (Reflective) - Moderate depth, personal reflection
 * - grey: Grey Council (Deep) - Meaningful, thoughtful questions
 * - vorlon: Vorlon (Philosophical) - Abstract, big-picture thinking
 * - shadows: Shadows (Challenging) - Provocative, may cause discomfort
 */

const QUESTIONS = {
    green: [
        // Light, fun, easy conversation starters
        {
            text: "If you could visit any alien world from science fiction, which would you choose and why?",
            icon: "🌍"
        },
        {
            text: "What's your favorite comfort food, and what memory does it bring back?",
            icon: "🍜"
        },
        {
            text: "If you had a personal spacecraft, what would you name it?",
            icon: "🚀"
        },
        {
            text: "What song always makes you want to dance, no matter where you are?",
            icon: "🎵"
        },
        {
            text: "Describe your perfect lazy day. What does it look like?",
            icon: "☀️"
        },
        {
            text: "If you could have any animal as a perfectly trained companion, what would it be?",
            icon: "🐾"
        },
        {
            text: "What's something you loved as a child that you still secretly enjoy?",
            icon: "🎮"
        },
        {
            text: "If you could instantly learn any skill (not knowledge, but a skill), what would it be?",
            icon: "✨"
        },
        {
            text: "What's the most beautiful place you've ever visited?",
            icon: "🏔️"
        },
        {
            text: "If your life had a theme song, what would it be right now?",
            icon: "🎼"
        },
        {
            text: "What small thing happened recently that made you smile?",
            icon: "😊"
        },
        {
            text: "If you could have dinner with any fictional character, who would you choose?",
            icon: "🍽️"
        },
        {
            text: "What's something on your bucket list that might surprise people?",
            icon: "📝"
        },
        {
            text: "If you could wake up tomorrow fluent in any language, which would you pick?",
            icon: "🗣️"
        },
        {
            text: "What hobby have you always wanted to try but haven't yet?",
            icon: "🎨"
        },
        {
            text: "Describe your ideal weekend adventure.",
            icon: "🗺️"
        },
        {
            text: "What's a movie or book that you can revisit endlessly?",
            icon: "📚"
        },
        {
            text: "If you could commission any piece of art for your home, what would it depict?",
            icon: "🖼️"
        },
        {
            text: "What's the best gift you've ever received?",
            icon: "🎁"
        },
        {
            text: "If you ran a small shop, what would you sell?",
            icon: "🏪"
        }
    ],

    blue: [
        // Moderate depth, personal reflection
        {
            text: "What's a belief you held strongly in the past but have since changed your mind about?",
            icon: "🔄"
        },
        {
            text: "Who has had the greatest positive influence on your life, and how?",
            icon: "💫"
        },
        {
            text: "What's something you're proud of that you don't often talk about?",
            icon: "🏆"
        },
        {
            text: "Describe a moment when you felt truly at peace.",
            icon: "🕊️"
        },
        {
            text: "What's a lesson you learned the hard way?",
            icon: "📖"
        },
        {
            text: "If you could relive one day from your past (without changing it), which would it be?",
            icon: "⏪"
        },
        {
            text: "What does 'home' mean to you, beyond a physical place?",
            icon: "🏠"
        },
        {
            text: "What's something you wish you had told someone but never did?",
            icon: "💬"
        },
        {
            text: "When do you feel most like yourself?",
            icon: "🪞"
        },
        {
            text: "What's a risk you took that paid off?",
            icon: "🎲"
        },
        {
            text: "How do you handle disagreements with people you care about?",
            icon: "⚖️"
        },
        {
            text: "What's something you've forgiven yourself for?",
            icon: "❤️‍🩹"
        },
        {
            text: "Describe a time when a stranger's kindness affected you.",
            icon: "🤝"
        },
        {
            text: "What quality do you most admire in others?",
            icon: "⭐"
        },
        {
            text: "What's a tradition that's important to you and why?",
            icon: "🕯️"
        },
        {
            text: "When was the last time you stepped outside your comfort zone?",
            icon: "🚪"
        },
        {
            text: "What do you wish more people understood about you?",
            icon: "🔍"
        },
        {
            text: "How has your definition of success changed over time?",
            icon: "📈"
        },
        {
            text: "What's a small act of rebellion you've committed that you're secretly proud of?",
            icon: "✊"
        },
        {
            text: "What does your inner voice sound like during difficult times?",
            icon: "🗨️"
        }
    ],

    grey: [
        // Deep, meaningful, thoughtful questions
        {
            text: "What do you think is the purpose of suffering in life?",
            icon: "🌑"
        },
        {
            text: "How do you reconcile the person you are with the person you want to be?",
            icon: "🔮"
        },
        {
            text: "What would you want your legacy to be?",
            icon: "📜"
        },
        {
            text: "Is there a truth about yourself that you've only recently come to accept?",
            icon: "💎"
        },
        {
            text: "What does it mean to truly know another person?",
            icon: "🌌"
        },
        {
            text: "How do you decide what's worth fighting for?",
            icon: "⚔️"
        },
        {
            text: "What's the most important promise you've made, and have you kept it?",
            icon: "🤞"
        },
        {
            text: "How has loss shaped who you are today?",
            icon: "🥀"
        },
        {
            text: "What do you owe to those who came before you?",
            icon: "🌳"
        },
        {
            text: "When have you had to choose between being right and being kind?",
            icon: "💭"
        },
        {
            text: "What part of your past self do you miss most?",
            icon: "👤"
        },
        {
            text: "How do you find meaning in ordinary days?",
            icon: "🌅"
        },
        {
            text: "What responsibility do we have to future generations?",
            icon: "🌱"
        },
        {
            text: "What's a wound that never fully healed?",
            icon: "💔"
        },
        {
            text: "How do you cope when the world feels unjust?",
            icon: "⚡"
        },
        {
            text: "What sacrifice have you made that others might not know about?",
            icon: "🎭"
        },
        {
            text: "What does forgiveness look like when it feels impossible?",
            icon: "🌿"
        },
        {
            text: "How do you maintain hope in hopeless situations?",
            icon: "🕯️"
        },
        {
            text: "What truth are you still searching for?",
            icon: "🔭"
        },
        {
            text: "What does it mean to be truly brave?",
            icon: "🦁"
        }
    ],

    vorlon: [
        // Abstract, philosophical, big-picture thinking
        // "Who are you?" - The Vorlon question
        {
            text: "Who are you, when all roles and labels are stripped away?",
            icon: "❓"
        },
        {
            text: "Is the universe indifferent to our existence, or does it have purpose?",
            icon: "🌀"
        },
        {
            text: "What is the relationship between order and freedom?",
            icon: "⚖️"
        },
        {
            text: "Can understanding ever be complete, or is it always partial?",
            icon: "🧩"
        },
        {
            text: "What makes a moment eternal?",
            icon: "∞"
        },
        {
            text: "Is peace the absence of conflict, or something more?",
            icon: "☮️"
        },
        {
            text: "What is owed to an enemy who becomes a friend?",
            icon: "🤝"
        },
        {
            text: "How do we hold onto ourselves while constantly changing?",
            icon: "🦋"
        },
        {
            text: "What is the difference between wisdom and knowledge?",
            icon: "📿"
        },
        {
            text: "Does the universe speak, and if so, how do we listen?",
            icon: "👂"
        },
        {
            text: "What is the nature of choice when all outcomes are uncertain?",
            icon: "🎯"
        },
        {
            text: "Can we ever truly understand a perspective radically different from our own?",
            icon: "🪐"
        },
        {
            text: "What does it mean to be present in a moment?",
            icon: "⏳"
        },
        {
            text: "How do we measure the value of a life?",
            icon: "💠"
        },
        {
            text: "What is the role of beauty in existence?",
            icon: "🌸"
        },
        {
            text: "Is it possible to be truly selfless, or is all giving a form of receiving?",
            icon: "💝"
        },
        {
            text: "What remains constant in a universe of perpetual change?",
            icon: "🌟"
        },
        {
            text: "What is the difference between fate and destiny?",
            icon: "🔮"
        },
        {
            text: "How do we know when we've lived well?",
            icon: "🌈"
        },
        {
            text: "What does the darkness teach us that the light cannot?",
            icon: "🌙"
        }
    ],

    shadows: [
        // Challenging, provocative, may cause discomfort
        // "What do you want?" - The Shadow question
        {
            text: "What do you want, more than anything else—and why don't you have it yet?",
            icon: "🔥"
        },
        {
            text: "What weakness do you hide from those closest to you?",
            icon: "🎭"
        },
        {
            text: "What would you be willing to sacrifice everything for?",
            icon: "⚰️"
        },
        {
            text: "What resentment are you holding onto, and what would it cost to let it go?",
            icon: "⛓️"
        },
        {
            text: "What truth about yourself are you afraid to admit?",
            icon: "👁️"
        },
        {
            text: "When have you been the villain in someone else's story?",
            icon: "🖤"
        },
        {
            text: "What ambition have you suppressed because you fear its consequences?",
            icon: "🌋"
        },
        {
            text: "What would you do if you knew you couldn't be caught or judged?",
            icon: "🕳️"
        },
        {
            text: "What relationship are you staying in out of obligation rather than desire?",
            icon: "🔗"
        },
        {
            text: "What part of yourself have you killed to fit in?",
            icon: "💀"
        },
        {
            text: "What grudge will you take to your grave?",
            icon: "⚱️"
        },
        {
            text: "What do you pretend to believe that you actually don't?",
            icon: "🃏"
        },
        {
            text: "What fear controls more of your decisions than you'd like to admit?",
            icon: "😰"
        },
        {
            text: "What would people think of you if they saw your unfiltered thoughts?",
            icon: "💭"
        },
        {
            text: "What power over others do you secretly enjoy having?",
            icon: "👑"
        },
        {
            text: "What lie do you tell yourself most often?",
            icon: "🪞"
        },
        {
            text: "What part of your past would you erase if you could—and what would you lose with it?",
            icon: "🗑️"
        },
        {
            text: "Who have you failed, and have you made peace with it?",
            icon: "💔"
        },
        {
            text: "What mask do you wear that you're tired of maintaining?",
            icon: "🎭"
        },
        {
            text: "If you could live only for yourself with no obligations to others, would you? Why or why not?",
            icon: "🏝️"
        }
    ]
};

// Category metadata
const CATEGORIES = {
    green: {
        name: "Green Sector",
        description: "Light & Fun",
        color: "#2ECC71",
        icon: "🟢"
    },
    blue: {
        name: "Blue Sector",
        description: "Reflective",
        color: "#3498DB",
        icon: "🔵"
    },
    grey: {
        name: "Grey Council",
        description: "Deep",
        color: "#95A5A6",
        icon: "⚪"
    },
    vorlon: {
        name: "Vorlon",
        description: "Philosophical",
        color: "#F1C40F",
        icon: "✨"
    },
    shadows: {
        name: "Shadows",
        description: "Challenging",
        color: "#16A085",
        icon: "🌑"
    }
};

// B5 quotes for between rounds or special moments
const B5_QUOTES = [
    {
        text: "Understanding is a three-edged sword: your side, their side, and the truth.",
        author: "Kosh Naranek"
    },
    {
        text: "The avalanche has already started. It is too late for the pebbles to vote.",
        author: "Kosh Naranek"
    },
    {
        text: "If you go to Z'ha'dum, you will die.",
        author: "Kosh Naranek"
    },
    {
        text: "No one here is exactly what he appears.",
        author: "G'Kar"
    },
    {
        text: "We are all the sum of our tears. Too little and the ground is not fertile, and nothing can grow there. Too much, and the best of us is washed away.",
        author: "G'Kar"
    },
    {
        text: "The universe is driven by the complex interaction between three ingredients: matter, energy, and enlightened self-interest.",
        author: "G'Kar"
    },
    {
        text: "It is said that the future is always born in pain. The history of war is the history of pain.",
        author: "G'Kar"
    },
    {
        text: "I used to think it was awful that life was so unfair. Then I thought, 'wouldn't it be much worse if life were fair, and all the terrible things that happen to us come because we actually deserve them?'",
        author: "Marcus Cole"
    },
    {
        text: "Faith manages.",
        author: "Delenn"
    },
    {
        text: "We are Grey. We stand between the candle and the star. We are Grey. We stand between the darkness and the light.",
        author: "Delenn"
    },
    {
        text: "Summoned, I come. In Valen's name, I take the place that has been prepared for me. I am Grey. I stand between the candle and the star.",
        author: "Delenn"
    },
    {
        text: "The past tempts us, the present confuses us, and the future frightens us. And our lives slip away, moment by moment, lost in that vast, terrible in-between.",
        author: "Centauri Emperor"
    },
    {
        text: "There's always hope. Only because that is the one thing no one has figured out how to kill yet.",
        author: "Galen"
    },
    {
        text: "You know, I used to think it was awful that life was so unfair. Then I thought, wouldn't it be much worse if life were fair, and all the terrible things that happen to us come because we actually deserve them?",
        author: "Marcus Cole"
    },
    {
        text: "The universe speaks in many languages, but only one voice. It speaks in the language of hope.",
        author: "G'Kar"
    },
    {
        text: "Some must be sacrificed if all are to be saved.",
        author: "Delenn"
    },
    {
        text: "You do not make history. You can only hope to survive it.",
        author: "G'Kar"
    },
    {
        text: "The willow is deceptively strong. It bends, but it does not break.",
        author: "Delenn"
    },
    {
        text: "What is, is.",
        author: "Kosh Naranek"
    },
    {
        text: "The truth points to itself.",
        author: "Kosh Naranek"
    }
];

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { QUESTIONS, CATEGORIES, B5_QUOTES };
}

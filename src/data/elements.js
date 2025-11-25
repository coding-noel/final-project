import Poem from "@/app/components/Poem";
import { poemObject, idObjectFromArray } from "@/utils/utils";





export const featuredPoem = [5, 3, 7];
export const featuredContributor = 2
export const featuredContributorBlurb = `writes whimsical nature-inspired poems and loves experimenting with 
            short forms like haikus and micro-poetry. Check out her latest pieces!`


export const fullPoems = [
  poemObject(`My sweet dream

              You are my dream
              Yeah, dreams come true
              It didn't seem 
              Like it, before you
              I tried to ignore you
              Get back to before you
              But you saw me for me
              You were charming and sweet
              So kind and naive
              You wear your heart on your sleeve
              You changed me for the better
              Could this please be forever
              I don't want it to end
              You're my best friend
              My love
              This is what I've been dreaming of`),

  poemObject(`Untitled

              I love the way you look at me
              Remember what you took from me
              You took my heart 
              But I played my part
              I have it to you on a silver platter
              You drive me madder than a hatter
              Oh, but in the best way
              And if it is insane
              You're my best mistake
              And I know that you know
              How you make heart glow
              But I have to tell you anyway`),

  poemObject(`Heart to my soul

              You're my heart, you're my soul
              You're the one who makes me whole
              You're my joy, you're my light
              You make my feel alive
              You're the fire in my heart
              Don't want to ever grow apart
              I'm the the calm in your eyes
              With you finally got it right
              We bring out the best in each other
              I love you like no other
              I'm the tender in your touch
              And you're the passion in my love
              I'm the sea your land
              Come together at the beach, in the golden sand
              I don't ever want to be away from you
              For you there is nothing I wouldn't do
              You the heart to my soul
              Together we are whole`),

  poemObject(`Roller coaster

              War or peace
              You never cease
              To delight me
              To excite me
              This emotional roller coaster spins me round round
              No I'm never coming down down
              I'm so high
              Don't know why
              It is like this
              Don't wanna fight it`),

  poemObject(`Mind jaded heart gated

              Your mind is jaded
              Your heart is gated
              Apathy is overrated
              Your smile is fading
              Why do you hid yourself
              It's time to find yourself
              Come on love
              you're enough
              You just need to be you
              There's nothing else to do`),

  poemObject(`Reaching out

              In a moment of weakness
              I reached out, hopin' believin'
              You'd be there
              Not declare
              Me a lost cause
              But I was wrong
              You turned me down
              And turned around
              Forgot my existence
              Guess that's just kismet`),

  poemObject(`Untitled

              I felt such anger
              But rage was a stranger
              Rejected
              Unaccepted
              Looking inside, from out
              Riddled with fear, and doubt`),

  poemObject(`Swimming in circles
              
              I feel like a fish in a bowl
              I keep swimming in a circle
              round and round I go
              no progress to be shown
              unbeknownst to me
              I can never leave
              Just change my route
              And keep swimming about`)
];


export const people = [
  {
    name: 'Alice Johnson',
    firstName: 'Alice',
    likes: "hiking, painting, and classical music.",
    dislikes: "loud noises and spicy food.",
    favoriteColor: "Turquoise",
    favoriteAnimal: "Dolphin",
    exists: "nope. Matea wrote this person's poems.",
    id: "alice-johnson-000",
  },
  {
    name: 'Bob Smith',
    firstName: 'Bob',
    likes: "cooking, traveling, and photography.",
    dislikes: "traffic jams and cold weather.",
    favoriteColor: "Crimson",
    favoriteAnimal: "Red Panda",
    exists: "nope. Matea wrote this person's poems.",
    id: "bob-smith-000",
  },
  {
    name: 'Catherine Lee',
    firstName: 'Catherine',
    likes: "about reading, yoga, and gardening.",
    dislikes: "and procrastination.",
    favoriteColor: "Lavender",
    favoriteAnimal: "Hedgehog",
    exists: "nope. Matea wrote this person's poems.",
    id: "cathrine-lee-000",
  },
  {
    name: 'David Martinez',
    firstName: 'David',
    likes: "gaming, basketball, and sci-fi movies.",
    dislikes: "early mornings and crowded places.",
    favoriteColor: "Midnight Blue",
    favoriteAnimal: "Wolf",
    exists: "nope. Matea wrote this person's poems.",
    id: "david-martinez-000",
  },
  {
    name: 'Eva Chen',
    firstName: 'Eva',
    likes: "dancing, baking, and fashion design.",
    dislikes: "spiders and rainy days.",
    favoriteColor: "Coral Pink",
    favoriteAnimal: "Flamingo",
    exists: "nope. Matea wrote this person's poems.",
    id: "eva-chen-000",
  },
  {
    name: 'Frank Wilson',
    firstName: 'Frank',
    likes: "fishing, woodworking, and jazz music.",
    dislikes: "crowded places and spicy food.",
    favoriteColor: "Forest Green",
    favoriteAnimal: "Eagle",
    exists: "nope. Matea wrote this person's poems.",
    id: "frank-wilson-000",
  },
  {
    name: 'Grace Kim',
    firstName: 'Grace',
    likes: "photography, traveling, and sushi.",
    dislikes: "loud noises and early mornings.",
    favoriteColor: "Sunset Orange",
    favoriteAnimal: "Sea Turtle",
    exists: "nope. Matea wrote this person's poems.",
    id: "grace-kim-000",
  },
  {
    name: 'Henry O\'Connor',
    firstName: 'Henry',
    likes: "cycling, video games, and rock music.",
    dislikes: "rainy days and traffic jams.",
    favoriteColor: "Electric Yellow",
    favoriteAnimal: "Cheetah",
    exists: "nope. Matea wrote this person's poems.",
    id: "henry-oconnor-000",
  },
  {
    name: 'Matea Gillette',
    firstName: 'Matea',
    likes: "puzzles, hanging out with friends, and coding.",
    dislikes: "bugs (both the insect and software variety) and waiting in long lines.",
    favoriteColor: "Electric Blue and periwinkle",
    favoriteAnimal: "Owl",
    exists: "yep. Matea wrote her own poems.",
    id: "matea-gillette-000",
  }
]

export const categories = [
            {
              category: "Nature",
              id: "nature",
              poemIds: []
            },
            {
              category: "Love & Romance",
              id: "love-and-romance",
              poemIds: ["my-sweet-dream", "untitled-1", "heart-to-my-soul"]
            },
            {
              category: "Haiku / Short Forms",
              id: "haiku-slash-short-forms",
              poemIds: []
            },
            {
              category: "Humorous",
              id: "humorous",
              poemIds: []
            },
            {
              category: "Free Verse",
              id: "free-verse",
              poemIds: []
            },
            {
              category: "YA",
              id: "ya",
              poemIds: []
            },
            {
              category: "Story Poems",
              id: "story-poems",
              poemIds: []
            },
            {
              category: "Experimental",
              id: "experimental",
              poemIds: []
            },
            {
              category: "Character Based",
              id: "character-based",
              poemIds: []
            }
          ];
export const poemsObject = idObjectFromArray(fullPoems)

export const popularcategories = categories.slice(0, 8)
export const websiteContentJSON = {
  menu: [
    {
      route: "/",
      name: "Home",
    },
    {
      route: "/about",
      name: "About",
    },
    {
      route: "/media",
      name: "Media",
    },
    {
      route: "/platforms",
      name: "Platforms",
    },
    {
      route: "/requirements",
      name: "Requirements",
    },
    {
      route: "/languages",
      name: "Languages",
    },
    {
      route: "/creator",
      name: "Creator",
    },
    {
      route: "/reviews",
      name: "Reviews",
    },
    {
      route: "/contact",
      name: "Contact",
    },
  ],
  pages: {
    home: {
      about: {
        title:
          "You've inherited your grandfather's old farm plot in <span className='text-highlight'>Stardew Valley</span>.",
        subtitle:
          "Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home?",
        features: [
          {
            image: "/assets/images/farming.jpg",
            description: "Create the farm of your dreams.",
          },
          {
            image: "/assets/images/land.jpg",
            description: "Learn to live off the land.",
          },
          {
            image: "/assets/images/friends.jpg",
            description: "Become a part of the local community.",
          },
          {
            image: "/assets/images/love.jpg",
            description: "Meet someone special.",
          },
          {
            image: "/assets/images/mining.jpg",
            description: "Explore vast, mysterious caves.",
          },
          {
            image: "/assets/images/custom.jpg",
            description: "Customize your character and your home.",
          },
        ],
      },
      media: {
        title: "Media",
        sliderMedia: [
          {
            type: "video",
            link: "/assets/videos/movie_max.mp4",
          },
          {
            type: "image",
            link: "/assets/images/StardewValley_5.png",
          },
          {
            type: "image",
            link: "/assets/images/StardewValley_12-1.png",
          },
          {
            type: "image",
            link: "/assets/images/NightMarket-1-1.png",
          },
          {
            type: "image",
            link: "/assets/images/1_1screenshot15.png",
          },
          {
            type: "image",
            link: "/assets/images/StardewValley_11.png",
          },
          {
            type: "image",
            link: "/assets/images/StardewValley_4.png",
          },
        ],
      },
      platforms: {
        title: "Platforms",
        images: [
          "/assets/images/STEAM_logo.png",
          "/assets/images/PS4_logo.png",
          "/assets/images/XBOXOne_logo.png",
          "/assets/images/NintendoSwitch_logo.png",
          "/assets/images/iOS_logo.png",
          "/assets/images/android_logo.png",
        ],
      },
      requirements: {
        title: "Requirements",
        cards: [
          {
            platform: "Windows",
            image: "/assets/images/windows.png",
            requirementsList: [
              "OS *: Windows Vista or greater",
              "Processor: 2 Ghz",
              "Memory: 2 GB RAM",
              "Graphics: 256 mb video memory, shader model 3.0",
              "DirectX: Version 10",
              "Storage: 500 MB available space",
            ],
          },
          {
            platform: "MacOS",
            image: "/assets/images/mac-os-logo.png",
            requirementsList: [
              "OS: Mac OSX 10.10",
              "Processor: 2 Ghz",
              "Memory: 2 GB RAM",
              "Graphics: 256 mb video memory, OpenGL 2",
              "Storage: 500 MB available space",
            ],
          },
          {
            platform: "Linux",
            image: "/assets/images/linux-platform.png",
            requirementsList: [
              "OS: Ubuntu 12.04 LTS",
              "Processor: 2 Ghz",
              "Memory: 2 GB RAM",
              "Graphics: 256 mb video memory, OpenGL 2",
              "Storage: 500 MB available space",
            ],
          },
        ],
      },
      languages: {
        title: "Languages",
        languagesList: [
          {
            name: "English",
            image: "/assets/icons/united-kingdom.png",
          },
          {
            name: "German",
            image: "/assets/icons/germany.png",
          },
          {
            name: "Spanish - Spain",
            image: "/assets/icons/spain.png",
          },
          {
            name: "Japanese",
            image: "/assets/icons/japan.png",
          },
          {
            name: "Portuguese - Brazil",
            image: "/assets/icons/brazil.png",
          },
          {
            name: "Russian",
            image: "/assets/icons/russia.png",
          },
          {
            name: "Simplified Chinese",
            image: "/assets/icons/china.png",
          },
          {
            name: "French",
            image: "/assets/icons/france.png",
          },
          {
            name: "Italian",
            image: "/assets/icons/italy.png",
          },
          {
            name: "Hungarian",
            image: "/assets/icons/hungary.png",
          },
          {
            name: "Korean",
            image: "/assets/icons/south-korea.png",
          },
          {
            name: "Turkish",
            image: "/assets/icons/turkey.png",
          },
        ],
      },
      creator: {
        title: "Creator",
        text: "ConcernedApe is Eric Barone, the creator and lead developer of Stardew Valley, as well as the name of the company he founded to continue game development. From 2012 to 2019, he was the sole developer of the game (except the multiplayer networking code in 1.3) and created all art, sound effects, and music. He currently resides in Seattle, Washington.",
      },
      reviews: {
        title: "Reviews",
        reviewsList: [
          {
            name: "Giant Bomb",
            description:
              "“Far more than just a farming game, this one-man labor of love is filled with seemingly endless content and heart.” - 5/5",
            link: "https://www.giantbomb.com/reviews/stardew-valley-review/1900-739/",
            icon: "/assets/icons/link.png",
          },
          {
            name: "Destructoid",
            description:
              " “The core mechanics and relaxing aesthetic merge so well together  that players will sink in to the experience and never want to leave.” - 95",
            link: "https://www.destructoid.com/reviews/review-stardew-valley/#post",
            icon: "/assets/icons/link.png",
          },
          {
            name: "CGMagazines",
            description:
              " “Stardew Valley has been the most rich and heartwarming experience  I've had in a game in years.” - 95",
            link: "https://www.cgmagonline.com/review/game/stardew-valley-pc-review/",
            icon: "/assets/icons/link.png",
          },
        ],
      },
      contact: {
        title: "Contact Us",
        subtitle: "Ask us Anything",
        contactInfo: [
          {
            type: "Phone",
            description: "(555) 26021 - 20161",
            icon: "/assets/icons/phone-call.png",
          },
          {
            type: "Location",
            description: "Ferngill Republic",
            icon: "/assets/icons/location.png",
          },
          {
            type: "Email",
            description: "pelicantown@email.com",
            icon: "/assets/icons/mail.png",
          },
        ],
        form: [
          {
            type: "input",
            name: "name",
            placeholder: "NAME",
          },
          {
            type: "input",
            name: "email",
            placeholder: "EMAIL",
          },
          {
            type: "textarea",
            name: "message",
            placeholder: "MESSAGE",
          },
        ],
        buttonText: "Send Message",
      },
    },
  },
};

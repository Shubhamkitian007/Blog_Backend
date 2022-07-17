const get = (request, response) => {
    response.send([
        {
            id: 17,
            avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
            details: "Have a quick bite today & refresh your mood",
            category: "food",
            image:
              "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/double-cheese.f8ac8046d97de45670aa7d41b5cf8db6.1.jpg",
            name: "Pizza Hut",
            content:
              "Pizza Hut was founded on June 15, 1958, by two brothers, Dan and Frank Carney, both Wichita State students, as a single location in Wichita, Kansas.[7] Six months later they opened a second outlet and within a year they had six Pizza Hut restaurants. The brothers began franchising in 1959. The iconic Pizza Hut building style was designed in 1963 by Chicago architect George Lindstrom[8] and was implemented in 1969.PepsiCo acquired Pizza Hut in November 1977.[10][11] Twenty years later, Pizza Hut (alongside Taco Bell and Kentucky Fried Chicken) were spun off by PepsiCo on May 30, 1997, and all three restaurant chains became part of a new company named Tricon Global Restaurants, Inc. The company assumed the name of Yum! Brands on May 22, 2002.PepsiCo acquired Pizza Hut in November 1977.[10][11] Twenty years later, Pizza Hut (alongside Taco Bell and Kentucky Fried Chicken) were spun off by PepsiCo on May 30, 1997, and all three restaurant chains became part of a new company named Tricon Global Restaurants, Inc. The company assumed the name of Yum! Brands on May 22, 2002.Before closing in 2015, the oldest continuously operating Pizza Hut was in Manhattan, Kansas, in a shopping and tavern district known as Aggieville near Kansas State University. The first Pizza Hut restaurant east of the Mississippi River was opened in Athens, Ohio, in 1966 by Lawrence Berberick and Gary Meyers.",
          },
          {
            id: 18,
            avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
            category: "food",
            details: "Feeling hungry,Grab a bite today",
            image:
              "https://media-cdn.tripadvisor.com/media/photo-s/18/32/77/f0/photo0jpg.jpg",
            name: "Burger King",
            content:
              "The predecessor to Burger King was founded in 1953 in Jacksonville, Florida, as Insta-Burger King.[8] After visiting the McDonald brothers' original store location in San Bernardino, California, the founders and owners (Keith J. Kramer and his wife's uncle Matthew Burns), who had purchased the rights to two pieces of equipment called Insta-machines, opened their first restaurants. Their production model was based on one of the machines they had acquired, an oven called the Insta-Broiler. This strategy proved to be so successful that they later required all of their franchises to use the device.[9][10] After the company faltered in 1959, it was purchased by its Miami, Florida, franchisees, James McLamore and David R. Edgerton. They initiated a corporate restructuring of the chain, first renaming the company Burger King. They ran the company as an independent entity for eight years (eventually expanding to over 250 locations in the United States), before selling it to the Pillsbury Company in 1967.",
          },
          {
            id: 19,
            avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
            details: "Remove your hunger in just 2 mins",
            category: "food",
            image:
              "https://api.time.com/wp-content/uploads/2015/06/maggi-noodles.jpg",
            name: "Maggi",
            content:
              "The company originated in Switzerland in 1884, when Julius Maggi took over his father's mill. He quickly became a pioneer of industrial food production, aiming to improve the nutritional intake of worker families. Maggi was the first to bring protein-rich legume meals to the market, and followed up with a ready-made soup based on legume meals in 1886. After that Julius Maggi introduced bouillon concentrates, first in capsules, then in cubes. In 1897, Julius Maggi founded the company Maggi GmbH in Singen, Germany.In 1947, following several changes in ownership and corporate structure, Maggis holding company merged with the Nestlé company to form Nestlé-Alimentana S.A., currently known in its francophone home base as Nestlé S.A.",
          },
          {
            id: 20,
            avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
            category: "food",
            details: "Mouth watering food to lift your mood",
            image: "https://i.ytimg.com/vi/jLUuaFpEQkM/maxresdefault.jpg",
            name: "Idli",
            content:
              "A precursor of the modern idli is mentioned in several ancient Indian works. Vaddaradhane, a 920 CE Kannada language work by Shivakotiacharya mentions iddalige, prepared only from a black gram batter. Chavundaraya II, the author of the earliest available Kannada encyclopedia, Lokopakara (c.1025 CE), describes the preparation of this food by soaking black gram in buttermilk, ground to a fine paste, and mixed with the clear water of curd and spices.[1] The Western Chalukya king and scholar Someshwara III, reigning in the area now called Karnataka, included an idli recipe in his encyclopedia, Manasollasa (1130 CE). This Sanskrit-language work describes the food as iḍḍarikā. In Karnataka, the Idli in 1235 CE is described as being light, like coins of high value, which is not suggestive of a rice base.[2] The food prepared using this recipe is now called uddina idli in Karnataka.The recipe mentioned in these ancient Indian works leaves out three key aspects of the modern idli recipe: the use of rice (not just black gram), the long fermentation of the mix, and the steaming for fluffiness. The references to the modern recipe appear in the Indian works only after 1250 CE. Food historian K. T. Achaya speculates that the modern idli recipe might have originated in present-day Indonesia, which has a long tradition of fermented food. According to him, the cooks employed by the Hindu kings of the Indianised kingdoms might have invented the steamed idli there, and brought the recipe back to India during 800–1200 CE",
          },
    ])
}

module.exports.apiController = get;
const get = (request, response)=>{
    response.send([
        {
            id: 6,
            avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
            category: "technology",
            name: "IOT",
            image:
              "https://www.simplilearn.com/ice9/free_resources_article_thumb/iot-explained-what-it-is-how-it-works-and-its-applications-banner.jpg",
            details: "Iot Explained.What it is, How it works, Why it matters",
            content:
              "The internet of things, or IoT, is a system of interrelated computing devices, mechanical and digital machines, objects, animals or people that are provided with unique identifiers (UIDs) and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction.A thing in the internet of things can be a person with a heart monitor implant, a farm animal with a biochip transponder, an automobile that has built-in sensors to alert the driver when tire pressure is low or any other natural or man-made object that can be assigned an Internet Protocol (IP) address and is able to transfer data over a network.Increasingly, organizations in a variety of industries are using IoT to operate more efficiently, better understand customers to deliver enhanced customer service, improve decision-making and increase the value of the business.",
          },
          {
            id: 7,
            avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
            category: "technology",
            name: "Data Science",
            image:
              "https://www.simplilearn.com/ice9/free_resources_article_thumb/Data-Science-vs.-Big-Data-vs.jpg",
            details: "Data Science vs Big Data vs Data Analytics",
            content:
              "Data science continues to evolve as one of the most promising and in-demand career paths for skilled professionals. Today, successful data professionals understand that they must advance past the traditional skills of analyzing large amounts of data, data mining, and programming skills. In order to uncover useful intelligence for their organizations, data scientists must master the full spectrum of the data science life cycle and possess a level of flexibility and understanding to maximize returns at each phase of the process.The term “data scientist” was coined as recently as 2008 when companies realized the need for data professionals who are skilled in organizing and analyzing massive amounts of data.1 In a 2009 McKinsey&Company article, Hal Varian, Google’s chief economist and UC Berkeley professor of information sciences, business, and economics, predicted the importance of adapting to technology’s influence and reconfiguration of different industries.",
          },
          {
            id: 8,
            avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
            category: "technology",
            name: "Full Stack",
            image:
              "https://cdn.educba.com/academy/wp-content/uploads/2019/11/full-stack-web-developer.png",
            details: "The Rise of Full Stack Freelancing",
            content:
              "A Full Stack Developer is someone who works with the Back End — or server side — of the application as well as the Front End, or client side. Full Stack Developers have to have some skills in a wide variety of coding niches, from databases to graphic design and UI/UX management in order to do their job well. They are something of a swing, ready to assist wherever needed in the process.Full Stack Developers are highly intelligent people who have trained through their education or through years in related fields on the job force. These jobs are in high demand, but employers don’t want to trust their web development to just anyone. There are certain standards of education and work experience that Full Stack Developers have to meet to be hired. These vary from employer to employer, but here are some good bets.",
          },
    ])
}
module.exports.apiController = get;
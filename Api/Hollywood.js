const get = (request, response) => {
    response.send([
        {
            id: 21,
            avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
            imdb: "5.8/10",
            category: "hollywood",
            release: "12th November,2009",
            image:
              "http://gonewiththetwins.com/new/wp-content/uploads/2014/01/2012.jpg",
            name: "2012",
            content:
              "In 2009, American geologist Adrian Helmsley visits astrophysicist Satnam Tsurutani in India and learns that an exotic new type of neutrinos from a huge solar flare are heating the Earth's core. In Washington, D.C., Helmsley presents his information to White House Chief of Staff Carl Anheuser, who brings him to meet U.S. President Thomas Wilson.In 2010, Wilson and other world leaders begin a secret project to ensure humanity's survival. China and the G8 nations begin building nine arks, each capable of carrying 100,000 people, in the Himalayas near Cho Ming, Tibet. Nima, a Buddhist monk, is evacuated and his brother Tenzin joins the ark project. Funding is raised by secretly selling tickets to the rich and famous for €1 billion per person. By 2011, valuable art is moved to the arks but art expert and First Daughter Laura Wilson is told it is being sent to the Alps for preservation.",
          },
      
          {
            id: 22,
            avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
            imdb: "7.6/10",
            release: "12th April,2002",
      
            category: "hollywood",
            image:
              "https://assets.gadgets360cdn.com/pricee/assets/product/202112/harry_potter_return_to_hogwarts_1640957863.jpg",
            name: "Harry Potter",
            content:
              "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).The series was originally published in English by Bloomsbury in the United Kingdom and Scholastic Press in the United States. All versions around the world are printed by Grafica Veneta in Italy.[1] A series of many genres, including fantasy, drama, coming of age, and the British school story (which includes elements of mystery, thriller, adventure, horror, and romance), the world of Harry Potter explores numerous themes and includes many cultural meanings and references.[2] According to Rowling, the main theme is death.[3] Other major themes in the series include prejudice, corruption, and madness.",
          },
      
          {
            id: 23,
            avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
            release: "31th March,1999",
            imdb: "8.7/10",
            category: "hollywood",
            image:
              "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-matrix-1574173308.jpg",
            name: "Matrix",
            content:
              "The Matrix is a 1999 science fiction action film[5][6] written and directed by the Wachowskis.[a] It is the first installment in The Matrix film series, starring Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving, and Joe Pantoliano. It depicts a dystopian future in which humanity is unknowingly trapped inside a simulated reality, the Matrix, which intelligent machines have created to distract humans while using their bodies as an energy source.[7] When computer programmer Thomas Anderson, under the hacker alias Neo, uncovers the truth, he joins a rebellion against the machines along with other people who have been freed from the Matrix.The Matrix is an example of the cyberpunk subgenre of science fiction.[8] The Wachowskis' approach to action scenes was influenced by Japanese animation[9] and martial arts films, and the film's use of fight choreographers and wire fu techniques from Hong Kong action cinema influenced subsequent Hollywood action film productions. ",
          },
      
          {
            id: 24,
            avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
            release: "15th April,1994",
            imdb: "7.6/10",
            category: "hollywood",
            image: "https://parade.com/wp-content/uploads/2018/06/JWFK.jpg",
            name: "The Jurassic Park",
            content:
              "Jurassic Park is a 1993 American science fiction action film[3] directed by Steven Spielberg and produced by Kathleen Kennedy and Gerald R. Molen. It is the first installment in the Jurassic Park franchise, and the first film in the Jurassic Park original trilogy, and is based on the 1990 novel of the same name by Michael Crichton and a screenplay written by Crichton and David Koepp. The film is set on the fictional island of Isla Nublar, located off Central America's Pacific Coast near Costa Rica. There, wealthy businessman John Hammond and a team of genetic scientists have created a wildlife park of de-extinct dinosaurs. When industrial sabotage leads to a catastrophic shutdown of the park's power facilities and security precautions, a small group of visitors and Hammond's grandchildren struggle to survive and escape the perilous island.Before Crichton's novel was published, four studios put in bids for its film rights. With the backing of Universal Studios, Spielberg acquired the rights for $1.5 million before its publication in 1990; Crichton was hired for an additional $500,000 to adapt the novel for the screen. Koepp wrote the final draft, which left out much of the novel's exposition and violence and made numerous changes to the characters.",
          },
    ])
}

module.exports.apiController = get;
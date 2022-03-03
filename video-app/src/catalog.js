export function seedDatabase(firebase) {
  function getUUID() {
    /* default eslint-disable command to prevent possible errors */
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const piece = (Math.random() * 16) | 0;
      const elem = c === "x" ? piece : (piece & 0x3) | 0x8;
      return elem.toString(16);
    });
  }

  /* movies
    ============================================ */
  // Documentaries
  firebase.firestore().collection("movies").add({
    id: getUUID(),
    title: "The legend never dies",
    description:
      "This movie shows the lifetime myths and believes of ancient empires and kingdoms",
    genre: "Documentaries",
    duration: "2 hrs 30mins",
    slug: "legend-never-dies",
  });
  firebase.firestore().collection("movies").add({
    id: getUUID(),
    title: "Origin of Caesarean doctrines",
    description:
      "we explore the ancient beginnings and life of Emperor Julius Caesar, how his doctrines affected mindsets in the medieval era. popular beliefs and myths exposed",
    genre: "Documentaries",
    duration: "2 hrs",
    slug: "origin-of-caesarean-doctrines",
  });

  // Comedies
  firebase.firestore().collection("movies").add({
    id: getUUID(),
    title: "Kids do funny things",
    description:
      "This movie takes away the stress and pains of a rough day with laughter from the amazing scenes of the funniest things kids do.",
    genre: "Comedy",
    duration: "1 hrs 15 mins",
    slug: "kids-do-funny-things",
  });

  firebase.firestore().collection("movies").add({
    id: getUUID(),
    title: "Scooby Do the funny and sad",
    description:
      "Scooby do is a kid's comedy movie, very interesting to watch. it is a story about a Dog and 3 humans going around solving mysteries",
    genre: "Comedy",
    duration: "1 hrs 25 mins",
    slug: "scooby-do-the funny-and-sad",
  });

  // Educational
  firebase.firestore().collection("movies").add({
    id: getUUID(),
    title: "Veterinary Medicine",
    description:
      "Introduction to Veterinary Medicine, concept of Veterinary Medicine, classifications, principles and related theories.",
    genre: "Educational",
    duration: "4",
    slug: "veterinary-medicine",
  });
  firebase.firestore().collection("movies").add({
    id: getUUID(),
    title: "Maintenance Services",
    description:
      "Introduction to Maintenance Services, concept of Maintenance Services, classifications, principles and related theories",
    genre: "Educational",
    duration: "3 hrs",
    slug: "maintenance-services",
  });

  // Action
  firebase.firestore().collection("movies").add({
    id: getUUID(),
    title: "The Amazing Spiderman",
    description:
      "The Amazing Spiderman franchise has been widely popular among action movies enthusiasts. It is produced by Marvel studios",
    genre: "action",
    duration: "5 hrs",
    slug: "the-amazing-spiderman",
  });

  /* series
    ============================================ */
  // Drama
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Squid Game",
    description:
      "Squid game is a popular Korean 2021 series. It is now the most-watched series on Netflix with billions of streamed hours",
    genre: "drama",
    duration: "6 hrs",
    slug: "squid-game",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Harry Potter",
    description:
      "Harry Potter is an incredible series about mysteries and magic in England from the book Harry Potter.",
    genre: "drama",
    duration: "8 hrs",
    slug: "harry-potter",
  });

  // Suspense
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Knives out",
    description:
      "Knives Out is an interesting suspense movie about a murder incident involving a famous multi-millionaire author in his home estate.",
    genre: "suspense",
    duration: "1 hrs 30 mins",
    slug: "knives-out",
  });

  // Children
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Ben 10",
    description:
      "Ben 10 is an interesting kids movie about a little boy who found a watch that gave him super-human abilities to transform into many creatures. Ben alongside his grandpa and sister decided to use their new abilities to fight crime.",
    genre: "children",
    duration: "2 hrs",
    slug: "ben-10",
  });

  // Romance
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Romeo and Juliet",
    description:
      "Romeo and Juliet is a classic romance movie from the legendary novel Romeo and Juliet.",
    genre: "Romance",
    duration: "2 hrs",
    slug: "romeo-and-juliet",
  });
}

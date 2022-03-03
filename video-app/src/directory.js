export function contentFilter({ series, movies }) {
  return {
    movies: [
      {
        title: "Documentaries",
        data: movies.filter((item) => item.genre === "Documentaries"),
        image: "/images/Documentaries.JPG",
      },
      {
        title: "Comedy",
        data: movies.filter((item) => item.genre === "Comedy"),
        image: "/images/comedy.JPG",
      },
      {
        title: "Educational",
        data: movies.filter((item) => item.genre === "Educational"),
        image: "/images/educational.JPG",
      },
      {
        title: "Action",
        data: movies.filter((item) => item.genre === "Action"),
        image: "/images/action.JPG",
      },
      {
        title: "Business",
        data: movies.filter((item) => item.genre === "Business"),
        image: "/images/business.JPG",
      },
    ],
    series: [
      {
        title: "Drama",
        data: series.filter((item) => item.genre === "Drama"),
        image: "/images/Drama.JPG",
      },
      {
        title: "Suspense",
        data: series.filter((item) => item.genre === "suspense"),
        image: "/images/suspense.JPG",
      },
    ],
  };
}

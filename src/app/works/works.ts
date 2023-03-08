import crwnImage from "../../../public/works/crwn.png";
import aiImage from "../../../public/works/ai-thing.png";

const works = [
  {
    id: 1,
    title: "👑 Crwn Clothing 👕",
    href: "/works/crwn-clothing",
    description:
      "A super simple clothing e-commerce site created with React, Redux, Hooks, and GraphQL.",
    imageUrl: crwnImage,
    date: "September 2020",
    datetime: "2020-09-01",
    categories: [
      { title: "React", href: "https://reactjs.org/" },
      { title: "Redux", href: "https://redux.js.org/" },
      { title: "GraphQL", href: "https://graphql.org/" },
    ],
    author: {
      name: "Darren Wong",
      role: "Personal",
      href: "https://github.com/WongDarren",
      imageUrl: "https://avatars.githubusercontent.com/u/8741435?v=4",
    },
  },
  {
    id: 2,
    title: "🤖 AI Thing 📸",
    href: "/works/ai-thing",
    description:
      "AI Thing with DALL-E is an application built using Vite, TypeScript, Tailwind CSS, MongoDB, Cloudinary, and OpenAI that demonstrates the use of machine learning models for image generation. The application allows users to generate images using OpenAI's DALL-E and share and download them.",
    imageUrl: aiImage,
    date: "March 2023",
    datetime: "2023-03-01",
    categories: [
      { title: "Vite", href: "https://reactjs.org/" },
      { title: "MongoDB", href: "https://www.mongodb.com/" },
      { title: "OpenAI", href: "https://openai.com/" },
    ],
    author: {
      name: "Darren Wong",
      role: "Personal",
      href: "https://github.com/WongDarren",
      imageUrl: "https://avatars.githubusercontent.com/u/8741435?v=4",
    },
  },
];

export default works;

import React from "react";
import darrenImage from "../../public/darren.jpg";
import Image from "next/image";

interface ListItemProps {
  children: string;
  year: string;
}

const ListItem = ({ children, year }: ListItemProps) => {
  return (
    <li className={"mt-4 flex"}>
      <p className={"ml-2"}>
        <span className={"text-indigo-600"}>{year}</span> - {children}
      </p>
    </li>
  );
};

const Page = () => {
  return (
    <div className={"bg-white py-12 sm:py-12"}>
      <div
        className={
          "grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12"
        }
      >
        <div className={"m-auto lg:pl-20"}>
          <div className={"max-w-xs px-2.5 lg:max-w-none"}>
            <Image
              src={darrenImage}
              alt={"profile image"}
              className={
                "aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              }
            />
          </div>
        </div>
        <div className={"lg:order-first lg:row-span-1"}>
          <h1 className={"text-4xl font-bold tracking-tight sm:text-5xl"}>
            Darren Wong
          </h1>
          <p
            className={"pt-2 text-base font-semibold leading-7 text-indigo-600"}
          >
            Software Engineer
          </p>
          <div className={"mt-6 space-y-7 text-base"}>
            <p>
              Meet Darren, a skilled and dynamic software engineer who is
              passionate about exploring the latest technologies and pushing the
              boundaries of innovation. He loves working with front-end
              technologies and has a proven track record of developing
              innovative projects that meet and exceed client expectations. His
              expertise extends to building APIs and working with databases,
              allowing him to deliver robust and scalable software solutions.
            </p>
            <p>
              In addition to his professional pursuits, Darren is a dedicated PC
              gamer who enjoys immersing himself in the latest games and
              exploring the latest trends in gaming technology. He is also a
              passionate sports enthusiast, actively playing his favorite sports
              such as tennis, ping pong, and volleyball.
            </p>
            <p>
              When he's not hard at work developing cutting-edge software or
              gaming, Darren enjoys exploring new flavors and cuisines, sampling
              the latest culinary trends, and experimenting with new recipes.
              His adventurous spirit and willingness to try new things make him
              a valuable member of any team and a fun and engaging colleague to
              work with.
            </p>
          </div>
        </div>
        <div>
          <p className={"text-base font-semibold leading-7 text-indigo-600"}>
            Timeline
          </p>
          <div className={"px-2"}>
            <ul role={"list"}>
              <ListItem year={"1997"}>Birth year 🎂.</ListItem>
              <ListItem year={"2000"}>
                Got my first video game console and video game - Nintendo 64,
                Mario Kart 64.
              </ListItem>
              <ListItem year={"2005"}>
                Became interested in computers and computer games, downloaded my
                first MMORPG - MapleStory.
              </ListItem>
              <ListItem year={"2012"}>
                Took my first web development class in high school.
              </ListItem>
            </ul>
          </div>
        </div>
        <div>
          <div className={"-mt-16 px-2 md:mt-10"}>
            <ul role={"list"}>
              <ListItem year={"2016"}>
                Interned at a local startup to do front end web development.
              </ListItem>
              <ListItem year={"2017"}>
                Tutored K-12 students in Math and Reading.
              </ListItem>
              <ListItem year={"2019"}>
                Graduated from University of Nevada, Las Vegas with a Bachelor
                of Science in Computer Science.
              </ListItem>
              <ListItem year={"2021"}>
                Began career as a Software Developer at General Motors.
              </ListItem>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

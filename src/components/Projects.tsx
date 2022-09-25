import { Heading } from './Heading';
import { ExternalLinkIcon } from './icons';
import { Link } from './Link';

const projects = [
  {
    id: 'twitter-fullstack-clone',
    title: 'Twitter Fullstack Clone',
    link: 'https://github.com/rafaelalmeidatk/twitter-fullstack-clone',
    description:
      'Fullstack clone of Twitter, created with React, Next.js, Apollo, Node.js, Express, GraphQL, PostgreSQL, and Docker',
  },
  {
    id: 'discord-react-clone',
    title: 'Discord React Clone',
    link: 'https://github.com/rafaelalmeidatk/discord-react-clone',
    description: "Front-end replication of Discord's app made with React",
  },
  {
    id: 'hitbox',
    title: 'Hitbox',
    link: 'https://github.com/rafaelalmeidatk/hitbox',
    description:
      'Program for creating animations based on a sprite sheet, you can edit the frames and colliders and see the results in real time',
  },
  {
    id: 'super-pete',
    title: 'Super Pete The Pirate',
    link: 'https://github.com/rafaelalmeidatk/Super-Pete-The-Pirate',
    description: 'Source code of the game "Super Pete, The Pirate"',
  },
];

export const Projects = () => {
  return (
    <section>
      <Heading>
        <Link
          className="text-current"
          href="https://github.com/rafaelalmeidatk"
          isExternal
        >
          Projects
        </Link>
      </Heading>

      <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 gap-6 ">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={project.link}
            isExternal
            className="group text-current py-3 px-4 relative top-0 transition-all border border-neutral-800 rounded-md hover:top-[-2px] hover:opacity-90 hover:no-underline"
          >
            <div className="flex items-center">
              <div className="text-lg font-semibold">{project.title}</div>

              <ExternalLinkIcon
                size={3}
                className="mb-0.5 ml-2 transition-opacity opacity-0 group-hover:opacity-100"
              />
            </div>
            <div className="text-sm opacity-80 pointer-events-none font-normal">
              {project.description}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

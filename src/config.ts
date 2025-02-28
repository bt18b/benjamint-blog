import { makeSEOTitle } from "./lib/utils";
import type {
    NavBarLink,
    SocialLink,
    Position,
    Identity,
    AboutPageContent,
    ProjectPageContent,
    BlogPageContent,
    CreditPageContent,
    ContactPageContent,
    NotFoundPageContent,
    HomePageContent,
  } from "./types/config";
  
  export const position: Position = {
    position: "ICT Systemspecialist I",
    title: "Swiss Armed Forces",
    url: "https://www.vtg.admin.ch/en",
    external: true
  };

  export const identity: Identity = {
    name: "Benjamin Tannheimer",
    logo: "/pfp.jpg",
    email: "benjamintannheimer [at] protonmail [dot] com",
    countryCode: "CH", // use the two letter iso code
    country: "Switzerland",
  };
  
  export const navBarLinks: NavBarLink[] = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Projects",
      url: "/projects",
    },
    {
      title: "Blog",
      url: "/blog",
    },
    {
      title: "Resume",
      url: "/resume.pdf",
    },
  ];
  
  export const socialLinks: SocialLink[] = [
    {
      title: "GitHub",
      url: "https://github.com/bt18b",
      icon: "Github",
      external: true,
    },
    {
      title: "Mail",
      url: "mailto:benjamintannheimer [at] protonmail [dot] com",
      icon: "Mail",
      external: true,
    },
    {
      title: "LinkedIn",
      url: "https://example.com",
      icon: "Linkedin",
      external: true,
    },
  ];
  
  // Home (/)
  export const homePageContent: HomePageContent = {
    seo: {
      title: makeSEOTitle("Home", identity.name),
      description:
        "Employee from Switzerland who loves building cool things using code.",
      image: identity.logo,
    },
    page: {
      title: "Welcome to My Digital World",
      subtitle: "Exploring the frontiers of web development and software engineering "
    },
    role: "Student & Software Developer",
    description:
      "I'm Benjamin Tannheimer, a employee from Switzerland who also loves building cool things using code.",
    socialLinks: socialLinks,
    links: [
      {
        title: "Projects",
        url: "/projects",
      },
      {
        title: "About",
        url: "/about",
      },
    ],
  };
  
  // About (/about)
  export const aboutPageContent: AboutPageContent = {
    seo: {
      title: makeSEOTitle("About", identity.name),
      description:
        "employee from Switzerland who loves building cool things using code.",
      image: identity.logo,
    },
    page: {
      title: "Hi, I'm Benjamin Tannheimer 👋",
      subtitle: "Passionate software developer with a love for web technologies, open-source projects, and automation."
    },
    about: {
      description: `
  I'm Benjamin Tannheimer, a employee from Switzerland who also loves building cool things using code.
  <br/><br/>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque placeat est architecto tempora voluptatem sit suscipit aspernatur? <br/><br/>
  Facere quibusdam reiciendis, distinctio sunt praesentium error accusantium consectetur nemo vero officia itaque.`
    },
    work: {
      description: `I've worked with a variety of technologies and tools to build cool things. Here are some of the projects I've worked on.`, // Markdown is supported
      items: [
        {
          title: "Software Developer",
          company: {
            name: "Freelance",
            image: "/pfp.jpg",
            url: "https://github.com/bt18b",
          },
          date: "2021 - Present",
        },
        {
          title: "Software Developer",
          company: {
            name: "Freelance",
            image: "/pfp.jpg",
            url: "https://github.com/bt18b",
          },
          date: "2019 - 2021",
        },
      ],
    },
    connect: {
      description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`, // Markdown is supported
      links: socialLinks,
    },
  };
  
  // Projects (/projects)
  export const projectsPageContent: ProjectPageContent = {
    seo: {
      title: makeSEOTitle("Projects", identity.name),
      description: "Check out what I've been working on.",
      image: identity.logo,
    },
    page: {
      title: "Projects",
      subtitle: "Check out what I've been working on"
    },
    projects: [
      {
        title: "Project 1",
        description: "Project 1 Description",
        image: "/no-image.jpg",
        year: "2024",
        url: "https://github.com/bt18b",
      },
      {
        title: "Project 1",
        description: "Project 1 Description",
        image: "/no-image.jpg",
        year: "2024",
        url: "https://github.com/bt18b",
      },
      {
        title: "Project 1",
        description: "Project 1 Description",
        image: "/no-image.jpg",
        year: "2024",
        url: "https://github.com/bt18b",
      },
    ],
  };
  
  // Blog (/blog)
  export const blogPageContent: BlogPageContent = {
    seo: {
      title: makeSEOTitle("Blog", identity.name),
      description: "Thoughts, stories and ideas.",
      image: identity.logo,
    },
    page: {
      title: "Blog",
      subtitle: "Thoughts and ideas"
    },
  };

  // Credits (/credits)
  export const creditPageContent: CreditPageContent = {
    seo: {
      title: makeSEOTitle("Credit", identity.name),
      description: "Credits",
      image: identity.logo,
    },
    page: {
      title: "Credits",
      subtitle: "Some cool people I got inspiration from"
    },
  };

  // Contact (/contact)
  export const contactPageContent: ContactPageContent = {
    seo: {
      title: makeSEOTitle("Contact", identity.name),
      description: "Contact",
      image: identity.logo,
    },
    page: {
      title: "Contact",
      subtitle: "Wanna talk? Reach out to me"
    },
  };

  // 404 (/404)
  export const notFoundPageContent: NotFoundPageContent = {
    seo: {
      title: makeSEOTitle("404", identity.name),
      description: "404",
      image: identity.logo,
    },
    page: {
      title: "404",
      subtitle: "Page not found"
    },
  };
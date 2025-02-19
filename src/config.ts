import type {
    NavBarLink,
    SocialLink,
    Identity,
    AboutPageContent,
    ProjectPageContent,
    BlogPageContent,
    HomePageContent,
    NotFoundPageContent,
} from "./types/config";

export const identity: Identity = {
    name: "Benjamin Tannheimer",
    logo: "/pfp.png",
    email: "benjamin.tannheimer@proton.me",
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
];

export const socialLinks: SocialLink[] = [
    {
        title: "GitHub",
        url: "https://github.com/bt18b",
        icon: "mdi:github",
        external: true,
    },
    {
        title: "Mail",
        url: "mailto:benjamin.tannheimer@proton.me",
        icon: "mdi:email",
    },
];

// Not found - 404 (/?)
export const notFoundPageContent: NotFoundPageContent = {
    seo: {
        title: "Benjamin Tannheimer",
        description:
        "Full time student from Germany who loves building cool things using code.",
        image: identity.logo,
    },
}

// Home (/)
export const homePageContent: HomePageContent = {
    seo: {
        title: "Benjamin Tannheimer",
        description:
        "Full time student from Germany who loves building cool things using code.",
        image: identity.logo,
    },
    role: "Student & Software Developer",
    description:
        "I'm Benjamin Tannheimer, a full time student from Germany who also loves building cool things using code.",
    socialLinks: socialLinks,
    links: [
        {
        title: "My Projects",
        url: "/projects",
        },
        {
        title: "About Me",
        url: "/about",
        },
    ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
    seo: {
        title: "About | Benjamin Tannheimer",
        description:
        "Full time student from Germany who loves building cool things using code.",
        image: identity.logo,
    },
    subtitle: "Some information about myself",
    about: {
        description: `
I'm Benjamin Tannheimer, a full time student from Germany who also loves building cool things using code. <br/><br/>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque placeat est architecto tempora voluptatem sit suscipit aspernatur? <br/><br/>
Facere quibusdam reiciendis, distinctio sunt praesentium error accusantium consectetur nemo vero officia itaque.
    `,
    },
    work: {
        description: `I've worked with a variety of technologies and tools to build cool things. Here are some of the projects I've worked on.`, // Markdown is supported
        items: [
        {
            title: "Software Developer",
            company: {
            name: "Freelance",
            image: "/pfp.png",
            url: "https://github.com/bt18b",
            },
            date: "2021 - Present",
        },
        {
            title: "Software Developer",
            company: {
            name: "Freelance",
            image: "/pfp.png",
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
        title: "Projects | Benjamin Tannheimer",
        description: "Check out what I've been working on.",
        image: identity.logo,
    },
    subtitle: "Check out what I've been working on.",
    projects: [
        {
        title: "Project 1",
        description: "Project 1 Description",
        image: "/demo-2.jpg",
        year: "2024",
        url: "https://github.com/bt18b",
        },
        {
        title: "Project 1",
        description: "Project 1 Description",
        image: "/demo-2.jpg",
        year: "2024",
        url: "https://github.com/bt18b",
        },
        {
        title: "Project 1",
        description: "Project 1 Description",
        image: "/demo-2.jpg",
        year: "2024",
        url: "https://github.com/bt18b",
        },
    ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
    seo: {
        title: "Blog | Benjamin Tannheimer",
        description: "Thoughts, stories and ideas.",
        image: identity.logo,
    },
    subtitle: "Thoughts, stories and ideas.",
};
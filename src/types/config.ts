  export type BaseLink = {
    title: string;
    url: string;
    external?: boolean;
  };

  export type NavBarLink = BaseLink & {};
  
  export type SocialLink = BaseLink & {
    icon: string;
  };
  
  export type Position = BaseLink & {
    position: string;
  }

  export type Identity = {
    name: string;
    logo: string;
    email: string;
    countryCode: string;
    country: string;
  };
  
  export type SEOInfo = {
    title: string;
    description: string;
    image: string;
  };
  
  export type PageContent = {
    title: string;
    subtitle?: string;
  }

  export type BasePage = {
    seo: SEOInfo;
    page: PageContent;
    backlink?: BaseLink;
  }

  export type HomePageContent = BasePage & {
    role: string;
    description: string;
    socialLinks: SocialLink[];
    links: {
      title: string;
      url: string;
      external?: boolean;
    }[];
  };
  
  export type AboutPageContent = BasePage & {
    about: {
      description: string;
    };
    work: {
      description: string;
      items: ResumeItem[];
    };
    connect: {
      description: string;
      links: SocialLink[];
    };
  };
  
  export type Project = {
    title: string;
    description: string;
    image: string;
    year: string;
    url: string;
  };
  
  export type ProjectPageContent = BasePage & {
    projects: Project[];
  };
  
  export type BlogPageContent = BasePage & {};

  export type CreditPageContent = BasePage & {};

  export type ContactPageContent = BasePage & {};

  export type NotFoundPageContent = BasePage & {};

  export type ResumeItem = {
    title: string;
    company: {
      name: string;
      image: string;
      url: string;
    };
    date: string;
  };
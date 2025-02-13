export interface Project {
    title: string;
    category: string;
    description: string;
    image: string;
  }
  
  export interface SocialLink {
    platform: string;
    url: string;
    icon: React.ComponentType;
  }
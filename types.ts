
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  services: string[];
  imageUrl: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  isSpecial?: boolean;
}

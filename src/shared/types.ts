export enum selectedPageNum {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourClasses",
  ContactUs = "contactUs",
}

// benefits
export interface SponsorsProps {
  photo: string;
  name: string;
}

export interface setSelectedPageProps {
  setSelectedPage: (page: selectedPageNum) => void;
}

export interface selectedProps extends setSelectedPageProps {
  selectedPage: selectedPageNum;
}

export interface BenefitProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface classes {
  url: string;
  name: string;
  description?: string;
}

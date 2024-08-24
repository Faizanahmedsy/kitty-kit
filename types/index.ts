export type PostDataType = {
  title: string;
  href: string;
  des?: string;
}[];

export type LandingComponentsDataType = {
  title: string;
  sub?: string;
  tech?: string[];
  link: string;
  github?: string;
  liveDemo?: string;
};

export type BackgroundDataType = {
  title: string;
  link: string;
};

export type MissalinousFeaturedDataType = {
  title: string;
  sub?: string;
  link?: string;
  github?: string;
  liveDemo?: string;
  fav?: boolean;
};

export type HelperDataType = {
  title: string;
  code: string;
  language: string;
  showLineNumbers: boolean;
}[];

export type componentsDataType = {
  title: string;
  sub?: string;
  link?: string;
  github?: string;
  liveDemo?: string;
  fav?: boolean;
}[];

export type UiLibrariesDataType = {
  title: string;
  sub?: string;
  link: string;
  fav?: boolean;
};

interface PageInfo {
  title: string;
}

type Page = 'home' | 'about' | 'contract';

const x: Record<Page, PageInfo> = {
  home: {title: 'home'},
  contract: {title: 'contract'},
  about: {title: 'about'},
};

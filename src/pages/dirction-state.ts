import { Store } from 'pullstate';

export enum Direction {
  ltr = 'ltr',
  rtl = 'rtl',
}
interface dirction {
  dirction: string
}

export const DirctionStore = new Store<dirction>({
  dirction: 'ltr',
});

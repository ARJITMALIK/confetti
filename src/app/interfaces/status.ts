interface StatusInterface {
  poison: StatusProperty;
  burn: StatusProperty;
}

interface StatusProperty {
  symbol: string;
  state: boolean;
}

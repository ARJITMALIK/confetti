interface SenseInterface {
  danger: SensePropertyInterface;
  heal: SensePropertyInterface;
  poison: SensePropertyInterface;
  burn: SensePropertyInterface;
  death: SensePropertyInterface;
}

interface SensePropertyInterface {
  symbol: string;
  color: string;
}

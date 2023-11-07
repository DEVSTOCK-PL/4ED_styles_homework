import stripe from '../assets/stripe_logo.svg';
import spotify from '../assets/spotify_logo.svg';
import tesla from '../assets/tesla.svg';
import twich from '../assets/twich_logo.svg';
import intel from '../assets/intel_logo.svg';
import shell from '../assets/shell.svg';
import netflix from '../assets/netflix.svg';
import nestle from '../assets/nestle.svg';
import fedex from '../assets/fedex_logo.svg';
import disney from '../assets/disney_logo.svg';
import bmw from '../assets/bmw.svg';
import coca_cola from '../assets/coca_cola.svg';

const useArrDataLogosCustomers = () => {
  const arr = [
    [{ logo: stripe }, { logo: spotify }, { logo: tesla }, { logo: twich }],
    [{ logo: intel }, { logo: shell }, { logo: netflix }, { logo: nestle }],
    [{ logo: fedex }, { logo: disney }, { logo: bmw }, { logo: coca_cola }],
  ];

  const arrWithId = arr.map((el) =>
    el.map((item) => {
      return { ...item, id: crypto.randomUUID() };
    }),
  );
  // console.log(arrWithId);
  return arrWithId;
};

export default useArrDataLogosCustomers;

import card_header from '../assets/card_header.svg';

const useArrDataForBlog = () => {
  const arr1WithDataForBlog = [
    {
      id: crypto.randomUUID(),
      image: card_header,
      header: "SEO Basics: Beginner's Guide to SEO Success",
      description:
        'Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.',
      link: '#',
    },
  ];
  const arr2WithDataForBlog = [
    {
      id: crypto.randomUUID(),
      image: '',
      header: 'How to quickly deploy a static website',
      description:
        'Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.',
      link: '#',
    },
    {
      id: crypto.randomUUID(),
      image: '',
      header: 'What is SEO? Search Engine Optimization Explained',
      description:
        'Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even.',
      link: '#',
    },
    {
      id: crypto.randomUUID(),
      image: '',
      header: "Spotify's Car Thing available to all premium users",
      description:
        "Starting Tuesday any Spotify Premium user can buy the streaming service's first piece of hardware.",
      link: '#',
    },
  ];
  const arr3WithDataForBlog = [
    {
      id: crypto.randomUUID(),
      image: '',
      header: 'How to Rank Higher on Google (6 Easy Steps)',
      description:
        'Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.',
      link: '#',
    },
    {
      id: crypto.randomUUID(),
      image: '',
      header: '12 SEO Best Practices That Everyone Should Follow',
      description:
        'Static websites are now used to bootstrap lots of websites and are becoming the basis.',
      link: '#',
    },
    {
      id: crypto.randomUUID(),
      image: '',
      header: 'How to schedule your Tweets to send later',
      description:
        'Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even.',
      link: '#',
    },
  ];

  return { arr1WithDataForBlog, arr2WithDataForBlog, arr3WithDataForBlog };
};

export default useArrDataForBlog;

// Grupo Pravisani
import CoverGrupopravisani from 'assets/images/projects/grupopravisani/cover.jpg'
import GrupoElement1 from 'assets/images/projects/grupopravisani/element-1.jpg'
import GrupoElement2 from 'assets/images/projects/grupopravisani/element-2.jpg'

// Busco Esto
import CoverBuscoEsto from 'assets/images/projects/buscoesto/cover.jpg'
import BuscoElement1 from 'assets/images/projects/buscoesto/element-1.jpg'
import BuscoElement2 from 'assets/images/projects/buscoesto/element-2.jpg'

// Cask Games
import CoverCaskGames from 'assets/images/projects/caskGames/cover.jpg'
import CaskElement1 from 'assets/images/projects/caskGames/element-1.jpg'
import CaskElement2 from 'assets/images/projects/caskGames/element-2.jpg'

// Nalla
import CoverNalla from 'assets/images/projects/nalla/cover.jpg'
import NallaElement1 from 'assets/images/projects/nalla/element-1.jpg'
import NallaElement2 from 'assets/images/projects/nalla/element-2.jpg'
import NallaElement3 from 'assets/images/projects/nalla/element-3.jpg'

export default [
  {
    name: 'Nalla',
    slug: 'nalla',
    type: 'Mobile App & Machine Learning',
    cover: CoverNalla,
    elements: [
      {
        image: NallaElement1,
        description:
          'Nalla is a mobile app targeted for South Korea. With Nalla you are able to reserve bikes in a smart way.  Our client asked to make major changes in the mobile app and deploy it in both stores, AppStore and Play Store.',
      },
      {
        image: NallaElement2,
        description:
          'One of the biggest changes we made was in their Dashboard application built in ReactJS and Django. We created a complete region search and filtering so the client can target bikes stations accordingly. We also included a statistics module, so the client can check the status of the App.',
      },
      {
        image: NallaElement3,
        description:
          'We built from scratch a Machine Learning prediction using Tensorflow. The prediction module informs to the user how many bikes slots will be available in the following minutes / hours.',
      },
    ],
  },
  {
    name: 'BuscoEsto',
    slug: 'busco-esto',
    type: 'Ecommerce Website',
    cover: CoverBuscoEsto,
    website: 'https://buscoesto.com/',
    elements: [
      {
        image: BuscoElement1,
        description:
          'BuscoEsto is an e-commerce rethought from a Customer’s perspective. This project has been made to be a leader e-commerce in South America region primarily. With the latest technologies and a fresh design BuscoEsto brings the best experience not only to customer, but also to Sellers who focus on making offers as fast as possible.',
      },
      {
        image: BuscoElement2,
        description: 'This project has been designed and developed responsively by Sanacompany.',
      },
    ],
  },
  {
    name: 'Grupo Pravisani',
    slug: 'grupo-pravisani',
    type: 'Website',
    cover: CoverGrupopravisani,
    website: 'https://www.grupopravisani.com',
    elements: [
      {
        image: GrupoElement1,
        description:
          'This project is part of a series of brand changes for an Assurance company. We redesigned the entire company image from its logo to their new website. The complete redesign project included changes from backend to frontend. Our designer provided all illustrations drawn by herself.',
      },
      { image: GrupoElement2 },
    ],
  },
  {
    name: 'Cask Games Portfolio',
    slug: 'cask-games',
    type: 'Website / Frontend',
    cover: CoverCaskGames,
    website: 'https://caskgames.com/',
    elements: [
      {
        image: CaskElement1,
        description:
          'Cask games is a portfolio website for a famous Game Designer. Our skillful designer made all the different screens. The client asked us to use a special platform to deploy our designs: Squarespace. We created a personal template allowing him to add new elements to his portfolio through the platform.',
      },
      {
        image: CaskElement2,
        description: '',
      },
    ],
  },
]

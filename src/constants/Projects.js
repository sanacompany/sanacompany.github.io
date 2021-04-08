// Grupo Pravisani
import CoverGrupopravisani from 'assets/images/projects/grupopravisani/cover.png'
import GrupoElement1 from 'assets/images/projects/grupopravisani/element-1.png'
import GrupoElement2 from 'assets/images/projects/grupopravisani/element-2.png'

// Busco Esto
import CoverBuscoEsto from 'assets/images/projects/buscoesto/cover.png'
import BuscoElement1 from 'assets/images/projects/buscoesto/element-1.png'
import BuscoElement2 from 'assets/images/projects/buscoesto/element-2.png'

// Acics
import CoverAsics from 'assets/images/projects/asics/cover.png'
import AsicsElement1 from 'assets/images/projects/asics/element-1.png'

// Cask Games
import CoverCaskGames from 'assets/images/projects/caskGames/cover.png'
import CaskElement1 from 'assets/images/projects/caskGames/element-1.png'
import CaskElement2 from 'assets/images/projects/caskGames/element-2.png'

export default [
  {
    name: 'Grupo Pravisani',
    slug: 'grupo-pravisani',
    type: 'Website',
    cover: CoverGrupopravisani,
    color: '#EEF2F4',
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
    name: 'BuscoEsto',
    slug: 'busco-esto',
    type: 'Ecommerce Website',
    cover: CoverBuscoEsto,
    color: '#E0ECFE',
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
    name: 'Asics / Ohzi',
    slug: 'asics-ohzi',
    type: 'Backend & API',
    cover: CoverAsics,
    color: '#F0F0F8',
    website: null,
    elements: [
      {
        image: AsicsElement1,
        description:
          'This is a collaboration project we worked alongside our last long partner: Ohzi. Specifically, for this project we had to write a Backend solution (Ruby on Rails) for generating reports taking information from several tests performed on athletes.',
      },
      {
        image: AsicsElement1,
        description: 'Another taks involved to develop some screens in their Electron App.',
      },
    ],
  },
  {
    name: 'Cask Games Portfolio',
    slug: 'cask-games',
    type: 'Website / Frontend',
    cover: CoverCaskGames,
    color: '#E5F3FE',
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

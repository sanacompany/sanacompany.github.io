import CoverBuscoEsto from 'assets/images/projects/buscoesto/cover.png'
import CoverAsics from 'assets/images/projects/asics/cover.png'
import CoverCaskGames from 'assets/images/projects/caskGames/cover.png'
import CoverGrupopravisani from 'assets/images/projects/grupopravisani/cover.png'

export default [
  {
    name: 'Grupo Pravisani',
    slug: 'grupo-pravisani',
    type: 'Website',
    cover: CoverGrupopravisani,
    color: '#EEF2F4',
    website: 'http://www.grupopravisani.com',
    elements: [
      {
        image: CoverGrupopravisani,
        description:
          'This project is part of a series of brand changes for an Assurance company. We redesigned the entire company image from its logo to their new website. The complete redesign project included changes from backend to frontend. Our designer provided all illustrations drawn by herself.',
      },
    ],
  },
  {
    name: 'BuscoEsto',
    slug: 'busco-esto',
    type: 'Ecommerce Website',
    cover: CoverBuscoEsto,
    color: '#E0ECFE',
    website: 'http://buscoesto.com/',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis purus mollis, dignissim neque ac, vestibulum velit. Sed pellentesque velit sit amet nulla feugiat maximus. Nulla nec ligula tempus, venenatis quam sit amet, pulvinar lacus. Aliquam nec consequat eros. In volutpat sagittis magna, et efficitur erat eleifend eget. Mauris vel suscipit quam. Duis fermentum sagittis libero in eleifend. Suspendisse scelerisque, purus at consequat tempor, neque ligula finibus magna, eget laoreet mi lectus a tellus.',
  },
  {
    name: 'Asics / Ohzi',
    slug: 'asics-ohzi',
    type: 'Backend & API',
    cover: CoverAsics,
    color: '#F0F0F8',
    website: null,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis purus mollis, dignissim neque ac, vestibulum velit. Sed pellentesque velit sit amet nulla feugiat maximus. Nulla nec ligula tempus, venenatis quam sit amet, pulvinar lacus. Aliquam nec consequat eros. In volutpat sagittis magna, et efficitur erat eleifend eget. Mauris vel suscipit quam. Duis fermentum sagittis libero in eleifend. Suspendisse scelerisque, purus at consequat tempor, neque ligula finibus magna, eget laoreet mi lectus a tellus.',
  },
  {
    name: 'Cask Games Portfolio',
    slug: 'cask-games',
    type: 'Website',
    cover: CoverCaskGames,
    color: '#E5F3FE',
    website: null,
    description:
      'Cask games is a portfolio website for a famous Game Designer. I have to design all the different screens. The client asked me to use a special platform to deploy my designs: Squarespace. I created a personal template allowing him to add new elements to his portfolio through the platform.',
  },
]

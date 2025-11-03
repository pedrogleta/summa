import { TaxonomyNode } from '../types/taxonomy';

export const taxonomyData: TaxonomyNode[] = [
  {
    title: 'Generic programmes and qualifications',
    children: [
      { title: 'Basic programmes and qualifications' },
      { title: 'Literacy and numeracy' },
      { title: 'Professional skills and development' },
    ],
  },
  {
    title: 'Education',
    children: [
      { title: 'Education science' },
      { title: 'Training for pre-school teachers' },
      { title: 'Teacher training without subject specialization' },
      { title: 'Teacher training with subject specialization' },
    ],
  },
  {
    title: 'Arts and humanities',
    children: [
      {
        title: 'Arts',
        children: [
          { title: 'Audio-visual techniques and media production' },
          { title: 'Fashion, interior and industrial design' },
          { title: 'Fine arts' },
          { title: 'Handicrafts' },
          { title: 'Music and performing arts' },
        ],
      },
      {
        title: 'Humanities (except languages)',
        children: [
          { title: 'Religion and theology' },
          { title: 'History and archaeology' },
          { title: 'Philosophy and ethics' },
        ],
      },
      {
        title: 'Languages',
        children: [
          { title: 'Language acquisition' },
          { title: 'Literature and linguistics' },
        ],
      },
    ],
  },
  {
    title: 'Social sciences, journalism and information',
    children: [
      {
        title: 'Social and behavioural sciences',
        children: [
          { title: 'Economics' },
          { title: 'Political sciences and civics' },
          { title: 'Psychology' },
          { title: 'Sociology and cultural studies' },
        ],
      },
      {
        title: 'Journalism and information',
        children: [
          { title: 'Journalism and reporting' },
          { title: 'Library, information and archival studies' },
        ],
      },
    ],
  },
  {
    title: 'Business, administration and law',
    children: [
      {
        title: 'Business and administration',
        children: [
          { title: 'Accounting and taxation' },
          { title: 'Finance, banking and insurance' },
          { title: 'Management and administration' },
          { title: 'Marketing and advertising' },
          { title: 'Secretarial and office work' },
          { title: 'Wholesale and retail sales' },
          { title: 'Work skills' },
        ],
      },
      { title: 'Law' },
    ],
  },
  {
    title: 'Natural sciences, mathematics and statistics',
    children: [
      {
        title: 'Biological and related sciences',
        children: [{ title: 'Biology' }, { title: 'Biochemistry' }],
      },
      {
        title: 'Environment',
        children: [
          { title: 'Environmental sciences' },
          { title: 'Natural environments and wildlife' },
        ],
      },
      {
        title: 'Physical sciences',
        children: [
          { title: 'Chemistry' },
          { title: 'Earth sciences' },
          { title: 'Physics' },
        ],
      },
      {
        title: 'Mathematics and statistics',
        children: [{ title: 'Mathematics' }, { title: 'Statistics' }],
      },
    ],
  },
  {
    title: 'Information and Communication Technologies (ICTs)',
    children: [
      { title: 'Computer use' },
      { title: 'Database and network design and administration' },
      { title: 'Software and applications development and analysis' },
    ],
  },
  {
    title: 'Engineering, manufacturing and construction',
    children: [
      {
        title: 'Engineering and engineering trades',
        children: [
          { title: 'Chemical engineering and processes' },
          { title: 'Environmental protection technology' },
          { title: 'Electricity and energy' },
          { title: 'Electronics and automation' },
          { title: 'Mechanics and metal trades' },
          { title: 'Motor vehicles, ships and aircraft' },
        ],
      },
      {
        title: 'Manufacturing and processing',
        children: [
          { title: 'Food processing' },
          { title: 'Materials (glass, paper, plastic and wood)' },
          { title: 'Textiles (clothes, footwear and leather)' },
          { title: 'Mining and extraction' },
        ],
      },
      {
        title: 'Architecture and construction',
        children: [
          { title: 'Architecture and town planning' },
          { title: 'Building and civil engineering' },
        ],
      },
    ],
  },
  {
    title: 'Agriculture, forestry, fisheries and veterinary',
    children: [
      {
        title: 'Agriculture',
        children: [
          { title: 'Crop and livestock production' },
          { title: 'Horticulture' },
        ],
      },
      { title: 'Forestry' },
      { title: 'Fisheries' },
      { title: 'Veterinary' },
    ],
  },
  {
    title: 'Health and welfare',
    children: [
      {
        title: 'Health',
        children: [
          { title: 'Dental studies' },
          { title: 'Medicine' },
          { title: 'Nursing and midwifery' },
          { title: 'Medical diagnostic and treatment technology' },
          { title: 'Therapy and rehabilitation' },
          { title: 'Pharmacy' },
          { title: 'Traditional and complementary medicine and therapy' },
        ],
      },
      {
        title: 'Welfare',
        children: [
          { title: 'Care of the elderly and of disabled adults' },
          { title: 'Child care and youth services' },
          { title: 'Social work and counselling' },
        ],
      },
    ],
  },
  {
    title: 'Services',
    children: [
      {
        title: 'Personal services',
        children: [
          { title: 'Domestic services' },
          { title: 'Hair and beauty services' },
          { title: 'Hotel, restaurants and catering' },
          { title: 'Sports' },
          { title: 'Travel, tourism and leisure' },
        ],
      },
      {
        title: 'Hygiene and occupational health services',
        children: [
          { title: 'Community sanitation' },
          { title: 'Occupational health and safety' },
        ],
      },
      {
        title: 'Security services',
        children: [
          { title: 'Military and defence' },
          { title: 'Protection of persons and property' },
        ],
      },
      { title: 'Transport services' },
    ],
  },
];

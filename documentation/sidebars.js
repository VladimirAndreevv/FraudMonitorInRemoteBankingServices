// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    'intro',
    'requirements',

    {
      type: 'category',
      label: 'Aрхитектура',
      items: [
        'architecture/arch',
        'architecture/technologyStack',
        'architecture/C4',
      ],
    },

    {
      type: 'category',
      label: 'API',
      items: [
        'api/API',
        'api/AsyncAPI',
      ],
    },
    
    {
      type: 'category',
      label: 'modelBD',
      items: [
        'model/model',
        ],
    },
    {
      type: 'category',
      label: 'Use-case и BPMN',
      items: [
        'use-cases/use-cases',
        ],
    },
    {
      type: 'category',
      label: 'UI',
      items: [
        'ui/ui',
        ],
    },
  ],
};

export default sidebars;
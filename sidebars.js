/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mySidebar: [
    {
      type: 'doc',
      label: 'Introduction',
      id: 'introduction',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        {
          type: 'doc',
          id: 'getting-started/requirements',
        },
        {
          type: 'doc',
          id: 'getting-started/installation',
        },
        {
          type: 'doc',
          id: 'getting-started/convars',
        },
        {
          type: 'doc',
          id: 'getting-started/resources',
        },
      ],
    },
    {
      type: 'category',
      label: 'Documentation',
      items: [
        {
          type: 'category',
          label: 'General',
          items: [
            {
              type: 'doc',
              id: 'component',
            },
            {
              type: 'doc',
              id: 'exports',
            },
          ]
        },
        // Core Components
        {
          type: 'category',
          label: 'Core Components',
          items: [
            'documentation/core/proxy', 
            'documentation/core/database', 
            'documentation/core/callbacks', 
            'documentation/core/core', 
            'documentation/core/player', 
            'documentation/core/fetch', 
            'documentation/core/spawn'
          ],
        },
        // External Components
        {
          type: 'category',
          label: 'External Components',
          items: [
            {
              type: 'category',
              label: 'Character',
              items: [
                'documentation/external/character/character-component',
                {
                  type: 'category',
                  label: 'Overrides',
                  items: ['documentation/external/character/overrides/character-spawn'],
                },
                {
                  type: 'category',
                  label: 'Extended Components',
                  items: ['documentation/external/character/extensions/character-fetch'],
                },
              ],
            },
            {
              type: 'category',
              label: 'Notifications',
              items: ['documentation/external/notifications/notifications-component'],
            },
            {
              type: 'category',
              label: 'Queue',
              items: ['documentation/external/queue/queue-component'],
            },
            {
              type: 'category',
              label: 'Markers',
              items: ['documentation/external/markers/markers-component'],
            },
            {
              type: 'category',
              label: 'Chat',
              items: ['documentation/external/chat/chat-component'],
            },
            {
              type: 'category',
              label: 'UI',
              items: ['documentation/external/ui/user-interface'],
            }
          ],
        },
        // Base Components
        {
          type: 'category',
          label: 'Base Components',
          items: [
            'documentation/base/cron',
            'documentation/base/discord',
            'documentation/base/logger',
            'documentation/base/scaleform',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Contributing',
      items: [
        {
          type: 'doc',
          id: 'contributing/coc',
        },
        {
          type: 'doc',
          id: 'contributing/info',
        },
      ],
    },
  ],
};

module.exports = sidebars;
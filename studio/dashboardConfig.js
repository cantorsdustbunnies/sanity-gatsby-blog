export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5db9d305615f169bcc04adde',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-zvjovhze',
                  apiId: 'dc12c126-8eba-47e3-9758-4a0ad3fb8e7b'
                },
                {
                  buildHookId: '5db9d305615f16afb704adcf',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-iwpephcc',
                  apiId: 'ce74a671-4c78-40d5-983b-6fc8818d488b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cantorsdustbunnies/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-iwpephcc.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

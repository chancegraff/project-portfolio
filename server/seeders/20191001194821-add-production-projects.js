'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Projects', [
      {
        name: 'Github Repository Search',
        slug: 'github-repo-search',
        herokuUrl: 'https://cg-github-search.herokuapp.com/',
        description: 'I created this application in around four hours as part of the interview process for a company I had applied to. I\'m pretty happy with the design and the utility of it. Built using ReactJS and GraphQL.',
        shortDescription: 'A project created using ReactJS and GraphQL that allows you to search for GitHub repositories by name.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Projects', null, {});
  }
};

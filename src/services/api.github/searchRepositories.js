const {
  VUE_APP_GITHUB_API_ENDPOINT,
  VUE_APP_GITHUB_PERSONAL_ACCESS_TOKEN,
} = process.env;

function createQuery({ q, first = 10 }) {
  const query = `
query searchRepositories($q: String!, $first: Int!) {
  search(query: $q, type: REPOSITORY, first: $first) {
    edges {
      node {
        ... on Repository {
          id
          url
          name
          nameWithOwner
          description
          homepageUrl
          licenseInfo {
            name
          }
          stargazers {
            totalCount
          }
        }
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
    repositoryCount
  }
}
  `;

  return Object.assign({}, { query }, { variables: { q, first } });
}

async function searchRepositories(q) {
  const response = await fetch(VUE_APP_GITHUB_API_ENDPOINT, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${VUE_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
    },
    body: JSON.stringify(createQuery({ q })),
  });

  return response.json();
}

export default searchRepositories;

import searchRepositories from './searchRepositories';

function mockFetch(data) {
  return jest.fn().mockImplementation(() => Promise.resolve({
    ok: true,
    json: () => data,
  }));
}

global.fetch = mockFetch({});

describe('searchRepositories', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('calls fetch', async () => {
    expect.assertions(2);

    await searchRepositories('test');

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toMatchSnapshot();
  });
});

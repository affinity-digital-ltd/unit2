import Article from '../../components/Article'

describe('<Article />', () => {
  test('it renders correctly', () => {
    const post = {
      id: '1',
      title: 'This is my article',
      intro: 'This is the intro text to my article',
      body: 'This is the **body** of my article, which includes markdown',
      created_at: new Date(Date.UTC(96, 1, 2, 3, 4, 5)),
      comments: [{
        id: '1',
        name: 'Dave Smith',
        body: 'This is the **body** of my comment, which includes markdown',
        created_at: new Date(Date.UTC(97, 1, 2, 3, 4, 5))
      }]
    }

    const component = shallow(
      <Article post={post} />
    )

    expect(component).toMatchSnapshot()
  })
})

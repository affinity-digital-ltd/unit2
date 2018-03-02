import PostCard from '../../components/PostCard'

describe('<PostCard />', () => {
  test('it renders correctly', () => {
    const post = {
      id: '1',
      title: 'This is my article',
      intro: 'This is the intro text to my article',
      created_at: new Date(Date.UTC(96, 1, 2, 3, 4, 5))
    }
    const component = shallow(
      <PostCard post={post} />
    )

    expect(component).toMatchSnapshot()
  })
})

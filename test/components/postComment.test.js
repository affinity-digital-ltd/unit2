import PostComment from '../../components/PostComment'
jest.mock('../../lib/Auth')

describe('<PostComment />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <PostComment />
    )

    expect(component).toMatchSnapshot()
  })
})

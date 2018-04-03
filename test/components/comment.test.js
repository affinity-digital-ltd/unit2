import Comment from '../../components/Comment'
jest.mock('../../lib/Auth')

describe('<Comment />', () => {
  it('it renders correctly', () => {
    const comment = {
      id: '1',
      name: 'Dave Smith',
      body: 'This is the **body** of my comment, which includes markdown',
      created_at: new Date(Date.UTC(97, 1, 2, 3, 4, 5))
    }

    const component = shallow(
      <Comment comment={comment} />
    )

    expect(component).toMatchSnapshot()
  })
})

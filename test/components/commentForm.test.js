import CommentForm from '../../components/CommentForm'

describe('<CommentForm />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <CommentForm />
    )

    expect(component).toMatchSnapshot()
  })
})

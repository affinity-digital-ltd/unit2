import Header from '../../components/Header'

describe('<Header />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <Header />
    )

    expect(component).toMatchSnapshot()
  })
})

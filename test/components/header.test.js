import Header from '../../components/Header'

describe('<Header />', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <Header />
    )

    expect(component).toMatchSnapshot()
  })
})

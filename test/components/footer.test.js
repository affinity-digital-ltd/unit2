import Footer from '../../components/Footer'

describe('<Footer />', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <Footer />
    )

    expect(component).toMatchSnapshot()
  })
})

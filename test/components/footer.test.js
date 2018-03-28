import Footer from '../../components/Footer'

describe('<Footer />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <Footer />
    )

    expect(component).toMatchSnapshot()
  })
})

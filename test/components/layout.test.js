import Layout from '../../components/Layout'

describe('<Layout />', () => {
  it('it renders correctly', () => {
    const url = {
      pathname: '/'
    }
    
    const component = shallow(
      <Layout url={url}/>
    )

    expect(component).toMatchSnapshot()
  })
})

import Header from '../../components/Header'

describe('<Header /> ', () => {
  it('it renders correctly', () => {
    const props = {
      signupStatus: {}
    }

    const component = shallow(
      <Header {...props} />
    )

    expect(component).toMatchSnapshot()
  })
})

describe('<Header /> with a successful signup', () => {
  it('it renders correctly', () => {
    const props = {
      signupStatus: {
        id: 1
      }
    }

    const component = shallow(
      <Header {...props} />
    )

    expect(component).toMatchSnapshot()
  })
})

describe('<Header /> with a failing signup', () => {
  it('it renders correctly', () => {
    const props = {
      signupStatus: {
        email: ['cant be blank']
      }
    }

    const component = shallow(
      <Header {...props} />
    )

    expect(component).toMatchSnapshot()
  })
})


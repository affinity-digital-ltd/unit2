import SubscriptionForm from '../../components/SubscriptionForm'

describe('<SubscriptionForm />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <SubscriptionForm />
    )

    expect(component).toMatchSnapshot()
  })
})

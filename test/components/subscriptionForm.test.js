import SubscriptionForm from '../../components/SubscriptionForm'

describe('<SubscriptionForm />', () => {
  test('it renders correctly', () => {
    const component = shallow(
      <SubscriptionForm />
    )

    expect(component).toMatchSnapshot()
  })
})

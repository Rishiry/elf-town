import {loadStripe} from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement
} from '@stripe/react-stripe-js';
import {Box, Center} from '@chakra-ui/react';
import {useMemo} from 'react';

const useOptions = () => {

    const options = useMemo(() => ( {
        style: {
            base: {
                color: '#32325d',
                lineHeight: '50px',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '20px',
                '::placeholder': {
                  color: '#aab7c4'
                }
              },
              invalid: {
                color: '#fa755a',
                iconColor: '#fa755a'
              }
        },
      }));

    return options;
};

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();

    const handleSubmit = async(event) => {
        event.preventDefault();

        if (elements == null) {
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Card number
                </label>

                <Center bg={'red'}
                rounded={"20px"}
                borderColor="gray.200"
                h={"60px"}
                >
                <Box h="20px" w="100%">
                    <CardNumberElement
                        options={options}
                        onReady={() => {
                        console.log("CardNumberElement [ready]");
                    }}
                        onChange={event => {
                        console.log("CardNumberElement [change]", event);
                    }}
                        onBlur={() => {
                        console.log("CardNumberElement [blur]");
                    }}
                        onFocus={() => {
                        console.log("CardNumberElement [focus]");
                    }}/>
                </Box>
                </Center>
            <label>
                Expiration date
                <CardExpiryElement
                    options={options}
                    onReady={() => {
                    console.log("CardNumberElement [ready]");
                }}
                    onChange={event => {
                    console.log("CardNumberElement [change]", event);
                }}
                    onBlur={() => {
                    console.log("CardNumberElement [blur]");
                }}
                    onFocus={() => {
                    console.log("CardNumberElement [focus]");
                }}/>
            </label>
            <label>
                CVC
                <CardCvcElement
                    options={options}
                    onReady={() => {
                    console.log("CardNumberElement [ready]");
                }}
                    onChange={event => {
                    console.log("CardNumberElement [change]", event);
                }}
                    onBlur={() => {
                    console.log("CardNumberElement [blur]");
                }}
                    onFocus={() => {
                    console.log("CardNumberElement [focus]");
                }}/>
            </label>
            <button type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};

export default function Checkout() {
    const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

    return (
        <Box w="100%">
            <Elements stripe={stripePromise}>
                <CheckoutForm/>
            </Elements>

        </Box>
    )
}

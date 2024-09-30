
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SectionHead from '../../Pages/Shared/SectionHeading/SectionHead';
import CheckPayment from './CheckPayment';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {

    //1st step payment er jonnno
    return (
        <div>
            <SectionHead sectionPar="---দ্রুত যান---" sectionhead="আইটেম পরিচালনা করুন" />

            <Elements stripe={stripePromise}>
                <CheckPayment></CheckPayment>
            </Elements>
        </div>
    );
};

export default Payment;
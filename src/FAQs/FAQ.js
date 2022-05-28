import react from 'react';
import Accordion from '../Accordian/AccordionApp'

const FAQ = () => {
    return (
        <div className="main">
        <h1 className="faq_heading">FAQ</h1>
        <div className="accordion">
            <Accordion
            title="Does one need to register or login for using the website?"
            text="Absolutely not!! Anyone can use it at anytime"
            />
            <Accordion
            title="Can we view only PDS questions here?"
            text="Yes. Till now we support only PDS but in future we plan to expand our domains into other subjects"
            />
            <Accordion
            title="How to post doubts?"
            text="Feel free to contact us in the contact page"
            />
            <Accordion
            title="Do we get PDS lab as well as theory questions here?"
            text="Yeah. Absolutely!! This website will be a one-stop solution for all PDS related issues"
            />
        </div>
        </div>
    );
}
 
export default FAQ;
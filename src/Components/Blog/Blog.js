import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='container p-5 pb-5'>
                <div className='col-md'>
                    <h3>How will you improve the performance of a React Application ?
                    </h3>
                    <p><strong>React</strong>uses several clever techniques to minimize the number of costly DOM operations required to update the UI. For many applications, using React will lead to a fast user interface without doing much work to specifically optimize for performance. Nevertheless, there are several ways you can speed up your React application.</p><br />
                </div>
                <div className='col-md'>
                    <h3>What are the different ways to manage a state in a React application ?</h3>
                    <p><strong> React</strong>makes use of an observable item because the nation that observes what modifications are made to the kingdom and allows the factor behave as a result. For example, if we replace the kingdom of any element just like the following the web site will no longer re-render itself due to the fact React State will not be able to discover the modifications made.Props are used to skip facts from one component to another. The state is a local statistics garage this is nearby to the component handiest and cannot be exceeded to different components.
                    </p>
                    <br />
                </div>
                <div className='col-md'>
                    <h3>How does prototypical inheritance work ?</h3>
                    <p><strong> React</strong>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the <strong>Prototype</strong> of an object, we use Object. getPrototypeOf and Object.
                    </p>
                    <br />
                </div>
                <div className='col-md'>
                    <h3>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts ?</h3>
                    <p>When you without delay update the nation, it does now not change this. Nation right now. Instead, it creates a pending country transition, and getting access to it after calling this approach will simplest go back the present price. You will lose manage of the nation across all additives.UseState is without a doubt a nation updating characteristic. Const is used here because the alternate of price is being controlled some other place through React. You're telling React to manage a few cost for you by using calling useState.
                    </p>
                    <br />
                </div>
                <div className='col-md'>
                    <h3>What is a unit test? Why should write unit tests ?</h3>
                    <p>Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. A unit can be anything you want it to be — a line of code, a method, or a class.The more effort I put into testing the product conceptually at the start of the process, the less effort I had to put into manually testing the product at the end because fewer bugs would emerge as a result.
                    </p>
                    <br />
                </div>
            </div>
        </div>
    );
};

export default Blog;
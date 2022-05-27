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
                    <h3>What is a unit test? Why should write unit tests ?</h3>
                    <p>Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. A unit can be anything you want it to be — a line of code, a method, or a class.The more effort I put into testing the product conceptually at the start of the process, the less effort I had to put into manually testing the product at the end because fewer bugs would emerge as a result.
                    </p>
                    <br />
                </div>
                <div className='col-md'>
                    <h3>What is the purpose of jwt and how does it work?</h3>
                    <p> A <strong>JWT</strong> is a mechanism to verify the owner of some JSON data. It’s an encoded, URL-safe string that can contain an unlimited amount of data (unlike a cookie) and is cryptographically signed.<br />
                        Using JWTs for session tokens might seem like a good idea at first because: <br/> 
                        1. You can store any kind of user details on the client<br/>
                        2. The server can trust the client because the JWT is signed, and there is no need to call the database to retrieve the information you already stored in the JWT.<br/>
                        3. You don’t need to coordinate sessions in a centralized database when you get to the eventual problem of horizontal scaling <br/>
                        Ultimately, if you already have a database for your application, just use a sessions table and use regular sessions as provided by the server-side framework of choice
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
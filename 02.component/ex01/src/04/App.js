import React from 'react';
import MyComponent from './MyComponent';
 
export default function() {

    const JSON = {
        no:1, 
        name:'창목', 
        email:'hong1071@nate.com'
    }


    return (
        <div id='App'>
            <MyComponent 
               /* props01={ '문자열' }  */                                  // String
               props02={ 100 }                                              // int
               props03={ true }                                             // boolean
               props04={ {no:1} }                                           // Object
               props05={ [1, 2, 3, 4] }                                     // Array
               props06={ () => '함수' }                                     // function
               props07={ '200' }                                            // String
               props08={ [false, true, true] }                                                                                          // Array
               props09={{no:1,  name:'창목',  email:'hong1071@nate.com'}}     // JSON
               />
        </div>
    )
}
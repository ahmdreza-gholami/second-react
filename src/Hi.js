// // 1
// import React , {Component} from "react";
// // we use Component for render() in class.

// class Hi extends Component {
//     render() {
//         return(
//             <div>
//                 <p>it's Hi from Hi.js</p>
//             </div>
//         )
//     }
// };

// export default Hi;

// 2
import React  from "react";


function Hi() {
// const Hi = => {  Arrow function
    return (
        <div>
            <p>it's Hi from Hi.js</p>
        </div>
    )
};
// you give an Error that related to define Component

export default Hi;

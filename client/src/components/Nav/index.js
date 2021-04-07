import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Modal extends Component {
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 550,
      outDuration: 750,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);
  }

  render() {
    return (
      <div> 
        <a>
          {/* // className="waves-effect waves-light btn modal-trigger"
          // data-target="modal1" */}
          <img className="modal-trigger" src="https://i.imgur.com/6r8BVdf.png"  data-target="modal1" width={window.innerWidth / 4}/>
        </a>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal bottom-sheet"
        >
          <div className="modal-content">
            <h4>Welcome User</h4>
            <p>This is Best Basketball App ever .  yea Period I said it.  If you dont believe us we will send Nick over to deliver an attitude adjustment.</p>
          </div>
          <div className="modal-footer background-color: black" >
            <a className="modal-close waves-effect waves-black btn-flat">
              End Session
            </a>
            <a className="modal-close waves-effect waves-purple btn-flat">
              Start Session
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;

// import M from 'materialize-css';

// const Nav = () => {
//     const modalRef = useRef(null)
    
//     const modalFunction = function() {
//         let elems = modalRef
//         let instances = M.Modal.getInstance(elems, {})
//     }
  
//       useEffect(() => {
//         document.addEventListener('DOMContentLoaded', modalFunction);
//          return () => {
//              document.removeEventListener('DOMContentLoaded', modalFunction)
//          }
//       })
// 	// const [listOpen, setListOpen] = react.useState(false);

// 	// const myCallback = (listOpen) => {
// 	// 	setListOpen(listOpen);
// 	// };

// 	return (
//         <nav>
        
//   <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

//   <div ref={modalRef} id="modal1" class="modal bottom-sheet">
//     <div class="modal-content">
//       <h4>Modal Header</h4>
//       <p>A bunch of text</p>
//     </div>
//     <div class="modal-footer">
//       <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
//     </div>
//   </div>
//         </nav>
// 		// <Grid container className="navbar">
// 		// 	<Grid item xs={12} sm={12} md={4} lg={4}>
// 		// 		<h1>MyLitics</h1>
// 		// 	</Grid>
// 		// 	<Grid item xs={12} sm={12} md={8} lg={8}></Grid>
// 		// 	<ul>
// 		// 		<li onClick={() => setListOpen(!listOpen)}><img className="logo" src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" /></li>
// 		// 		<li onClick={() => setListOpen(false)}>
// 		// 			<Link to="/practice"> Start Practice</Link>
// 		// 		</li>
// 		// 		<li onClick={() => setListOpen(false)}>
// 		// 			<Link to="/signin">Sign In</Link>
// 		// 		</li>
// 		// 	</ul>
// 		// 	<div className="dropdown">{listOpen ? <Dropdown callbackFromParent={myCallback} /> : null}</div>
// 		// </Grid>
// 	);
// }



// export default Nav;
import React from "react";


function Footer() {
   return (
    <div className="text-center">
    <footer>
        <p>
        &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
    </footer>
    </div>
   )
};


export default Footer;
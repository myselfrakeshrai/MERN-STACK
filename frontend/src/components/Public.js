import { Link } from "react-router-dom";

import React from "react";

export const Public = () => {
  const content = (
    <section className="Public">
      <header>
        <h1>
          Welcome to <span className="nowrap">Mern Stack</span>
        </h1>
      </header>
    <main className="public__main">
        <p>Hellor there this a test content of the public__main to show there this is the content to picture the text 
        in the main good for the people of the world and have it any ways just a way it's just a text.</p>
        <address className="Public_addr">
            Mern Stack<br/>
            Meghalaya<br/>
            India <br/>
            Shillong ,98231<br/>
            <a href="tel:+98101231">9812314334</a>
        </address>
        <br/>
        <p>By Rakesh Rai</p>
    </main>
    <footer>    
        <Link to="/login">Employee Login</Link>
    </footer>
    </section>
  );
  return content;
};
export default Public
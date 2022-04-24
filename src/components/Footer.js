import './Footer.css';
import React from 'react';
function Footer() {
  let fecha=new Date().getFullYear();
  return (
          <footer>
            <div>
              <p><a href='https://github.com/devjsv/ahorcado'>Repositorio de github</a> </p>
            </div>
            <p>Autor: Gasgamdev {fecha}</p>
            <div className="repositorio">
                    <div>
                      <a rel="noreferrer" href="https://github.com/gasgam" target="_blank" >
                        <i className="fab fa-github"></i>
                      </a>
                    </div>
            </div>
          </footer>
  );
}
export default Footer;

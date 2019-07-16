import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Terminal from '../components/terminal'
import terminalInput from '../components/terminal-input';
import CGen from '../assets/images/CGen.png'
import FaceFind from '../assets/images/FaceFind.png'
import websitePhoto from '../assets/images/websitePhoto.png'
import sideImage from '../assets/images/sidePic.png'


class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Malcolm Williams"
                >
                </Helmet>

                <div className="grid-wrapper">
                    
                    <div className="col-3">
                        <div class="stars">
                        <div class="twinkling">
                            <center>
                            <h1 class="hero-title">Malcolm Williams</h1>
                            <img src={sideImage} class="image-circle" alt="" />
                            <p id="sideInfo">I am a developer looking for opportunities to expand and grow. Check out my  
                             <a href="#projects" id="projects-link"> side-projects</a> below</p>
                            </center>
                        </div>
                        </div>
                    </div>
                        <div className="col-8">
                            <div class="stars">
                                <div class="twinkling">
                                    <Terminal statements={terminalInput} />
                                </div>
                            </div>
                            
                           
                       </div>
                    <div className="col-1">
                        <div class="stars">
                            <div class="twinkling">
                                     &nbsp;
                            </div>
                        </div>
                     </div>
                </div>


                <div id="main">
                    <section id="projects" className="tiles">
                        <article style={{backgroundImage: `url(${FaceFind})`}}>
                            <header className="major">
                                <h3>FaceFind</h3>
                                <p>C++, OpenCV, Qt</p>
                            </header>
                            <a href="https://github.com/MWill727/FaceFind" className="link primary"></a>
                        </article>
                        <article style={{backgroundImage: `url(${CGen})`}}>
                            <header className="major">
                                <h3>CGen</h3>
                                <p>C++, OpenCV, Qt</p>
                            </header>
                            <a href="https://github.com/MWill727/CGen" className="link primary"></a>
                        </article>
                        <article style={{backgroundImage: `url(${websitePhoto})`}}>
                            <header className="major">
                                <h3>Personal Website</h3>
                                <p>Node.js, Gatsby, Javascript, HTML, CSS</p>
                            </header>
                            <a href="https://github.com/mwill727/Personal-Website" className="link primary"></a>
                        </article>
                        <article>
                            <header className="major">
                                <h3>Coming soon</h3>
                                <p>Python, Tensorflow, Django</p>
                            </header>
                            
                        </article>

                    </section>
                   
                    
                </div>

            </Layout>
            
        )
    }
}

export default HomeIndex
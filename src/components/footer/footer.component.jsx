import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import './footer.styles.scss';



const Footer = ({ sections }) => ( 
            <div className='footer'>
                <div>
                    <center className='clothers'>
                            {
                                sections.map(({ id, title}) => (
                                    <a href={'/shop/' + title.toLowerCase()} className='clothers' key={id} > { title } </a> ) 
                                ) 
                            }
                    </center>
                </div>
                <div className='developer'>
                    <span> Produzido por Ricardo Passinho </span>
                    <br />
                    <span> Brazil - 2020 </span>
                </div>
            </div>
    )


const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
    });
     

export default withRouter(connect(mapStateToProps)(Footer));   

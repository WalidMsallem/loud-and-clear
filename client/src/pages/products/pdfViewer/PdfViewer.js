import React, { useState } from 'react'
import pdf from '../../../assets/pdf/catalogue.pdf'
import PDFViewer from 'pdf-viewer-reactjs'
import './pdfViewer.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const PdfViewer = (props) => {
    const {
      buttonLabel,
      className
    } = props;
  
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);
       
        return (           
            <div className='pdf-viewer-container'>
            <div className='pdf-view'>
                <button className='product-catalogue-link' onClick={toggle}>Our Products Catalogue</button>
                <Modal isOpen={modal} toggle={toggle} className='modal-pdf'  style={{maxWidth: '800px', width: '100%'}}>
                <div>
                <ModalBody className='modal-pdff'>
                <PDFViewer 
                        css='css'
                        canvasCss='css-concas'
                        scale={1}
                        document={{
                            url: pdf,
                        }}
                        maxScale={0.9}
                        navbarOnTop={true}
                        loader={true}
                        navigation={{
                        css:{navbarWrapper:'nav-bar',
                        pageIndicator:'page-indicator'}
                        }}
                        hideRotation={true}
                        hideZoom={true}
                    />
                </ModalBody>              
                </div>
                </Modal>
            </div>
            <div className='pdf-download'>
                <button className='product-catalogue-link'>
                     <Link className='catalogue-link'  to="/catalogue.pdf" target="_blank" download>Download our Full Calalogue</Link>
                </button>
            </div>
          </div>

         

  );
    }
   


export default PdfViewer



 {/* <PDFViewer 
                    css='css'
                    canvasCss='css-concas'
                    scale={0.6}
                    document={{
                        url: pdf,
                    }}
                    maxScale={0.8}
                    navbarOnTop={true}
                    // loader={true}
                    navigation={{
                    css:{navbarWrapper:'nav-bar',
                    pageIndicator:'page-indicator'}
                    }}
                    hideRotation={true}
                    hideZoom={false}
                /> */}
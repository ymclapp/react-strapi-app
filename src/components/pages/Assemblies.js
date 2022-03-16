import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
// import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBCardFooter, MDBBtn } from 'mdb-react-ui-kit';
import { MDBCard, MDBCardBody, MDBCardText, MDBCardHeader, MDBCardFooter } from 'mdb-react-ui-kit';



const assembAPI = 'http://localhost:1337/api/assemblies';



export default function Assemblies() {

    const [assemblies, setAssemblies] = useState({ data: [] });

    useEffect(() => {
        getAssembliesWithFetch();
    }, []);

    const getAssembliesWithFetch = async () => {
        const response = await fetch(assembAPI);
        const jsonData = await response.json({});
        setAssemblies(jsonData);
        console.log(jsonData);
    };

    return (
        <>
            <header className='assemblies-header'>
                <h1 className='assemblies-title text-center'>Assemblies</h1>
                <p className='assembly-definition justify-content' style={{margin: '2em'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Sit amet cursus sit amet dictum sit amet justo donec.
                </p>
            </header>
            <Container fluid>
                {assemblies.data.map((assembly) => (
                    <MDBCard style={{ maxWidth: '60em', padding: '2em', margin: '2em' }}>

                        <MDBCardHeader key={assembly.id}>
                            <a 
                            href={assembly.attributes.assemblyPageLink} 
                            rel="noopener noreferrer" 
                            target="_blank"
                            style={{textDecoration: 'none'}}
                            >
                                <h2>{assembly.attributes.assemblyName}</h2>
                                </a>

                        </MDBCardHeader>

                        <MDBCardBody>
                            {/* <MDBCardTitle>Special title treatment</MDBCardTitle> */}
                            <MDBCardText alignment='justify'>{assembly.attributes.assemblyDescription}
                            </MDBCardText>
                            <MDBCardText>
                                <a
                                    href={assembly.attributes.assemblyBrochure}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    style={{textDecoration: 'none'}}
                                >
                                    Assembly Brochure
                                </a>
                            </MDBCardText>
                        </MDBCardBody>

                        <MDBCardFooter className='assembly-chair text-muted'>
                            Chair:  {assembly.attributes.assemblyChairName} {''}
                            ({assembly.attributes.assemblyChairEmail})>
                        </MDBCardFooter>

                    </MDBCard>
                ))}
            </Container>
        </>
    );
};

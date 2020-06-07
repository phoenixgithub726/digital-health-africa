import React from 'react';


import { Card, CardBody } from '../../';
import hostpitalstyles from './Hospital.module.scss';

class Hospital extends React.Component {



    render(){
        return(
            <div className={hostpitalstyles["content"]}>
                <Card className={hostpitalstyles["card-hospital"]}>
                    <div className={hostpitalstyles["title"]}>
                        Komfo Anokye Hospital
                    </div>                        
                    <CardBody className={hostpitalstyles["card-body"]}>
                        <p>Email: admin@hms.com</p>
                        <p>Address: Colegepara, Rajbari</p>
                        <p>Phone: +0123456789</p>
                    </CardBody>
                </Card>
                <Card className={hostpitalstyles["card-hospital"]}>
                    <div className={hostpitalstyles["title"]}>
                        Boadi Hospital
                    </div>
                    <CardBody className={hostpitalstyles["card-body"]}>
                        <p>Email: admin@hms.com</p>
                        <p>Address: Colegepara, Rajbari</p>
                        <p>Phone: +0123456789</p>
                    </CardBody>
                </Card>

                <Card className={hostpitalstyles["card-hospital"]}>
                    <div className={hostpitalstyles["title"]}>
                        Asokwa Children Hospital
                    </div>
                    <CardBody className={hostpitalstyles["card-body"]}>
                        <p>Email: admin@hms.com</p>
                        <p>Address: Colegepara, Rajbari</p>
                        <p>Phone: +0123456789</p>
                    </CardBody>
                </Card>
                <Card className={hostpitalstyles["card-hospital"]}>
                    <div className={hostpitalstyles["title"]}>
                        Tech Hospital
                    </div>
                    <CardBody className={hostpitalstyles["card-body"]}>
                        <p>Email: admin@hms.com</p>
                        <p>Address: Colegepara, Rajbari</p>
                        <p>Phone: +0123456789</p>
                    </CardBody>
                </Card>
                <Card className={hostpitalstyles["card-hospital"]}>
                    <div className={hostpitalstyles["title"]}>
                        Tech Hospital
                    </div>
                    <CardBody className={hostpitalstyles["card-body"]}>
                        <p>Email: admin@hms.com</p>
                        <p>Address: Colegepara, Rajbari</p>
                        <p>Phone: +0123456789</p>
                    </CardBody>
                </Card>
                <Card className={hostpitalstyles["card-hospital"]}>
                    <div className={hostpitalstyles["title"]}>
                        Tech Hospital
                    </div>
                    <CardBody className={hostpitalstyles["card-body"]}>
                        <p>Email: admin@hms.com</p>
                        <p>Address: Colegepara, Rajbari</p>
                        <p>Phone: +0123456789</p>
                    </CardBody>
                </Card>
                <Card className={hostpitalstyles["card-hospital"]}>
                    <div className={hostpitalstyles["title"]}>
                        Tech Hospital
                    </div>
                    <CardBody className={hostpitalstyles["card-body"]}>
                        <p>Email: admin@hms.com</p>
                        <p>Address: Colegepara, Rajbari</p>
                        <p>Phone: +0123456789</p>
                    </CardBody>
                </Card>
            </div>
        )
    }
}


export default Hospital;
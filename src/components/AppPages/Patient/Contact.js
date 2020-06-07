import React, {} from 'react';
import {Card, CardBody} from '../../';
import patientstyles from './Patient.module.scss';

const Contact = ({otherUserId, individual, cDatas}) => {
    return(
      <Card className={patientstyles['list']}>
        <CardBody className={patientstyles['card-body']}>
          <table className={patientstyles['comment-list']}>
            <thead>
              <tr>
                <th>Contacts</th>
              </tr>
            </thead>
            <tbody>
              {
                cDatas && cDatas.map((ele) => {
                  return (
                    <tr key={ele.id} onClick={(e) => individual(ele)}
                      style={{backgroundColor: ele.id===otherUserId && '#ddd'}}
                    >
                      <td>{ele.name}</td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </CardBody>
      </Card>
    );
}

export default Contact;
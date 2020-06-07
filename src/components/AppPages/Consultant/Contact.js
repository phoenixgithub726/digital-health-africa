import React, {} from 'react';
import {Card, CardBody} from '../../';
import consultantstyles from './Consultant.module.scss';

const Contact = ({otherUserId, individual, pDatas}) => {
    return(
      <Card className={consultantstyles['list']}>
        <CardBody className={consultantstyles['card-body']}>
          <table className={consultantstyles['comment-list']}>
            <thead>
              <tr>
                <th>Contacts</th>
              </tr>
            </thead>
            <tbody>
              {
                pDatas && pDatas.map((ele) => {
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
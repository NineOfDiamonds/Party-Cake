import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { Input } from 'antd';
import { SucessModal } from '../modals/SucessModal';
import { MaskedInput } from 'antd-mask-input';

export const FastFormComponent = props => {
  const [fastFormContent, setFastFormContent] = useState({
      name: '',
      lastName: '',
      phone: ''
  });

  const sentData = () => {
    const newData = {
      name: getName(),
      lastName: getSecondName(),
      phone: getPhone()
    }
    console.log("данные: ", newData)
    props.successCallback(newData)
  }

  const getName = () => document.getElementById('name').value

  const getSecondName = () => document.getElementById('secondName').value

  const getPhone = () => document.getElementById('number').value

    return (
      <>
          <Input placeholder="Имя" id='name'/>
          <Input placeholder="Фамилия" id='secondName' />
          <MaskedInput mask={'+7(000)000-00-00'} id='number'/>
          {/* <Input placeholder="Номер телефона" id='number'/> */}
          <Button type="primary" onClick={sentData}>
            Отправить
          </Button>
          {/* <SucessModal/> */}
      </>
    );
};

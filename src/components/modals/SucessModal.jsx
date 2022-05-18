import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { Input } from 'antd';
import { FastFormComponent } from '../forms/FastFormComponent';

export const SucessModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const successCallback = data => {
    console.log(data);
    hideModal();
  }

  const onClickButton = () => {
    sentData();
    showModal();
  }

  const sentData = () => {
    setName();
    setSecondName();
    setPhone();
  }

  const setName = () => {
    props.successCallback(document.getElementById('name').value)
  }

  const setSecondName = () => {
    props.successCallback(document.getElementById('secondName').value)
  }

  const setPhone = () => {
    props.successCallback(document.getElementById('number').value)
  }

    return (
      <>
        <Button type="primary" onClick={showModal}>
            Отправить
        </Button>
        <Modal
          visible={isModalVisible}
          footer={[]}
          onOk={hideModal}
          onCancel={hideModal}
          style={{backgroundColor: '#FFFCF1'}}
        >
          <p style={{color: '#9D4045'}}>Ваш заказ принят!</p>
          <p>Ожидайте звонок менеджера</p>
          <p>(Если заказ принят до 12:00 - вам позвонят в день заказа)</p>
        </Modal>
      </>
    );
};
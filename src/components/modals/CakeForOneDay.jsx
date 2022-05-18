import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { Input } from 'antd';
import { FastFormComponent } from '../forms/FastFormComponent';

export const CakeForOneDay = () => {
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

    return (
      <>
        <Button type="primary" onClick={showModal}>
          Тортик за 1 день
        </Button>
        <Modal
          visible={isModalVisible}
          footer={[]}
          onOk={hideModal}
          onCancel={hideModal}
          style={{backgroundColor: '#FFFCF1'}}
        >
          <p style={{color: '#9D4045'}}>При срочном заказе к окончательной стоимости будет прибавлена фиксированная плата (+500₽)</p>
          <p>Для быстрого заказа заполните свои данные, с вами свяжется менеджер</p>
          <FastFormComponent successCallback={successCallback}/>
          <p>или</p>
          <Button>
            Создать торт самим
          </Button>
        </Modal>
      </>
    );
};

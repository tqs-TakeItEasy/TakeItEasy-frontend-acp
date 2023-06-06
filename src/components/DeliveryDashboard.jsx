import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Typography, Button } from 'antd';

const client = axios.create({
  baseURL: 'https://takeiteasy-backend-6hmgm4lh5a-no.a.run.app/api/v1',
});

const { Title } = Typography;

function DeliveryDashboard() {
  const columns = [
    {
      title: 'Delivery ID',
      dataIndex: 'packageId',
      key: 'packageId',
    },
    {
      title: 'Owner Name',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: 'Owner Email',
      dataIndex: 'userEmail',
      key: 'userEmail',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Store',
      dataIndex: 'store',
      key: 'store',
      render: (store) => store.name,
    },
    {
      title: 'Registry Date',
      dataIndex: 'registryDate',
      key: 'registryDate',
    },
    {
      title: 'Delivery Date',
      dataIndex: 'deliveryDate',
      key: 'deliveryDate',
    },
    {
      title: 'PickUp Date',
      dataIndex: 'pickupDate',
      key: 'pickupDate',
    },
    {
      title: '',
      key: 'action',
      render: (text, record) => (
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"8px"}}>
          <Button onClick={() => handleDeliveryDateUpdate(record)} style={{marginRight:"5%"}}>Register</Button>
          <Button onClick={() => handlePickupDateUpdate(record)} style={{marginRight:"5%"}}>Hand Out</Button>
        </div>
      ),
    },
  ];

  const dataSource = [];

  const [data, setData] = useState(dataSource);
  const fetchData = async () => {
    const response = await client.get('/deliveries/point/1/');
    setData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeliveryDateUpdate = async (record) => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0]; // Extract date part
  
    try {
      // Make PUT request to update the delivery
      await client.put('/deliveries/update/', {
        // Pass the updated delivery object in the request body
        ...record,
        deliveryDate: formattedDate,
      });
  
      // Update the local dataSource with the updatedData
      fetchData();
    } catch (error) {
      console.error('Error updating delivery:', error);
    }
  };

  const handlePickupDateUpdate = async (record) => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0]; // Extract date part
  
    try {
      // Make PUT request to update the delivery
      await client.put('/deliveries/update/', {
        // Pass the updated delivery object in the request body
        ...record,
        pickupDate: formattedDate,
      });
  
      // Update the local dataSource with the updatedData
      fetchData();
    } catch (error) {
      console.error('Error updating delivery:', error);
    }
  };


  return (
    <div style={{ textAlign: 'center' }}>
      <Title level={1}>[ Deliveries ]</Title>
      <Table
        columns={columns}
        dataSource={data}
        pagination={true}
        style={{
          width: '100%',
          position: 'relative',
          left: '50%',
          transform: 'translate(-50%)',
          paddingTop: '3em',
        }}
        rowKey="packageId"
      />
    </div>
  );
}

export default DeliveryDashboard;

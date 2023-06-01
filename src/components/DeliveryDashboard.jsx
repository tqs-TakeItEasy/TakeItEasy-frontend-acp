import { useState, useEffect } from 'react';
import axios from 'axios'
import { Table, Typography } from 'antd'

const client = axios.create({
    baseURL: 'http://localhost:8080/api/v1/',
});

const { Title, Paragraph } = Typography;

function DeliveryDashboard() {
    const columns = [
        {
            title: 'Delivery ID',
            dataIndex: 'id',
            key: 'id',
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
            dataIndex: 'registeryDate',
            key: 'registeryDate',
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
    ]
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
    
    return (
      <div style={{
        textAlign: 'center',
      }}> 
        <Title level={1}>[ Deliveries ]</Title>
        <Table 
            columns={columns}
            dataSource={data}
            pagination={true}
            style={{
              width: '90%',
              position: 'relative',
              left: '50%',
              transform: 'translate(-50%)',
              paddingTop: '3em',
            }}
        />
      </div>
    )
}

export default DeliveryDashboard
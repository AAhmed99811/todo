import { Card, Space } from 'antd';
const Cards = ({ title }) => {
    return (
        <div>
            <Card title={title} extra={<a href="#">More</a>} style={{
                width: 400,
            }}>
                <li>hi</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </Card>
        </div>
    );
}

export default Cards;
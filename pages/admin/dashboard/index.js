import CountItemDboard from '@/components/admin/count-item-dboard/count-item-dboard';
import { FINDER, PROVIDER } from '@/config/userType';
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Tổng bài đăng',
        },
    },
};

const labels = ['Tháng 1', 'Tháng 2'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Bản nháp',
            data: [
                100, 142
            ],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Đang tuyển',
            data: [
                100, 142
            ],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

const Index = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-3'>
                    <CountItemDboard
                        count={100}
                        text="Người đăng"
                        icon={<i className="fas fa-users"></i>}
                        background="bg-info"
                        link={`/admin/users?user_type=${PROVIDER}`}
                    ></CountItemDboard>
                </div>
                <div className='col-md-3'>
                    <CountItemDboard
                        count={100}
                        text="Người tìm"
                        icon={<i className="fas fa-users"></i>}
                        background="bg-success"
                        link={`/admin/users?user_type=${FINDER}`}
                    ></CountItemDboard>
                </div>
                <div className='col-md-3'>
                    <CountItemDboard
                        count={100}
                        text="Báo cáo vi phạm"
                        icon={<i className="fas fa-users"></i>}
                        background="bg-warning"
                        link={`/admin/report`}
                    ></CountItemDboard>
                </div>
                <div className='col-md-3'>
                    <CountItemDboard
                        count={100}
                        text="Báo lỗi hệ thống"
                        icon={<i className="fas fa-users"></i>}
                        background="bg-danger"
                        link={`/admin/bug-report`}
                    ></CountItemDboard>
                </div>
                <div className='col-md-3'>
                    <CountItemDboard
                        count={100000}
                        text="Bài đăng"
                        icon={<i className="fas fa-users"></i>}
                        background="bg-secondary"
                        link={`/admin/products`}
                    ></CountItemDboard>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='card'>
                        <div className='card-header'><b>Tin đăng</b></div>
                        <div className='card-body'>
                            <Bar
                                options={options}
                                data={data}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;

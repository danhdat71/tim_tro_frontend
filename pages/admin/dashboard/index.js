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
    ArcElement,
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import { getChartRound, getConfigChartNormal } from '@/config/admin/chartJs';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
);

const labels = [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
];

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

export const data2 = {
    labels,
    datasets: [
        {
            label: 'Phòng trọ',
            data: [
                122, 121
            ],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Nhà nguyên căn',
            data: [
                122, 122
            ],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
            label: 'Ở ghép',
            data: [
                122, 122
            ],
            backgroundColor: '#17a2b8',
        },
        {
            label: 'Sleepbox',
            data: [
                122, 122
            ],
            backgroundColor: 'Orange',
        },
    ],
};

export const data3 = {
    labels,
    datasets: [
        {
            label: 'Người đăng',
            data: [
                122, 121
            ],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Người tìm',
            data: [
                122, 122
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
                        icon={<i className="fas fa-flag"></i>}
                        background="bg-warning"
                        link={`/admin/report`}
                    ></CountItemDboard>
                </div>
                <div className='col-md-3'>
                    <CountItemDboard
                        count={100}
                        text="Báo lỗi hệ thống"
                        icon={<i className="fas fa-bug"></i>}
                        background="bg-danger"
                        link={`/admin/bug-report`}
                    ></CountItemDboard>
                </div>
                <div className='col-md-3'>
                    <CountItemDboard
                        count={100000}
                        text="Bài đăng"
                        icon={<i className="fas fa-file-alt"></i>}
                        background="bg-secondary"
                        link={`/admin/products`}
                    ></CountItemDboard>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='card'>
                        <div className='card-header'><b>Tổng phân loại bài đăng</b></div>
                        <div className='card-body'>
                            <Pie
                                data = {
                                    getChartRound([
                                        {label : 'Phòng trọ', value : 100},
                                        {label : 'Nhà nguyên căn', value : 200}
                                    ])
                                } 
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='card'>
                        <div className='card-header'><b>Tin đăng</b></div>
                        <div className='card-body'>
                            <Bar
                                options={getConfigChartNormal('Tin đăng')}
                                data={data}
                            />
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='card'>
                        <div className='card-header'><b>Phân loại bài đăng</b></div>
                        <div className='card-body'>
                            <Bar
                                options={getConfigChartNormal('Phân loại bài đăng')}
                                data={data2}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='card'>
                        <div className='card-header'><b>Lượt đăng ký</b></div>
                        <div className='card-body'>
                            <Bar
                                options={getConfigChartNormal('Lượt đăng ký')}
                                data={data3}
                            />
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='card'>
                        <div className='card-header'><b>Lượt hủy tài khoản</b></div>
                        <div className='card-body'>
                            <Bar
                                options={getConfigChartNormal('Lượt hủy tài khoản')}
                                data={data3}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;

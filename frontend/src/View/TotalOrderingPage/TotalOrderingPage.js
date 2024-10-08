
import React, { useState, useEffect } from "react";

import img from './hanger.png'
import './TotalOrderingPage.css'

import OrderCard from '../../Component/OrderCard/OrderCard'
import back from './back.jpg'
import { Link } from 'react-router-dom'

import Header from '../../Component/Header/Header'
import axios from "axios";
import moment from "moment";
import axiosInstance from "../../axiosConfing";


// const CardData = [
//     {
//         id: "1",
//         category: "Shirt",
//         time: "5:30pm",
//         name: "Shivkumar Loharkar"
//     },
//     {
//         id: "2",
//         category: "Pant",
//         time: "4:40pm",
//         name: "Jalindar Bhapkar"
//     },
//     {
//         id: "3",
//         category: "Kurta",
//         time: "4:20pm",
//         name: "Tushar Kothimbire"
//     },
//     {
//         id: "4",
//         category: "Pant",
//         time: "3:00pm",
//         name: "prakash Jadhav"
//     },
//     {
//         id: "5",
//         category: " Shirt",
//         time: "2:00pm",
//         name: " Rahul Kulkarni"

//     }
// ]


export default function TotalOrderingPage() {
    const [startDate, setStartDate] = useState("");
    const [enddate, setEnddate] = useState("");


    const [search, setSearch] = useState("");


    // get allorderin api call

    const [getAllData, setGetAllData] = useState([]);
    const getData = async () => {
        const getNote = await axiosInstance.get(
            `orderroutes/getallorder`
        );
        setGetAllData(getNote.data.data);
    };
    console.log(getAllData);



    // const searchData = getAllData.filter((data) => {
    //     const customerName = data.customer_id?.name || "Unknown Customer";
    //     const createdAt = data.createdAt || "";
    //     return (
    //         customerName.toLowerCase().includes(search.toLowerCase()) ||
    //         data.cloth_type.toLowerCase().includes(search.toLowerCase()) ||
    //         moment(createdAt).format("DD MMM YYYY").includes(search.toLowerCase())
    //     );
    // });

    useEffect(() => {
        getData();
    }, []);

    // const [filterorders, setFilterorders] = useState([])

    // const Datefilter = () => {
    //     const firstdate = moment(startDate).startOf("day")
    //     const lastDate = moment(enddate).endOf("day")

    //     if (!firstdate.isValid() || !lastDate.isValid()) {
    //         alert('Please enter valid dates');
    //         return;
    //     }
    //     const filtered = getAllData.filter(order => {
    //         const orderDate = moment(order.createdAt).startOf("day")
    //         return orderDate.isBetween(firstdate, lastDate, null, '[]'); // Inclusive
    //     });

    //     console.log(filtered)

    //     setFilterorders(filtered)


    // }

    // Clear search input
    const clearSearch = () => {
        setSearch("");
    };

    // Clear date input
    const clearDateFilters = () => {
        setStartDate("");
        setEnddate("");
    };



    const [filterData, setFilterData] = useState([]);

    const filterDataFn = () => {
        let filtered = getAllData;

        console.log('Before Filtering:', filtered);

        // Apply search filter
        if (search) {
            filtered = filtered.filter((data) => {
                const customerName = data.customer_id?.name || "Unknown Customer";
                const createdAt = data.createdAt || "";
                return (
                    customerName.toLowerCase().includes(search.toLowerCase()) ||
                    moment(createdAt).format("DD MMM YYYY").includes(search.toLowerCase())
                );
            });
        }

        console.log('After Search Filtering:', filtered);

        // Apply date range filter
        if (startDate && enddate) {
            const firstDate = moment(startDate).startOf("day");
            const lastDate = moment(enddate).endOf("day");

            if (!firstDate.isValid() || !lastDate.isValid()) {
                alert('Please enter valid dates');
                return;
            }

            filtered = filtered.filter(order => {
                const orderDate = moment(order.createdAt).startOf("day");
                return orderDate.isBetween(firstDate, lastDate, null, '[]'); // Inclusive
            });
        }

        console.log('After Date Filtering:', filtered);

        setFilterData(filtered);
    };

    useEffect(() => {
        filterDataFn();
    }, [search, startDate, enddate, getAllData]);


    return (
        <>
            <Header />
            <Link to={"/home"} className="link">
                <div className="profile-back">
                    <img src={back} alt="" className="profile-back-img" />
                </div>
            </Link>
            <div className='MainBody'>

                <div className="Invoice-input">
                    <div className="TMain">
                        <img src={img} alt="" className="invoice-icon" />
                        <input
                            type="text"
                            className="SearchO "
                            placeholder="Total Order"
                            onChange={(e) => {
                                setSearch(e.target.value);
                            }}
                        />
                    </div>
                    <div className="input">  Start Date: <input className="" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} /></div>
                    <div className="input">  Last Date: <input className="" type="date" value={enddate} onChange={(e) => setEnddate(e.target.value)} /></div>
                    <div className="input"> <button className="buttonC" onClick={clearDateFilters} >Clear date</button></div>
                    {/* <button className="searchData input" onClick={clearSearch} >clear search</button> */}
                   




                </div>




                {/* 
                <div className="invoice-input">
                    <img src={img} alt="" className="invoice-icon" />
                    <input
                        type="text"
                        className="invoice-inputs"
                        placeholder="Today Orders"
                    />
                </div> */}
                <hr className='HR' />
                <div className="CardBody">
                    {
                        filterData.reverse().map((data) => {
                            // const time = moment(data.createdAt).format('LT');

                            const date = (moment(data.createdAt).format('l'))
                            const customerName = data.customer_id?.name || "Unknown Customer";
                            const customerNo = data.customer_id?.phone || "Unknown Customer";

                            return (

                                <OrderCard key={data._id} cloth_type={data.cloth_type} time={date} name={customerName}no={customerNo} id={data._id} />
                            )
                        })


                    }

                    {/* {
                        searchData.reverse().map((data) => {
                            // const time = moment(data.createdAt).format('LT');

                            const date = (moment(data.createdAt).format(" MMMM Do YYYY"))
                            const customerName = data.customer_id?.name || "Unknown Customer";

                            return (

                                <OrderCard key={data._id} cloth_type={data.cloth_type} time={date} name={customerName} id={data._id} />
                            )
                        })
                    } */}


                </div>
            </div>
        </>
    )
}

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./InvoiceInfo.css";
import Header from "./../../Component/Header/Header";
import { Link } from "react-router-dom";
import back from "./../../assets/Back/back.png";
import { useParams } from "react-router-dom";
import logo from "./../../assets/Login/logo.png";
import moment from "moment"


function InvoiceInfo() {
  const { id } = useParams();
  console.log(id);

  const [getAllData, setGetAllData] = useState([]);
  const getData = async () => { 
    const getNote = await axios.get(
      `http://localhost:5555/api/orderroutes/getallorder`
    );
    setGetAllData(getNote.data.data);
  };
  console.log(getAllData);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />

      <div className="invoiceInfo">
        <Link to={"/invoice"} className="link">
          <div className="profile-back">
            <img src={back} alt="" className="profile-back-img" />
            
          </div>
        </Link>

        {getAllData.map((data) => {
          const date = (moment(data.createdAt).format("DD MMM YYYY"))
          if (data._id == id)

            return (
              <>
                <div className="invoiceInfo-box">
                  <img src={logo} alt="" className="invoiceInfo-box-logo-img" />

                  <p className="invoiceInfo-box-p">
                    Shrigonda, Shrigonda <br /> Ahmednagar, Maharastra,414402{" "}
                    <br /> Ph:5133145125
                  </p>
                  <div className="invoiceInfo-box-info">
                    <div className="invoiceInfo-box-name-para">
                      <p className="invoiceInfo-box-name">Bill No: 2
                        {/* {data.order} */}
                      </p>
                      <p className="invoiceInfo-box-name">{date}</p>
                    </div>
                    <p className="invoiceInfo-box-name-2">
                      Bill To: {data.customer_id.name}
                    </p>

                    <div className="invoiceInfo-box-color-para">
                      <p className="invoiceInfo-box-color-para-p">#Item</p>
                      <p className="invoiceInfo-box-color-para-p">Qty</p>
                      {/* <p className="invoiceInfo-box-color-para-p">Date</p> */}
                      <p className="invoiceInfo-box-color-para-p">Amount</p>
                    </div>

                    <div className="invoiceInfo-box-color-para-info">
                      <p className="invoiceInfo-box-color-para-p">
                        1.{data.cloth_type}
                      </p>
                      <p className="invoiceInfo-box-color-para-p">
                        {data.quantity}
                      </p>
                      {/* <p className="invoiceInfo-box-color-para-p">
                        {date}
                      </p> */}
                      <p className="invoiceInfo-box-color-para-p">
                        {data.actualprice}/-
                      </p>
                    </div>


                    <div className="invoiceInfo-box-color-para">
                      <h4 className="invoiceInfo-box-color-para-h">Discount</h4>
                    </div>

                    <div className="invoiceInfo-box-color-para-info">
                      <p className="invoiceInfo-box-color-para-p">
                        Price:{data.actualprice}/- <br />
                        <br /> Discount:{data.discount}%
                      </p>
                      <p className="invoiceInfo-box-color-para-p">
                        CGST@ {data.cgst}%: {data.cgstprice} <br />
                        SGST@ {data.sgst}%: {data.sgstprice}
                      </p>
                    </div>

                    <div className="invoiceInfo-box-color-para2">
                      <p className="invoiceInfo-box-color-para-p2">
                        Total Amount:
                        {data.total}
                        /-
                      </p>
                    </div>
                  </div>


                  <div className="invoiceInfo-box-color-para-info2">
                    <button className="invoiceInfo-btn">Print Bill</button>
                    <button className="invoiceInfo-btn">Share Bill</button>
                  </div>
                </div>
              </>
            );
        })}
      </div>
    </>
  );
}

export default InvoiceInfo;

import React, { useState } from "react";
import "../styles/PaymentPage.css"; // Add your CSS file for styling

const PaymentPage = () => {
  const [popup,setPopup] = useState(false);
  // Sample data for withdrawals (this could come from your API)
  const withdrawalHistory = [
    {
      id: 1,
      userName: " Doe",
      accountNumber: "123456789",
      accountType: "Savings",
      date: "2024-10-01",
      amount: 100,
      status: "Completed",
    },
    {
      id: 1,
      userName: "John Doe",
      accountNumber: "123456789",
      accountType: "Savings",
      date: "2024-10-01",
      amount: 100,
      status: "Completed",
    },
    {
      id: 1,
      userName: "John Doe",
      accountNumber: "123456789",
      accountType: "Savings",
      date: "2024-10-01",
      amount: 100,
      status: "Completed",
    },
    {
      id: 1,
      userName: "John Doe",
      accountNumber: "123456789",
      accountType: "Savings",
      date: "2024-10-01",
      amount: 100,
      status: "Completed",
    },
    {
      id: 1,
      userName: "John Doe",
      accountNumber: "123456789",
      accountType: "Savings",
      date: "2024-10-01",
      amount: 100,
      status: "Completed",
    },
    {
      id: 1,
      userName: "John Doe",
      accountNumber: "123456789",
      accountType: "Savings",
      date: "2024-10-01",
      amount: 100,
      status: "Completed",
    },
    {
      id: 1,
      userName: "John Doe",
      accountNumber: "123456789",
      accountType: "Savings",
      date: "2024-10-01",
      amount: 100,
      status: "Completed",
    },
    {
      id: 2,
      userName: "Jane Smith",
      accountNumber: "987654321",
      accountType: "Current",
      date: "2024-09-25",
      amount: 150,
      status: "Pending",
    },
    {
      id: 3,
      userName: "Michael Johnson",
      accountNumber: "456123789",
      accountType: "Savings",
      date: "2024-09-20",
      amount: 200,
      status: "Completed",
    },
  ];

  // Sample financial data
  const withdrawableAmount = 500;
  const pendingAmount = 200;
  const totalEarnings = 1200;

  return (
    <div className="withdrawal-page">
      <h3 className="right_box_heading">Payments</h3>

      <div className="financial-boxes">
        <div className="financial-box">
          <h3>Withdrawable Amount</h3>
          <p>${withdrawableAmount}</p>
          <div className="financial-box-bottom">
            <small>You can withdraw this amount</small>
            <button className="withdraw-button" onClick={()=>setPopup(true)}>Withdraw</button>
          </div>
        </div>

        <div className="financial-box">
          <h3>Pending Amount</h3>
          <p>${pendingAmount}</p>
          <small>Waiting for approval</small>
        </div>

        <div className="financial-box">
          <h3>Total Earnings</h3>
          <p>${totalEarnings}</p>
          <small>Your total earnings from teaching</small>
        </div>
      </div>
      <div className="payment-history">
        <h3>Withdrawal History</h3>
        <div className="table">
          <table className="withdrawal-history-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>User Name</th>
                <th>Account Number</th>
                <th>Account Type</th>
                <th>Date</th>
                <th>Amount ($)</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {withdrawalHistory.map((withdrawal, index) => (
                <tr key={withdrawal.id}>
                  <td>{index + 1}</td>
                  <td>{withdrawal.userName}</td>
                  <td>{withdrawal.accountNumber}</td>
                  <td>{withdrawal.accountType}</td>
                  <td>{withdrawal.date}</td>
                  <td>{withdrawal.amount}</td>
                  <td className={withdrawal.status.toLowerCase()}>
                    {withdrawal.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className={popup ? "withdraw_popup_container" : " popup_hide "}>
          <div className="withdraw_popup">
            <span className="cross_icon">
              <i
                className="fa-solid fa-xmark"
                onClick={() => setPopup(false)}
              ></i>
            </span>
            <h2>Withdraw Balance</h2>
            <p>Write your withdraw details</p>
            <div className="withdraw_detail_box">
              <div className="input_box">
                <span>Transfer to</span>
                <select
                  name="accountType"
                  id="method"
                  // onChange={handleChange}
                  // value={withdrawDetail.accountType}
                >
                  <option value="easypaisa">easypaisa</option>
                  <option value="jazzcash">jazzcash</option>
                  <option value="bank">bank account</option>
                </select>
              </div>

              <div className="input_box">
                <span>Account Holder Name</span>
                <input
                  type="text"
                  placeholder="Account holder name"
                  name="accountName"
                  // onChange={handleChange}
                  // value={withdrawDetail.accountName}
                />
              </div>

              <div className="input_box">
                <span>Account Number</span>
                <input
                  type="number"
                  placeholder="Enter account number"
                  name="accountNumber"
                  // onChange={handleChange}
                  // value={withdrawDetail.accountNumber}
                />
              </div>

              <div className="input_box amount">
                <span>Amount Withdraw</span>
                <span>$300</span>
                {/* <span>${earning.withdrawableBalane}</span> */}
              </div>
            </div>
            <input
              type="hidden"
              name="withdrawAmount"
              // value={withdrawDetail.withdrawAmount}
              readOnly
            />

            <div className="btn_box">
              <button
                type="button"
                className="cancel"
                onClick={() => setPopup(false)}
              >
                Cancel
              </button>
              <button type="submit" className="withdraw" 
              // onClick={handleSubmit}
              >
                Confirm & Withdraw
              </button>
            </div>
            <p className="note">
              Please note withdraw minimum amount $25 per withdraw and cannot be
              undone after withraw. it may take 7 business days to process
              payment.
            </p>
          </div>
        </div>
    </div>
  );
};

export default PaymentPage;

import React, { useState } from "react";
import "../styles/MessagingApp.css";
import Img from "../../assets/teacher-2.jpg";
const MessagingApp = () => {
  const [openChat, setOpenChat] = useState(false);

  return (
    <div className="messages_container">
      <h3 className="right_box_heading">Messages</h3>
      <div className="messages_box">
        <div className={`message_box_left ${openChat ? "hide_left" : ""}`}>
          <div className="user_chat" onClick={() => setOpenChat(true)}>
            <div className="profileImg">
              <img src={Img} alt="" />
            </div>
            <div className="username">
              <span>Mehroz</span>
              <p className="user_lastmessage">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, quod.
              </p>
            </div>
          </div>
          <div className="user_chat" onClick={() => setOpenChat(true)}>
            <div className="profileImg">
              <img src={Img} alt="" />
            </div>
            <div className="username">
              <span>Mehroz</span>
              <p className="user_lastmessage">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, quod.
              </p>
            </div>
          </div>
          <div className="user_chat" onClick={() => setOpenChat(true)}>
            <div className="profileImg">
              <img src={Img} alt="" />
            </div>
            <div className="username">
              <span>Mehroz</span>
              <p className="user_lastmessage">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, quod.
              </p>
            </div>
          </div>
          <div className="user_chat" onClick={() => setOpenChat(true)}>
            <div className="profileImg">
              <img src={Img} alt="" />
            </div>
            <div className="username">
              <span>Mehroz</span>
              <p className="user_lastmessage">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, quod.
              </p>
            </div>
          </div>
          <div className="user_chat" onClick={() => setOpenChat(true)}>
            <div className="profileImg">
              <img src={Img} alt="" />
            </div>
            <div className="username">
              <span>Mehroz</span>
              <p className="user_lastmessage">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, quod.
              </p>
            </div>
          </div>
          <div className="user_chat" onClick={() => setOpenChat(true)}>
            <div className="profileImg">
              <img src={Img} alt="" />
            </div>
            <div className="username">
              <span>Mehroz</span>
              <p className="user_lastmessage">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, quod.
              </p>
            </div>
          </div>
          <div className="user_chat" onClick={() => setOpenChat(true)}>
            <div className="profileImg">
              <img src={Img} alt="" />
            </div>
            <div className="username">
              <span>Mehroz</span>
              <p className="user_lastmessage">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, quod.
              </p>
            </div>
          </div>
          <div className="user_chat" onClick={() => setOpenChat(true)}>
            <div className="profileImg">
              <img src={Img} alt="" />
            </div>
            <div className="username">
              <span>Mehroz</span>
              <p className="user_lastmessage">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, quod.
              </p>
            </div>
          </div>

          {/* Add more chats as needed */}
        </div>
        <div className={`message_box_right ${openChat ? "" : "hide_right"}`}>
          <div className="message_box_right_top">
            <span className="back_btn" onClick={() => setOpenChat(false)}>
              <i class="fa-solid fa-arrow-left"></i>
            </span>
            <div className="profileImg">
              <img src={Img} alt="" />
            </div>
            <div className="name">Mehroz Farooq</div>
          </div>
          <div className="message">
            <p className="other">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              necessitatibus incidunt recusandae eum itaque provident ea
              voluptate iusto sint vitae? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Placeat eaque velit quidem eveniet distinctio
              obcaecati quo non culpa consequuntur nemo aut fugiat ea,
              temporibus tenetur quaerat hic? Dolor, assumenda hic.
            </p>
            <p className="myself">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              necessitatibus incidunt recusandae eum itaque provident ea
              voluptate iusto sint vitae? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Placeat eaque velit quidem eveniet distinctio
              obcaecati quo non culpa consequuntur nemo aut fugiat ea,
              temporibus tenetur quaerat hic? Dolor, assumenda hic.
            </p>
          </div>
          <div className="message_box_right_bottom">
            <div className="input">
                <input type="text" placeholder="type message here..." />
            </div>
            <button className="send_btn">send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagingApp;

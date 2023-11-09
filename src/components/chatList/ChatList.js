import React, { Component } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";
import Aftab from "../../images/aftab.jpg";
import Faizan from "../../images/faizan.jpeg";
import Faizan1 from "../../images/faizan1.jpeg";
import Faizan2 from "../../images/faizan2.jpeg";

export default class ChatList extends Component {
  allChatUsers = [
    {
      image:
      Aftab,
      id: 1,
      name: "Aftab ahmed",
      active: true,
      isOnline: true,
    },
    {
      image:
        Faizan,
      id: 2,
      name: "Faizan Hameed",
      active: false,
      isOnline: false,
    },
    {
      image:
        Faizan1,
      id: 3,
      name: "Faizan Hameed Hameed",
      active: false,
      isOnline: false,
    },
    {
      image:
      Faizan2,
      id: 3,
      name: "Faizan Hameed Hameed",
      active: false,
      isOnline: true,
    },
    {
      image:
      Aftab,
      id: 4,
      name: "Aftab ahmed",
      active: true,
      isOnline: true,
    },
    {
      image:
      Aftab,
      id: 5,
      name: "Aftab ahmed",
      active: true,
      isOnline: true,
    },
    {
      image:
      Aftab,
      id: 6,
      name: "Aftab ahmed",
      active: true,
      isOnline: true,
    },
    {
      image:
      Faizan1,
      id: 7,
      name: "Faizan Hameed Hameed",
      active: false,
      isOnline: false,
    },
    {
      image:
      Faizan1,
      id: 8,
      name: "Faizan Hameed Hameed",
      active: true,
      isOnline: false,
    },
    {
      image:
      Faizan,
      id: 9,
      name: "Faizan Hameed Hameed",
      active: true,
      isOnline: false,
    },
    {
      image:
      Faizan2,
      id: 10,
      name: "Faizan Hameed Hameed",
      active: false,
      isOnline: false,
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
  render() {
    return (
      <div className="main__chatlist">
        <button className="btn">
          <i className="fa fa-plus"></i>
          <span>New conversation</span>
        </button>
        <div className="chatlist__heading">
          <h2>Chats</h2>
          <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </button>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

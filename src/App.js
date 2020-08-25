import React from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile.jsx';
import Post from './components/Posts.jsx'
function App() {
  const content = [{
    img:"https://picsum.photos/id/237/200/300",
    title:"Lorem ipsum",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et magnis dis parturient montes nascetur. Feugiat in fermentum posuere urna nec tincidunt praesent semper. Id diam maecenas ultricies mi eget. Est velit egestas dui id ornare arcu odio ut sem."
  },
  {
    img:"https://picsum.photos/200/300?grayscale",
    title:" sit amet",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et magnis dis parturient montes nascetur. Feugiat in fermentum posuere urna nec tincidunt praesent semper. Id diam maecenas ultricies mi eget. Est velit egestas dui id ornare arcu odio ut sem."
  },{
    img:"https://picsum.photos/200/300/?blur",
    title:"elit",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et magnis dis parturient montes nascetur. Feugiat in fermentum posuere urna nec tincidunt praesent semper. Id diam maecenas ultricies mi eget. Est velit egestas dui id ornare arcu odio ut sem."
  },{
    img:"https://i.picsum.photos/id/106/2592/1728.jpg?hmac=E1-3Hac5ffuCVwYwexdHImxbMFRsv83exZ2EhlYxkgY",
    title:"eiusmod",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et magnis dis parturient montes nascetur. Feugiat in fermentum posuere urna nec tincidunt praesent semper. Id diam maecenas ultricies mi eget. Est velit egestas dui id ornare arcu odio ut sem."
  }]
  return (
    <div>
      <Navbar/>
      <Profile/>
     <div class="post">{content.map(item =>{ return(<Post img={item.img} title={item.title} text={item.text}/>)})}</div>
    </div>
  );
}

export default App;

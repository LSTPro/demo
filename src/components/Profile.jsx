import React from 'react';
import ReactDOM from 'react-dom';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';

function Profile(){
  return(
<div class="profile">
  <div class="card" style={{width: "18rem"}}>
<img src="https://picsum.photos/seed/picsum/200/300" class="card-img-top" alt="..."/>
<div class="card-body">
  <p class="card-text">The Indian Institute of Science is a public, deemed, research university for higher education and research in science, engineering, design, and management. It is located in Bangalore, in the Indian state of Karnataka.</p>
<Fab variant = "extended">
<span>Edit Profile &nbsp;</span>
<EditIcon color="primary"/>
</Fab>
</div>
</div>
</div>
  );
}

export default Profile;

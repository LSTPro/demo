import React from 'react';
import ReactDOM from 'react-dom';
import ThumbUpAltSharpIcon from '@material-ui/icons/ThumbUpAltSharp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Fab from '@material-ui/core/Fab';
import ShareSharpIcon from '@material-ui/icons/ShareSharp';

function Post(props){
  return(
    <div class="postb">
    <div class="card mb-3" style={{maxWidth: "540px"}}>
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src={props.img} class="card-img" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.text}</p>
            <div class= "pop">
            <Fab aria-label="like">
            <ThumbUpAltSharpIcon color="primary"/>
            </Fab>
            <Fab aria-label="like" style={{marginLeft: "30px"}}>
              <FavoriteIcon color="secondary" />
            </Fab>
            <Fab aria-label="like" style={{marginLeft: "30px"}}>
              <ShareSharpIcon color="black" />
            </Fab>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Post;

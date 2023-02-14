import React from 'react';

const Music = ({service}) => {
    const { description,img } = service;
    return (
        <div class="col-4">
            <div class="card" >
  <img src={img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
        </div>
    );
};

export default Music;
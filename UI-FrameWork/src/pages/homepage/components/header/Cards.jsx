import React from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

export default function Cards() {
  return (
    <>
    
      <div className="container main-container">
      <h1 className="heading">OUR PRODUCT</h1>
      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
        <MDBCol>
          <MDBCard>
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/city/041.webp"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </MDBCardText>
              <FavoriteIcon/>
              <ShareIcon/>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/city/042.webp"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </MDBCardText>
              <FavoriteIcon/>
              <ShareIcon/>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/city/043.webp"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </MDBCardText>
              <FavoriteIcon/>
              <ShareIcon/>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/city/044.webp"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </MDBCardText>
              <FavoriteIcon/>
              <ShareIcon/>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/city/042.webp"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </MDBCardText>
              <FavoriteIcon/>
              <ShareIcon/>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/city/042.webp"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </MDBCardText>
              <FavoriteIcon/>
              <ShareIcon/>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
    </>
  
  );
}

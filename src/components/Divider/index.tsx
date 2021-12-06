import React from 'react';
import { DividerLine, Star, StarContainer } from './styled';
import star from "../../assets/star.png"

const Divider = ({
  alignment = "left",
  id,
}: {
  alignment?: any
  id?: string
}) => {
  return (
    <DividerLine id={id}>
      <StarContainer style={{ float: alignment }}>
        <Star src={star} alt="star-divider" />
        <Star src={star} alt="star-divider" />
        <Star src={star} alt="star-divider" />
        <Star src={star} alt="star-divider" />
        <Star src={star} alt="star-divider" />
      </StarContainer>
    </DividerLine>
  )
}

export default Divider;
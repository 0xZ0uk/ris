import React from 'react';
import { DividerLine, Star, StarContainer } from './styled';
import star from "../../assets/star.png"
import { Hidden } from 'react-grid-system';

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
        <Hidden xs><Star src={star} alt="star-divider" /></Hidden>
        <Hidden xs sm><Star src={star} alt="star-divider" /></Hidden>
      </StarContainer>
    </DividerLine>
  )
}

export default Divider;
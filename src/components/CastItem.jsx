import React from 'react';
import PropTypes from 'prop-types';

export const CastItem = ({ actor }) => {
  return (
    <li>
      <img
        src={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : 'https://www.drupal.org/files/project-images/broken-image.jpg'
        }
        alt={actor.name}
        width={180}
      />
      <h4>{actor.name}</h4>
      <h5>{actor.character}</h5>
    </li>
  );
};

CastItem.propTypes = {
  actor: PropTypes.shape({
    profile_path: PropTypes.string,
    name: PropTypes.string,
    character: PropTypes.string,
  }),
};

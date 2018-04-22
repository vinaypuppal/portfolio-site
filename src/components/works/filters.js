import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Link from 'gatsby-link';

import { capitalize } from 'utils';
import Icon from 'components/icon';

const FiltersComponent = ({ categories, currentCategory }) => (
  <Filters>
    {categories.map(category => (
      <Filter>
        <FilterLink
          to={`/works/${category}`}
          className={category === currentCategory ? 'active' : ''}
        >
          <Icon
            name={category === currentCategory ? 'circle-check' : 'circle-o'}
          />
          <span>{capitalize(category)}.js</span>
        </FilterLink>
      </Filter>
    ))}
  </Filters>
);

export default FiltersComponent;

FiltersComponent.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentCategory: PropTypes.string.isRequired,
};

const Filters = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  align-items: center;
  justify-content: center;
`;

const Filter = styled.li`
  margin: 15px;
  @media (max-width: 600px) {
    margin: 6px 4px;
  }
  @media (max-width: 410px) {
    margin: 6px 3px;
  }
`;

const FilterLink = styled(Link)`
  color: #666;
  display: flex;
  border: 2px solid;
  padding: 10px 20px;
  transition: all 0.25s;
  align-items: center;
  border-radius: 4px;
  user-select: none;
  text-decoration: none;
  &:hover {
    background: #f8f8f8;
  }
  &.active {
    pointer-events: none;
    color: #000;
  }
  & span {
    margin-left: 5px;
  }
  @media (max-width: 600px) {
    padding: 0.5rem;
    font-size: 14px;
  }
  @media (max-width: 410px) {
    padding: 0.5rem 2px;
  }
`;

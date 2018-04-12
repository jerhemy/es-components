import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import defaultTheme from '../../theme/defaultTheme';

/* eslint-disable no-confusing-arrow */
const TabButton = styled.button`
  color: ${props =>
    props.selected ? props.theme.colors.black : props.theme.colors.primary};
  background-color: ${props =>
    props.selected ? props.theme.colors.white : props.theme.colors.grayLighter};
  border: 1px solid ${props => props.theme.colors.grayLighter};
  display: inline-block;
  font-size: 18px;

  @media (min-width: ${props => props.theme.screenSize.desktop}) {
    background-color: ${props => props.theme.colors.white};
    border: ${props =>
      props.selected ? `1px solid ${props.theme.colors.grayLighter}` : '0px'};
    border-bottom: 0;
    color: ${props =>
      props.selected ? props.theme.colors.black : props.theme.colors.primary};
    margin: ${props =>
      props.selected ? '0px 2px -1px 2px' : '1px 4px 0px  2px'};
    z-index: ${props => (props.selected ? '1' : '0')};
    padding: 0px 10px;
    width: auto;
    flex-grow: 1;
    text-align: left;
    &:hover {
      background-color: ${props =>
        props.selected
          ? props.theme.colors.white
          : props.theme.colors.grayLighter};
    }
  }
`;

/* eslint-enable */

function Tab({ name, selected, action, children, ...props }) {
  return (
    <TabButton
      onClick={() => action(name, children)}
      selected={selected}
      aria-expanded={selected}
      {...props}
    >
      {name}
    </TabButton>
  );
}

Tab.propTypes = {
  /**
   * The name of the tab, and the displayed value
   */
  name: PropTypes.node.isRequired,
  /**
   * Whether the tab is selected and should be rendered to appear selected.
   */
  selected: PropTypes.bool,
  /**
   * The function to call when the tab is clicked
   */
  action: PropTypes.func,
  /**
   * The theme used to render the tab
   */
  theme: PropTypes.object,
  /**
   * Children to be rendered in the TabContent area.
   */
  children: PropTypes.node
};

Tab.defaultProps = {
  theme: defaultTheme
};

export default Tab;
